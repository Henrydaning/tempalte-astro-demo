<template><div><h2 id="需求分析" tabindex="-1"><a class="header-anchor" href="#需求分析" aria-hidden="true">#</a> 需求分析</h2>
<p>设计网站架构顺序
从浏览器发送请求，到服务器发生了什么事情。</p>
<h2 id="打印执行时间" tabindex="-1"><a class="header-anchor" href="#打印执行时间" aria-hidden="true">#</a> 打印执行时间</h2>
<p>1.glob递归的打印文件
console.time(&quot;glob&quot;)</p>
<p>console.timeEnd(&quot;glob)
glob模块执行划分多长时间。</p>
<h2 id="_1-下载页面" tabindex="-1"><a class="header-anchor" href="#_1-下载页面" aria-hidden="true">#</a> 1.下载页面</h2>
<h3 id="_1-增加html引入今天static的引入" tabindex="-1"><a class="header-anchor" href="#_1-增加html引入今天static的引入" aria-hidden="true">#</a> （1）增加html引入今天static的引入</h3>
<p>koa-static</p>
<h3 id="_2-koa-mount" tabindex="-1"><a class="header-anchor" href="#_2-koa-mount" aria-hidden="true">#</a> (2)koa-mount</h3>
<p>第二个参数可以使用一个koa实例。</p>
<h3 id="_3-nodemxn的使用xxxx被自己错信坑死-nodemon这个命令" tabindex="-1"><a class="header-anchor" href="#_3-nodemxn的使用xxxx被自己错信坑死-nodemon这个命令" aria-hidden="true">#</a> （3）nodemXn的使用XXXX被自己错信坑死，nodemon这个命令</h3>
<p>nodemon index.js</p>
<h3 id="nodemon-nodemon" tabindex="-1"><a class="header-anchor" href="#nodemon-nodemon" aria-hidden="true">#</a> nodemon nodemon</h3>
<h2 id="_2-详情页" tabindex="-1"><a class="header-anchor" href="#_2-详情页" aria-hidden="true">#</a> 2.详情页</h2>
<h3 id="proto协议" tabindex="-1"><a class="header-anchor" href="#proto协议" aria-hidden="true">#</a> proto协议</h3>
<p>二进制协议，</p>
<ul>
<li>
<p>优点
空间占用小，没有冗余字段；
运算规则简单，解析效率高。</p>
</li>
<li>
<p>缺点
可读性差，难于调试；
扩展性差，对于旧版本不太容易兼容新字段。</p>
</li>
</ul>
<h2 id="搭建api服务" tabindex="-1"><a class="header-anchor" href="#搭建api服务" aria-hidden="true">#</a> 搭建api服务</h2>
<p>7.API服务
（1）restApI\通过路径进行不同的资源（食堂吃饭）</p>
<p>简单易懂
可以快速搭建
在数据聚合方面有很大的劣势
(get中专门一个字段数据，在一堆冗余数据中进行查找)
（2）GrapghQL ---&gt;吃自助
专注于数据聚合，前端需要什么数据，就返回什么数据。不会冗余。</p>
<p>让前端有自定义查询数据的能力</p>
<h2 id="实现基于graphql的数据内容传递" tabindex="-1"><a class="header-anchor" href="#实现基于graphql的数据内容传递" aria-hidden="true">#</a> 实现基于graphql的数据内容传递</h2>
<p>const { graphql } = require(&quot;graphql&quot;);
const query = require(&quot;./index&quot;);</p>
<p>query(&quot;{hello,num}&quot;).then(res=&gt;{
console.log('res',res)
})</p>
<p>// TODO:如何基于graphql给http传递数据服务器
// koa-graphql</p>
<h3 id="koa-graphql" tabindex="-1"><a class="header-anchor" href="#koa-graphql" aria-hidden="true">#</a> koa-graphql</h3>
<h2 id="_3-播放器" tabindex="-1"><a class="header-anchor" href="#_3-播放器" aria-hidden="true">#</a> 3.播放器</h2>
<h2 id="_4-列表页" tabindex="-1"><a class="header-anchor" href="#_4-列表页" aria-hidden="true">#</a> 4.列表页</h2>
<h2 id="_8-从url到渲染出页面出现过程。" tabindex="-1"><a class="header-anchor" href="#_8-从url到渲染出页面出现过程。" aria-hidden="true">#</a> 8.从URL到渲染出页面出现过程。</h2>
<h2 id="_9-前后端同构" tabindex="-1"><a class="header-anchor" href="#_9-前后端同构" aria-hidden="true">#</a> 9.前后端同构</h2>
<p>前后台使用同一套模板写代码，渲染html。
Vue中使用VueServerRenderer.renderToString()</p>
<p>React中使用ReactDomServer.renderToString()</p>
<h2 id="_10-react-vue同构最大的难度-其实是数据部分。" tabindex="-1"><a class="header-anchor" href="#_10-react-vue同构最大的难度-其实是数据部分。" aria-hidden="true">#</a> 10.React.Vue同构最大的难度，其实是数据部分。</h2>
<p>比如前端的vuex，Redux，这些数据怎样管理使得同构部分的代码更好。
引出了next框架和nuxt框架</p>
<h2 id="_11-nuxt-js" tabindex="-1"><a class="header-anchor" href="#_11-nuxt-js" aria-hidden="true">#</a> 11.Nuxt.js</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npx create-nuxt-app &lt;project-name>
Nuxt.js 是一个基于 Vue.js 的通用应用框架，一个用于Vue.js 开发SSR应用的一站式解决方案。它的优点是将原来几个配置文件要完成的内容，都整合在了一个nuxt.config.js，封装与扩展性完美的契合。

简单说nuxtjs项目，它其实就是一个vue的项目融合一个node.js server项目，这里node服务有两个作用，第一点是代替浏览器的工作,笼统理解就是在created时的请求数据和页面渲染，第二点是当作静态文件服务器，把渲染好的页面返回给用户。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-next-js" tabindex="-1"><a class="header-anchor" href="#_12-next-js" aria-hidden="true">#</a> 12.Next.js</h2>
<p>npx create-next-app</p>
<p>Next.js基于React开发
npx create-next-app</p>
<p>直观的、 基于页面 的路由系统（并支持 动态路由）
预渲染。支持在页面级的 静态生成 (SSG) 和 服务器端渲染 (SSR)
自动代码拆分，提升页面加载速度
具有经过优化的预取功能的 客户端路由
内置 CSS 和 Sass 的支持，并支持任何 CSS-in-JS 库
开发环境支持 快速刷新
利用 Serverless Functions 及 API 路由 构建 API 功能
完全可扩展</p>
<h2 id="_13-axios" tabindex="-1"><a class="header-anchor" href="#_13-axios" aria-hidden="true">#</a> 13.axios</h2>
<p>可以前后端请求同构。
注意处理数据和处理环境不要混合在一起。</p>
<h2 id="_14-前后端同构的问题说明" tabindex="-1"><a class="header-anchor" href="#_14-前后端同构的问题说明" aria-hidden="true">#</a> 14.前后端同构的问题说明</h2>
<p>前后端同构的关键</p>
<ul>
<li>
<p>注意职责的分离，处理环境的代码，处理数据的代码分割。</p>
</li>
<li></li>
</ul>
<h2 id="_15-对于html中写调用方法" tabindex="-1"><a class="header-anchor" href="#_15-对于html中写调用方法" aria-hidden="true">#</a> 15.对于html中写调用方法</h2>
<p>this.abbfn.bind(this.1);</p>
<h2 id="_16-webpack打包jsx" tabindex="-1"><a class="header-anchor" href="#_16-webpack打包jsx" aria-hidden="true">#</a> 16.webpack打包jsx</h2>
<p>webpack.config.js中配置了入口和出口后，直接启动webpack就可以自动完成。
如果没有webpack.config.js，那么只能使用自己写命令，webpack input.js -o output.js
(webpack编译babel命令教程)</p>
<h2 id="_17-http服务性能测试。" tabindex="-1"><a class="header-anchor" href="#_17-http服务性能测试。" aria-hidden="true">#</a> 17.HTTP服务性能测试。</h2>
<p>HTTP服务性能检查工具</p>
<h3 id="压力测试工具" tabindex="-1"><a class="header-anchor" href="#压力测试工具" aria-hidden="true">#</a> 压力测试工具</h3>
<p>ab:apache bench
webbench</p>
<p>这里以ab为例。
输入
apache bin目录下面，直接输入命令
ab -n100 -c 5 15  http://baidu.com/
其中－n表示请求数，－c表示并发数,第三个参数15，表示持续压力测试15s,
这里注意一点，如果当期的性能支持不了当期的并发数，该命令会无效输出。</p>
<h2 id="http性能瓶颈一般除了并发-很大程度上是js中的拼接字符串和数据处理部分" tabindex="-1"><a class="header-anchor" href="#http性能瓶颈一般除了并发-很大程度上是js中的拼接字符串和数据处理部分" aria-hidden="true">#</a> HTTP性能瓶颈一般除了并发，很大程度上是js中的拼接字符串和数据处理部分</h2>
<h3 id="如何快速找到nodejs中js代码的性能瓶颈。" tabindex="-1"><a class="header-anchor" href="#如何快速找到nodejs中js代码的性能瓶颈。" aria-hidden="true">#</a> 如何快速找到nodejs中js代码的性能瓶颈。</h3>
<p>Nodejs自带的工具
Node profile</p>
<h2 id="node性能命令-node自带profile" tabindex="-1"><a class="header-anchor" href="#node性能命令-node自带profile" aria-hidden="true">#</a> node性能命令 node自带profile</h2>
<p>第一个命令:启动命令的时候中间加上prof
node --prof entry.js</p>
<p>停止后，生成一个文件一般是iso开头</p>
<p>第二个命令:将性能分析，写入一个1.txt文件，便于查看
node --prof-process isoxxxx文件名 &gt;1.txt</p>
<h2 id="node性能优化工具2chrome-devtool" tabindex="-1"><a class="header-anchor" href="#node性能优化工具2chrome-devtool" aria-hidden="true">#</a> node性能优化工具2chrome devtool</h2>
<p>ndoe --inspect-brk  entry.js
这里利用node内核是v8引擎，brk启动调试暂停，占用程序运行。
同时进入chrome浏览器，输入chrome://inspect
chrome://inspect/#devices
点击下面的inspect超链接，弹出一个devtool的工具，可以选择开始收集性能数据</p>
<h2 id="node的一个npm包clinic-js" tabindex="-1"><a class="header-anchor" href="#node的一个npm包clinic-js" aria-hidden="true">#</a> node的一个npm包Clinic.js</h2>
<p>npm install -g clinic</p>
<p>wrk http://localhost:3000
autocannon http://localhost:3000</p>
<h2 id="怎样检测我们的内存泄漏" tabindex="-1"><a class="header-anchor" href="#怎样检测我们的内存泄漏" aria-hidden="true">#</a> 怎样检测我们的内存泄漏</h2>
<p>V8的垃圾回收机制
每一个对象都有一个标记引用，当标记为0的时候，启动垃圾回收
如果多次垃圾回收后，新生代中的对象没有被释放，那么放入老生代的内存中，</p>
<p>新生代，容量小，垃圾回收更快
老生代，容量大，垃圾回收更慢。</p>
<h3 id="如何检测chrome-devtool看出内存泄漏" tabindex="-1"><a class="header-anchor" href="#如何检测chrome-devtool看出内存泄漏" aria-hidden="true">#</a> 如何检测chrome devtool看出内存泄漏</h3>
<p>每隔一段时间，进行一次点击提取快照。
打开inspect后，有一个Memory选项tab,左侧有一个profile选项，点击一下，可以截取快照
压测做到一半的时候，做一个快照，压测完成做一个快照
多次截取快照，可以两次进行对比。</p>
<h3 id="优秀内存分配策略的学习buffer" tabindex="-1"><a class="header-anchor" href="#优秀内存分配策略的学习buffer" aria-hidden="true">#</a> 优秀内存分配策略的学习buffer</h3>
<p>Buffer内存的分配策略</p>
</div></template>
