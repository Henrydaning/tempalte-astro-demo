# ubuntu 系统模块

### 1.查看当前的所有的 linux 服务

```
netstat -ntulp

```

### 2.linux 当前的用户是谁？

whoami

### 3.ubuntu 不用每一次输入 sudo

（1）sudo visudo

打开配置后，找到
root ALL=(ALL:ALL) ALL

whoami 找到的用户名，比如 daning

加上一行
daning ALL=(ALL:ALL) ALL

（2）账号提权
对于和权限有关的操作，如 vim cp mv 等，若当前 user 对应目录或文件没有相应权限，仍需 sudo 提权，或直接 chmod 给到该 user。

sudo usermod -aG sudo xxx

### 4.chown 和 chmod 命令区别

chown 与 chmod 的区别
chown 修改文件和文件夹的用户和用户组属性

chmod 修改文件和目录的访问权限，但是不能变换所有者

### 5.ubuntu 系统中配置多个 git 账号

配置 gitee 和 github 账号方法
安装 git
git 地址在这里，今天用的是 deepin 所以直接使用源安装。

#### 安装 git

apt-get install git
全局配置 name 和 email

#### 配置账号密码

git config --global user.name "xxx"
git config --global user.email "eamil@qq.com"

#### 生成公钥

创建~/xingmu/.ssh 目录，并进入。

```
$ cd ~
$ mkdir .ssh
$ cd .ssh
在~/xingmu/.ssh 目录下，用 ssh-keygen 命令生成一组新的 id_rsa_new 和 id_rsa_new.pub，我这里需要使用 github 和 gitee(码云)两个平台，所以需要执行两次命令，分别生成 id_rsa_github/id_rs_github.pub 和 id_rsa_gitee/id_rsa_gitee.pub 两组。

$ ssh-keygen -t rsa -C "xxx@xxx.com"
需要注意的是，平时都是默认生成 id_rsa 和 id_rsa.pub 。现在要在第一个提示输入出现时分别输入带有表示意义的名字，以便于识别，这里我输入的是 id_rsa_github 和 id_rsa_gitee。

配置 config
将公钥分别配置到对应的 git 平台上，然后在~/xingmu/.ssh 目录下新建 config 文件，配置参考如下。
```

```
### github
# 域名地址的别名
Host github
# 这个是真实的域名地址
Hostname github.com
# 配置使用用户名
User xxx@xx.com
# 这里是 id_rsa 的目录位置
IdentityFile ~/.ssh/id_rsa_github

### 码云
# 域名地址的别名
Host gitee
# 这个是真实的域名地址
Hostname gitee.com
# 配置使用用户名
User xxx@xx.com
# 这里是 id_rsa 的目录位置
IdentityFile ~/.ssh/id_rsa_gitee
### 以下第三个或者更多
```

#### 测试

```
ssh -T git@github
Hi your name! You've successfully authenticated, but GitHub does not provide shell access.
$ ssh -T git@gitee
Hi xingmu! You've successfully authenticated, but GITEE.COM does not provide shell access.
如果出现如下的提示，选择 yes 继续就可以了
```

### 6.文件操作常见命令：重命名，创建
#### mv重命名

mv old 文件名 new 文件名

#### 创建一个文件：
touch或是cat


#### 显示隐藏文件
ls -a



### 7.ubuntu上面eht0是本地ip，但是无法本机浏览器访问。
如何关闭当前ubuntu中的防火墙
sudo ufw status 查看是否关闭了
或是进入管理员模式，su后，进入ufw status查看

关闭防火墙：sudo ufw disable


# centos 系统模块
