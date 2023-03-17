<template><div><p>[toc]</p>
<h1 id="bebel语法转换网站" tabindex="-1"><a class="header-anchor" href="#bebel语法转换网站" aria-hidden="true">#</a> bebel语法转换网站</h1>
<p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fastexplorer.net%2F" target="_blank" rel="noopener noreferrer">网站1<ExternalLinkIcon/></a></p>
<h2 id="_1-vscode的debugger的学习记录" tabindex="-1"><a class="header-anchor" href="#_1-vscode的debugger的学习记录" aria-hidden="true">#</a> 1.vscode的debugger的学习记录</h2>
<p>直接点击上面的调试面板，创建一个launch</p>
<h2 id="_2-babel的学习记录课程准备" tabindex="-1"><a class="header-anchor" href="#_2-babel的学习记录课程准备" aria-hidden="true">#</a> 2.babel的学习记录课程准备</h2>
<h3 id="babel的用途" tabindex="-1"><a class="header-anchor" href="#babel的用途" aria-hidden="true">#</a> babel的用途</h3>
<h4 id="_1-转译-esnext、typescript、flow-等到目标环境支持的-js" tabindex="-1"><a class="header-anchor" href="#_1-转译-esnext、typescript、flow-等到目标环境支持的-js" aria-hidden="true">#</a> （1）转译 esnext、typescript、flow 等到目标环境支持的 js；</h4>
<p>a.这个是最常用的功能，用来把代码中的 esnext 的新的语法、typescript和flow 的语法转成基于目标环境支持的语法的实现。b.还可以把目标环境不支持的 api 进行 polyfill。</p>
<p>c.经典案例//TODO:
// TODO: !!! 待补充</p>
<h4 id="_2-一些特定用途的代码转换" tabindex="-1"><a class="header-anchor" href="#_2-一些特定用途的代码转换" aria-hidden="true">#</a> (2)一些特定用途的代码转换</h4>
<p>a.babel 是一个转译器，暴露了很多 api，用这些 api 可以完成代码到 AST 的 parse
b.AST 的转换
c.以及目标代码的生成。
d.特定用途的转换
自动在函数中插入代码；
自动国际化；
自动将default import 转换成named import；
自动埋点功能
e.taro框架就是使用babel的api实现的</p>
<h4 id="_3-代码的静态分析" tabindex="-1"><a class="header-anchor" href="#_3-代码的静态分析" aria-hidden="true">#</a> （3）代码的静态分析</h4>
<p>对于代码进行parse后，可以进行转换了，因为通过AST可以理解代码。
a.linter工具分析代码的AST结构；
b.api文档生成工具，可以提取源码中的注释，然后生成文档；
c.type checker会根据AST中提取的类型，推导类型信息
d.压缩混淆工具，可以分析代码的结构，进行无用代码的删除，变量名的混淆，</p>
<h3 id="上面的相关章节的汇总代码地址" tabindex="-1"><a class="header-anchor" href="#上面的相关章节的汇总代码地址" aria-hidden="true">#</a> 上面的相关章节的汇总代码地址</h3>
<p><a href="https://github.com/QuarkGluonPlasma/babel-plugin-exercize" target="_blank" rel="noopener noreferrer">代码地址<ExternalLinkIcon/></a></p>
<h3 id="_3-babel的编译流程" tabindex="-1"><a class="header-anchor" href="#_3-babel的编译流程" aria-hidden="true">#</a> 3.babel的编译流程</h3>
<h4 id="_1-babel实质是一个转译器。" tabindex="-1"><a class="header-anchor" href="#_1-babel实质是一个转译器。" aria-hidden="true">#</a> （1）babel实质是一个转译器。</h4>
<p>一般编译器是高级语言到底层语言的转换工具。对于高层语言到高层语言的转换，叫做转译器。</p>
<h4 id="_2-bebel转译流程" tabindex="-1"><a class="header-anchor" href="#_2-bebel转译流程" aria-hidden="true">#</a> （2）bebel转译流程</h4>
<p>a.parse：通过parser把源码转换成抽象语法树；（目的将源码字符串转成计算机可以理解的AST，这个过程分为词法分析和语法分析）
b.transform:遍历AST,调用各种transform插件对于AST进行增删改；(AST是计算机可以理解的字符串意思)
c.generate:把转换后的AST打印成目标代码，生成source-map</p>
<p><a href="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03bdbe8096944a0fa09c86ac2ff09e56~tplv-k3u1fbpfcp-watermark.image" target="_blank" rel="noopener noreferrer">babel的解析过程说明<ExternalLinkIcon/></a></p>
<p>s说明：soursemap记录源码到目标代码的转换关系，通过这个sourcemap可以找到目标代码中每一个节点对应的源码。</p>
<h3 id="_3-babel的ast" tabindex="-1"><a class="header-anchor" href="#_3-babel的ast" aria-hidden="true">#</a> 3.babel的AST</h3>
<p>AST是对于源码的抽象，字面量，标识符，表达式，语句，模块语法，class语法都有各自的AST，我们分别来了解一下。</p>
<h4 id="literal-字面量" tabindex="-1"><a class="header-anchor" href="#literal-字面量" aria-hidden="true">#</a> literal 字面量</h4>
<p>字符串的字面量比如：let name = 'str';//这里'str'就是字符串的字面量；</p>
<p><a href="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29185815036a4ea1878484ba773a3b6e~tplv-k3u1fbpfcp-watermark.image" target="_blank" rel="noopener noreferrer">js中各种字面量<ExternalLinkIcon/></a></p>
<h4 id="identifier标识符-变量名-属性名-参数名" tabindex="-1"><a class="header-anchor" href="#identifier标识符-变量名-属性名-参数名" aria-hidden="true">#</a> identifier标识符：变量名，属性名，参数名</h4>
<p>标识符包含的内容有很多，变量名，属性名，参数名等等各种声明和引用的名字，都是identifier。我们知道js中标识符只能用字母或是数字或是下划线或是美元符号，同时不能够用数字开头。</p>
<h4 id="statement语句" tabindex="-1"><a class="header-anchor" href="#statement语句" aria-hidden="true">#</a> statement语句</h4>
<p>最小的独立执行单元。</p>
<h4 id="declaration声明语句" tabindex="-1"><a class="header-anchor" href="#declaration声明语句" aria-hidden="true">#</a> declaration声明语句</h4>
<p>作用：用于定义变量。
声明语句是一种特殊的语句，它执行的逻辑是在作用域内声明一个变量、函数。class,import,export</p>
<h4 id="expression表达式" tabindex="-1"><a class="header-anchor" href="#expression表达式" aria-hidden="true">#</a> Expression表达式</h4>
<p>特点：执行完成后有返回值。TODO:这个是和语句的区别</p>
<p><a href="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/feabcb940982409b911dcbb6066e8aa7~tplv-k3u1fbpfcp-watermark.image" target="_blank" rel="noopener noreferrer">常见表达式说明<ExternalLinkIcon/></a></p>
<p>其实有的既可以是语句，也可以是表达式。语句的特点是最小执行单元，可以独立运行，表达式有返回值。所以对于identifier来说，都是符合。
当然，其他都是符合的，比如匿名函数直接执行，会报错。匿名类也是不可以直接的声明。</p>
<h4 id="class语法特殊有专门的ast来作为使用。" tabindex="-1"><a class="header-anchor" href="#class语法特殊有专门的ast来作为使用。" aria-hidden="true">#</a> class语法特殊有专门的AST来作为使用。</h4>
<p><a href="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0c62ec375157488780e2beae39e7620d~tplv-k3u1fbpfcp-watermark.image" target="_blank" rel="noopener noreferrer">class抽象语法树<ExternalLinkIcon/></a></p>
<p>Modules也有专门的AST语法树
import有三种导入方法
named import:命名函数导入：import { nameFn } from &quot;xxx&quot;
default import:默认方法导入： import a from 'xxx'// 注意这里是因为export default xxx
namespaced import:命名空间导入: import * as b from 'b';//就是将所有的模块的方法全部导入，放到b这个下面调用
第三种方法对应的是：export * from 'b';这样才可以解析正确。</p>
<p>//</p>
<h4 id="program和directive" tabindex="-1"><a class="header-anchor" href="#program和directive" aria-hidden="true">#</a> program和directive</h4>
<p>Program 是包裹具体执行语句的节点，而 Directive 则是代码中的指令部分。
program是表示整个程序的节点，他有body代表执行的程序体，里面放着将要执行的函数的集合。</p>
<p>directive指令，表示记录一些指令，比如use strict就是存储在这里。</p>
<p>AST中的tokens是词法分析结果么.(就是一个个小小的单词)</p>
<h4 id="file-comment" tabindex="-1"><a class="header-anchor" href="#file-comment" aria-hidden="true">#</a> File &amp; Comment</h4>
<p>babel 的 AST 最外层节点是 File，它有 program、comments、tokens 等属性，分别存放 Program 程序体、注释、token 等，是最外层节点。</p>
<h4 id="_6-种就是常见的一些-ast-节点类型-babel-就是通过这些节点来抽象源码中不同的部分。" tabindex="-1"><a class="header-anchor" href="#_6-种就是常见的一些-ast-节点类型-babel-就是通过这些节点来抽象源码中不同的部分。" aria-hidden="true">#</a> 6 种就是常见的一些 AST 节点类型，babel 就是通过这些节点来抽象源码中不同的部分。</h4>
<h4 id="babel的api学习" tabindex="-1"><a class="header-anchor" href="#babel的api学习" aria-hidden="true">#</a> babel的api学习</h4>
<blockquote>
<p>注意，我们学习的 api 是 babel 7.x 的，babel 6 的 api 还没有按照scope 来划分，是 babel-parser 这种，
而 babel 7 变成了@babel/parser 这种。但具体 api 差不多，我们学的是一些原理性的东西，这些东西在版本迭代中是不会变的。</p>
</blockquote>
<h2 id="_1-babel不是万能的转换工具" tabindex="-1"><a class="header-anchor" href="#_1-babel不是万能的转换工具" aria-hidden="true">#</a> 1.babel不是万能的转换工具</h2>
<h3 id="一些场景-无法对于proxy-next的api进行转换" tabindex="-1"><a class="header-anchor" href="#一些场景-无法对于proxy-next的api进行转换" aria-hidden="true">#</a> 一些场景，无法对于Proxy,next的API进行转换</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>可以看到，只要一个数据结构具有符合要求的 Symbol.iterator 属性，就可以通过 for…of 遍历（事实上，解构赋值、扩展运算符、yield* 等 ES6 特性也是调用该属性接口）。
 
现在，我们回过头来看 Babel 转换 for…of 循环的代码，其本质上还是通过调用 Iterator 接口（注意第 9 行），将 for…of 转换为传统的 for 循环，并在每次循环中调用遍历器的 next 方法来吐出数组中的值。如果在循环调用过程中出现错误，遍历器中如含有预定义的 return 函数（参见 ES6 文档中遍历器对象的规范 ），则调用之，否则直接抛出错误。
 
即使调用 Babel 对 for…of 循环进行转码，我们实际上还是无法完全摆脱 ES6 的特性——在不支持 Symbol 的环境下，代码仍然会报错。因为 Babel 默认只转换新的 JavaScript 句法（syntax）,而不转换 Proxy、Set、Promise、Symbol 等新的 API。

实际上，要想完全抹平 ES6 特性带来的新 API 也是可行的，只要在项目中引入 babel-polyfill 并配置好即可，但是这样带来的另一个问题就是因为 babel-polyfill 本身的体积，我们的代码也会变庞大不少。所以此举有利有弊，需要根据实际情况进行权衡。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="es在线转换网站" tabindex="-1"><a class="header-anchor" href="#es在线转换网站" aria-hidden="true">#</a> ES在线转换网站</h4>
<p>https://es6console.com/</p>
<p><a href="https://gitee.com/nyhxiaoning/zkwqcompany-node-webpack-babel-cli" target="_blank" rel="noopener noreferrer">个人化项目代码转换记录git分支<ExternalLinkIcon/></a></p>
<h4 id="如何使用-babel" tabindex="-1"><a class="header-anchor" href="#如何使用-babel" aria-hidden="true">#</a> 如何使用 Babel</h4>
<p>下面我们写出在命令行使用 Babel 的过程，让你清楚转译过程的全部内容。</p>
<h5 id="_1-在项目中安装-babel-的命令行工具" tabindex="-1"><a class="header-anchor" href="#_1-在项目中安装-babel-的命令行工具" aria-hidden="true">#</a> 1. 在项目中安装 Babel 的命令行工具</h5>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install -D babel-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2-准备-es6-代码" tabindex="-1"><a class="header-anchor" href="#_2-准备-es6-代码" aria-hidden="true">#</a> 2. 准备 ES6 代码</h5>
<p>通常我们把源代码放在 src 目录下，如果你没有现成的 ES6 代码，那就在 src 目录下创建一个：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// src/example.js
class Hello {
  static world() {
    console.log('Hello, World!');
  }
}
Hello.world();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-配置-babel" tabindex="-1"><a class="header-anchor" href="#_3-配置-babel" aria-hidden="true">#</a> 3. 配置 Babel</h5>
<p>Babel 是通过插件和预设值（preset）来转译代码（因此它可以转译的不只是 ES6）。为了转译 ES6 为 ES5，我们只需要配置 env 预设值就可以了，安装这个插件：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install -D babel-preset-env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们还需要一个配置文件，在项目根目录下创建文件：.babelrc，内容如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// .babelrc
{
  "presets": ["env"]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-创建-npm-命令" tabindex="-1"><a class="header-anchor" href="#_4-创建-npm-命令" aria-hidden="true">#</a> 4. 创建 npm 命令</h5>
<p>这一步不是必须的，因为前面已经配置好了，你可以直接执行命令：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>babel src -d build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样就会把 src 目录下的 Javascript 代码转译成 ES5，并存放在 build 目录下。</p>
<p>习惯上，我们将上门的命令放到 npm 命令中。在项目的 package.json 中，输入下面的内容：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>"scripts": {
  "build": "babel src -d build",
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
