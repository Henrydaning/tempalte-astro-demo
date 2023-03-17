<template><div><p>包管理工具的一些经典问题：理解 npm,yarn,pnpm 的核心不同点</p>
<h2 id="_1-npm-和-yarn-扁平化解决了部分扁平化问题-但是也会-存在-a-下面嵌套" tabindex="-1"><a class="header-anchor" href="#_1-npm-和-yarn-扁平化解决了部分扁平化问题-但是也会-存在-a-下面嵌套" aria-hidden="true">#</a> 1.npm 和 yarn 扁平化解决了部分扁平化问题，但是也会 存在 A 下面嵌套</h2>
<p>npm3.x 之前，不同的依赖树分支里，可能有大量实际上是同样版本的依赖。比如 A 包里面可能依赖了 C 包，D 包里面依赖了 C 包，E 包里面依赖了 C 包，导致这样大量的依赖冗余。
npm2 是以嵌套方式安装所有依赖项，但 npm3 试图减轻这种嵌套导致的深度和冗余。 npm3 通过把一些 secondary 依赖项和 primary 依赖项平铺在同一层级的方式来实现这一点。
主要的区别是：
● 目录结构中的位置不再代表着依赖项的类型（primary、secondary 等）
● node_modules 的目录结构取决于安装顺序</p>
<h2 id="_2-怎么理解-npm3-x-中-node-modules-目录结构取决于安装顺序" tabindex="-1"><a class="header-anchor" href="#_2-怎么理解-npm3-x-中-node-modules-目录结构取决于安装顺序" aria-hidden="true">#</a> 2.怎么理解 npm3.x 中 node_modules 目录结构取决于安装顺序</h2>
<p>如果一个 secondary 的依赖同时被两个 primary 依赖所依赖，但是这个 secondary 依赖并没有被下载到顶层目录中，那么它将会被分别下载到这两个 primary 依赖的目录下，这就出现了重复！
但是如果说这个 secondary 的依赖已经被下载到顶层目录中，那它将会在这两个 primary 依赖中共享，并不会出现重复下载！</p>
<h2 id="_3-yarn-是怎么解决依赖重复很多次-嵌套路径过长的问题的呢" tabindex="-1"><a class="header-anchor" href="#_3-yarn-是怎么解决依赖重复很多次-嵌套路径过长的问题的呢" aria-hidden="true">#</a> 3.yarn 是怎么解决依赖重复很多次，嵌套路径过长的问题的呢？</h2>
<p>铺平。所有的依赖不再一层层嵌套了，而是全部在同一层，这样也就没有依赖重复多次的问题了，也就没有路径过长的问题了。
但是一些包也会有一些 node_modules，因为一个包是可能有多个版本的，提升只能提升一个，所以后面再遇到相同包的不同版本，依然还是用嵌套的方式。</p>
<h2 id="_4-相同的-yarn-和-npm-解决不了的问题-幽灵依赖" tabindex="-1"><a class="header-anchor" href="#_4-相同的-yarn-和-npm-解决不了的问题-幽灵依赖" aria-hidden="true">#</a> 4.相同的 yarn 和 npm 解决不了的问题：幽灵依赖</h2>
<p>扁平化的方案也有相应的问题。
最主要的一个问题是幽灵依赖，也就是你明明没有声明在 dependencies 里的依赖，但在代码里却可以 require 进来。
这个也很容易理解，因为都铺平了嘛，那依赖的依赖也是可以找到的。
但是这样是有隐患的，因为没有显式依赖，万一有一天别的包不依赖这个包了，那你的代码也就不能跑了，因为你依赖这个包，但是现在不会被安装了。
这就是幽灵依赖的问题。</p>
<h2 id="_5-pnpm-怎样解决幽灵依赖的问题" tabindex="-1"><a class="header-anchor" href="#_5-pnpm-怎样解决幽灵依赖的问题" aria-hidden="true">#</a> 5.pnpm 怎样解决幽灵依赖的问题</h2>
<p>pnpm 则是用了另一种方式，不再是复制了，而是都从全局 store 硬连接到 node_modules/.pnpm，然后之间通过软链接来组织依赖关系。
这样不但节省磁盘空间，也没有幽灵依赖问题，安装速度还快，从机制上来说完胜 npm 和 yarn。
pnpm 就是凭借这个对 npm 和 yarn 降维打击的。</p>
<h2 id="_6-具体讲讲这个-pnpm-的-node-modules-解决幽灵依赖原理" tabindex="-1"><a class="header-anchor" href="#_6-具体讲讲这个-pnpm-的-node-modules-解决幽灵依赖原理" aria-hidden="true">#</a> 6.具体讲讲这个 pnpm 的 node_modules 解决幽灵依赖原理</h2>
<p>pnpm 是如何解决这个嵌套依赖问题：两个诀窍
Pnpm 的新用户们经常会问我关于 pnpm 创建的奇怪的 node_modules 结构。 为什么不是平铺的？ 次级依赖去哪了？
第一个：node_modules 中只有一个叫 .pnpm 的文件夹以及一个叫做 express 的符号链接。但与 npm v3,4,5,6 或 yarn v1 创建的平铺的 node_modules 不同的是，它保留了包之间的相互隔离。
第二个：pnpm 的 node_modules 结构的第二个诀窍是包的依赖项与依赖包的实际位置位于同一目录级别。express 所有的依赖都软链至了 node_modules/.pnpm/ 中的对应目录。
补充一个点：
有 peer 依赖的包的结构更加复杂一些，但思路是一样的：使用软链与平铺目录来构建一个嵌套结构。</p>
<h2 id="_7-说说对于-pnpm-的软连接和硬链接" tabindex="-1"><a class="header-anchor" href="#_7-说说对于-pnpm-的软连接和硬链接" aria-hidden="true">#</a> 7.说说对于 pnpm 的软连接和硬链接</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>--------------软链接
node_modules 中只有一个叫 .pnpm 的文件夹以及一个叫做 express 的符号链接。
express 所有的依赖都软链至了 node_modules/.pnpm/ 中的对应目录。

--------------硬链接
pnpm 会在全局的 store 目录里存储项目 node_modules 文件的 hard links 。
在 pnpm 中，看上去这个 a 依赖同时占用了 1MB 的 node_modules 目录以及全局 store 目录 1MB
 的空间(加起来是 2MB)，
 但因为 hard link 的机制使得两个目录下相同的 1MB 空间能从两个不同位置进行寻址。

pnpm


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
