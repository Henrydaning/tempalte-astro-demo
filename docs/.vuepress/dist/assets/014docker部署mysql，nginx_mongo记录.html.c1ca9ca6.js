import{_ as c,r,o as t,c as o,a as e,b as i,w as d,d as l,e as n}from"./app.5805b0e6.js";const u={},v={class:"table-of-contents"},m=n("Window \u7684 WSL2 \u5B89\u88C5 docker"),b=n("1.\u5B89\u88C5 docker"),p=n("\u8BBE\u7F6E ununtu \u7684 api \u5B89\u88C5\u88C5"),h=n("2.docker \u5B89\u88C5\u548C\u542F\u52A8"),x=n("\uFF081\uFF09\u542F\u52A8 docker: sudo service docker start"),g=n("\uFF082\uFF09\u68C0\u67E5 docker \u662F\u5426\u6B63\u5E38"),_=n("Dccker \u5E38\u89C1\u51E0\u4E2A\u542F\u52A8\u547D\u4EE4"),k=n("alpine \u7248\u672C\u955C\u50CF\u5927\u5C0F\u662F\u666E\u901A\u7248\u672C\u7684 1/5 \u5DE6\u53F3"),f=n("Docker \u90E8\u7F72 ngiix \u73AF\u5883"),y=n("docker \u5B89\u88C5 monog"),w=n("docker \u5B89\u88C5 redis"),q=n("docker \u5B89\u88C5 mongo"),S=n("docker \u5B89\u88C5 mysql"),L=n("\u67E5\u770B\u5F53\u524D\u7684 ip"),z=n("4.\u8D85\u5FEB\u542F\u52A8 docker-common \u4F7F\u7528\u8BB0\u5F55\u6587\u6863\u548C\u9879\u76EE\u5730\u5740:docker-compose\u9879\u76EE"),$=n("\u4EE5\u8FD0\u884C nginx \u4E3A\u4F8B"),N=n("\u542F\u52A8 docker \u670D\u52A1\u540E\uFF0C\u7136\u540E\u542F\u52A8 docker-compose up -d \u540E"),I=n("\u4F7F\u7528\u6587\u4EF6\u540E\uFF0C\u7136\u540E\u542F\u52A8\u6620\u5C04\u7684\u7AEF\u53E3"),D=n("5.docker \u4E0A\u9762\u7684 nginx \u914D\u7F6E\u8BB0\u5F55\uFF0C\u90E8\u7F72\u524D\u7AEF\u9879\u76EE"),T=n("\u65B9\u6848 1\uFF1A"),O=n("\u65B9\u6848 2\uFF1A\u5982\u679C\u60F3\u8981\u7528\u6253\u5305\u7684\u6587\u4EF6\u5939\uFF0C\u90A3\u4E48\u589E\u52A0\u8F93\u51FA\u6587\u4EF6\u5939\u540D\u79F0\u81EA\u5B9A\u4E49"),P=n("6.nginx.conf\u6C47\u603B\u4F7F\u7528\u6848\u4F8B"),W=n("main\u5168\u5C40\u6A21\u5757"),j=n("Events\u6A21\u5757"),H=n("HTTP\u6A21\u5757"),A=n("upstream\u6307\u4EE4"),F=n("Server\u6A21\u5757"),R=n("Location"),X=n("HTTPS server"),C=l(`<h2 id="window-\u7684-wsl2-\u5B89\u88C5-docker" tabindex="-1"><a class="header-anchor" href="#window-\u7684-wsl2-\u5B89\u88C5-docker" aria-hidden="true">#</a> Window \u7684 WSL2 \u5B89\u88C5 docker</h2><h2 id="_1-\u5B89\u88C5-docker" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5-docker" aria-hidden="true">#</a> 1.\u5B89\u88C5 docker</h2><p>\u8BBE\u7F6E\u5B50\u7CFB\u7EDF\u514D\u5BC6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> \u66FF\u6362leap\u4E3A\u81EA\u5DF1\u5355\u72EC\u914D\u7F6E\u7684\u7528\u6237\u540D
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u5F53\u524D\u7684-ip" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5F53\u524D\u7684-ip" aria-hidden="true">#</a> \u67E5\u770B\u5F53\u524D\u7684 ip</h2><p>\u6B64\u65F6\u7535\u8111\u7684 ip \u5730\u5740\uFF0C\u8FD9\u91CC\u5185\u5BB9\u65E0\u7EBF\u5C40\u57DF\u7F51\u9002\u914D\u5668 WALN \u7684\u5185\u5BB9\u5BF9\u5E94</p><h2 id="_4-\u8D85\u5FEB\u542F\u52A8-docker-common-\u4F7F\u7528\u8BB0\u5F55\u6587\u6863\u548C\u9879\u76EE\u5730\u5740-docker-compose\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_4-\u8D85\u5FEB\u542F\u52A8-docker-common-\u4F7F\u7528\u8BB0\u5F55\u6587\u6863\u548C\u9879\u76EE\u5730\u5740-docker-compose\u9879\u76EE" aria-hidden="true">#</a> 4.\u8D85\u5FEB\u542F\u52A8 docker-common \u4F7F\u7528\u8BB0\u5F55\u6587\u6863\u548C\u9879\u76EE\u5730\u5740:docker-compose\u9879\u76EE</h2>`,68),E={href:"https://gitee.com/nyhxiaoning/zkwq-mini-program-platform-api.git",target:"_blank",rel:"noopener noreferrer"},G=n("\u9879\u76EE\u5730\u5740 docker"),B=l(`<h3 id="\u4EE5\u8FD0\u884C-nginx-\u4E3A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4EE5\u8FD0\u884C-nginx-\u4E3A\u4F8B" aria-hidden="true">#</a> \u4EE5\u8FD0\u884C nginx \u4E3A\u4F8B</h3><ul><li><p>\u8FDB\u5165 docker-nginx \u76EE\u5F55\uFF0C\u76F4\u63A5\u8FD0\u884C <code>docker-compose up -d</code> , \u597D\u4E86\uFF0C\u4E00\u952E\u8FD0\u884C\u5B8C\u6BD5</p></li><li><p>\u91CD\u542F docker-compose restart</p></li></ul><h3 id="\u542F\u52A8-docker-\u670D\u52A1\u540E-\u7136\u540E\u542F\u52A8-docker-compose-up-d-\u540E" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-docker-\u670D\u52A1\u540E-\u7136\u540E\u542F\u52A8-docker-compose-up-d-\u540E" aria-hidden="true">#</a> \u542F\u52A8 docker \u670D\u52A1\u540E\uFF0C\u7136\u540E\u542F\u52A8 docker-compose up -d \u540E</h3><p>\u7136\u540E\u4F7F\u7528\u770B\u6587\u4EF6\u7684\u6620\u5C04\u7AEF\u53E3\uFF1A\u6DFB\u52A0\u6620\u5C04\u7AEF\u53E3\u7684\u5185\u5BB9 docker-compose.yml</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker-nginx\u6587\u4EF6\u5939\u4E2D\uFF0C\u914D\u7F6Edocker-compose.yml\u914D\u7F6E\u6587\u4EF6

version: &#39;3&#39;
services:
    web:
        image: nginx:alpine
        container_name: docker-nginx
        volumes:
            - &quot;./etc/nginx:/etc/nginx/conf.d&quot;
            - &quot;./etc/ssl:/etc/ssl&quot;
            - &quot;./web:/var/www/html&quot;
        ports: # \u8BBE\u7F6E\u8F6C\u53D1\u7684\u7AEF\u53E3\uFF0C\u5C06\u540E\u9762\u7684\u7AEF\u53E3\u76D1\u542C\u914D\u7F6E\u540E\uFF0C\u8F6C\u53D1\u7ED9\u524D\u9762\u7AEF\u53E3\uFF0C\u6587\u4EF6\u5939nigix\u4E2D\u542B\u6709\u914D\u7F6E
            - &quot;8000:80&quot; # nigix\u670D\u52A1\u5668\u914D\u7F6E\u5730\u5740
            - &quot;1333:16533&quot; # \u4E2A\u4EBA\u535A\u5BA2\u90E8\u7F72\u7F51\u7AD9
            - &quot;12389:19999&quot; # \u6620\u5C04\u4E2A\u4EBAapi\uFF0C\u5C0F\u5E94\u7528\u5E73\u53F0
            - &quot;3443:443&quot;
        environment: # \u8BBE\u7F6E\u53D8\u91CF\u5730\u5740\u7684\u4F7F\u7528\uFF0C\u5168\u5C40\u53D8\u91CF.env\u4F7F\u7528
            - NGINX_HOST=\${NGINX_HOST}
        # command: /bin/sh -c &quot;envsubst &#39;$$NGINX_HOST&#39; &lt; /etc/nginx/conf.d/default.template &gt; /etc/nginx/conf.d/default.conf &amp;&amp; nginx -g &#39;daemon off;&#39;&quot;
        restart: always


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u6587\u4EF6\u540E-\u7136\u540E\u542F\u52A8\u6620\u5C04\u7684\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6587\u4EF6\u540E-\u7136\u540E\u542F\u52A8\u6620\u5C04\u7684\u7AEF\u53E3" aria-hidden="true">#</a> \u4F7F\u7528\u6587\u4EF6\u540E\uFF0C\u7136\u540E\u542F\u52A8\u6620\u5C04\u7684\u7AEF\u53E3</h3><p>\u6765\u4ECB\u7ECD\u4E0B docker-nginx \u7684\u76EE\u5F55</p><p>etc</p><ul><li>ngxin nginx \u914D\u7F6E</li><li>ssl https \u914D\u7F6E web---\u9632\u6B62\u524D\u7AEF\u9879\u76EE\u7684\u76EE\u5F55</li><li>public nginx \u9ED8\u8BA4\u9875\u9762</li><li>demo-a \u666E\u901A html \u670D\u52A1\u914D\u7F6E</li><li>demo-b \u5355\u9875\u9762\uFF08vue\u3001react \u4E4B\u7C7B\u7684\uFF09\u9879\u76EE\u670D\u52A1\u914D\u7F6E</li></ul><p>docker-compose.yml docker-compose \u914D\u7F6E\uFF0C\u7528\u4E8E\u914D\u7F6E\u7AEF\u53E3\u548C\u6570\u636E\u6302\u8F7D\u7B49</p><p>\u867D\u7136\u91CC\u9762\u7684\u914D\u7F6E\u90FD\u5F88\u7B80\u5355\uFF0C\u4F46\u662F\u6211\u51B3\u5B9A\u8FD8\u662F\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B\u6DFB\u52A0\u9879\u76EE</p><h5 id="\u5982\u4F55\u6DFB\u52A0\u4E00\u4E2A\u65B0\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u6DFB\u52A0\u4E00\u4E2A\u65B0\u9879\u76EE" aria-hidden="true">#</a> \u5982\u4F55\u6DFB\u52A0\u4E00\u4E2A\u65B0\u9879\u76EE</h5><p>\u6BD4\u5982\u589E\u52A0\u4E00\u4E2A\u5546\u57CE\u9879\u76EE\uFF0C\u9879\u76EE\u540D\u79F0\u53EB&quot;mall&quot;</p><ul><li><p>\u5728 etc/nginx \u76EE\u5F55\u4E0B\u589E\u52A0\u4E00\u4E2A nginx \u914D\u7F6E\u6587\u4EF6\uFF0C\u90A3\u4E48\u5BF9\u5E94\u589E\u52A0\u4E00\u4E2A mall.conf\uFF0C\u91CC\u9762\u914D\u7F6E\u7684\u5185\u5BB9\u53EF\u4EE5\u53C2\u8003 demo-a.conf \u548C demo-b.conf</p></li><li><p>\u4E0A\u9762\u4E09\u6B65\u505A\u5B8C\uFF0C\u5C31\u53EF\u4EE5\u91CD\u542F\u4E86</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker-compose up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-docker-\u4E0A\u9762\u7684-nginx-\u914D\u7F6E\u8BB0\u5F55-\u90E8\u7F72\u524D\u7AEF\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_5-docker-\u4E0A\u9762\u7684-nginx-\u914D\u7F6E\u8BB0\u5F55-\u90E8\u7F72\u524D\u7AEF\u9879\u76EE" aria-hidden="true">#</a> 5.docker \u4E0A\u9762\u7684 nginx \u914D\u7F6E\u8BB0\u5F55\uFF0C\u90E8\u7F72\u524D\u7AEF\u9879\u76EE</h2><p>\u6CE8\u610F\uFF1A\u524D\u7AEF\u6253\u5305\u7684\u6587\u4EF6\u5939\u76EE\u5F55\uFF0C\u4E0D\u8981\u81EA\u5DF1\u6307\u5B9A\uFF0C\u5982\u679C\u540E\u53F0\u914D\u7F6E\u597D\u4E86\u540D\u79F0\uFF0C\u90A3\u4E48\u76F4\u63A5\u5C06\u6253\u5305\u5B8C\u6210\u7684\u653E\u5165\u91CC\u9762</p><h3 id="\u65B9\u6848-1" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848-1" aria-hidden="true">#</a> \u65B9\u6848 1\uFF1A</h3>`,18),V={href:"https://gitee.com/nyhxiaoning/zkwq-mini-program-platform-api.git",target:"_blank",rel:"noopener noreferrer"},M=n("\u5B9E\u73B0\u5730\u5740\u65B9\u6848 gitee \u5730\u5740"),U=n(" \u914D\u7F6E vuepress \u5185\u5BB9\u90E8\u7F72\u6587\u4EF6\u8BB0\u5F55 1.\u7B2C\u4E00\u6B65 \u914D\u7F6E\u76F8\u5173\u7684 dist \u653E\u5165\u7684\u6587\u4EF6\u5939\u540D\u79F0\uFF0C\u6CE8\u610F\u53EA\u6709 dist \u91CC\u9762\u7684\u5185\u5BB9\uFF0C\u4E0D\u8981\u6709 dist,"),Q=l(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6BD4\u5982nginx\u6587\u4EF6\u5939\u653E\u5165\u4E3Aapidist,
\u5982\u53F3\u8FB9\uFF1Aroot /var/www/html/apidist;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u7B2C\u4E8C\u6B65</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u914D\u7F6E\u6253\u5305vuepress,\u914D\u7F6E\u5730\u5740\u4E3A\uFF1A./
base:&quot;./&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.\u7B2C\u4E09\u6B65 \u5176\u4ED6\u7684 img \u5730\u5740\u5185\u5BB9\uFF0C\u914D\u7F6E\u6B63\u786E\uFF0C\u53EF\u4EE5\u6B63\u5E38\u5C55\u793A\u3002</p><h3 id="\u65B9\u6848-2-\u5982\u679C\u60F3\u8981\u7528\u6253\u5305\u7684\u6587\u4EF6\u5939-\u90A3\u4E48\u589E\u52A0\u8F93\u51FA\u6587\u4EF6\u5939\u540D\u79F0\u81EA\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848-2-\u5982\u679C\u60F3\u8981\u7528\u6253\u5305\u7684\u6587\u4EF6\u5939-\u90A3\u4E48\u589E\u52A0\u8F93\u51FA\u6587\u4EF6\u5939\u540D\u79F0\u81EA\u5B9A\u4E49" aria-hidden="true">#</a> \u65B9\u6848 2\uFF1A\u5982\u679C\u60F3\u8981\u7528\u6253\u5305\u7684\u6587\u4EF6\u5939\uFF0C\u90A3\u4E48\u589E\u52A0\u8F93\u51FA\u6587\u4EF6\u5939\u540D\u79F0\u81EA\u5B9A\u4E49</h3><p>\u5982\u4E0B\u9762dest\u6587\u4EF6\u5939\u540D\u79F0</p><p>nginx \u914D\u7F6E\uFF0C\u6BD4\u5982\u81EA\u5DF1\u60F3\u8981 apidist2,\u90A3\u4E48\u914D\u7F6E\u4E00\u4E0B apidist2</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6700\u540Evuepress\u7684base\u914D\u7F6E
base:&quot;./&quot;
dest:&quot;apidist2&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-nginx-conf\u6C47\u603B\u4F7F\u7528\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_6-nginx-conf\u6C47\u603B\u4F7F\u7528\u6848\u4F8B" aria-hidden="true">#</a> 6.nginx.conf\u6C47\u603B\u4F7F\u7528\u6848\u4F8B</h2><h3 id="main\u5168\u5C40\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#main\u5168\u5C40\u6A21\u5757" aria-hidden="true">#</a> main\u5168\u5C40\u6A21\u5757</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u5B9A\u4E49Nginx\u8FD0\u884C\u7684\u7528\u6237\u548C\u7528\u6237\u7EC4
user www www;
#nginx\u8FDB\u7A0B\u6570\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A\u7B49\u4E8ECPU\u603B\u6838\u5FC3\u6570\u3002
worker_processes 8;
#\u5168\u5C40\u9519\u8BEF\u65E5\u5FD7\u5B9A\u4E49\u7C7B\u578B\uFF0C[ debug | info | notice | warn | error | crit ]
error_log /var/log/nginx/error.log info;
#\u8FDB\u7A0B\u6587\u4EF6
pid /var/run/nginx.pid;
# \u4E00\u4E2Anginx\u8FDB\u7A0B\u6253\u5F00\u7684\u6700\u591A\u6587\u4EF6\u63CF\u8FF0\u7B26\u6570\u76EE\uFF0C\u7406\u8BBA\u503C\u5E94\u8BE5\u662F\u6700\u591A\u6253\u5F00\u6587\u4EF6\u6570\uFF08\u7CFB\u7EDF\u7684\u503Culimit -n\uFF09
# \u4E0Enginx\u8FDB\u7A0B\u6570\u76F8\u9664\uFF0C\u4F46\u662Fnginx\u5206\u914D\u8BF7\u6C42\u5E76\u4E0D\u5747\u5300\uFF0C\u6240\u4EE5\u5EFA\u8BAE\u4E0Eulimit -n\u7684\u503C\u4FDD\u6301\u4E00\u81F4\u3002
worker_rlimit_nofile 65535;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="events\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#events\u6A21\u5757" aria-hidden="true">#</a> Events\u6A21\u5757</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u5DE5\u4F5C\u6A21\u5F0F\u4E0E\u8FDE\u63A5\u6570\u4E0A\u9650
events  {
#\u53C2\u8003\u4E8B\u4EF6\u6A21\u578B\uFF0Cuse [ kqueue | rtsig | epoll | /dev/poll | select | poll ];epoll\u6A21\u578B\u662FLinux 2.6\u4EE5\u4E0A
#\u7248\u672C\u5185\u6838\u4E2D\u7684\u9AD8\u6027\u80FD\u7F51\u7EDCI/O\u6A21\u578B\uFF0C\u5982\u679C\u8DD1\u5728FreeBSD\u4E0A\u9762\uFF0C\u5C31\u7528kqueue\u6A21\u578B\u3002
use epoll; 
#\u5355\u4E2A\u8FDB\u7A0B\u6700\u5927\u8FDE\u63A5\u6570\uFF08\u6700\u5927\u8FDE\u63A5\u6570=\u8FDE\u63A5\u6570*\u8FDB\u7A0B\u6570\uFF09
worker_connections 65535;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="http\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#http\u6A21\u5757" aria-hidden="true">#</a> HTTP\u6A21\u5757</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http  {
#\u8BBE\u5B9Ahttp\u670D\u52A1\u5668
include mime.types; #\u6587\u4EF6\u6269\u5C55\u540D\u4E0E\u6587\u4EF6\u7C7B\u578B\u6620\u5C04\u8868
default_type application/octet-stream; #\u9ED8\u8BA4\u6587\u4EF6\u7C7B\u578B
#charset utf-8; #\u9ED8\u8BA4\u7F16\u7801
server_names_hash_bucket_size 128; #\u670D\u52A1\u5668\u540D\u5B57\u7684hash\u8868\u5927\u5C0F
client_header_buffer_size 32k; #\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u9650\u5236
large_client_header_buffers 4 64k; #\u8BBE\u5B9A\u8BF7\u6C42\u7F13
client_max_body_size 8m; #\u8BBE\u5B9A\u8BF7\u6C42\u7F13
sendfile on; # \u5F00\u542F\u9AD8\u6548\u6587\u4EF6\u4F20\u8F93\u6A21\u5F0F\uFF0Csendfile\u6307\u4EE4\u6307\u5B9Anginx\u662F\u5426\u8C03\u7528sendfile\u51FD\u6570\u6765\u8F93\u51FA\u6587\u4EF6\uFF0C 
# \u5BF9\u4E8E\u666E\u901A\u5E94\u7528\u8BBE\u4E3A on\uFF0C\u5982\u679C\u7528\u6765\u8FDB\u884C\u4E0B\u8F7D\u7B49\u5E94\u7528\u78C1\u76D8IO\u91CD\u8D1F\u8F7D\u5E94\u7528\uFF0C\u53EF\u8BBE\u7F6E\u4E3Aoff\uFF0C\u4EE5\u5E73\u8861\u78C1\u76D8
# \u4E0E\u7F51\u7EDC I/O\u5904\u7406\u901F\u5EA6\uFF0C\u964D\u4F4E\u7CFB\u7EDF\u7684\u8D1F\u8F7D\u3002\u6CE8\u610F\uFF1A\u5982\u679C\u56FE\u7247\u663E\u793A\u4E0D\u6B63\u5E38\u628A\u8FD9\u4E2A\u6539\u6210off\u3002
autoindex on; #\u5F00\u542F\u76EE\u5F55\u5217\u8868\u8BBF\u95EE\uFF0C\u5408\u9002\u4E0B\u8F7D\u670D\u52A1\u5668\uFF0C\u9ED8\u8BA4\u5173\u95ED\u3002
tcp_nopush on; #\u9632\u6B62\u7F51\u7EDC\u963B\u585E
tcp_nodelay on; #\u9632\u6B62\u7F51\u7EDC\u963B\u585E
keepalive_timeout 120; #\u957F\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u79D2

#FastCGI\u76F8\u5173\u53C2\u6570\u662F\u4E3A\u4E86\u6539\u5584\u7F51\u7AD9\u7684\u6027\u80FD\uFF1A\u51CF\u5C11\u8D44\u6E90\u5360\u7528\uFF0C\u63D0\u9AD8\u8BBF\u95EE\u901F\u5EA6\u3002\u4E0B\u9762\u53C2\u6570\u770B\u5B57\u9762\u610F\u601D\u90FD\u80FD\u89E3\u3002
fastcgi_connect_timeout 300;
fastcgi_send_timeout 300;
fastcgi_read_timeout 300;
fastcgi_buffer_size 64k;
fastcgi_buffers 4 64k;
fastcgi_busy_buffers_size 128k;
fastcgi_temp_file_write_size 128k;

#gzip\u6A21\u5757\u8BBE\u7F6E
gzip on; #\u5F00\u542Fgzip\u538B\u7F29\u8F93\u51FA
gzip_min_length 1k; #\u6700\u5C0F\u538B\u7F29\u6587\u4EF6\u5927\u5C0F
gzip_buffers 4 16k; #\u538B\u7F29\u7F13\u51B2\u533A
gzip_http_version 1.0; #\u538B\u7F29\u7248\u672C\uFF08\u9ED8\u8BA41.1\uFF0C\u524D\u7AEF\u5982\u679C\u662Fsquid2.5\u8BF7\u4F7F\u75281.0\uFF09
gzip_comp_level 2; #\u538B\u7F29\u7B49\u7EA7
gzip_types text/plain application/x-javascript text/css application/xml;
# \u538B\u7F29\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u5C31\u5DF2\u7ECF\u5305\u542Btext/html\uFF0C\u6240\u4EE5\u4E0B\u9762\u5C31\u4E0D\u7528\u518D\u5199\u4E86\uFF0C\u4F46\u662F\u4F1A\u6709\u4E00\u4E2Awarn\u3002
gzip_vary on;
#limit_zone crawler $binary_remote_addr 10m; #\u5F00\u542F\u9650\u5236IP\u8FDE\u63A5\u6570\u7684\u65F6\u5019\u9700\u8981\u4F7F\u7528
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="upstream\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#upstream\u6307\u4EE4" aria-hidden="true">#</a> upstream\u6307\u4EE4</h3><p>Nginx\u7684\u8D1F\u8F7D\u5747\u8861\u6A21\u5757\u76EE\u524D\u652F\u63014\u79CD\u8C03\u5EA6\u7B97\u6CD5\u3002weight \u8F6E\u8BE2\uFF0Cip_hash\uFF0Cfair\uFF0Curl_hash\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>upstream www.xx.com {
# upstream\u7684\u8D1F\u8F7D\u5747\u8861\uFF0Cweight\u662F\u6743\u91CD\uFF0C\u53EF\u4EE5\u6839\u636E\u673A\u5668\u914D\u7F6E\u5B9A\u4E49\u6743\u91CD\u3002weigth\u53C2\u6570\u8868\u793A\u6743\u503C\uFF0C\u6743\u503C\u8D8A
# \u9AD8\u88AB\u5206\u914D\u5230\u7684\u51E0\u7387\u8D8A\u5927\u3002
server 192.168.80.121:80 weight=3;
server 192.168.80.122:80 weight=2;
server 192.168.80.123:80 weight=3;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="server\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#server\u6A21\u5757" aria-hidden="true">#</a> Server\u6A21\u5757</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u865A\u62DF\u4E3B\u673A\u7684\u914D\u7F6E
server {
  # \u76D1\u542C\u7AEF\u53E3
  listen 80;
  #\u57DF\u540D\u53EF\u4EE5\u6709\u591A\u4E2A\uFF0C\u7528\u7A7A\u683C\u9694\u5F00
  server_name www.xx.com;
  ssi on; # Server Side Include\uFF0C\u901A\u5E38\u79F0\u4E3A\u670D\u52A1\u5668\u7AEF\u5D4C\u5165
  index index.html index.htm index.php;
  root /data/www/www.xx.com;

  # \u56FE\u7247\u7F13\u5B58\u65F6\u95F4\u8BBE\u7F6E
  location ~ .*.(gif|jpg|jpeg|png|bmp|swf)$ {
    expires 10d;
  }

  # JS\u548CCSS\u7F13\u5B58\u65F6\u95F4\u8BBE\u7F6E
  location ~ .*.(js|css)?$ {
    expires 1h;
  }

  # \u65E5\u5FD7\u683C\u5F0F\u8BBE\u5B9A
  log_format access &#39;$remote_addr \u2013 $remote_user [$time_local] &quot;$request&quot; &#39;
  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
  &#39;&quot;$http_user_agent&quot; $http_x_forwarded_for&#39;;
  # \u5B9A\u4E49\u672C\u865A\u62DF\u4E3B\u673A\u7684\u8BBF\u95EE\u65E5\u5FD7
  access_log /var/log/nginx/ospring.pw.log access;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> Location</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u5BF9 &quot;/&quot; \u542F\u7528\u53CD\u5411\u4EE3\u7406
location / {
    proxy_pass http://127.0.0.1:88;
    proxy_redirect off;
    proxy_set_header X-Real-IP $remote_addr;
    #\u540E\u7AEF\u7684Web\u670D\u52A1\u5668\u53EF\u4EE5\u901A\u8FC7X-Forwarded-For\u83B7\u53D6\u7528\u6237\u771F\u5B9EIP
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    #\u4EE5\u4E0B\u662F\u4E00\u4E9B\u53CD\u5411\u4EE3\u7406\u7684\u914D\u7F6E\uFF0C\u53EF\u9009\u3002
    proxy_set_header Host $host;
    client_max_body_size 10m; #\u5141\u8BB8\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6700\u5927\u5355\u6587\u4EF6\u5B57\u8282\u6570
    client_body_buffer_size 128k; #\u7F13\u51B2\u533A\u4EE3\u7406\u7F13\u51B2\u7528\u6237\u7AEF\u8BF7\u6C42\u7684\u6700\u5927\u5B57\u8282\u6570\uFF0C
    proxy_connect_timeout 90; #nginx\u8DDF\u540E\u7AEF\u670D\u52A1\u5668\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4(\u4EE3\u7406\u8FDE\u63A5\u8D85\u65F6)
    proxy_send_timeout 90; #\u540E\u7AEF\u670D\u52A1\u5668\u6570\u636E\u56DE\u4F20\u65F6\u95F4(\u4EE3\u7406\u53D1\u9001\u8D85\u65F6)
    proxy_read_timeout 90; #\u8FDE\u63A5\u6210\u529F\u540E\uFF0C\u540E\u7AEF\u670D\u52A1\u5668\u54CD\u5E94\u65F6\u95F4(\u4EE3\u7406\u63A5\u6536\u8D85\u65F6)
    proxy_buffer_size 4k; #\u8BBE\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\uFF08nginx\uFF09\u4FDD\u5B58\u7528\u6237\u5934\u4FE1\u606F\u7684\u7F13\u51B2\u533A\u5927\u5C0F
    proxy_buffers 4 32k; #proxy_buffers\u7F13\u51B2\u533A\uFF0C\u7F51\u9875\u5E73\u5747\u572832k\u4EE5\u4E0B\u7684\u8BBE\u7F6E
    proxy_busy_buffers_size 64k; #\u9AD8\u8D1F\u8377\u4E0B\u7F13\u51B2\u5927\u5C0F\uFF08proxy_buffers*2\uFF09
    proxy_temp_file_write_size 64k;
    #\u8BBE\u5B9A\u7F13\u5B58\u6587\u4EF6\u5939\u5927\u5C0F\uFF0C\u5927\u4E8E\u8FD9\u4E2A\u503C\uFF0C\u5C06\u4ECEupstream\u670D\u52A1\u5668\u4F20
}

#\u8BBE\u5B9A\u67E5\u770BNginx\u72B6\u6001\u7684\u5730\u5740
location /NginxStatus {
    stub_status on;
    access_log on;
    auth_basic &quot;NginxStatus&quot;;
    # htpasswd\u6587\u4EF6\u7684\u5185\u5BB9\u53EF\u4EE5\u7528apache\u63D0\u4F9B\u7684htpasswd\u5DE5\u5177\u6765\u4EA7\u751F\u3002
    auth_basic_user_file conf/htpasswd; 
}

# \u672C\u5730\u52A8\u9759\u5206\u79BB\u53CD\u5411\u4EE3\u7406\u914D\u7F6E
# \u6240\u6709 jsp \u7684\u9875\u9762\u5747\u4EA4\u7531tomcat\u6216resin\u5904\u7406
location ~ .(jsp|jspx|do)?$ {
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_pass http://127.0.0.1:8080;
}

# \u6240\u6709\u9759\u6001\u6587\u4EF6\u7531nginx\u76F4\u63A5\u8BFB\u53D6\u4E0D\u7ECF\u8FC7tomcat\u6216resin
location ~ .*.(htm|html|gif|jpg|jpeg|png|bmp|swf|ioc|rar|zip|txt|flv|mid|doc|ppt|pdf|xls|mp3|wma)$ 
{
  root    /data/www/www.xx.com/public;
  expires 15d;
}
location ~ ^/(upload|html)/  {
  root    /data/www/www.xx.com/public/html;
  expires 30d;
}

include     vhosts/*.conf; \u5206\u5272\u914D\u7F6E\u6587\u4EF6\uFF0C\u65B9\u4FBF\u7BA1\u7406
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="https-server" tabindex="-1"><a class="header-anchor" href="#https-server" aria-hidden="true">#</a> HTTPS server</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {  
    listen       443 ssl;  
    server_name  localhost;  

    ssl_certificate      cert.pem;  
    ssl_certificate_key  cert.key;  
    ssl_session_cache    shared:SSL:1m;  
    ssl_session_timeout  5m;  
    ssl_ciphers  HIGH:!aNULL:!MD5;  
    ssl_prefer_server_ciphers  on;  

    location / {  
        root   html;  
        index  index.html index.htm;  
    }  
}  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25);function Y(J,K){const s=r("RouterLink"),a=r("ExternalLinkIcon");return t(),o("div",null,[e("nav",v,[e("ul",null,[e("li",null,[i(s,{to:"#window-\u7684-wsl2-\u5B89\u88C5-docker"},{default:d(()=>[m]),_:1})]),e("li",null,[i(s,{to:"#_1-\u5B89\u88C5-docker"},{default:d(()=>[b]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#\u8BBE\u7F6E-ununtu-\u7684-api-\u5B89\u88C5\u88C5"},{default:d(()=>[p]),_:1})])])]),e("li",null,[i(s,{to:"#_2-docker-\u5B89\u88C5\u548C\u542F\u52A8"},{default:d(()=>[h]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#_1-\u542F\u52A8-docker-sudo-service-docker-start"},{default:d(()=>[x]),_:1})]),e("li",null,[i(s,{to:"#_2-\u68C0\u67E5-docker-\u662F\u5426\u6B63\u5E38"},{default:d(()=>[g]),_:1})])])]),e("li",null,[i(s,{to:"#dccker-\u5E38\u89C1\u51E0\u4E2A\u542F\u52A8\u547D\u4EE4"},{default:d(()=>[_]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#alpine-\u7248\u672C\u955C\u50CF\u5927\u5C0F\u662F\u666E\u901A\u7248\u672C\u7684-1-5-\u5DE6\u53F3"},{default:d(()=>[k]),_:1})]),e("li",null,[i(s,{to:"#docker-\u90E8\u7F72-ngiix-\u73AF\u5883"},{default:d(()=>[f]),_:1})]),e("li",null,[i(s,{to:"#docker-\u5B89\u88C5-monog"},{default:d(()=>[y]),_:1})]),e("li",null,[i(s,{to:"#docker-\u5B89\u88C5-redis"},{default:d(()=>[w]),_:1})]),e("li",null,[i(s,{to:"#docker-\u5B89\u88C5-mongo"},{default:d(()=>[q]),_:1})]),e("li",null,[i(s,{to:"#docker-\u5B89\u88C5-mysql"},{default:d(()=>[S]),_:1})])])]),e("li",null,[i(s,{to:"#\u67E5\u770B\u5F53\u524D\u7684-ip"},{default:d(()=>[L]),_:1})]),e("li",null,[i(s,{to:"#_4-\u8D85\u5FEB\u542F\u52A8-docker-common-\u4F7F\u7528\u8BB0\u5F55\u6587\u6863\u548C\u9879\u76EE\u5730\u5740-docker-compose\u9879\u76EE"},{default:d(()=>[z]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#\u4EE5\u8FD0\u884C-nginx-\u4E3A\u4F8B"},{default:d(()=>[$]),_:1})]),e("li",null,[i(s,{to:"#\u542F\u52A8-docker-\u670D\u52A1\u540E-\u7136\u540E\u542F\u52A8-docker-compose-up-d-\u540E"},{default:d(()=>[N]),_:1})]),e("li",null,[i(s,{to:"#\u4F7F\u7528\u6587\u4EF6\u540E-\u7136\u540E\u542F\u52A8\u6620\u5C04\u7684\u7AEF\u53E3"},{default:d(()=>[I]),_:1})])])]),e("li",null,[i(s,{to:"#_5-docker-\u4E0A\u9762\u7684-nginx-\u914D\u7F6E\u8BB0\u5F55-\u90E8\u7F72\u524D\u7AEF\u9879\u76EE"},{default:d(()=>[D]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#\u65B9\u6848-1"},{default:d(()=>[T]),_:1})]),e("li",null,[i(s,{to:"#\u65B9\u6848-2-\u5982\u679C\u60F3\u8981\u7528\u6253\u5305\u7684\u6587\u4EF6\u5939-\u90A3\u4E48\u589E\u52A0\u8F93\u51FA\u6587\u4EF6\u5939\u540D\u79F0\u81EA\u5B9A\u4E49"},{default:d(()=>[O]),_:1})])])]),e("li",null,[i(s,{to:"#_6-nginx-conf\u6C47\u603B\u4F7F\u7528\u6848\u4F8B"},{default:d(()=>[P]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#main\u5168\u5C40\u6A21\u5757"},{default:d(()=>[W]),_:1})]),e("li",null,[i(s,{to:"#events\u6A21\u5757"},{default:d(()=>[j]),_:1})]),e("li",null,[i(s,{to:"#http\u6A21\u5757"},{default:d(()=>[H]),_:1})]),e("li",null,[i(s,{to:"#upstream\u6307\u4EE4"},{default:d(()=>[A]),_:1})]),e("li",null,[i(s,{to:"#server\u6A21\u5757"},{default:d(()=>[F]),_:1})]),e("li",null,[i(s,{to:"#location"},{default:d(()=>[R]),_:1})]),e("li",null,[i(s,{to:"#https-server"},{default:d(()=>[X]),_:1})])])])])]),C,e("p",null,[e("a",E,[G,i(a)])]),B,e("p",null,[e("a",V,[M,i(a)]),U]),Q])}var ee=c(u,[["render",Y],["__file","014docker\u90E8\u7F72mysql\uFF0Cnginx,mongo\u8BB0\u5F55.html.vue"]]);export{ee as default};
