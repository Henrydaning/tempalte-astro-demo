<template><div><p><img src="/images/home.png" alt="成长"></p>
<nav class="table-of-contents"><ul><li><RouterLink to="#回到博客主页">回到博客主页</RouterLink><ul><li><RouterLink to="#_001sass和sass-loader">001sass和sass-loader</RouterLink></li><li><RouterLink to="#_002vue2-7-0和vue-template-compiler">002vue2.7.0和vue-template-compiler</RouterLink></li><li><RouterLink to="#_003elmentplus和vue-router">003elmentplus和vue-router</RouterLink></li><li><RouterLink to="#_004打包exe的时候对应三个插件版本">004打包exe的时候对应三个插件版本</RouterLink></li><li><RouterLink to="#_005自动导入elementplus和unplugin-auto-import版本">005自动导入elementplus和unplugin-auto-import版本</RouterLink></li><li><RouterLink to="#_006less和less-loader版本关系">006less和less-loader版本关系</RouterLink></li><li><RouterLink to="#_007webpack4或是webpack5的区别">007webpack4或是webpack5的区别</RouterLink></li><li><RouterLink to="#_008-webpack和webpack-dev-server版本对应-不要默认安装最新版本">008 webpack和webpack-dev-server版本对应，不要默认安装最新版本</RouterLink></li><li><RouterLink to="#_009node-sass和sass">009node-sass和sass</RouterLink></li></ul></li></ul></nav>
<h2 id="回到博客主页" tabindex="-1"><a class="header-anchor" href="#回到博客主页" aria-hidden="true">#</a> 回到博客主页</h2>
<p><RouterLink to="/">博客首页</RouterLink></p>
<h3 id="_001sass和sass-loader" tabindex="-1"><a class="header-anchor" href="#_001sass和sass-loader" aria-hidden="true">#</a> 001sass和sass-loader</h3>
<p>这个版本之间关系严格，不可以安装错误。</p>
<h3 id="_002vue2-7-0和vue-template-compiler" tabindex="-1"><a class="header-anchor" href="#_002vue2-7-0和vue-template-compiler" aria-hidden="true">#</a> 002vue2.7.0和vue-template-compiler</h3>
<h3 id="_003elmentplus和vue-router" tabindex="-1"><a class="header-anchor" href="#_003elmentplus和vue-router" aria-hidden="true">#</a> 003elmentplus和vue-router</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue-router4.0.0和不大于elementplus2.2.0
高了，就会报错
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_004打包exe的时候对应三个插件版本" tabindex="-1"><a class="header-anchor" href="#_004打包exe的时候对应三个插件版本" aria-hidden="true">#</a> 004打包exe的时候对应三个插件版本</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>"vue-cli-plugin-electron-builder": "~2.1.1"
"electron": "^17.4.7",
"electron-devtools-installer": "^3.1.0",

同时此时electron设置代理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_005自动导入elementplus和unplugin-auto-import版本" tabindex="-1"><a class="header-anchor" href="#_005自动导入elementplus和unplugin-auto-import版本" aria-hidden="true">#</a> 005自动导入elementplus和unplugin-auto-import版本</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>node16.13.0
unplugin-vue-components版本是0.21.2

unplugin-auto-import版本是0.6.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_006less和less-loader版本关系" tabindex="-1"><a class="header-anchor" href="#_006less和less-loader版本关系" aria-hidden="true">#</a> 006less和less-loader版本关系</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install --save less@3.11.1 less-loader@5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_007webpack4或是webpack5的区别" tabindex="-1"><a class="header-anchor" href="#_007webpack4或是webpack5的区别" aria-hidden="true">#</a> 007webpack4或是webpack5的区别</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vuecli4对应构建webapack4
vuecli5构建webpack

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_008-webpack和webpack-dev-server版本对应-不要默认安装最新版本" tabindex="-1"><a class="header-anchor" href="#_008-webpack和webpack-dev-server版本对应-不要默认安装最新版本" aria-hidden="true">#</a> 008 webpack和webpack-dev-server版本对应，不要默认安装最新版本</h3>
<p>webpack5.56.1对应的webpack-dev-serve是3.11.2</p>
<p>webpack4.35.3对应的webpack-dev-serve是3.11.0可以,同时需要webpack-cli支持，webpack-cli3.3.6</p>
<h3 id="_009node-sass和sass" tabindex="-1"><a class="header-anchor" href="#_009node-sass和sass" aria-hidden="true">#</a> 009node-sass和sass</h3>
<p>作为编译sass的包，node-sass是c++的库，但是运行依赖和环境总是出现问题。官方使用dart-sass解决。</p>
<p>目前dart-sass已经更名为sass.</p>
</div></template>
