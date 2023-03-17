<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_0-解决个人博客md格式对于文字和图片进行垂直对齐全">0.解决个人博客md格式对于文字和图片进行垂直对齐全</RouterLink><ul><li><RouterLink to="#问题背景">问题背景：</RouterLink></li><li><RouterLink to="#解决问题">解决问题：</RouterLink></li></ul></li><li><RouterLink to="#_1-word文档创建doc格式转docx后超链接失效">1.word文档创建doc格式转docx后超链接失效</RouterLink><ul><li><RouterLink to="#_1-是不是没有编码问题导致格式化转换出现问题">1.是不是没有编码问题导致格式化转换出现问题</RouterLink></li><li><RouterLink to="#_2-看是不是文档的标准化有问题">2.看是不是文档的标准化有问题</RouterLink></li></ul></li><li><RouterLink to="#解决方案">解决方案</RouterLink><ul><li><RouterLink to="#_1-转换成docx格式保存后-将当前的格式乱掉的内容进行修改">1.转换成docx格式保存后，将当前的格式乱掉的内容进行修改</RouterLink></li><li><RouterLink to="#_2-有没有平滑过渡的工具">2.有没有平滑过渡的工具</RouterLink></li></ul></li></ul></nav>
<h2 id="_0-解决个人博客md格式对于文字和图片进行垂直对齐全" tabindex="-1"><a class="header-anchor" href="#_0-解决个人博客md格式对于文字和图片进行垂直对齐全" aria-hidden="true">#</a> 0.解决个人博客md格式对于文字和图片进行垂直对齐全</h2>
<h3 id="问题背景" tabindex="-1"><a class="header-anchor" href="#问题背景" aria-hidden="true">#</a> 问题背景：</h3>
<p>使用md写个人博客后很是顺手。但是写多了发现一些地方配图都是文字和图形上下排布，非常不美观。</p>
<p>想要文字和图片进行任意的排版。</p>
<h3 id="解决问题" tabindex="-1"><a class="header-anchor" href="#解决问题" aria-hidden="true">#</a> 解决问题：</h3>
<p>既然md是符号格式化工具，支持内置html,那么我们用html和css解决</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>使用父级包裹当前的文字内容子类和图片。简单flex布局后，设置align-items搞定。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-word文档创建doc格式转docx后超链接失效" tabindex="-1"><a class="header-anchor" href="#_1-word文档创建doc格式转docx后超链接失效" aria-hidden="true">#</a> 1.word文档创建doc格式转docx后超链接失效</h2>
<p>首先页面其他地方的超链接可以。</p>
<h3 id="_1-是不是没有编码问题导致格式化转换出现问题" tabindex="-1"><a class="header-anchor" href="#_1-是不是没有编码问题导致格式化转换出现问题" aria-hidden="true">#</a> 1.是不是没有编码问题导致格式化转换出现问题</h3>
<p>（1）测试后，发现自己的链接里面没有中文，不需要编码</p>
<p>（2）同时页面链接放在第二页可以，第三页不可以。</p>
<h3 id="_2-看是不是文档的标准化有问题" tabindex="-1"><a class="header-anchor" href="#_2-看是不是文档的标准化有问题" aria-hidden="true">#</a> 2.看是不是文档的标准化有问题</h3>
<p>doc和docx文档的区别</p>
<p>docx是word2007以上的格式化标准，有一些性能和兼容性的改进。</p>
<p>那么尝试将整个文档转成docx</p>
<p>生效了，但是之前的格式乱掉了。</p>
<h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2>
<h3 id="_1-转换成docx格式保存后-将当前的格式乱掉的内容进行修改" tabindex="-1"><a class="header-anchor" href="#_1-转换成docx格式保存后-将当前的格式乱掉的内容进行修改" aria-hidden="true">#</a> 1.转换成docx格式保存后，将当前的格式乱掉的内容进行修改</h3>
<p>对于内容量少的情况可行，但是如果文档内容量大，同时已经排版很多地方，检查和修改都是工作</p>
<h3 id="_2-有没有平滑过渡的工具" tabindex="-1"><a class="header-anchor" href="#_2-有没有平滑过渡的工具" aria-hidden="true">#</a> 2.有没有平滑过渡的工具</h3>
<p>word自带的pdf导出，除了有url自定义链接这个问题，其他的问题暂时没有发现。</p>
<p>那么找其他的导致pdf链接尝试。</p>
<h4 id="_1-在线pdf转换" tabindex="-1"><a class="header-anchor" href="#_1-在线pdf转换" aria-hidden="true">#</a> （1）在线PDF转换</h4>
<p><a href="https://docsmall.com/" target="_blank" rel="noopener noreferrer">docsmall - 免费在线图片压缩、GIF压缩工具、PDF压缩工具、PDF合并工具、PDF分割工具<ExternalLinkIcon/></a>尝试后发现可以。（隐私性没有保证）</p>
<h4 id="_2-下载一个可以本地转换的pdf软件-adorepdf" tabindex="-1"><a class="header-anchor" href="#_2-下载一个可以本地转换的pdf软件-adorepdf" aria-hidden="true">#</a> （2）下载一个可以本地转换的pdf软件，adorePDF</h4>
<p>可行。</p>
<h4 id="_3-wps导出pdf-可行" tabindex="-1"><a class="header-anchor" href="#_3-wps导出pdf-可行" aria-hidden="true">#</a> （3）wps导出pdf:可行</h4>
<p>量不大的情况下，wps导出可以免费，但是过大，收费了</p>
</div></template>
