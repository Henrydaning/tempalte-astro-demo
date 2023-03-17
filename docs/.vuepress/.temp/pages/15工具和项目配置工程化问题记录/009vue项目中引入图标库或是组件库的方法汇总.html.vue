<template><div><h2 id="_001-elementplus库的图标" tabindex="-1"><a class="header-anchor" href="#_001-elementplus库的图标" aria-hidden="true">#</a> 001.elementplus库的图标</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@element-plus/icons-vue
使用方法，对于官方的API上面的样式，使用el-icon-delete-solid图标的方式
方法1：&lt;i class="el-icon-share">&lt;/i>（仅仅用于elementUI,elementplus中）

方法2：组件形式按需引入，比如图标叫做：el-icon-delete
那么引入import { Delete } from '@element-plus/icons-vue';//同时注册组件
&lt;el-icon size=
"22"
 color=
"#000"
>&lt;/el-icon>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_002-其他非elementplus图标库的使用-对于图标库其他的引入" tabindex="-1"><a class="header-anchor" href="#_002-其他非elementplus图标库的使用-对于图标库其他的引入" aria-hidden="true">#</a> 002.其他非elementplus图标库的使用：对于图标库其他的引入</h3>
<p>外部图标库，利用uniplugin-icon插件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i -D @iconify-json/xxx
自动安装图标集
// vue.config.js
const Icons = require('unplugin-icons/webpack')
module.exports = {
  configureWebpack: {
    plugins: [
      Icons({
        compiler: 'vue3',
        // 自动安装
        autoInstall: true
      }),
    ],
  }
}
可以使用上面的el-icon包裹。其他的组件
&lt;template>
  &lt;el-icon size="22" color="#000">
    &lt;IconBaseline5g />
  &lt;/el-icon>
&lt;/template>
 
&lt;script setup>
import IconBaseline5g from '~icons/ic/baseline-5g'
&lt;/script>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_003使用svg作为图标自定义svg图片作为图标" tabindex="-1"><a class="header-anchor" href="#_003使用svg作为图标自定义svg图片作为图标" aria-hidden="true">#</a> 003使用svg作为图标自定义svg图片作为图标</h2>
<p>还有另一种方法，写一个svgicon注册文件。下面是更好的方法</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// vue.config.js
const Icons = require('unplugin-icons/webpack')
// 引入loader
const { FileSystemIconLoader } = require('unplugin-icons/loaders')
module.exports = {
  configureWebpack: {
    plugins: [
      Icons({
        compiler: 'vue3',
        autoInstall: true,
        // 自定义图标加载
        customCollections: {
          // home图标集
          // 给svg文件设置fill="currentColor"属性，使图标的颜色具有适应性
          home: FileSystemIconLoader('src/assets/svg/home', svg => svg.replace(/^&lt;svg /, '&lt;svg fill="currentColor" ')),
         // about图标集
          about: FileSystemIconLoader('src/assets/svg/about', svg => svg.replace(/^&lt;svg /, '&lt;svg fill="currentColor" ')),
        },
      }),
    ],
  }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="公司自己的组件库-引入组件" tabindex="-1"><a class="header-anchor" href="#公司自己的组件库-引入组件" aria-hidden="true">#</a> 公司自己的组件库，引入组件</h2>
<p>参考已经成型的项目参考
unplugin-icons 插件提供给我们一个 unplugin-icons/resolver 包，这个包就是用来处理 Icon 相关的自动引入解析的，我们叫它 Icon自动引入解析器，其实实现起来也是非常简单的，具体等看了下面自定义自动引入就明白了。</p>
</div></template>
