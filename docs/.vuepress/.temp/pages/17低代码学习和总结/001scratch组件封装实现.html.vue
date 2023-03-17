<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_0-对比学习blockly-react代码学习">0.对比学习blockly-react代码学习</RouterLink></li><li><RouterLink to="#_1-学习scratch二次封装实现底层代码架构逻辑">1.学习scratch二次封装实现底层代码架构逻辑</RouterLink><ul><li><RouterLink to="#_002web-iso-simulator代码架构分析">002web_iso_simulator代码架构分析</RouterLink></li><li><RouterLink to="#_003汇总代码整理学习问题-待解决">003汇总代码整理学习问题？---待解决</RouterLink></li></ul></li><li><RouterLink to="#_004svg学习api记录">004svg学习API记录</RouterLink><ul><li><RouterLink to="#汇总svg的path路径图的使用">汇总svg的Path路径图的使用</RouterLink></li></ul></li></ul></nav>
<h2 id="_0-对比学习blockly-react代码学习" tabindex="-1"><a class="header-anchor" href="#_0-对比学习blockly-react代码学习" aria-hidden="true">#</a> 0.对比学习blockly-react代码学习</h2>
<p><a href="https://github.com/google/blockly-samples/tree/master/examples/blockly-react" target="_blank" rel="noopener noreferrer">blockly-samples/examples/blockly-react at master · google/blockly-samples (github.com)<ExternalLinkIcon/></a></p>
<h2 id="_1-学习scratch二次封装实现底层代码架构逻辑" tabindex="-1"><a class="header-anchor" href="#_1-学习scratch二次封装实现底层代码架构逻辑" aria-hidden="true">#</a> 1.学习scratch二次封装实现底层代码架构逻辑</h2>
<p>参考：<a href="https://gitee.com/nyhxiaoning/RhineBlock.git" target="_blank" rel="noopener noreferrer">scratch结构化实现<ExternalLinkIcon/></a></p>
<ul>
<li>实现了两个block的记录：Arg和Block</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>src
├─ App.css
├─ App.test.tsx
├─ App.tsx
├─ blocks
│    ├─ console.block.tsx
│    ├─ equipment.block.tsx
│    ├─ event.block.ts
│    ├─ logic.block.tsx
│    ├─ loop.block.tsx
│    ├─ number.block.tsx
│    └─ text.block.tsx
├─ components
│    └─ base
│           ├─ Flyout
│           └─ Graph
├─ core
│    ├─ RhineBlock.ts
│    ├─ block
│    │    ├─ arg.class.ts
│    │    └─ block.class.ts
│    ├─ drag---拖拽
│    │    ├─ drag-manager.ts
│    │    └─ drag-view.css
│    ├─ render---渲染
│    │    ├─ base
│    │    └─ mellow
│    ├─ utils---功能函数封装
│    │    ├─ color-adjust.ts
│    │    ├─ normal.ts
│    │    ├─ path-builder.ts
│    │    └─ svg-el-creator.ts---生成画布函数：左侧画布和右侧的画布的svg功能函数实现
│    └─ view---视图层代码
│           ├─ flyout
│           └─ graph
├─ index.css
├─ index.tsx---标准react项目入口文件
├─ react-app-env.d.ts---补充类似声明的变量
├─ reportWebVitals.ts
└─ setupTests.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出现 的断层前端补充知识学习</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1.createElementNS
createElementNS-两个参数
命名空间和标签名，
var svgNS = 'http://www.w3.org/2000/svg'; //命名空间
var oSvg = document.createElementNS(svgNS,'svg'); //创建了一个svg元素

注意：createElement是创建普通html标签。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_002web-iso-simulator代码架构分析" tabindex="-1"><a class="header-anchor" href="#_002web-iso-simulator代码架构分析" aria-hidden="true">#</a> 002web_iso_simulator代码架构分析</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>src
├─ App
│    ├─ App.js---标准公共类引入
│    ├─ App.module.css
│    ├─ App.test.jsx
│    ├─ DarkTheme.js---主题文件的封装
│    ├─ Editor
│    │    ├─ BlockToolbox
│    │    ├─ DeviceDetail
│    │    ├─ DeviceNode
│    │    ├─ Editor.js
│    │    ├─ Editor.module.css
│    │    ├─ GraphRegister.js
│    │    ├─ NewFlower
│    │    ├─ data
│    │    ├─ deviceDetail.js
│    │    ├─ devices.js
│    │    ├─ mui.css
│    │    └─ utils
│    ├─ LightTheme.js---主题文件配置
│    ├─ Login
│    │    ├─ Login.js
│    │    └─ Login.module.css
│    ├─ Start
│    │    ├─ EnterExist
│    │    ├─ EnterNew
│    │    ├─ Start.js
│    │    └─ Start.module.css
│    ├─ state.js
│    └─ store.js---redux状态控制
├─ RhineBlock---统一封装的scratch库处理函数
│    ├─ blocks
│    │    ├─ console.block.tsx
│    │    ├─ equipment.block.tsx---逻辑列表的设备模块
│    │    ├─ event.block.ts---逻辑列表的开始模块
│    │    ├─ logic.block.tsx
│    │    ├─ loop.block.tsx
│    │    ├─ number.block.tsx
│    │    └─ text.block.tsx
│    └─ core---统一库函数封装
│           ├─ RhineBlock.ts
│           ├─ block
│           ├─ drag
│           ├─ render
│           ├─ utils
│           └─ view
├─ common---公共组件的封装
│    ├─ ContextOption
│    │    └─ ContextOption.js
│    ├─ ModalTitle
│    │    ├─ ModalTitle.js
│    │    └─ ModalTitle.module.css
│    ├─ OptionPaper
│    │    ├─ OptionPaper.js
│    │    └─ OptionPaper.module.css
│    └─ ToolBtn
│           ├─ ToolBtn.js
│           └─ ToolBtn.module.css
├─ index.css
├─ index.js---标准react项目入口文件，渲染App.js文件
├─ logo.svg
├─ reportWebVitals.js
└─ setupTests.js

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_003汇总代码整理学习问题-待解决" tabindex="-1"><a class="header-anchor" href="#_003汇总代码整理学习问题-待解决" aria-hidden="true">#</a> 003汇总代码整理学习问题？---待解决</h3>
<h4 id="_1-封装的图形库中" tabindex="-1"><a class="header-anchor" href="#_1-封装的图形库中" aria-hidden="true">#</a> （1）封装的图形库中：</h4>
<p>两个类分别有有什么作用</p>
<p>arg.class.ts和block.class.ts</p>
<p>两个类：Arg和Block类</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>初始化Block功能类：Arg和Block关系



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-class-block这个库函数中类方法" tabindex="-1"><a class="header-anchor" href="#_2-class-block这个库函数中类方法" aria-hidden="true">#</a> （2）class Block这个库函数中类方法</h4>
<p>封装 各种方法是什么</p>
<h4 id="_3-这些core文件夹之间的关系和渲染可以说明一下吗" tabindex="-1"><a class="header-anchor" href="#_3-这些core文件夹之间的关系和渲染可以说明一下吗" aria-hidden="true">#</a> （3）这些core文件夹之间的关系和渲染可以说明一下吗</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>比如这里的core中的block中文件两个分别提供的能力
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-具体的base-render-ts文件" tabindex="-1"><a class="header-anchor" href="#_4-具体的base-render-ts文件" aria-hidden="true">#</a> （4）具体的base-render.ts文件</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>局部重渲染表示什么意思？

BaseRender是一个渲染基类。

render渲染文件夹中
ShapeProvider和BaseRender---函数方法说明

MellowRender类的作用说明




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-view文件夹的两个作用" tabindex="-1"><a class="header-anchor" href="#_5-view文件夹的两个作用" aria-hidden="true">#</a> （5）view文件夹的两个作用</h4>
<h4 id="_6-rhineblock整个库函数增加说明和注释" tabindex="-1"><a class="header-anchor" href="#_6-rhineblock整个库函数增加说明和注释" aria-hidden="true">#</a> （6）RhineBlock整个库函数增加说明和注释</h4>
<h4 id="_7-关于重构我有个问题" tabindex="-1"><a class="header-anchor" href="#_7-关于重构我有个问题" aria-hidden="true">#</a> （7）关于重构我有个问题</h4>
<p>以后有生成代码问题---因为我看这个block模块中js代码非常多，是和scratch绑定关系。</p>
<p>这个生成代码库文件，是一个现成的功能，我可以快速使用。</p>
<p>但是如果重构之后，变得非常的难受。</p>
<p>这个未来模块使用会导致非常多的工作量输出</p>
<h4 id="_8-不重构scratch-解决不了那些问题-例如" tabindex="-1"><a class="header-anchor" href="#_8-不重构scratch-解决不了那些问题-例如" aria-hidden="true">#</a> （8）不重构scratch，解决不了那些问题，例如</h4>
<h2 id="_004svg学习api记录" tabindex="-1"><a class="header-anchor" href="#_004svg学习api记录" aria-hidden="true">#</a> 004svg学习API记录</h2>
<h3 id="汇总svg的path路径图的使用" tabindex="-1"><a class="header-anchor" href="#汇总svg的path路径图的使用" aria-hidden="true">#</a> 汇总svg的Path路径图的使用</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>类似使用svg的使用
&lt;path d="M 50,100" />---绝对位置
&lt;path d="m 50,100" />---相对位置

1.M = moveto

M x y 移动到指定坐标，xy分别为x轴和y轴的坐标点，类似画笔的起点。

path中的起点，必须存在（文档中虽然没有提到过，但是path的其他命令都需要依赖一个初始位置，而实际操作过程中也没有需要到可以不使用M的情况，后面发现有例外我再过来补充。
---这里注意两种用法区分，一种是移动到绝对位置，一种是移动到相对位置
M x,y x和y是绝对坐标，分别代表水平坐标和垂直坐标。
m dx,dy dx和dy是相对于当前点的距离，分别是向右和向下的距离。


2.L = lineto

L x y 在初始位置（M 画的起点）和xy确定的坐标画一条线。
两点一线，直线，绘图中很常见的方式。

3.H = horizontal lineto

H x 沿着x轴移动一段位置

4.V = vertical lineto

V y 沿着y轴移动一段位置

5.C = curveto

C x1 y1 x2 y2 x y
三次贝塞尔曲线
当前点为起点，xy为终点，起点和x1y1控制曲线起始的斜率，终点和x2y2控制结束的斜率。

6.S = smooth curveto

S x2 y2 x y
简化的贝塞尔曲线
1.如果S命令跟在一个C命令或者另一个S命令的后面，它的第一个控制点，就会被假设成前一个控制点的对称点。

2.如果S命令单独使用，前面没有C命令或者另一个S命令，那么它的两个控制点就会被假设为同一个点。

7.Q = quadratic Bézier curve

Q x1 y1 x y
二次贝塞尔曲线Q
只需要一个控制点，用来确定起点和终点的曲线斜率。因此它需要两组参数，控制点和终点坐标。

8.T = smooth quadratic Bézier curveto

Q命令的简写命令。&lt;/br>
与S命令相似，T也会通过前一个控制点，推断出一个新的控制点。
1.T命令前面必须是一个Q命令，或者是另一个T命令

2.如果T单独使用，那么控制点就会被认为和终点是同一个点，所以画出来的将是一条直线

9.A = elliptical Arc

A rx,ry x-axis-rotation large-arc-flag sweep-flag x,y
rx 弧的半长轴长度
ry 弧的半短轴长度
x-axis-rotation 是此段弧所在的x轴与水平方向的夹角，即x轴的逆时针旋转角度，负数代表顺时针旋转角度。
large-arc-flag 为1表示大角度弧线，0表示小角度弧线
sweep-flag 为1表示从起点到终点弧线绕中心顺时针方向，0表示逆时针方向。
xy 是终点坐标。

10.Z = closepath从当前位置到起点画一条直线闭合。
 
11.ArcTo 是 path 元素中的一个指令
表示这个路径的过程。
需要注意的是，当在 SVG 中的 path 元素使用 ArcTo 的时候，弧线的起始点和终止点不能重叠，否则将画不出来这个 path。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
