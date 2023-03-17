<template><div><p><img src="/images/home.png" alt="成长"></p>
<nav class="table-of-contents"><ul><li><RouterLink to="#_1-svg-标记组件开发">1.svg 标记组件开发：</RouterLink><ul><li><RouterLink to="#项目图例">项目图例</RouterLink></li><li><RouterLink to="#项目背景">项目背景：</RouterLink></li><li><RouterLink to="#项目功能">项目功能</RouterLink></li><li><RouterLink to="#项目难点">项目难点</RouterLink></li></ul></li><li><RouterLink to="#_2-多维表格组件开发">2.多维表格组件开发</RouterLink><ul><li><RouterLink to="#项目图例-1">项目图例</RouterLink></li><li><RouterLink to="#功能说明罗列">功能说明罗列</RouterLink></li><li><RouterLink to="#_1-利用-canvas-绘制多维表格解决渲染问题。">（1）利用 canvas 绘制多维表格解决渲染问题。</RouterLink></li><li><RouterLink to="#_2-利用市面上-aggrid-进行二次开发节省多维表格开发成本。">（2）利用市面上 aggrid 进行二次开发节省多维表格开发成本。</RouterLink></li><li><RouterLink to="#_3-多维表格中数据的协作">（3）多维表格中数据的协作</RouterLink></li><li><RouterLink to="#_4-多维表格中上传组件类似飞书上传组件的拖拽实现">（4）多维表格中上传组件类似飞书上传组件的拖拽实现</RouterLink></li><li><RouterLink to="#_5-多维表格中记录多层数据-tree-折叠状态">（5）多维表格中记录多层数据 tree 折叠状态</RouterLink></li><li><RouterLink to="#_6-多维表格中对于添加数据后检验当前的是否超出了可视-aggrid-区域">（6）多维表格中对于添加数据后检验当前的是否超出了可视 aggrid 区域</RouterLink></li><li><RouterLink to="#_7-多维表格每一个表格的渲染和编辑">（7）多维表格每一个表格的渲染和编辑</RouterLink></li><li><RouterLink to="#_8-针对多维表格中数据无法垂直居中问题">（8）针对多维表格中数据无法垂直居中问题</RouterLink></li><li><RouterLink to="#_9-多维表格中渲染器和编辑器-只能使用一个根节点-vue3-组件虽然可以多根节点-也不要使用">（9）多维表格中渲染器和编辑器，只能使用一个根节点（vue3 组件虽然可以多根节点，也不要使用）</RouterLink></li><li><RouterLink to="#_10-多维表格中冻结列">（10）多维表格中冻结列</RouterLink></li><li><RouterLink to="#_11-多维表格中左侧是项目列表右侧是甘特图需求开发">（11）多维表格中左侧是项目列表右侧是甘特图需求开发</RouterLink></li></ul></li><li><RouterLink to="#_3-cli-脚手架统一化开发">3.cli 脚手架统一化开发</RouterLink><ul><li><RouterLink to="#项目图例-2">项目图例</RouterLink></li><li><RouterLink to="#_1-脚手架二次封装原因">（1）脚手架二次封装原因</RouterLink></li><li><RouterLink to="#已经封装的脚手架说明">已经封装的脚手架说明：</RouterLink></li><li><RouterLink to="#_2-如何定制化脚手架-如何自定义脚手架的创建">（2）如何定制化脚手架，如何自定义脚手架的创建？</RouterLink></li></ul></li><li><RouterLink to="#_4-monorepo-搭建统一的公司管理代码平台">4.monorepo 搭建统一的公司管理代码平台</RouterLink><ul><li><RouterLink to="#_1-统一公共-utils-功能库">（1）统一公共 utils 功能库，</RouterLink></li><li><RouterLink to="#_2-统一管理常见的安装包-只安装一个-其他的都可以使用">（2）统一管理常见的安装包，只安装一个，其他的都可以使用</RouterLink></li><li><RouterLink to="#_3-减少代码的冗余">（3）减少代码的冗余</RouterLink></li><li><RouterLink to="#_4-pnpm-安装占用资源小-维护成本低。">（4）pnpm 安装占用资源小，维护成本低。</RouterLink></li></ul></li><li><RouterLink to="#_5-verdaccio-搭建公司的-npm-私有服务器和组件库">5.verdaccio 搭建公司的 npm 私有服务器和组件库</RouterLink></li><li><RouterLink to="#_6-jenkins-部署一体化">6.jenkins 部署一体化</RouterLink></li><li><RouterLink to="#_7-微前端开发">7.微前端开发</RouterLink></li><li><RouterLink to="#_8-lerna-monorepo-架构实战">8.lerna-monorepo 架构实战</RouterLink><ul><li><RouterLink to="#_1-创建-lerna-工程">1.创建 Lerna 工程：</RouterLink></li><li><RouterLink to="#_2-创建两个-package">2.创建两个 package：</RouterLink></li><li><RouterLink to="#_3-package-中互相引用-怎么创建链接">3.package 中互相引用，怎么创建链接</RouterLink></li><li><RouterLink to="#_4-如果使用包管理工具">4.如果使用包管理工具</RouterLink></li></ul></li></ul></nav>
<h2 id="_1-svg-标记组件开发" tabindex="-1"><a class="header-anchor" href="#_1-svg-标记组件开发" aria-hidden="true">#</a> 1.svg 标记组件开发：</h2>
<h3 id="项目图例" tabindex="-1"><a class="header-anchor" href="#项目图例" aria-hidden="true">#</a> 项目图例</h3>
<p><img src="/images/svgrecord.png" alt="svg项目开发使用图例"></p>
<h3 id="项目背景" tabindex="-1"><a class="header-anchor" href="#项目背景" aria-hidden="true">#</a> 项目背景：</h3>
<p>svg 五线谱曲谱，在学习的时候，做一些段落的标记，每一个标记记录当前的位置，然后上课学习的时候，根据当前的曲谱总长度，计算出当前的相对位置。</p>
<h3 id="项目功能" tabindex="-1"><a class="header-anchor" href="#项目功能" aria-hidden="true">#</a> 项目功能</h3>
<ul>
<li>支持 svg 拖拽</li>
<li>svg 绘制矩形图，标记位置</li>
<li>svg 绘制后，可以添加文字说明和移动位置</li>
<li>svg 支持在不同设备大屏显示后，位置保持相对性。</li>
</ul>
<h3 id="项目难点" tabindex="-1"><a class="header-anchor" href="#项目难点" aria-hidden="true">#</a> 项目难点</h3>
<ul>
<li>段落歌词标记，如果换行，涉及到一维数组转 tree 数据结构
对于一句歌词出现了折行问题，这里折行后的新的矩形数据和原来的进行合并，组合到 children 属性中。
下一次遍历渲染的时候，对于 tree 数据进行扁平化处理，保证矩形渲染色块。</li>
<li>段落歌词标记后，如何不唱整段，只唱标记部分。
根据当前的歌曲</li>
</ul>
<h2 id="_2-多维表格组件开发" tabindex="-1"><a class="header-anchor" href="#_2-多维表格组件开发" aria-hidden="true">#</a> 2.多维表格组件开发</h2>
<p>维格，飞书许多的多维表格，类似非关系型数据库一样，将数据进行任意整合。</p>
<h3 id="项目图例-1" tabindex="-1"><a class="header-anchor" href="#项目图例-1" aria-hidden="true">#</a> 项目图例</h3>
<p><img src="/images/noshortcut.png" alt="展示当前没有快捷方式的多维表格"></p>
<p><img src="/images/ganteshortcut.png" alt="展示当前开启快捷方式的多维表格"></p>
<h3 id="功能说明罗列" tabindex="-1"><a class="header-anchor" href="#功能说明罗列" aria-hidden="true">#</a> 功能说明罗列</h3>
<h3 id="_1-利用-canvas-绘制多维表格解决渲染问题。" tabindex="-1"><a class="header-anchor" href="#_1-利用-canvas-绘制多维表格解决渲染问题。" aria-hidden="true">#</a> （1）利用 canvas 绘制多维表格解决渲染问题。</h3>
<h3 id="_2-利用市面上-aggrid-进行二次开发节省多维表格开发成本。" tabindex="-1"><a class="header-anchor" href="#_2-利用市面上-aggrid-进行二次开发节省多维表格开发成本。" aria-hidden="true">#</a> （2）利用市面上 aggrid 进行二次开发节省多维表格开发成本。</h3>
<h3 id="_3-多维表格中数据的协作" tabindex="-1"><a class="header-anchor" href="#_3-多维表格中数据的协作" aria-hidden="true">#</a> （3）多维表格中数据的协作</h3>
<p>利用 singnalIR 通知消息。</p>
<h3 id="_4-多维表格中上传组件类似飞书上传组件的拖拽实现" tabindex="-1"><a class="header-anchor" href="#_4-多维表格中上传组件类似飞书上传组件的拖拽实现" aria-hidden="true">#</a> （4）多维表格中上传组件类似飞书上传组件的拖拽实现</h3>
<h3 id="_5-多维表格中记录多层数据-tree-折叠状态" tabindex="-1"><a class="header-anchor" href="#_5-多维表格中记录多层数据-tree-折叠状态" aria-hidden="true">#</a> （5）多维表格中记录多层数据 tree 折叠状态</h3>
<p>专门的 api 进行二次开发</p>
<h3 id="_6-多维表格中对于添加数据后检验当前的是否超出了可视-aggrid-区域" tabindex="-1"><a class="header-anchor" href="#_6-多维表格中对于添加数据后检验当前的是否超出了可视-aggrid-区域" aria-hidden="true">#</a> （6）多维表格中对于添加数据后检验当前的是否超出了可视 aggrid 区域</h3>
<p>利用多维表格的绘制后，自动分配多维表格的宽度属性，每一次添加前后判断当前的组件可视区。进行弹窗题型。</p>
<h3 id="_7-多维表格每一个表格的渲染和编辑" tabindex="-1"><a class="header-anchor" href="#_7-多维表格每一个表格的渲染和编辑" aria-hidden="true">#</a> （7）多维表格每一个表格的渲染和编辑</h3>
<p>aggrid 有表格的渲染器和编辑器模式，可以进行二次开发，配置 params 中渲染器和编辑器。
编辑的时候，调用编辑器，渲染的时候，调用渲染器。</p>
<h3 id="_8-针对多维表格中数据无法垂直居中问题" tabindex="-1"><a class="header-anchor" href="#_8-针对多维表格中数据无法垂直居中问题" aria-hidden="true">#</a> （8）针对多维表格中数据无法垂直居中问题</h3>
<p>利用 flex 布局后，然后宽度高度必须给 100%</p>
<h3 id="_9-多维表格中渲染器和编辑器-只能使用一个根节点-vue3-组件虽然可以多根节点-也不要使用" tabindex="-1"><a class="header-anchor" href="#_9-多维表格中渲染器和编辑器-只能使用一个根节点-vue3-组件虽然可以多根节点-也不要使用" aria-hidden="true">#</a> （9）多维表格中渲染器和编辑器，只能使用一个根节点（vue3 组件虽然可以多根节点，也不要使用）</h3>
<h3 id="_10-多维表格中冻结列" tabindex="-1"><a class="header-anchor" href="#_10-多维表格中冻结列" aria-hidden="true">#</a> （10）多维表格中冻结列</h3>
<p>利用当前的 lockPositon 和 pick 属性，标记冻结</p>
<h3 id="_11-多维表格中左侧是项目列表右侧是甘特图需求开发" tabindex="-1"><a class="header-anchor" href="#_11-多维表格中左侧是项目列表右侧是甘特图需求开发" aria-hidden="true">#</a> （11）多维表格中左侧是项目列表右侧是甘特图需求开发</h3>
<p>根据项目需求，左侧可以点击按钮，快速切换当前的视图到不同的甘特图区域。</p>
<ul>
<li>实现快速切换当前的任务中的甘特图区域</li>
<li>实现甘特图区域可以调整查看不同时间段的所有任务</li>
<li>甘特图中可以进行工时任务的等级的查看管理</li>
<li>甘特图区域头部日期根据不同的节假日，进行列的阴影展示渲染区分</li>
</ul>
<h2 id="_3-cli-脚手架统一化开发" tabindex="-1"><a class="header-anchor" href="#_3-cli-脚手架统一化开发" aria-hidden="true">#</a> 3.cli 脚手架统一化开发</h2>
<h3 id="项目图例-2" tabindex="-1"><a class="header-anchor" href="#项目图例-2" aria-hidden="true">#</a> 项目图例</h3>
<p><img src="/images/cli1.png" alt="脚手架1">
<img src="/images/cli2.png" alt="脚手架2"></p>
<p><img src="/images/cli3.png" alt="脚手架3"></p>
<h3 id="_1-脚手架二次封装原因" tabindex="-1"><a class="header-anchor" href="#_1-脚手架二次封装原因" aria-hidden="true">#</a> （1）脚手架二次封装原因</h3>
<p>因为作为开发，已经从接触了 vue2,eslint,prettier,ts,webpack,vite,react 这些框架的太多大家已经有了最优实现，可以快速在项目中使用。</p>
<p>因此内置脚手架可以最大限度的实现提效。这样每一次的项目创建，可以最快的使用历史上的最优代码，而不是通过各种代码的删减，粘贴和测试，在初始化标准工程上再花费太多时间，使用业界的 ts+eslint+prettier+ts 作为校验工具，同时各种最优的实现库：比如 ts 封装的 axios 库，比如 vue3 的组件库框架，比如最新的 vue-request，vueUse，自动导入组件工具，monorepo 实现等等这些框架和技术都是前辈和自己历经 bug 的结果，所以沉淀下来，可以快速作为新的起点，而且这个起点经得住考验。</p>
<h3 id="已经封装的脚手架说明" tabindex="-1"><a class="header-anchor" href="#已经封装的脚手架说明" aria-hidden="true">#</a> 已经封装的脚手架说明：</h3>
<h4 id="a-已经做好各种插件和工具库的使用和测试准备" tabindex="-1"><a class="header-anchor" href="#a-已经做好各种插件和工具库的使用和测试准备" aria-hidden="true">#</a> （a）已经做好各种插件和工具库的使用和测试准备</h4>
<h4 id="b-支持-webpack4-vite2-vite3-vue2-vue3-typescript-常见的工具链使用" tabindex="-1"><a class="header-anchor" href="#b-支持-webpack4-vite2-vite3-vue2-vue3-typescript-常见的工具链使用" aria-hidden="true">#</a> （b）支持 webpack4,vite2,vite3,vue2,vue3,typescript 常见的工具链使用</h4>
<h4 id="c-支持代码统一规范和格式化需求-cz-git-husky-eslint-prettier-settings-json-的插件" tabindex="-1"><a class="header-anchor" href="#c-支持代码统一规范和格式化需求-cz-git-husky-eslint-prettier-settings-json-的插件" aria-hidden="true">#</a> （c）支持代码统一规范和格式化需求：cz-git,husky,eslint,prettier,settings.json 的插件</h4>
<h4 id="d-有专门的公共组件库开发脚手架" tabindex="-1"><a class="header-anchor" href="#d-有专门的公共组件库开发脚手架" aria-hidden="true">#</a> （d）有专门的公共组件库开发脚手架</h4>
<h4 id="e-专门针对最新工具适配的各种工具封装。" tabindex="-1"><a class="header-anchor" href="#e-专门针对最新工具适配的各种工具封装。" aria-hidden="true">#</a> （e）专门针对最新工具适配的各种工具封装。</h4>
<h3 id="_2-如何定制化脚手架-如何自定义脚手架的创建" tabindex="-1"><a class="header-anchor" href="#_2-如何定制化脚手架-如何自定义脚手架的创建" aria-hidden="true">#</a> （2）如何定制化脚手架，如何自定义脚手架的创建？</h3>
<p>因为每一次重新创建都需要 pnpm create vite 或是利用 vue create xxx,如何有自己的创建脚手架的命令行。</p>
<p>脚手架利用 commander 和 inquirer 两个包，结合 downrepo 进行已经配置好的框架代码位置保存
具体见 15 章节</p>
<p><RouterLink to="/15%E5%B7%A5%E5%85%B7%E5%92%8C%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE%E5%B7%A5%E7%A8%8B%E5%8C%96%E9%97%AE%E9%A2%98%E8%AE%B0%E5%BD%95/000%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96%E4%B8%AD%E7%9A%84%E8%84%9A%E6%89%8B%E6%9E%B6%E5%88%9B%E5%BB%BA%E5%92%8C%E4%BD%BF%E7%94%A8.html">脚手架封装开发</RouterLink></p>
<h2 id="_4-monorepo-搭建统一的公司管理代码平台" tabindex="-1"><a class="header-anchor" href="#_4-monorepo-搭建统一的公司管理代码平台" aria-hidden="true">#</a> 4.monorepo 搭建统一的公司管理代码平台</h2>
<p>个人项目地址：</p>
<h3 id="_1-统一公共-utils-功能库" tabindex="-1"><a class="header-anchor" href="#_1-统一公共-utils-功能库" aria-hidden="true">#</a> （1）统一公共 utils 功能库，</h3>
<p>这样 react,vue，各种前端项目使用统一的 axios 的时候，直接用一处。
利用 pnpm i xxx -r filter xxx</p>
<h3 id="_2-统一管理常见的安装包-只安装一个-其他的都可以使用" tabindex="-1"><a class="header-anchor" href="#_2-统一管理常见的安装包-只安装一个-其他的都可以使用" aria-hidden="true">#</a> （2）统一管理常见的安装包，只安装一个，其他的都可以使用</h3>
<h3 id="_3-减少代码的冗余" tabindex="-1"><a class="header-anchor" href="#_3-减少代码的冗余" aria-hidden="true">#</a> （3）减少代码的冗余</h3>
<h3 id="_4-pnpm-安装占用资源小-维护成本低。" tabindex="-1"><a class="header-anchor" href="#_4-pnpm-安装占用资源小-维护成本低。" aria-hidden="true">#</a> （4）pnpm 安装占用资源小，维护成本低。</h3>
<h2 id="_5-verdaccio-搭建公司的-npm-私有服务器和组件库" tabindex="-1"><a class="header-anchor" href="#_5-verdaccio-搭建公司的-npm-私有服务器和组件库" aria-hidden="true">#</a> 5.verdaccio 搭建公司的 npm 私有服务器和组件库</h2>
<p><img src="/images/verdaccio0.png" alt="verdaccio">
【具体见 15 章节】
<RouterLink to="/15%E5%B7%A5%E5%85%B7%E5%92%8C%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE%E5%B7%A5%E7%A8%8B%E5%8C%96%E9%97%AE%E9%A2%98%E8%AE%B0%E5%BD%95/001vitevue3%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E5%BA%93.html">公司组件库和 npm 私有服务器</RouterLink></p>
<h2 id="_6-jenkins-部署一体化" tabindex="-1"><a class="header-anchor" href="#_6-jenkins-部署一体化" aria-hidden="true">#</a> 6.jenkins 部署一体化</h2>
<p>【具体见 15 章节】
<RouterLink to="/15%E5%B7%A5%E5%85%B7%E5%92%8C%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE%E5%B7%A5%E7%A8%8B%E5%8C%96%E9%97%AE%E9%A2%98%E8%AE%B0%E5%BD%95/000jenkins%E9%83%A8%E7%BD%B2%E8%AE%B0%E5%BD%95.html">jenkins 一体化部署：windows,linux</RouterLink></p>
<h2 id="_7-微前端开发" tabindex="-1"><a class="header-anchor" href="#_7-微前端开发" aria-hidden="true">#</a> 7.微前端开发</h2>
<p>利用 micro-app 的京东的微前端架构。</p>
<p>qiankun 也可以。</p>
<h2 id="_8-lerna-monorepo-架构实战" tabindex="-1"><a class="header-anchor" href="#_8-lerna-monorepo-架构实战" aria-hidden="true">#</a> 8.lerna-monorepo 架构实战</h2>
<p><a href="https://gitee.com/nyhxiaoning/lerna-workspace-projects-demos.git" target="_blank" rel="noopener noreferrer">lerna 项目架构管理汇总使用<ExternalLinkIcon/></a>
如果某一个项目 yarn 安装不上，删除目录，重新创建子项目，重新安装
快速创建脚手架命令</p>
<h3 id="_1-创建-lerna-工程" tabindex="-1"><a class="header-anchor" href="#_1-创建-lerna-工程" aria-hidden="true">#</a> 1.创建 Lerna 工程：</h3>
<p>git init lerna-demo &amp;&amp; cd lerna-demo &amp;&amp; lerna init</p>
<h3 id="_2-创建两个-package" tabindex="-1"><a class="header-anchor" href="#_2-创建两个-package" aria-hidden="true">#</a> 2.创建两个 package：</h3>
<p>lerna create lerna-module1
lerna create lerna-module2</p>
<h3 id="_3-package-中互相引用-怎么创建链接" tabindex="-1"><a class="header-anchor" href="#_3-package-中互相引用-怎么创建链接" aria-hidden="true">#</a> 3.package 中互相引用，怎么创建链接</h3>
<p>比如 module2 使用了 module1 的包</p>
<p>lerna add module1 --scope module2
运行测试</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>lerna run  test  --scope=lerna-module1或是
lerna run  test  --scope lerna-module1或是
lerna run  test  packages/lerna-module1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-如果使用包管理工具" tabindex="-1"><a class="header-anchor" href="#_4-如果使用包管理工具" aria-hidden="true">#</a> 4.如果使用包管理工具</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>如果您希望Lerna将此过程委托给您使用的包管理器，请在Lerna.json中设置useWorkspaces:true。
如果没有设置useWorkspaces，那么设置package
如果没有将useWorkspaces设置为true，则需要设置packages属性，该属性将告诉Lerna在哪里查找包。json文件。
lerna.json 中的内容
- useNx
当Lerna设置为使用Nx并检测到Nx时。在工作区中使用targetDefaults的json，它将遵从Nx来检测任务依赖项。

- $schema
json schema的格式化校验

lerna 好处
Lerna 是一个管理工具，用于管理包含多个软件包（package）的 JavaScript 项目， 是 Babel 自己用来维护自己的 Monorepo 并开源出的一个项目。

它可以：

（1）统一的一套规范、构建标准； （2）对相互耦合较大、相互独立的 JS/Git 库进行管理； （3）统一的工作流和 Code Sharing（代码共享）。

入门学习
（1）全局安装

npm installl --global  lerna
（2）初始化 git 代码仓库:创建仓库

git init  lerna-repo &amp;&amp; cd  lerna-repo
（3）初始化 lerna

lerna  init
（4）安装 lerna 到仓库 node_modules 中

lerna create  lerna-module1
lerna create  lerna-module2
（5）如果知识上面那么 1-4，没有什么好处

这里我们使用优化版本 yarn 安装。

lerna 管理命令
（1）lerna init 将仓库初始化为一个 lerna

（2）lerna create package 创建一个 package 到项目工程的 packagesxia

（3）lerna add [module] 为当前的每一个 package 都安装 module

例如都安装react
lerna  add  react
（4）特殊依赖到指定 package

lerna  add  react-dom  packages/package1
或是
lerna  add  react-dom  --scope=package1
（5）lerna publish 发布 npm

（6）lerna bootstrap 这个安装比较老，我们看新奇的

用于将packages链接在一起，前提是相互依赖的库，并安装package下的依赖到package/node_modules
lerna.json中
配置如下
{
  "version": "1.0.0",
  "npmClient": "yarn",
  "useWorkspaces": true,
}

之后根目录下面的package.json，设置
  "workspaces": [
    "packages/*"
  ],
配置好之后，yarn 可以在根目录或是子目录运行 yarn install 安装

（7）lerna clean 删除各个包下的 node_modules,但是根目录不删除

（8）lerna ls 列出当前仓库的公共软件包

（9）lerna run script 运行脚本

运行某一个包下面的 script

lerna  run  test  --scope  package1
（10）卸载依赖

单独卸载和全部卸载
lerna exec --scope=npm-list  yarn remove listr # 将 npm-list 包下的 listr 卸载

lerna exec -- yarn remove listr # 将所有包下的 listr 卸载


---实战
lerna exec --scope=lerna-module2  yarn remove lerna-module1
卸载lerna-module2中安装的lerna-module1
lerna 配置文件
lerna.json 配置文件可以指定工作模式，packages 的位置以及一些命令参数如下

{
  "version": "1.0.0",
  "npmClient": "yarn",
  "useWorkspaces": true,
  "packages": [
    "packages/*"
  ],
  "command": {
    "bootstrap": {
      "npmClientArgs": [
        "--no-package-lock"
      ]
    },
    "version": {},
    "publish": {
      "npmClient": "npm",
      "ignoreChanges": [
        "**/*.md",
        "**/test/**"
      ],
      "message": "chore(release): publish",
      "registry": "https://registry.npmjs.org",
      "conventionalCommits": true
    }
  }
}


含义解释
version: 当前仓库的版本，Independent mode 请设置为 independent；

packages: 指定包所在的目录，支持指定多个目录；

npmClient: 允许指定命令使用的client， 默认是 npm， 可以设置成 yarn；

useWorkspaces: 使用 yarn workspaces 管理 Monorepo；

command.bootstrap.npmClientArgs: 指定默认传给 lerna bootstrap 命令的参数；

command.publish.ignoreChanges: 指定那些目录或者文件的变更不用触发 package 版本的变更；

command.publish.message: 执行发布版本更新时的生成的 commit message；

command.publish.registry: 指定发布到的 registry url，比如可以发布到指定私服，默认是 npmjs.org；

command.publish.conventionalCommits: lerna version 将生成 CHANGELOG.md files（如果设置了这个，lerna 管理模式将直接使用固定模式，version = independent 的配置将失效）。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
