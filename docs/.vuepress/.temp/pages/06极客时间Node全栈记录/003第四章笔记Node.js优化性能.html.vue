<template><div><p>[toc]</p>
<h2 id="buffer实现内存分配管理的实现策略" tabindex="-1"><a class="header-anchor" href="#buffer实现内存分配管理的实现策略" aria-hidden="true">#</a> Buffer实现内存分配管理的实现策略</h2>
<p>会有一个8kb的内存，管理当期的小的内容。每一次有了小于8kb的Buffer,那么放入声明的8kb的空间，如果这次Buffer
使用完成，这个8Kb不会释放，留给下一个小于8Kb的Buffer使用。</p>
<p>这里其实使用了一种“内存池”的编程实现。</p>
<p>最大限度减少内存分配和销毁，减少内存分配。</p>
<h3 id="减少内存分配方式-池" tabindex="-1"><a class="header-anchor" href="#减少内存分配方式-池" aria-hidden="true">#</a> 减少内存分配方式，池</h3>
<h3 id="使用c-优化nodejs程序。c-插件。" tabindex="-1"><a class="header-anchor" href="#使用c-优化nodejs程序。c-插件。" aria-hidden="true">#</a> 使用c++优化Nodejs程序。C++插件。</h3>
<p>C++ addon(插件)
c++不可以直接运行，写完后，需要使用node-gyp插件，转换成.node文件，同时和环境有关，node转换成二进制流，才可以。</p>
<p>js可以直接运行。</p>
<p>（1）c++运算比使用js更快的部分
（2）c++变量和js变量的转换耗时
不同变量，在c++中编码和解码，在js中编码和解码</p>
<h3 id="除了单线程中的内存分配策略和插件-还有多进程和线程的考虑。" tabindex="-1"><a class="header-anchor" href="#除了单线程中的内存分配策略和插件-还有多进程和线程的考虑。" aria-hidden="true">#</a> 除了单线程中的内存分配策略和插件，还有多进程和线程的考虑。</h3>
<p>js是单线程。线程是什么意思。
线程是公司，进程是员工。
进程是最小运算单元，共享线程中的资源。</p>
<p>多线程，JavaScript相当于一个集团，这个集团中分配子线程，使用多个cpu，最大限度增加计算能力。</p>
<h4 id="偶尔出现process-send是undefined" tabindex="-1"><a class="header-anchor" href="#偶尔出现process-send是undefined" aria-hidden="true">#</a> 偶尔出现process.send是undefined</h4>
<p>如果使用 IPC 通道衍生 Node.js，则可以使用 process.send() 方法向父进程发送消息。 消息将作为父对象 ChildProcess 对象上的 'message' 事件接收。</p>
<p>如果 Node.js 没有使用 IPC 通道衍生，则 process.send 将是 undefined。</p>
<p>消息经过序列化和解析。 结果消息可能与最初发送的消息不同。</p>
<h3 id="cluster使用多核能力。" tabindex="-1"><a class="header-anchor" href="#cluster使用多核能力。" aria-hidden="true">#</a> cluster使用多核能力。</h3>
<p>为了网络服务能力创建的，多核能力。
利用全双工通信。</p>
<p>master的node主进程，会有四个子进程，四个子进程都有一个http服务。cluster模块</p>
<p>为什么cluster.fork()可以多个进程监听同一个端口，按照道理来说，一个端口监听一次，</p>
<h4 id="为什么可以监听多次一个端口-用多个进程。" tabindex="-1"><a class="header-anchor" href="#为什么可以监听多次一个端口-用多个进程。" aria-hidden="true">#</a> 为什么可以监听多次一个端口，用多个进程。</h4>
<p>其实多个进程中，内部代码的实现，并不是监听的一个端口号，二十一个文件服务的描述，</p>
<h2 id="http通信和rpc通信区别" tabindex="-1"><a class="header-anchor" href="#http通信和rpc通信区别" aria-hidden="true">#</a> HTTP通信和RPC通信区别</h2>
<h1 id="rpc通信" tabindex="-1"><a class="header-anchor" href="#rpc通信" aria-hidden="true">#</a> RPC通信</h1>
<p>remote  procedure call</p>
<h2 id="ajax区别" tabindex="-1"><a class="header-anchor" href="#ajax区别" aria-hidden="true">#</a> ajax区别</h2>
<p>RPC是什么？和ajax有什么区别
RPC是远程过程调用（remote  procedure  call）
（1）RPC和ajax都是两个计算机之间的网络通信；
（2）都是需要双方约定一个数据格式。
（3）HTTP单双工通信说明
分版本，版本不同，工作模式不同</p>
<p>http1.0：单工。因为是短连接，客户端发起请求之后，服务端处理完请求并收到客户端的响应后即断开连接。
http1.1：半双工。默认开启长连接keep-alive，开启一个连接可发送多个请求。
http2.0：全双工，允许服务端主动向客户端发送数据。（websocket,Nodejs中inspect功能，性能优化）</p>
<p>作者：意切
链接：https://www.jianshu.com/p/3ca180af7dca
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>
<p>不同点：
（1）RPC调用不一定使用DNS作为寻址服务
（2）RPC应用层协议一般不使用HTTP，一般使用二进制协议。
（3）RPC是UDP协议进行。（ajax基于HTTP协议）
（4）ajax是基于DNS寻址，RPC通信是基于特殊的服务寻址
（5）ajax是单工通信。RPC的TCP通信方式有单工通信，半双工，全双工通信。
（半双工，就是分成一个个时间片来看，一部分时间只能a-&gt;b,一部分时间只能b-&gt;a.）
(全双工，有a-&gt;b的同时，有b-&gt;a)
（6）RPC调用是二进制协议，更小的数据包的体积，更快的编码和解码速率。</p>
<h2 id="nodejs的进程守护和进程管理" tabindex="-1"><a class="header-anchor" href="#nodejs的进程守护和进程管理" aria-hidden="true">#</a> Nodejs的进程守护和进程管理</h2>
<p>利用进程中发送包和接受包的标记字段是否正常，来判断这个进程是否正常。</p>
<h2 id="架构层次的nodejs性能优化" tabindex="-1"><a class="header-anchor" href="#架构层次的nodejs性能优化" aria-hidden="true">#</a> 架构层次的Nodejs性能优化</h2>
<h3 id="静态内容" tabindex="-1"><a class="header-anchor" href="#静态内容" aria-hidden="true">#</a> 静态内容</h3>
<p>级别不会变动，也不会因为请求参数的不同而发生变化。
---优化策略
CND分发，hTTP缓存(浏览器缓存)</p>
<h3 id="动态内容" tabindex="-1"><a class="header-anchor" href="#动态内容" aria-hidden="true">#</a> 动态内容</h3>
<p>因为各种请求参数的不同发生变动，变动的种类不可枚举。
---大龄的源站（内容来源的网站）及其承载，结合反向代理进行负载均衡。</p>
<h2 id="项目架构和设计" tabindex="-1"><a class="header-anchor" href="#项目架构和设计" aria-hidden="true">#</a> 项目架构和设计</h2>
<p>开发体验
用户体验</p>
<h3 id="渐进式框架" tabindex="-1"><a class="header-anchor" href="#渐进式框架" aria-hidden="true">#</a> 渐进式框架</h3>
<p>很快的入口，简单的傻瓜化，随着入手的深入，自己可以做一些好的性能优化体验。</p>
<p>这个和KISS原则一样，傻瓜化，简单化。</p>
<h3 id="项目架构的设计性能体验" tabindex="-1"><a class="header-anchor" href="#项目架构的设计性能体验" aria-hidden="true">#</a> 项目架构的设计性能体验</h3>
<h3 id="项目架构设计的设计模式实现是项目架构的关键一环" tabindex="-1"><a class="header-anchor" href="#项目架构设计的设计模式实现是项目架构的关键一环" aria-hidden="true">#</a> 项目架构设计的设计模式实现是项目架构的关键一环</h3>
<h4 id="生搬硬套设计模式-不可以。" tabindex="-1"><a class="header-anchor" href="#生搬硬套设计模式-不可以。" aria-hidden="true">#</a> 生搬硬套设计模式，不可以。</h4>
<p>外观模式和观察者模式最可以在js中实现：vue的双向没绑定，</p>
<p>观察者模式：EventEmiter和DOM addEventListener</p>
<p>外观模式：Jqeury实现，jqery实现，封装了一个on方法，
on中的实现兼容各种浏览器方法。其实外观模式，解决兼容性问题。</p>
<h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h2>
<p>写出一个可以重用的面向对象的软件方法，就是设计模式。</p>
<h3 id="设计模式六个法则" tabindex="-1"><a class="header-anchor" href="#设计模式六个法则" aria-hidden="true">#</a> 设计模式六个法则</h3>
<ul>
<li>单一责任原则（每一个模块专注自己的职责，做一件事情）（其实微服务也是单一职责。）</li>
<li>里氏替换原则</li>
<li>依赖倒转原则</li>
<li>接口隔离</li>
<li>最小知道原则（）</li>
<li>开闭原则（不去增加原有的地方，直接扩展可以增加功能。比如webpack中不同loader,比如css-loader，ts-loader）</li>
</ul>
<h2 id="设计模式学习指导思考" tabindex="-1"><a class="header-anchor" href="#设计模式学习指导思考" aria-hidden="true">#</a> 设计模式学习指导思考</h2>
<p>学习设计模式，最主要不是学习模式，而是理解设计模式的原则，理解利用设计模式怎样做出不同的架构优秀的程序。</p>
<h2 id="serverless" tabindex="-1"><a class="header-anchor" href="#serverless" aria-hidden="true">#</a> Serverless</h2>
<p>微服务，就是一个单一职责。</p>
<h3 id="云函数-将业务函数上传到云平台" tabindex="-1"><a class="header-anchor" href="#云函数-将业务函数上传到云平台" aria-hidden="true">#</a> 云函数，（将业务函数上传到云平台）</h3>
<blockquote>
<p>不用因为运维和架构的事情操心</p>
</blockquote>
<ul>
<li>（1）缩短业务上线周期</li>
<li>（2）减少出错的概率</li>
<li>（3）业务开发上手的难度更低。</li>
</ul>
<blockquote>
<p>渐进式。
容易上手，自己开始的时候不用关心细节，只有自己需要优化的时候，才需要自己了解复杂细节。
就像webpack的配置内容一样，你不配置也可以使用。
Serverless屏蔽服务器细节
Vue/React是domles,屏蔽Dom操作细节。
Jquery是屏蔽了浏览器兼容的细节。
Nodejs是threadless,通过事件循环，底层管理线程。
JavaScript是屏蔽了类型系统的细节，屏蔽内存管理细节，</p>
</blockquote>
<h2 id="异步终极解决方案await和async" tabindex="-1"><a class="header-anchor" href="#异步终极解决方案await和async" aria-hidden="true">#</a> 异步终极解决方案await和async</h2>
<p>await好处，
可以将promise返回值赋值给最外层。可以
可以将简化一个new Promise的构造函数的实现
可以将Promise中的异步报错函数setTimeout函数捕捉到错误。</p>
</div></template>
