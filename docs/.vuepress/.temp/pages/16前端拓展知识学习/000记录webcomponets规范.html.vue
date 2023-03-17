<template><div><p>[toc]</p>
<p>https://zhuanlan.zhihu.com/p/268732230</p>
<h2 id="_1-web-components" tabindex="-1"><a class="header-anchor" href="#_1-web-components" aria-hidden="true">#</a> 1.Web Components</h2>
<p>Web Components 是一套不同的技术，允许您创建可重用的定制元素（它们的功能封装在您的代码之外）并且在您的web应用中使用它们。</p>
<p>来自 <a href="https://zhuanlan.zhihu.com/p/268732230" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/268732230<ExternalLinkIcon/></a></p>
<h2 id="_2-目的" tabindex="-1"><a class="header-anchor" href="#_2-目的" aria-hidden="true">#</a> 2.目的</h2>
<p>组件：最初的目的是代码重用，功能相对单一或者独立。在整个系统的代码层次上位于最底层，被其他代码所依赖，所以说组件化是纵向分层。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
来自 &lt;https://zhuanlan.zhihu.com/p/268732230> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-使用方法" tabindex="-1"><a class="header-anchor" href="#_3-使用方法" aria-hidden="true">#</a> 3.使用方法</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1. 创建一个类或函数来指定web组件的功能，推荐请使用 ECMAScript 2015 的类语法。

2. 使用 CustomElementRegistry.define() 方法注册自己的新自定义元素 ，并向其传递要定义的元素名称、指定元素功能的类、以及可选的其所继承自的元素。

3. 如果需要的话，使用Element.attachShadow() 方法将一个shadow DOM附加到自定义元素上。使用原生的DOM方法向shadow DOM中添加子元素、事件监听器等。

4. 如果需要的话，使用 &lt;template>和&lt;slot> 定义一个HTML模板。再次使用常规DOM方法克隆模板并将其附加到shadow DOM中。

5. 最后在页面中使用我们的自定义元素，就像使用原生HTML元素一样

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Shadow DOM
Shadow DOM允许您封装组件，与全局的样式进行隔离，因此无论全局CSS中发生什么，都可以确保组件的外观和行为相同。这意味着组件中不会出现任何样式泄漏。</p>
<h2 id="shadow-dom" tabindex="-1"><a class="header-anchor" href="#shadow-dom" aria-hidden="true">#</a> Shadow DOM</h2>
<p>ShadowDom被用到了微前端架构中。</p>
</div></template>
