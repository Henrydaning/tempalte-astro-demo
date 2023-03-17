<template><div><p>设计网站架构顺序
从浏览器发送请求，到服务器发生了什么事情。</p>
<p>下载页面</p>
<h2 id="模板引擎需要实现的内容-解构" tabindex="-1"><a class="header-anchor" href="#模板引擎需要实现的内容-解构" aria-hidden="true">#</a> 模板引擎需要实现的内容，解构</h2>
<p>模板渲染：两部分
第一部分：include子模板
第二部分：xss过滤，模板helper函数</p>
<h2 id="_3-通过es6实现模板字符串" tabindex="-1"><a class="header-anchor" href="#_3-通过es6实现模板字符串" aria-hidden="true">#</a> 3.通过es6实现模板字符串</h2>
<p>（1）vm模块
Nodejs运行html模板字符串内容的方式，更加安全，
通过vm2实现一个ejs模板引擎的方法</p>
<p>（2）实现模板方法
第一步，使用vm,将es6的模板字符串进行字符串转换
vm是Node.js中的一个内置模块，其runInNewContext方法的作用相当于new Function(codeStr)() （参见这里）或者 eval(codeStr)（参见这里），关于runInNewContext方法的用法可参见Node.js的官方文档。</p>
<p>作者：DennisWu
链接：https://juejin.cn/post/6947570355154190344
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
第二步，过滤xss，将插入的那些恶意或是特殊的字符过滤掉。
提供一个函数，es6模板字符串支持函数调用，
第三步，</p>
<h2 id="_4-todo-经典遍历对象object-keys-foreach和for-in" tabindex="-1"><a class="header-anchor" href="#_4-todo-经典遍历对象object-keys-foreach和for-in" aria-hidden="true">#</a> 4.// TODO:经典遍历对象Object.keys.forEach和for in</h2>
<p>为什么使用Object.keys.forEach,而不是for in</p>
<p>for in是for in
遍历对象及其原型链上的可枚举的属性.
for in 某些情况下,会随机输出</p>
<p>for-in 循环会枚举对象原型链上的可枚举属性，而Object.keys不会</p>
<p>遍历对象返回属性名和遍历数组返回的索引都是string类型。。</p>
<p>// 递归写法
Object.prototype.clone = function(){
let o = this.constructor === Array ? [] : {};
for(let e in this){
if(this.hasOwnProperty(e)){
o[e] = typeof this[e] === &quot;object&quot; ? this[e].clone() : this[e];
}
}
return o;
}
let obj = {
a : 1,
b : {
c: 2
}
}
let obj2 = obj.clone();
console.log(obj2); // { a: 1, b: { c: 2 } }
————————————————
版权声明：本文为CSDN博主「小小荧」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/xfy196/article/details/107604072</p>
<h2 id="_6-easy-sock实现后台rpc通信的模块" tabindex="-1"><a class="header-anchor" href="#_6-easy-sock实现后台rpc通信的模块" aria-hidden="true">#</a> 6.easy_sock实现后台RPC通信的模块</h2>
<p>easy_sock帮你快速开发基于tcp协议的接口，快速打通nodejs跟其他私有协议server的交互。让你做到像调用本地接口一样调用server api。</p>
<h2 id="_7-api服务" tabindex="-1"><a class="header-anchor" href="#_7-api服务" aria-hidden="true">#</a> 7.API服务</h2>
<p>（1）restApI\通过路径进行不同的资源（食堂吃饭）</p>
<p>简单易懂
可以快速搭建
在数据聚合方面有很大的劣势
(get中专门一个字段数据，在一堆冗余数据中进行查找)
（2）GrapghQL ---&gt;吃自助
专注于数据聚合，前端需要什么数据，就返回什么数据。不会冗余。</p>
<p>让前端有自定义查询数据的能力</p>
<h2 id="_8-经典面试题-通过node后台收到到嵌套渲染从url到渲染出页面出现过程。" tabindex="-1"><a class="header-anchor" href="#_8-经典面试题-通过node后台收到到嵌套渲染从url到渲染出页面出现过程。" aria-hidden="true">#</a> 8.经典面试题，通过node后台收到到嵌套渲染从URL到渲染出页面出现过程。</h2>
<h2 id="_9-前后端同构" tabindex="-1"><a class="header-anchor" href="#_9-前后端同构" aria-hidden="true">#</a> 9.前后端同构</h2>
<p>前后台使用同一套模板写代码，渲染html。
Vue中使用VueServerRenderer.renderToString()</p>
<p>React中使用ReactDomServer.renderToString()</p>
<h2 id="_10-react-vue同构最大的难度-其实是数据部分。" tabindex="-1"><a class="header-anchor" href="#_10-react-vue同构最大的难度-其实是数据部分。" aria-hidden="true">#</a> 10.React.Vue同构最大的难度，其实是数据部分。</h2>
<p>比如前端的vuex，Redux，这些数据怎样管理使得同构部分的代码更好。
引出了next框架和nuxt框架</p>
<h2 id="_11-nuxt-js" tabindex="-1"><a class="header-anchor" href="#_11-nuxt-js" aria-hidden="true">#</a> 11.Nuxt.js</h2>
<p>Nuxt.js 是一个基于 Vue.js 的通用应用框架，一个用于Vue.js 开发SSR应用的一站式解决方案。它的优点是将原来几个配置文件要完成的内容，都整合在了一个nuxt.config.js，封装与扩展性完美的契合。</p>
<p>简单说nuxtjs项目，它其实就是一个vue的项目融合一个node.js server项目，这里node服务有两个作用，第一点是代替浏览器的工作,笼统理解就是在created时的请求数据和页面渲染，第二点是当作静态文件服务器，把渲染好的页面返回给用户。</p>
<p>12.Next.js
npx create-next-app</p>
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
<p>详情页</p>
<p>播放器</p>
<p>列表页</p>
<h2 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环" aria-hidden="true">#</a> 事件循环</h2>
<p>https://www.taopoppy.cn/node/one_eventLoop.html#%E5%85%AD%E4%B8%AA%E9%98%B6%E6%AE%B5</p>
<p><a href="https://www.jsv9000.app/" target="_blank" rel="noopener noreferrer">JS Visualizer 9000 (jsv9000.app)<ExternalLinkIcon/></a></p>
<h2 id="简单调试一个ts文件" tabindex="-1"><a class="header-anchor" href="#简单调试一个ts文件" aria-hidden="true">#</a> 简单调试一个ts文件</h2>
<p>打开控制台 JavaScript Debug Termernal
然后安装全局ts-node模块后，ts-node xxx.ts文件，
如果不想要安装，npx ts-node xxx.ts</p>
<h2 id="_304-307区别" tabindex="-1"><a class="header-anchor" href="#_304-307区别" aria-hidden="true">#</a> 304，307区别</h2>
</div></template>
