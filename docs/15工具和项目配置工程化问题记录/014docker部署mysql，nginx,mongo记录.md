[[toc]]

## Window 的 WSL2 安装 docker

## 1.安装 docker

设置子系统免密

```
 替换leap为自己单独配置的用户名
 sudo echo "leap ALL=(ALL:ALL) NOPASSWD: ALL" >>/etc/sudoers

```

### 设置 ununtu 的 api 安装装

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

## 2.docker 安装和启动

### （1）启动 docker: sudo service docker start

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

### （2）检查 docker 是否正常

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

## Dccker 常见几个启动命令

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

### alpine 版本镜像大小是普通版本的 1/5 左右

### Docker 部署 ngiix 环境

#### 创建容器

```
$ sudo docker create nginx:1.12
34f277e22be252b51d204acbb32ce21181df86520de0c337a835de6932ca06c3

使用容器需要给容器起名字
 sudo docker create --name nginx nginx:1.12

```

#### 启动容器

sudo docker start nginx

根据起的名字进行运行。

#### 创建和启动进行合并的 docker 命令

sudo docker run --name nginx -d nginx:1.12

docker run 等于创建容器和启动容器。

#### 管理容器

```
docker  ps

罗列当前的容器。

如果看容器状态：docker ps -a
```

#### 停止和删除容器

```
sudo  docker stop  nginx

sudo  docker rm nginx ;//默认情况不可以删除，-f或是--force
```

### docker 安装 monog

```
Digest: sha256:c57e511ce78d6847e2605db8e374611492f588e24f93c80e0c6baba9d6c029c3
Status: Downloaded newer image for mongo:latest
docker.io/library/mongo:latest
```

### docker 安装 redis

```
- 安装redis

docker pull redis:alpine

- 启动redis

 docker run -it redis:alpine redis-cli -h 192.168.0.107

最后的ip地址，为个人的地址

这里的redis地址：为这里的内容

```

### docker 安装 mongo

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

### docker 安装 mysql

#### （1）拉取 mysql 镜像

docker pull mysql:5.7

#### （2）启动 mysql（正式配置好了数据库）

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

## 查看当前的 ip

此时电脑的 ip 地址，这里内容无线局域网适配器 WALN 的内容对应
