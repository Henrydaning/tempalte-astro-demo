<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_1-首先这两个问题-有相关性-没有可比性">（1）首先这两个问题，有相关性，没有可比性</RouterLink></li><li><RouterLink to="#_2-query和body">（2）query和body</RouterLink></li><li><RouterLink to="#_3-url和路由">（3）URL和路由</RouterLink></li><li><RouterLink to="#_2-前端路由策略">2.前端路由策略</RouterLink><ul><li><RouterLink to="#那么前端路由的控制本质上是两个方面">那么前端路由的控制本质上是两个方面</RouterLink></li></ul></li><li><RouterLink to="#_3-query和body">3.query和body</RouterLink></li><li><RouterLink to="#_4-前端路由传参">4.前端路由传参</RouterLink></li><li><RouterLink to="#_5-经典网页退出或是切换的时候发送请求">5.经典网页退出或是切换的时候发送请求</RouterLink><ul><li><RouterLink to="#_6-异步调度器完成对于任务的控制-字节">6.异步调度器完成对于任务的控制---字节</RouterLink></li></ul></li></ul></nav>
<p>##1.URL是什么?query是什么？</p>
<h3 id="_1-首先这两个问题-有相关性-没有可比性" tabindex="-1"><a class="header-anchor" href="#_1-首先这两个问题-有相关性-没有可比性" aria-hidden="true">#</a> （1）首先这两个问题，有相关性，没有可比性</h3>
<p>url是统一资源定位符
location对象（windos.location）中存储着URL对象</p>
<h3 id="_2-query和body" tabindex="-1"><a class="header-anchor" href="#_2-query和body" aria-hidden="true">#</a> （2）query和body</h3>
<p>query是URL中的一部分参数？(问号)后面，传递url中的简单键值对，请求头中的内容
query和body对应
query传参，一般是get方法中想要获取?name=aa
query是name=a相当于获取这个内容</p>
<p>body中请求体可以存储一部分信息，所以存储信息更多，所以post的方法的时候，不会通过query，会将请求的类型content-type进行修改（context-type:josn），提交大文件请求</p>
<h3 id="_3-url和路由" tabindex="-1"><a class="header-anchor" href="#_3-url和路由" aria-hidden="true">#</a> （3）URL和路由</h3>
<p>URL
首先这里明确，同源
https://baidu.com:8080?name=2
https://baidu.com:8080?name=22</p>
<p>一个URL请求分为，协议，端口，域名
协议：https
端口：8080（一般默认可以没有）
域名：baidu.com(这个是顶级域名)
至于之后的那些乱起八糟的参数只是内容的一些区分</p>
<p>URL处理get参数的内容
GET参数处理两种方式
params方式
http://localhost:3000/testparams/lixing
req.params.XX</p>
<p>query方式
http://localhost:3000/?id=1&amp;name=xiaoning
(node中的模块querystring模块，express中)
req.query.id = 1
req.query.name = xiaoning</p>
<p>对于KOA中使用了一些变化ctx代替了req和res上下文
ctx.request是context经过封装的请求对象，ctx.req是context提供的node.js原生HTTP请求对象，同理ctx.response是context经过封装的响应对象，ctx.res是context提供的node.js原生HTTP请求对象</p>
<p>GET请求
请求对象ctx.request.query，返回如 { a:1, b:2 }
请求字符串 ctx.request.querystring，返回如 a=1&amp;b=2</p>
<p>POST请求
对于POST请求的处理，koa2没有封装获取参数的方法，
需要通过解析上下文context中的原生node.js请求对象req，将POST表单数据解析成query string（例如：a=1&amp;b=2&amp;c=3），再将query string 解析成JSON格式（例如：{&quot;a&quot;:&quot;1&quot;, &quot;b&quot;:&quot;2&quot;, &quot;c&quot;:&quot;3&quot;}）</p>
<p>koa-bodyparse
koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中</p>
<h2 id="_2-前端路由策略" tabindex="-1"><a class="header-anchor" href="#_2-前端路由策略" aria-hidden="true">#</a> 2.前端路由策略</h2>
<p>路由是之前前台不用关系，因为下发了一个URL就相当于一个路由，后台收到之后，讲CSS和JS和HTML三者合做好，返回前台，点击哪一个请求，返回哪个</p>
<p>但是ajax和单页面应用出现之后，导致前台可以在本页面切换路由不刷新页面，或是跳转在前台完成一部分，所以前端路由的概念应运而生</p>
<h3 id="那么前端路由的控制本质上是两个方面" tabindex="-1"><a class="header-anchor" href="#那么前端路由的控制本质上是两个方面" aria-hidden="true">#</a> 那么前端路由的控制本质上是两个方面</h3>
<p>1.避免浏览器刷新页面</p>
<p>2.可以通过事件监听的方式来实时获取路由</p>
<p>避免浏览器刷新的方法
hash</p>
<p>可以跳转并增加历史记录的两种方法：
location.hash
location.assign()</p>
<p>可以替换当前的页面，不出现历史记录的方法
location.replace()</p>
<p>可以直接重载页面的方法
location = location
location.reload();
history.go()</p>
<p>监听路由的变化
hashchange用window.onhashchange监听</p>
<p>拓展H5的前端路由策略
HTML5新增了可以浏览器刷新和跳转的API</p>
<p>新增加的方法是popstate,通过window.addEventer('popstatus',fn)</p>
<p>新增的API两种跳转，三个参数</p>
<p>history.pushState和assign</p>
<p>history.replaceState</p>
<p>应用实例</p>
<p>window.onpopstate = function(event) {
console.log(&quot;location: &quot; + document.location + &quot;, state: &quot; + JSON.stringify(event.state));
};
在这里我们监听一下页面url的变化
这里只有3个方法，才能触发popsate
forword()或back(),go(n)
其他的replace或是replaceState都无法触发</p>
<h2 id="_3-query和body" tabindex="-1"><a class="header-anchor" href="#_3-query和body" aria-hidden="true">#</a> 3.query和body</h2>
<p>query
query是一般是get方法的参数？后面的键值对
query存在于请求头中</p>
<p>body存在于请求体中</p>
<p>请求头的编码方式
当使用不同的内容进行传递时候，请求头需要conten-type</p>
<p>比较两种键值对的不同编码区别
application/json和application/x-www-form-urlencoded
两种请求方式对服务器端都没什么影响
application/x-www-form-urlencoded方式是比较老的一种方式，这种方式的好处就是浏览器都支持</p>
<p>总结
application/json，随着json规范的越来越流行，并且浏览器支持程度原来越好，许多开发人员易application/json作为请求content-type，只需要提交前JSON.stringfy(data)JSON化字符串</p>
<p>告诉服务器请求的主题内容是json格式的字符串，服务器端会对json字符串进行解析，</p>
<p>这种方式的好处就是前端人员不需要关心数据结构的复杂度，</p>
<p>只要是标准的json格式就能提交成功，application/json数据格式越来越得到开发人员的青睐</p>
<p>举例. 向服务器发送数据 {a:&quot;a&quot;, b:&quot;b&quot;}</p>
<p>如果头的格式是application/x-www-form-urlencoded,  则ajax.send(&quot;a='a'&amp;b='b'&quot;);</p>
<p>如果头的格式是application/json, 则ajax.send(JSON.stringify(data));</p>
<p>另外其他的两种‘
multipart/form表单提交
text/xml这个是xml提交</p>
<h2 id="_4-前端路由传参" tabindex="-1"><a class="header-anchor" href="#_4-前端路由传参" aria-hidden="true">#</a> 4.前端路由传参</h2>
<p>关于#号在浏览器中直接截断的问题
http://localhost:8080/index.jsp?parameter=kalman03#kalman#1
或许你预期在服务器端获得的parameter的结果为kalman03#kalman#1,错！！！实际上得到parameter的值为kalman03。
这究竟是为什么呢？</p>
<p>parameter的值含有特殊字符#，浏览器自动截断#字符和其后面的值，这样得到的值就为kalman03。</p>
<p>如果非要传#,解决方案
通过post方式传递数据；</p>
<p>都可以在url地址中，restAPI中的get请求和一些query传参的对比
比如下面
query:http://XXX/1.php?a=23&amp;b=3
这个时候我们querystring.a或是querystring.b
(node中的一个模块做这个事情)</p>
<p>如果
params:http://xxx/index/23/3
这个请求的好处
更加易于SEO优化</p>
<h2 id="_5-经典网页退出或是切换的时候发送请求" tabindex="-1"><a class="header-anchor" href="#_5-经典网页退出或是切换的时候发送请求" aria-hidden="true">#</a> 5.经典网页退出或是切换的时候发送请求</h2>
<p><a href="https://app.yinxiang.com/shard/s37/nl/24388549/fb8a539c-bdef-4d80-86c1-c6ddab942a3d" target="_blank" rel="noopener noreferrer">退出或是切换页面调用接口<ExternalLinkIcon/></a></p>
<h3 id="_6-异步调度器完成对于任务的控制-字节" tabindex="-1"><a class="header-anchor" href="#_6-异步调度器完成对于任务的控制-字节" aria-hidden="true">#</a> 6.异步调度器完成对于任务的控制---字节</h3>
<p><a href="https://app.yinxiang.com/shard/s37/nl/24388549/e8707d44-3f76-4b1d-a96b-6628aff6796d" target="_blank" rel="noopener noreferrer">000---JavaScript实现一个带并发限制的异步调度器，保证同时最多运行2个任务_IsPinocchio的博客-CSDN博客_js异步并发控制<ExternalLinkIcon/></a></p>
</div></template>
