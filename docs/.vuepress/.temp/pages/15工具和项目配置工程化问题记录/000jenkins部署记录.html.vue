<template><div><h1 id="初始化配置jenkins步骤" tabindex="-1"><a class="header-anchor" href="#初始化配置jenkins步骤" aria-hidden="true">#</a> 初始化配置jenkins步骤</h1>
<h2 id="安装gitee-plugin" tabindex="-1"><a class="header-anchor" href="#安装gitee-plugin" aria-hidden="true">#</a> 安装Gitee Plugin</h2>
<p>安装后，找到全局配置和全局凭证，配置后全局凭证后，然后再全局配置配置一下Gitee即可。</p>
<p>问题：git项目分支是公开的仓库，可以使用giteeAPI，但是当公开的仓库设置为私有的，此时的GiteeAPI不可以了。</p>
<p>下载代码</p>
<h3 id="配置一个gieapi令牌-配置一个全局的sshgitee" tabindex="-1"><a class="header-anchor" href="#配置一个gieapi令牌-配置一个全局的sshgitee" aria-hidden="true">#</a> 配置一个gieAPI令牌，配置一个全局的sshgitee</h3>
<p>如果是公开的项目，使用giteeAPI令牌
如果是私有的项目，使用ssh的私钥</p>
<h2 id="上传服务代码-手动" tabindex="-1"><a class="header-anchor" href="#上传服务代码-手动" aria-hidden="true">#</a> 上传服务代码：手动</h2>
<p>WSL作为服务器（本地的WSL），远程linux系统（centos或是unbutu系统）---前提：chmod放开权限。</p>
<h3 id="centos" tabindex="-1"><a class="header-anchor" href="#centos" aria-hidden="true">#</a> centos</h3>
<p>scp -r dist/* root@192.168.231.135:/home/daning/dist   默认就可以，加上home不可以。应该home文件夹放开权限</p>
<h3 id="unbuntu" tabindex="-1"><a class="header-anchor" href="#unbuntu" aria-hidden="true">#</a> unbuntu</h3>
<p>scp -r dist/* root@172.30.251.114:/home/daning/dist</p>
<p>有一个文件文件夹权限chock
chmod 777 -R  文件夹 递归放开文件夹权限
注意如果是WSL中的unbutu系统，那么使用如下
先放开菜单权限，然后scp -r dist/* \wsl.localhost\Ubuntu\home\dist</p>
<h2 id="自动上传-打包代码到服务器" tabindex="-1"><a class="header-anchor" href="#自动上传-打包代码到服务器" aria-hidden="true">#</a> 自动上传，打包代码到服务器</h2>
<h3 id="安装插件-publish-over-ssh" tabindex="-1"><a class="header-anchor" href="#安装插件-publish-over-ssh" aria-hidden="true">#</a> - 安装插件：Publish Over SSH</h3>
<p>增加构建后操作步骤，选择 Send build artifacts over SSH，使用 SSH 的方式将代码上传至服务器</p>
<h3 id="配置over-ssh" tabindex="-1"><a class="header-anchor" href="#配置over-ssh" aria-hidden="true">#</a> 配置Over SSH</h3>
<p><img src="/images/ssh.png" alt="配置ssh内容">
其他上面的说明可以不写。
接着项目中配置相关内容</p>
<p><img src="/images/buildafter.png" alt="配置打包后内容"></p>
<h4 id="提示-ssh在服务器配置好" tabindex="-1"><a class="header-anchor" href="#提示-ssh在服务器配置好" aria-hidden="true">#</a> 提示，ssh在服务器配置好</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>-->linux要启动ssh服务，命令如下（按顺序执行就行了）：
启动ssh服务命令：sudo service sshd start
查看服务是否启动：ps -e|grep sshd
查看22端口是否启用：netstat -an|grep 22
测试一下，避免一直连接不上
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="补充一个deploy-sh中sshpass" tabindex="-1"><a class="header-anchor" href="#补充一个deploy-sh中sshpass" aria-hidden="true">#</a> 补充一个deploy.sh中sshpass</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 本地发布测试环境脚本

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



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地发布测试环境脚本" tabindex="-1"><a class="header-anchor" href="#本地发布测试环境脚本" aria-hidden="true">#</a> 本地发布测试环境脚本</h2>
<h2 id="构建前端" tabindex="-1"><a class="header-anchor" href="#构建前端" aria-hidden="true">#</a> 构建前端</h2>
<p>yarn build</p>
<p>echo &quot;开始上传...&quot;</p>
<h2 id="删除原文件" tabindex="-1"><a class="header-anchor" href="#删除原文件" aria-hidden="true">#</a> 删除原文件</h2>
<p>sshpass -p 123456 ssh app@xxx.xxx.xxx.xxx &quot;rm -rf /home/app/nginx/html/*&quot;</p>
<h2 id="上传新文件" tabindex="-1"><a class="header-anchor" href="#上传新文件" aria-hidden="true">#</a> 上传新文件</h2>
<p>sshpass -p 123456 scp -r ./build/* app@xxx.xxx.xxx.xxx:/home/app/nginx/html
echo &quot;上传成功！&quot;</p>
<p>注意：应用范围：可以在命令行直接使用密码来进行远程连接和远程拉取文件。</p>
<h3 id="ubunut配置sshpass" tabindex="-1"><a class="header-anchor" href="#ubunut配置sshpass" aria-hidden="true">#</a> ubunut配置sshpass</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># vim /etc/ssh/ssh_config   StrictHostKeyChecking no
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webhook配置自动化执行" tabindex="-1"><a class="header-anchor" href="#webhook配置自动化执行" aria-hidden="true">#</a> webhook配置自动化执行</h2>
<p>首先测试一下利用webhook，增加一个机器人，然后如果触发了。
创建一个群，然后添加一个部署机器人，https://open.feishu.cn/open-apis/bot/v2/hook/cb3d8145-b74f-4849-b1</p>
<p>使用飞书通知：Jenkins的构建结果通知到飞书群</p>
<h3 id="插件-post-build-task" tabindex="-1"><a class="header-anchor" href="#插件-post-build-task" aria-hidden="true">#</a> 插件：Post Build Task</h3>
<h3 id="使用dingding通知-安装dinging插件-dingding-json-pusher" tabindex="-1"><a class="header-anchor" href="#使用dingding通知-安装dinging插件-dingding-json-pusher" aria-hidden="true">#</a> 使用DIngding通知：安装Dinging插件+DIngding Json pusher</h3>
<p>这个插件负责全局的钉钉配置，
同时下载一个Dingding JSON Pusher Plugin版本2.0，这个用来负责打包后，通知消息给群里。
https://oapi.dingtalk.com/robot/send?access_token=be5a98346ebaa005997e95a7180c89c75a6fd13275ec8aa2fabf9552428b1ead</p>
<h3 id="自动化测试" tabindex="-1"><a class="header-anchor" href="#自动化测试" aria-hidden="true">#</a> 自动化测试</h3>
<p>关键词这个东西，就是你创建钉钉群时会输入一个关键词，然后你发消息时必须得带有这个关键词才行，
比如我这个钉钉群里的关键词是 自动化测试，我用代码发群通知的时候必须每条都带有 自动化测试 这几个字
(飞书类似,但是通过py脚本)</p>
<h2 id="jenkins上安装blue-ocean" tabindex="-1"><a class="header-anchor" href="#jenkins上安装blue-ocean" aria-hidden="true">#</a> Jenkins上安装Blue Ocean</h2>
<p>这个可以可视化构建查看每一个流程输出内容</p>
<h2 id="jenkins选择脚本时候注意" tabindex="-1"><a class="header-anchor" href="#jenkins选择脚本时候注意" aria-hidden="true">#</a> jenkins选择脚本时候注意：</h2>
<p><img src="/images/execcontext.png" alt="执行不同环境下的脚本，看jenkins安装在哪个系统"></p>
<h1 id="linux环境下部署记录" tabindex="-1"><a class="header-anchor" href="#linux环境下部署记录" aria-hidden="true">#</a> linux环境下部署记录</h1>
<p>linux下ubuntu利用docker-compose部署jenkins</p>
<h2 id="_1-jenkins部署到指定服务器docker" tabindex="-1"><a class="header-anchor" href="#_1-jenkins部署到指定服务器docker" aria-hidden="true">#</a> 1.jenkins部署到指定服务器docker</h2>
<p>这里第一步</p>
<h3 id="_1-docker-compose构建jenkins环境" tabindex="-1"><a class="header-anchor" href="#_1-docker-compose构建jenkins环境" aria-hidden="true">#</a> （1）Docker-compose构建jenkins环境</h3>
<p>1、创建docker在主机的jenkins数据映射目录
mkdir -p /data/jenkins_home
chown -R 777 /data/jenkins_home</p>
<h3 id="_2-docker-compose安装-创建一个docker-jenkins-compose-yml" tabindex="-1"><a class="header-anchor" href="#_2-docker-compose安装-创建一个docker-jenkins-compose-yml" aria-hidden="true">#</a> （2）docker-compose安装，创建一个docker-jenkins-compose.yml</h3>
<p>将当前的8080项目映射到6008端口上，部署成功访问：localhost:6008
version: '3.1'
services:
jenkins:
image: jenkinsci/blueocean
volumes:
- /data/jenkins_home:/var/jenkins_home
- /var/run/docker.sock:/var/run/docker.sock
- /usr/bin/docker:/usr/bin/docker
ports:
- &quot;6008:8080&quot;
expose:
- &quot;8080&quot;
- &quot;50000&quot;
privileged: true
user: root
restart: always
container_name: jenkins
environment:
JAVA_OPTS: '-Djava.util.logging.config.file=/var/jenkins_home/log.properties'</p>
<h3 id="_3-jenkins容器启动" tabindex="-1"><a class="header-anchor" href="#_3-jenkins容器启动" aria-hidden="true">#</a> （3）jenkins容器启动</h3>
<p>docker-compose -f docker-jenkins-compose.yml up -d
映射一下当前的安装位置密码：/data/jenkins_home下的data/secrets/initialAdminPassword</p>
<p>默认账号admin
密码：1eeeb71383c645d782bee5dfd44fc023
linux下的unbutu的端口是6008，账号admin,密码长串</p>
<h3 id="_4-成功后-访问localhost-6008" tabindex="-1"><a class="header-anchor" href="#_4-成功后-访问localhost-6008" aria-hidden="true">#</a> （4）成功后，访问localhost:6008</h3>
<h3 id="_5-配置相关的内容后" tabindex="-1"><a class="header-anchor" href="#_5-配置相关的内容后" aria-hidden="true">#</a> （5）配置相关的内容后，</h3>
<p>安装两个内容NodeJS和ssh</p>
<h3 id="_5-补充" tabindex="-1"><a class="header-anchor" href="#_5-补充" aria-hidden="true">#</a> (5)补充</h3>
<p>linux环境下，ssh载root下.ssh文件夹，直接看ls看不到</p>
<h3 id="_6-windows下的ubuntu的安装方式" tabindex="-1"><a class="header-anchor" href="#_6-windows下的ubuntu的安装方式" aria-hidden="true">#</a> (6)windows下的ubuntu的安装方式</h3>
<p>在 WSL 2 上设置 Node.js</p>
<h3 id="linux下的node环境和n包管理" tabindex="-1"><a class="header-anchor" href="#linux下的node环境和n包管理" aria-hidden="true">#</a> linux下的node环境和n包管理</h3>
<p>安装node版本后，然后</p>
<p>apt node
安装一个n包管理工具
n xxx安装某一个版本的node
n ls列出安装的node
n直接切换唤出下面的命令
输出</p>
<p>latest: current
ls: list
lsr: ls-remote
lts: stable
rm: -
run: use, as
which: bin</p>
<h2 id="配置node和npm的软连接" tabindex="-1"><a class="header-anchor" href="#配置node和npm的软连接" aria-hidden="true">#</a> 配置node和npm的软连接</h2>
<p>配置node
ln -s /usr/local/n/versions/node/14.16.0/bin/npm /usr/local/bin/node
配置npm
ln -s /usr/local/n/versions/node/14.16.0/bin/npm /usr/local/bin/npm
重新更新之前的软连接配置重新设置
配置node
ln -sf /usr/local/n/versions/node/14.16.0/bin/npm /usr/local/bin/node
配置npm
ln -sf /usr/local/n/versions/node/14.16.0/bin/npm /usr/local/bin/npm
新设置后，如果出现node可以，npm不可以</p>
<p>node -v可以，npm报错。
那么第一步：获取当前的node安装目录
如果获取到的路径是 /usr/local/bin/node，说明之前安装的node使用了软链，需要找到当前node的安装目录，
例如/usr/local/n/versions/node。
第二步，将node环境配置文件打开，配置一下vim ~/.bash_profile
export N_PREFIX=/usr/local/n/versions/node #当前node的安装目录
export PATH=$N_PREFIX/bin:$PATH
第三步，点击source ~/.bash_profile生效配置再次尝试</p>
<h2 id="快速切换和修改linux下的jenkins版本" tabindex="-1"><a class="header-anchor" href="#快速切换和修改linux下的jenkins版本" aria-hidden="true">#</a> 快速切换和修改linux下的jenkins版本</h2>
<p>cd $JENKINS_HOME
进入当前的jenkins安装目录，ls -a</p>
<h2 id="_8-jenkins中部署源码管理方式" tabindex="-1"><a class="header-anchor" href="#_8-jenkins中部署源码管理方式" aria-hidden="true">#</a> 8.jenkins中部署源码管理方式</h2>
<p>如何设置不同分支和代码
安装ssh插件后，这里两处注意：比如ssh网站的地址，第二个构建的分支名称：about-rc分支
如下图
jenkinsAddr
<a href="./jenkinsAddr.png">引用图jenkinsAddr</a></p>
</div></template>
