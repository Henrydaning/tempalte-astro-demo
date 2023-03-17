<template><div><p><img src="/images/home.png" alt="成长"></p>
<nav class="table-of-contents"><ul><li><RouterLink to="#回到博客主页">回到博客主页</RouterLink><ul><li><RouterLink to="#_001-vue3中使用jsx和tsx的方式写组件">001.vue3中使用jsx和tsx的方式写组件</RouterLink></li><li><RouterLink to="#_003使用vite或是webpack快速定位代码框架-ide快速定位代码位置-vue项目快速定位项目位置代码">003使用vite或是webpack快速定位代码框架:IDE快速定位代码位置(vue项目快速定位项目位置代码)</RouterLink></li><li><RouterLink to="#_003react项目中ide项目跳转">003React项目中IDE项目跳转</RouterLink></li><li><RouterLink to="#_004vue中丢失响应式的三种场景">004vue中丢失响应式的三种场景</RouterLink></li><li><RouterLink to="#_005vue-router中的方法调用-当前路由变化监听">005vue-router中的方法调用：当前路由变化监听</RouterLink></li><li><RouterLink to="#_006vue3创建脚手架的最新命令">006vue3创建脚手架的最新命令</RouterLink></li><li><RouterLink to="#_006搭建一个vue的组件库开发网站">006搭建一个vue的组件库开发网站</RouterLink></li><li><RouterLink to="#_007vueuse是vue中好用的函数库组件集合说明">007vueUse是vue中好用的函数库组件集合说明</RouterLink></li></ul></li><li><RouterLink to="#_1-增加vue3不支持图片引入解决方案">1.增加vue3不支持图片引入解决方案</RouterLink></li></ul></nav>
<h2 id="回到博客主页" tabindex="-1"><a class="header-anchor" href="#回到博客主页" aria-hidden="true">#</a> 回到博客主页</h2>
<p><RouterLink to="/">博客首页</RouterLink></p>
<h3 id="_001-vue3中使用jsx和tsx的方式写组件" tabindex="-1"><a class="header-anchor" href="#_001-vue3中使用jsx和tsx的方式写组件" aria-hidden="true">#</a> 001.vue3中使用jsx和tsx的方式写组件</h3>
<p>在 setup 中通过函数返回，要不就在 render 函数中实现</p>
<h4 id="案例1" tabindex="-1"><a class="header-anchor" href="#案例1" aria-hidden="true">#</a> 案例1</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const  Foo = {
    setup（）{
        const count = ref(0);
        //// 返回一个函数
    // 如果是返回一个对象的话，这个对象其实可以看做 view 和 model 之间的接口层，但是返回一个函数的话，就破坏了
    // 必须对 ref 类型的响应式对象使用 .value
        return ()=>{
            &lt;div>{count.value}&lt;/div>
        }
    }
}



在 setup 中直接返回的话，其实是破坏了 setup 返回对象作为 view 和 model 层的接口，而且如果是 ref 类型的响应式对象的话，你还必须使用 .value ,享受不到结构 ref 了。你会发现你的代码可读性极差
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例2</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// render 中实现
const Foo = {
   setup(){
    const count = ref(0) 
    return {count}
   },
   render(ctx){
     // 必须调用 ctx
     return &lt;div>{ctx.count}&lt;/div>
   }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
对于我来讲 可读性大于灵活性

而且 templete 会享受到所有的编译优化

不管是从可读性上还是性能上我都推荐优先使用 templete 。

当逻辑必须要用 jsx/tsx 来实现的话再上。
（JSX 的表达能力比 template 更强。
JSX 表达能力的上限是 JS 语言本身，而 template 表达能力的上限是 Vue 的各种指令如 v-if v-for v-bind ）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_002两个vue3组件场景使用jsx更佳" tabindex="-1"><a class="header-anchor" href="#_002两个vue3组件场景使用jsx更佳" aria-hidden="true">#</a> 002两个vue3组件场景使用jsx更佳</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>场景1
根据 props 上的 reverse 属性，来决定是否要调换两块内容的渲染顺序
const renderContent = () => {
  const Content = [
    &lt;div class="foo">Foo DOM...&lt;/div>,
    &lt;div class="bar">Bar DOM...&lt;/div>,
  ];
  if (props.reverse) {
    Content.reverse();
  }
  return &lt;div>{Content}&lt;/div>;
}

//通过模板实现
&lt;template>
  &lt;div>
    &lt;template v-if="reverse">
      &lt;div class="bar">Bar DOM...&lt;/div>
      &lt;div class="foo">Foo DOM...&lt;/div>
    &lt;/template>
    &lt;template v-else>
      &lt;div class="foo">Foo DOM...&lt;/div>
      &lt;div class="bar">Bar DOM...&lt;/div>
    &lt;/template>
  &lt;/div>
&lt;/template>

场景2
如果做一个table组件，支持cell自定义
&lt;MyTable cellRender={(data)=>&lt;strong>{data.icon} {data.text}&lt;/strong>}

如果需要template的话，只能通过slot,在slot里面使用中间变量。
&lt;template>
    &lt;table class="jeremy-table" :bordered="bordered">
        &lt;slot>&lt;/slot>
    &lt;/table>
&lt;/template>

然后倒入后
&lt;nyh-table>
    &lt;template v-slot="header">
        &lt;span>快速排序算法&lt;/span>
    &lt;/template>
&lt;/nyh-table>




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_003使用vite或是webpack快速定位代码框架-ide快速定位代码位置-vue项目快速定位项目位置代码" tabindex="-1"><a class="header-anchor" href="#_003使用vite或是webpack快速定位代码框架-ide快速定位代码位置-vue项目快速定位项目位置代码" aria-hidden="true">#</a> 003使用vite或是webpack快速定位代码框架:IDE快速定位代码位置(vue项目快速定位项目位置代码)</h3>
<p><a href="https://app.yinxiang.com/shard/s37/nl/24388549/a5c0bcf2-daeb-4777-8bea-f2ba2d906651" target="_blank" rel="noopener noreferrer">汇总IDE跳转React和Vue项目<ExternalLinkIcon/></a>
（React也有）</p>
<h4 id="vite版本使用" tabindex="-1"><a class="header-anchor" href="#vite版本使用" aria-hidden="true">#</a> vite版本使用</h4>
<p>注意一个兼容性问题：对于自动导入api的auto插件有冲突，
node14.3版本以上</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>   // 引入只需如下三步
    //1、install package
    yarn add @guijixing/vue-code-link --dev
    //2、vite.config.js//注意如果vite框架，一定放在vue()插件前，最前面
    import { openCodeServer, addCodeLocation } from '@guijixing/vue-code-link';
    export default ({ command, mode }: ConfigEnv): UserConfig => {
        ...
        const isBuild = command === 'build';
        const codePlugins = !isBuild ? [openCodeServer(), addCodeLocation()] : [];
        return {
            base: VITE_PUBLIC_PATH,
            root,
            resolve: {
            alias: [
                {
                    find: 'vue-i18n',
                    replacement: 'vue-i18n/dist/vue-i18n.cjs.js'
                },
                ...
            ],
            ...///注意插件需要放在最前面
            plugins:[...codePlugins,...]
            ...
        }
    }

    //3、main.js
    import { openCodeClient } from '@guijixing/vue-code-link'
    openCodeClient.init()


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="webpack版本使用" tabindex="-1"><a class="header-anchor" href="#webpack版本使用" aria-hidden="true">#</a> webpack版本使用</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> 引入只需如下三步
    //1、install package
    npm install -s @linzhinan/vue-code-link
    //2、vue.config.js
    const { vueCodeLinkServer, vueCodeLinkLoaderConfig } = require('@linzhinan/vue-code-link')
    module.exports = {
        ...
        devServer: {
          ...
          //添加监听服务
          before: vueCodeLinkServer.before
        },
        ...
        chainWebpack(config) {
          //添加vue-code-link处理器
          vueCodeLinkLoaderConfig.addVueCodeLinkLoader(config)
          ...
        }
    }
    //3、main.js
    import { vueCodeLinkClient } from '@linzhinan/vue-code-link'
    vueCodeLinkClient.init()



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
vscode中跳转到当前的dom的react项目
react-page-click - npm (npmjs.com)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_003react项目中ide项目跳转" tabindex="-1"><a class="header-anchor" href="#_003react项目中ide项目跳转" aria-hidden="true">#</a> 003React项目中IDE项目跳转</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>（1）App.jsx中使用：    &lt;Inspector>标签包裹
（2）配置：'react-dev-inspector'
（3）这里案例使用了react-new-rewired插件配合引入
（4）配置记录地址：https://gitee.com/front-end-tool-development/React-jump-ide-line.git
其他的一些也可以尝试：

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_004vue中丢失响应式的三种场景" tabindex="-1"><a class="header-anchor" href="#_004vue中丢失响应式的三种场景" aria-hidden="true">#</a> 004vue中丢失响应式的三种场景</h3>
<h3 id="_005vue-router中的方法调用-当前路由变化监听" tabindex="-1"><a class="header-anchor" href="#_005vue-router中的方法调用-当前路由变化监听" aria-hidden="true">#</a> 005vue-router中的方法调用：当前路由变化监听</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import { useRoute, onBeforeRouteUpdate } from 'vue-router';
这里是当前的路由页面变化的监听，这里路由变化，直接使用onBeforeRouteUpdate

onBeforeRouteUpdate路由守卫

onBeforeRouteUpdate路由守卫
import { useRouter,onBeforeRouteUpdate } from 'vue-router';
//------方法1：路由切换
let router = useRouter()
onBeforeRouteUpdate((to) => {
        // console.log('onBeforeRouteUpdate',to.path);     
 });
//方法2：-----
watch监听
watch(() =>router.currentRoute.value.path,(newValue,oldValue)=> {
        console.log('watch',newValue);
},{ immediate: true })
//方法3：onUpdated
使用生命周期函数进行监听

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_006vue3创建脚手架的最新命令" tabindex="-1"><a class="header-anchor" href="#_006vue3创建脚手架的最新命令" aria-hidden="true">#</a> 006vue3创建脚手架的最新命令</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>创建vite的项目的vue脚手架
第一步：npm create vite@latest   （ npm init vite@latest  =>  npx create-vite）
第二步：增加eslint和preffer
yarn create vite-pretty-lint//可能会报错，试试npm
// NPM
npm create vite-pretty-lint


创建webpack的项目脚手架
npm install -g @vue/cli  // 更新
vue create  项目名称



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_006搭建一个vue的组件库开发网站" tabindex="-1"><a class="header-anchor" href="#_006搭建一个vue的组件库开发网站" aria-hidden="true">#</a> 006搭建一个vue的组件库开发网站</h3>
<p>这个可以将组建库说明文档设计的非常好，怎样使用，怎么调用。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>

创建一个storybookV3版本的组件库
首先用上面的vite创建项目，然后增加npx sb init命令后，进行查看，一般没有问题了。
运行组件库后， npm run storybook

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://gitee.com/nyhxiaoning/storyBookVue3Vue2lib.git" target="_blank" rel="noopener noreferrer">组件库案例地址<ExternalLinkIcon/></a></p>
<h3 id="_007vueuse是vue中好用的函数库组件集合说明" tabindex="-1"><a class="header-anchor" href="#_007vueuse是vue中好用的函数库组件集合说明" aria-hidden="true">#</a> 007vueUse是vue中好用的函数库组件集合说明</h3>
<h4 id="vueuse库中好用功能" tabindex="-1"><a class="header-anchor" href="#vueuse库中好用功能" aria-hidden="true">#</a> vueUse库中好用功能</h4>
<p>Utilities工具合集
useDebounceFn
useThrottleFn
useToggle</p>
<p>useEventBus-使用事件总线：
useBase64---内容转换成base64
createEventHook---快速创建一个event事件hook</p>
<p>component组件使用功能
useVModels---子组件快速使用vmodel的字段更新和变化
useDateFormat---格式化日期工具</p>
<p>防抖节流的使用：useDebounceFn和useThrooleFn</p>
<p>事件总线快速使用：useEmit</p>
<p>监听操作页面windows.document之外的内容，比如console控制台，：useWindowFocus
追踪了当前的操作，点击了document的内容，url的变化触发浏览器输入，</p>
<p>监听当前的拖动了浏览器的大小：useWindowSize</p>
<p>useColorMode一键切换当前的主题色：useColorMode</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>给当前的ref元素添加样式颜色变量：useCssVar
const el = ref(null)

const color = useCssVar('--color', el)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>快速使用本地的响应式localStorage:useLocalStorage</p>
<p>响应式的localStorage和SessionStorage:useStorage</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>直接支持传入对象，基本类型，同时是响应式：const statesss = useStorage('my-store', { hello: 'hi', greeting: 'Hello' });
避免刷新后，一些内容丢失，这样使用useLocalStorage，然后取的时候使用localStorage.getItem,再次修改。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>useDraggle中使用一个组件引入需要拖动的元素
必须使用组件</p>
<p>监听当前处于活动的dom元素</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const activeElement = useActiveElement()
watch(activeElement, (el) => {
  console.log('focus changed to', el)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="增加插件vueuse的使用案例" tabindex="-1"><a class="header-anchor" href="#增加插件vueuse的使用案例" aria-hidden="true">#</a> 增加插件vueUse的使用案例</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>- useFileDialog，使用快速的弹窗上传文件，操作。
- useFileSystemAccess ,使用不同的数据格式上传当前的文件
- useTextareaAutosize textarea自动根据内容改变大小
- useShare使用浏览器支持的分享
- useScriptTag使用注入的js脚本
- useScreenOrientation获取当前的屏幕方向，h5中有用
- useObjectUrl将一个二进制文件，或是媒体文件通过创建ObjectURL自动生成。
- useWebNotification通过浏览器发送一个通知个windows
- useMediaControls制作一个简单的媒体播放器
- useFullscreen使用当前的全屏
- useMouseInElement元素位置记录


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-增加vue3不支持图片引入解决方案" tabindex="-1"><a class="header-anchor" href="#_1-增加vue3不支持图片引入解决方案" aria-hidden="true">#</a> 1.增加vue3不支持图片引入解决方案</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
方法1：通过await import导入

方法2：通过生成一个本地url
 const getAssetsImages =(name)=> {
     return new URL(`/src/assets/pic/${name}`, import.meta.url).href; //本地文件路径
 }


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
