<template><div><p>[toc]</p>
<p>记录研究编程猫所有依赖研究学习</p>
<h1 id="react编写" tabindex="-1"><a class="header-anchor" href="#react编写" aria-hidden="true">#</a> react编写</h1>
<h2 id="_1-lottie-web-light" tabindex="-1"><a class="header-anchor" href="#_1-lottie-web-light" aria-hidden="true">#</a> 1.lottie-web-light</h2>
<p>轻量的svg，canvas动画组件</p>
<p>相关补充学习·：<a href="https://app.yinxiang.com/shard/s37/nl/24388549/08bb2f56-f7fe-4b2b-ac68-b3ef91c6314a" target="_blank" rel="noopener noreferrer">009---lottie-web 实践与应用 - 掘金 (yinxiang.com)<ExternalLinkIcon/></a></p>
<p>官方API地址：<a href="http://airbnb.io/lottie/#/" target="_blank" rel="noopener noreferrer">Lottie Docs (airbnb.io)<ExternalLinkIcon/></a></p>
<h3 id="补充学习lottie" tabindex="-1"><a class="header-anchor" href="#补充学习lottie" aria-hidden="true">#</a> 补充学习lottie</h3>
<p>上面是Lottie官方提供的官方效果图。Lottie是一个库，可以解析使用AE制作的动画（需要用bodymovin导出为json格式），支持web、ios、android和react native。在web侧，lottie-web库可以解析导出的动画json文件，并将其以svg或者canvas的方式将动画绘制到我们页面中。</p>
<h4 id="_1-lottie优点" tabindex="-1"><a class="header-anchor" href="#_1-lottie优点" aria-hidden="true">#</a> （1）lottie优点</h4>
<p>Lottie方法方案是由设计师出动画，导出为json，给前端播放。所以，使用Lottie方案的好处在于：</p>
<ul>
<li>动画由设计使用专业的动画制作工具Adobe After Effects来实现，使动画实现更加方便，动画效果也更好；</li>
<li>前端可以方便的调用动画，并对动画进行控制，减少前端动画工作量；</li>
<li>设计制作动画，前端展现动画，专业人做专业事，分工合理；</li>
<li>卖家秀即买家秀，还原程度百分之百；</li>
<li>使用lottie方案，json文件大小会比gif文件小很多，性能也会更好。</li>
</ul>
<h4 id="_2-lottie缺点" tabindex="-1"><a class="header-anchor" href="#_2-lottie缺点" aria-hidden="true">#</a> （2）lottie缺点：</h4>
<ul>
<li>lottie-web文件本身仍然比较大，lottie.js大小为513k，轻量版压缩后也有144k，经过gzip后，大小为39k。所以，需要注意lottie-web的加载。目前H5项目有离线包，PC项目也会上PWA，会对其进行缓存，保证加载速度。（这个所以有了lottie-web-light轻量级npm包）</li>
<li>lottie动画其实可以理解为svg动画/canvas动画，不能给已存在的html添加动画效果；</li>
<li>动画json文件的导出，目前是将AE里面的参数一一导出成json内容，如果设计师建了很多的图层，可能仍然有json文件比较大（20kb）的问题。需要设计师遵循一定的规范。</li>
<li>有很少量的AE动画效果，lottie无法实现，有些是因为性能问题，有些是没有做。比如：描边动画等。</li>
</ul>
<p>详情：<a href="https://app.yinxiang.com/shard/s37/nl/24388549/2995a88b-aabe-4106-ace1-9374581a478f" target="_blank" rel="noopener noreferrer">lottie系列文章(一)：lottie介绍 - 腾讯云开发者社区-腾讯云 (yinxiang.com)<ExternalLinkIcon/></a></p>
<p>文章汇总</p>
<h2 id="_2-pix-core动画库-暂时不做讨论" tabindex="-1"><a class="header-anchor" href="#_2-pix-core动画库-暂时不做讨论" aria-hidden="true">#</a> 2.pix/core动画库，暂时不做讨论</h2>
<p>这个是yigedognhuaku</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>其他库
@pixi/graphics
@pixi/canvas-renderer
@pixi/ticker
@pixi/sprite-tiling
@pixi/utils
@pixi/filter-color-matrix
@pixi/sprite
@pixi/mixin-cache-as-bitmap
@pixi/canvas-graphics
@pixi/sprite-animated
@pixi/spritesheet
@pixi/mixin-get-child-by-name

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@pixi/filter-kawase-blur:PixiJS 滤镜，用于将替代的快速模糊效果应用于高斯。</p>
<p>@pixi/settings:收集整个Pixi.JS中使用的用户可配置设置</p>
<p>@pixi/filter-drop-shadow：Pixi JS过滤器应用阴影效果。</p>
<p>@pixi/filter-twist：将扭曲效果用于图</p>
<h2 id="_3-shopify-draggable" tabindex="-1"><a class="header-anchor" href="#_3-shopify-draggable" aria-hidden="true">#</a> 3.@shopify/draggable</h2>
<p><a href="https://shopify.github.io/draggable/examples/" target="_blank" rel="noopener noreferrer">官方案例学习 | Draggable JS Examples (shopify.github.io)<ExternalLinkIcon/></a></p>
<p>拖拽控制。</p>
<h2 id="_4-react-intl-待研究-学习" tabindex="-1"><a class="header-anchor" href="#_4-react-intl-待研究-学习" aria-hidden="true">#</a> 4.react-intl---待研究 学习</h2>
<p>同时支持Node,react,vue3</p>
<p><a href="https://formatjs.io/docs/getting-started/installation/" target="_blank" rel="noopener noreferrer">官方API地址JS (formatjs.io)<ExternalLinkIcon/></a></p>
<p>formatjs 是一组库，可帮助您在任何项目中设置国际化，无论它是否是 React。</p>
<h2 id="_5-canvg-browser" tabindex="-1"><a class="header-anchor" href="#_5-canvg-browser" aria-hidden="true">#</a> 5.canvg-browser</h2>
<p>将canvas装成svg绘制</p>
<h2 id="_6-inversify-控制反转-js中内容" tabindex="-1"><a class="header-anchor" href="#_6-inversify-控制反转-js中内容" aria-hidden="true">#</a> 6.inversify---控制反转，js中内容</h2>
<p><a href="https://inversify.io/" target="_blank" rel="noopener noreferrer">InversifyJS a powerful IoC container for JavaScript apps powered by TypeScript<ExternalLinkIcon/></a></p>
<p>一个强大且轻量级的控制容器反转，用于由 Type Script 提供支持的 Java Script 和 Node.js 应用程序。</p>
<p>控制反转，一句话总结：控制反转这里控制权从使用者本身转移到第三方容器上，而非是转移到被调用者上，这里需要明确不要疑惑。</p>
<p><a href="https://www.cnblogs.com/pqjwyn/p/9846292.html" target="_blank" rel="noopener noreferrer">前端解读控制反转(IOC) - 潇湘待雨 - 博客园 (cnblogs.com)<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>总结内容
IOC是控制反转，inversion of control，是面向对象编程的一种设计原则，降低代码耦合。
实现
上面其实就是最简单的IOC实现了，基于IOC的编程思想，主要有两种实现方式：依赖注入和依赖查找。依赖查不太常用，常见的是依赖注入。

依赖注入
在js中常见的就是依赖注入。从名字上理解，所谓依赖注入，即组件之间的依赖关系由容器在运行期决定，形象的来说，即由容器动态的将某种依赖关系注入到组件之中。

在RequireJS/AMD的模块加载器的实现就是基于依赖注入来的，还有大名鼎鼎的angular，其实现也使用了大量的依赖注入。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[009---<a href="https://app.yinxiang.com/shard/s37/nl/24388549/562abf74-9165-43ba-a76f-813c1d0a096f" target="_blank" rel="noopener noreferrer">译]javascript中的依赖注入 - 潇湘待雨 - 博客园 (yinxiang.com)<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>我们想要达到的目标：

---可以注册依赖
---注入器应该接受一个函数并且返回一个已经获得需要资源的函数
---我们不应该写复杂的代码，需要简短优雅的语法
---注入器应该保持传入函数的作用域
---被传入的函数应该可以接受自定义参数，不仅仅是被描述的依赖
比较错误的方式 
//a.js
var a = doSomething(service,router,1)
//b.js 
var b = doSomething(service,router,2)
// 假如依赖条件更改了，即doSomething需要第三个依赖，才能正常工作
// 这时候就需要在上面不同文件中修改了，如果文件数量够多，就不合适了。
var doSomething = function(service, router, third,thother) {
    var s = service();
    var r = router();
    //***
};

---------------------------------更好的解决方案
var doSomething = injector.resolve(function(service, other, router) {
    expect(service().name).to.be('Service');
    expect(router().name).to.be('Router');
    expect(other).to.be('Other');
});
doSomething("Other");

上面的内容resolve函数使用
resolve: function() {
    // agrs 传给func的参数数组，包括依赖模块及自定义参数
    var func, deps, scope, args = [], self = this;
    // 获取传入的func，主要是为了下面来拆分字符串
    func = arguments[0];
    // 正则拆分，获取依赖模块的数组
    deps = func.toString().match(/^functions*[^(]*(s*([^)]*))/m)[1].replace(/ /g, '').split(',');
    //待绑定作用域，不存在则不指定
    scope = arguments[1] || {};
    return function() {
        // 将arguments转为数组
        // 即后面再次调用的时候，doSomething("Other");   
        // 这里的Other就是a，用来补充缺失的模块。
        var a = Array.prototype.slice.call(arguments, 0);
        //循环依赖模块数组
        for(var i=0; i&lt;deps.length; i++) {
            var d = deps[i];
            // 依赖队列中模块存在且不为空的话，push进参数数组中。
            // 依赖队列中不存在对应模块的话从a中取第一个元素push进去(shift之后，数组在改变)
            args.push(self.dependencies[d] &amp;&amp; d != '' ? self.dependencies[d] : a.shift());
        }
        //依赖当做参数传入
        func.apply(scope || {}, args);
    }        
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-howler" tabindex="-1"><a class="header-anchor" href="#_6-howler" aria-hidden="true">#</a> 6.howler</h2>
<p>音频库，默认返回一个H5Audio音频库。</p>
<h2 id="_7-fingerprintjs" tabindex="-1"><a class="header-anchor" href="#_7-fingerprintjs" aria-hidden="true">#</a> 7. fingerprintjs</h2>
<p>浏览器指纹。（新用户还是老用户还是机器人）</p>
<p>最主要的需求就是判断本次请求的用户到底是新用户还是老用户还是机器人。通过request去分析ip、ua、mac地址都有各种缺点导致不准确。
Fingerprintjs2 是通过纯前端原生js实现的浏览器指纹采集器，通过获取浏览器中所有能获取到的信息(部分通过base64转成String)，最后生成出md5，用于该用户在该设备上的唯一标识码，官方宣称准确度高达99.5%</p>
<h2 id="_8-localforage-建议使用这个包-react-localforage" tabindex="-1"><a class="header-anchor" href="#_8-localforage-建议使用这个包-react-localforage" aria-hidden="true">#</a> 8.localforage(建议使用这个包：react-localforage)</h2>
<p>快速简单存储库支持，支持indexDB和webSQL，如果不支持的浏览器， 通过localStrage适配。</p>
<p>如果使用了indexDB，那么项目中建议使用。</p>
<p>react-localforage</p>
<h2 id="_9-xmldom" tabindex="-1"><a class="header-anchor" href="#_9-xmldom" aria-hidden="true">#</a> 9.xmldom</h2>
<p>xml解析器，将xml装成dom元素</p>
<h2 id="_10-engine-io-client" tabindex="-1"><a class="header-anchor" href="#_10-engine-io-client" aria-hidden="true">#</a> 10.engine.io-client</h2>
<p>引擎客户端，给予跨设备浏览器传输双向通信的soketIO</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>非常简单
const { Socket } = require('engine.io-client');
const socket = new Socket('ws://localhost');
socket.on('open', () => {
  socket.on('message', (data) => {});
  socket.on('close', () => {});
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-formatjs-icu-messageformat-parser" tabindex="-1"><a class="header-anchor" href="#_11-formatjs-icu-messageformat-parser" aria-hidden="true">#</a> 11.@formatjs/icu-messageformat-parser</h2>
<p>手工编写ICU消息格式解析器，输出与intl消息格式解析器兼容，但是速度是后者的6-10倍。</p>
<p>intl-messageformat，多语言处理</p>
<p>开发多国语言的项目时，为了给不同国家用户显示不同语言，我们一般会为每个语言分别建立一个Map映射，在界面上依据当前语言环境不同而输出不同语言库</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>intl-messageformat 是一个用来辅助处理多语言的库，可以支持在字符串中输出变量，还可以支持复数形式。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-harmmer" tabindex="-1"><a class="header-anchor" href="#_12-harmmer" aria-hidden="true">#</a> 12.harmmer</h2>
<p>单点或是多点触摸手势库。</p>
<p>检测触摸手势的 JavaScript 库,单点或是多点触摸手势。</p>
<h2 id="_13-buffer" tabindex="-1"><a class="header-anchor" href="#_13-buffer" aria-hidden="true">#</a> 13.buffer</h2>
<p>缓冲区读取模块。</p>
<h2 id="_14-perfect-scrollbar" tabindex="-1"><a class="header-anchor" href="#_14-perfect-scrollbar" aria-hidden="true">#</a> 14.perfect-scrollbar</h2>
<p>react的封装，react-perfect-scrollbar</p>
<p>完美的滚动条。</p>
<ul>
<li>滚动条滚动状态进度</li>
<li>滚动条任意的控制</li>
<li>滚动到顶部</li>
<li>scrollspy滚动锚点对应</li>
</ul>
<h2 id="_15-sizzle" tabindex="-1"><a class="header-anchor" href="#_15-sizzle" aria-hidden="true">#</a> 15.sizzle</h2>
<p>简单的css选择器引擎，和jquery绑定。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Sizzle选择器引擎的主要工作就是向上兼容querySelectorAll的这个API，假如所有浏览器都支持querySelectorAll，那么Sizzle也就没有存在的必要了

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-react-draggle" tabindex="-1"><a class="header-anchor" href="#_16-react-draggle" aria-hidden="true">#</a> 16.react-draggle</h2>
<p>让react的拖拽更加简单。</p>
<h2 id="_13-resource-loader" tabindex="-1"><a class="header-anchor" href="#_13-resource-loader" aria-hidden="true">#</a> 13.resource-loader</h2>
<p>远程资源加载器</p>
<p>方便异步加载完成数据后，进行数据 处理准备。 消除不同浏览器为了加载 数据公开 的API</p>
<p>比如：常常 有一些样式库 和资源库加载完成 ，我们才可以操作dom或是样式。</p>
<h2 id="_14-anime-js" tabindex="-1"><a class="header-anchor" href="#_14-anime-js" aria-hidden="true">#</a> 14.anime.js</h2>
<p>轻量级js引擎动画库。</p>
<h2 id="_15-decimal-js-light" tabindex="-1"><a class="header-anchor" href="#_15-decimal-js-light" aria-hidden="true">#</a> 15.decimal.js-light</h2>
<p>任意精度的十进制类型。</p>
<h2 id="_16-socket-io-client" tabindex="-1"><a class="header-anchor" href="#_16-socket-io-client" aria-hidden="true">#</a> 16.socket.io-client</h2>
<p>socket.io客户端。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>注意：如果查看所有的客户端输出，那么浏览器控制台 下面 命令，然后重载页面。
localStorage.debug = '*';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_17-math-expression-evaluator" tabindex="-1"><a class="header-anchor" href="#_17-math-expression-evaluator" aria-hidden="true">#</a> 17.math-expression-evaluator</h2>
<p>灵活的数学表达式支持。</p>
<p>数学表达式支持实现。</p>
<h2 id="_18-reflect-metadata" tabindex="-1"><a class="header-anchor" href="#_18-reflect-metadata" aria-hidden="true">#</a> 18.reflect-metadata</h2>
<p>装饰起的拓展语法，对于元数据 处理。</p>
<h2 id="_19-formatjs-intl" tabindex="-1"><a class="header-anchor" href="#_19-formatjs-intl" aria-hidden="true">#</a> 19.@formatjs/intl</h2>
<p>国际化API库。</p>
<h2 id="_20-util" tabindex="-1"><a class="header-anchor" href="#_20-util" aria-hidden="true">#</a> 20.util</h2>
<p>对于Node的功能模块的浏览器支持。</p>
<p>This implements the Node.js <a href="https://nodejs.org/docs/latest-v8.x/api/util.html" target="_blank" rel="noopener noreferrer"><code v-pre>util</code><ExternalLinkIcon/></a> module for environments that do not have it, like browsers</p>
<h2 id="_21-tslib" tabindex="-1"><a class="header-anchor" href="#_21-tslib" aria-hidden="true">#</a> 21.tslib</h2>
<p>作用：提供ts运行时的所有助手函数。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
    "compilerOptions": {
        "importHelpers": true
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_22-earcut" tabindex="-1"><a class="header-anchor" href="#_22-earcut" aria-hidden="true">#</a> 22.earcut</h2>
<p>多边三角形测量库。</p>
<p>优化处理扭曲的图形，将结果处理成可以接受的结果。</p>
<h2 id="_23-engine-io-parser" tabindex="-1"><a class="header-anchor" href="#_23-engine-io-parser" aria-hidden="true">#</a> 23.engine.io-parser</h2>
<p>这是用于 engine.io 协议编码的 JavaScript 解析器</p>
<ul>
<li>在浏览器中对数组缓冲区或 Blob 进行编码，在节点中对数组缓冲区或数组缓冲区进行编码</li>
</ul>
<h2 id="_24-regenerator-runtime" tabindex="-1"><a class="header-anchor" href="#_24-regenerator-runtime" aria-hidden="true">#</a> 24.regenerator-runtime</h2>
<p>兼容async/await的语法</p>
<p>regeneratorRuntime是webpack打包生成的全局辅助函数，由babel生成，用于<strong>兼容async/await的语法</strong>。</p>
<p>可以简单引入</p>
<h2 id="_25-events" tabindex="-1"><a class="header-anchor" href="#_25-events" aria-hidden="true">#</a> 25.events</h2>
<p>Node的事件系统。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var EventEmitter = require('events')

var ee = new EventEmitter()
ee.on('message', function (text) {
  console.log(text)
})
ee.emit('message', 'hello world')
类似于事件总线。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_26-color-convert" tabindex="-1"><a class="header-anchor" href="#_26-color-convert" aria-hidden="true">#</a> 26.color-convert</h2>
<p>颜色转换器。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var convert = require('color-convert');
 
convert.rgb.hsl(140, 200, 100);             // [96, 48, 59]
convert.keyword.rgb('blue');
颜色转为十六进制
convert.rgb.hex(123, 45, 67);      // '7B2D43'
convert.rgb.hex([123, 45, 67]);    // '7B2D43'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="补充各种颜色模型" tabindex="-1"><a class="header-anchor" href="#补充各种颜色模型" aria-hidden="true">#</a> 补充各种颜色模型</h4>
<p><code v-pre>hwb()</code>，<code v-pre>lab()</code>并且<code v-pre>lch()</code>目前仅在 Safari 中受支持。</p>
<ul>
<li>HSV(hue,saturation,value)颜色空间的模型，HSV模型对应于画家配色的方法</li>
<li>HSI色彩空间是从人的视觉系统出发，HSI色彩空间和RGB色彩空间只是同一物理量的不同表示法，因而它们之间存在着 转换关系。</li>
<li>RGB(red,green,blue)颜色空间最常用的用途就是显示器系统</li>
<li>CMYK(cyan,magenta,yellow)颜色空间应用于印刷工业</li>
<li>HSL(hue,saturation,lightness)颜色空间，这个颜色空间都是用户台式机图形程序的颜色表示</li>
<li>HSB(hue,saturation,brightness)颜色空间，这个颜色空间都是用户台式机图形程序的颜色表示，</li>
<li>Lab颜色空间是由CIE(国际照明委员会)制定的一种色彩模式。自然界中任何一点色都可以在Lab空间 中表达出来，它的色彩空间比RGB空间还要大。以数字化方式来描述人的视觉感应， 与设备无关，所以它弥补了RGB和CMYK模式必须依赖于设备色彩特性的不足</li>
<li>YUV颜色空间在现代彩色电视系统</li>
</ul>
<h2 id="_27-rgbcolor" tabindex="-1"><a class="header-anchor" href="#_27-rgbcolor" aria-hidden="true">#</a> 27.rgbcolor</h2>
<p>它接受一个字符串并尝试从中找出一个有效的颜色</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rgb(0, 23, 255)
#336699
ffee66
fb0
red
darkblue
cadet blue

var color = new RGBColor('darkblue');
if (color.ok) { // 'ok' is true when the parsing was a success
    // alert channels
    alert(color.r + ', ' + color.g + ', ' + color.b);
    // alert HEX and RGB
    alert(color.toHex());
    alert(color.toRGB());
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>、</p>
<h2 id="_28-hashids" tabindex="-1"><a class="header-anchor" href="#_28-hashids" aria-hidden="true">#</a> 28.hashids</h2>
<p>生成唯一的数据库id.小型的 JavaScript 库，用于从数字生成类似 YouTube 的 ID</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>支持tsconfig.json配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_29-debug" tabindex="-1"><a class="header-anchor" href="#_29-debug" aria-hidden="true">#</a> 29.debug</h2>
<p>console.log可以传入参数控制输出 颜色，但是毕竟不方便， dehub可以 方便 输出自己的调试信息。下载量过亿了。</p>
<p>（js中简单：%c表示颜色，第二个参数配置颜色</p>
<p>console.log(&quot;This is %cMy stylish message&quot;, &quot;color: yellow; font-style: italic; background-color: blue;padding: 2px&quot;);）</p>
<table>
<thead>
<tr>
<th>Formatter</th>
<th>Representation</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>%O</code></td>
<td>Pretty-print an Object on multiple lines.</td>
</tr>
<tr>
<td><code v-pre>%o</code></td>
<td>Pretty-print an Object all on a single line.</td>
</tr>
<tr>
<td><code v-pre>%s</code></td>
<td>String.</td>
</tr>
<tr>
<td><code v-pre>%d</code></td>
<td>Number (both integer and float).</td>
</tr>
<tr>
<td><code v-pre>%j</code></td>
<td>JSON. Replaced with the string '[Circular]' if the argument contains circular references.</td>
</tr>
<tr>
<td><code v-pre>%%</code></td>
<td>Single percent sign ('%'). This does not consume an argument.</td>
</tr>
</tbody>
</table>
<p>node程序使用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>运行node程序时，加上DEBUG=app环境变量即可。
比如：DEBUG=app node 01.js

注意：node在0.11.3版本也加入了util.debuglog()用于打印调试日志，使用方法跟debug模块大同小异。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_30-socker-io-parser" tabindex="-1"><a class="header-anchor" href="#_30-socker-io-parser" aria-hidden="true">#</a> 30.socker.io-parser</h2>
<p>A socket.io encoder and decoder written in JavaScript complying with version <code v-pre>5</code> of <a href="https://github.com/socketio/socket.io-protocol" target="_blank" rel="noopener noreferrer">socket.io-protocol<ExternalLinkIcon/></a>. Used by <a href="https://github.com/automattic/socket.io" target="_blank" rel="noopener noreferrer">socket.io<ExternalLinkIcon/></a> and <a href="https://github.com/automattic/socket.io-client" target="_blank" rel="noopener noreferrer">socket.io-client<ExternalLinkIcon/></a>.</p>
<p>socket消息的编码和解码器。</p>
<h2 id="_31-stackblur" tabindex="-1"><a class="header-anchor" href="#_31-stackblur" aria-hidden="true">#</a> 31.stackblur</h2>
<p>可以操作a Uint8 pixel array数据转换</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var stackblur = require('stackblur');
stackblur( pixels, width, height, radius )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_32-recorder-js" tabindex="-1"><a class="header-anchor" href="#_32-recorder-js" aria-hidden="true">#</a> 32.recorder-js</h2>
<p>录音机</p>
<h2 id="_33-color-name" tabindex="-1"><a class="header-anchor" href="#_33-color-name" aria-hidden="true">#</a> 33.color-name</h2>
<p>将颜色名称转换为rgb</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var colors = require('color-name');
colors.red //[255,0,0]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_34-libgif" tabindex="-1"><a class="header-anchor" href="#_34-libgif" aria-hidden="true">#</a> 34.libgif</h2>
<p>操作动态gif</p>
<h2 id="_35-color-transformer-ui" tabindex="-1"><a class="header-anchor" href="#_35-color-transformer-ui" aria-hidden="true">#</a> 35.color-transformer-ui</h2>
<p>转换当前的颜色：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import { shadeColor, hexToRgba, isColorName, colorNameToHex } from 'color-transformer-ui'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_36-blueimp-md5" tabindex="-1"><a class="header-anchor" href="#_36-blueimp-md5" aria-hidden="true">#</a> 36.blueimp-md5</h2>
<p>js的md5的实现。</p>
<h2 id="_37-lie" tabindex="-1"><a class="header-anchor" href="#_37-lie" aria-hidden="true">#</a> 37.lie</h2>
<p>一个promise的实现</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var Promise = require('lie');
// or use the pollyfill
require('lie/polyfill');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_38-eventemitter3" tabindex="-1"><a class="header-anchor" href="#_38-eventemitter3" aria-hidden="true">#</a> 38.eventemitter3</h2>
<p>实现相关的事件派发，node</p>
<h2 id="_39-component-bind" tabindex="-1"><a class="header-anchor" href="#_39-component-bind" aria-hidden="true">#</a> 39.component-bind</h2>
<p>给函数绑定功能，增加功能函数比如：</p>
<h2 id="_40-arraybuffer-slice" tabindex="-1"><a class="header-anchor" href="#_40-arraybuffer-slice" aria-hidden="true">#</a> 40.arraybuffer.slice</h2>
<p>分割缓存区的buffer数据。</p>
<h2 id="_41-classname" tabindex="-1"><a class="header-anchor" href="#_41-classname" aria-hidden="true">#</a> 41.classname</h2>
<p>一个简单的js工具，可以有条件的加入classname类名</p>
<p>42.inviariant</p>
<p>inviariant是<a href="https://so.csdn.net/so/search?q=react&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">react<ExternalLinkIcon/></a>的shared/invariant包中的一个方法，它是对某个错误条件下的一个错误提醒</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>export default function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);
  
  if (!condition) {
    let error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
          'for the full error message and additional helpful warnings.',
      );
    } else {
      const args = [a, b, c, d, e, f];
      let argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() {
          return args[argIndex++];
        }),
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

let validateFormat = () => {};

if (__DEV__) { 
  
  validateFormat = function(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_43-inline-worker" tabindex="-1"><a class="header-anchor" href="#_43-inline-worker" aria-hidden="true">#</a> 43.inline-worker</h2>
<p>inline-worker:在前面的例子中，我们都是使用外部的 Worker 脚本来创建 Web Worker 对象.</p>
<p>其实你也可以通过 Blob URL 或 Data URL 的形式来创建 Web Worker，这类 Worker 也被称为 Inline Worker。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const url = URL.createObjectURL(
  new Blob([`postMessage("Dedicated Worker created by Blob")`])
);

let worker = new Worker(url);
worker.onmessage = (e) =>
  console.log(`Main: Received message - ${e.data}`);
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大部分 window 对象的方法和属性是可以使用的，包括 WebSockets，以及诸如 IndexedDB .注意不可以操作dom</p>
<p>主线程和 Worker 线程相互之间使用 postMessage() 方法来发送信息，并且通过 onmessage 这个事件处理器来接收信息</p>
<h2 id="_44-validator" tabindex="-1"><a class="header-anchor" href="#_44-validator" aria-hidden="true">#</a> 44.validator</h2>
<p>字符串有效性检查：检查邮箱的有效性，检查是不是base64,检查字节长度（中文存储）检查身份证，检查日期有效性，检查手机号码，检查md5真实性，检查是不是rbg颜色，检查是不是符合semver版本号，检查是不是强密码，检查是不是一个URL,</p>
<h2 id="_45-reduce-reducers" tabindex="-1"><a class="header-anchor" href="#_45-reduce-reducers" aria-hidden="true">#</a> 45.reduce-reducers</h2>
<p>reduce多个进行累加计算</p>
<h2 id="_46-p-limit" tabindex="-1"><a class="header-anchor" href="#_46-p-limit" aria-hidden="true">#</a> 46.p-limit</h2>
<p>根据有限的并发性，限制执行函数·</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>设置1个，只会执行一个
onst limit = pLimit(1);

const input = [
	limit(() => fetchSomething('foo')),
	limit(() => fetchSomething('bar')),
	limit(() => doSomething())
];

// Only one promise is run at once
const result = await Promise.all(input);
console.log(result);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>47.backo2</p>
<p>动态轮训实现</p>
<p>（类似于：接口请求轮训）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var Backoff = require('backo');
var backoff = new Backoff({ min: 100, max: 20000 });
 
setTimeout(function(){
  something.reconnect();
}, backoff.duration());
 
// later when something works
backoff.reset()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_48-inversify-inject-decorators" tabindex="-1"><a class="header-anchor" href="#_48-inversify-inject-decorators" aria-hidden="true">#</a> 48.inversify-inject-decorators</h2>
<p>inversify-inject-decorators注入控制</p>
<h2 id="_49-has-binary2" tabindex="-1"><a class="header-anchor" href="#_49-has-binary2" aria-hidden="true">#</a> 49.has-binary2</h2>
<p>检测是不是二进制数据</p>
<h2 id="_50-base64-arraybuffer" tabindex="-1"><a class="header-anchor" href="#_50-base64-arraybuffer" aria-hidden="true">#</a> 50.base64-arraybuffer</h2>
<p>将base64编码解码成缓存区。编码原始二进制数据缓冲区数据到base64,解码base64数据到原始二进制数据缓冲区。</p>
<ul>
<li><strong>encode(buffer)</strong> - Encodes <code v-pre>ArrayBuffer</code> into base64 string</li>
<li><strong>decode(str)</strong> - Decodes base64 string to <code v-pre>ArrayBuffer</code></li>
</ul>
<h2 id="_51-fase-memoize" tabindex="-1"><a class="header-anchor" href="#_51-fase-memoize" aria-hidden="true">#</a> 51.fase-memoize</h2>
<p>计算机中，记忆是 优化技术，存储昂贵的函数可以再次发生后，返回缓存结果，加速。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const memoize = require('fast-memoize')
 
const fn = function (one, two, three) { /* ... */ }
 
const memoized = memoize(fn)
 
memoized('foo', 3, 'bar')
memoized('foo', 3, 'bar') // Cache hit

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_52-object-assign" tabindex="-1"><a class="header-anchor" href="#_52-object-assign" aria-hidden="true">#</a> 52.object-assign</h2>
<p>合并对象</p>
<h2 id="_53-react-circle" tabindex="-1"><a class="header-anchor" href="#_53-react-circle" aria-hidden="true">#</a> 53.react-circle</h2>
<p>react渲染svg圆形</p>
<h2 id="_54-uuid" tabindex="-1"><a class="header-anchor" href="#_54-uuid" aria-hidden="true">#</a> 54.uuid</h2>
<p>创建一个uuid</p>
<h2 id="_55-ismobilejs" tabindex="-1"><a class="header-anchor" href="#_55-ismobilejs" aria-hidden="true">#</a> 55.ismobilejs</h2>
<p>检测是不是手机设备</p>
<h2 id="_56-punycode" tabindex="-1"><a class="header-anchor" href="#_56-punycode" aria-hidden="true">#</a> 56.punycode</h2>
<p>Punycode是根据RFC 3492标准定义的字符编码方案，主要用于把域名从地方语言所采用的Unicode编码转换成为可用于DNS系统的编码</p>
<h2 id="_57-object-path" tabindex="-1"><a class="header-anchor" href="#_57-object-path" aria-hidden="true">#</a> 57.object-path</h2>
<p>获取一个深度对象key对应的value</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var obj = {
  a: {
    b: "d",
    c: ["e", "f"],
    '\u1200': 'unicode key',
    'dot.dot': 'key'
  }
};

var objectPath = require("object-path");

//get deep property
objectPath.get(obj, "a.b");  //returns "d"
objectPath.get(obj, ["a", "dot.dot"]);  //returns "key"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_58-gl-matrix" tabindex="-1"><a class="header-anchor" href="#_58-gl-matrix" aria-hidden="true">#</a> 58.gl-matrix</h2>
<p>旨在以极快的速度执行矢量和矩阵运算</p>
<h1 id="梳理出来常用的" tabindex="-1"><a class="header-anchor" href="#梳理出来常用的" aria-hidden="true">#</a> 梳理出来常用的</h1>
<p>41.classname</p>
<ul>
<li>
<p>color-name</p>
</li>
<li>
<p>rgbcolor</p>
</li>
<li>
<p>color-convert</p>
</li>
<li>
<p>@formatjs/intl多语言:<a href="https://formatjs.io/docs/intl-messageformat/" target="_blank" rel="noopener noreferrer">Intl MessageFormat | Format.JS (formatjs.io)<ExternalLinkIcon/></a></p>
</li>
<li>
<p>socket.io-client  socket.io-parser</p>
</li>
<li>
<p>resource-loader资源加载器</p>
</li>
<li>
<p>math-expression-evaluator 数学表达式计算</p>
</li>
<li>
<p>localforge react-localforge 简单 indexDB 和webSQL</p>
</li>
<li>
<p>canvg-browser</p>
</li>
</ul>
<p>将canvas装成svg绘制</p>
<ul>
<li>
<p>动画库：lottie-web-light,</p>
</li>
<li>
<p>howler:返回一个h5音频库</p>
</li>
<li>
<p>inversify控制反转，好好看看这里和相关文章</p>
</li>
<li>
<p>harmmer多点触控</p>
</li>
<li>
<p>react-perfect-scroller完美滚动条工具</p>
</li>
<li>
<p>classnames:可以快速给react组件增加类名</p>
</li>
<li>
<p>libgif：gif动画控制</p>
</li>
<li>
<p>anime.js：轻量级js引擎动画库。</p>
</li>
<li>
<p>react-draggle</p>
</li>
<li>
<p>inviariant:这个是react的错误提醒类，react专门拿出来抽出来</p>
</li>
<li>
<p>validator</p>
</li>
<li>
<p>p-limit有限并发性函数</p>
</li>
<li>
<p>object-assign：合并对象 。</p>
</li>
<li>
<p>object-path:获取一个深度对象属性值</p>
</li>
<li>
<p>gl-matrix：glMatrix 旨在以极快的速度执行矢量和矩阵运算</p>
</li>
<li></li>
</ul>
<h2 id="_3-补充学习svga和lottie渲染器" tabindex="-1"><a class="header-anchor" href="#_3-补充学习svga和lottie渲染器" aria-hidden="true">#</a> 3.补充学习svga和lottie渲染器</h2>
<h3 id="svga" tabindex="-1"><a class="header-anchor" href="#svga" aria-hidden="true">#</a> svga</h3>
<p>svga渲染https://svga.io/integrated.html</p>
<p>SVGA 是一种跨平台的开源动画格式，同时兼容 iOS / Android / Web。SVGA 除了使用简单，性能卓越，同时让动画开发分工明确，各自专注各自的领域，大大减少动画交互的沟通成本，提升开发效率。动画设计师专注动画设计，通过工具输出 svga 动画文件，提供给开发工程师在集成 svga player 之后直接使用。动画开发从未如此简单！</p>
<p>SVGA 除了使用简单，性能卓越，同时让动画开发分工明确，各自专注各自的领域，大大减少动画交互的沟通成本，提升开发效率。动画设计师专注动画设计，通过工具输出 svga 动画文件，提供给开发工程师在集成 SVGAPlayer 之后直接使用</p>
<h3 id="lottie" tabindex="-1"><a class="header-anchor" href="#lottie" aria-hidden="true">#</a> lottie</h3>
<p>Lottie是一款由airbnb开源的跨平台动画渲染库，支持Android, iOS, Web, Windows平台。是专门用于解析从AE(Adobe After Effects)中通过Bodymovin插件导出的JSON文件，直接渲染动画。</p>
</div></template>
