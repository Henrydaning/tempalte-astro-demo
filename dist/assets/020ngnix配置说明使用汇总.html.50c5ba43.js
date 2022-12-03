import{_ as n,o as i,c as e,d}from"./app.f24c07ef.js";const s={},l=d(`<h2 id="\u5982\u4F55\u7528-docker-compose-\u6D4B\u8BD5-nginx-\u914D\u7F6E\u7684\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u7528-docker-compose-\u6D4B\u8BD5-nginx-\u914D\u7F6E\u7684\u5185\u5BB9" aria-hidden="true">#</a> \u5982\u4F55\u7528 docker-compose \u6D4B\u8BD5 nginx \u914D\u7F6E\u7684\u5185\u5BB9</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>learn-nginx/location.conf
\u8FD9\u91CC\u589E\u52A0\u4E00\u4E2A\u6587\u4EF6\u52A0\uFF0C\u521B\u5EFA\u4E00\u4E2Alocation.conf\u6587\u4EF6
# location [ = | ~ | ~* | ^~ ] uri { ... }

# =  \u7CBE\u786E\u5339\u914D\u3002\u4F18\u5148\u7EA7\u6700\u9AD8
# ^~ \u524D\u7F00\u5339\u914D\uFF0C\u4F18\u5148\u7EA7\u5176\u6B21
# ~  \u6B63\u5219\u5339\u914D\uFF0C\u4F18\u5148\u7EA7\u518D\u6B21 (~* \u53EA\u662F\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u4E0D\u5355\u5217)
# /  \u901A\u7528\u524D\u7F00\u5339\u914D\uFF0C\u4F18\u5148\u7EA7\u518D\u6B21

server {
    listen       80;
    server_name  localhost;

    root   /usr/share/nginx/html;
    index  index.html index.htm;

    # \u4E3B\u8981\u662F\u4E3A\u4E86 shanyue \u8BE5\u8DEF\u5F84\uFF0C\u56E0\u4E3A\u6CA1\u6709\u540E\u7F00\u540D\uFF0C\u65E0\u6CD5\u786E\u8BA4\u5176 content-type\uFF0C\u4F1A\u81EA\u52A8\u4E0B\u8F7D
    # \u56E0\u6B64\u8FD9\u91CC\u91C7\u7528 text/plain\uFF0C\u5219\u4E0D\u4F1A\u81EA\u52A8\u4E0B\u8F7D
    default_type text/plain;

    # \u901A\u7528\u5339\u914D\uFF0C\u6240\u6709 /xxx \u4EFB\u610F\u8DEF\u5F84\u90FD\u4F1A\u5339\u914D\u5176\u4E2D\u7684\u89C4\u5219
    # \u8BBF\u95EE / \u4F1A\u53D1\u73B0\u6709 X-Hello: shanyue \u54CD\u5E94\u5934
    # http://localhost:8100/
    location / {
        expires -1;

        add_header X-Hello shanyue;
        add_header X-Config A;

        # \u6240\u6709\u627E\u4E0D\u5230\u7684\u8DEF\u5F84\u90FD\u4F1A\u9ED8\u8BA4\u8D70 /index.html \u9875\u9762
        # cleanUrls: try_files $uri $uri.html; \u53EF\u7701\u7565 .html \u540E\u7F00\u76F4\u63A5\u8BBF\u95EE
        try_files  $uri $uri.html $uri/index.html /index.html;
    }

    # \u8BBF\u95EE http://localhost:8100/about.html\uFF0C\u8D70\u8BE5\u5339\u914D\u8DEF\u5F84
    location = /about.html {
        add_header X-Location =/about.html;
        add_header X-Config B;
    }

    # \u8BBF\u95EE http://localhost:8100/hello\uFF0C\u8D70\u8BE5\u5339\u914D\u8DEF\u5F84\uFF0C\u4F46\u6B64\u65F6\u8D44\u6E90\u4E0D\u5B58\u5728\uFF0C\u8FD4\u56DE 404
    location = /hello {
        add_header X-Location =/hello;
        add_header X-Config C;
    }

    # ~ \u8868\u793A\u533A\u5206\u5927\u5C0F\u5199\u7684\u6B63\u5219\u5339\u914D
    # \u8BE5\u6B63\u5219\u8868\u793A\u4EE5 /shan \u5F00\u5934\u7684\u8DEF\u5F84
    # \u8BBF\u95EE http://localhost:8100/shanyue\uFF0C\u8D70\u8BE5\u5339\u914D\u8DEF\u5F84\uFF0C\u8BBF\u95EE\u6210\u529F
    # \u8BBF\u95EE http://localhost:8100/shan\uFF0C\u8D70\u8BE5\u5339\u914D\u8DEF\u5F84\uFF0C\u8BBF\u95EE\u6210\u529F
    location ~ ^/shan {
        add_header X-Config E;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-\u6D4B\u8BD5\u4EE3\u7406-\u521B\u5EFA\u4E00\u4E2A-proxy-conf" tabindex="-1"><a class="header-anchor" href="#_1-\u6D4B\u8BD5\u4EE3\u7406-\u521B\u5EFA\u4E00\u4E2A-proxy-conf" aria-hidden="true">#</a> \uFF081\uFF09\u6D4B\u8BD5\u4EE3\u7406\uFF0C\u521B\u5EFA\u4E00\u4E2A proxy.conf</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u7531\u4E8E\u6B64\u5904\u4F7F\u7528\u4E86proxy_pass\uFF0C\u56E0\u6B64\u9700\u8981\u542F\u52A8\u4E24\u4E2A\u670D\u52A1
#
# $ docker-compose up proxy api
#
# \u7531\u4E8E proxy_pass \u6240\u4EE3\u7406\u7684\u670D\u52A1\u4E3A whoami\uFF0C\u53EF\u6253\u5370\u51FA\u771F\u5B9E\u8BF7\u6C42\u8DEF\u5F84\uFF0C\u53EF\u6839\u636E\u6B64\u8FDB\u884C\u6D4B\u8BD5

server {
    listen       80;
    server_name  localhost;

    root   /usr/share/nginx/html;
    index  index.html index.htm;

    # \u5EFA\u8BAE\u4F7F\u7528\u6B64\u79CD proxy_pass \u4E0D\u52A0 URI \u7684\u5199\u6CD5
    # http://localhost:8300/api1/hello -&gt; proxy:3000/api1/hello
    location /api1 {
        # \u53EF\u901A\u8FC7\u67E5\u770B\u54CD\u5E94\u5934\u6765\u5224\u65AD\u662F\u5426\u6210\u529F\u8FD4\u56DE
        add_header X-Config A;
        proxy_pass http://api:3000;
    }

    # http://localhost:8300/api2/hello -&gt; proxy:3000/hello
    location /api2/ {
        add_header X-Config B;
        proxy_pass http://api:3000/;
    }

    # http://localhost:8300/api3/hello -&gt; proxy:3000/hello/hello
    location /api3 {
        add_header X-Config C;
        proxy_pass http://api:3000/hello;
    }

    # http://localhost:8300/api4/hello -&gt; proxy:3000//hello
    location /api4 {
        add_header X-Config D;
        proxy_pass http://api:3000/;
    }
}




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u66F4\u65B0\u4FEE\u6539\u597D\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u66F4\u65B0\u4FEE\u6539\u597D\u7684\u914D\u7F6E" aria-hidden="true">#</a> \uFF082\uFF09\u66F4\u65B0\u4FEE\u6539\u597D\u7684\u914D\u7F6E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> docker-compose up location

 docker-compose up proxy

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx\u76F8\u5173\u914D\u7F6E\u5185\u5BB9\u914D\u7F6E\u6C47\u603B" tabindex="-1"><a class="header-anchor" href="#nginx\u76F8\u5173\u914D\u7F6E\u5185\u5BB9\u914D\u7F6E\u6C47\u603B" aria-hidden="true">#</a> nginx\u76F8\u5173\u914D\u7F6E\u5185\u5BB9\u914D\u7F6E\u6C47\u603B</h2><h3 id="_1\u3001nginx\u90E8\u7F72\u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_1\u3001nginx\u90E8\u7F72\u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668" aria-hidden="true">#</a> 1\u3001nginx\u90E8\u7F72\u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668</h3><p>\uFF081\uFF09\u5728nginx\u7684\u6839\u76EE\u5F55\u4E0B\uFF0C\u70B9\u51FBconf\u6587\u4EF6\u5939\uFF0C\u7F16\u8F91nginx.conf\u914D\u7F6E\u6587\u4EF6\uFF1B</p><p>\uFF082\uFF09\u589E\u52A0sever\u914D\u7F6E\uFF0C\u6211\u8FD9\u91CC\u56E0\u4E3A\u8FD8\u8981\u914D\u7F6E\u524D\u7AEF\u670D\u52A1\u5668\uFF0C\u6240\u4EE5\u5C31\u65B0\u5EFA\u4E00\u4E2Aserver\uFF0C\u5E76\u914D\u7F6E\u5BF9\u5E94\u7684\u7AEF\u53E3</p><pre><code>server {
    listen       9001;
    server_name resouce;
    root  G:/resources;  #\u8BBF\u95EE\u6587\u4EF6\u6839\u76EE\u5F55
    autoindex on;  #\u662F\u5426\u6D4F\u89C8\u6587\u4EF6\u4E0B\u7684\u5217\u8868
    location / {  #\u662F\u5426\u5141\u8BB8\u8DE8\u57DF
        add_header Access-Control-Allow-Origin *;
    }
    add_header Cache-Control &quot;no-cache,must-revalidate&quot;;# \u662F\u5426\u7F13\u5B58
}
</code></pre><p>\uFF083\uFF09\u5728\u5B89\u88C5\u76EE\u5F55\u7684cmd\u754C\u9762\u4E2D\u6267\u884C\u547D\u4EE4 nginx -s reload\uFF0C\u4F7F\u66F4\u6539\u751F\u6548\u3002</p><h2 id="_2-\u8BB0\u5F55\u4E00\u4E2A\u90E8\u7F72\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-\u8BB0\u5F55\u4E00\u4E2A\u90E8\u7F72\u95EE\u9898" aria-hidden="true">#</a> 2.\u8BB0\u5F55\u4E00\u4E2A\u90E8\u7F72\u95EE\u9898</h2><h3 id="\u5F53\u524D\u7684\u6253\u5305\u540E\u6587\u4EF6\u5939\u548Chtml\u6587\u4EF6\u4F4D\u7F6E\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5F53\u524D\u7684\u6253\u5305\u540E\u6587\u4EF6\u5939\u548Chtml\u6587\u4EF6\u4F4D\u7F6E\u8BF4\u660E" aria-hidden="true">#</a> \u5F53\u524D\u7684\u6253\u5305\u540E\u6587\u4EF6\u5939\u548Chtml\u6587\u4EF6\u4F4D\u7F6E\u8BF4\u660E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u672C\u5730\u90E8\u7F72\u540E\uFF0C\u4F7F\u7528\u672C\u5730\u7684\u5BB9\u5668\u653E\u5165\u6587\u4EF6\u5939\u53EF\u4EE5\u5FEB\u901F\u8BBF\u95EE\uFF0C\u6587\u4EF6\u5939\u6837\u5F0F\u5185\u5BB9\u5982\u4E0B

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./docsimages/htmlResource.png">\uFF081\uFF09\u5F53\u524D\u7684\u7B2C\u4E00\u4E2Aindex.html\u9875\u9762\u7684src\u5730\u5740\u548C\u8D44\u6E90\u5F15\u5165</a></p><p>\u8FD9\u91CC\u6CE8\u610F\u4E00\u4E0B\uFF0C\u9ED8\u8BA4\u524D\u7AEF\u6253\u5305\u5B8C\u6210\u540E\uFF0C\u5F15\u5165\u8D44\u6E90\u662F\u76F8\u5BF9dist\u6587\u4EF6\u5939\uFF0C\u8FD9\u6837\u751F\u6210\u4E86</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/dist/\u8FD9\u79CD\u6587\u4EF6\u5939\u5185\u5BB9
\u6CE8\u610F\u6587\u4EF6\u5939\u4ECEdist\u5F00\u59CB

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u751F\u6210\u4E00\u4E2A/\uFF0C\u8868\u793A\u4ECE\u6839\u76EE\u5F55\u627E\u8D44\u6E90\u3002 \u90A3\u4E48\u5982\u679C\u6709\u591A\u7C7B\u5B50\u9879\u76EE\uFF1A\u4E00\u7C7B\u524D\u7AEF\uFF0C\u4E00\u7C7B\u540E\u7AEF\uFF0C\u6BD4\u5982\u524D\u7AEF\uFF1Ah5-all/dist/\u4E0B\u9762\uFF0C</p><p>\u4F46\u662F\u6CE8\u610F\u8DEF\u5F84\u8BF4\u660E</p><h2 id="\u76F8\u5BF9\u8DEF\u5F84\u548C\u7EDD\u5BF9\u8DEF\u5F84\u8BF4\u660E\u5B66\u4E60" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5BF9\u8DEF\u5F84\u548C\u7EDD\u5BF9\u8DEF\u5F84\u8BF4\u660E\u5B66\u4E60" aria-hidden="true">#</a> \u76F8\u5BF9\u8DEF\u5F84\u548C\u7EDD\u5BF9\u8DEF\u5F84\u8BF4\u660E\u5B66\u4E60</h2><h3 id="\u7EDD\u5BF9\u5730\u5740-\u76F8\u5BF9\u6839\u76EE\u5F55\u7684\u5730\u5740-\u6839\u76EE\u5F55\u5927\u5BB6\u90FD\u77E5\u9053\u7684-\u5C31\u662F\u5B8C\u6574url\u6700\u524D\u8FB9\u7684\u90A3\u4E2A\u5566" tabindex="-1"><a class="header-anchor" href="#\u7EDD\u5BF9\u5730\u5740-\u76F8\u5BF9\u6839\u76EE\u5F55\u7684\u5730\u5740-\u6839\u76EE\u5F55\u5927\u5BB6\u90FD\u77E5\u9053\u7684-\u5C31\u662F\u5B8C\u6574url\u6700\u524D\u8FB9\u7684\u90A3\u4E2A\u5566" aria-hidden="true">#</a> \u7EDD\u5BF9\u5730\u5740\uFF1A\u76F8\u5BF9\u6839\u76EE\u5F55\u7684\u5730\u5740\uFF08\u6839\u76EE\u5F55\u5927\u5BB6\u90FD\u77E5\u9053\u7684\uFF0C\u5C31\u662F\u5B8C\u6574url\u6700\u524D\u8FB9\u7684\u90A3\u4E2A\u5566\uFF09\uFF1B</h3><h3 id="\u76F8\u5BF9\u5730\u5740-\u5373\u76F8\u5BF9\u5F53\u524D\u9875\u7684\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5BF9\u5730\u5740-\u5373\u76F8\u5BF9\u5F53\u524D\u9875\u7684\u5730\u5740" aria-hidden="true">#</a> \u76F8\u5BF9\u5730\u5740\uFF1A\u5373\u76F8\u5BF9\u5F53\u524D\u9875\u7684\u5730\u5740\uFF1B</h3><p>\u6CE8\u610F\uFF1A\u5982\u679C\u53EA\u6709\u5355\u659C\u6760\uFF0C\u8868\u793A\u76F8\u5BF9\u5F53\u524D\u7684\u6839\u76EE\u5F55 /\uFF1A\u6839\uFF1B</p><p>./\uFF1A\u5F53\u524D\u7EA7\uFF1B</p><p>../\uFF1A\u4E0A\u4E00\u7EA7\u3002</p><h3 id="\u5E38\u89C1\u95EE\u9898-\u76F8\u5BF9\u5730\u5740-\u4F7F\u7528\u5728\u6700\u524D\u9762\u90E8\u7F72nginx" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898-\u76F8\u5BF9\u5730\u5740-\u4F7F\u7528\u5728\u6700\u524D\u9762\u90E8\u7F72nginx" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898\uFF1A\u76F8\u5BF9\u5730\u5740/\u4F7F\u7528\u5728\u6700\u524D\u9762\u90E8\u7F72nginx</h3><p>/dist/ \u6CE8\u610F\uFF1A\u5982\u679Cnginx\u4E2D\u6839\u76EE\u5F55\u76F8\u5BF9\u5730\u5740\u5C31\u662F\u8D44\u6E90\uFF0C\u90A3\u4E48\u4F7F\u7528\u8FD9\u4E2A\u6CA1\u6709\u95EE\u9898\uFF0C\u4F46\u662F\u5982\u679C\u8FD9\u4E2A\u6587\u4EF6\u5939\u4E0A\u9762\u6709\u7236\u6587\u4EF6\u5939\uFF0C \u8FD9\u91CC\u7684\u6587\u4EF6\u5939\u5C31\u4E0D\u662F\u6839\u76EE\u5F55\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u4ECE\u6839\u76EE\u5F55\u627E\u8D44\u6E90\u7684\u95EE\u9898\u5C31\u662F\u4E00\u4E2A\u9700\u8981\u786E\u8BA4\u7684\u4E8B\u60C5\u3002</p><p>\u4E0A\u9762\u5BFC\u81F4\u6587\u4EF6html\u4E2D\u7684\u5F15\u5165\u6253\u5305\u540E\u7684\u8D44\u6E90\u90FD\u662F/dist/sssss.css\u3001/dist/chunk.js\u7B49\u7B49\uFF0C\u8FD9\u6837\u6253\u5305\u540E\u7684\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--dist
---index.html
---js/xxx.js
---css/xxx.css
\u8FD9\u91CC\u5F15\u7528\u7684\u65F6\u5019\u5C31\u4F1A\u51FA\u95EE\u9898\uFF0Cindex.html\u4E2D\u8D44\u6E90\u5F15\u7528\u4E0D\u5230css,js\u6253\u5305\u540E\u7684\u8D44\u6E90\uFF0C\u89E3\u51B3\u529E\u6CD5\uFF0C\u5FC5\u987B\u5C06index.html\u653E\u5165\u4E0A\u7EA7\uFF0C\u4E0D\u80FD\u548C
js\u548Ccss\u6587\u4EF6\u5939\u540C\u7EA7\u3002




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u90E8\u7F72\u6700\u540E\u7EBF\u4E0A" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u6700\u540E\u7EBF\u4E0A" aria-hidden="true">#</a> \u90E8\u7F72\u6700\u540E\u7EBF\u4E0A</h3><p>\u8FD9\u91CC\u56E0\u4E3A\u6253\u5305\u540E\uFF0C\u90FD\u662F\u76F8\u5BF9,\u6253\u5305\u540E\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u4E86</p><h2 id="linux\u7CFB\u7EDF-\u4F7F\u7528zip\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#linux\u7CFB\u7EDF-\u4F7F\u7528zip\u4E0A\u4F20" aria-hidden="true">#</a> linux\u7CFB\u7EDF\uFF1A\u4F7F\u7528zip\u4E0A\u4F20</h2><p>dist.rar\u4E0D\u4F1A\u4E71\u7801\uFF0Cdist.rar\u8F6C\u6210zip\u540E\u518D\u4E0A\u4F20linux\u7CFB\u7EDF\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4F46\u662F\u76F4\u63A5\u4F7F\u7528windows\u6253\u5305\u7684zip\u4E0A\u4F20linux\uFF0C\u6587\u4EF6\u5939\u89E3\u538B\u540E\u4E71\u7801</p><p>\u5982\u679C\u89E3\u51B3\u4E24\u79CD\u65B9\u5F0F\uFF1A\u5C06linux\u7CFB\u7EDF\u7684\u7F16\u7801\u65B9\u5F0F\u8BBE\u7F6E\u4E00\u4E0B\uFF1B\u65B9\u6CD52\uFF1A\u901A\u8FC7\u5148\u4E0A\u4F20\u76F8\u5173\u7684rar\u540E\uFF0C\u5728linux\u89E3\u538B\u540E\u67E5\u770B\u3002</p>`,35),a=[l];function r(v,c){return i(),e("div",null,a)}var u=n(s,[["render",r],["__file","020ngnix\u914D\u7F6E\u8BF4\u660E\u4F7F\u7528\u6C47\u603B.html.vue"]]);export{u as default};
