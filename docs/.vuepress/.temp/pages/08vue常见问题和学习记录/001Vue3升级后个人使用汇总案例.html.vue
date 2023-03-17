<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_1-setup-name-增强">1.setup name 增强</RouterLink><ul><li><RouterLink to="#vite-框架增加一个插件-解决-setup-的名称问题">vite 框架增加一个插件，解决 setup 的名称问题</RouterLink></li></ul></li><li><RouterLink to="#_2-配置-api-自动导入方式">2.配置 api 自动导入方式</RouterLink></li><li><RouterLink to="#_3-告别使用-ref-后的-value-的使用。">3.告别使用 ref 后的.value 的使用。</RouterLink></li><li><RouterLink to="#_4-自动导入图片">4 自动导入图片</RouterLink></li><li><RouterLink to="#_5-vue-中如何支持-jsx-和-tsx。">5.vue 中如何支持 jsx 和 tsx。</RouterLink><ul><li><RouterLink to="#解决沙箱报错-iframe-中-cesium-无法执行的爆粗">解决沙箱报错 iframe 中 cesium 无法执行的爆粗</RouterLink></li><li><RouterLink to="#打通-ts-和-js-最后一道">打通 ts 和 js 最后一道</RouterLink></li><li><RouterLink to="#vite-中如何配置">vite 中如何配置</RouterLink></li><li><RouterLink to="#webpack-中如何配置">webpack 中如何配置</RouterLink></li><li><RouterLink to="#_5-1-模块安装变化">5.1 模块安装变化</RouterLink></li></ul></li><li><RouterLink to="#_6-vue4rouer-的安装">6.vue4rouer 的安装</RouterLink></li><li><RouterLink to="#_7-vue3-的-hook-机制">7.vue3 的 hook 机制，</RouterLink></li><li><RouterLink to="#_8-vue3-中-this-的使用">8.vue3 中 this 的使用</RouterLink><ul><li><RouterLink to="#setup-中没有-this-需要通过-getcurrentinstance-来获取-vue-实例">// setup 中没有 this，需要通过 getCurrentInstance 来获取 Vue 实例</RouterLink></li></ul></li><li><RouterLink to="#_9-常见插件的使用说明-vue-cli-plugin-style-resources-loader-和-style-resources-loader-区别">9.常见插件的使用说明：vue-cli-plugin-style-resources-loader 和 style-resources-loader 区别</RouterLink></li></ul></nav>
<h2 id="_1-setup-name-增强" tabindex="-1"><a class="header-anchor" href="#_1-setup-name-增强" aria-hidden="true">#</a> 1.setup name 增强</h2>
<p>我们 setup 加上语法糖后，组件无法使用 name,有时候，配置 keep-alive 或是自动导入组件没有 name,一般解决方案，写两个 script 标签。
一个含有 setup,一个不含有 setup</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'OrderList'
})
&lt;/script>

&lt;script lang="ts" setup>
onMounted(() => {
  console.log('mounted===')
})
&lt;/script>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vite-框架增加一个插件-解决-setup-的名称问题" tabindex="-1"><a class="header-anchor" href="#vite-框架增加一个插件-解决-setup-的名称问题" aria-hidden="true">#</a> vite 框架增加一个插件，解决 setup 的名称问题</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>第一步
npm i vite-plugin-vue-setup-extend -D
第二步
// vite.config.ts
import { defineConfig } from 'vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
  plugins: [
    VueSetupExtend()
  ]
})
第三步
&lt;script lang="ts" setup name="OrderList">
import { onMounted } from 'vue'

onMounted(() => {
  console.log('mounted===')
})
&lt;/script>
写到script标签上面


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-配置-api-自动导入方式" tabindex="-1"><a class="header-anchor" href="#_2-配置-api-自动导入方式" aria-hidden="true">#</a> 2.配置 api 自动导入方式</h2>
<p>vue,vue-router,vueUse 这些 api 自动导入</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>第一步
npm i unplugin-auto-import -D
第二步
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    AutoImport({
      // dts: 'src/auto-imports.d.ts', // 可以自定义文件生成的位置，默认是根目录下
      imports: ['vue']
    })
  ]
})
第三步
如果有ts，配置完成，自动生成ts的导入文件
安装配置完会自动生成
auto-imports.d.ts文件。
第四步
&lt;script lang="ts" setup name="OrderList">
// 不用import，直接使用ref
const count = ref(0)

onMounted(() => {
  console.log('mounted===')
})
&lt;/script>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入后，eslint 报错问题，没哟 import 的情况下，eslint 报错问题
安装插件解决</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// 安装依赖
npm i vue-global-api -D

// eslintrc.js
module.exports = {
  extends: [
    'vue-global-api'
  ]
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-告别使用-ref-后的-value-的使用。" tabindex="-1"><a class="header-anchor" href="#_3-告别使用-ref-后的-value-的使用。" aria-hidden="true">#</a> 3.告别使用 ref 后的.value 的使用。</h2>
<p>官方的一种配置，增加 vite 框架中 ref 的转换配置</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>这里我介绍的是另外一种写法，也是官方后来出的一种方案，在
ref前加上
$，该功能默认关闭，需要手动开启。
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      refTransform: true // 开启ref转换
    })
  ]
})
然后使用
let count = $ref(1)

const addCount = () => {
  count++
}
注意，这里的语法需要配置的相关插件和版本需要一致或是更高
"vue": "^3.2.2",
"@vitejs/plugin-vue": "^1.9.0",
"@vue/compiler-sfc": "^3.2.5",
"vite": "^2.6.13"


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-自动导入图片" tabindex="-1"><a class="header-anchor" href="#_4-自动导入图片" aria-hidden="true">#</a> 4 自动导入图片</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue2的时候，导入图片，会使用src中，requre方式
但是vite脚手架中默认不支持requre,那么使用import
我要导入图片，都需要下面import一下

&lt;template>
  &lt;img :src="Logo" />
&lt;/template>

&lt;script lang="ts" setup>
import Logo from '@/assets/image/logo.png'
&lt;/script>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-vue-中如何支持-jsx-和-tsx。" tabindex="-1"><a class="header-anchor" href="#_5-vue-中如何支持-jsx-和-tsx。" aria-hidden="true">#</a> 5.vue 中如何支持 jsx 和 tsx。</h2>
<p>vue-class-component
用类定义组件，实现和 React 使用平滑过渡
<a href="https://www.npmjs.com/package/vue-class-component" target="_blank" rel="noopener noreferrer">Vue Class Component<ExternalLinkIcon/></a></p>
<h3 id="解决沙箱报错-iframe-中-cesium-无法执行的爆粗" tabindex="-1"><a class="header-anchor" href="#解决沙箱报错-iframe-中-cesium-无法执行的爆粗" aria-hidden="true">#</a> 解决沙箱报错 iframe 中 cesium 无法执行的爆粗</h3>
<p>var iframe = document.getElementsByClassName('cesium-infoBox-iframe')[0];</p>
<p>iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');</p>
<p>iframe.setAttribute('src', &quot;&quot;); //必须设置 src 为空 否则不会生效</p>
<h3 id="打通-ts-和-js-最后一道" tabindex="-1"><a class="header-anchor" href="#打通-ts-和-js-最后一道" aria-hidden="true">#</a> 打通 ts 和 js 最后一道</h3>
<p>报错
Uncaught ReferenceError: exports is not defined
exports 找不到，未定义，是的没错，目前的浏览器还不支持 exports 这个属性，怎么办。</p>
<p>方法就是转译，让所有浏览器都支持。转译为 es5 的语法，可以用很多打包工具去实现，推荐使用流行的 webpack，如果你会了就之际打包即可解决如果不会看下面；</p>
<p>全局安装 npm install -g typescript</p>
<p>安装 webpack webpack-cli</p>
<p>安装 ts-loader</p>
<h3 id="vite-中如何配置" tabindex="-1"><a class="header-anchor" href="#vite-中如何配置" aria-hidden="true">#</a> vite 中如何配置</h3>
<h3 id="webpack-中如何配置" tabindex="-1"><a class="header-anchor" href="#webpack-中如何配置" aria-hidden="true">#</a> webpack 中如何配置</h3>
<p><a href="https://www.zhihu.com/question/64147199" target="_blank" rel="noopener noreferrer">代办 jsx 的支持 vue<ExternalLinkIcon/></a></p>
<h3 id="_5-1-模块安装变化" tabindex="-1"><a class="header-anchor" href="#_5-1-模块安装变化" aria-hidden="true">#</a> 5.1 模块安装变化</h3>
<p>vue3 不用 vue-template-compiler 了，用的@vue/compiler-sfc，注意目前安装 vue-loader 要指定 16 以上的版本，默认安装的最新版本不行的</p>
<p>@vue/compiler-sfc</p>
<h2 id="_6-vue4rouer-的安装" tabindex="-1"><a class="header-anchor" href="#_6-vue4rouer-的安装" aria-hidden="true">#</a> 6.vue4rouer 的安装</h2>
<p>npm install vue-router@4 -S</p>
<h2 id="_7-vue3-的-hook-机制" tabindex="-1"><a class="header-anchor" href="#_7-vue3-的-hook-机制" aria-hidden="true">#</a> 7.vue3 的 hook 机制，</h2>
<p>Vue3 的 hooks 让我们可以在组件外部调用 Vue 的所有能力，
包括 onMounted,ref, reactive，inject,provide,让这些功能可以单独提取出来，等等
比如 provide 和 inject 模拟 vuex 功能。</p>
<p>这使得自定义 hook 可以做非常多的事情，并且在组件的 setup 函数把多个自定义 hook 组合起来完成逻辑，</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1.基本的路由
全局前置守卫
beforeEach：to,from,next
afterEach两个参数

2.5个组合式API
onBeforeRouteLeave
onBeofreRouteUpdate
useLink
useRoute---返回当前路由地址。相当于在模板中使用 $route。必须在setup中使用
useRouter--- 返回 router 实例。相当于在模板中使用 $router.必须在setup中使用

因为我们在 setup 里面没有访问 this，所以我们不能再直接访问 this.$router 或 this.$route。
作为替代，我们使用 useRouter 函数：

3.router的属性和方法
router属性
currentRoute只读
options当期路由配置
router的方法
addRoute
afterEach两个参数beforeEach








</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-vue3-中-this-的使用" tabindex="-1"><a class="header-anchor" href="#_8-vue3-中-this-的使用" aria-hidden="true">#</a> 8.vue3 中 this 的使用</h2>
<h3 id="setup-中没有-this-需要通过-getcurrentinstance-来获取-vue-实例" tabindex="-1"><a class="header-anchor" href="#setup-中没有-this-需要通过-getcurrentinstance-来获取-vue-实例" aria-hidden="true">#</a> // setup 中没有 this，需要通过 getCurrentInstance 来获取 Vue 实例</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import { getCurrentInstance } from 'vue'
  // proxy等同于Vue2.x的this，不可以使用ctx，生产环境会报错
const { proxy } = getCurrentInstance()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-常见插件的使用说明-vue-cli-plugin-style-resources-loader-和-style-resources-loader-区别" tabindex="-1"><a class="header-anchor" href="#_9-常见插件的使用说明-vue-cli-plugin-style-resources-loader-和-style-resources-loader-区别" aria-hidden="true">#</a> 9.常见插件的使用说明：vue-cli-plugin-style-resources-loader 和 style-resources-loader 区别</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>-
vue 使用style-resources-loader和vue-cli-plugin-style-resources-loader全局配置less_唐生洗发用飘柔的博客-CSDN博客
vue全局使用样式文件--vue-cli-plugin-style-resources-loader ，需要在项目中添加 style-resources-loader。
vue-cli-plugin-style-resources-loader作用：让style-resources-loader in file vue.config.js.更加容易，然后配置进入：'style-resources-loader”
const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      'preProcessor': 'stylus',
      'patterns': [
        path.resolve(__dirname, './src/styles/abstracts/*.styl'),
      ]
    }
  }
}






</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
