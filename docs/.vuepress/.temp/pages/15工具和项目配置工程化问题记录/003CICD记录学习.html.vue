<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_6-工程化锁定版本修改-某一个版本出现问题-如何修改代码和锁定版本">6.工程化锁定版本修改：某一个版本出现问题，如何修改代码和锁定版本</RouterLink><ul><li><RouterLink to="#npm-ci-锁定版本">npm ci 锁定版本</RouterLink></li><li><RouterLink to="#某一个包进行修改后-如何打补丁-package-modules">某一个包进行修改后，如何打补丁 package-modules</RouterLink></li><li><RouterLink to="#利用-server-机制-锁定一个版本的更新">利用 server 机制，锁定一个版本的更新</RouterLink></li></ul></li><li><RouterLink to="#_0-工程化发布版本记录使用-release-工具发布包自动版本机制">0.工程化发布版本记录使用 release 工具发布包自动版本机制</RouterLink><ul><li><RouterLink to="#_1-项目安装-release">（1）项目安装 release</RouterLink></li><li><RouterLink to="#_2-增加相关项目记录内容-log-记录">（2）增加相关项目记录内容 log 记录</RouterLink></li><li><RouterLink to="#_3-为了更好的记录-diff-我们需要执行一下-npm-init-release-it">（3）为了更好的记录 diff，我们需要执行一下 npm init release-it</RouterLink></li></ul></li><li><RouterLink to="#_1-第一部分-centos-系统-docker和jenkins安装使用">1.第一部分：centos 系统：docker和jenkins安装使用</RouterLink></li><li><RouterLink to="#centos-环境下学习-docker-安装和部署-jenkins-的相关问题">centos 环境下学习 docker 安装和部署 jenkins 的相关问题</RouterLink><ul><li><RouterLink to="#centos-的安装启动命令">centos 的安装启动命令</RouterLink></li><li><RouterLink to="#安装-jenkins-前-关闭防火墙">安装 jenkins 前，关闭防火墙</RouterLink></li><li><RouterLink to="#docker-pull-jenkins-jenkins-镜像太慢解决方案">docker pull jenkins/jenkins 镜像太慢解决方案</RouterLink></li><li><RouterLink to="#启动-jenkins-jenkins">启动 jenkins/jenkins</RouterLink></li><li><RouterLink to="#安装安装-docker-compose">安装安装 docker-compose</RouterLink></li><li><RouterLink to="#安装好之后-然后启动-docker-下的">安装好之后，然后启动 docker 下的</RouterLink></li></ul></li><li><RouterLink to="#_2-第二部分-ubuntu-部分-jenkins和docker安装使用">2.第二部分：ubuntu 部分：jenkins和docker安装使用</RouterLink></li><li><RouterLink to="#ubuntu-环境学习-docker-和部署">ubuntu 环境学习 docker 和部署</RouterLink></li><li><RouterLink to="#防火墙相关">防火墙相关</RouterLink></li><li><RouterLink to="#启动-jenkins-报错">启动 jenkins 报错，</RouterLink></li><li><RouterLink to="#启动-docker">启动 docker</RouterLink><ul><li><RouterLink to="#安装安装-docker-compose-1">安装安装 docker-compose</RouterLink></li></ul></li><li><RouterLink to="#zx-脚本工具的学习">zx 脚本工具的学习</RouterLink></li><li><RouterLink to="#zx-脚本使用方法">zx 脚本使用方法</RouterLink><ul><li><RouterLink to="#linux-系统使用">linux 系统使用</RouterLink></li><li><RouterLink to="#常用的函数">常用的函数</RouterLink></li><li><RouterLink to="#zx-支持-ts-执行库">zx 支持 ts 执行库</RouterLink></li><li><RouterLink to="#jenkins-使用记录命令">jenkins 使用记录命令</RouterLink></li></ul></li><li><RouterLink to="#git-配置多个-ssh-key-方法">git 配置多个 ssh-key 方法</RouterLink><ul><li><RouterLink to="#补充快速配置-ssh-key">补充快速配置 ssh-key</RouterLink></li><li><RouterLink to="#进入-ssh-文件夹">进入.ssh 文件夹</RouterLink></li><li><RouterLink to="#打开-ssh-下面的-config">打开.ssh 下面的 config</RouterLink></li><li><RouterLink to="#打开的-gitlab-中配置-sshkey-内容">打开的 gitlab 中配置 sshkey 内容</RouterLink></li></ul></li></ul></nav>
<h2 id="_6-工程化锁定版本修改-某一个版本出现问题-如何修改代码和锁定版本" tabindex="-1"><a class="header-anchor" href="#_6-工程化锁定版本修改-某一个版本出现问题-如何修改代码和锁定版本" aria-hidden="true">#</a> 6.工程化锁定版本修改：某一个版本出现问题，如何修改代码和锁定版本</h2>
<h3 id="npm-ci-锁定版本" tabindex="-1"><a class="header-anchor" href="#npm-ci-锁定版本" aria-hidden="true">#</a> npm ci 锁定版本</h3>
<p>npm ci 可以在开发完成后，锁定版本，避免版本功能出现问题</p>
<h3 id="某一个包进行修改后-如何打补丁-package-modules" tabindex="-1"><a class="header-anchor" href="#某一个包进行修改后-如何打补丁-package-modules" aria-hidden="true">#</a> 某一个包进行修改后，如何打补丁 package-modules</h3>
<h3 id="利用-server-机制-锁定一个版本的更新" tabindex="-1"><a class="header-anchor" href="#利用-server-机制-锁定一个版本的更新" aria-hidden="true">#</a> 利用 server 机制，锁定一个版本的更新</h3>
<h2 id="_0-工程化发布版本记录使用-release-工具发布包自动版本机制" tabindex="-1"><a class="header-anchor" href="#_0-工程化发布版本记录使用-release-工具发布包自动版本机制" aria-hidden="true">#</a> 0.工程化发布版本记录使用 release 工具发布包自动版本机制</h2>
<p>工程化版本发布</p>
<h3 id="_1-项目安装-release" tabindex="-1"><a class="header-anchor" href="#_1-项目安装-release" aria-hidden="true">#</a> （1）项目安装 release</h3>
<p>npm i release-it
配置 package 中增加 release:
&quot;release&quot;: &quot;release-it&quot;</p>
<h3 id="_2-增加相关项目记录内容-log-记录" tabindex="-1"><a class="header-anchor" href="#_2-增加相关项目记录内容-log-记录" aria-hidden="true">#</a> （2）增加相关项目记录内容 log 记录</h3>
<p>npm i @release-it/keep-a-changelog
因为我们 npm run release 后，会有相关的日志记录</p>
<h3 id="_3-为了更好的记录-diff-我们需要执行一下-npm-init-release-it" tabindex="-1"><a class="header-anchor" href="#_3-为了更好的记录-diff-我们需要执行一下-npm-init-release-it" aria-hidden="true">#</a> （3）为了更好的记录 diff，我们需要执行一下 npm init release-it</h3>
<p>初始化整个项目，更好的形成记录
这里需要执行两次</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>第一次：npm init release-it后package选择后，会在package中增加一个字段  "release-it": {}

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-第一部分-centos-系统-docker和jenkins安装使用" tabindex="-1"><a class="header-anchor" href="#_1-第一部分-centos-系统-docker和jenkins安装使用" aria-hidden="true">#</a> 1.第一部分：centos 系统：docker和jenkins安装使用</h2>
<p>记录 docker,和 jenkins 下安装 docker 的过程。</p>
<h2 id="centos-环境下学习-docker-安装和部署-jenkins-的相关问题" tabindex="-1"><a class="header-anchor" href="#centos-环境下学习-docker-安装和部署-jenkins-的相关问题" aria-hidden="true">#</a> centos 环境下学习 docker 安装和部署 jenkins 的相关问题</h2>
<h3 id="centos-的安装启动命令" tabindex="-1"><a class="header-anchor" href="#centos-的安装启动命令" aria-hidden="true">#</a> centos 的安装启动命令</h3>
<p>大多数 Linux 发行版本使用<code v-pre>systemctl</code>启动服务，如果不是那就尝试使用下<code v-pre>service</code>来启动</p>
<h4 id="此时我的电脑使用-systemctl" tabindex="-1"><a class="header-anchor" href="#此时我的电脑使用-systemctl" aria-hidden="true">#</a> 此时我的电脑使用 systemctl ,</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl restart docker
启动docker：systemctl start docker

停止docker：systemctl stop docker

重启docker：systemctl restart docker

查看下ps -ef | grep "docker" docker启动了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-jenkins-前-关闭防火墙" tabindex="-1"><a class="header-anchor" href="#安装-jenkins-前-关闭防火墙" aria-hidden="true">#</a> 安装 jenkins 前，关闭防火墙</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>查看防火墙状态： systemctl status firewalld.service

绿的running表示防火墙开启

执行关闭命令： systemctl stop firewalld.service

再次执行查看防火墙命令：systemctl status firewalld.service

执行开机禁用防火墙自启命令 ： systemctl disable firewalld.service

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-pull-jenkins-jenkins-镜像太慢解决方案" tabindex="-1"><a class="header-anchor" href="#docker-pull-jenkins-jenkins-镜像太慢解决方案" aria-hidden="true">#</a> docker pull jenkins/jenkins 镜像太慢解决方案</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
加速Docker镜像源

vi /etc/docker/daemon.json

在配置文件中加入

{
  "registry-mirrors": ["https://xxx.mirror.aliyuncs.com"]
}

[root@km docker]# systemctl daemon-reload
[root@km docker]# systemctl restart docker

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker 安装好后，用 docker 安装 jenkins 相关的镜像</p>
<p><a href="https://blog.csdn.net/qq_39387856/article/details/115496100" target="_blank" rel="noopener noreferrer">CentOS7 环境下使用 docker 安装 jenkins_EricXiao666 的博客-CSDN 博客_centos7 docker 安装 jenkins<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>--- 查看所有的拉取的镜像
docker images
（注意没有docker images ls不是这个）
--- 启动jenkins镜像容器，利用images的名称

根目录创建一个var
mkdir -p /var/jenkins_home

授予权限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动-jenkins-jenkins" tabindex="-1"><a class="header-anchor" href="#启动-jenkins-jenkins" aria-hidden="true">#</a> 启动 jenkins/jenkins</h3>
<p>最后再次执行 docker pull jenkins/jenkins</p>
<ul>
<li>创建未来放置 jenkins 配置的文件，</li>
</ul>
<p>新建一个菜单：home 下面，jenkins_home</p>
<ul>
<li>权限菜单放开</li>
</ul>
<p>chown -R 1000:1000 /home/jenkins_home</p>
<ul>
<li>根据新建的菜单内容，进行的相关的启动命令和说明</li>
</ul>
<p>docker run -p 8080:8080 -p 50000:50000 -v /home/jenkins_home jenkins/jenkins</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>8080 端口是访问 jenkins 网页的端口，如果你想在 80 端口访问，就改成 -p 80:8080
50000 端口与 slave 有关，参考 jnlp-slave 这个镜像，里面使用的 port。
-v 参数挂载了宿主机一个指定目录到 /home/jenkins_home ，相当于设置了自定义的 JENKINS_HOME
最后一个参数是镜像名称，这里是jenkins/jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对了 docker 下启动 jenkins 在 su 后，管理员模式启动</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
docker run -p 8080:8080 -p 50000:50000 -v /home/jenkins_home   jenkins/jenkins

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装安装-docker-compose" tabindex="-1"><a class="header-anchor" href="#安装安装-docker-compose" aria-hidden="true">#</a> 安装安装 docker-compose</h3>
<h4 id="centos-安装后-日期时间显示错误" tabindex="-1"><a class="header-anchor" href="#centos-安装后-日期时间显示错误" aria-hidden="true">#</a> centos 安装后，日期时间显示错误</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1.安装时间同步插件

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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装好之后-然后启动-docker-下的" tabindex="-1"><a class="header-anchor" href="#安装好之后-然后启动-docker-下的" aria-hidden="true">#</a> 安装好之后，然后启动 docker 下的</h3>
<p>localhost:8080</p>
<p>jenkins 的安装密钥</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>dda2569e0f164b7a975f7d1525119767
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装界面出现一些插件的报错，可以替换或是稍后再次安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
[image-20220618233107693]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-第二部分-ubuntu-部分-jenkins和docker安装使用" tabindex="-1"><a class="header-anchor" href="#_2-第二部分-ubuntu-部分-jenkins和docker安装使用" aria-hidden="true">#</a> 2.第二部分：ubuntu 部分：jenkins和docker安装使用</h2>
<h2 id="ubuntu-环境学习-docker-和部署" tabindex="-1"><a class="header-anchor" href="#ubuntu-环境学习-docker-和部署" aria-hidden="true">#</a> ubuntu 环境学习 docker 和部署</h2>
<p>第一步安装 docker(ubuntu)</p>
<p>第二部安装 jenkins</p>
<p><a href="https://blog.csdn.net/weixin_34375054/article/details/92056200" target="_blank" rel="noopener noreferrer">ubuntu 16.04 安装 Jenkins（使用 apt install 安装）_weixin_34375054 的博客-CSDN 博客<ExternalLinkIcon/></a></p>
<p>注意 jenkins 运行需要支持 java 环境，所以安装 openjdk 包</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sudo apt install openjdk-11-jdk
//或是通过命令

sudo apt-get install openjdk-11-jdk

案例中不需要输入systemctl  status jenkins这个命令

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步：设置访问允许的环境</p>
<p>sudo ufw allow 8080</p>
<p>如果需要任意地方都可以 i 访问到 jenkins，那么使用这个命令</p>
<p>第四步：设置 jenkins 环境</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>这里只是个人通过wsl的过程。
执行jenkins后，出现
Please use the following password to proceed to installation:

b2682866419442c78d854ac9e89c217d

This may also be found at: /root/.jenkins/secrets/initialAdminPassword
猪猪。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动重启</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> jenkins restart

<span class="token function">sudo</span> ufw allow <span class="token number">8088</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="防火墙相关" tabindex="-1"><a class="header-anchor" href="#防火墙相关" aria-hidden="true">#</a> 防火墙相关</h2>
<p>最简单的一个操作：sudo ufw status 可检查防火墙的状态，我的返回的是：不活动</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>

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




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>确定防火墙的没有问题之后，开启启动</p>
<p>service jenkins start</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>service jenkins start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="启动-jenkins-报错" tabindex="-1"><a class="header-anchor" href="#启动-jenkins-报错" aria-hidden="true">#</a> 启动 jenkins 报错，</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Setting up max open files limit to 8192
或是
bash: ulimit: open files: cannot modify limit: Operation not permitted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么需要开启增加启动文件数量。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>修改
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




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动-docker" tabindex="-1"><a class="header-anchor" href="#启动-docker" aria-hidden="true">#</a> 启动 docker</h2>
<p>sudo service docker start</p>
<h3 id="安装安装-docker-compose-1" tabindex="-1"><a class="header-anchor" href="#安装安装-docker-compose-1" aria-hidden="true">#</a> 安装安装 docker-compose</h3>
<h2 id="zx-脚本工具的学习" tabindex="-1"><a class="header-anchor" href="#zx-脚本工具的学习" aria-hidden="true">#</a> zx 脚本工具的学习</h2>
<p>Google 的 zx.js 提供了封装子进程的创建以及从这些进程处理 stdout 和 stderr 的函数。</p>
<p>下面将使用的主要函数是 $ 函数，使用 zx.js 规定脚本写入扩展名为 .mjs 的文件中，以便能够在顶层使用 await。
如果习惯于 .js 扩展名，请将脚本包装在类似 void async function () {...}() 中。</p>
<h2 id="zx-脚本使用方法" tabindex="-1"><a class="header-anchor" href="#zx-脚本使用方法" aria-hidden="true">#</a> zx 脚本使用方法</h2>
<p>然后我们需要在我们的脚本文件开头（顶部）添加特殊注释标记为 zx 脚本</p>
<p>#！/usr/bin/env zx</p>
<p>执行： zx ./index.mjs</p>
<h3 id="linux-系统使用" tabindex="-1"><a class="header-anchor" href="#linux-系统使用" aria-hidden="true">#</a> linux 系统使用</h3>
<p>####给文件加权限
chmod +x index.mjs</p>
<h4 id="执行文件" tabindex="-1"><a class="header-anchor" href="#执行文件" aria-hidden="true">#</a> 执行文件</h4>
<p>./index.mjs</p>
<h3 id="常用的函数" tabindex="-1"><a class="header-anchor" href="#常用的函数" aria-hidden="true">#</a> 常用的函数</h3>
<p>zx 提供了其他几个实用函数来简化 shell 脚本编写，例如：</p>
<p>cd(). 这允许我们更改当前的工作目录
question(). 这是 Node.js readline 模块的包装器，它可以直接提示用户输入
sleep(). setTimeout 包装器</p>
<p>chalk：允许为脚本的输出添加颜色。fetch：可以使用它来发出 HTTP 请求。fs-extra：公开了 Node.js 核心 fs 模块，以及许多其他方法，可以更轻松地使用文件系统。</p>
<p>minimist：解析命令行参数的库，将它们暴露在 argv 对象下。</p>
<h3 id="zx-支持-ts-执行库" tabindex="-1"><a class="header-anchor" href="#zx-支持-ts-执行库" aria-hidden="true">#</a> zx 支持 ts 执行库</h3>
<h4 id="_1-第一步将-package-json-中引入模块" tabindex="-1"><a class="header-anchor" href="#_1-第一步将-package-json-中引入模块" aria-hidden="true">#</a> 1.第一步将 package.json 中引入模块</h4>
<p>第一步引入 typescript 和 ts-node 两个模块
第二步增加 type:&quot;module&quot;模块化.(js 支持模块化)
第三步增加 build 脚本和运行命令：build 和 start</p>
<h4 id="ts-模块化" tabindex="-1"><a class="header-anchor" href="#ts-模块化" aria-hidden="true">#</a> ts 模块化</h4>
<p>mjs 是 EcmaScript 模块的扩展</p>
<p>Node.js 会将.cjs 文件视为 CommonJS 模块，将.mjs 文件视为 ECMAScript 模块。
它会将.js 文件视为项目的默认模块系统（这是 CommonJS，除非 package.json 说&quot;type&quot;: &quot;module&quot;, ）。</p>
<h4 id="ts-中引入后-没有这个模块" tabindex="-1"><a class="header-anchor" href="#ts-中引入后-没有这个模块" aria-hidden="true">#</a> ts 中引入后，没有这个模块</h4>
<p>有时候 import 一个模块
error TS1192: Module ‘“fs“‘ has no default export.</p>
<p>使用
import * as fs from 'fs'</p>
<p>{
&quot;compilerOptions&quot;: {
&quot;esModuleInterop&quot;: true
}
}</p>
<h3 id="jenkins-使用记录命令" tabindex="-1"><a class="header-anchor" href="#jenkins-使用记录命令" aria-hidden="true">#</a> jenkins 使用记录命令</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>windows系统的使用jenkins的内容

C:\Windows\system32\config\systemprofile\AppData\Local\Jenkins\.jenkins\workspace\test-sh-deploy-jenkins




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-配置多个-ssh-key-方法" tabindex="-1"><a class="header-anchor" href="#git-配置多个-ssh-key-方法" aria-hidden="true">#</a> git 配置多个 ssh-key 方法</h2>
<h3 id="补充快速配置-ssh-key" tabindex="-1"><a class="header-anchor" href="#补充快速配置-ssh-key" aria-hidden="true">#</a> 补充快速配置 ssh-key</h3>
<h3 id="进入-ssh-文件夹" tabindex="-1"><a class="header-anchor" href="#进入-ssh-文件夹" aria-hidden="true">#</a> 进入.ssh 文件夹</h3>
<p>打开 bash，然后输入自己当前的密码一路回车，生成后面的文件
ssh-keygen -t rsa -C 'ningyongheng@jeejio' -f ~/.ssh/gitlab_id_rsa</p>
<h3 id="打开-ssh-下面的-config" tabindex="-1"><a class="header-anchor" href="#打开-ssh-下面的-config" aria-hidden="true">#</a> 打开.ssh 下面的 config</h3>
<p>添加一个当前的网站和地址，比如 gitlab</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># gitlab
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打开的-gitlab-中配置-sshkey-内容" tabindex="-1"><a class="header-anchor" href="#打开的-gitlab-中配置-sshkey-内容" aria-hidden="true">#</a> 打开的 gitlab 中配置 sshkey 内容</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[xxx]_rsa.pub文件内容复制一下


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
