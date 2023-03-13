

### Window 的 WSL2 安装 docker

### 1.安装 docker

设置子系统免密

```
 替换leap为自己单独配置的用户名
 sudo echo "leap ALL=(ALL:ALL) NOPASSWD: ALL" >>/etc/sudoers

```

#### 设置 ununtu 的 api 安装装

```
cp /etc/apt/sources.list /etc/apt/sources.list.bak
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

apt update && apt upgrade -y

```

### 2.docker 安装和启动

#### （1）启动 docker: sudo service docker start

（注意 windows 内置的 ubuntu 没有命令 systemctl 命令）

```
安装socker服务
 curl -fsSL https://get.docker.com -o get-docker.sh
 sudo sh get-docker.sh

 启动docker
 sudo service docker start
```

另一种方式是：通过安装 windows 客户端，本质启动后，通过 sock 服务

```
其实质是利用docker的C/S架构，将windows模式下的docker对应docker.sock，docker客户端二进制和docker的数据目录挂载到WSL2里面的linux机器，在此linux机器下执行docker命令(docker命令为docker客户端)，实质为客户端通过 挂载的/var/run/docker.sock文件与windows里面的dockerd服务端进程通信。如下图，我们在linux下重新启动linux下dockerd进程
```

#### （2）检查 docker 是否正常

```
# 检查dockerd进程启动
service docker status
ps aux|grep docker
# 检查拉取镜像等正常
docker pull busybox
docker images
```

（3）总结

```
1. WSL2下原生linux安装docker方式和完全linux虚拟机安装docker类似，区别在于WSL2下的linux不支持systemd。
2. Docker Desktop for windows方式，其实质是利用docker的C/S架构，将windows模式下的docker对应docker.sock，docker客户端二进制和docker的数据目录挂载到WSL2里面的linux机器，在此linux机器下执行docker命令(**docker命令为docker客户端**)，实质为客户端通过 挂载的/var/run/docker.sock文件与windows里面的dockerd服务端进程通信。如下图，我们在linux下重新启动linux下dockerd进程，linux模式下下载的busybox镜像又可以看到了，/var/run/docker.sock的时间戳也被更新了，此时客户端通过/var/run/docker.sock文件与linux下的dockerd服务端通信。

![img](https://pic3.zhimg.com/80/v2-b321f958768817a93d360f1ed8a51f36_1440w.webp)

![img](https://pic4.zhimg.com/80/v2-10d37f621bfcbc6d183e12a4df6211e3_1440w.webp)

\3. 要使用哪个模式下的docker，重启下该模式下的docker服务端即可，本质都是修改/var/run/docker.sock文件。理论可以同时使用，但是需要修改docker配置，通过-H参数增加dockerd的tcp监听，执行具体docker命令时指定dockerd监听的对应IP和端口即可。

```

### Dccker 常见几个启动命令

- 删除 docker 镜像

docker rmi imageId

```
有时候，镜像之间有关系，先删除镜像引用容器
docker rm 9d59e2278553
再次删除镜像命令
docker rmi 5cb3aa00f899

```

- 查看 docker 镜像

```
docker  images

```

- 清理镜像

一般运行一段时间 docker 后，会有残留内容

```
docker  image  prune
```

Docker 安装哪一个版本小，

#### alpine 版本镜像大小是普通版本的 1/5 左右

#### Docker 部署 ngiix 环境

###### 创建容器

```
$ sudo docker create nginx:1.12
34f277e22be252b51d204acbb32ce21181df86520de0c337a835de6932ca06c3

使用容器需要给容器起名字
 sudo docker create --name nginx nginx:1.12

```

###### 启动容器

sudo docker start nginx

根据起的名字进行运行。

###### 创建和启动进行合并的 docker 命令

sudo docker run --name nginx -d nginx:1.12

docker run 等于创建容器和启动容器。

###### 管理容器

```
docker  ps

罗列当前的容器。

如果看容器状态：docker ps -a
```

###### 停止和删除容器

```
sudo  docker stop  nginx

sudo  docker rm nginx ;//默认情况不可以删除，-f或是--force
```

#### docker 安装 monog

```
Digest: sha256:c57e511ce78d6847e2605db8e374611492f588e24f93c80e0c6baba9d6c029c3
Status: Downloaded newer image for mongo:latest
docker.io/library/mongo:latest
```

#### docker 安装 redis

```
- 安装redis

docker pull redis:alpine

- 启动redis

 docker run -it redis:alpine redis-cli -h 192.168.0.107

最后的ip地址，为个人的地址

这里的redis地址：为这里的内容

```

#### docker 安装 mongo

- 安装 mongo

```
docker pull mongo:4
```

- 运行 mongo

```js
docker run -d \
--name mongo \
-v /usr/local/docker/mongo/configdb:/data/configdb \
-v /usr/local/docker/mongo/data:/data/db \
-p 27017:27017 \
mongo:4 \
--auth
```

- 创建用户

添加账户

```
docker exec -it mongo mongo admin

db.createUser({ user: 'admin', pwd: '123456', roles: [ { role: "root", db: "admin" } ] });

```

- 创建链接 navicat 后，链接

必须用用户密码连接

#### docker 安装 mysql

###### （1）拉取 mysql 镜像

docker pull mysql:5.7

###### （2）启动 mysql（正式配置好了数据库）

```
docker run -d \
--name mysql \
-p 3306:3306 \
-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf \
-v /usr/local/docker/mysql/data/mysql:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123456 \
mysql:5.7

```

（3）删除 mysql 服务

docker rm -f mysql

（4）配置数据库和第二步一样

```

docker run -d \
--name mysql \
-p 3306:3306 \
-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf \
-v /usr/local/docker/mysql/data/mysql:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123456 \
mysql:5.7


```

数据库内容

```
其他不变，额外添加了两个挂载子命令：

-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf: 将容器中 /etc/mysql/mysql.conf.d/mysqld.cnf 配置文件挂载到宿主机的 /usr/local/docker/mysql/config/mysqld.cnf 文件上；
-v
/usr/local/docker/mysql/data:/var/lib/mysql: 将容器中 /var/lib/mysql 数据目录挂载到宿主机的 /usr/local/docker/mysql/data 目录下；
执行命令完成后，查看下容器是否启动：


```

### 查看当前的 ip

此时电脑的 ip 地址，这里内容无线局域网适配器 WALN 的内容对应

### 4.超快启动 docker-common 使用记录文档和项目地址:docker-compose项目


[项目地址 docker](https://gitee.com/nyhxiaoning/zkwq-mini-program-platform-api.git)

#### 以运行 nginx 为例

- 进入 docker-nginx 目录，直接运行 `docker-compose up -d` , 好了，一键运行完毕

- 重启 docker-compose restart
#### 启动 docker 服务后，然后启动 docker-compose up -d 后

然后使用看文件的映射端口：添加映射端口的内容
docker-compose.yml

```
docker-nginx文件夹中，配置docker-compose.yml配置文件

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
        # command: /bin/sh -c "envsubst '$$NGINX_HOST' < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
        restart: always


```

#### 使用文件后，然后启动映射的端口

来介绍下 docker-nginx 的目录

etc

- ngxin nginx 配置
- ssl https 配置
  web---防止前端项目的目录
- public nginx 默认页面
- demo-a 普通 html 服务配置
- demo-b 单页面（vue、react 之类的）项目服务配置

docker-compose.yml docker-compose 配置，用于配置端口和数据挂载等

虽然里面的配置都很简单，但是我决定还是简单介绍一下添加项目

####### 如何添加一个新项目

比如增加一个商城项目，项目名称叫"mall"

- 在 etc/nginx 目录下增加一个 nginx 配置文件，那么对应增加一个 mall.conf，里面配置的内容可以参考 demo-a.conf 和 demo-b.conf

- 上面三步做完，就可以重启了

```
docker-compose up -d
```

### 5.docker 上面的 nginx 配置记录，部署前端项目

注意：前端打包的文件夹目录，不要自己指定，如果后台配置好了名称，那么直接将打包完成的放入里面

#### 方案 1：

[实现地址方案 gitee 地址](https://gitee.com/nyhxiaoning/zkwq-mini-program-platform-api.git)
配置 vuepress 内容部署文件记录 1.第一步
配置相关的 dist 放入的文件夹名称，注意只有 dist 里面的内容，不要有 dist,

```
比如nginx文件夹放入为apidist,
如右边：root /var/www/html/apidist;


```

2.第二步

```
配置打包vuepress,配置地址为：./
base:"./"
```

3.第三步
其他的 img 地址内容，配置正确，可以正常展示。

#### 方案 2：如果想要用打包的文件夹，那么增加输出文件夹名称自定义
如下面dest文件夹名称

nginx 配置，比如自己想要 apidist2,那么配置一下 apidist2

```
最后vuepress的base配置
base:"./"
dest:"apidist2"
```

```

```








### 6.nginx.conf汇总使用案例

#### main全局模块

```
#定义Nginx运行的用户和用户组
user www www;
#nginx进程数，建议设置为等于CPU总核心数。
worker_processes 8;
#全局错误日志定义类型，[ debug | info | notice | warn | error | crit ]
error_log /var/log/nginx/error.log info;
#进程文件
pid /var/run/nginx.pid;
# 一个nginx进程打开的最多文件描述符数目，理论值应该是最多打开文件数（系统的值ulimit -n）
# 与nginx进程数相除，但是nginx分配请求并不均匀，所以建议与ulimit -n的值保持一致。
worker_rlimit_nofile 65535;
```

#### Events模块

```
#工作模式与连接数上限
events  {
#参考事件模型，use [ kqueue | rtsig | epoll | /dev/poll | select | poll ];epoll模型是Linux 2.6以上
#版本内核中的高性能网络I/O模型，如果跑在FreeBSD上面，就用kqueue模型。
use epoll; 
#单个进程最大连接数（最大连接数=连接数*进程数）
worker_connections 65535;
}
```

#### HTTP模块

```
http  {
#设定http服务器
include mime.types; #文件扩展名与文件类型映射表
default_type application/octet-stream; #默认文件类型
#charset utf-8; #默认编码
server_names_hash_bucket_size 128; #服务器名字的hash表大小
client_header_buffer_size 32k; #上传文件大小限制
large_client_header_buffers 4 64k; #设定请求缓
client_max_body_size 8m; #设定请求缓
sendfile on; # 开启高效文件传输模式，sendfile指令指定nginx是否调用sendfile函数来输出文件， 
# 对于普通应用设为 on，如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘
# 与网络 I/O处理速度，降低系统的负载。注意：如果图片显示不正常把这个改成off。
autoindex on; #开启目录列表访问，合适下载服务器，默认关闭。
tcp_nopush on; #防止网络阻塞
tcp_nodelay on; #防止网络阻塞
keepalive_timeout 120; #长连接超时时间，单位是秒

#FastCGI相关参数是为了改善网站的性能：减少资源占用，提高访问速度。下面参数看字面意思都能解。
fastcgi_connect_timeout 300;
fastcgi_send_timeout 300;
fastcgi_read_timeout 300;
fastcgi_buffer_size 64k;
fastcgi_buffers 4 64k;
fastcgi_busy_buffers_size 128k;
fastcgi_temp_file_write_size 128k;

#gzip模块设置
gzip on; #开启gzip压缩输出
gzip_min_length 1k; #最小压缩文件大小
gzip_buffers 4 16k; #压缩缓冲区
gzip_http_version 1.0; #压缩版本（默认1.1，前端如果是squid2.5请使用1.0）
gzip_comp_level 2; #压缩等级
gzip_types text/plain application/x-javascript text/css application/xml;
# 压缩类型，默认就已经包含text/html，所以下面就不用再写了，但是会有一个warn。
gzip_vary on;
#limit_zone crawler $binary_remote_addr 10m; #开启限制IP连接数的时候需要使用
```

#### upstream指令

Nginx的负载均衡模块目前支持4种调度算法。weight 轮询，ip_hash，fair，url_hash。

```
upstream www.xx.com {
# upstream的负载均衡，weight是权重，可以根据机器配置定义权重。weigth参数表示权值，权值越
# 高被分配到的几率越大。
server 192.168.80.121:80 weight=3;
server 192.168.80.122:80 weight=2;
server 192.168.80.123:80 weight=3;
}
```

#### Server模块

```
#虚拟主机的配置
server {
  # 监听端口
  listen 80;
  #域名可以有多个，用空格隔开
  server_name www.xx.com;
  ssi on; # Server Side Include，通常称为服务器端嵌入
  index index.html index.htm index.php;
  root /data/www/www.xx.com;

  # 图片缓存时间设置
  location ~ .*.(gif|jpg|jpeg|png|bmp|swf)$ {
    expires 10d;
  }

  # JS和CSS缓存时间设置
  location ~ .*.(js|css)?$ {
    expires 1h;
  }

  # 日志格式设定
  log_format access '$remote_addr – $remote_user [$time_local] "$request" '
  '$status $body_bytes_sent "$http_referer" '
  '"$http_user_agent" $http_x_forwarded_for';
  # 定义本虚拟主机的访问日志
  access_log /var/log/nginx/ospring.pw.log access;
```

#### Location

```
#对 "/" 启用反向代理
location / {
    proxy_pass http://127.0.0.1:88;
    proxy_redirect off;
    proxy_set_header X-Real-IP $remote_addr;
    #后端的Web服务器可以通过X-Forwarded-For获取用户真实IP
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    #以下是一些反向代理的配置，可选。
    proxy_set_header Host $host;
    client_max_body_size 10m; #允许客户端请求的最大单文件字节数
    client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数，
    proxy_connect_timeout 90; #nginx跟后端服务器连接超时时间(代理连接超时)
    proxy_send_timeout 90; #后端服务器数据回传时间(代理发送超时)
    proxy_read_timeout 90; #连接成功后，后端服务器响应时间(代理接收超时)
    proxy_buffer_size 4k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
    proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
    proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
    proxy_temp_file_write_size 64k;
    #设定缓存文件夹大小，大于这个值，将从upstream服务器传
}

#设定查看Nginx状态的地址
location /NginxStatus {
    stub_status on;
    access_log on;
    auth_basic "NginxStatus";
    # htpasswd文件的内容可以用apache提供的htpasswd工具来产生。
    auth_basic_user_file conf/htpasswd; 
}

# 本地动静分离反向代理配置
# 所有 jsp 的页面均交由tomcat或resin处理
location ~ .(jsp|jspx|do)?$ {
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_pass http://127.0.0.1:8080;
}

# 所有静态文件由nginx直接读取不经过tomcat或resin
location ~ .*.(htm|html|gif|jpg|jpeg|png|bmp|swf|ioc|rar|zip|txt|flv|mid|doc|ppt|pdf|xls|mp3|wma)$ 
{
  root    /data/www/www.xx.com/public;
  expires 15d;
}
location ~ ^/(upload|html)/  {
  root    /data/www/www.xx.com/public/html;
  expires 30d;
}

include     vhosts/*.conf; 分割配置文件，方便管理
}
```

#### HTTPS server

```
server {  
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
```