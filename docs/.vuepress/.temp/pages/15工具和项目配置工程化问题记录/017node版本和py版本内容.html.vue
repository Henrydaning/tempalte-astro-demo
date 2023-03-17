<template><div><h2 id="_1-volta切换node环境-彻底解决nvm切换node版本" tabindex="-1"><a class="header-anchor" href="#_1-volta切换node环境-彻底解决nvm切换node版本" aria-hidden="true">#</a> 1.volta切换node环境，彻底解决nvm切换node版本</h2>
<ul>
<li>有时候出现.无法识别，切换后重新删除一些依赖</li>
<li>有时候出现：yarn和全局依赖不在一个磁盘</li>
<li>有时候出现npm ERR! code MODULE_NOT_FOUND，npm ERR! Cannot find module 'libnpmfund'</li>
<li>偶发性npm需要手动下载配置</li>
<li>下载nvm需要配置环境变量NVM_HOME，换个电脑又来一次，1个小时
基于上面的原因，彻底使用volta</li>
<li>简单易用，直接安装</li>
<li>node下载好zip版本，切换node自动切换npm</li>
<li>配置代理地址</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm config set registry https://registry.npmmirror.com/
yarn config set registry https://registry.npmmirror.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-nrm切换当前的代理下载地址" tabindex="-1"><a class="header-anchor" href="#_2-nrm切换当前的代理下载地址" aria-hidden="true">#</a> 2.nrm切换当前的代理下载地址</h2>
<p>也可以下载一个包源头代理地址
nrm工具，注意需要用一个优化版本，星号不生效
npm install -g @adams549659584/nrm</p>
<p>切换yarn，全局安装yarn
npm install -g yarn</p>
<h2 id="_3-配置node缓存目录和全局安装包" tabindex="-1"><a class="header-anchor" href="#_3-配置node缓存目录和全局安装包" aria-hidden="true">#</a> 3.配置node缓存目录和全局安装包</h2>
<ul>
<li>同时配置好缓存和安装目录</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm config set prefix “D:\nodejs\node_global” //设置全局包目录
npm config set cache “D:\nodejs\node_cache” //设置缓存目录
npm config list //查看基本配置
npm config get prefix
npm config get cache 

//这里一个小知识：配置设置的时候都是反斜杠windows系统，但是配置好查看
prefix = "D:\\nodeNVM\\node_global"发现都是这种转义


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
