<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#回到博客主页">回到博客主页</RouterLink></li><li><RouterLink to="#css高级用法汇总01">css高级用法汇总01</RouterLink><ul><li><RouterLink to="#_1-重置盒子-css样式使用不同浏览器的时候避免出现不同。">1.重置盒子，css样式使用不同浏览器的时候避免出现不同。</RouterLink></li><li><RouterLink to="#_2-使用not更好的控制最后一个li标签的样式">2.使用not更好的控制最后一个li标签的样式</RouterLink></li><li><RouterLink to="#_3-给body设置一个line-height">3.给body设置一个line-height,</RouterLink></li><li><RouterLink to="#为form类型的元素设置-focus">为form类型的元素设置:focus</RouterLink></li><li><RouterLink to="#垂直居中标题的办法">垂直居中标题的办法</RouterLink></li><li><RouterLink to="#除了最后一个li标签-后面都加">除了最后一个li标签，后面都加,</RouterLink></li><li><RouterLink to="#设置色块的显示1-3可以显示-其余的不显示">设置色块的显示1-3可以显示，其余的不显示</RouterLink></li><li><RouterLink to="#使用svg的图标">使用svg的图标</RouterLink></li><li><RouterLink to="#使用max-height控制滚动条-只有内容查过200px后-才能出现">使用max-height控制滚动条:只有内容查过200px后，才能出现</RouterLink></li><li><RouterLink to="#强制让table表格保持相同的宽度-table-layout-fixed">强制让table表格保持相同的宽度：table-layout:fixed</RouterLink></li><li><RouterLink to="#重写a超链接的样式">重写a超链接的样式</RouterLink></li><li><RouterLink to="#超链接默认是将连接地址异常显示标签外的内容-如何显示连接内容">超链接默认是将连接地址异常显示标签外的内容，如何显示连接内容</RouterLink></li><li><RouterLink to="#默认修改超链接的样式颜色和下划线">默认修改超链接的样式颜色和下划线</RouterLink></li><li><RouterLink to="#创建一个box-div布局-但是底部padding占用了20">创建一个box,div布局，但是底部padding占用了20%</RouterLink></li><li><RouterLink to="#图片没有加载如何统一的给出报错-而不是alt中写">图片没有加载如何统一的给出报错，而不是alt中写</RouterLink></li><li><RouterLink to="#rem和em使用-工程化页面实现思路">rem和em使用---工程化页面实现思路</RouterLink></li><li><RouterLink to="#隐藏空的html标签">隐藏空的html标签</RouterLink></li><li><RouterLink to="#避免换行符增加间距的控制">避免换行符增加间距的控制</RouterLink></li><li><RouterLink to="#样式禁用鼠标事件">样式禁用鼠标事件</RouterLink></li><li><RouterLink to="#布局响应式字体大小">布局响应式字体大小</RouterLink></li><li><RouterLink to="#muted和video使用习惯">muted和video使用习惯</RouterLink></li><li><RouterLink to="#_009选择器的说法">009选择器的说法</RouterLink></li><li><RouterLink to="#单元格中居中内容">单元格中居中内容</RouterLink></li></ul></li></ul></nav>
<h2 id="回到博客主页" tabindex="-1"><a class="header-anchor" href="#回到博客主页" aria-hidden="true">#</a> 回到博客主页</h2>
<p><RouterLink to="/">博客首页</RouterLink></p>
<h2 id="css高级用法汇总01" tabindex="-1"><a class="header-anchor" href="#css高级用法汇总01" aria-hidden="true">#</a> css高级用法汇总01</h2>
<p><a href="https://github.com/AllThingsSmitty/css-protips" target="_blank" rel="noopener noreferrer">高级技巧说明<ExternalLinkIcon/></a></p>
<h3 id="_1-重置盒子-css样式使用不同浏览器的时候避免出现不同。" tabindex="-1"><a class="header-anchor" href="#_1-重置盒子-css样式使用不同浏览器的时候避免出现不同。" aria-hidden="true">#</a> 1.重置盒子，css样式使用不同浏览器的时候避免出现不同。</h3>
<p>强制使用盒子模型来处理</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

这将为您提供相同的结果，并可以更轻松地更改利用其他行为的插件或其他组件中的框大小。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-使用not更好的控制最后一个li标签的样式" tabindex="-1"><a class="header-anchor" href="#_2-使用not更好的控制最后一个li标签的样式" aria-hidden="true">#</a> 2.使用not更好的控制最后一个li标签的样式</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/* add border */
.nav li {
  border-right: 1px solid #666;
}

/* remove border */
.nav li:last-child {
  border-right: none;
}

//注意使用伪类的方式:last-child
也可以使用更好的理解方式。
.nav li:not(:last-child) {
  border-right: 1px solid #666;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-给body设置一个line-height" tabindex="-1"><a class="header-anchor" href="#_3-给body设置一个line-height" aria-hidden="true">#</a> 3.给body设置一个line-height,</h3>
<p>这样所有的p比起爱你和h1，hx标签都可以样式统一。
默认hx和p标签的高都是继承body.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>body {
  line-height: 1.5;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为form类型的元素设置-focus" tabindex="-1"><a class="header-anchor" href="#为form类型的元素设置-focus" aria-hidden="true">#</a> 为form类型的元素设置:focus</h3>
<p>有一些input或是select在focus后，希望有一些样式</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Set :focus for Form Elements
a:focus,
button:focus,
input:focus,
select:focus,
textarea:focus {
  box-shadow: none;
  outline: #000 dotted 2px;
  outline-offset: .05em;
  border:1px solid red
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="垂直居中标题的办法" tabindex="-1"><a class="header-anchor" href="#垂直居中标题的办法" aria-hidden="true">#</a> 垂直居中标题的办法</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>--------方式1：flex布局
html,
body {
  height: 100%;
  margin: 0;
}

body {
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-flex;
  display: flex;
}

--------方式2：grid布局
body {
  display: grid;
  height: 100vh;
  margin: 0;
  place-items: center center;
}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="除了最后一个li标签-后面都加" tabindex="-1"><a class="header-anchor" href="#除了最后一个li标签-后面都加" aria-hidden="true">#</a> 除了最后一个li标签，后面都加,</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ul > li:not(:last-child)::after {
  content: ",";
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置色块的显示1-3可以显示-其余的不显示" tabindex="-1"><a class="header-anchor" href="#设置色块的显示1-3可以显示-其余的不显示" aria-hidden="true">#</a> 设置色块的显示1-3可以显示，其余的不显示</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>li {
  display: none;
}

/* select items 1 through 3 and display them */
li:nth-child(-n+3) {
  display: block;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用svg的图标" tabindex="-1"><a class="header-anchor" href="#使用svg的图标" aria-hidden="true">#</a> 使用svg的图标</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.logo {
  background: url("logo.svg");
}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用max-height控制滚动条-只有内容查过200px后-才能出现" tabindex="-1"><a class="header-anchor" href="#使用max-height控制滚动条-只有内容查过200px后-才能出现" aria-hidden="true">#</a> 使用max-height控制滚动条:只有内容查过200px后，才能出现</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//首先div隐藏滚动条：max-height最高是200px，超过200px出现滚动条
//但是区域超过200px，隐藏垂直滚动条。
.slider {
  max-height: 200px;
  overflow-y: hidden;
  width: 300px;
}

//当hover放上之后，最高是600px,超过600px出现滚动条，放上hover才出现滚动条，这样更加舒服
.slider:hover {
  max-height: 600px;
  overflow-y: scroll;
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制让table表格保持相同的宽度-table-layout-fixed" tabindex="-1"><a class="header-anchor" href="#强制让table表格保持相同的宽度-table-layout-fixed" aria-hidden="true">#</a> 强制让table表格保持相同的宽度：table-layout:fixed</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重写a超链接的样式" tabindex="-1"><a class="header-anchor" href="#重写a超链接的样式" aria-hidden="true">#</a> 重写a超链接的样式</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
a {
  color: #1c86ee;
  font-size: 1.5em;
  overflow-wrap: break-word;
  word-break: break-word;
  word-wrap: break-word;
}

//text-decoration:none不要下划线的超链接

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="超链接默认是将连接地址异常显示标签外的内容-如何显示连接内容" tabindex="-1"><a class="header-anchor" href="#超链接默认是将连接地址异常显示标签外的内容-如何显示连接内容" aria-hidden="true">#</a> 超链接默认是将连接地址异常显示标签外的内容，如何显示连接内容</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>a[href]:empty::before {
  content: attr(href);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="默认修改超链接的样式颜色和下划线" tabindex="-1"><a class="header-anchor" href="#默认修改超链接的样式颜色和下划线" aria-hidden="true">#</a> 默认修改超链接的样式颜色和下划线</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>a[href]:not([class]) {
  color: #444444;
  text-decoration: underline;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建一个box-div布局-但是底部padding占用了20" tabindex="-1"><a class="header-anchor" href="#创建一个box-div布局-但是底部padding占用了20" aria-hidden="true">#</a> 创建一个box,div布局，但是底部padding占用了20%</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
&lt;div class="container">
  &lt;div>&lt;/div>
&lt;/div>

.container {
  height: 0;
  padding-bottom: 20%;
  position: relative;
}

.container div {
  border: 2px dashed #ddd;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图片没有加载如何统一的给出报错-而不是alt中写" tabindex="-1"><a class="header-anchor" href="#图片没有加载如何统一的给出报错-而不是alt中写" aria-hidden="true">#</a> 图片没有加载如何统一的给出报错，而不是alt中写</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>img::before {
  content: "We're sorry, the image below is broken :(";
  display: block;
  margin-bottom: 10px;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rem和em使用-工程化页面实现思路" tabindex="-1"><a class="header-anchor" href="#rem和em使用-工程化页面实现思路" aria-hidden="true">#</a> rem和em使用---工程化页面实现思路</h3>
<p><a href="https://css-tricks.com/rem-global-em-local/" target="_blank" rel="noopener noreferrer">原文<ExternalLinkIcon/></a>
rem是相对于root下的font-size的基准进行计算。
em和rem的区别一句话概括：em相对于父元素，rem相对于根元素。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>em---用于font-size属性和其他属性区别记忆

子元素字体大小的em是相对于父元素字体大小
元素的width/height/padding/margin用em的话是相对于该元素的font-size


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用“rem”进行全局大小调整;
使用“em”进行本地大小调整(模块内部)</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>案例代码
&lt;div class="font-size-control">Document font-size control: &lt;input type="range" id="document-font-size-control" min="0.5" max="3.0" step="0.2" value="1.0">
&lt;/div>

&lt;div class="page-wrap">

  &lt;section class="main-content">

    &lt;article class="module" data-font-size-in-rem="1.2">
      &lt;h3>Title of Module&lt;/h3>
      &lt;time>Aug 5, 2014&lt;/time>
      &lt;p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.&lt;/p>
      &lt;footer>
        Some extra information.
      &lt;/footer>
    &lt;/article>

  
&lt;/div>

css中经典实用rem和em,因为em是相对于父类的font-size调整。
所以模块的父类定义全部用rem标签

具体如下体现
article {
  font-size: 1.2rem;//只用这里控制，下面全部变
  > h3 {
    font-size: 1.5em;//都是相对于父元素，这样调整大小，
    margin: 0 0 0.5em;
  }
  > time {
    font-size: 0.9em;
    color: #999;
    display: block;
  }
  > footer {
    border-top: 1px solid #ccc;
    padding-top: 0.5em;
    font-size: 0.8em; 
  }
}


补充一下  div p和div > p两个区别
div p表示子代，只有亲儿子。
div > p表示子代选择器




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="隐藏空的html标签" tabindex="-1"><a class="header-anchor" href="#隐藏空的html标签" aria-hidden="true">#</a> 隐藏空的html标签</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>:empty {
  display: none;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="避免换行符增加间距的控制" tabindex="-1"><a class="header-anchor" href="#避免换行符增加间距的控制" aria-hidden="true">#</a> 避免换行符增加间距的控制</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>br + br {
  display: none;
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="样式禁用鼠标事件" tabindex="-1"><a class="header-anchor" href="#样式禁用鼠标事件" aria-hidden="true">#</a> 样式禁用鼠标事件</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.button-disabled {
  opacity: .5;
  pointer-events: none;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="布局响应式字体大小" tabindex="-1"><a class="header-anchor" href="#布局响应式字体大小" aria-hidden="true">#</a> 布局响应式字体大小</h3>
<p>使用media方式做，但是不太方便，代码较多。</p>
<p>选择一种root响应式字体实现</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
:root {
  font-size: calc(1vw + 1vh + .5vmin);
}

body {
    //默认是16px，这样可以统一字体计算
  font-size: 1rem/1.6 
}

1vw = 视口宽度的 1%

1vh = 视口高度的 1%

1vmin = 1vw 或 1vh，以较小者为准

1vmax = 1vw 或 1vh，以较大者为准

实战思考：如果用于iphone中
如果我们将其应用于 iPhone 7 的视口尺寸，即 375x667，计算出的值为:root：
:root {
  font-size: calc(3.75px + 6.67px + 1.875px); /* 1vw + 1vh + .5min */
}

body {
    //默认是16px，这样可以统一字体计算
  font-size: 1rem/1.6 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="muted和video使用习惯" tabindex="-1"><a class="header-anchor" href="#muted和video使用习惯" aria-hidden="true">#</a> muted和video使用习惯</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>如果设置了自动播放点击，那么需要默认设置静音，否则，这个视频不显示
三个属性：autoplay="autoplay" muted,controls
        video[autoplay]:not([muted]) {
            display: none;
        }

 &lt;video width="320" height="240" controls autoplay="autoplay" x-webkit-airplay="true" webkit-playsinline="true" muted="">
        &lt;source
            src="https://v9-xg-web-s.ixigua.com/da2adf3b705be87c3a6d245e041fa718/62b83693/video/tos/cn/tos-cn-v-0000c2429/4c87ca3c0aab446b9bebbf8a2765e38b/?a=1768&amp;ch=0&amp;cr=0&amp;dr=0&amp;cd=0%7C0%7C0%7C0&amp;br=683&amp;bt=683&amp;cs=0&amp;ds=1&amp;ft=dcAui--bz7ThWZ06h1t8Z&amp;mime_type=video_mp4&amp;qs=13&amp;rc=M3l1OWg6ZjZ0ZDMzNGc8M0BpM3l1OWg6ZjZ0ZDMzNGc8M0AtLzZzcjQwL2hgLS1kNC9zYSMtLzZzcjQwL2hgLS1kNC9zcw%3D%3D&amp;l=20220626173559010158036072014F5A50"
            type="video/mp4">
        您的浏览器不支持 video 标签。
    &lt;/video>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_009选择器的说法" tabindex="-1"><a class="header-anchor" href="#_009选择器的说法" aria-hidden="true">#</a> 009选择器的说法</h3>
<blockquote>
<p>表示是后代选择器，空格表示子代选择器。</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>div span和div span

div span表示div下子代是span
div > span表示div下所有的span（包含子代，孙子）



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单元格中居中内容" tabindex="-1"><a class="header-anchor" href="#单元格中居中内容" aria-hidden="true">#</a> 单元格中居中内容</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>（1）justify-content 属性（水平）对齐弹性容器的项目，当项目不占用主轴上所有可用空间时。
（2）提示：请使用 align-items 属性垂直对齐项目。
（3）注意align-content：当 flexbox 中只有一行时，此属性不会影响。
当垂直（在横轴上）有可用空间时，CSS align-content 属性会对齐 flex 容器的线条

（4）子组件在父组件中垂直居中布局。
父组件需要铺满块。
.parent-cell{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
子组件，根据父组件的内容（默认继承父类的flex）
.btn-size-short {
  border: 1px solid red;
  display: flex;
  width: 15px !important;
  height: 15px;
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
