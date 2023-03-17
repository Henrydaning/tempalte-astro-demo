<template><div><h2 id="如何用-docker-compose-测试-nginx-配置的内容" tabindex="-1"><a class="header-anchor" href="#如何用-docker-compose-测试-nginx-配置的内容" aria-hidden="true">#</a> 如何用 docker-compose 测试 nginx 配置的内容</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>learn-nginx/location.conf
这里增加一个文件加，创建一个location.conf文件
# location [ = | ~ | ~* | ^~ ] uri { ... }

# =  精确匹配。优先级最高
# ^~ 前缀匹配，优先级其次
# ~  正则匹配，优先级再次 (~* 只是不区分大小写，不单列)
# /  通用前缀匹配，优先级再次

server {
    listen       80;
    server_name  localhost;

    root   /usr/share/nginx/html;
    index  index.html index.htm;

    # 主要是为了 shanyue 该路径，因为没有后缀名，无法确认其 content-type，会自动下载
    # 因此这里采用 text/plain，则不会自动下载
    default_type text/plain;

    # 通用匹配，所有 /xxx 任意路径都会匹配其中的规则
    # 访问 / 会发现有 X-Hello: shanyue 响应头
    # http://localhost:8100/
    location / {
        expires -1;

        add_header X-Hello shanyue;
        add_header X-Config A;

        # 所有找不到的路径都会默认走 /index.html 页面
        # cleanUrls: try_files $uri $uri.html; 可省略 .html 后缀直接访问
        try_files  $uri $uri.html $uri/index.html /index.html;
    }

    # 访问 http://localhost:8100/about.html，走该匹配路径
    location = /about.html {
        add_header X-Location =/about.html;
        add_header X-Config B;
    }

    # 访问 http://localhost:8100/hello，走该匹配路径，但此时资源不存在，返回 404
    location = /hello {
        add_header X-Location =/hello;
        add_header X-Config C;
    }

    # ~ 表示区分大小写的正则匹配
    # 该正则表示以 /shan 开头的路径
    # 访问 http://localhost:8100/shanyue，走该匹配路径，访问成功
    # 访问 http://localhost:8100/shan，走该匹配路径，访问成功
    location ~ ^/shan {
        add_header X-Config E;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-测试代理-创建一个-proxy-conf" tabindex="-1"><a class="header-anchor" href="#_1-测试代理-创建一个-proxy-conf" aria-hidden="true">#</a> （1）测试代理，创建一个 proxy.conf</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 由于此处使用了proxy_pass，因此需要启动两个服务
#
# $ docker-compose up proxy api
#
# 由于 proxy_pass 所代理的服务为 whoami，可打印出真实请求路径，可根据此进行测试

server {
    listen       80;
    server_name  localhost;

    root   /usr/share/nginx/html;
    index  index.html index.htm;

    # 建议使用此种 proxy_pass 不加 URI 的写法
    # http://localhost:8300/api1/hello -> proxy:3000/api1/hello
    location /api1 {
        # 可通过查看响应头来判断是否成功返回
        add_header X-Config A;
        proxy_pass http://api:3000;
    }

    # http://localhost:8300/api2/hello -> proxy:3000/hello
    location /api2/ {
        add_header X-Config B;
        proxy_pass http://api:3000/;
    }

    # http://localhost:8300/api3/hello -> proxy:3000/hello/hello
    location /api3 {
        add_header X-Config C;
        proxy_pass http://api:3000/hello;
    }

    # http://localhost:8300/api4/hello -> proxy:3000//hello
    location /api4 {
        add_header X-Config D;
        proxy_pass http://api:3000/;
    }
}




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-更新修改好的配置" tabindex="-1"><a class="header-anchor" href="#_2-更新修改好的配置" aria-hidden="true">#</a> （2）更新修改好的配置</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> docker-compose up location

 docker-compose up proxy

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx相关配置内容配置汇总" tabindex="-1"><a class="header-anchor" href="#nginx相关配置内容配置汇总" aria-hidden="true">#</a> nginx相关配置内容配置汇总</h2>
<h3 id="_1、nginx部署静态资源服务器" tabindex="-1"><a class="header-anchor" href="#_1、nginx部署静态资源服务器" aria-hidden="true">#</a> 1、nginx部署静态资源服务器</h3>
<p>（1）在nginx的根目录下，点击conf文件夹，编辑nginx.conf配置文件；</p>
<p>（2）增加sever配置，我这里因为还要配置前端服务器，所以就新建一个server，并配置对应的端口</p>
<pre><code>server {
    listen       9001;
    server_name resouce;
    root  G:/resources;  #访问文件根目录
    autoindex on;  #是否浏览文件下的列表
    location / {  #是否允许跨域
        add_header Access-Control-Allow-Origin *;
    }
    add_header Cache-Control &quot;no-cache,must-revalidate&quot;;# 是否缓存
}
</code></pre>
<p>（3）在安装目录的cmd界面中执行命令 nginx -s reload，使更改生效。</p>
<h2 id="_2-记录一个部署问题" tabindex="-1"><a class="header-anchor" href="#_2-记录一个部署问题" aria-hidden="true">#</a> 2.记录一个部署问题</h2>
<h3 id="当前的打包后文件夹和html文件位置说明" tabindex="-1"><a class="header-anchor" href="#当前的打包后文件夹和html文件位置说明" aria-hidden="true">#</a> 当前的打包后文件夹和html文件位置说明</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>本地部署后，使用本地的容器放入文件夹可以快速访问，文件夹样式内容如下

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./docsimages/htmlResource.png">（1）当前的第一个index.html页面的src地址和资源引入</a></p>
<p>这里注意一下，默认前端打包完成后，引入资源是相对dist文件夹，这样生成了</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/dist/这种文件夹内容
注意文件夹从dist开始

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里生成一个/，表示从根目录找资源。
那么如果有多类子项目：一类前端，一类后端，比如前端：h5-all/dist/下面，</p>
<p>但是注意路径说明</p>
<h2 id="相对路径和绝对路径说明学习" tabindex="-1"><a class="header-anchor" href="#相对路径和绝对路径说明学习" aria-hidden="true">#</a> 相对路径和绝对路径说明学习</h2>
<h3 id="绝对地址-相对根目录的地址-根目录大家都知道的-就是完整url最前边的那个啦" tabindex="-1"><a class="header-anchor" href="#绝对地址-相对根目录的地址-根目录大家都知道的-就是完整url最前边的那个啦" aria-hidden="true">#</a> 绝对地址：相对根目录的地址（根目录大家都知道的，就是完整url最前边的那个啦）；</h3>
<h3 id="相对地址-即相对当前页的地址" tabindex="-1"><a class="header-anchor" href="#相对地址-即相对当前页的地址" aria-hidden="true">#</a> 相对地址：即相对当前页的地址；</h3>
<p>注意：如果只有单斜杠，表示相对当前的根目录
/：根；</p>
<p>./：当前级；</p>
<p>../：上一级。</p>
<h3 id="常见问题-相对地址-使用在最前面部署nginx" tabindex="-1"><a class="header-anchor" href="#常见问题-相对地址-使用在最前面部署nginx" aria-hidden="true">#</a> 常见问题：相对地址/使用在最前面部署nginx</h3>
<p>/dist/
注意：如果nginx中根目录相对地址就是资源，那么使用这个没有问题，但是如果这个文件夹上面有父文件夹，
这里的文件夹就不是根目录，那么默认从根目录找资源的问题就是一个需要确认的事情。</p>
<p>上面导致文件html中的引入打包后的资源都是/dist/sssss.css、/dist/chunk.js等等，这样打包后的文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>--dist
---index.html
---js/xxx.js
---css/xxx.css
这里引用的时候就会出问题，index.html中资源引用不到css,js打包后的资源，解决办法，必须将index.html放入上级，不能和
js和css文件夹同级。




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署最后线上" tabindex="-1"><a class="header-anchor" href="#部署最后线上" aria-hidden="true">#</a> 部署最后线上</h3>
<p>这里因为打包后，都是相对,打包后，默认使用了</p>
<h2 id="linux系统-使用zip上传" tabindex="-1"><a class="header-anchor" href="#linux系统-使用zip上传" aria-hidden="true">#</a> linux系统：使用zip上传</h2>
<p>dist.rar不会乱码，dist.rar转成zip后再上传linux系统就可以了，但是直接使用windows打包的zip上传linux，文件夹解压后乱码</p>
<p>如果解决两种方式：将linux系统的编码方式设置一下；方法2：通过先上传相关的rar后，在linux解压后查看。</p>
</div></template>
