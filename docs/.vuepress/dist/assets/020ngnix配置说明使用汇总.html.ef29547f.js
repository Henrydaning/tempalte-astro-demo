import{_ as d,r as l,o as s,c as a,a as i,b as r,d as n,e as v}from"./app.5805b0e6.js";const c={},t=n(`<h2 id="\u5982\u4F55\u7528-docker-compose-\u6D4B\u8BD5-nginx-\u914D\u7F6E\u7684\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u7528-docker-compose-\u6D4B\u8BD5-nginx-\u914D\u7F6E\u7684\u5185\u5BB9" aria-hidden="true">#</a> \u5982\u4F55\u7528 docker-compose \u6D4B\u8BD5 nginx \u914D\u7F6E\u7684\u5185\u5BB9</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>learn-nginx/location.conf
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-\u76F8\u5173\u914D\u7F6E\u5185\u5BB9\u914D\u7F6E\u6C47\u603B" tabindex="-1"><a class="header-anchor" href="#nginx-\u76F8\u5173\u914D\u7F6E\u5185\u5BB9\u914D\u7F6E\u6C47\u603B" aria-hidden="true">#</a> nginx \u76F8\u5173\u914D\u7F6E\u5185\u5BB9\u914D\u7F6E\u6C47\u603B</h2><h3 id="_1\u3001nginx-\u90E8\u7F72\u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_1\u3001nginx-\u90E8\u7F72\u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668" aria-hidden="true">#</a> 1\u3001nginx \u90E8\u7F72\u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668</h3><p>\uFF081\uFF09\u5728 nginx \u7684\u6839\u76EE\u5F55\u4E0B\uFF0C\u70B9\u51FB conf \u6587\u4EF6\u5939\uFF0C\u7F16\u8F91 nginx.conf \u914D\u7F6E\u6587\u4EF6\uFF1B</p><p>\uFF082\uFF09\u589E\u52A0 sever \u914D\u7F6E\uFF0C\u6211\u8FD9\u91CC\u56E0\u4E3A\u8FD8\u8981\u914D\u7F6E\u524D\u7AEF\u670D\u52A1\u5668\uFF0C\u6240\u4EE5\u5C31\u65B0\u5EFA\u4E00\u4E2A server\uFF0C\u5E76\u914D\u7F6E\u5BF9\u5E94\u7684\u7AEF\u53E3</p><pre><code>server {
    listen       9001;
    server_name resouce;
    root  G:/resources;  #\u8BBF\u95EE\u6587\u4EF6\u6839\u76EE\u5F55
    autoindex on;  #\u662F\u5426\u6D4F\u89C8\u6587\u4EF6\u4E0B\u7684\u5217\u8868
    location / {  #\u662F\u5426\u5141\u8BB8\u8DE8\u57DF
        add_header Access-Control-Allow-Origin *;
    }
    add_header Cache-Control &quot;no-cache,must-revalidate&quot;;# \u662F\u5426\u7F13\u5B58
}
</code></pre><p>\uFF083\uFF09\u5728\u5B89\u88C5\u76EE\u5F55\u7684 cmd \u754C\u9762\u4E2D\u6267\u884C\u547D\u4EE4 nginx -s reload\uFF0C\u4F7F\u66F4\u6539\u751F\u6548\u3002</p><h2 id="_2-\u8BB0\u5F55\u4E00\u4E2A\u90E8\u7F72\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-\u8BB0\u5F55\u4E00\u4E2A\u90E8\u7F72\u95EE\u9898" aria-hidden="true">#</a> 2.\u8BB0\u5F55\u4E00\u4E2A\u90E8\u7F72\u95EE\u9898</h2><h3 id="\u5F53\u524D\u7684\u6253\u5305\u540E\u6587\u4EF6\u5939\u548C-html-\u6587\u4EF6\u4F4D\u7F6E\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5F53\u524D\u7684\u6253\u5305\u540E\u6587\u4EF6\u5939\u548C-html-\u6587\u4EF6\u4F4D\u7F6E\u8BF4\u660E" aria-hidden="true">#</a> \u5F53\u524D\u7684\u6253\u5305\u540E\u6587\u4EF6\u5939\u548C html \u6587\u4EF6\u4F4D\u7F6E\u8BF4\u660E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u672C\u5730\u90E8\u7F72\u540E\uFF0C\u4F7F\u7528\u672C\u5730\u7684\u5BB9\u5668\u653E\u5165\u6587\u4EF6\u5939\u53EF\u4EE5\u5FEB\u901F\u8BBF\u95EE\uFF0C\u6587\u4EF6\u5939\u6837\u5F0F\u5185\u5BB9\u5982\u4E0B

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./docsimages/htmlResource.png">\uFF081\uFF09\u5F53\u524D\u7684\u7B2C\u4E00\u4E2A index.html \u9875\u9762\u7684 src \u5730\u5740\u548C\u8D44\u6E90\u5F15\u5165</a></p><p>\u8FD9\u91CC\u6CE8\u610F\u4E00\u4E0B\uFF0C\u9ED8\u8BA4\u524D\u7AEF\u6253\u5305\u5B8C\u6210\u540E\uFF0C\u5F15\u5165\u8D44\u6E90\u662F\u76F8\u5BF9 dist \u6587\u4EF6\u5939\uFF0C\u8FD9\u6837\u751F\u6210\u4E86</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/dist/\u8FD9\u79CD\u6587\u4EF6\u5939\u5185\u5BB9
\u6CE8\u610F\u6587\u4EF6\u5939\u4ECEdist\u5F00\u59CB

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u751F\u6210\u4E00\u4E2A/\uFF0C\u8868\u793A\u4ECE\u6839\u76EE\u5F55\u627E\u8D44\u6E90\u3002 \u90A3\u4E48\u5982\u679C\u6709\u591A\u7C7B\u5B50\u9879\u76EE\uFF1A\u4E00\u7C7B\u524D\u7AEF\uFF0C\u4E00\u7C7B\u540E\u7AEF\uFF0C\u6BD4\u5982\u524D\u7AEF\uFF1Ah5-all/dist/\u4E0B\u9762\uFF0C</p><p>\u4F46\u662F\u6CE8\u610F\u8DEF\u5F84\u8BF4\u660E</p><h2 id="\u76F8\u5BF9\u8DEF\u5F84\u548C\u7EDD\u5BF9\u8DEF\u5F84\u8BF4\u660E\u5B66\u4E60" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5BF9\u8DEF\u5F84\u548C\u7EDD\u5BF9\u8DEF\u5F84\u8BF4\u660E\u5B66\u4E60" aria-hidden="true">#</a> \u76F8\u5BF9\u8DEF\u5F84\u548C\u7EDD\u5BF9\u8DEF\u5F84\u8BF4\u660E\u5B66\u4E60</h2><h3 id="\u7EDD\u5BF9\u5730\u5740-\u76F8\u5BF9\u6839\u76EE\u5F55\u7684\u5730\u5740-\u6839\u76EE\u5F55\u5927\u5BB6\u90FD\u77E5\u9053\u7684-\u5C31\u662F\u5B8C\u6574-url-\u6700\u524D\u8FB9\u7684\u90A3\u4E2A\u5566" tabindex="-1"><a class="header-anchor" href="#\u7EDD\u5BF9\u5730\u5740-\u76F8\u5BF9\u6839\u76EE\u5F55\u7684\u5730\u5740-\u6839\u76EE\u5F55\u5927\u5BB6\u90FD\u77E5\u9053\u7684-\u5C31\u662F\u5B8C\u6574-url-\u6700\u524D\u8FB9\u7684\u90A3\u4E2A\u5566" aria-hidden="true">#</a> \u7EDD\u5BF9\u5730\u5740\uFF1A\u76F8\u5BF9\u6839\u76EE\u5F55\u7684\u5730\u5740\uFF08\u6839\u76EE\u5F55\u5927\u5BB6\u90FD\u77E5\u9053\u7684\uFF0C\u5C31\u662F\u5B8C\u6574 url \u6700\u524D\u8FB9\u7684\u90A3\u4E2A\u5566\uFF09\uFF1B</h3><h3 id="\u76F8\u5BF9\u5730\u5740-\u5373\u76F8\u5BF9\u5F53\u524D\u9875\u7684\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5BF9\u5730\u5740-\u5373\u76F8\u5BF9\u5F53\u524D\u9875\u7684\u5730\u5740" aria-hidden="true">#</a> \u76F8\u5BF9\u5730\u5740\uFF1A\u5373\u76F8\u5BF9\u5F53\u524D\u9875\u7684\u5730\u5740\uFF1B</h3><p>\u6CE8\u610F\uFF1A\u5982\u679C\u53EA\u6709\u5355\u659C\u6760\uFF0C\u8868\u793A\u76F8\u5BF9\u5F53\u524D\u7684\u6839\u76EE\u5F55 /\uFF1A\u6839\uFF1B</p><p>./\uFF1A\u5F53\u524D\u7EA7\uFF1B</p><p>../\uFF1A\u4E0A\u4E00\u7EA7\u3002</p><h3 id="\u5E38\u89C1\u95EE\u9898-\u76F8\u5BF9\u5730\u5740-\u4F7F\u7528\u5728\u6700\u524D\u9762\u90E8\u7F72-nginx" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898-\u76F8\u5BF9\u5730\u5740-\u4F7F\u7528\u5728\u6700\u524D\u9762\u90E8\u7F72-nginx" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898\uFF1A\u76F8\u5BF9\u5730\u5740/\u4F7F\u7528\u5728\u6700\u524D\u9762\u90E8\u7F72 nginx</h3><p>/dist/ \u6CE8\u610F\uFF1A\u5982\u679C nginx \u4E2D\u6839\u76EE\u5F55\u76F8\u5BF9\u5730\u5740\u5C31\u662F\u8D44\u6E90\uFF0C\u90A3\u4E48\u4F7F\u7528\u8FD9\u4E2A\u6CA1\u6709\u95EE\u9898\uFF0C\u4F46\u662F\u5982\u679C\u8FD9\u4E2A\u6587\u4EF6\u5939\u4E0A\u9762\u6709\u7236\u6587\u4EF6\u5939\uFF0C \u8FD9\u91CC\u7684\u6587\u4EF6\u5939\u5C31\u4E0D\u662F\u6839\u76EE\u5F55\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u4ECE\u6839\u76EE\u5F55\u627E\u8D44\u6E90\u7684\u95EE\u9898\u5C31\u662F\u4E00\u4E2A\u9700\u8981\u786E\u8BA4\u7684\u4E8B\u60C5\u3002</p><p>\u4E0A\u9762\u5BFC\u81F4\u6587\u4EF6 html \u4E2D\u7684\u5F15\u5165\u6253\u5305\u540E\u7684\u8D44\u6E90\u90FD\u662F/dist/sssss.css\u3001/dist/chunk.js \u7B49\u7B49\uFF0C\u8FD9\u6837\u6253\u5305\u540E\u7684\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--dist
---index.html
---js/xxx.js
---css/xxx.css
\u8FD9\u91CC\u5F15\u7528\u7684\u65F6\u5019\u5C31\u4F1A\u51FA\u95EE\u9898\uFF0Cindex.html\u4E2D\u8D44\u6E90\u5F15\u7528\u4E0D\u5230css,js\u6253\u5305\u540E\u7684\u8D44\u6E90\uFF0C\u89E3\u51B3\u529E\u6CD5\uFF0C\u5FC5\u987B\u5C06index.html\u653E\u5165\u4E0A\u7EA7\uFF0C\u4E0D\u80FD\u548C
js\u548Ccss\u6587\u4EF6\u5939\u540C\u7EA7\u3002




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u90E8\u7F72\u6700\u540E\u7EBF\u4E0A" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u6700\u540E\u7EBF\u4E0A" aria-hidden="true">#</a> \u90E8\u7F72\u6700\u540E\u7EBF\u4E0A</h3><p>\u8FD9\u91CC\u56E0\u4E3A\u6253\u5305\u540E\uFF0C\u90FD\u662F\u76F8\u5BF9,\u6253\u5305\u540E\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u4E86</p><h2 id="linux-\u7CFB\u7EDF-\u4F7F\u7528-zip-\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#linux-\u7CFB\u7EDF-\u4F7F\u7528-zip-\u4E0A\u4F20" aria-hidden="true">#</a> linux \u7CFB\u7EDF\uFF1A\u4F7F\u7528 zip \u4E0A\u4F20</h2><p>dist.rar \u4E0D\u4F1A\u4E71\u7801\uFF0Cdist.rar \u8F6C\u6210 zip \u540E\u518D\u4E0A\u4F20 linux \u7CFB\u7EDF\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4F46\u662F\u76F4\u63A5\u4F7F\u7528 windows \u6253\u5305\u7684 zip \u4E0A\u4F20 linux\uFF0C\u6587\u4EF6\u5939\u89E3\u538B\u540E\u4E71\u7801</p><p>\u5982\u679C\u89E3\u51B3\u4E24\u79CD\u65B9\u5F0F\uFF1A\u5C06 linux \u7CFB\u7EDF\u7684\u7F16\u7801\u65B9\u5F0F\u8BBE\u7F6E\u4E00\u4E0B\uFF1B\u65B9\u6CD5 2\uFF1A\u901A\u8FC7\u5148\u4E0A\u4F20\u76F8\u5173\u7684 rar \u540E\uFF0C\u5728 linux \u89E3\u538B\u540E\u67E5\u770B\u3002</p><h1 id="nginx-conf-\u6587\u4EF6\u4E2D\u5404\u4E2A\u914D\u7F6E\u9879\u7684\u542B\u4E49\u7B80\u6790" tabindex="-1"><a class="header-anchor" href="#nginx-conf-\u6587\u4EF6\u4E2D\u5404\u4E2A\u914D\u7F6E\u9879\u7684\u542B\u4E49\u7B80\u6790" aria-hidden="true">#</a> nginx.conf \u6587\u4EF6\u4E2D\u5404\u4E2A\u914D\u7F6E\u9879\u7684\u542B\u4E49\u7B80\u6790</h1><h2 id="\u6CE8\u610F\u90E8\u7F72\u7684\u65F6\u5019\u76F8\u5BF9\u4F4D\u7F6E\u7684\u5751-\u5982\u679C-root-\u6839\u76EE\u5F55\u5728-dist-\u4E0B-\u8868\u793A\u6240\u6709\u7684\u6587\u4EF6\u4ECE-dist-\u5F00\u59CB-\u90A3\u4E48-dist-\u76F8\u5F53\u4E8E-ip-\u6CA1\u6709\u4F4D\u7F6E\u4E86\u3002\u6240\u4EE5\u5E94\u8BE5\u7ED9-dist-\u5305\u88F9\u4E00\u5C42\u6839\u76EE\u5F55-blog-\u90A3\u4E48\u8FD9\u6837\u53EF\u4EE5\u4E86" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u90E8\u7F72\u7684\u65F6\u5019\u76F8\u5BF9\u4F4D\u7F6E\u7684\u5751-\u5982\u679C-root-\u6839\u76EE\u5F55\u5728-dist-\u4E0B-\u8868\u793A\u6240\u6709\u7684\u6587\u4EF6\u4ECE-dist-\u5F00\u59CB-\u90A3\u4E48-dist-\u76F8\u5F53\u4E8E-ip-\u6CA1\u6709\u4F4D\u7F6E\u4E86\u3002\u6240\u4EE5\u5E94\u8BE5\u7ED9-dist-\u5305\u88F9\u4E00\u5C42\u6839\u76EE\u5F55-blog-\u90A3\u4E48\u8FD9\u6837\u53EF\u4EE5\u4E86" aria-hidden="true">#</a> \u6CE8\u610F\u90E8\u7F72\u7684\u65F6\u5019\u76F8\u5BF9\u4F4D\u7F6E\u7684\u5751\uFF0C\u5982\u679C root \u6839\u76EE\u5F55\u5728 dist \u4E0B\uFF0C\u8868\u793A\u6240\u6709\u7684\u6587\u4EF6\u4ECE dist \u5F00\u59CB\uFF0C\u90A3\u4E48 dist \u76F8\u5F53\u4E8E ip,\u6CA1\u6709\u4F4D\u7F6E\u4E86\u3002\u6240\u4EE5\u5E94\u8BE5\u7ED9 dist \u5305\u88F9\u4E00\u5C42\u6839\u76EE\u5F55\uFF0Cblog\uFF0C\u90A3\u4E48\u8FD9\u6837\u53EF\u4EE5\u4E86</h2><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2>`,38),o={href:"https://app.yinxiang.com/shard/s37/nl/24388549/cfab0a0c-9b0a-42f0-94e4-33725087815e",target:"_blank",rel:"noopener noreferrer"},u=v("nginx \u914D\u7F6E\u6587\u4EF6\u4E09\u90E8\u5206\u89E3\u7B54"),m=n(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#http\u5757\uFF0CNginx\u670D\u52A1\u5668\u914D\u7F6E\u4E2D\u7684\u91CD\u8981\u90E8\u5206\uFF0C\u6D89\u53CA\u4EE3\u7406\u3001\u7F13\u5B58\u548C\u65E5\u5FD7\u7B49\u529F\u80FD\u7684\u914D\u7F6E\uFF1B
    http {
      access_log logs/access.log exampleLog; #\u8868\u793A\u670D\u52A1\u65E5\u5FD7\u7684\u5B58\u653E\u8DEF\u5F84\uFF0CexampleLog\u683C\u5F0F\u5316\u6307\u4EE4\u540D\u3002
      log_format exampleLog  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
    &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
    &#39;&quot;$http_user_agent&quot;&#39;; #\u8F93\u51FA\u7528\u6237IP,\u5F53\u5730\u65F6\u95F4\uFF0C\u83B7\u53D6\u8BF7\u6C42\u72B6\u6001\uFF0C\u8BF7\u6C42\u4F53\u7684\u5927\u5C0F\uFF0C\u5185\u5BB9\uFF0C\u7528\u6237\u6D4F\u89C8\u5668\u7CFB\u7EDF\u7B49\u3002
	  include mime.types; #\u4EE5\u4E0B\u4E24\u9879\u4E3A Nginx\u9ED8\u8BA4\u914D\u7F6E\u9879
      default_type application/octet-stream; #\u9ED8\u8BA4\u4E0B\u8F7D\u672A\u77E5\u7C7B\u578B\u6587\u4EF6

      sendfile on; #\u4F7F\u7528sendfile()\u4F20\u8F93\u6587\u4EF6\uFF0Con\u8868\u793A\u5F00\u542F
      keepalive_timeout 20; #\u8BBE\u7F6E\u4FDD\u6301\u8FDE\u63A5\u7684\u65F6\u95F4\u957F\u5EA6\u503C
      client_header_timeout 20; #\u6307\u5B9A\u7B49\u5F85client\u53D1\u9001\u4E00\u4E2A\u8BF7\u6C42\u5934\u7684\u8D85\u65F6\u65F6\u95F4
      client_body_timeout 20; #\u8BBE\u7F6E\u8BF7\u6C42\u4F53\u7684\u8BFB\u8D85\u65F6\u65F6\u95F4
      reset_timedout_connection on; #\u5173\u95ED\u4E0D\u54CD\u5E94\u7684\u5BA2\u6237\u7AEF\u8FDE\u63A5
      send_timeout 20; #\u8BBE\u7F6ENginx\u670D\u52A1\u5668\u54CD\u5E94\u5BA2\u6237\u7AEF\u7684\u8D85\u65F6\u65F6\u95F4
      gzip on; #\u5BF9\u54CD\u5E94\u6570\u636E\u8FDB\u884C\u5728\u7EBF\u5B9E\u65F6\u538B\u7F29
      gzip_min_length 1024; #\u54CD\u5E94\u6587\u4EF6\u5927\u4E8E1KB\u65F6\u624D\u8FDB\u884C\u538B\u7F29\uFF0C\u9632\u6B62\u51FA\u73B0\u8D8A\u538B\u8D8A\u5927\u7684\u60C5\u51B5
      gzip_buffers 4 16k; #\u8BBE\u7F6E\u538B\u7F29\u6587\u4EF6\u4F7F\u7528\u7F13\u5B58\u7A7A\u95F4\u7684\u5927\u5C0F
      gzip_http_version 1.0; #\u5F00\u542FGzip\u529F\u80FD\u9700\u8981\u6700\u4F4E\u7684http\u7248\u672C\u4E3A1.0\uFF0C\u7248\u672C\u8FC7\u4F4E\u538B\u7F29\u4E4B\u540E\u6709\u65F6\u4F1A\u51FA\u73B0\u4E71\u7801
      gzip_comp_level 4; #\u8BBE\u7F6E\u538B\u7F29\u7EA7\u522B\uFF0C\u7EA7\u522B\uFF081-9\uFF09\u8D8A\u5927\uFF0C\u538B\u7F29\u65F6\u95F4\u8D8A\u957F
      gzip_types text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png; #\u538B\u7F29\u6E90\u6587\u4EF6\u7C7B\u578B
      gzip_vary on; #\u542F\u7528\u538B\u7F29\u6807\u8BC6
      tcp_nopush on; #\u9632\u6B62\u7F51\u7EDC\u963B\u585E\uFF0C\u544A\u8BC9nginx\u5728\u4E00\u4E2A\u6570\u636E\u5305\u91CC\u53D1\u9001\u6240\u6709\u5934\u6587\u4EF6
      port_in_redirect off; # \u8BBE\u7F6ENginx\u5728\u91CD\u5B9A\u5411\u7684\u65F6\u5019\u4E0D\u8981\u5E26\u4E0A\u7AEF\u53E3
      server_tokens off; #\u9690\u85CFNginx\u670D\u52A1\u5668\u7248\u672C\u53F7
      proxy_ignore_client_abort on; #\u5BA2\u6237\u7AEF\u65AD\u7F51\u65F6\uFF0Cnginx\u670D\u52A1\u5668\u4E0D\u8BB0\u5F55499\u9519\u8BEF\u7801\u3002

      server{


      }



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="server-\u5BBF\u4E3B\u673A\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#server-\u5BBF\u4E3B\u673A\u8BBE\u7F6E" aria-hidden="true">#</a> server \u5BBF\u4E3B\u673A\u8BBE\u7F6E</h2><p>#server \u5757\u5F00\u59CB\uFF0C\u865A\u62DF\u4E3B\u673A\u8BBE\u7F6E\uFF0C\u4F7F\u4E00\u4E2A Nginx \u670D\u52A1\u5668\u8FD0\u884C\u591A\u4E2A\u7F51\u7AD9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {
    listen 16533;
    index index.php index.html;
    error_log  /var/log/nginx/error.log;
    access_log /var/log/nginx/access.log;
    root /var/www/html/dist; # \u914D\u7F6E\u5F53\u524D\u7684\u6587\u4EF6\u5939nigix/etc\u914D\u7F6E\u4E0B\u7684\u76EE\u5F55\uFF0C\u6BD4\u5982dist\u6587\u4EF6\u5939\u9879\u76EE
    # \u6B63\u786E\u7684\u90E8\u7F72\uFF0C\u5E94\u8BE5\u662Froot /var/www/html/blog;
    location / {
          index  index.html index.htm index.php;
          autoindex  off;
     }
    set $virtualdir &quot;&quot;;
    set $realdir &quot;&quot;;

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="location-\u6307\u4EE4\u7684\u529F\u80FD\u662F\u7528\u6765\u5339\u914D\u4E0D\u540C\u7684-url-\u8BF7\u6C42-\u8FDB\u800C\u5BF9\u8BF7\u6C42\u505A\u4E0D\u540C\u7684\u5904\u7406\u548C\u54CD\u5E94" tabindex="-1"><a class="header-anchor" href="#location-\u6307\u4EE4\u7684\u529F\u80FD\u662F\u7528\u6765\u5339\u914D\u4E0D\u540C\u7684-url-\u8BF7\u6C42-\u8FDB\u800C\u5BF9\u8BF7\u6C42\u505A\u4E0D\u540C\u7684\u5904\u7406\u548C\u54CD\u5E94" aria-hidden="true">#</a> location \u6307\u4EE4\u7684\u529F\u80FD\u662F\u7528\u6765\u5339\u914D\u4E0D\u540C\u7684 url \u8BF7\u6C42\uFF0C\u8FDB\u800C\u5BF9\u8BF7\u6C42\u505A\u4E0D\u540C\u7684\u5904\u7406\u548C\u54CD\u5E94</h3><p>location \u4E2D\u6BD4\u8F83\u590D\u6742\u7684\u5E08 location \u6307\u4EE4\u7684\u5339\u914D\u987A\u5E8F\u3002 1\u3001location \u4ECB\u7ECD location \u662F Nginx \u4E2D\u7684\u5757\u7EA7\u6307\u4EE4(block directive),\uFF0Clocation \u6307\u4EE4\u7684\u529F\u80FD\u662F\u7528\u6765\u5339\u914D\u4E0D\u540C\u7684 url \u8BF7\u6C42\uFF0C\u8FDB\u800C\u5BF9\u8BF7\u6C42\u505A\u4E0D\u540C\u7684\u5904\u7406\u548C\u54CD\u5E94\uFF0C\u8FD9\u5176\u4E2D\u8F83\u96BE\u7406\u89E3\u7684\u662F\u591A\u4E2A location \u7684\u5339\u914D\u987A\u5E8F\uFF0C\u672C\u6587\u4F1A\u4F5C\u4E3A\u91CD\u70B9\u6765\u89E3\u91CA\u548C\u8BF4\u660E\u3002</p><p>\u5F00\u59CB\u4E4B\u524D\u5148\u660E\u786E\u4E00\u4E9B\u7EA6\u5B9A\uFF0C\u6211\u4EEC\u8F93\u5165\u7684\u7F51\u5740\u53EB\u505A\u8BF7\u6C42 URI\uFF0Cnginx \u7528\u8BF7\u6C42 URI \u4E0E location \u4E2D\u914D\u7F6E\u7684 URI \u505A\u5339\u914D\u3002</p><h3 id="_2\u3001localtion-\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2\u3001localtion-\u8BED\u6CD5" aria-hidden="true">#</a> 2\u3001localtion \u8BED\u6CD5</h3><p>location \u6709\u4E24\u79CD\u5339\u914D\u89C4\u5219\uFF1A</p><p>\u5339\u914D URL \u7C7B\u578B\uFF0C\u6709\u56DB\u79CD\u53C2\u6570\u53EF\u9009\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u4E0D\u5E26\u53C2\u6570\u3002 location [ = | ~ | ~* | ^~ ] uri { \u2026 } \u547D\u540D location\uFF0C\u7528@\u6807\u8BC6\uFF0C\u7C7B\u4F3C\u4E8E\u5B9A\u4E8E goto \u8BED\u53E5\u5757\u3002 location @name { \u2026 }</p><h4 id="location-\u5339\u914D\u53C2\u6570\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#location-\u5339\u914D\u53C2\u6570\u89E3\u91CA" aria-hidden="true">#</a> location \u5339\u914D\u53C2\u6570\u89E3\u91CA\uFF1A</h4><p>\uFF081\uFF09 \u201C=\u201D \uFF0C\u7CBE\u786E\u5339\u914D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5185\u5BB9\u8981\u540C\u8868\u8FBE\u5F0F\u5B8C\u5168\u4E00\u81F4\u624D\u5339\u914D\u6210\u529F
location = /abc/ {
  .....
 }

 \u53EA\u5339\u914Dhttp://abc.com/abc
#http://abc.com/abc [\u5339\u914D\u6210\u529F]
#http://abc.com/abc/index [\u5339\u914D\u5931\u8D25]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uFF082\uFF09 \u201C~\u201D\uFF0C\u6267\u884C\u6B63\u5219\u5339\u914D\uFF0C\u533A\u5206\u5927\u5C0F\u5199\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
location ~ /Abc/ {
  .....
}
#http://abc.com/Abc/ [\u5339\u914D\u6210\u529F]
#http://abc.com/abc/ [\u5339\u914D\u5931\u8D25]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uFF083\uFF09\u201C~*\u201D\uFF0C\u6267\u884C\u6B63\u5219\u5339\u914D\uFF0C\u5FFD\u7565\u5927\u5C0F\u5199</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>location ~* /Abc/ {
  .....
}
# \u5219\u4F1A\u5FFD\u7565 uri \u90E8\u5206\u7684\u5927\u5C0F\u5199
#http://abc.com/Abc/ [\u5339\u914D\u6210\u529F]
#http://abc.com/abc/ [\u5339\u914D\u6210\u529F]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uFF084\uFF09\u201C^~\u201D\uFF0C\u8868\u793A\u666E\u901A\u5B57\u7B26\u4E32\u5339\u914D\u4E0A\u4EE5\u540E\u4E0D\u518D\u8FDB\u884C\u6B63\u5219\u5339\u914D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>location ^~ /index/ {
  .....
}
#\u4EE5 /index/ \u5F00\u5934\u7684\u8BF7\u6C42\uFF0C\u90FD\u4F1A\u5339\u914D\u4E0A
#http://abc.com/index/index.page  [\u5339\u914D\u6210\u529F]
#http://abc.com/error/error.page [\u5339\u914D\u5931\u8D25]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uFF085\uFF09\u4E0D\u52A0\u4EFB\u4F55\u89C4\u5219\u65F6\uFF0C\u9ED8\u8BA4\u662F\u5927\u5C0F\u5199\u654F\u611F\uFF0C\u524D\u7F00\u5339\u914D\uFF0C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u76F8\u5F53\u4E8E\u52A0\u4E86\u201C~\u201D\u4E0E\u201C^~\u201D

location /index/ {
  ......
}
#http://abc.com/index  [\u5339\u914D\u6210\u529F]
#http://abc.com/index/index.page  [\u5339\u914D\u6210\u529F]
#http://abc.com/test/index  [\u5339\u914D\u5931\u8D25]
#http://abc.com/Index  [\u5339\u914D\u5931\u8D25]
# \u5339\u914D\u5230\u6240\u6709uri

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uFF086\uFF09\u201C@\u201D\uFF0Cnginx \u5185\u90E8\u8DF3\u8F6C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>location /index/ {
  error_page 404 @index_error;
}
location @index_error {
  .....
}
#\u4EE5 /index/ \u5F00\u5934\u7684\u8BF7\u6C42\uFF0C\u5982\u679C\u94FE\u63A5\u7684\u72B6\u6001\u4E3A 404\u3002\u5219\u4F1A\u5339\u914D\u5230 @index_error \u8FD9\u6761\u89C4\u5219\u4E0A\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3\u3001location-\u5339\u914D\u987A\u5E8F-\u4E0A\u9762\u7684\u5E8F\u53F7\u8D8A\u5C0F\u4F18\u5148\u7EA7\u8D8A\u9AD8" tabindex="-1"><a class="header-anchor" href="#_3\u3001location-\u5339\u914D\u987A\u5E8F-\u4E0A\u9762\u7684\u5E8F\u53F7\u8D8A\u5C0F\u4F18\u5148\u7EA7\u8D8A\u9AD8" aria-hidden="true">#</a> 3\u3001location \u5339\u914D\u987A\u5E8F\uFF08\u4E0A\u9762\u7684\u5E8F\u53F7\u8D8A\u5C0F\u4F18\u5148\u7EA7\u8D8A\u9AD8\uFF09</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>= &gt; ^~ &gt; ~ | ~* &gt; \u6700\u957F\u524D\u7F00\u5339\u914D &gt; /

\u5E8F\u53F7\u8D8A\u5C0F\u4F18\u5148\u7EA7\u8D8A\u9AD8
location = # \u7CBE\u51C6\u5339\u914D
= \u5339\u914D\u4F18\u5148\u7EA7\u6700\u9AD8\u3002\u4E00\u65E6\u5339\u914D\u6210\u529F\uFF0C\u5219\u4E0D\u518D\u67E5\u627E\u5176\u4ED6\u5339\u914D\u9879\u3002
location ^~ # \u5E26\u53C2\u524D\u7F00\u5339\u914D
^~\u7C7B\u578B\u8868\u8FBE\u5F0F\u3002\u4E00\u65E6\u5339\u914D\u6210\u529F\uFF0C\u5219\u4E0D\u518D\u67E5\u627E\u5176\u4ED6\u5339\u914D\u9879\u3002
location ~ # \u6B63\u5219\u5339\u914D\uFF08\u533A\u5206\u5927\u5C0F\u5199\uFF09
location ~* # \u6B63\u5219\u5339\u914D\uFF08\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF09
location /a # \u666E\u901A\u524D\u7F00\u5339\u914D\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8E\u5E26\u53C2\u6570\u524D\u7F00\u5339\u914D\u3002
location / # \u4EFB\u4F55\u6CA1\u6709\u5339\u914D\u6210\u529F\u7684\uFF0C\u90FD\u4F1A\u5339\u914D\u8FD9\u91CC\u5904\u7406
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-gzip-\u914D\u7F6E\u538B\u7F29\u76F8\u5173-nginx-\u914D\u7F6E\u5185\u5BB9-\u538B\u7F29\u7248\u672C\u548C-http-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_6-gzip-\u914D\u7F6E\u538B\u7F29\u76F8\u5173-nginx-\u914D\u7F6E\u5185\u5BB9-\u538B\u7F29\u7248\u672C\u548C-http-\u7248\u672C" aria-hidden="true">#</a> 6.gzip \u914D\u7F6E\u538B\u7F29\u76F8\u5173 nginx \u914D\u7F6E\u5185\u5BB9\uFF1A\u538B\u7F29\u7248\u672C\u548C http \u7248\u672C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {
    listen 12089;
    index index.php index.html;
    error_log  /var/log/nginx/error.log;
    access_log /var/log/nginx/access.log;

    root /var/www/html/gzip;# \u8868\u793A\u6839\u76EE\u5F55\u5728html\u4E0B\u7684gzip\u6587\u4EF6\u4E0B\u9762
    gzip on;
    # http\u8BF7\u6C42\u7248\u672C
    gzip_http_version 1.0;
    # \u8BBE\u7F6E\u4EC0\u4E48\u7C7B\u578B\u7684\u6587\u4EF6\u9700\u8981\u538B\u7F29
    gzip_types text/css text/javascript application/javascript image/png image/jpeg image/gif;
    location / {
          index  index.html index.htm index.php;
          autoindex  off;
    }

}


&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD



=======
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><p>5a9ed4db5d4c00a1664d9b5bb2274a85ac6b22a5</p></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote><h2 id="_5-nginx-\u914D\u7F6E\u53D8\u91CF\u548C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_5-nginx-\u914D\u7F6E\u53D8\u91CF\u548C\u4F7F\u7528" aria-hidden="true">#</a> 5.nginx \u914D\u7F6E\u53D8\u91CF\u548C\u4F7F\u7528</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09\u58F0\u660E\u53D8\u91CF
\u5728server\uFF0Chttp,location\u7B49\u6807\u7B7E\u4E2D\u4F7F\u7528set\u547D\u4EE4
\u8BED\u6CD5\uFF1Aset$\u53D8\u91CF\u540D \u53D8\u91CF\u503C

\u6CE8\u610F\uFF1Anginx\u4E2D\u53D8\u91CF\u5FC5\u987B\u7528$\u5F00\u5934
\u4F8B\u5982\uFF1A
set $foo hello;
\u8FD9\u91CC\u8BBE\u7F6E\u540E\u4F7F\u7528
 echo &quot;foo: $foo&quot;;
\uFF082\uFF09\u53EF\u89C1\u6027\u89C4\u5219
location\u6807\u7B7E\u4E2D\u58F0\u660E\u7684\u53D8\u91CF\u4E2D\u5BF9\u8FD9\u4E2Alocation\u5757\u53EF\u89C1
server\u6807\u7B7E\u4E2D\u58F0\u660E\u7684\u53D8\u91CF\u5BF9server\u5757\u4EE5\u53CAserver\u5757\u4E2D\u7684\u6240\u6709\u5B50\u5757\u53EF\u89C1
http\u6807\u7B7E\u4E2D\u58F0\u660E\u7684\u53D8\u91CF\u5BF9http\u5757\u4EE5\u53CAhttp\u5757\u4E2D\u7684\u6240\u6709\u5B50\u5757\u53EF\u89C1




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-nginx-conf-\u914D\u7F6E\u591A\u4E2A\u5B50\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_6-nginx-conf-\u914D\u7F6E\u591A\u4E2A\u5B50\u76EE\u5F55" aria-hidden="true">#</a> 6.nginx.conf \u914D\u7F6E\u591A\u4E2A\u5B50\u76EE\u5F55</h2><p>\u6CE8\u610F\u8FD9\u91CC\u914D\u7F6E\u4E86root\u548Calias\u662F\u5426\u914D\u7F6E\u90FD\u53EF\u4EE5\u3002 \u8FD9\u91CC\u5176\u5B9E\u6700\u4E0A\u9762\u914D\u7F6E\u4E86/\u4E4B\u540E\uFF0C\u8FD9\u4E2A\u4E0B\u9762\u7684test1\uFF0Ctest3\u90FD\u4F1A\u751F\u6548\u3002 \u5176\u5B9E\u9ED8\u8BA4\u6CA1\u6709\u914D\u7F6E\uFF0C\u4F46\u662F\u6211\u4EEC\u6709test5\u6587\u4EF6\u5939\uFF0C\u8BBF\u95EE\u4E5F\u4F1A\u751F\u6548\u51FA\u6765\u3002 \u4E0B\u9762\u6CA1\u6709test5,\u4F46\u662F\u6211\u4EEC\u8D44\u6E90\u6709\u6240\u4EE5\uFF1Axxx/test5/\u53EF\u4EE5\u627E\u5230</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {
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



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-root-\u548C-alias-\u914D\u7F6E\u8DEF\u5F84\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_7-root-\u548C-alias-\u914D\u7F6E\u8DEF\u5F84\u533A\u522B" aria-hidden="true">#</a> 7.root \u548C alias \u914D\u7F6E\u8DEF\u5F84\u533A\u522B</h2><p>root \u7528\u6765\u8BBE\u7F6E\u6839\u76EE\u5F55\uFF0C\u800C alias \u7528\u6765\u91CD\u7F6E\u5F53\u524D\u8BBF\u95EE\u6587\u4EF6\u7684\u76EE\u5F55\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F8B\u5982\uFF1A
location /img/ {
    alias /var/www/image/;
}
\u8FD9\u91CC\u8BBF\u95EE\u5730\u5740/img/\u7684\u8BDD\uFF0C\u662F\u8BBF\u95EE/var/www/image/\u76EE\u5F55\u4E0B

\u4F46\u662F\u5982\u4E0B\uFF1Aroot
location /img/ {
    root /var/www/image/;
}
\u8FD9\u91CC\u8BBF\u95EE\u5730\u5740/img/\u7684\u8BDD\uFF0C\u662F\u8BBF\u95EE/var/www/image/img/\u76EE\u5F55\u4E0B


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u5C31\u662F location \u4E2D\u7684\u8DEF\u5F84\u5339\u914D\u95EE\u9898\uFF0Croot \u548C alias \u7684\u533A\u522B</p><h2 id="_8-\u914D\u7F6E-location-\u7684\u6307\u5B9A\u4E3B\u9875\u548C\u81EA\u52A8\u8DF3\u8F6C" tabindex="-1"><a class="header-anchor" href="#_8-\u914D\u7F6E-location-\u7684\u6307\u5B9A\u4E3B\u9875\u548C\u81EA\u52A8\u8DF3\u8F6C" aria-hidden="true">#</a> 8.\u914D\u7F6E location \u7684\u6307\u5B9A\u4E3B\u9875\u548C\u81EA\u52A8\u8DF3\u8F6C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>location /react {
    alias /projects/react/;
    #\u6307\u5B9A\u4E3B\u9875
    index index.html;
    #\u81EA\u52A8\u8DF3\u8F6C
    autoindex on;
  }



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-nginx-\u542F\u52A8\u91CD\u542F\u548C\u5173\u95ED" tabindex="-1"><a class="header-anchor" href="#_9-nginx-\u542F\u52A8\u91CD\u542F\u548C\u5173\u95ED" aria-hidden="true">#</a> 9.nginx \u542F\u52A8\u91CD\u542F\u548C\u5173\u95ED</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5173\u95EDnginx
nginx  -s stop

\u91CD\u542Fnginx
nginx  -C  /etc/nginx/nginx.conf




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41);function b(h,x){const e=l("ExternalLinkIcon");return s(),a("div",null,[t,i("ul",null,[i("li",null,[i("a",o,[u,r(e)])])]),m])}var g=d(c,[["render",b],["__file","020ngnix\u914D\u7F6E\u8BF4\u660E\u4F7F\u7528\u6C47\u603B.html.vue"]]);export{g as default};
