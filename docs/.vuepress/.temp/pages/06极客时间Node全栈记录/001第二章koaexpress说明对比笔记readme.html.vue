<template><div><p>了解一个框架的最好方法：两个方法。
关键功能
解决关键问题</p>
<h1 id="express" tabindex="-1"><a class="header-anchor" href="#express" aria-hidden="true">#</a> Express</h1>
<p>（1）丰富的路由，路由系统
（2）高性能
（3）帮助处理HTTP的能力。（重定向或是缓存）
（4）支持14+种模板引擎
（5）脚手架快速生成应用。</p>
<h1 id="express实战" tabindex="-1"><a class="header-anchor" href="#express实战" aria-hidden="true">#</a> express实战</h1>
<h2 id="_1-http简化" tabindex="-1"><a class="header-anchor" href="#_1-http简化" aria-hidden="true">#</a> 1.http简化</h2>
<p>express中的http中的send方法和http中writeHead和end是一样的。
也就是</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
成功
    res.send("hello home");//使用express

  相当于下面(使用http)
    res.writeHead(200);
    res.end('结果')


失败
    res.status(500);
    res.send('出错了服务器')

    相当于http
    res.writeHead(500);
    res.end('报错了')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="url-parse和querystring-包" tabindex="-1"><a class="header-anchor" href="#url-parse和querystring-包" aria-hidden="true">#</a> url.parse和queryString，包</h2>
<p>express默认自动将请求url进行了处理，不用使用url和querystring包</p>
<p>req.querystring</p>
<p>req.url</p>
<h2 id="express会根据我们返回的数据格式-将http返回包-处理成想要的样子" tabindex="-1"><a class="header-anchor" href="#express会根据我们返回的数据格式-将http返回包-处理成想要的样子" aria-hidden="true">#</a> express会根据我们返回的数据格式，将http返回包，处理成想要的样子</h2>
<h2 id="express有中间件的能力。" tabindex="-1"><a class="header-anchor" href="#express有中间件的能力。" aria-hidden="true">#</a> express有中间件的能力。</h2>
<p>next。进一步将不同的逻辑，分入不同的块，不同的部分分离。
通过next将一个回调，传入另一个。
将中间件内容传入res中。</p>
<h2 id="中间件的洋葱模型。" tabindex="-1"><a class="header-anchor" href="#中间件的洋葱模型。" aria-hidden="true">#</a> 中间件的洋葱模型。</h2>
<p>next是一个普通函数，会执行进入，然后又返回传出。
但是如果next后一个setTimeout函数，那么next函数因为是同步执行的，就会导致setTImeout中的异步结果无法正常拿到。</p>
<p>由于洋葱模型的异步处理不完善，出现了koa。出现。
洋葱模型同步的时候很好。</p>
<h1 id="koa" tabindex="-1"><a class="header-anchor" href="#koa" aria-hidden="true">#</a> Koa</h1>
<h2 id="koa的中间件可以支持async和await。" tabindex="-1"><a class="header-anchor" href="#koa的中间件可以支持async和await。" aria-hidden="true">#</a> koa的中间件可以支持async和await。</h2>
<p>实现优化洋葱模型。</p>
<h2 id="区别于express-返回只有一个ctx的内容中只有一个封装。" tabindex="-1"><a class="header-anchor" href="#区别于express-返回只有一个ctx的内容中只有一个封装。" aria-hidden="true">#</a> 区别于express，返回只有一个ctx的内容中只有一个封装。</h2>
<p>ctx.request
ctx.response</p>
<h2 id="请求和返回的处理" tabindex="-1"><a class="header-anchor" href="#请求和返回的处理" aria-hidden="true">#</a> 请求和返回的处理</h2>
<h2 id="koa没有路由处理功能。" tabindex="-1"><a class="header-anchor" href="#koa没有路由处理功能。" aria-hidden="true">#</a> koa没有路由处理功能。</h2>
<p>koa不绑定任何的中间件。</p>
<h1 id="对比express" tabindex="-1"><a class="header-anchor" href="#对比express" aria-hidden="true">#</a> 对比express</h1>
<p>（1）express门槛更低，不用了解异步，koa更加优雅
（2）express封装更多，koa定制化更多。
（3）express小型应用，koa应用大型应用。</p>
<h1 id="rpc通信" tabindex="-1"><a class="header-anchor" href="#rpc通信" aria-hidden="true">#</a> RPC通信</h1>
<p>remote  procedure call</p>
<h2 id="ajax区别" tabindex="-1"><a class="header-anchor" href="#ajax区别" aria-hidden="true">#</a> ajax区别</h2>
<p>RPC是什么？和ajax有什么区别
RPC是远程过程调用（remote  procedure  call）
（1）RPC和ajax都是两个计算机之间的网络通信；
（2）都是需要双方约定一个数据格式。
不同点：
（1）RPC调用不一定使用DNS作为寻址服务
（2）RPC应用层协议一般不使用HTTP，一般使用二进制协议。
（3）RPC是UDP协议进行。（ajax基于HTTP协议）
（4）ajax是基于DNS寻址，RPC通信是基于特殊的服务寻址
（5）ajax是单工通信。RPC的TCP通信方式有单工通信，半双工，全双工通信。
（半双工，就是分成一个个时间片来看，一部分时间只能a-&gt;b,一部分时间只能b-&gt;a.）
(全双工，有a-&gt;b的同时，有b-&gt;a)
（6）RPC调用是二进制协议，更小的数据包的体积，更快的编码和解码速率。</p>
<h1 id="buffer二进制数据包的编码和解码" tabindex="-1"><a class="header-anchor" href="#buffer二进制数据包的编码和解码" aria-hidden="true">#</a> Buffer二进制数据包的编码和解码</h1>
<h2 id="buffer常用的方法" tabindex="-1"><a class="header-anchor" href="#buffer常用的方法" aria-hidden="true">#</a> Buffer常用的方法</h2>
<p>Buffer.from
Buffer.alloc
Buffer.allocUnsafe</p>
<p>__dirname所有的文件地址前面加上这个魔术变量</p>
</div></template>
