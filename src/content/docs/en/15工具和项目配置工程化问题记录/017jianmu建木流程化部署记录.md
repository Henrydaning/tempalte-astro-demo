## 如何部署[#](https://jianmu-docs.assets.dghub.cn/jianmu-docs/2.5.4/guide/how-to-deploy.html#如何部署)

- 不建议玩这个先的内容本身步入自己实现一个docker-compose和Node的配置实现一条版本管理。

目前支持两种方式安装部署建木，大家根据需要任选其一即可

### 资源和系统要求[#](https://jianmu-docs.assets.dghub.cn/jianmu-docs/2.5.4/guide/how-to-deploy.html#资源和系统要求)

###### 操作系统[#](https://jianmu-docs.assets.dghub.cn/jianmu-docs/2.5.4/guide/how-to-deploy.html#操作系统)

Ubuntu 21.04 (推荐) 或 macOS Monterey

###### 建议配置[#](https://jianmu-docs.assets.dghub.cn/jianmu-docs/2.5.4/guide/how-to-deploy.html#建议配置)

- CPU：2C
- 内存：8GB
- 磁盘：100GB

### 部署方式一：docker-compose 部署[#](https://jianmu-docs.assets.dghub.cn/jianmu-docs/2.5.4/guide/how-to-deploy.html#部署方式一：docker-compose部署)

###### 软件版本要求[#](https://jianmu-docs.assets.dghub.cn/jianmu-docs/2.5.4/guide/how-to-deploy.html#软件版本要求)

- 推荐使用 Ubuntu 21.04 系统安装，如[CentOS 7 可参考](https://docs.jianmu.dev/guide/centos-install.html)
- Docker 19.30 以上，[官方安装手册](https://docs.docker.com/get-started/#download-and-install-docker)
- Docker-Compose 1.29.2 以上，[官方安装手册](https://docs.docker.com/compose/install/#install-compose)

###### 部署方式[#](https://jianmu-docs.assets.dghub.cn/jianmu-docs/2.5.4/guide/how-to-deploy.html#部署方式)

**下载`docker-compose.yml`**

```
wget https://gitee.com/jianmu-dev/jianmu-deploy/raw/master/docker-compose.yml
```

**启动**

```
docker-compose up -d

注意亮点：
第一点：启动docker
但是注意：使用docker-compose前提，docker启动
service docker start
第二点：下载docker-compose

curl -L https://get.daocloud.io/docker/compose/releases/download/1.29.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose

同时将文件夹权限放开
sudo chmod +x /usr/local/bin/docker-compose


```

访问[`http://localhost`](http://localhost/)，默认**用户名密码**为`admin/123456`。

### 部署方式二：k8s 部署[#](https://jianmu-docs.assets.dghub.cn/jianmu-docs/2.5.4/guide/how-to-deploy.html#部署方式二：k8s部署)

###### 软件版本要求[#](https://jianmu-docs.assets.dghub.cn/jianmu-docs/2.5.4/guide/how-to-deploy.html#软件版本要求-1)

- Kubernetes 1.18 以上, [官方安装手册](https://kubernetes.io/docs/tasks/tools/)

###### 部署方式[#](https://jianmu-docs.assets.dghub.cn/jianmu-docs/2.5.4/guide/how-to-deploy.html#部署方式-1)

**下载`kubernetes.yaml`**

```
wget https://gitee.com/jianmu-dev/jianmu-deploy/raw/master/kubernetes.yaml
```

**启动**

```
kubectl apply -f kubernetes.yaml
```

访问[`node节点ip:30180`](http://xn--nodeip-6f8nh25i:30180/)，默认**用户名密码**为`admin/123456`，使用详见 hello 项目使用。




# 遇到一个大坑，前端
sass中出现weight报错

TODO: