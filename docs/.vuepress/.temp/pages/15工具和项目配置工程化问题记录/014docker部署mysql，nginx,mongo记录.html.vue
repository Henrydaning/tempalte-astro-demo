<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#window-的-wsl2-安装-docker">Window 的 WSL2 安装 docker</RouterLink></li><li><RouterLink to="#_1-安装-docker">1.安装 docker</RouterLink><ul><li><RouterLink to="#设置-ununtu-的-api-安装装">设置 ununtu 的 api 安装装</RouterLink></li></ul></li><li><RouterLink to="#_2-docker-安装和启动">2.docker 安装和启动</RouterLink><ul><li><RouterLink to="#_1-启动-docker-sudo-service-docker-start">（1）启动 docker: sudo service docker start</RouterLink></li><li><RouterLink to="#_2-检查-docker-是否正常">（2）检查 docker 是否正常</RouterLink></li></ul></li><li><RouterLink to="#dccker-常见几个启动命令">Dccker 常见几个启动命令</RouterLink><ul><li><RouterLink to="#alpine-版本镜像大小是普通版本的-1-5-左右">alpine 版本镜像大小是普通版本的 1/5 左右</RouterLink></li><li><RouterLink to="#docker-部署-ngiix-环境">Docker 部署 ngiix 环境</RouterLink></li><li><RouterLink to="#docker-安装-monog">docker 安装 monog</RouterLink></li><li><RouterLink to="#docker-安装-redis">docker 安装 redis</RouterLink></li><li><RouterLink to="#docker-安装-mongo">docker 安装 mongo</RouterLink></li><li><RouterLink to="#docker-安装-mysql">docker 安装 mysql</RouterLink></li></ul></li><li><RouterLink to="#查看当前的-ip">查看当前的 ip</RouterLink></li><li><RouterLink to="#_4-超快启动-docker-common-使用记录文档和项目地址">4.超快启动 docker-common 使用记录文档和项目地址</RouterLink><ul><li><RouterLink to="#以运行-nginx-为例">以运行 nginx 为例</RouterLink></li><li><RouterLink to="#启动-docker-服务后-然后启动-docker-compose-up-d-后">启动 docker 服务后，然后启动 docker-compose up -d 后</RouterLink></li><li><RouterLink to="#使用文件后-然后启动映射的端口">使用文件后，然后启动映射的端口</RouterLink></li></ul></li><li><RouterLink to="#_5-docker-上面的-nginx-配置记录-部署前端项目">5.docker 上面的 nginx 配置记录，部署前端项目</RouterLink><ul><li><RouterLink to="#方案-1">方案 1：</RouterLink></li><li><RouterLink to="#方案-2-如果想要用打包的文件夹-那么增加输出文件夹名称自定义">方案 2：如果想要用打包的文件夹，那么增加输出文件夹名称自定义</RouterLink></li></ul></li></ul></nav>
<h2 id="window-的-wsl2-安装-docker" tabindex="-1"><a class="header-anchor" href="#window-的-wsl2-安装-docker" aria-hidden="true">#</a> Window 的 WSL2 安装 docker</h2>
<h2 id="_1-安装-docker" tabindex="-1"><a class="header-anchor" href="#_1-安装-docker" aria-hidden="true">#</a> 1.安装 docker</h2>
<p>设置子系统免密</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> 替换leap为自己单独配置的用户名
 sudo echo "leap ALL=(ALL:ALL) NOPASSWD: ALL" >>/etc/sudoers

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置-ununtu-的-api-安装装" tabindex="-1"><a class="header-anchor" href="#设置-ununtu-的-api-安装装" aria-hidden="true">#</a> 设置 ununtu 的 api 安装装</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cp /etc/apt/sources.list /etc/apt/sources.list.bak
​
echo "deb http://mirrors.aliyun.com/ubuntu/ focal main restricted
deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted
deb http://mirrors.aliyun.com/ubuntu/ focal universe
deb http://mirrors.aliyun.com/ubuntu/ focal-updates universe
deb http://mirrors.aliyun.com/ubuntu/ focal multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-updates multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted
deb http://mirrors.aliyun.com/ubuntu/ focal-security universe
deb http://mirrors.aliyun.com/ubuntu/ focal-security multiverse">/etc/apt/sources.list


执行更新

apt update &amp;&amp; apt upgrade -y

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-docker-安装和启动" tabindex="-1"><a class="header-anchor" href="#_2-docker-安装和启动" aria-hidden="true">#</a> 2.docker 安装和启动</h2>
<h3 id="_1-启动-docker-sudo-service-docker-start" tabindex="-1"><a class="header-anchor" href="#_1-启动-docker-sudo-service-docker-start" aria-hidden="true">#</a> （1）启动 docker: sudo service docker start</h3>
<p>（注意 windows 内置的 ubuntu 没有命令 systemctl 命令）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>安装socker服务
 curl -fsSL https://get.docker.com -o get-docker.sh
 sudo sh get-docker.sh

 启动docker
 sudo service docker start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一种方式是：通过安装 windows 客户端，本质启动后，通过 sock 服务</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>其实质是利用docker的C/S架构，将windows模式下的docker对应docker.sock，docker客户端二进制和docker的数据目录挂载到WSL2里面的linux机器，在此linux机器下执行docker命令(docker命令为docker客户端)，实质为客户端通过 挂载的/var/run/docker.sock文件与windows里面的dockerd服务端进程通信。如下图，我们在linux下重新启动linux下dockerd进程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-检查-docker-是否正常" tabindex="-1"><a class="header-anchor" href="#_2-检查-docker-是否正常" aria-hidden="true">#</a> （2）检查 docker 是否正常</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 检查dockerd进程启动
service docker status
ps aux|grep docker
# 检查拉取镜像等正常
docker pull busybox
docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）总结</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1. WSL2下原生linux安装docker方式和完全linux虚拟机安装docker类似，区别在于WSL2下的linux不支持systemd。
2. Docker Desktop for windows方式，其实质是利用docker的C/S架构，将windows模式下的docker对应docker.sock，docker客户端二进制和docker的数据目录挂载到WSL2里面的linux机器，在此linux机器下执行docker命令(**docker命令为docker客户端**)，实质为客户端通过 挂载的/var/run/docker.sock文件与windows里面的dockerd服务端进程通信。如下图，我们在linux下重新启动linux下dockerd进程，linux模式下下载的busybox镜像又可以看到了，/var/run/docker.sock的时间戳也被更新了，此时客户端通过/var/run/docker.sock文件与linux下的dockerd服务端通信。

![img](https://pic3.zhimg.com/80/v2-b321f958768817a93d360f1ed8a51f36_1440w.webp)

![img](https://pic4.zhimg.com/80/v2-10d37f621bfcbc6d183e12a4df6211e3_1440w.webp)

\3. 要使用哪个模式下的docker，重启下该模式下的docker服务端即可，本质都是修改/var/run/docker.sock文件。理论可以同时使用，但是需要修改docker配置，通过-H参数增加dockerd的tcp监听，执行具体docker命令时指定dockerd监听的对应IP和端口即可。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dccker-常见几个启动命令" tabindex="-1"><a class="header-anchor" href="#dccker-常见几个启动命令" aria-hidden="true">#</a> Dccker 常见几个启动命令</h2>
<ul>
<li>删除 docker 镜像</li>
</ul>
<p>docker rmi imageId</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>有时候，镜像之间有关系，先删除镜像引用容器
docker rm 9d59e2278553
再次删除镜像命令
docker rmi 5cb3aa00f899

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>查看 docker 镜像</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker  images

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>清理镜像</li>
</ul>
<p>一般运行一段时间 docker 后，会有残留内容</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker  image  prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Docker 安装哪一个版本小，</p>
<h3 id="alpine-版本镜像大小是普通版本的-1-5-左右" tabindex="-1"><a class="header-anchor" href="#alpine-版本镜像大小是普通版本的-1-5-左右" aria-hidden="true">#</a> alpine 版本镜像大小是普通版本的 1/5 左右</h3>
<h3 id="docker-部署-ngiix-环境" tabindex="-1"><a class="header-anchor" href="#docker-部署-ngiix-环境" aria-hidden="true">#</a> Docker 部署 ngiix 环境</h3>
<h4 id="创建容器" tabindex="-1"><a class="header-anchor" href="#创建容器" aria-hidden="true">#</a> 创建容器</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ sudo docker create nginx:1.12
34f277e22be252b51d204acbb32ce21181df86520de0c337a835de6932ca06c3

使用容器需要给容器起名字
 sudo docker create --name nginx nginx:1.12

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动容器" tabindex="-1"><a class="header-anchor" href="#启动容器" aria-hidden="true">#</a> 启动容器</h4>
<p>sudo docker start nginx</p>
<p>根据起的名字进行运行。</p>
<h4 id="创建和启动进行合并的-docker-命令" tabindex="-1"><a class="header-anchor" href="#创建和启动进行合并的-docker-命令" aria-hidden="true">#</a> 创建和启动进行合并的 docker 命令</h4>
<p>sudo docker run --name nginx -d nginx:1.12</p>
<p>docker run 等于创建容器和启动容器。</p>
<h4 id="管理容器" tabindex="-1"><a class="header-anchor" href="#管理容器" aria-hidden="true">#</a> 管理容器</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker  ps

罗列当前的容器。

如果看容器状态：docker ps -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="停止和删除容器" tabindex="-1"><a class="header-anchor" href="#停止和删除容器" aria-hidden="true">#</a> 停止和删除容器</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sudo  docker stop  nginx

sudo  docker rm nginx ;//默认情况不可以删除，-f或是--force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-安装-monog" tabindex="-1"><a class="header-anchor" href="#docker-安装-monog" aria-hidden="true">#</a> docker 安装 monog</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Digest: sha256:c57e511ce78d6847e2605db8e374611492f588e24f93c80e0c6baba9d6c029c3
Status: Downloaded newer image for mongo:latest
docker.io/library/mongo:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-安装-redis" tabindex="-1"><a class="header-anchor" href="#docker-安装-redis" aria-hidden="true">#</a> docker 安装 redis</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>- 安装redis

docker pull redis:alpine

- 启动redis

 docker run -it redis:alpine redis-cli -h 192.168.0.107

最后的ip地址，为个人的地址

这里的redis地址：为这里的内容

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-安装-mongo" tabindex="-1"><a class="header-anchor" href="#docker-安装-mongo" aria-hidden="true">#</a> docker 安装 mongo</h3>
<ul>
<li>安装 mongo</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker pull mongo:4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>运行 mongo</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>docker run <span class="token operator">-</span>d \
<span class="token operator">--</span>name mongo \
<span class="token operator">-</span>v <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>docker<span class="token operator">/</span>mongo<span class="token operator">/</span>configdb<span class="token operator">:</span><span class="token operator">/</span>data<span class="token operator">/</span>configdb \
<span class="token operator">-</span>v <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>docker<span class="token operator">/</span>mongo<span class="token operator">/</span>data<span class="token operator">:</span><span class="token operator">/</span>data<span class="token operator">/</span>db \
<span class="token operator">-</span>p <span class="token number">27017</span><span class="token operator">:</span><span class="token number">27017</span> \
<span class="token literal-property property">mongo</span><span class="token operator">:</span><span class="token number">4</span> \
<span class="token operator">--</span>auth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>创建用户</li>
</ul>
<p>添加账户</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker exec -it mongo mongo admin

db.createUser({ user: 'admin', pwd: '123456', roles: [ { role: "root", db: "admin" } ] });

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>创建链接 navicat 后，链接</li>
</ul>
<p>必须用用户密码连接</p>
<h3 id="docker-安装-mysql" tabindex="-1"><a class="header-anchor" href="#docker-安装-mysql" aria-hidden="true">#</a> docker 安装 mysql</h3>
<h4 id="_1-拉取-mysql-镜像" tabindex="-1"><a class="header-anchor" href="#_1-拉取-mysql-镜像" aria-hidden="true">#</a> （1）拉取 mysql 镜像</h4>
<p>docker pull mysql:5.7</p>
<h4 id="_2-启动-mysql-正式配置好了数据库" tabindex="-1"><a class="header-anchor" href="#_2-启动-mysql-正式配置好了数据库" aria-hidden="true">#</a> （2）启动 mysql（正式配置好了数据库）</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -d \
--name mysql \
-p 3306:3306 \
-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf \
-v /usr/local/docker/mysql/data/mysql:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123456 \
mysql:5.7

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）删除 mysql 服务</p>
<p>docker rm -f mysql</p>
<p>（4）配置数据库和第二步一样</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
docker run -d \
--name mysql \
-p 3306:3306 \
-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf \
-v /usr/local/docker/mysql/data/mysql:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123456 \
mysql:5.7


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据库内容</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>其他不变，额外添加了两个挂载子命令：

-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf: 将容器中 /etc/mysql/mysql.conf.d/mysqld.cnf 配置文件挂载到宿主机的 /usr/local/docker/mysql/config/mysqld.cnf 文件上；
-v
/usr/local/docker/mysql/data:/var/lib/mysql: 将容器中 /var/lib/mysql 数据目录挂载到宿主机的 /usr/local/docker/mysql/data 目录下；
执行命令完成后，查看下容器是否启动：


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看当前的-ip" tabindex="-1"><a class="header-anchor" href="#查看当前的-ip" aria-hidden="true">#</a> 查看当前的 ip</h2>
<p>此时电脑的 ip 地址，这里内容无线局域网适配器 WALN 的内容对应</p>
<h2 id="_4-超快启动-docker-common-使用记录文档和项目地址" tabindex="-1"><a class="header-anchor" href="#_4-超快启动-docker-common-使用记录文档和项目地址" aria-hidden="true">#</a> 4.超快启动 docker-common 使用记录文档和项目地址</h2>
<p><a href="https://gitee.com/nyhxiaoning/zkwq-mini-program-platform-api.git" target="_blank" rel="noopener noreferrer">项目地址 docker<ExternalLinkIcon/></a></p>
<h3 id="以运行-nginx-为例" tabindex="-1"><a class="header-anchor" href="#以运行-nginx-为例" aria-hidden="true">#</a> 以运行 nginx 为例</h3>
<ul>
<li>进入 docker-nginx 目录，直接运行 <code v-pre>docker-compose up -d</code> , 好了，一键运行完毕</li>
</ul>
<h3 id="启动-docker-服务后-然后启动-docker-compose-up-d-后" tabindex="-1"><a class="header-anchor" href="#启动-docker-服务后-然后启动-docker-compose-up-d-后" aria-hidden="true">#</a> 启动 docker 服务后，然后启动 docker-compose up -d 后</h3>
<p>然后使用看文件的映射端口：添加映射端口的内容
docker-compose.yml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker-nginx文件夹中，配置docker-compose.yml配置文件

version: '3'
services:
    web:
        image: nginx:alpine
        container_name: docker-nginx
        volumes:
            - "./etc/nginx:/etc/nginx/conf.d"
            - "./etc/ssl:/etc/ssl"
            - "./web:/var/www/html"
        ports: # 设置转发的端口，将后面的端口监听配置后，转发给前面端口，文件夹nigix中含有配置
            - "8000:80" # nigix服务器配置地址
            - "1333:16533" # 个人博客部署网站
            - "12389:19999" # 映射个人api，小应用平台
            - "3443:443"
        environment: # 设置变量地址的使用，全局变量.env使用
            - NGINX_HOST=${NGINX_HOST}
        # command: /bin/sh -c "envsubst '$$NGINX_HOST' &lt; /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf &amp;&amp; nginx -g 'daemon off;'"
        restart: always


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用文件后-然后启动映射的端口" tabindex="-1"><a class="header-anchor" href="#使用文件后-然后启动映射的端口" aria-hidden="true">#</a> 使用文件后，然后启动映射的端口</h3>
<p>来介绍下 docker-nginx 的目录</p>
<p>etc</p>
<ul>
<li>ngxin nginx 配置</li>
<li>ssl https 配置
web---防止前端项目的目录</li>
<li>public nginx 默认页面</li>
<li>demo-a 普通 html 服务配置</li>
<li>demo-b 单页面（vue、react 之类的）项目服务配置</li>
</ul>
<p>docker-compose.yml docker-compose 配置，用于配置端口和数据挂载等</p>
<p>虽然里面的配置都很简单，但是我决定还是简单介绍一下添加项目</p>
<h5 id="如何添加一个新项目" tabindex="-1"><a class="header-anchor" href="#如何添加一个新项目" aria-hidden="true">#</a> 如何添加一个新项目</h5>
<p>比如增加一个商城项目，项目名称叫&quot;mall&quot;</p>
<ul>
<li>
<p>在 etc/nginx 目录下增加一个 nginx 配置文件，那么对应增加一个 mall.conf，里面配置的内容可以参考 demo-a.conf 和 demo-b.conf</p>
</li>
<li>
<p>上面三步做完，就可以重启了</p>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker-compose up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-docker-上面的-nginx-配置记录-部署前端项目" tabindex="-1"><a class="header-anchor" href="#_5-docker-上面的-nginx-配置记录-部署前端项目" aria-hidden="true">#</a> 5.docker 上面的 nginx 配置记录，部署前端项目</h2>
<p>注意：前端打包的文件夹目录，不要自己指定，如果后台配置好了名称，那么直接将打包完成的放入里面</p>
<h3 id="方案-1" tabindex="-1"><a class="header-anchor" href="#方案-1" aria-hidden="true">#</a> 方案 1：</h3>
<p><a href="https://gitee.com/nyhxiaoning/zkwq-mini-program-platform-api.git" target="_blank" rel="noopener noreferrer">实现地址方案 gitee 地址<ExternalLinkIcon/></a>
配置 vuepress 内容部署文件记录 1.第一步
配置相关的 dist 放入的文件夹名称，注意只有 dist 里面的内容，不要有 dist,</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>比如nginx文件夹放入为apidist,
如右边：root /var/www/html/apidist;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.第二步</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>配置打包vuepress,配置地址为：./
base:"./"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.第三步
其他的 img 地址内容，配置正确，可以正常展示。</p>
<h3 id="方案-2-如果想要用打包的文件夹-那么增加输出文件夹名称自定义" tabindex="-1"><a class="header-anchor" href="#方案-2-如果想要用打包的文件夹-那么增加输出文件夹名称自定义" aria-hidden="true">#</a> 方案 2：如果想要用打包的文件夹，那么增加输出文件夹名称自定义</h3>
<p>如下面dest文件夹名称</p>
<p>nginx 配置，比如自己想要 apidist2,那么配置一下 apidist2</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>最后vuepress的base配置
base:"./"
dest:"apidist2"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
