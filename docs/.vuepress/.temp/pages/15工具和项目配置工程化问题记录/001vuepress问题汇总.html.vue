<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_000-出现问题-typeerror-invalid-value-used-as-weak-map-key">（000）出现问题：TypeError: Invalid value used as weak map key</RouterLink></li><li><RouterLink to="#_001-vuepress-功能引入插件功能说明">(001)vuepress 功能引入插件功能说明</RouterLink></li><li><RouterLink to="#_002-vuepress-中全局钩子和-ui-组件">（002）vuepress 中全局钩子和 UI 组件</RouterLink></li><li><RouterLink to="#_003-vuepress-中引入相对和绝对地址图片">（003）vuepress 中引入相对和绝对地址图片</RouterLink></li><li><RouterLink to="#_004-静态资源部署到某一个文件夹下-如何保证相对地址没有问题">(004)静态资源部署到某一个文件夹下，如何保证相对地址没有问题</RouterLink></li><li><RouterLink to="#_005-使用-github-pages-建立博客">（005）使用 GitHub Pages 建立博客</RouterLink></li><li><RouterLink to="#_1-vuepress1-x-配置项目参考">(1)vuepress1.x 配置项目参考</RouterLink></li><li><RouterLink to="#_2-vuepress2-x-目前需要的配置">（2）vuepress2.x 目前需要的配置</RouterLink><ul><li><RouterLink to="#vuepress2-系统化配置使用">vuepress2 系统化配置使用</RouterLink></li><li><RouterLink to="#vuepress2-x-中-head-增加-ico-标签图">vuepress2.x 中 head 增加 ico 标签图</RouterLink></li><li><RouterLink to="#vuepress2-x-配置如何清除-md-下面的更新记录内容">vuepress2.x 配置如何清除 md 下面的更新记录内容</RouterLink></li></ul></li><li><RouterLink to="#vuepress-打包后的部署-linux-问题。">vuepress 打包后的部署 linux 问题。</RouterLink></li><li><RouterLink to="#_3-跳转内部-markdown-锚点位置和其他-md-文件的锚点位置">3.跳转内部 markdown 锚点位置和其他 md 文件的锚点位置</RouterLink><ul><li><RouterLink to="#跳转内部-markdown-锚点位置">跳转内部 markdown 锚点位置</RouterLink></li><li><RouterLink to="#跳转其他文件位置">跳转其他文件位置</RouterLink></li></ul></li><li><RouterLink to="#_4-配置入口和出口配置内容-vuepress">4.配置入口和出口配置内容 vuepress</RouterLink><ul><li><RouterLink to="#所有的锚点在dev环境下正常">所有的锚点在dev环境下正常，</RouterLink></li></ul></li><li><RouterLink to="#_5-vuepress样式修改">5.vuepress样式修改</RouterLink><ul><li><RouterLink to="#vuepress1-x修改样式">vuepress1.x修改样式</RouterLink></li><li><RouterLink to="#vuepress2-x方案">vuepress2.x方案</RouterLink></li></ul></li></ul></nav>
<h3 id="_000-出现问题-typeerror-invalid-value-used-as-weak-map-key" tabindex="-1"><a class="header-anchor" href="#_000-出现问题-typeerror-invalid-value-used-as-weak-map-key" aria-hidden="true">#</a> （000）出现问题：TypeError: Invalid value used as weak map key</h3>
<p>一般是 md 文件中有没有识别的闭合标签。比如强行将 elementplus 组件用在 md 中没有特殊处理。</p>
<h3 id="_001-vuepress-功能引入插件功能说明" tabindex="-1"><a class="header-anchor" href="#_001-vuepress-功能引入插件功能说明" aria-hidden="true">#</a> (001)vuepress 功能引入插件功能说明</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>- 引入回到顶部
yarn add -D @vuepress/plugin-back-to-top@next

- 给markdown增加图标
yarn add -D @vuepress/plugin-external-link-icon@next

- 增加进度条
yarn add  -D @vuepress/plugin-nprogress@next

- 提供toc功能
yarn add -D @vuepress/plugin-toc@next

- 点击图片提供伸缩功能
yarn add -D @vuepress/plugin-medium-zoom@next

- 引入elementplus
clientAppEnhance.ts

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_002-vuepress-中全局钩子和-ui-组件" tabindex="-1"><a class="header-anchor" href="#_002-vuepress-中全局钩子和-ui-组件" aria-hidden="true">#</a> （002）vuepress 中全局钩子和 UI 组件</h3>
<ul>
<li>client.ts 增加全局钩子和全局 UI 组件
rootComponents 是一个组件数组，它们将会直接被放置在客户端 Vue 应用的根节点下。</li>
</ul>
<p><a href="https://v2.vuepress.vuejs.org/zh/advanced/cookbook" target="_blank" rel="noopener noreferrer">全局钩子和 UI<ExternalLinkIcon/></a></p>
<ul>
<li>vuepress 中引入绝对路径和相关路径</li>
</ul>
<!-- 绝对路径 -->
<h3 id="_003-vuepress-中引入相对和绝对地址图片" tabindex="-1"><a class="header-anchor" href="#_003-vuepress-中引入相对和绝对地址图片" aria-hidden="true">#</a> （003）vuepress 中引入相对和绝对地址图片</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
[指南](/zh/guide/README.md)
&lt;!-- 相对路径 -->
![成长](/images/home.png)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_004-静态资源部署到某一个文件夹下-如何保证相对地址没有问题" tabindex="-1"><a class="header-anchor" href="#_004-静态资源部署到某一个文件夹下-如何保证相对地址没有问题" aria-hidden="true">#</a> (004)静态资源部署到某一个文件夹下，如何保证相对地址没有问题</h3>
<p>部署资源放在某一个文件夹下面如何 vuepress 配置</p>
<p>Base Helper</p>
<p>如果你的网站部署在非根路径下，即 <a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#base" target="_blank" rel="noopener noreferrer">base<ExternalLinkIcon/></a> 不是 <code v-pre>&quot;/&quot;</code> ，你需要把 <code v-pre>base</code> 添加到 Public 文件的绝对路径前。</p>
<p>举例来说，如果你想要把网站部署到 <code v-pre>https://foo.github.io/bar/</code> ，那么应该把 <code v-pre>base</code> 设置为 <code v-pre>&quot;/bar/&quot;</code> ，此时你必须在 Markdown 文件中这样引用 Public 文件：</p>
<h3 id="_005-使用-github-pages-建立博客" tabindex="-1"><a class="header-anchor" href="#_005-使用-github-pages-建立博客" aria-hidden="true">#</a> （005）使用 GitHub Pages 建立博客</h3>
<p>与 GitHub 建立好链接之后，就可以方便的使用它提供的 Pages 服务，</p>
<p>GitHub Pages 分两种，</p>
<h4 id="一种是你的-github-用户名建立的username-github-io这样的用户-组织页-站" tabindex="-1"><a class="header-anchor" href="#一种是你的-github-用户名建立的username-github-io这样的用户-组织页-站" aria-hidden="true">#</a> 一种是你的 GitHub 用户名建立的<code v-pre>username.github.io</code>这样的用户&amp;组织页（站）</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>创建好username.github.io项目之后，提交一个index.html文件，然后push到GitHub的master分支（也就是普通意义上的主干）。第一次页面生效需要一些时间，大概10分钟左右。

生效之后，访问username.github.io就可以看到你上传的页面了，beiyuu.github.io就是一个例子。

https://nyhxiaoning.github.io/
https://nyhxiaoning.github.io/dist/
支持多级地址查询
但是，其实很简单，打包之后，将文件夹设置dist放入根目录，然后设置vuepress2中的base地址，这样所有的文件相对位置都可以设置正常。
访问：https://nyhxiaoning.github.io/dist/   注意设置base:/dist/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="一种是依附项目的-pages。" tabindex="-1"><a class="header-anchor" href="#一种是依附项目的-pages。" aria-hidden="true">#</a> 一种是依附项目的 pages。</h4>
<p>CNAME 设置成功后，DNS 生效需要一天左右。</p>
<p>将独立域名与 GitHub Pages 的空间绑定
GitHub Pages 的设置
去到你的 blog.io 仓库，点击 CNAME,再点击右下角的铅笔编辑，将 cnfeat.com 改成你的域名。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>补充学习：
A (Address) 记录是用来指定[主机](https://baike.baidu.com/item/主机)名（或[域名](https://baike.baidu.com/item/域名/86062)）对应的[IP地址](https://baike.baidu.com/item/IP地址)记录。
用户可以将该域名下的[网站服务器](https://baike.baidu.com/item/网站服务器/8156379)指向到自己的网页服务器(web server)上。同时也可以设置域名的[子域名](https://baike.baidu.com/item/子域名/10937658)。



腾讯云如何设置A记录
[设置 A 记录 - DNSPod 服务与支持](https://docs.dnspod.cn/dns/help-a/)
@对应的A记录是IP地址：34.102.136.180
[www.nyhdadaning.xyz](http://www.nyhdadaning.xyz/)
eighth.dnspod.net
angelo.dnspod.net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-vuepress1-x-配置项目参考" tabindex="-1"><a class="header-anchor" href="#_1-vuepress1-x-配置项目参考" aria-hidden="true">#</a> (1)vuepress1.x 配置项目参考</h2>
<h2 id="_2-vuepress2-x-目前需要的配置" tabindex="-1"><a class="header-anchor" href="#_2-vuepress2-x-目前需要的配置" aria-hidden="true">#</a> （2）vuepress2.x 目前需要的配置</h2>
<h3 id="vuepress2-系统化配置使用" tabindex="-1"><a class="header-anchor" href="#vuepress2-系统化配置使用" aria-hidden="true">#</a> vuepress2 系统化配置使用</h3>
<ul>
<li>搜索功能和 vuepress 目前必须配置一致。</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    "@vuepress/plugin-nprogress": "^2.0.0-beta.46",
    "@vuepress/plugin-search": "2.0.0-beta.50",
    "@vuepress/plugin-toc": "^2.0.0-beta.46",
    "cz-git": "^1.3.3",
    "vuepress": "2.0.0-beta.50"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vuepress2-x-中-head-增加-ico-标签图" tabindex="-1"><a class="header-anchor" href="#vuepress2-x-中-head-增加-ico-标签图" aria-hidden="true">#</a> vuepress2.x 中 head 增加 ico 标签图</h3>
<p>支持两种方式：</p>
<ul>
<li>url 地址使用在线 url</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  head: [
    ['link', { rel: 'icon', href: 'https://vuejs.org/images/logo.png' }]
  ],

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用本地的图片，注意这里的图片使用 dist 打包后的地址
一般这里/images/home.png,但是 head 特殊</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  head: [
    //
    ['link', { rel: 'icon', href: '/dist/images/home.png' }]

  ],

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vuepress2-x-配置如何清除-md-下面的更新记录内容" tabindex="-1"><a class="header-anchor" href="#vuepress2-x-配置如何清除-md-下面的更新记录内容" aria-hidden="true">#</a> vuepress2.x 配置如何清除 md 下面的更新记录内容</h3>
<p>Contributors: daning, nyhxiaoning, ningyongheng</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>删除相关的内容：不展示创建事件，贡献者

import { gitPlugin } from '@vuepress/plugin-git'
插件部分引入下面内容
    gitPlugin({
      createdTime: false,
      contributors: false,
      updatedTime: false
    })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuepress-打包后的部署-linux-问题。" tabindex="-1"><a class="header-anchor" href="#vuepress-打包后的部署-linux-问题。" aria-hidden="true">#</a> vuepress 打包后的部署 linux 问题。</h2>
<p>我们打包完成后，直接放入 github 上面部署，这里资源默认会被 github 解析。
但是如果放在我们自己的服务器解析，那么注意将这里的资源进行整理：
注意：nginx 配置的时候，这里的相对路径，所以将 index.html 和引用的资源放入父子级别关系</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>--index.html二级目录index.html
---js/xxxx.js三级目录js文件夹
---css/xxx.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-跳转内部-markdown-锚点位置和其他-md-文件的锚点位置" tabindex="-1"><a class="header-anchor" href="#_3-跳转内部-markdown-锚点位置和其他-md-文件的锚点位置" aria-hidden="true">#</a> 3.跳转内部 markdown 锚点位置和其他 md 文件的锚点位置</h2>
<h3 id="跳转内部-markdown-锚点位置" tabindex="-1"><a class="header-anchor" href="#跳转内部-markdown-锚点位置" aria-hidden="true">#</a> 跳转内部 markdown 锚点位置</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>markdown拓展中，默认所有的标题（无论是几级标题都可以），都会自动编程anchor链接。

所以内部的跳转，只要用#加上当前的标题头名称即可，这里注意标题头不可以有空格。
比如在当前的文件中跳转，当前的文件first,那么有一个标题是：测试跳转到这里，那么如下写即可

----------注意下面说明
[跳到first文件的文件夹的头部位置](./first/#测试跳转到这里)
但是这样只能保证跳转到那一个文件，然后，最后做一下不会定位到相对的位置上，这里需要配置一下

注意编译之后，案例跳转地址说明
md中写法

案例修改方法
跳转：
#### 8.5我要跳到这里
如果之类要跳转，那么这里修改为
_8-5我要跳到这里

[_8-5我要跳到这里](./third.md/#_8-5我要跳到这里)


注意：跳转的标题不能有空格。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跳转其他文件位置" tabindex="-1"><a class="header-anchor" href="#跳转其他文件位置" aria-hidden="true">#</a> 跳转其他文件位置</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>--跳转到根目录
[跳到根目录](/)

--跳转到和first.md文件同级别的third中的某一个标题位置
[跳到first之外的third文件的文件夹的头部位置](./third/#3.2声明设备的方法)



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="跨页面跳转-中文跳转和数字跳转区别" tabindex="-1"><a class="header-anchor" href="#跨页面跳转-中文跳转和数字跳转区别" aria-hidden="true">#</a> 跨页面跳转，中文跳转和数字跳转区别</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>中文跳转
# 五、智能农场demo案例解析
对应跳转方案：[跳转内容五、小应用案例解析](./fifth.md/#五、小应用案例解析)

数字跳转
### 1.2.2 物栖小应用开发流程
对应用法跳转的结果：使用[跳转结果是](./first.md/###_1-2-2-物栖小应用开发流程)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="页面内跳转" tabindex="-1"><a class="header-anchor" href="#页面内跳转" aria-hidden="true">#</a> 页面内跳转</h4>
<p>方案1：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;div id="jump">&lt;/div>

[我要跳转到这里](#jump)


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方案2：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>注意vuepress2会默认将内容标题减少一个#，所以跳转页面内的时候
注意一下：比如跳转：## 5.1智能农场demo场景介绍
那么对应页面内
[跳转内容五、小应用案例解析55555](#_5-1智能农场demo场景介绍)

这里明显少了一个#



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-配置入口和出口配置内容-vuepress" tabindex="-1"><a class="header-anchor" href="#_4-配置入口和出口配置内容-vuepress" aria-hidden="true">#</a> 4.配置入口和出口配置内容 vuepress</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>base配置打包的时候相对地址配置，dest配置输出根文件夹目录，如果不配置，默认是.vuepress下的内容


  base: process.argv[2]==='dev'?"/apidist/":"./",//如果是本地dev使用appdist地址，如果是线上，那么使用相对地址./
  dest:"dist",

  base: process.argv[2] === 'dev' ? "/" : "./",//如果是本地dev使用/如果是打包，使用./表示相对地址，可以任意部署，
  dest: "dist",//配置后，默认根目录dist文件夹

对于打包后的地址，看看静态页面是否地址是md或是html，这里需要确认。TODO:这个是大坑

具体原因是为什么


----------跟踪一下，为什么本地npm  run docs:dev没有问题，但是打包build后，这些地址md增加锚点后，不会解析了，原因


TODO:

今天晚上。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="所有的锚点在dev环境下正常" tabindex="-1"><a class="header-anchor" href="#所有的锚点在dev环境下正常" aria-hidden="true">#</a> 所有的锚点在dev环境下正常，</h3>
<p>比如
下面例子:md结束的地方可以正常解析成html，但是如果是</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>## [一、物栖小应用简介](./pages/first.md)
[1.1 物栖小应用简介](./pages/first.html#_1-1-物栖小应用简介)&lt;br>


dev可以但是build环境不允许的情况:dev可以正常解析，但是打包的时候，不会被识别，应该是框架问题：待解决处理
[1.1 物栖小应用简介](./pages/first.md/#_1-1-物栖小应用简介)&lt;br>

一个build环境的解决方案：这里利用
[1.1 物栖小应用简介](./pages/first.html#_1-1-物栖小应用简介)&lt;br>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-vuepress样式修改" tabindex="-1"><a class="header-anchor" href="#_5-vuepress样式修改" aria-hidden="true">#</a> 5.vuepress样式修改</h2>
<p>默认修改原html标签样式汇总</p>
<h3 id="vuepress1-x修改样式" tabindex="-1"><a class="header-anchor" href="#vuepress1-x修改样式" aria-hidden="true">#</a> vuepress1.x修改样式</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1、.vuepress 文件夹下创建 styles/palette.styl （这里使用 stylus）
2、重置取消 max-width 设置，classname 直接从 开发者工具 中复制 即可


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vuepress2-x方案" tabindex="-1"><a class="header-anchor" href="#vuepress2-x方案" aria-hidden="true">#</a> vuepress2.x方案</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>- 使用插件
调色板系统提取到了 @vuepress/plugin-palette 当中。


- 调色板和样式
该插件会提供一个 @vuepress/plugin-palette/palette （调色板文件）和一个 @vuepress/plugin-palette/style （样式文件），
用于在你的主题样式中引入。



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
