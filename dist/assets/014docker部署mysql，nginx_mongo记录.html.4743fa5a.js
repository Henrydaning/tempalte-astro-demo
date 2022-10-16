import{_ as a,r,o as l,c,a as e,b as d,w as i,d as o,e as s}from"./app.98cbd08f.js";const t={},u={class:"table-of-contents"},v=s("Window \u7684 WSL2 \u5B89\u88C5 docker"),m=s("1.\u5B89\u88C5 docker"),p=s("\u8BBE\u7F6E ununtu \u7684 api \u5B89\u88C5\u88C5"),b=s("2.docker \u5B89\u88C5\u548C\u542F\u52A8"),k=s("\uFF081\uFF09\u542F\u52A8 docker: sudo service docker start"),h=s("\uFF082\uFF09\u68C0\u67E5 docker \u662F\u5426\u6B63\u5E38"),g=s("Dccker \u5E38\u89C1\u51E0\u4E2A\u542F\u52A8\u547D\u4EE4"),x=s("alpine \u7248\u672C\u955C\u50CF\u5927\u5C0F\u662F\u666E\u901A\u7248\u672C\u7684 1/5 \u5DE6\u53F3"),_=s("Docker \u90E8\u7F72 ngiix \u73AF\u5883"),f=s("docker \u5B89\u88C5 monog"),y=s("docker \u5B89\u88C5 redis"),q=s("docker \u5B89\u88C5 mongo"),w=s("docker \u5B89\u88C5 mysql"),L=s("\u67E5\u770B\u5F53\u524D\u7684 ip"),S=o(`<h2 id="window-\u7684-wsl2-\u5B89\u88C5-docker" tabindex="-1"><a class="header-anchor" href="#window-\u7684-wsl2-\u5B89\u88C5-docker" aria-hidden="true">#</a> Window \u7684 WSL2 \u5B89\u88C5 docker</h2><h2 id="_1-\u5B89\u88C5-docker" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5-docker" aria-hidden="true">#</a> 1.\u5B89\u88C5 docker</h2><p>\u8BBE\u7F6E\u5B50\u7CFB\u7EDF\u514D\u5BC6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> \u66FF\u6362leap\u4E3A\u81EA\u5DF1\u5355\u72EC\u914D\u7F6E\u7684\u7528\u6237\u540D
 sudo echo &quot;leap ALL=(ALL:ALL) NOPASSWD: ALL&quot; &gt;&gt;/etc/sudoers

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8BBE\u7F6E-ununtu-\u7684-api-\u5B89\u88C5\u88C5" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E-ununtu-\u7684-api-\u5B89\u88C5\u88C5" aria-hidden="true">#</a> \u8BBE\u7F6E ununtu \u7684 api \u5B89\u88C5\u88C5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp /etc/apt/sources.list /etc/apt/sources.list.bak
\u200B
echo &quot;deb http://mirrors.aliyun.com/ubuntu/ focal main restricted
deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted
deb http://mirrors.aliyun.com/ubuntu/ focal universe
deb http://mirrors.aliyun.com/ubuntu/ focal-updates universe
deb http://mirrors.aliyun.com/ubuntu/ focal multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-updates multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted
deb http://mirrors.aliyun.com/ubuntu/ focal-security universe
deb http://mirrors.aliyun.com/ubuntu/ focal-security multiverse&quot;&gt;/etc/apt/sources.list


\u6267\u884C\u66F4\u65B0

apt update &amp;&amp; apt upgrade -y

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-docker-\u5B89\u88C5\u548C\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_2-docker-\u5B89\u88C5\u548C\u542F\u52A8" aria-hidden="true">#</a> 2.docker \u5B89\u88C5\u548C\u542F\u52A8</h2><h3 id="_1-\u542F\u52A8-docker-sudo-service-docker-start" tabindex="-1"><a class="header-anchor" href="#_1-\u542F\u52A8-docker-sudo-service-docker-start" aria-hidden="true">#</a> \uFF081\uFF09\u542F\u52A8 docker: sudo service docker start</h3><p>\uFF08\u6CE8\u610F windows \u5185\u7F6E\u7684 ubuntu \u6CA1\u6709\u547D\u4EE4 systemctl \u547D\u4EE4\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5B89\u88C5socker\u670D\u52A1
 curl -fsSL https://get.docker.com -o get-docker.sh
 sudo sh get-docker.sh

 \u542F\u52A8docker
 sudo service docker start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53E6\u4E00\u79CD\u65B9\u5F0F\u662F\uFF1A\u901A\u8FC7\u5B89\u88C5 windows \u5BA2\u6237\u7AEF\uFF0C\u672C\u8D28\u542F\u52A8\u540E\uFF0C\u901A\u8FC7 sock \u670D\u52A1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5176\u5B9E\u8D28\u662F\u5229\u7528docker\u7684C/S\u67B6\u6784\uFF0C\u5C06windows\u6A21\u5F0F\u4E0B\u7684docker\u5BF9\u5E94docker.sock\uFF0Cdocker\u5BA2\u6237\u7AEF\u4E8C\u8FDB\u5236\u548Cdocker\u7684\u6570\u636E\u76EE\u5F55\u6302\u8F7D\u5230WSL2\u91CC\u9762\u7684linux\u673A\u5668\uFF0C\u5728\u6B64linux\u673A\u5668\u4E0B\u6267\u884Cdocker\u547D\u4EE4(docker\u547D\u4EE4\u4E3Adocker\u5BA2\u6237\u7AEF)\uFF0C\u5B9E\u8D28\u4E3A\u5BA2\u6237\u7AEF\u901A\u8FC7 \u6302\u8F7D\u7684/var/run/docker.sock\u6587\u4EF6\u4E0Ewindows\u91CC\u9762\u7684dockerd\u670D\u52A1\u7AEF\u8FDB\u7A0B\u901A\u4FE1\u3002\u5982\u4E0B\u56FE\uFF0C\u6211\u4EEC\u5728linux\u4E0B\u91CD\u65B0\u542F\u52A8linux\u4E0Bdockerd\u8FDB\u7A0B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-\u68C0\u67E5-docker-\u662F\u5426\u6B63\u5E38" tabindex="-1"><a class="header-anchor" href="#_2-\u68C0\u67E5-docker-\u662F\u5426\u6B63\u5E38" aria-hidden="true">#</a> \uFF082\uFF09\u68C0\u67E5 docker \u662F\u5426\u6B63\u5E38</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u68C0\u67E5dockerd\u8FDB\u7A0B\u542F\u52A8
service docker status
ps aux|grep docker
# \u68C0\u67E5\u62C9\u53D6\u955C\u50CF\u7B49\u6B63\u5E38
docker pull busybox
docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uFF083\uFF09\u603B\u7ED3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. WSL2\u4E0B\u539F\u751Flinux\u5B89\u88C5docker\u65B9\u5F0F\u548C\u5B8C\u5168linux\u865A\u62DF\u673A\u5B89\u88C5docker\u7C7B\u4F3C\uFF0C\u533A\u522B\u5728\u4E8EWSL2\u4E0B\u7684linux\u4E0D\u652F\u6301systemd\u3002
2. Docker Desktop for windows\u65B9\u5F0F\uFF0C\u5176\u5B9E\u8D28\u662F\u5229\u7528docker\u7684C/S\u67B6\u6784\uFF0C\u5C06windows\u6A21\u5F0F\u4E0B\u7684docker\u5BF9\u5E94docker.sock\uFF0Cdocker\u5BA2\u6237\u7AEF\u4E8C\u8FDB\u5236\u548Cdocker\u7684\u6570\u636E\u76EE\u5F55\u6302\u8F7D\u5230WSL2\u91CC\u9762\u7684linux\u673A\u5668\uFF0C\u5728\u6B64linux\u673A\u5668\u4E0B\u6267\u884Cdocker\u547D\u4EE4(**docker\u547D\u4EE4\u4E3Adocker\u5BA2\u6237\u7AEF**)\uFF0C\u5B9E\u8D28\u4E3A\u5BA2\u6237\u7AEF\u901A\u8FC7 \u6302\u8F7D\u7684/var/run/docker.sock\u6587\u4EF6\u4E0Ewindows\u91CC\u9762\u7684dockerd\u670D\u52A1\u7AEF\u8FDB\u7A0B\u901A\u4FE1\u3002\u5982\u4E0B\u56FE\uFF0C\u6211\u4EEC\u5728linux\u4E0B\u91CD\u65B0\u542F\u52A8linux\u4E0Bdockerd\u8FDB\u7A0B\uFF0Clinux\u6A21\u5F0F\u4E0B\u4E0B\u8F7D\u7684busybox\u955C\u50CF\u53C8\u53EF\u4EE5\u770B\u5230\u4E86\uFF0C/var/run/docker.sock\u7684\u65F6\u95F4\u6233\u4E5F\u88AB\u66F4\u65B0\u4E86\uFF0C\u6B64\u65F6\u5BA2\u6237\u7AEF\u901A\u8FC7/var/run/docker.sock\u6587\u4EF6\u4E0Elinux\u4E0B\u7684dockerd\u670D\u52A1\u7AEF\u901A\u4FE1\u3002

![img](https://pic3.zhimg.com/80/v2-b321f958768817a93d360f1ed8a51f36_1440w.webp)

![img](https://pic4.zhimg.com/80/v2-10d37f621bfcbc6d183e12a4df6211e3_1440w.webp)

\\3. \u8981\u4F7F\u7528\u54EA\u4E2A\u6A21\u5F0F\u4E0B\u7684docker\uFF0C\u91CD\u542F\u4E0B\u8BE5\u6A21\u5F0F\u4E0B\u7684docker\u670D\u52A1\u7AEF\u5373\u53EF\uFF0C\u672C\u8D28\u90FD\u662F\u4FEE\u6539/var/run/docker.sock\u6587\u4EF6\u3002\u7406\u8BBA\u53EF\u4EE5\u540C\u65F6\u4F7F\u7528\uFF0C\u4F46\u662F\u9700\u8981\u4FEE\u6539docker\u914D\u7F6E\uFF0C\u901A\u8FC7-H\u53C2\u6570\u589E\u52A0dockerd\u7684tcp\u76D1\u542C\uFF0C\u6267\u884C\u5177\u4F53docker\u547D\u4EE4\u65F6\u6307\u5B9Adockerd\u76D1\u542C\u7684\u5BF9\u5E94IP\u548C\u7AEF\u53E3\u5373\u53EF\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dccker-\u5E38\u89C1\u51E0\u4E2A\u542F\u52A8\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#dccker-\u5E38\u89C1\u51E0\u4E2A\u542F\u52A8\u547D\u4EE4" aria-hidden="true">#</a> Dccker \u5E38\u89C1\u51E0\u4E2A\u542F\u52A8\u547D\u4EE4</h2><ul><li>\u5220\u9664 docker \u955C\u50CF</li></ul><p>docker rmi imageId</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6709\u65F6\u5019\uFF0C\u955C\u50CF\u4E4B\u95F4\u6709\u5173\u7CFB\uFF0C\u5148\u5220\u9664\u955C\u50CF\u5F15\u7528\u5BB9\u5668
docker rm 9d59e2278553
\u518D\u6B21\u5220\u9664\u955C\u50CF\u547D\u4EE4
docker rmi 5cb3aa00f899

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u67E5\u770B docker \u955C\u50CF</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker  images

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6E05\u7406\u955C\u50CF</li></ul><p>\u4E00\u822C\u8FD0\u884C\u4E00\u6BB5\u65F6\u95F4 docker \u540E\uFF0C\u4F1A\u6709\u6B8B\u7559\u5185\u5BB9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker  image  prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Docker \u5B89\u88C5\u54EA\u4E00\u4E2A\u7248\u672C\u5C0F\uFF0C</p><h3 id="alpine-\u7248\u672C\u955C\u50CF\u5927\u5C0F\u662F\u666E\u901A\u7248\u672C\u7684-1-5-\u5DE6\u53F3" tabindex="-1"><a class="header-anchor" href="#alpine-\u7248\u672C\u955C\u50CF\u5927\u5C0F\u662F\u666E\u901A\u7248\u672C\u7684-1-5-\u5DE6\u53F3" aria-hidden="true">#</a> alpine \u7248\u672C\u955C\u50CF\u5927\u5C0F\u662F\u666E\u901A\u7248\u672C\u7684 1/5 \u5DE6\u53F3</h3><h3 id="docker-\u90E8\u7F72-ngiix-\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#docker-\u90E8\u7F72-ngiix-\u73AF\u5883" aria-hidden="true">#</a> Docker \u90E8\u7F72 ngiix \u73AF\u5883</h3><h4 id="\u521B\u5EFA\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5BB9\u5668" aria-hidden="true">#</a> \u521B\u5EFA\u5BB9\u5668</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ sudo docker create nginx:1.12
34f277e22be252b51d204acbb32ce21181df86520de0c337a835de6932ca06c3

\u4F7F\u7528\u5BB9\u5668\u9700\u8981\u7ED9\u5BB9\u5668\u8D77\u540D\u5B57
 sudo docker create --name nginx nginx:1.12

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u542F\u52A8\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u5BB9\u5668" aria-hidden="true">#</a> \u542F\u52A8\u5BB9\u5668</h4><p>sudo docker start nginx</p><p>\u6839\u636E\u8D77\u7684\u540D\u5B57\u8FDB\u884C\u8FD0\u884C\u3002</p><h4 id="\u521B\u5EFA\u548C\u542F\u52A8\u8FDB\u884C\u5408\u5E76\u7684-docker-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u548C\u542F\u52A8\u8FDB\u884C\u5408\u5E76\u7684-docker-\u547D\u4EE4" aria-hidden="true">#</a> \u521B\u5EFA\u548C\u542F\u52A8\u8FDB\u884C\u5408\u5E76\u7684 docker \u547D\u4EE4</h4><p>sudo docker run --name nginx -d nginx:1.12</p><p>docker run \u7B49\u4E8E\u521B\u5EFA\u5BB9\u5668\u548C\u542F\u52A8\u5BB9\u5668\u3002</p><h4 id="\u7BA1\u7406\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u7406\u5BB9\u5668" aria-hidden="true">#</a> \u7BA1\u7406\u5BB9\u5668</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker  ps

\u7F57\u5217\u5F53\u524D\u7684\u5BB9\u5668\u3002

\u5982\u679C\u770B\u5BB9\u5668\u72B6\u6001\uFF1Adocker ps -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u505C\u6B62\u548C\u5220\u9664\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u505C\u6B62\u548C\u5220\u9664\u5BB9\u5668" aria-hidden="true">#</a> \u505C\u6B62\u548C\u5220\u9664\u5BB9\u5668</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo  docker stop  nginx

sudo  docker rm nginx ;//\u9ED8\u8BA4\u60C5\u51B5\u4E0D\u53EF\u4EE5\u5220\u9664\uFF0C-f\u6216\u662F--force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-\u5B89\u88C5-monog" tabindex="-1"><a class="header-anchor" href="#docker-\u5B89\u88C5-monog" aria-hidden="true">#</a> docker \u5B89\u88C5 monog</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Digest: sha256:c57e511ce78d6847e2605db8e374611492f588e24f93c80e0c6baba9d6c029c3
Status: Downloaded newer image for mongo:latest
docker.io/library/mongo:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-\u5B89\u88C5-redis" tabindex="-1"><a class="header-anchor" href="#docker-\u5B89\u88C5-redis" aria-hidden="true">#</a> docker \u5B89\u88C5 redis</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- \u5B89\u88C5redis

docker pull redis:alpine

- \u542F\u52A8redis

 docker run -it redis:alpine redis-cli -h 192.168.0.107

\u6700\u540E\u7684ip\u5730\u5740\uFF0C\u4E3A\u4E2A\u4EBA\u7684\u5730\u5740

\u8FD9\u91CC\u7684redis\u5730\u5740\uFF1A\u4E3A\u8FD9\u91CC\u7684\u5185\u5BB9

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-\u5B89\u88C5-mongo" tabindex="-1"><a class="header-anchor" href="#docker-\u5B89\u88C5-mongo" aria-hidden="true">#</a> docker \u5B89\u88C5 mongo</h3><ul><li>\u5B89\u88C5 mongo</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker pull mongo:4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD0\u884C mongo</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>docker run <span class="token operator">-</span>d \\
<span class="token operator">--</span>name mongo \\
<span class="token operator">-</span>v <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>docker<span class="token operator">/</span>mongo<span class="token operator">/</span>configdb<span class="token operator">:</span><span class="token operator">/</span>data<span class="token operator">/</span>configdb \\
<span class="token operator">-</span>v <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>docker<span class="token operator">/</span>mongo<span class="token operator">/</span>data<span class="token operator">:</span><span class="token operator">/</span>data<span class="token operator">/</span>db \\
<span class="token operator">-</span>p <span class="token number">27017</span><span class="token operator">:</span><span class="token number">27017</span> \\
<span class="token literal-property property">mongo</span><span class="token operator">:</span><span class="token number">4</span> \\
<span class="token operator">--</span>auth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u521B\u5EFA\u7528\u6237</li></ul><p>\u6DFB\u52A0\u8D26\u6237</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker exec -it mongo mongo admin

db.createUser({ user: &#39;admin&#39;, pwd: &#39;123456&#39;, roles: [ { role: &quot;root&quot;, db: &quot;admin&quot; } ] });

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u521B\u5EFA\u94FE\u63A5 navicat \u540E\uFF0C\u94FE\u63A5</li></ul><p>\u5FC5\u987B\u7528\u7528\u6237\u5BC6\u7801\u8FDE\u63A5</p><h3 id="docker-\u5B89\u88C5-mysql" tabindex="-1"><a class="header-anchor" href="#docker-\u5B89\u88C5-mysql" aria-hidden="true">#</a> docker \u5B89\u88C5 mysql</h3><h4 id="_1-\u62C9\u53D6-mysql-\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#_1-\u62C9\u53D6-mysql-\u955C\u50CF" aria-hidden="true">#</a> \uFF081\uFF09\u62C9\u53D6 mysql \u955C\u50CF</h4><p>docker pull mysql:5.7</p><h4 id="_2-\u542F\u52A8-mysql-\u6B63\u5F0F\u914D\u7F6E\u597D\u4E86\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_2-\u542F\u52A8-mysql-\u6B63\u5F0F\u914D\u7F6E\u597D\u4E86\u6570\u636E\u5E93" aria-hidden="true">#</a> \uFF082\uFF09\u542F\u52A8 mysql\uFF08\u6B63\u5F0F\u914D\u7F6E\u597D\u4E86\u6570\u636E\u5E93\uFF09</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run -d \\
--name mysql \\
-p 3306:3306 \\
-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf \\
-v /usr/local/docker/mysql/data/mysql:/var/lib/mysql \\
-e MYSQL_ROOT_PASSWORD=123456 \\
mysql:5.7

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uFF083\uFF09\u5220\u9664 mysql \u670D\u52A1</p><p>docker rm -f mysql</p><p>\uFF084\uFF09\u914D\u7F6E\u6570\u636E\u5E93\u548C\u7B2C\u4E8C\u6B65\u4E00\u6837</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
docker run -d \\
--name mysql \\
-p 3306:3306 \\
-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf \\
-v /usr/local/docker/mysql/data/mysql:/var/lib/mysql \\
-e MYSQL_ROOT_PASSWORD=123456 \\
mysql:5.7


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6570\u636E\u5E93\u5185\u5BB9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5176\u4ED6\u4E0D\u53D8\uFF0C\u989D\u5916\u6DFB\u52A0\u4E86\u4E24\u4E2A\u6302\u8F7D\u5B50\u547D\u4EE4\uFF1A

-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf: \u5C06\u5BB9\u5668\u4E2D /etc/mysql/mysql.conf.d/mysqld.cnf \u914D\u7F6E\u6587\u4EF6\u6302\u8F7D\u5230\u5BBF\u4E3B\u673A\u7684 /usr/local/docker/mysql/config/mysqld.cnf \u6587\u4EF6\u4E0A\uFF1B
-v
/usr/local/docker/mysql/data:/var/lib/mysql: \u5C06\u5BB9\u5668\u4E2D /var/lib/mysql \u6570\u636E\u76EE\u5F55\u6302\u8F7D\u5230\u5BBF\u4E3B\u673A\u7684 /usr/local/docker/mysql/data \u76EE\u5F55\u4E0B\uFF1B
\u6267\u884C\u547D\u4EE4\u5B8C\u6210\u540E\uFF0C\u67E5\u770B\u4E0B\u5BB9\u5668\u662F\u5426\u542F\u52A8\uFF1A


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u5F53\u524D\u7684-ip" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5F53\u524D\u7684-ip" aria-hidden="true">#</a> \u67E5\u770B\u5F53\u524D\u7684 ip</h2><p>\u6B64\u65F6\u7535\u8111\u7684 ip \u5730\u5740\uFF0C\u8FD9\u91CC\u5185\u5BB9\u65E0\u7EBF\u5C40\u57DF\u7F51\u9002\u914D\u5668 WALN \u7684\u5185\u5BB9\u5BF9\u5E94</p>`,67);function D(W,A){const n=r("RouterLink");return l(),c("div",null,[e("nav",u,[e("ul",null,[e("li",null,[d(n,{to:"#window-\u7684-wsl2-\u5B89\u88C5-docker"},{default:i(()=>[v]),_:1})]),e("li",null,[d(n,{to:"#_1-\u5B89\u88C5-docker"},{default:i(()=>[m]),_:1}),e("ul",null,[e("li",null,[d(n,{to:"#\u8BBE\u7F6E-ununtu-\u7684-api-\u5B89\u88C5\u88C5"},{default:i(()=>[p]),_:1})])])]),e("li",null,[d(n,{to:"#_2-docker-\u5B89\u88C5\u548C\u542F\u52A8"},{default:i(()=>[b]),_:1}),e("ul",null,[e("li",null,[d(n,{to:"#_1-\u542F\u52A8-docker-sudo-service-docker-start"},{default:i(()=>[k]),_:1})]),e("li",null,[d(n,{to:"#_2-\u68C0\u67E5-docker-\u662F\u5426\u6B63\u5E38"},{default:i(()=>[h]),_:1})])])]),e("li",null,[d(n,{to:"#dccker-\u5E38\u89C1\u51E0\u4E2A\u542F\u52A8\u547D\u4EE4"},{default:i(()=>[g]),_:1}),e("ul",null,[e("li",null,[d(n,{to:"#alpine-\u7248\u672C\u955C\u50CF\u5927\u5C0F\u662F\u666E\u901A\u7248\u672C\u7684-1-5-\u5DE6\u53F3"},{default:i(()=>[x]),_:1})]),e("li",null,[d(n,{to:"#docker-\u90E8\u7F72-ngiix-\u73AF\u5883"},{default:i(()=>[_]),_:1})]),e("li",null,[d(n,{to:"#docker-\u5B89\u88C5-monog"},{default:i(()=>[f]),_:1})]),e("li",null,[d(n,{to:"#docker-\u5B89\u88C5-redis"},{default:i(()=>[y]),_:1})]),e("li",null,[d(n,{to:"#docker-\u5B89\u88C5-mongo"},{default:i(()=>[q]),_:1})]),e("li",null,[d(n,{to:"#docker-\u5B89\u88C5-mysql"},{default:i(()=>[w]),_:1})])])]),e("li",null,[d(n,{to:"#\u67E5\u770B\u5F53\u524D\u7684-ip"},{default:i(()=>[L]),_:1})])])]),S])}var N=a(t,[["render",D],["__file","014docker\u90E8\u7F72mysql\uFF0Cnginx,mongo\u8BB0\u5F55.html.vue"]]);export{N as default};
