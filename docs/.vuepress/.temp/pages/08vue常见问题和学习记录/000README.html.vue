<template><div><p><img src="/images/home.png" alt="成长"></p>
<nav class="table-of-contents"><ul><li><RouterLink to="#回到博客主页">回到博客主页</RouterLink></li><li><RouterLink to="#vue项目创建脚手架方式汇总">vue项目创建脚手架方式汇总</RouterLink><ul><li><RouterLink to="#默认都是依赖vite框架搭建。">默认都是依赖vite框架搭建。</RouterLink></li><li><RouterLink to="#搭建webpack的vue框架命令">搭建webpack的vue框架命令</RouterLink></li><li><RouterLink to="#_000-资料汇总">（000）资料汇总</RouterLink></li></ul></li><li><RouterLink to="#_000vue2升级vue3的api变化">000vue2升级vue3的api变化</RouterLink></li><li><RouterLink to="#_001vue3升级后个人使用汇总案例">001Vue3升级后个人使用汇总案例</RouterLink></li><li><RouterLink to="#_001vue版本升级和功能说明">001Vue版本升级和功能说明</RouterLink></li><li><RouterLink to="#_002vue3使用汇总问题记录和解决方案-2">002vue3使用汇总问题记录和解决方案(2)</RouterLink></li><li><RouterLink to="#_003vue3使用汇总问题记录和解决方案-3">003vue3使用汇总问题记录和解决方案(3)</RouterLink></li><li><RouterLink to="#_004vue3每周使用总结案例-01">004vue3每周使用总结案例（01）</RouterLink></li><li><RouterLink to="#_005vue3经典开发总结案例-02">005vue3经典开发总结案例（02）</RouterLink></li><li><RouterLink to="#_006vue3中基础开发setup语法糖总结开发使用">006vue3中基础开发setup语法糖总结开发使用</RouterLink></li><li><RouterLink to="#_007vue生命周期和渲染记录整理">007Vue生命周期和渲染记录整理</RouterLink></li><li><RouterLink to="#_007vue生命周期和执行顺序记录整理">007Vue生命周期和执行顺序记录整理</RouterLink></li><li><RouterLink to="#_008vue2和vue3脚手架基础知识汇总整理">008vue2和vue3脚手架基础知识汇总整理</RouterLink></li><li><RouterLink to="#_009es12发布了-普通项目使用需要做什么">009ES12发布了,普通项目使用需要做什么</RouterLink></li></ul></nav>
<h2 id="回到博客主页" tabindex="-1"><a class="header-anchor" href="#回到博客主页" aria-hidden="true">#</a> 回到博客主页</h2>
<p><RouterLink to="/">博客首页</RouterLink></p>
<h2 id="vue项目创建脚手架方式汇总" tabindex="-1"><a class="header-anchor" href="#vue项目创建脚手架方式汇总" aria-hidden="true">#</a> vue项目创建脚手架方式汇总</h2>
<h1 id="使用npm-init-vue-3和npm-create-vite区别" tabindex="-1"><a class="header-anchor" href="#使用npm-init-vue-3和npm-create-vite区别" aria-hidden="true">#</a> 使用npm init vue@3和npm create vite区别</h1>
<h3 id="默认都是依赖vite框架搭建。" tabindex="-1"><a class="header-anchor" href="#默认都是依赖vite框架搭建。" aria-hidden="true">#</a> 默认都是依赖vite框架搭建。</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm init vue@2只能搭建vue2的vite框架。
npm init vue@3只能搭建vue3的vite框架。
npm  create可以搭建多种语言的vite框架。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="搭建webpack的vue框架命令" tabindex="-1"><a class="header-anchor" href="#搭建webpack的vue框架命令" aria-hidden="true">#</a> 搭建webpack的vue框架命令</h3>
<p>vue createxxx或是vue init webpack xxx</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>之前vue-cli的命令行升级了，目前使用vue create可以创建vue2或是vue3
npm i -g @vue/cli-init安装全局，或是npm install @vue/cli -g
然后创建项目
vue  create xxx
(vue-cli3集成了webpack4)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>vue2
npm install -g vue-cli;//验证vue -V
注意：vue2和vue3cli不能同时使用。</p>
</li>
<li>
<p>vue3
npm install @vue/cli -g;//验证vue -V
(yarn安装 yarn global add @vue/cli)
vue create cli-vue2  // 创建cli-vue2项目  ，注意项目名称不能为驼峰</p>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
目前vue3中@vue/cli已经被移除了，使用npm i -g @vue/cli-init

然后vue init webpack mytestwebpack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_000-资料汇总" tabindex="-1"><a class="header-anchor" href="#_000-资料汇总" aria-hidden="true">#</a> （000）资料汇总</h3>
<ul>
<li><a href="https://vueuse.org/" target="_blank" rel="noopener noreferrer">vueUse常用的库<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_000vue2升级vue3的api变化" tabindex="-1"><a class="header-anchor" href="#_000vue2升级vue3的api变化" aria-hidden="true">#</a> 000vue2升级vue3的api变化</h2>
<p><RouterLink to="/08vue%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E5%92%8C%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95/000vue2%E5%8D%87%E7%BA%A7vue3%E7%9A%84api%E5%8F%98%E5%8C%96.html">000vue2升级vue3的api变化</RouterLink></p>
<h2 id="_001vue3升级后个人使用汇总案例" tabindex="-1"><a class="header-anchor" href="#_001vue3升级后个人使用汇总案例" aria-hidden="true">#</a> 001Vue3升级后个人使用汇总案例</h2>
<p><RouterLink to="/08vue%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E5%92%8C%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95/001Vue3%E5%8D%87%E7%BA%A7%E5%90%8E%E4%B8%AA%E4%BA%BA%E4%BD%BF%E7%94%A8%E6%B1%87%E6%80%BB%E6%A1%88%E4%BE%8B.html">001Vue3升级后个人使用汇总案例</RouterLink></p>
<h2 id="_001vue版本升级和功能说明" tabindex="-1"><a class="header-anchor" href="#_001vue版本升级和功能说明" aria-hidden="true">#</a> 001Vue版本升级和功能说明</h2>
<p><RouterLink to="/08vue%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E5%92%8C%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95/001Vue%E7%89%88%E6%9C%AC%E5%8D%87%E7%BA%A7%E5%92%8C%E5%8A%9F%E8%83%BD%E8%AF%B4%E6%98%8E.html">001Vue版本升级和功能说明</RouterLink></p>
<h2 id="_002vue3使用汇总问题记录和解决方案-2" tabindex="-1"><a class="header-anchor" href="#_002vue3使用汇总问题记录和解决方案-2" aria-hidden="true">#</a> 002vue3使用汇总问题记录和解决方案(2)</h2>
<p><RouterLink to="/08vue%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E5%92%8C%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95/002vue3%E4%BD%BF%E7%94%A8%E6%B1%87%E6%80%BB%E9%97%AE%E9%A2%98%E8%AE%B0%E5%BD%95%E5%92%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88(2).html">002vue3使用汇总问题记录和解决方案(2)</RouterLink></p>
<h2 id="_003vue3使用汇总问题记录和解决方案-3" tabindex="-1"><a class="header-anchor" href="#_003vue3使用汇总问题记录和解决方案-3" aria-hidden="true">#</a> 003vue3使用汇总问题记录和解决方案(3)</h2>
<p><RouterLink to="/08vue%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E5%92%8C%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95/003vue3%E4%BD%BF%E7%94%A8%E6%B1%87%E6%80%BB%E9%97%AE%E9%A2%98%E8%AE%B0%E5%BD%95%E5%92%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88(3).html">003vue3使用汇总问题记录和解决方案(3)</RouterLink></p>
<h2 id="_004vue3每周使用总结案例-01" tabindex="-1"><a class="header-anchor" href="#_004vue3每周使用总结案例-01" aria-hidden="true">#</a> 004vue3每周使用总结案例（01）</h2>
<p><RouterLink to="/08vue%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E5%92%8C%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95/004vue3%E6%AF%8F%E5%91%A8%E4%BD%BF%E7%94%A8%E6%80%BB%E7%BB%93%E6%A1%88%E4%BE%8B%EF%BC%8801%EF%BC%89.html">004vue3每周使用总结案例（01）</RouterLink></p>
<h2 id="_005vue3经典开发总结案例-02" tabindex="-1"><a class="header-anchor" href="#_005vue3经典开发总结案例-02" aria-hidden="true">#</a> 005vue3经典开发总结案例（02）</h2>
<p><RouterLink to="/08vue%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E5%92%8C%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95/005vue3%E7%BB%8F%E5%85%B8%E5%BC%80%E5%8F%91%E6%80%BB%E7%BB%93%E6%A1%88%E4%BE%8B%EF%BC%8802%EF%BC%89.html">005vue3经典开发总结案例（02）</RouterLink></p>
<h2 id="_006vue3中基础开发setup语法糖总结开发使用" tabindex="-1"><a class="header-anchor" href="#_006vue3中基础开发setup语法糖总结开发使用" aria-hidden="true">#</a> 006vue3中基础开发setup语法糖总结开发使用</h2>
<p><RouterLink to="/08vue%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E5%92%8C%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95/006vue3%E4%B8%AD%E5%9F%BA%E7%A1%80%E5%BC%80%E5%8F%91setup%E8%AF%AD%E6%B3%95%E7%B3%96%E6%80%BB%E7%BB%93%E5%BC%80%E5%8F%91%E4%BD%BF%E7%94%A8.html">006vue3中基础开发setup语法糖总结开发使用</RouterLink></p>
<h2 id="_007vue生命周期和渲染记录整理" tabindex="-1"><a class="header-anchor" href="#_007vue生命周期和渲染记录整理" aria-hidden="true">#</a> 007Vue生命周期和渲染记录整理</h2>
<p><RouterLink to="/08vue%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E5%92%8C%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95/007Vue%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%92%8C%E6%89%A7%E8%A1%8C%E9%A1%BA%E5%BA%8F%E8%AE%B0%E5%BD%95%E6%95%B4%E7%90%86.html">007Vue生命周期和渲染记录整理</RouterLink></p>
<h2 id="_007vue生命周期和执行顺序记录整理" tabindex="-1"><a class="header-anchor" href="#_007vue生命周期和执行顺序记录整理" aria-hidden="true">#</a> 007Vue生命周期和执行顺序记录整理</h2>
<p><RouterLink to="/08vue%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E5%92%8C%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95/007Vue%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%92%8C%E6%B8%B2%E6%9F%93%E8%AE%B0%E5%BD%95%E6%95%B4%E7%90%86.html">007Vue生命周期和执行顺序记录整理</RouterLink></p>
<h2 id="_008vue2和vue3脚手架基础知识汇总整理" tabindex="-1"><a class="header-anchor" href="#_008vue2和vue3脚手架基础知识汇总整理" aria-hidden="true">#</a> 008vue2和vue3脚手架基础知识汇总整理</h2>
<p><RouterLink to="/08vue%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E5%92%8C%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95/008vue2%E5%92%8Cvue3%E8%84%9A%E6%89%8B%E6%9E%B6%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86%E6%B1%87%E6%80%BB%E6%95%B4%E7%90%86.html">008vue2和vue3脚手架基础知识汇总整理</RouterLink></p>
<h2 id="_009es12发布了-普通项目使用需要做什么" tabindex="-1"><a class="header-anchor" href="#_009es12发布了-普通项目使用需要做什么" aria-hidden="true">#</a> 009ES12发布了,普通项目使用需要做什么</h2>
<p><RouterLink to="/08vue%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E5%92%8C%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95/009ES12%E5%8F%91%E5%B8%83%E4%BA%86%2C%E6%99%AE%E9%80%9A%E9%A1%B9%E7%9B%AE%E4%BD%BF%E7%94%A8%E9%9C%80%E8%A6%81%E5%81%9A%E4%BB%80%E4%B9%88.html">009ES12发布了,普通项目使用需要做什么</RouterLink></p>
</div></template>
