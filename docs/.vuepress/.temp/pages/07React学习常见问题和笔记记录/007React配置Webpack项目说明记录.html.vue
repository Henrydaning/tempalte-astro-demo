<template><div><h2 id="react-的环境变量-dotenv-cli" tabindex="-1"><a class="header-anchor" href="#react-的环境变量-dotenv-cli" aria-hidden="true">#</a> React 的环境变量：dotenv-cli</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i dotenv-cli --save-dev

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-实现-vue-和-react-项目中-webpack-配置可以随意转化" tabindex="-1"><a class="header-anchor" href="#_2-实现-vue-和-react-项目中-webpack-配置可以随意转化" aria-hidden="true">#</a> 2.实现 vue 和 react 项目中 webpack 配置可以随意转化</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
react-app-rewired和custom-cra扁平化webpack配置

可以通过配置相关内容文件引入自定义配置，或是放在根目录下面
config\config-overrides.js
需要配置一下package.json字段
  "config-overrides-path": "config/config-overrides.js",
相关使用的案例说明：

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
