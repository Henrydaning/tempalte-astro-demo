<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_1-npm-install-maximum-call-stack">1.npm install Maximum call stack</RouterLink></li></ul></nav>
<h2 id="_1-npm-install-maximum-call-stack" tabindex="-1"><a class="header-anchor" href="#_1-npm-install-maximum-call-stack" aria-hidden="true">#</a> 1.npm install Maximum call stack</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>项目 npm install 安装依赖时 报错 ： Maximum call stack size exceeded 。 解决思路：
1、删除node_modules之后再去安装
2、清空缓存之后再去安装 npm cache clean --force

npm install


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
