<template><div><h1 id="一文手把手教你搭建-git-私服" tabindex="-1"><a class="header-anchor" href="#一文手把手教你搭建-git-私服" aria-hidden="true">#</a> 一文手把手教你搭建 Git 私服</h1>
<p>【本文来自代码随想录，根据个人的使用和搭建过程，进行了删减和优化而已，部署本人的】</p>
<h2 id="为什么要搭建-git-私服" tabindex="-1"><a class="header-anchor" href="#为什么要搭建-git-私服" aria-hidden="true">#</a> 为什么要搭建 Git 私服</h2>
<p>很多同学都问文章，文档，资料怎么备份啊，自己电脑和公司电脑怎么随时同步资料啊等等，这里呢我写一个搭建自己的 git 私服的详细教程</p>
<p>为什么要搭建一个 Git 私服呢，而不是用 Github 免费的私有仓库，有以下几点：</p>
<ul>
<li>Github 私有仓库真的慢，文件一旦多了，或者有图片文件，git pull 的时候半天拉不下来</li>
<li>自己的文档难免有自己个人信息，放在 github 心里也是担心的</li>
<li>想建几个库就建几个，想几个人合作开发都可以，不香么?</li>
</ul>
<p><strong>网上可以搜到很多 git 搭建，但是说的模棱两可</strong>，而且有的直接是在本地搭建 git 服务，既然是备份，搭建在本地哪有备份的意义，一定要有一个远端服务器， 而且自己的电脑和公司的电脑还是同步自己的文章，文档和资料等等。</p>
<p>适合人群： 想通过 git 私服来备份自己的文章，Markdown，并做版本管理的同学
最后，写好每篇 Chat 是对我的责任，也是对你的尊重。谢谢大家~</p>
<p>正文如下：</p>
<hr>
<h2 id="如何找到可以外网访问服务器" tabindex="-1"><a class="header-anchor" href="#如何找到可以外网访问服务器" aria-hidden="true">#</a> 如何找到可以外网访问服务器</h2>
<p>有的同学问了，自己的电脑就不能作为服务器么？</p>
<p>这里要说一下，安装家庭带宽，运营商默认是不会给我们独立分配公网 IP 的</p>
<p>一般情况下是一片区域公用一个公网 IP 池，所以外网是不能访问到在家里我们使用的电脑的</p>
<p>除非我们自己去做映射，这其实非常麻烦而且公网 IP 池 是不断变化的</p>
<p>辛辛苦苦做了映射，运营商给 IP 一换，我们的努力就白扯了</p>
<p>那我们如何才能找到一个外网可以访问的服务器呢，此时云计算拯救了我们。</p>
<p>推荐大家选一家云厂商（阿里云，腾讯云，百度云都可以）在上面上买一台云服务器</p>
<ul>
<li><a href="https://www.aliyun.com/minisite/goods?taskCode=shareNew2205&amp;recordId=3641992&amp;userCode=roof0wob" target="_blank" rel="noopener noreferrer">阿里云活动期间服务器购买<ExternalLinkIcon/></a></li>
<li><a href="https://curl.qcloud.com/EiaMXllu" target="_blank" rel="noopener noreferrer">腾讯云活动期间服务器购买<ExternalLinkIcon/></a></li>
</ul>
<p>云厂商经常做活动，如果从来没有买过云服务器的账号更便宜，低配一年一百块左右的样子，强烈推荐一起买个三年。</p>
<p>买云服务器的时候推荐直接安装 centos 系统。</p>
<p>这里要说一下，有了自己的云服务器之后 不仅仅可以用来做 git 私服</p>
<p><strong>同时还可以做网站，做程序后台，跑程序，做测试</strong>（这样我们自己的电脑就不会因为自己各种搭建环境下载各种包而搞的的烂糟糟），等等等。</p>
<p>有自己云服务器和一个公网 IP 真的是一件非常非常幸福的事情，能体验到自己的服务随时可以部署上去提供给所有人使用的喜悦。</p>
<p>外网可以访问的服务器解决了，接下来就要部署 git 服务了</p>
<p>本文将采用 centos 系统来部署 git 私服</p>
<h2 id="服务器端安装-git" tabindex="-1"><a class="header-anchor" href="#服务器端安装-git" aria-hidden="true">#</a> 服务器端安装 Git</h2>
<p>切换至 root 账户</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>su root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>看一下服务器有没有安装 git，如果出现下面信息就说明是有 git 的</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@instance-5fcyjde7 ~]# git
usage: git [--version] [--help] [-c name=value]
           [--exec-path[=&lt;path>]] [--html-path] [--man-path] [--info-path]
           [-p|--paginate|--no-pager] [--no-replace-objects] [--bare]
           [--git-dir=&lt;path>] [--work-tree=&lt;path>] [--namespace=&lt;name>]
           &lt;command> [&lt;args>]

The most commonly used git commands are:
   add        Add file contents to the index
   bisect     Find by binary search the change that introduced a bug
   branch     List, create, or delete branches
   checkout   Checkout a branch or paths to the working tree
   clone      Clone a repository into a new directory
   commit     Record changes to the repository
   diff       Show changes between commits, commit and working tree, etc
   fetch      Download objects and refs from another repository
   grep       Print lines matching a pattern
   init       Create an empty Git repository or reinitialize an existing one
   log        Show commit logs
   merge      Join two or more development histories together
   mv         Move or rename a file, a directory, or a symlink
   pull       Fetch from and merge with another repository or a local branch
   push       Update remote refs along with associated objects
   rebase     Forward-port local commits to the updated upstream head
   reset      Reset current HEAD to the specified state
   rm         Remove files from the working tree and from the index
   show       Show various types of objects
   status     Show the working tree status
   tag        Create, list, delete or verify a tag object signed with GPG

'git help -a' and 'git help -g' lists available subcommands and some
concept guides. See 'git help &lt;command>' or 'git help &lt;concept>'
to read about a specific subcommand or concept.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有 git，就安装一下，yum 安装的版本默认是 <code v-pre>1.8.3.1</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum install git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装成功之后，看一下自己安装的版本</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="服务器端设置-git-账户" tabindex="-1"><a class="header-anchor" href="#服务器端设置-git-账户" aria-hidden="true">#</a> 服务器端设置 Git 账户</h2>
<p>创建一个 git 的 linux 账户，这个账户只做 git 私服的操作，也是为了安全起见</p>
<p>如果不新创建一个 linux 账户，在自己的常用的 linux 账户下创建的话，哪天手抖 来一个<code v-pre>rm -rf *</code> 操作 数据可全没了</p>
<p><strong>这里 linux git 账户的密码设置的尽量复杂一些，我这里为了演示，就设置成为'gitpassword'</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>adduser git
passwd gitpassword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就要切换成 git 账户，进行后面的操作了</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@instance-5fcyjde7 ~]# su - git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>看一下自己所在的目录，是不是在 git 目录下面</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[git@instance-5fcyjde7 ~]$ pwd
/home/git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务器端密钥管理" tabindex="-1"><a class="header-anchor" href="#服务器端密钥管理" aria-hidden="true">#</a> 服务器端密钥管理</h2>
<p>创建<code v-pre>.ssh</code> 目录，如果<code v-pre>.ssh</code> 已经存在了，可以忽略这一项</p>
<p>为啥用配置 ssh 公钥呢，同学们记不记得我急使用 github 上传上传代码的时候也要把自己的公钥配置上 github 上</p>
<p>这也是方面每次操作 git 仓库的时候不用再去输入密码</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd ~/
mkdir .ssh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>进入.ssh 文件下，创建一个 <code v-pre>authorized_keys</code> 文件，这个文件就是后面就是要放我们客户端的公钥</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd ~/.ssh
touch authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>别忘了<code v-pre>authorized_keys</code>给设置权限，很多同学发现自己不能免密登陆，都是因为忘记了给<code v-pre>authorized_keys</code> 设置权限</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>chmod 700 /home/git/.ssh
chmod 600 /home/git/.ssh/authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们要把客户端的公钥放在 git 服务器上，我们在回到客户端，创建一个公钥</p>
<p>在我们自己的电脑上，有公钥和私钥 两个文件分别是：<code v-pre>id_rsa</code> 和 <code v-pre>id_rsa.pub</code></p>
<p>如果是<code v-pre>windows</code>系统公钥私钥的目录在<code v-pre>C:\Users\用户名\.ssh</code> 下</p>
<p>如果是 mac 或者 linux， 公钥和私钥的目录这里 <code v-pre>cd ~/.ssh/</code>， 如果发现自己的电脑上没有公钥私钥，那就自己创建一个</p>
<p>创建密钥的命令</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ssh-keygen -t rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建密钥的过程中，一路点击回车就可以了。不需要填任何东西</p>
<p>把公钥拷贝到 git 服务器上，将我们刚刚生成的<code v-pre>id_rsa.pub</code>，拷贝到 git 服务器的<code v-pre>/home/git/.ssh/</code>目录</p>
<p>在 git 服务器上，将公钥添加到<code v-pre>authorized_keys</code> 文件中</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd /home/git/.ssh/
cat id_rsa.pub >> authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如何看我们配置的密钥是否成功呢， 在客户点直接登录 git 服务器，看看是否是免密登陆</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ssh git@git服务器ip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ssh git@127.0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果可以免密登录，那就说明服务器端密钥配置成功了</p>
<h2 id="服务器端部署-git-仓库" tabindex="-1"><a class="header-anchor" href="#服务器端部署-git-仓库" aria-hidden="true">#</a> 服务器端部署 Git 仓库</h2>
<p>我们在登陆到 git 服务器端，切换为成 git 账户</p>
<p>如果是 root 账户切换成 git 账户</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>su - git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果是其他账户切换为 git 账户</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sudo su - git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入 git 目录下</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd ~/git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建我们的第一个 Git 私服的仓库，我们叫它为 world 仓库</p>
<p>那么首先创建一个文件夹名为： world.git ,然后进入这个目录</p>
<p>有同学问，为什么文件夹名字后面要放<code v-pre>.git</code>， 其实不这样命名也是可以的</p>
<p>但是细心的同学可能注意到，我们平时在 github 上 <code v-pre>git clone</code> 其他人的仓库的时候，仓库名字后面，都是加上<code v-pre>.git</code>的</p>
<p>例如下面这个例子，其实就是 github 对仓库名称的一个命名规则，所以我们也遵守 github 的命名规则。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git clone https://github.com/youngyangyang04/NoSQLAttack.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所以我们的操作是</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[git@localhost git]# mkdir world.git
[git@localhost git]# cd world.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化我们的<code v-pre>world</code>仓库</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git init --bare

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如果我们想创建多个仓库，就在这里创建多个文件夹并初始化就可以了，和 world 仓库的操作过程是一样一样的</strong></p>
<p>现在我们服务端的 git 仓库就部署完了，接下来就看看客户端，如何使用这个仓库呢</p>
<h2 id="客户端连接远程仓库" tabindex="-1"><a class="header-anchor" href="#客户端连接远程仓库" aria-hidden="true">#</a> 客户端连接远程仓库</h2>
<p>我们在自己的电脑上创建一个文件夹 也叫做<code v-pre>world</code>吧</p>
<p>其实这里命名是随意的，但是我们为了和 git 服务端的仓库名称保持同步。 这样更直观我们操作的是哪一个仓库。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir world
cd world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>进入 world 文件，并初始化操作</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd world
git init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 world 目录上创建一个测试文件，并且将其添加到 git 版本管理中</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>touch test
git add test
git commit -m "add test file"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将次仓库和远端仓库同步</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git remote add origin git@git服务器端的ip:world.git
git push -u origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时这个 test 测试文件就已经提交到我们的 git 远端私服上了</p>
<h2 id="git-私服安全问题" tabindex="-1"><a class="header-anchor" href="#git-私服安全问题" aria-hidden="true">#</a> Git 私服安全问题</h2>
<p>这里有两点安全问题</p>
<h3 id="linux-git-的密码不要泄露出去" tabindex="-1"><a class="header-anchor" href="#linux-git-的密码不要泄露出去" aria-hidden="true">#</a> linux git 的密码不要泄露出去</h3>
<p>否则，别人可以通过 ssh git@git 服务器 IP 来登陆到你的 git 私服服务器上</p>
<p>当然了，这里同学们如果买的是云厂商的云服务器的话</p>
<p>如果有人恶意想通过 尝试不同密码链接的方式来链接你的服务器，重试三次以上</p>
<p>这个客户端的 IP 就会被封掉，同时邮件通知我们可以 IP 来自哪里</p>
<p>所以大可放心 密码只要我们不泄露出去，基本上不会有人同时不断尝试密码的方式来登上我们的 git 私服服务器</p>
<h3 id="私钥文件id-rsa-不要给别人" tabindex="-1"><a class="header-anchor" href="#私钥文件id-rsa-不要给别人" aria-hidden="true">#</a> 私钥文件<code v-pre>id_rsa</code> 不要给别人</h3>
<p>如果有人得到了这个私钥，就可以免密码登陆我们的 git 私服上了，我相信大家也不至于把自己的私钥主动给别人吧</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>这里就是整个 git 私服搭建的全过程，安全问题我也给大家列举了出来，接下来好好享受自己的 Git 私服吧</p>
<p><strong>enjoy!</strong></p>
</div></template>
