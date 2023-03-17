<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_1-项目部署的奇怪问题-zip包乱码-window系统自带压缩和mac冲突">1.项目部署的奇怪问题，zip包乱码(window系统自带压缩和mac冲突)</RouterLink></li><li><RouterLink to="#部署结果汇总">部署结果汇总</RouterLink><ul><li><RouterLink to="#_001简单手动部署">001简单手动部署</RouterLink></li><li><RouterLink to="#_002简单命令部署">002简单命令部署</RouterLink></li><li><RouterLink to="#_002使用githubaction部署">002使用githubAction部署</RouterLink></li><li><RouterLink to="#_003脚本增加sh部署">003脚本增加sh部署</RouterLink></li><li><RouterLink to="#_004jenkins-监听git-push自动部署实现流程。">004jenkins,监听git push自动部署实现流程。</RouterLink></li><li><RouterLink to="#_005超级简单的命令vercel">005超级简单的命令Vercel</RouterLink></li><li><RouterLink to="#_006部署网站在nginx配置域名-server-name">006部署网站在nginx配置域名:server_name</RouterLink></li><li><RouterLink to="#注意这里的配置本地域名-需要再阿里云买服务">注意这里的配置本地域名，需要再阿里云买服务</RouterLink></li><li><RouterLink to="#配置服务如果想要外网-需要配置到公网-这里有两种方法">配置服务如果想要外网，需要配置到公网，这里有两种方法</RouterLink></li></ul></li></ul></nav>
<h2 id="_1-项目部署的奇怪问题-zip包乱码-window系统自带压缩和mac冲突" tabindex="-1"><a class="header-anchor" href="#_1-项目部署的奇怪问题-zip包乱码-window系统自带压缩和mac冲突" aria-hidden="true">#</a> 1.项目部署的奇怪问题，zip包乱码(window系统自带压缩和mac冲突)</h2>
<p>windows系统有一个默认zip压缩包的命令，压缩后，mac系统部署，会乱码。</p>
<p>所以这里有一个坑，就是如果是不同系统之间的压缩和部署，使用第三方软件，window自带有坑。</p>
<h2 id="部署结果汇总" tabindex="-1"><a class="header-anchor" href="#部署结果汇总" aria-hidden="true">#</a> 部署结果汇总</h2>
<h3 id="_001简单手动部署" tabindex="-1"><a class="header-anchor" href="#_001简单手动部署" aria-hidden="true">#</a> 001简单手动部署</h3>
<p>手动打包后，将文件夹提交到远程代码服务器</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package.json脚本中使用scp命令推送：本地dist/*所有推动到linux服务器
 "push": "vue-cli-service build --mode mas &amp;&amp; scp -r dist/* root@xxx.3mzz.cn:/home/dockerservice/nginx/html/art_production"


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_002简单命令部署" tabindex="-1"><a class="header-anchor" href="#_002简单命令部署" aria-hidden="true">#</a> 002简单命令部署</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>说白了，存放一个github网站目录位置，做一个相对文件夹的定位
    "buildDoc": "npm run docs:build  --  --dest=dist",
    
    以后新的文件项目，可以用dist之外的文件夹做存储。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_002使用githubaction部署" tabindex="-1"><a class="header-anchor" href="#_002使用githubaction部署" aria-hidden="true">#</a> 002使用githubAction部署</h3>
<p>自动化部署：需要配置一下当前的Action脚本</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>一直可以正常走流程，但是不会自动部署自动化
暂存，

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_003脚本增加sh部署" tabindex="-1"><a class="header-anchor" href="#_003脚本增加sh部署" aria-hidden="true">#</a> 003脚本增加sh部署</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>每一次提交使用命令npm run deploy
这里内容
# 打包生成静态文件
npm run build

# 进入打包好的文件夹
cd build
会将当前的build下的目录内容全部上传

如果没有cd build这一步，会默认根据文件夹.gitignore进行文件全部上传


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_004jenkins-监听git-push自动部署实现流程。" tabindex="-1"><a class="header-anchor" href="#_004jenkins-监听git-push自动部署实现流程。" aria-hidden="true">#</a> 004jenkins,监听git push自动部署实现流程。</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>配置好giteeAPI令牌后，
配置下载代码总是报错。

重新安装jenkins后，安装gitee插件再次尝试解决了。


jenkins配置代码系统CICD的两处
Gitee插件安装。

配置两个全局凭证：
- ssh凭证
- 代码额GiteeAPI权限

问题注意：jenins配置私钥ssh的格式和直接生成不一样。

配置一个项目的时候，Poll SCM触发器作用
- 点击日程表的？后有案例：H/15 * * * *我们选择一个触发后15分钟内执行




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_005超级简单的命令vercel" tabindex="-1"><a class="header-anchor" href="#_005超级简单的命令vercel" aria-hidden="true">#</a> 005超级简单的命令Vercel</h3>
<p>部署创建一个新的项目</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
前往 Vercel ，从 GitHub 创建一个新项目，并进行如下配置：

FRAMEWORK PRESET: Other
BUILD COMMAND: yarn docs:build
OUTPUT DIRECTORY: docs/.vuepress/dist

只需要指定三个地方，然后和github项目绑定后，自动部署生成一个网站域名。



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_006部署网站在nginx配置域名-server-name" tabindex="-1"><a class="header-anchor" href="#_006部署网站在nginx配置域名-server-name" aria-hidden="true">#</a> 006部署网站在nginx配置域名:server_name</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server {
    listen 80;
    server_name jeejioexplore.devjeejio.com;
    root /opt/www/h5-explore/dist; 注意如果这里设置成这样，打包的时候输出文件夹为dist,然后地址配置./这样
    
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意这里的配置本地域名-需要再阿里云买服务" tabindex="-1"><a class="header-anchor" href="#注意这里的配置本地域名-需要再阿里云买服务" aria-hidden="true">#</a> 注意这里的配置本地域名，需要再阿里云买服务</h3>
<h3 id="配置服务如果想要外网-需要配置到公网-这里有两种方法" tabindex="-1"><a class="header-anchor" href="#配置服务如果想要外网-需要配置到公网-这里有两种方法" aria-hidden="true">#</a> 配置服务如果想要外网，需要配置到公网，这里有两种方法</h3>
<p>一个是ip暴露到公网 或者部署到阿里云外网环境</p>
<p><a href="https://app.yinxiang.com/shard/s37/nl/24388549/a1e13fd8-1458-4139-8f96-5bf204e6d554" target="_blank" rel="noopener noreferrer">内网穿透、将本地服务暴露到外网、三分钟搞定！！！<ExternalLinkIcon/></a></p>
<p><a href="https://juejin.cn/post/7068580607638372365" target="_blank" rel="noopener noreferrer">利用cpolar-内网穿透工具，将内网服务器暴露给公网访问<ExternalLinkIcon/></a></p>
</div></template>
