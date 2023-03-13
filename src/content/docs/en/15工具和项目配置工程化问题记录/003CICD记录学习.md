

## 6.工程化锁定版本修改：某一个版本出现问题，如何修改代码和锁定版本

### npm ci 锁定版本

npm ci 可以在开发完成后，锁定版本，避免版本功能出现问题

### 某一个包进行修改后，如何打补丁 package-modules

### 利用 server 机制，锁定一个版本的更新

## 0.工程化发布版本记录使用 release 工具发布包自动版本机制

工程化版本发布

### （1）项目安装 release
~~~
快捷版本
 npm  i release-it @release-it/keep-a-changelog -D
 接着：npm init release-it
 最后

~~~

npm i release-it
配置 package 中增加 release:
"release": "release-it"

### （2）增加相关项目记录内容 log 记录

npm i @release-it/keep-a-changelog
因为我们 npm run release 后，会有相关的日志记录

### （3）为了更好的记录 diff，我们需要执行一下 npm init release-it

初始化整个项目，更好的形成记录
这里需要执行两次

```
第一次：npm init release-it后package选择后，会在package中增加一个字段  "release-it": {}

第二次：npm init release-it形成一个 .release-it.json配置文件，增加下面的配置内容钩子

{
    "github": {
        "release": true
    },
    "git": {
        "commitMessage": "release: v${version}"
    },
    "npm": {
        "publish": false
    },
    "hooks": {
        "after:bump": "echo 更新版本成功"
    },
    "plugins": {
        "@release-it/conventional-changelog": {
            "preset": "angular",
            "infile": "CHANGELOG.md"
        }
    }
}

```

## 1.第一部分：centos 系统：docker和jenkins安装使用

记录 docker,和 jenkins 下安装 docker 的过程。

## centos 环境下学习 docker 安装和部署 jenkins 的相关问题

### centos 的安装启动命令

大多数 Linux 发行版本使用`systemctl`启动服务，如果不是那就尝试使用下`service`来启动

#### 此时我的电脑使用 systemctl ,

```
systemctl restart docker
启动docker：systemctl start docker

停止docker：systemctl stop docker

重启docker：systemctl restart docker

查看下ps -ef | grep "docker" docker启动了
```

### 安装 jenkins 前，关闭防火墙

```
查看防火墙状态： systemctl status firewalld.service

绿的running表示防火墙开启

执行关闭命令： systemctl stop firewalld.service

再次执行查看防火墙命令：systemctl status firewalld.service

执行开机禁用防火墙自启命令 ： systemctl disable firewalld.service

```

### docker pull jenkins/jenkins 镜像太慢解决方案

```

加速Docker镜像源

vi /etc/docker/daemon.json

在配置文件中加入

{
  "registry-mirrors": ["https://xxx.mirror.aliyuncs.com"]
}

[root@km docker]# systemctl daemon-reload
[root@km docker]# systemctl restart docker

```

docker 安装好后，用 docker 安装 jenkins 相关的镜像

[CentOS7 环境下使用 docker 安装 jenkins_EricXiao666 的博客-CSDN 博客\_centos7 docker 安装 jenkins](https://blog.csdn.net/qq_39387856/article/details/115496100)

```
--- 查看所有的拉取的镜像
docker images
（注意没有docker images ls不是这个）
--- 启动jenkins镜像容器，利用images的名称

根目录创建一个var
mkdir -p /var/jenkins_home

授予权限
```

### 启动 jenkins/jenkins

最后再次执行 docker pull jenkins/jenkins

- 创建未来放置 jenkins 配置的文件，

新建一个菜单：home 下面，jenkins_home

- 权限菜单放开

chown -R 1000:1000 /home/jenkins_home

- 根据新建的菜单内容，进行的相关的启动命令和说明

docker run -p 8080:8080 -p 50000:50000 -v /home/jenkins_home jenkins/jenkins

```
8080 端口是访问 jenkins 网页的端口，如果你想在 80 端口访问，就改成 -p 80:8080
50000 端口与 slave 有关，参考 jnlp-slave 这个镜像，里面使用的 port。
-v 参数挂载了宿主机一个指定目录到 /home/jenkins_home ，相当于设置了自定义的 JENKINS_HOME
最后一个参数是镜像名称，这里是jenkins/jenkins
```

对了 docker 下启动 jenkins 在 su 后，管理员模式启动

```

docker run -p 8080:8080 -p 50000:50000 -v /home/jenkins_home   jenkins/jenkins

```

### 安装安装 docker-compose

#### centos 安装后，日期时间显示错误

```
1.安装时间同步插件

yum install ntpdate

2.开启时间同步

service ntpdate restart

3.设置时区：

删除本地时间（美国时间）

rm -rf /etc/localtime

设置时区为上海

ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

4.验证：
[root@localhost cai]# date
Tue Feb 26 15:35:54 CST 2019


```

### 安装好之后，然后启动 docker 下的

localhost:8080

jenkins 的安装密钥

```
dda2569e0f164b7a975f7d1525119767
```

安装界面出现一些插件的报错，可以替换或是稍后再次安装

```

[image-20220618233107693]
```

## 2.第二部分：ubuntu 部分：jenkins和docker安装使用

## ubuntu 环境学习 docker 和部署

第一步安装 docker(ubuntu)

第二部安装 jenkins

[ubuntu 16.04 安装 Jenkins（使用 apt install 安装）\_weixin_34375054 的博客-CSDN 博客](https://blog.csdn.net/weixin_34375054/article/details/92056200)

注意 jenkins 运行需要支持 java 环境，所以安装 openjdk 包

```
sudo apt install openjdk-11-jdk
//或是通过命令

sudo apt-get install openjdk-11-jdk

案例中不需要输入systemctl  status jenkins这个命令

```

第三步：设置访问允许的环境

sudo ufw allow 8080

如果需要任意地方都可以 i 访问到 jenkins，那么使用这个命令

第四步：设置 jenkins 环境

```
这里只是个人通过wsl的过程。
执行jenkins后，出现
Please use the following password to proceed to installation:

b2682866419442c78d854ac9e89c217d

This may also be found at: /root/.jenkins/secrets/initialAdminPassword
猪猪。

```

启动重启

```shell
sudo service jenkins restart

sudo ufw allow 8088



```

## 防火墙相关

最简单的一个操作：sudo ufw status 可检查防火墙的状态，我的返回的是：不活动

```


root@daning:/home/daning# sudo ufw status
Status: active

To                         Action      From
--                         ------      ----
8080                       ALLOW       Anywhere
8088                       ALLOW       Anywhere
8080 (v6)                  ALLOW       Anywhere (v6)
8088 (v6)                  ALLOW       Anywhere (v6)
展示上面的情况，表示开启了端口问题任意位置
如果没有，表示没有安装ufw
ubuntu 系统默认已安装ufw.

1.安装

sudo apt-get install ufw

2.启用

sudo ufw enable

sudo ufw default deny




```

确定防火墙的没有问题之后，开启启动

service jenkins start

```
service jenkins start
```

## 启动 jenkins 报错，

```
Setting up max open files limit to 8192
或是
bash: ulimit: open files: cannot modify limit: Operation not permitted
```

那么需要开启增加启动文件数量。

```
修改
/etc/security/limits.conf

文件数限制
加上
* soft nofile 204800
* hard nofile 204800
* soft nproc 204800
* hard nproc 204800
*          # 代表针对所有用户
noproc     #是代表最大进程数
nofile     #是代表最大文件打开数
但是再次打开
ulimit -n看到还是原值1024，怎么办？

只能每一次临时进入root模式后，使用
ulimit -n 65535
修改当前的值




```

## 启动 docker

sudo service docker start

### 安装安装 docker-compose

## zx 脚本工具的学习

Google 的 zx.js 提供了封装子进程的创建以及从这些进程处理 stdout 和 stderr 的函数。

下面将使用的主要函数是 $ 函数，使用 zx.js 规定脚本写入扩展名为 .mjs 的文件中，以便能够在顶层使用 await。
如果习惯于 .js 扩展名，请将脚本包装在类似 void async function () {...}() 中。

## zx 脚本使用方法

然后我们需要在我们的脚本文件开头（顶部）添加特殊注释标记为 zx 脚本

#！/usr/bin/env zx

执行： zx ./index.mjs

### linux 系统使用

####给文件加权限
chmod +x index.mjs

#### 执行文件

./index.mjs

### 常用的函数

zx 提供了其他几个实用函数来简化 shell 脚本编写，例如：

cd(). 这允许我们更改当前的工作目录
question(). 这是 Node.js readline 模块的包装器，它可以直接提示用户输入
sleep(). setTimeout 包装器

chalk：允许为脚本的输出添加颜色。fetch：可以使用它来发出 HTTP 请求。fs-extra：公开了 Node.js 核心 fs 模块，以及许多其他方法，可以更轻松地使用文件系统。

minimist：解析命令行参数的库，将它们暴露在 argv 对象下。

### zx 支持 ts 执行库

#### 1.第一步将 package.json 中引入模块

第一步引入 typescript 和 ts-node 两个模块
第二步增加 type:"module"模块化.(js 支持模块化)
第三步增加 build 脚本和运行命令：build 和 start

#### ts 模块化

mjs 是 EcmaScript 模块的扩展

Node.js 会将.cjs 文件视为 CommonJS 模块，将.mjs 文件视为 ECMAScript 模块。
它会将.js 文件视为项目的默认模块系统（这是 CommonJS，除非 package.json 说"type": "module", ）。

#### ts 中引入后，没有这个模块

有时候 import 一个模块
error TS1192: Module ‘“fs“‘ has no default export.

使用
import \* as fs from 'fs'

{
"compilerOptions": {
"esModuleInterop": true
}
}

### jenkins 使用记录命令

```
windows系统的使用jenkins的内容

C:\Windows\system32\config\systemprofile\AppData\Local\Jenkins\.jenkins\workspace\test-sh-deploy-jenkins




```

## git 配置多个 ssh-key 方法

### 补充快速配置 ssh-key

### 进入.ssh 文件夹

打开 bash，然后输入自己当前的密码一路回车，生成后面的文件
ssh-keygen -t rsa -C 'ningyongheng@jeejio' -f ~/.ssh/gitlab_id_rsa

### 打开.ssh 下面的 config

添加一个当前的网站和地址，比如 gitlab

```
# gitlab
Host gitlab.com
HostName gitlab.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitlab_id_rsa

# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_github

# gerrit.jeejio
Host gerrit.jeejio.com
HostName gerrit.jeejio.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_ed25519
ProxyCommand connect -H 127.0.0.1:15732 %h %p

```

### 打开的 gitlab 中配置 sshkey 内容

```
[xxx]_rsa.pub文件内容复制一下


```
