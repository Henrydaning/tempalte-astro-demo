<template><div><p><img src="/images/home.png" alt="成长"></p>
<nav class="table-of-contents"><ul><li><RouterLink to="#_001回到博客主页">001回到博客主页</RouterLink></li><li><RouterLink to="#_001html标签和小程序的标签的区别">001html标签和小程序的标签的区别</RouterLink></li><li><RouterLink to="#_002uniapp的手机端常用的一些新组建">002uniapp的手机端常用的一些新组建</RouterLink></li><li><RouterLink to="#_003一些高级的比较的内容">003一些高级的比较的内容</RouterLink></li><li><RouterLink to="#_004uniapp文件夹结构内容">004uniapp文件夹结构内容</RouterLink></li><li><RouterLink to="#_005uniapp中对于多平台的配置和检测处理">005uniapp中对于多平台的配置和检测处理</RouterLink></li><li><RouterLink to="#_06初学者可能插件的一些问题">06初学者可能插件的一些问题</RouterLink><ul><li><RouterLink to="#pages-json中的内容配置">pages.json中的内容配置</RouterLink></li><li><RouterLink to="#好用的插件-一键创建页面、组件、分包">好用的插件：一键创建页面、组件、分包</RouterLink></li><li><RouterLink to="#_005页面导航-网络请求-数据缓存">005页面导航，网络请求，数据缓存</RouterLink></li><li><RouterLink to="#custom设置为true-并且把所有需要切换的页面都配置在list中-否则之后切换tab用switchtab方法无效">custom设置为true，并且把所有需要切换的页面都配置在list中，否则之后切换tab用switchTab方法无效</RouterLink></li><li><RouterLink to="#tabbar增加入口文件">tabbar增加入口文件，</RouterLink></li><li><RouterLink to="#_007uniapp中跳转页面的api">007uniapp中跳转页面的API</RouterLink></li></ul></li><li><RouterLink to="#_08布局样式和跨端建通">08布局样式和跨端建通</RouterLink><ul><li><RouterLink to="#_001全局样式和局部样式">001全局样式和局部样式</RouterLink></li><li><RouterLink to="#_002样式的条件编译">002样式的条件编译</RouterLink></li></ul></li><li><RouterLink to="#_08使用iconfont阿里巴巴矢量图库">08使用iconfont阿里巴巴矢量图库</RouterLink></li><li><RouterLink to="#_001常见兼容性问题出现的原因-从环境使用角度">001常见兼容性问题出现的原因:从环境使用角度</RouterLink></li><li><RouterLink to="#常见几个问题">常见几个问题</RouterLink></li><li><RouterLink to="#_04修改全局参数配置">04修改全局参数配置</RouterLink></li><li><RouterLink to="#_06图片存放-全局变量使用">06图片存放，全局变量使用</RouterLink><ul><li><RouterLink to="#使用全局属性的说明">使用全局属性的说明</RouterLink></li></ul></li><li><RouterLink to="#_09开屏广告的实现逻辑">09开屏广告的实现逻辑</RouterLink><ul><li><RouterLink to="#广告内容实现逻辑">广告内容实现逻辑</RouterLink></li><li><RouterLink to="#补充uniapp使用">补充uniapp使用</RouterLink></li></ul></li><li><RouterLink to="#配置uniapp中的路径别名">配置uniapp中的路径别名</RouterLink></li><li><RouterLink to="#应用图片的asset的引入">应用图片的asset的引入</RouterLink></li><li><RouterLink to="#_12解决uniapp的打包apk的方法">12解决uniapp的打包apk的方法</RouterLink></li><li><RouterLink to="#hbuild发布微信小程序">Hbuild发布微信小程序</RouterLink><ul><li><RouterLink to="#申请微信开发者appid">申请微信开发者APPID</RouterLink></li><li><RouterLink to="#选择hbuild中的内容">选择Hbuild中的内容</RouterLink></li></ul></li><li><RouterLink to="#_13docker打包的上下文路径">13docker打包的上下文路径</RouterLink><ul><li><RouterLink to="#linux系统有几个文件">linux系统有几个文件</RouterLink></li><li><RouterLink to="#基本命令">基本命令</RouterLink></li></ul></li><li><RouterLink to="#_13docker构建多阶段实战">13docker构建多阶段实战</RouterLink><ul><li><RouterLink to="#不适用多阶段部署">不适用多阶段部署</RouterLink></li></ul></li><li><RouterLink to="#自动化部署">自动化部署</RouterLink><ul><li><RouterLink to="#搞个nginx做web服务器">搞个Nginx做WEB服务器</RouterLink></li></ul></li><li><RouterLink to="#补充一个实例化版本部署完整-expred-mysql-uniapp">补充一个实例化版本部署完整:expred，mysql,uniapp</RouterLink></li></ul></nav>
<h2 id="_001回到博客主页" tabindex="-1"><a class="header-anchor" href="#_001回到博客主页" aria-hidden="true">#</a> 001回到博客主页</h2>
<p><RouterLink to="/">博客首页</RouterLink></p>
<h1 id="基础常用uniapp的标签和vue比较" tabindex="-1"><a class="header-anchor" href="#基础常用uniapp的标签和vue比较" aria-hidden="true">#</a> 基础常用uniapp的标签和vue比较</h1>
<h2 id="_001html标签和小程序的标签的区别" tabindex="-1"><a class="header-anchor" href="#_001html标签和小程序的标签的区别" aria-hidden="true">#</a> 001html标签和小程序的标签的区别</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>div 改成 view
span、font 改成 text
a 改成 navigator
img 改成 image
input 还在，但type属性改成了confirmtype
form、button、checkbox、radio、label、textarea、canvas、video 这些还在。
select 改成 picker
iframe 改成 web-view
ul、li没有了，都用view替代
audio 不再推荐使用，改成api方式，背景音频api文档
---特别说明：
其实老的HTML标签也可以在uni-app里使用，uni-app编译器会在编译时把老标签转为新标签，比如把:div编译成view。但不推荐这种用法，调试H5端时容易混乱。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_002uniapp的手机端常用的一些新组建" tabindex="-1"><a class="header-anchor" href="#_002uniapp的手机端常用的一些新组建" aria-hidden="true">#</a> 002uniapp的手机端常用的一些新组建</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
scroll-view 可区域滚动视图容器
swiper 可滑动区域视图容器
icon 图标
rich-text 富文本（不可执行js，但可渲染各种文字格式和图片）
progress 进度条
slider 滑块指示器
switch 开关选择器
camera 相机
live-player 直播
map 地图
cover-view 可覆盖原生组件的视图容器 cover-view需要多强调几句，uni-app的非h5端的video、map、canvas、textarea是原生组件，层级高于其他组件。如需覆盖原生组件，比如在map上加个遮罩，则需要使用cover-view组件
补充专业的知识：Uniapp 基础组件分为以下八大类
视图容器（View Container）
基础内容（Basic Content）
表单组件（Form）
导航（Navigation）
媒体组件（Media）
地图（Map）
画布（Canvas）
webview（Web-view）


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_003一些高级的比较的内容" tabindex="-1"><a class="header-anchor" href="#_003一些高级的比较的内容" aria-hidden="true">#</a> 003一些高级的比较的内容</h2>
<p>(1)小程序中使用全局变量，可以挂载在vue对象上面
还可以在每一个组件内部使用一个Uniapp 也把 globalData 作为一种比较简单的全局变量使用方式
但是有一点要清楚，globalData 走内存，storage 走缓存，即小程序退出 globalData 会清空，storage 则不会</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>使用方式
赋值：getApp().globalData.websiteUrl = 'http://localhost:3000'  

取值：console.log(getApp().globalData.websiteUrl) // 'http://localhost:3000'  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_004uniapp文件夹结构内容" tabindex="-1"><a class="header-anchor" href="#_004uniapp文件夹结构内容" aria-hidden="true">#</a> 004uniapp文件夹结构内容</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>myuniappVue3
├─ .git
├─ .gitignore
├─ .hbuilderx
├─ App.vue
├─ LICENSE
├─ README.md
├─ changelog.md
├─ common
├─ components---easycom模式，不用引用注册，直接在页面使用的组件，符合components/组件名称/组件名称.vue
├─ hybrid---存放本地网页的目录
├─ index.html
├─ main.js
├─ manifest.json
├─ node_modules
├─ package.json
├─ pages
├─ pages.json---uniapp的全局配置文件：
├─ platforms---存放各平台专用页面的目录
├─ project.config.json
├─ project.private.config.json
├─ static
├─ store
├─ template.h5.html
├─ uni.scss
├─ uni_modules
├─ unpackage
├─ windows
└─ wxcomponents

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_005uniapp中对于多平台的配置和检测处理" tabindex="-1"><a class="header-anchor" href="#_005uniapp中对于多平台的配置和检测处理" aria-hidden="true">#</a> 005uniapp中对于多平台的配置和检测处理</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#ifdef	仅在某个平台上使用
#ifndef	在除了这个平台的其他平台上使用(非此平台使用）
#endif	结束条件编译

不同文件的条件编译的写法
条件编译是利用注释实现的，在不同语法里注释写法不一样，
js使用 // 注释、
css 使用 /* 注释 */


不同的平台的专用关键字
APP-PLUS	5+App
MP	微信小程序/支付宝小程序/百度小程序/头条小程序/QQ小程序
MP-WEIXIN	微信小程序
MP-ALIPAY	支付宝小程序
MP-BAIDU	百度小程序
MP-TOUTIAO	头条小程序
MP-QQ	QQ小程序
H5	H5
APP-PLUS-NVUE	5+App nvue


使用案例1：在pages.json中使用
// #ifdef APP-PLUS || H5
{
    "path": "pages/component/web-view-local/web-view-local",
    "style": {}
},
// #endif

使用案例2：main.js中判断
如果不是vue3代码运行下面内容
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$adpid = "1111111111"
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_06初学者可能插件的一些问题" tabindex="-1"><a class="header-anchor" href="#_06初学者可能插件的一些问题" aria-hidden="true">#</a> 06初学者可能插件的一些问题</h2>
<h3 id="pages-json中的内容配置" tabindex="-1"><a class="header-anchor" href="#pages-json中的内容配置" aria-hidden="true">#</a> pages.json中的内容配置</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tabBar
当设置 position 为 top 时，将不会显示 icon
tabBar 中的 list 是一个数组，只能配置最少2个、最多5个 tab，tab 按数组的顺序排序。
tabbar 切换第一次加载时可能渲染不及时，可以在每个tabbar页面的onLoad生命周期里先弹出一个等待雪花（hello uni-app使用了此方式）
tabbar 的页面展现过一次后就保留在内存中，再次切换 tabbar 页面，只会触发每个页面的onShow，不会再触发onLoad。



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="好用的插件-一键创建页面、组件、分包" tabindex="-1"><a class="header-anchor" href="#好用的插件-一键创建页面、组件、分包" aria-hidden="true">#</a> 好用的插件：一键创建页面、组件、分包</h3>
<p>这个vscode中自己安装插件：uni-create-view,而在hbuild中内置了</p>
<h3 id="_005页面导航-网络请求-数据缓存" tabindex="-1"><a class="header-anchor" href="#_005页面导航-网络请求-数据缓存" aria-hidden="true">#</a> 005页面导航，网络请求，数据缓存</h3>
<p>页面导航的区别内容</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>H5 通过 window.history 属性对其进行访问，改变路由记录从而实现跳转
ios/安卓 是改变根视图或操作导航控制器出栈进栈从而实现跳转
小程序实现跳转采用的方式也是改变根视图或操作导航控制器出栈进栈

如果你要用 Uniapp 开发的项目编译成微信小程序，就要注意微信小程序的页面栈的限制了，小程序中页面栈限制最多十层（微信进行了限制调整），随着页面栈的push增加，在不知道的情况下就会堆栈到十层，再用API navigateTo 去跳转页面就跳不动了，用户会跳转失效（卡死状态）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="custom设置为true-并且把所有需要切换的页面都配置在list中-否则之后切换tab用switchtab方法无效" tabindex="-1"><a class="header-anchor" href="#custom设置为true-并且把所有需要切换的页面都配置在list中-否则之后切换tab用switchtab方法无效" aria-hidden="true">#</a> custom设置为true，并且把所有需要切换的页面都配置在list中，否则之后切换tab用switchTab方法无效</h3>
<p>pages.json中配置custom</p>
<h3 id="tabbar增加入口文件" tabindex="-1"><a class="header-anchor" href="#tabbar增加入口文件" aria-hidden="true">#</a> tabbar增加入口文件，</h3>
<p>命名为index入口，默认加载文件夹下的index</p>
<h3 id="_007uniapp中跳转页面的api" tabindex="-1"><a class="header-anchor" href="#_007uniapp中跳转页面的api" aria-hidden="true">#</a> 007uniapp中跳转页面的API</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>uni.navigateTo() 保留当前页面，跳转到应用内的某个页面，使用 uni.navigateBack 可以返回到原页面。
uni.redirectTo() 关闭当前页面，跳转到应用内的某个页面。
uni.reLaunch() 关闭所有页面，打开到应用内的某个页面。reLaunch 可以打开任意页面。
uni.switchTab() 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。switchTab 只能打开 tabBar 页面。

使用注意：
注意：

* navigateTo, redirectTo 只能打开非 tabBar 页面。
* 页面跳转路径有层级限制，不能无限制跳转新页面
* 跳转到 tabBar 页面只能使用 switchTab 跳转
* 路由 API 的目标页面必须是在 pages.json 里注册的 vue 页面。如果想打开 web url，在 App 平台可以使用 plus.runtime.openURL 或 web-view 组件；H5 平台使用 window.open；小程序平台使用 web-view 组件（url需在小程序的联网白名单中）。在 hello uni-app 中有个组件 ulink.vue 已对多端进行封装，


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_08布局样式和跨端建通" tabindex="-1"><a class="header-anchor" href="#_08布局样式和跨端建通" aria-hidden="true">#</a> 08布局样式和跨端建通</h2>
<h3 id="_001全局样式和局部样式" tabindex="-1"><a class="header-anchor" href="#_001全局样式和局部样式" aria-hidden="true">#</a> 001全局样式和局部样式</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>App.vue 中通过 @import 语句可以导入外联样式，一样作用于每一个页面。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_002样式的条件编译" tabindex="-1"><a class="header-anchor" href="#_002样式的条件编译" aria-hidden="true">#</a> 002样式的条件编译</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>条件编译写法：以 #ifdef 或 #ifndef 加 “平台名称” 开头，以 #endif 结尾。

#ifdef：if defined 仅在某平台存在
#ifndef：if not defined 除了某平台均存在
%PLATFORM%：平台名称


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_08使用iconfont阿里巴巴矢量图库" tabindex="-1"><a class="header-anchor" href="#_08使用iconfont阿里巴巴矢量图库" aria-hidden="true">#</a> 08使用iconfont阿里巴巴矢量图库</h2>
<p>创建一个账号，iconfont账号，然后添加到项目后，解压</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>查阅后发现 iconfont.css 只能设置单色的图标，要想使彩色图标，
需要使用 svg (symbol)模式 Unicode。方法如下
TODO:设置项目的颜色
配置一下项目设置，这里有一个字体格式：必须选择彩色，不然下载后，无法看到彩色。
方法1：
	&lt;view class="iconfont">&amp;#xe69c;&lt;/view>
方法2
		&lt;icon class="iconfont icon-shizi" :size="23" />

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_10浏览器兼容" tabindex="-1"><a class="header-anchor" href="#_10浏览器兼容" aria-hidden="true">#</a> 10浏览器兼容</h1>
<h2 id="_001常见兼容性问题出现的原因-从环境使用角度" tabindex="-1"><a class="header-anchor" href="#_001常见兼容性问题出现的原因-从环境使用角度" aria-hidden="true">#</a> 001常见兼容性问题出现的原因:从环境使用角度</h2>
<p>熟知语言框架的特性，才能避免问题，最快定位问题</p>
<p>小程序兼容的本质是混合开发，hybridapp，介于native和webapp.
微信小程序运行在三端：iOS（iPhone/iPad）、Android 和 用于调试的开发者工具。
三端的脚本执行环境以及用于渲染非原生组件的环境是各不相同的：
在 ios 上，小程序逻辑层的 javascript 代码运行在 JavaScriptCore 中，视图层是由 WKWebView 来渲染的，环境有 ios8、ios9、ios10；
在 Android 上，旧版本，小程序逻辑层的 javascript 代码运行中 X5 JSCore 中，视图层是由 X5 基于 Mobile Chrome 57 内核来渲染的；</p>
<p>新版本，小程序逻辑层的 javascript 代码运行在 V8 中，视图层是由自研 XWeb 引擎基于 Mobile Chrome 67 内核来渲染的；</p>
<p>在开发工具上，小程序逻辑层的 javascript 代码是运行在 NW.js 中，视图层是由 Chromium 60 Webview 来渲染的</p>
<h2 id="常见几个问题" tabindex="-1"><a class="header-anchor" href="#常见几个问题" aria-hidden="true">#</a> 常见几个问题</h2>
<p>scroll-view 在手机上可能会出现滚动条
直接在标签添加 style 行内样式
css 不支持本地路径图片
控件层级表现有出入，z-index 在 native 组件下失效</p>
<p>应该说这些问题只是因为语言特性渲染机制不同产生的，这些情况微信也在文档做了说明</p>
<h2 id="_04修改全局参数配置" tabindex="-1"><a class="header-anchor" href="#_04修改全局参数配置" aria-hidden="true">#</a> 04修改全局参数配置</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>pages.json
/* pages.json */

"globalStyle": {
    "navigationBarTextStyle": "white",     // 导航栏标题颜色及状态栏前景颜色，仅支持 black/white
    "navigationBarTitleText": "Uniapp Music",   // 导航栏标题文字内容
    "navigationBarBackgroundColor": "#F8F8F8",  // 导航栏背景颜色（同状态栏背景色）
    "backgroundColor": "#F8F8F8" // 窗口的背景色
}
我们需要在 pages.json 修改 globalStyle 配置应用的状态栏、导航条、标题、窗口背景色等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_06图片存放-全局变量使用" tabindex="-1"><a class="header-anchor" href="#_06图片存放-全局变量使用" aria-hidden="true">#</a> 06图片存放，全局变量使用</h2>
<h3 id="使用全局属性的说明" tabindex="-1"><a class="header-anchor" href="#使用全局属性的说明" aria-hidden="true">#</a> 使用全局属性的说明</h3>
<p><a href="https://uniapp.dcloud.io/tutorial/migration-to-vue3.html" target="_blank" rel="noopener noreferrer">vue2升级vue3<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Vue3 将不支持 slot="xxx" 的用法 ，请使用 v-slot:xxx 用法

$mp 调整为 $scope
在 Vue3 中，this 对象下的 $mp 调整为 $scope

---获取全局变量：getApp()同时在App.vue中定义

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_09开屏广告的实现逻辑" tabindex="-1"><a class="header-anchor" href="#_09开屏广告的实现逻辑" aria-hidden="true">#</a> 09开屏广告的实现逻辑</h2>
<p>开屏广告一般都会到达广告主的落地页。
点击开屏广告后，逻辑：是否有广告主的app,如果有，那么唤醒启动当前广告主的app,否则
第一种情况进入应用市场打开
第二种情况进入H5页面详情介绍
第三种情况直接下载这个应用。</p>
<h3 id="广告内容实现逻辑" tabindex="-1"><a class="header-anchor" href="#广告内容实现逻辑" aria-hidden="true">#</a> 广告内容实现逻辑</h3>
<p>在上一次打开应用的时候，预加载本地，下一次打开应用时候，判断离开应用时间是否超过了时间段，如果超过了，那么高高出现。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>用户进入应用
启动开屏广告
判断用户离开时间是否超过10分钟，如果没有那么进入首页
如果有，那么拉去广告，同时播放，是否关闭广告，加上等待时间。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="补充uniapp使用" tabindex="-1"><a class="header-anchor" href="#补充uniapp使用" aria-hidden="true">#</a> 补充uniapp使用</h3>
<p>获取路由信息</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>uniappp中获取路由信息的方式不能用useRoute和useRouter，官方给出的方案是用getCurrentPages，如下：
var pages = getCurrentPages();
var page = pages[pages.length - 1];
console.log(page);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>onShow的生命周期的使用。
和vue3的其他onMounted(()=&gt;{})编程函数式使用。</p>
<h2 id="配置uniapp中的路径别名" tabindex="-1"><a class="header-anchor" href="#配置uniapp中的路径别名" aria-hidden="true">#</a> 配置uniapp中的路径别名</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>可以直接在uniapp中使用@
@/是从项目根路径下开始
项目中相当于可以直接代替src下的路径

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用图片的asset的引入" tabindex="-1"><a class="header-anchor" href="#应用图片的asset的引入" aria-hidden="true">#</a> 应用图片的asset的引入</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>~@相对于assets的引用
~@ 从 assets 起 应用于图片的引用
background-image: url(~@/assets/img/wap/settings/icon_view.png);


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12解决uniapp的打包apk的方法" tabindex="-1"><a class="header-anchor" href="#_12解决uniapp的打包apk的方法" aria-hidden="true">#</a> 12解决uniapp的打包apk的方法</h2>
<p>h5打包成uniapp
h5打包成小程序</p>
<p>安卓app打包发布
云打包（个人应用推荐使用）
在工具栏，选择&quot;原生App-云打包&quot;；</p>
<h2 id="hbuild发布微信小程序" tabindex="-1"><a class="header-anchor" href="#hbuild发布微信小程序" aria-hidden="true">#</a> Hbuild发布微信小程序</h2>
<h3 id="申请微信开发者appid" tabindex="-1"><a class="header-anchor" href="#申请微信开发者appid" aria-hidden="true">#</a> 申请微信开发者APPID</h3>
<p><a href="https://mp.weixin.qq.com/wxamp/wadevelopcode/sandbox?lang=zh_CN&amp;token=1922935855" target="_blank" rel="noopener noreferrer">申请微信开发者APPID<ExternalLinkIcon/></a></p>
<h3 id="选择hbuild中的内容" tabindex="-1"><a class="header-anchor" href="#选择hbuild中的内容" aria-hidden="true">#</a> 选择Hbuild中的内容</h3>
<h4 id="微信小程序平台打包" tabindex="-1"><a class="header-anchor" href="#微信小程序平台打包" aria-hidden="true">#</a> 微信小程序平台打包</h4>
<p>弹出内容有APPID输入，然后下面不用选择内容。默认打包后，会打开微信开发者工具。</p>
<p>打开微信开发者工具，这时默认不是从根目录加载文件，所以报错找不到app.json内容</p>
<p>手动从根目录打开文件夹即可。</p>
<p>也有一些下面的可能。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>找到app.json所在文件夹
E:\codeLession\vueAllProject\myuniappVue3\unpackage\dist\dev\mp-weixin\app.json
然后放入最外城project.config.json中配置

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安卓app打包发布" tabindex="-1"><a class="header-anchor" href="#安卓app打包发布" aria-hidden="true">#</a> 安卓app打包发布</h4>
<p>云打包（个人应用推荐使用）
在工具栏，选择&quot;原生App-云打包&quot;；
很久等待，用下面的本地打包。
（云打包更快，这里生成无需配置，）</p>
<h4 id="本地打包-企业应用推荐使用" tabindex="-1"><a class="header-anchor" href="#本地打包-企业应用推荐使用" aria-hidden="true">#</a> 本地打包（企业应用推荐使用）</h4>
<p>需要下载配置依赖，如下内容</p>
<p>也可以选择本地打包，按章androidStudio的前提下。
打开在hbuild打包好的文件内容</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>'myuniappVue3'导出成功，路径为：E:/codeLession/vueAllProject/myuniappVue3/unpackage/resources/__UNI__30D08D3/www


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置内容
<a href="https://blog.csdn.net/daoer_sofu/article/details/121723601" target="_blank" rel="noopener noreferrer">配置流程内容<ExternalLinkIcon/></a>
<a href="https://blog.csdn.net/czeliang/article/details/117524265" target="_blank" rel="noopener noreferrer">修改配置文件内容<ExternalLinkIcon/></a></p>
<h2 id="_13docker打包的上下文路径" tabindex="-1"><a class="header-anchor" href="#_13docker打包的上下文路径" aria-hidden="true">#</a> 13docker打包的上下文路径</h2>
<p>如果未说明最后一个参数，那么默认上下文路径就是 Dockerfile 所在的位置。</p>
<h3 id="linux系统有几个文件" tabindex="-1"><a class="header-anchor" href="#linux系统有几个文件" aria-hidden="true">#</a> linux系统有几个文件</h3>
<p>Docker拉取的镜像和创建的容器就存放docker-desktop和docker-desktop-data。
docker-desktop存放镜像
docker-desktop-data存放容器</p>
<h3 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h3>
<p>ADD
ADD指令用于将文件添加到容器中
ADD指令和COPY指令的格式和性质基本一致，只不过ADD指令是在COPY指令的基础上增加了一些功能。例如，ADD指令指定的源路径可以是一个远程URL，</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ADD https://www.baidu.com/index.html /index/

使用docker build命令构建镜像，然后使用docker run命令创建并启动容器，会发现在容器根目录下的index文件夹下有了index.html文件。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用WORKDIR指令来指定工作目录(</p>
<p>vim /etc/passwd	---查看有哪些用户</p>
<h2 id="_13docker构建多阶段实战" tabindex="-1"><a class="header-anchor" href="#_13docker构建多阶段实战" aria-hidden="true">#</a> 13docker构建多阶段实战</h2>
<p>Docker Engine 17.05 中引入了多阶段构建，以此降低构建复杂度，同时使缩小镜像尺寸更为简单。</p>
<h3 id="不适用多阶段部署" tabindex="-1"><a class="header-anchor" href="#不适用多阶段部署" aria-hidden="true">#</a> 不适用多阶段部署</h3>
<p>我们通常创建两个dockerfile文件，一个用于开发编译应用，一个用于精简生产镜像。</p>
<h4 id="一些包非常大" tabindex="-1"><a class="header-anchor" href="#一些包非常大" aria-hidden="true">#</a> 一些包非常大</h4>
<p>:alpine用这个版本构建小</p>
<p>将原来的node:latest换成alpine后，从1G降低到200M
最后面的 --from=0,表示第一阶段</p>
<h4 id="这里dockerfile是一种方式-另一种方式是docker-common" tabindex="-1"><a class="header-anchor" href="#这里dockerfile是一种方式-另一种方式是docker-common" aria-hidden="true">#</a> 这里Dockerfile是一种方式，另一种方式是docker-common</h4>
<p>docker-compose up -d</p>
<h2 id="自动化部署" tabindex="-1"><a class="header-anchor" href="#自动化部署" aria-hidden="true">#</a> 自动化部署</h2>
<p>已经完成，可以查看15章节</p>
<h3 id="搞个nginx做web服务器" tabindex="-1"><a class="header-anchor" href="#搞个nginx做web服务器" aria-hidden="true">#</a> 搞个Nginx做WEB服务器</h3>
<p>然后docker中拉取一个镜像，跑起来
docker pull nginx
docker run --name nginx-server -p 4000:80 -d nginx</p>
<h2 id="补充一个实例化版本部署完整-expred-mysql-uniapp" tabindex="-1"><a class="header-anchor" href="#补充一个实例化版本部署完整-expred-mysql-uniapp" aria-hidden="true">#</a> 补充一个实例化版本部署完整:expred，mysql,uniapp</h2>
<p><a href="https://gitee.com/nyhxiaoning/all-blog-sys.git" target="_blank" rel="noopener noreferrer">个人博客+blog+node+express+mysql+vue2+uniapp完整<ExternalLinkIcon/></a>
D:\works\NodePro\all-blog-sys</p>
</div></template>
