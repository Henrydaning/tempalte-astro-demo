### 如何用 docker-compose 测试 nginx 配置的内容

```
learn-nginx/location.conf
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

```

#### （1）测试代理，创建一个 proxy.conf

```
# 由于此处使用了proxy_pass，因此需要启动两个服务
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




```

#### （2）更新修改好的配置

```
 docker-compose up location

 docker-compose up proxy

```

### nginx 相关配置内容配置汇总

#### 1、nginx 部署静态资源服务器

（1）在 nginx 的根目录下，点击 conf 文件夹，编辑 nginx.conf 配置文件；

（2）增加 sever 配置，我这里因为还要配置前端服务器，所以就新建一个 server，并配置对应的端口

    server {
        listen       9001;
        server_name resouce;
        root  G:/resources;  #访问文件根目录
        autoindex on;  #是否浏览文件下的列表
        location / {  #是否允许跨域
            add_header Access-Control-Allow-Origin *;
        }
        add_header Cache-Control "no-cache,must-revalidate";# 是否缓存
    }

（3）在安装目录的 cmd 界面中执行命令 nginx -s reload，使更改生效。

### 2.记录一个部署问题

#### 当前的打包后文件夹和 html 文件位置说明

```
本地部署后，使用本地的容器放入文件夹可以快速访问，文件夹样式内容如下

```

[（1）当前的第一个 index.html 页面的 src 地址和资源引入](./docsimages/htmlResource.png)

这里注意一下，默认前端打包完成后，引入资源是相对 dist 文件夹，这样生成了

```
/dist/这种文件夹内容
注意文件夹从dist开始

```

这里生成一个/，表示从根目录找资源。
那么如果有多类子项目：一类前端，一类后端，比如前端：h5-all/dist/下面，

但是注意路径说明

### 相对路径和绝对路径说明学习

#### 绝对地址：相对根目录的地址（根目录大家都知道的，就是完整 url 最前边的那个啦）；

#### 相对地址：即相对当前页的地址；

注意：如果只有单斜杠，表示相对当前的根目录
/：根；

./：当前级；

../：上一级。

#### 常见问题：相对地址/使用在最前面部署 nginx

/dist/
注意：如果 nginx 中根目录相对地址就是资源，那么使用这个没有问题，但是如果这个文件夹上面有父文件夹，
这里的文件夹就不是根目录，那么默认从根目录找资源的问题就是一个需要确认的事情。

上面导致文件 html 中的引入打包后的资源都是/dist/sssss.css、/dist/chunk.js 等等，这样打包后的文件

```
--dist
---index.html
---js/xxx.js
---css/xxx.css
这里引用的时候就会出问题，index.html中资源引用不到css,js打包后的资源，解决办法，必须将index.html放入上级，不能和
js和css文件夹同级。




```

#### 部署最后线上

这里因为打包后，都是相对,打包后，默认使用了

### linux 系统：使用 zip 上传

dist.rar 不会乱码，dist.rar 转成 zip 后再上传 linux 系统就可以了，但是直接使用 windows 打包的 zip 上传 linux，文件夹解压后乱码

如果解决两种方式：将 linux 系统的编码方式设置一下；方法 2：通过先上传相关的 rar 后，在 linux 解压后查看。

# nginx.conf 文件中各个配置项的含义简析

### 注意部署的时候相对位置的坑，如果 root 根目录在 dist 下，表示所有的文件从 dist 开始，那么 dist 相当于 ip,没有位置了。所以应该给 dist 包裹一层根目录，blog，那么这样可以了

### 配置文件

- [nginx 配置文件三部分解答](https://app.yinxiang.com/shard/s37/nl/24388549/cfab0a0c-9b0a-42f0-94e4-33725087815e)

```
#http块，Nginx服务器配置中的重要部分，涉及代理、缓存和日志等功能的配置；
    http {
      access_log logs/access.log exampleLog; #表示服务日志的存放路径，exampleLog格式化指令名。
      log_format exampleLog  '$remote_addr - $remote_user [$time_local] "$request" '
    '$status $body_bytes_sent "$http_referer" '
    '"$http_user_agent"'; #输出用户IP,当地时间，获取请求状态，请求体的大小，内容，用户浏览器系统等。
	  include mime.types; #以下两项为 Nginx默认配置项
      default_type application/octet-stream; #默认下载未知类型文件

      sendfile on; #使用sendfile()传输文件，on表示开启
      keepalive_timeout 20; #设置保持连接的时间长度值
      client_header_timeout 20; #指定等待client发送一个请求头的超时时间
      client_body_timeout 20; #设置请求体的读超时时间
      reset_timedout_connection on; #关闭不响应的客户端连接
      send_timeout 20; #设置Nginx服务器响应客户端的超时时间
      gzip on; #对响应数据进行在线实时压缩
      gzip_min_length 1024; #响应文件大于1KB时才进行压缩，防止出现越压越大的情况
      gzip_buffers 4 16k; #设置压缩文件使用缓存空间的大小
      gzip_http_version 1.0; #开启Gzip功能需要最低的http版本为1.0，版本过低压缩之后有时会出现乱码
      gzip_comp_level 4; #设置压缩级别，级别（1-9）越大，压缩时间越长
      gzip_types text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png; #压缩源文件类型
      gzip_vary on; #启用压缩标识
      tcp_nopush on; #防止网络阻塞，告诉nginx在一个数据包里发送所有头文件
      port_in_redirect off; # 设置Nginx在重定向的时候不要带上端口
      server_tokens off; #隐藏Nginx服务器版本号
      proxy_ignore_client_abort on; #客户端断网时，nginx服务器不记录499错误码。

      server{


      }



```

### server 宿主机设置

#server 块开始，虚拟主机设置，使一个 Nginx 服务器运行多个网站

```
server {
    listen 16533;
    index index.php index.html;
    error_log  /var/log/nginx/error.log;
    access_log /var/log/nginx/access.log;
    root /var/www/html/dist; # 配置当前的文件夹nigix/etc配置下的目录，比如dist文件夹项目
    # 正确的部署，应该是root /var/www/html/blog;
    location / {
          index  index.html index.htm index.php;
          autoindex  off;
     }
    set $virtualdir "";
    set $realdir "";

}

```

#### location 指令的功能是用来匹配不同的 url 请求，进而对请求做不同的处理和响应

location 中比较复杂的师 location 指令的匹配顺序。
1、location 介绍
location 是 Nginx 中的块级指令(block directive),，location 指令的功能是用来匹配不同的 url 请求，进而对请求做不同的处理和响应，这其中较难理解的是多个 location 的匹配顺序，本文会作为重点来解释和说明。

开始之前先明确一些约定，我们输入的网址叫做请求 URI，nginx 用请求 URI 与 location 中配置的 URI 做匹配。

#### 2、localtion 语法

location 有两种匹配规则：

匹配 URL 类型，有四种参数可选，当然也可以不带参数。
location [ = | ~ | ~* | ^~ ] uri { … }
命名 location，用@标识，类似于定于 goto 语句块。
location @name { … }

###### location 匹配参数解释：

（1） “=” ，精确匹配

```
内容要同表达式完全一致才匹配成功
location = /abc/ {
  .....
 }

 只匹配http://abc.com/abc
#http://abc.com/abc [匹配成功]
#http://abc.com/abc/index [匹配失败]

```

（2） “~”，执行正则匹配，区分大小写。

```

location ~ /Abc/ {
  .....
}
#http://abc.com/Abc/ [匹配成功]
#http://abc.com/abc/ [匹配失败]

```

（3）“~\*”，执行正则匹配，忽略大小写

```
location ~* /Abc/ {
  .....
}
# 则会忽略 uri 部分的大小写
#http://abc.com/Abc/ [匹配成功]
#http://abc.com/abc/ [匹配成功]

```

（4）“^~”，表示普通字符串匹配上以后不再进行正则匹配。

```
location ^~ /index/ {
  .....
}
#以 /index/ 开头的请求，都会匹配上
#http://abc.com/index/index.page  [匹配成功]
#http://abc.com/error/error.page [匹配失败]
```

（5）不加任何规则时，默认是大小写敏感，前缀匹配，

```
相当于加了“~”与“^~”

location /index/ {
  ......
}
#http://abc.com/index  [匹配成功]
#http://abc.com/index/index.page  [匹配成功]
#http://abc.com/test/index  [匹配失败]
#http://abc.com/Index  [匹配失败]
# 匹配到所有uri

```

（6）“@”，nginx 内部跳转

```
location /index/ {
  error_page 404 @index_error;
}
location @index_error {
  .....
}
#以 /index/ 开头的请求，如果链接的状态为 404。则会匹配到 @index_error 这条规则上。

```

###### 3、location 匹配顺序（上面的序号越小优先级越高）

```
= > ^~ > ~ | ~* > 最长前缀匹配 > /

序号越小优先级越高
location = # 精准匹配
= 匹配优先级最高。一旦匹配成功，则不再查找其他匹配项。
location ^~ # 带参前缀匹配
^~类型表达式。一旦匹配成功，则不再查找其他匹配项。
location ~ # 正则匹配（区分大小写）
location ~* # 正则匹配（不区分大小写）
location /a # 普通前缀匹配，优先级低于带参数前缀匹配。
location / # 任何没有匹配成功的，都会匹配这里处理
```

### 6.gzip 配置压缩相关 nginx 配置内容：压缩版本和 http 版本

```
server {
    listen 12089;
    index index.php index.html;
    error_log  /var/log/nginx/error.log;
    access_log /var/log/nginx/access.log;

    root /var/www/html/gzip;# 表示根目录在html下的gzip文件下面
    gzip on;
    # http请求版本
    gzip_http_version 1.0;
    # 设置什么类型的文件需要压缩
    gzip_types text/css text/javascript application/javascript image/png image/jpeg image/gif;
    location / {
          index  index.html index.htm index.php;
          autoindex  off;
    }

}


<<<<<<< HEAD



=======
```
>>>>>>> 5a9ed4db5d4c00a1664d9b5bb2274a85ac6b22a5

### 5.nginx 配置变量和使用

```
（1）声明变量
在server，http,location等标签中使用set命令
语法：set$变量名 变量值

注意：nginx中变量必须用$开头
例如：
set $foo hello;
这里设置后使用
 echo "foo: $foo";
（2）可见性规则
location标签中声明的变量中对这个location块可见
server标签中声明的变量对server块以及server块中的所有子块可见
http标签中声明的变量对http块以及http块中的所有子块可见




```

### 6.nginx.conf 配置多个子目录
注意这里配置了root和alias是否配置都可以。
这里其实最上面配置了/之后，这个下面的test1，test3都会生效。
其实默认没有配置，但是我们有test5文件夹，访问也会生效出来。
下面没有test5,但是我们资源有所以：xxx/test5/可以找到
```
server {
    listen 4999;
    index index.php index.html;
    error_log  /var/log/nginx/error.log;
    access_log /var/log/nginx/access.log;
    root /var/www/html/apidist2;

    location / {
          index  index.html index.htm index.php;
          autoindex  off;
     }

    location /test1/ {
          index  index.html index.htm index.php;
          alias /var/www/html/apidist2/test1/;
          autoindex  on;
     }
    location /test3/ {
          index  index.html index.htm index.php;
        #   alias /var/www/html/apidist2/test2/;
          autoindex  on;
     }


}



```

### 7.root 和 alias 配置路径区别

root 用来设置根目录，而 alias 用来重置当前访问文件的目录。

```
例如：
location /img/ {
    alias /var/www/image/;
}
这里访问地址/img/的话，是访问/var/www/image/目录下

但是如下：root
location /img/ {
    root /var/www/image/;
}
这里访问地址/img/的话，是访问/var/www/image/img/目录下


```

这里需要注意的就是 location 中的路径匹配问题，root 和 alias 的区别

### 8.配置 location 的指定主页和自动跳转

```
location /react {
    alias /projects/react/;
    #指定主页
    index index.html;
    #自动跳转
    autoindex on;
  }



```

### 9.nginx 启动重启和关闭

```
关闭nginx
nginx  -s stop

重启nginx
nginx  -C  /etc/nginx/nginx.conf




```
