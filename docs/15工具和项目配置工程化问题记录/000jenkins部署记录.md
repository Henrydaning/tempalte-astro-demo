# 初始化配置 jenkins 步骤

## 安装 Gitee Plugin

安装后，找到全局配置和全局凭证，配置后全局凭证后，然后再全局配置配置一下 Gitee 即可。

问题：git 项目分支是公开的仓库，可以使用 giteeAPI，但是当公开的仓库设置为私有的，此时的 GiteeAPI 不可以了。

下载代码

### 配置一个 gieAPI 令牌，配置一个全局的 sshgitee

如果是公开的项目，使用 giteeAPI 令牌
如果是私有的项目，使用 ssh 的私钥

## 上传服务代码：手动

WSL 作为服务器（本地的 WSL），远程 linux 系统（centos 或是 unbutu 系统）---前提：chmod 放开权限。

### centos

scp -r dist/\* root@192.168.231.135:/home/daning/dist 默认就可以，加上 home 不可以。应该 home 文件夹放开权限

### unbuntu

scp -r dist/\* root@172.30.251.114:/home/daning/dist

有一个文件文件夹权限 chock
chmod 777 -R 文件夹 递归放开文件夹权限
注意如果是 WSL 中的 unbutu 系统，那么使用如下
先放开菜单权限，然后 scp -r dist/\* \\wsl.localhost\Ubuntu\home\dist

## 自动上传，打包代码到服务器

### - 安装插件：Publish Over SSH

增加构建后操作步骤，选择 Send build artifacts over SSH，使用 SSH 的方式将代码上传至服务器

### 配置 Over SSH

![配置ssh内容](/images/ssh.png)
其他上面的说明可以不写。
接着项目中配置相关内容

![配置打包后内容](/images/buildafter.png)

#### 提示，ssh 在服务器配置好

```
-->linux要启动ssh服务，命令如下（按顺序执行就行了）：
启动ssh服务命令：sudo service sshd start
查看服务是否启动：ps -e|grep sshd
查看22端口是否启用：netstat -an|grep 22
测试一下，避免一直连接不上
```

#### 补充一个 deploy.sh 中 sshpass

```
# 本地发布测试环境脚本

# 构建前端
yarn build

echo "开始上传..."
# 删除原文件
sshpass -p 123456 ssh app@xxx.xxx.xxx.xxx "rm -rf /home/app/nginx/html/*"
# 上传新文件
sshpass -p 123456 scp -r ./build/* app@xxx.xxx.xxx.xxx:/home/app/nginx/html
echo "上传成功！"


注意：应用范围：可以在命令行直接使用密码来进行远程连接和远程拉取文件。
ubunut配置sshpass
# vim /etc/ssh/ssh_config   StrictHostKeyChecking no
# vim /etc/ssh/sshd_config  GSSAPIAuthentication no
UseDNS no

# service sshd restart

centos中
# yum -y install sshpass

实例：本地执行远程机器的命令：
命令： sshpass -p xxx ssh root@192.168.11.11 "ethtool eth0"

实例1：直接远程连接某台主机：
命令：sshpass -p xxx ssh root@192.168.11.11
 sshpass -p xxx ssh root@192.168.11.11 'w'  -o StrictHostChecking=no     免输入yes。



```

## 本地发布测试环境脚本

## 构建前端

yarn build

echo "开始上传..."

## 删除原文件

sshpass -p 123456 ssh app@xxx.xxx.xxx.xxx "rm -rf /home/app/nginx/html/\*"

## 上传新文件

sshpass -p 123456 scp -r ./build/\* app@xxx.xxx.xxx.xxx:/home/app/nginx/html
echo "上传成功！"

注意：应用范围：可以在命令行直接使用密码来进行远程连接和远程拉取文件。

### ubunut 配置 sshpass

```
# vim /etc/ssh/ssh_config   StrictHostKeyChecking no
# vim /etc/ssh/sshd_config  GSSAPIAuthentication no
UseDNS no

## service sshd restart

centos中
## yum -y install sshpass

实例：本地执行远程机器的命令：
命令： sshpass -p xxx ssh root@192.168.11.11 "ethtool eth0"

实例1：直接远程连接某台主机：
命令：sshpass -p xxx ssh root@192.168.11.11
           sshpass -p xxx ssh root@192.168.11.11 'w'  -o StrictHostChecking=no     免输入yes。
```

## webhook 配置自动化执行

首先测试一下利用 webhook，增加一个机器人，然后如果触发了。
创建一个群，然后添加一个部署机器人，https://open.feishu.cn/open-apis/bot/v2/hook/cb3d8145-b74f-4849-b1

使用飞书通知：Jenkins 的构建结果通知到飞书群

### 插件：Post Build Task

### 使用 DIngding 通知：安装 Dinging 插件+DIngding Json pusher

这个插件负责全局的钉钉配置，
同时下载一个 Dingding JSON Pusher Plugin 版本 2.0，这个用来负责打包后，通知消息给群里。
https://oapi.dingtalk.com/robot/send?access_token=be5a98346ebaa005997e95a7180c89c75a6fd13275ec8aa2fabf9552428b1ead

### 自动化测试

关键词这个东西，就是你创建钉钉群时会输入一个关键词，然后你发消息时必须得带有这个关键词才行，
比如我这个钉钉群里的关键词是 自动化测试，我用代码发群通知的时候必须每条都带有 自动化测试 这几个字
(飞书类似,但是通过 py 脚本)

## Jenkins 上安装 Blue Ocean

这个可以可视化构建查看每一个流程输出内容

## jenkins 选择脚本时候注意：

![执行不同环境下的脚本，看jenkins安装在哪个系统](/images/execcontext.png)

# linux 环境下部署记录

linux 下 ubuntu 利用 docker-compose 部署 jenkins

## 1.jenkins 部署到指定服务器 docker

这里第一步

### （1）Docker-compose 构建 jenkins 环境

1、创建 docker 在主机的 jenkins 数据映射目录
mkdir -p /data/jenkins_home
chown -R 777 /data/jenkins_home

### （2）docker-compose 安装，创建一个 docker-jenkins-compose.yml

将当前的 8080 项目映射到 6008 端口上，部署成功访问：localhost:6008
version: '3.1'
services:
jenkins:
image: jenkinsci/blueocean
volumes: - /data/jenkins_home:/var/jenkins_home - /var/run/docker.sock:/var/run/docker.sock - /usr/bin/docker:/usr/bin/docker
ports: - "6008:8080"
expose: - "8080" - "50000"
privileged: true
user: root
restart: always
container_name: jenkins
environment:
JAVA_OPTS: '-Djava.util.logging.config.file=/var/jenkins_home/log.properties'

### （3）jenkins 容器启动

docker-compose -f docker-jenkins-compose.yml up -d
映射一下当前的安装位置密码：/data/jenkins_home 下的 data/secrets/initialAdminPassword

默认账号 admin
密码：1eeeb71383c645d782bee5dfd44fc023
linux 下的 unbutu 的端口是 6008，账号 admin,密码长串

### （4）成功后，访问 localhost:6008

### （5）配置相关的内容后，

安装两个内容 NodeJS 和 ssh

### (5)补充

linux 环境下，ssh 载 root 下.ssh 文件夹，直接看 ls 看不到

### (6)windows 下的 ubuntu 的安装方式

在 WSL 2 上设置 Node.js

### linux 下的 node 环境和 n 包管理

安装 node 版本后，然后

apt node
安装一个 n 包管理工具
n xxx 安装某一个版本的 node
n ls 列出安装的 node
n 直接切换唤出下面的命令
输出

latest: current
ls: list
lsr: ls-remote
lts: stable
rm: -
run: use, as
which: bin

## 配置 node 和 npm 的软连接

配置 node
ln -s /usr/local/n/versions/node/14.16.0/bin/npm /usr/local/bin/node
配置 npm
ln -s /usr/local/n/versions/node/14.16.0/bin/npm /usr/local/bin/npm
重新更新之前的软连接配置重新设置
配置 node
ln -sf /usr/local/n/versions/node/14.16.0/bin/npm /usr/local/bin/node
配置 npm
ln -sf /usr/local/n/versions/node/14.16.0/bin/npm /usr/local/bin/npm
新设置后，如果出现 node 可以，npm 不可以

node -v 可以，npm 报错。
那么第一步：获取当前的 node 安装目录
如果获取到的路径是 /usr/local/bin/node，说明之前安装的 node 使用了软链，需要找到当前 node 的安装目录，
例如/usr/local/n/versions/node。
第二步，将 node 环境配置文件打开，配置一下 vim ~/.bash_profile
export N_PREFIX=/usr/local/n/versions/node #当前 node 的安装目录
export PATH=$N_PREFIX/bin:$PATH
第三步，点击 source ~/.bash_profile 生效配置再次尝试

## 快速切换和修改 linux 下的 jenkins 版本

cd $JENKINS_HOME
进入当前的 jenkins 安装目录，ls -a

## 8.jenkins 中部署源码管理方式

如何设置不同分支和代码
安装 ssh 插件后，这里两处注意：比如 ssh 网站的地址，第二个构建的分支名称：about-rc 分支
如下图
jenkinsAddr
[引用图 jenkinsAddr](./jenkinsAddr.png)

## 9.jenkins 创建一个项目

### （1）General 的配置中关注：源码管理模块配置 Git

（1）选择 URL 地址仓库
配置 ssh
这里注意：如果是一个 jenkins 权限用户，自己的 ssh 的位置需要配置一下这里的权限。

（2）Credentials 认证管理

（3）分支名称
这里当前的分支设置：比如 develop，那么配置：\*/develop

### （2）执行 shell 下面部分（配置依赖插件：Jenkins SSH plugin 或是 ssh 插件要安装好配置 ssh 权限）

```
参考：

SVR_NAME1="172.16.1.11"  # 这里是服务器地址，不用关系
PROJECT_NAME="h5_app-container-server"   # 这里是当前的项目名称

JENKINS_WORKSPACE="$JENKINS_HOME/workspace/$JOB_NAME" # 设置这里的jenkins项目目录

source /etc/profile
npm install
#npm run start:pm2_pts

# 直接使用当前jenkins已经生成的ssh秘钥连接当前远程的服务器地址资源，先删除h5-mongo-api-server（自己创建堡垒机的目录）
ssh -i /home/jenkins/.ssh/open_cloud_id_rsa cloud@$SVR_NAME1 "rm -rf /opt/www/node-app-container-server/*" # 创建opt文件夹下面的www文件夹内容
#scp -i /home/jenkins/.ssh/open_cloud_id_rsa -r $JENKINS_WORKSPACE/* cloud@$SVR_NAME1:/opt/www/node-app-container-server
scp -i /home/jenkins/.ssh/open_cloud_id_rsa -r $JENKINS_WORKSPACE/* cloud@$SVR_NAME1:/opt/www/node-app-container-server
ssh -i /home/jenkins/.ssh/open_cloud_id_rsa cloud@$SVR_NAME1 "cd /opt/www/node-app-container-server && mkdir logs && npm run start:pm2_rc"
```

修改后，按照个人需要配置内容 shell 如下

```
SVR_NAME1="172.16.1.11"
PROJECT_NAME="h5_mongoAPI-server"

JENKINS_WORKSPACE="$JENKINS_HOME/workspace/$JOB_NAME"

source /etc/profile
npm install

ssh -i /home/jenkins/.ssh/open_cloud_id_rsa cloud@$SVR_NAME1 "rm -rf /opt/www/h5-mongo-api-server/*" # 创建opt文件夹下面的www文件夹内容
#scp -i /home/jenkins/.ssh/open_cloud_id_rsa -r $JENKINS_WORKSPACE/* cloud@$SVR_NAME1:/opt/www/h5-mongo-api-server
scp -i /home/jenkins/.ssh/open_cloud_id_rsa -r $JENKINS_WORKSPACE/* cloud@$SVR_NAME1:/opt/www/h5-mongo-api-server
ssh -i /home/jenkins/.ssh/open_cloud_id_rsa cloud@$SVR_NAME1 "cd /opt/www/h5-mongo-api-server && mkdir logs && npm run serve:pm2_local"
```

### （3）如果需要 nginx 配置相关的 web 容器，那么配置一下

```
ssh -i /home/jenkins/.ssh/open_cloud_id_rsa cloud@$SVR_NAME1  /opt/nginx/sbin/nginx -s reload
```

### （4）部署后续的问题记录

#### 对于 api 地址和域名地址访问的时候区分。

mongoAPI 部分使用了 api 接口 ip 地址，所以这里 ui 部分访问的时候，这里必须用类似于：
mongoAPIUrl: "http://172.16.1.11:50001"，不要用那种域名，这个具体看自己部署的mongoAPI服务的时候，自己写的地址。
