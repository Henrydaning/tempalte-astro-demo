<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#vue-和-react-底层对比">Vue 和 React 底层对比</RouterLink></li><li><RouterLink to="#vue-版本功能升级和说明">Vue 版本功能升级和说明</RouterLink></li><li><RouterLink to="#vue3-2">vue3.2</RouterLink></li><li><RouterLink to="#vue3-0">vue3.0</RouterLink><ul><li><RouterLink to="#功能-单文件组件状态驱动的-css-变量root">功能：单文件组件状态驱动的 CSS 变量root</RouterLink></li><li><RouterLink to="#功能-1-teleport">功能 1：Teleport</RouterLink></li><li><RouterLink to="#功能-2-suspense">功能 2：Suspense</RouterLink></li><li><RouterLink to="#功能-3-v-model">功能 3：v-model</RouterLink></li><li><RouterLink to="#功能-4-for-和-key">功能 4：-for 和 key</RouterLink></li><li><RouterLink to="#功能-5-style-使用两种绑定">功能 5：style 使用两种绑定</RouterLink></li><li><RouterLink to="#功能-6-多个属性">功能 6：多个属性</RouterLink></li><li><RouterLink to="#功能说明-7-v-for-中-ref">功能说明 7：v-for 中 ref</RouterLink></li><li><RouterLink to="#功能-8-v-for-和-v-if-优先级">功能 8：v-for 和 v-if 优先级</RouterLink></li></ul></li><li><RouterLink to="#vue2-6-x-升级-vue2-7-x">vue2.6.x 升级 vue2.7.x</RouterLink></li></ul></nav>
<h2 id="vue-和-react-底层对比" tabindex="-1"><a class="header-anchor" href="#vue-和-react-底层对比" aria-hidden="true">#</a> Vue 和 React 底层对比</h2>
<p><a href="https://app.yinxiang.com/shard/s37/nl/24388549/6c9b7ccf-6467-45d3-bfeb-69965eeb6837" target="_blank" rel="noopener noreferrer">Vue 和 React 底层对比<ExternalLinkIcon/></a></p>
<h2 id="vue-版本功能升级和说明" tabindex="-1"><a class="header-anchor" href="#vue-版本功能升级和说明" aria-hidden="true">#</a> Vue 版本功能升级和说明</h2>
<p><a href="https://app.yinxiang.com/shard/s37/nl/24388549/32e5b15c-de55-44d3-b65d-f98d87b4b6cc" target="_blank" rel="noopener noreferrer">Vue 版本的更新事件<ExternalLinkIcon/></a></p>
<h2 id="vue3-2" tabindex="-1"><a class="header-anchor" href="#vue3-2" aria-hidden="true">#</a> vue3.2</h2>
<p>Vue3.2 新增了一个指令 v-memo, 引入这个指令的目的是帮助大家更好的为我们的应用做性能优化💪</p>
<p>缓存一个模板的子树。在元素和组件上都可以使用。为了实现缓存，该指令需要传入一个固定长度的依赖值数组进行比较。如果数组里的每个值都与最后一次的渲染相同，那么整个子树的更新将被跳过。举例来说：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>当组件重新渲染，如果 valueA 和 valueB 都保持不变，这个 &lt;div> 及其子项的所有更新都将被跳过
&lt;div v-memo="[valueA, valueB]">
    ...
&lt;/div>


------使用场景
假设后端返回来了 10000 条数据， 前端需要做筛选， 选出符合条件的数据进行展示， 如果没有符合条件的，则保持上次的搜索结果。

&lt;template>
  &lt;div class="home">
    &lt;input type="text" v-model="value">
    &lt;!-- v-memo中值若不发生变化，则不会进行更新 -->
    &lt;ul v-memo="[shouldUpdate]">
        &lt;li class="licss" v-for="item in arr" :key="item">
          {{ value }} -- {{ animalType[value] }}
        &lt;/li>
    &lt;/ul>
  &lt;/div>
&lt;/template>
&lt;script lang="ts" setup>
import { ref } from "@vue/reactivity"
import { watch } from "@vue/runtime-core"
const arr=new Array(10000)
const animalType={
  'mie':'🐏',
  'mo':'🐂',
  'miao':'🐱',
}
const value=ref('mie')
const shouldUpdate=ref(0)
// 监听value(输入框中的值)。
// 如果数据发生变化，并且在animalType对象中存在。试图进行更新。否则试图不进行更新。
watch(()=>value.value,()=>{
  if(Object.keys(animalType).includes(value.value)){
    shouldUpdate.value++
  }
})
&lt;/script>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue3-0" tabindex="-1"><a class="header-anchor" href="#vue3-0" aria-hidden="true">#</a> vue3.0</h2>
<h3 id="功能-单文件组件状态驱动的-css-变量root" tabindex="-1"><a class="header-anchor" href="#功能-单文件组件状态驱动的-css-变量root" aria-hidden="true">#</a> 功能：单文件组件状态驱动的 CSS 变量root</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>CSS 变量又称为 CSS 自定义属性，它包含的值可以在整个文档中重复使用。由自定义属性标记设定值（比如： --main-color: black; ），由 var 函数来获取值（比如： color: var(--main-color); ）

如果希望能够在 HTML 文档中都能访问到，则可以定义在类 :root 中

:root{
  --test:400 + 'px';
}
/* 使用 */
width: var(--test);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="另一种方法v-bind" tabindex="-1"><a class="header-anchor" href="#另一种方法v-bind" aria-hidden="true">#</a> 另一种方法v-bind</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>v-bind()的常用使用方式，主要包括在css,less,scss中的使用

.div {
  /* 拼接使用 */
  width: v-bind(width + 'px');
  /* 直接使用 */
  height: v-bind(div_height);
  background: v-bind(div_color);
}

.span {
  /* 对象调用 */
  width: v-bind('span.width');


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="功能-1-teleport" tabindex="-1"><a class="header-anchor" href="#功能-1-teleport" aria-hidden="true">#</a> 功能 1：Teleport</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>React中可以通过createPortal函数来创建需要传送的节点；本来尤大大想起名叫Portal，但是H5原生的Portal标签也在计划中，虽然有一些安全问题，但是为了避免重名，因此改成Teleport

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="功能-2-suspense" tabindex="-1"><a class="header-anchor" href="#功能-2-suspense" aria-hidden="true">#</a> 功能 2：Suspense</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Suspense是Vue3推出的一个内置组件，它允许我们的程序在等待异步组件时渲染一些后备的内容，可以让我们创建一个平滑的用户体验；Vue中加载异步组件其实在Vue2.x中已经有了，我们用的vue-router中加载的路由组件其实也是一个异步组件：

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="功能-3-v-model" tabindex="-1"><a class="header-anchor" href="#功能-3-v-model" aria-hidden="true">#</a> 功能 3：v-model</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>在Vue2.x中，v-model相当于绑定value属性和input事件，它本质也是一个语法糖
在vue2.3.0+版本引入了.sync修饰符，其本质也是语法糖，是在组件上绑定@update:propName回调，语法更简洁：

ue3中将v-model和.sync进行了功能的整合，抛弃了.sync，表示：多个双向绑定value值直接用多个v-model传就好了；同时也将v-model默认传的prop名称由value改成了modelValue：

&lt;child-component
    v-model.msg1="msg1"
    v-model.msg2="msg2">
&lt;/child-component>

&lt;!-- 相当于 -->
&lt;child-component
    :msg1="msg1"
    @update:msg1="msg1=$event"
    :msg2="msg2"
    @update:msg2="msg2=$event">
&lt;/child-component>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="功能-4-for-和-key" tabindex="-1"><a class="header-anchor" href="#功能-4-for-和-key" aria-hidden="true">#</a> 功能 4：-for 和 key</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>在Vue2.x中，我们都知道v-for每次循环都需要给每个子节点一个唯一的key，还不能绑定在template标签上
&lt;template v-for="item in list">
  &lt;div :key="item.id">...&lt;/div>
  &lt;span :key="item.id">...&lt;/span>
&lt;/template>

而在Vue3中，key值应该被放置在template标签上，这样我们就不用为每个子节点设一遍：

&lt;template v-for="item in list" :key="item.id">
  &lt;div>...&lt;/div>
  &lt;span>...&lt;/span>
&lt;/template>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="功能-5-style-使用两种绑定" tabindex="-1"><a class="header-anchor" href="#功能-5-style-使用两种绑定" aria-hidden="true">#</a> 功能 5：style 使用两种绑定</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>基础类型方式？？？
&lt;div  :style="'background-color':oNum">&lt;/div>

对象方式
&lt;div :style="{}">&lt;/div>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="功能-6-多个属性" tabindex="-1"><a class="header-anchor" href="#功能-6-多个属性" aria-hidden="true">#</a> 功能 6：多个属性</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>　在vue2.x中，如果一个元素同时定义了v-bind="object"和一个相同的单独的属性，那么这个单独的属性会覆盖object中的绑定：
&lt;div id="red" v-bind="{ id: 'blue' }">&lt;/div>
&lt;div v-bind="{ id: 'blue' }" id="red">&lt;/div>
&lt;!-- 最后结果都相同 -->
&lt;div id="red">&lt;/div>

　然而在vue3中，如果一个元素同时定义了v-bind="object"和一个相同的单独的属性，那么声明绑定的顺序决定了最后的结果（后者覆盖前者）：

&lt;!-- template -->
&lt;div id="red" v-bind="{ id: 'blue' }">&lt;/div>
&lt;!-- result -->
&lt;div id="blue">&lt;/div>

&lt;!-- template -->
&lt;div v-bind="{ id: 'blue' }" id="red">&lt;/div>
&lt;!-- result -->
&lt;div id="red">&lt;/div>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="功能说明-7-v-for-中-ref" tabindex="-1"><a class="header-anchor" href="#功能说明-7-v-for-中-ref" aria-hidden="true">#</a> 功能说明 7：v-for 中 ref</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue2.x中，在v-for上使用ref属性，通过this.$refs会得到一个数组：

&lt;template
  &lt;div v-for="item in list" :ref="setItemRef">&lt;/div>
&lt;/template>
&lt;script>
export default {
  data(){
    list: [1, 2]
  },
  mounted () {
    // [div, div]
    console.log(this.$refs.setItemRef)
  }
}
&lt;/script>

因此vue3不再自动创建数组，而是将ref的处理方式变为了函数，该函数默认传入该节点：

&lt;template
  &lt;div v-for="item in 3" :ref="setItemRef">&lt;/div>
&lt;/template>
&lt;script>
import { reactive, onUpdated } from 'vue'
export default {
  setup() {
    let itemRefs = reactive([])

    const setItemRef = el => {
      itemRefs.push(el)
    }

    onUpdated(() => {
      console.log(itemRefs)
    })

    return {
      itemRefs,
      setItemRef
    }
  }
}
&lt;/script>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="功能-8-v-for-和-v-if-优先级" tabindex="-1"><a class="header-anchor" href="#功能-8-v-for-和-v-if-优先级" aria-hidden="true">#</a> 功能 8：v-for 和 v-if 优先级</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>　在vue2.x中，在一个元素上同时使用v-for和v-if，v-for有更高的优先级，因此在vue2.x中做性能优化，有一个重要的点就是v-for和v-if不能放在同一个元素上。

　　而在vue3中，v-if比v-for有更高的优先级。因此下面的代码，在vue2.x中能正常运行，但是在vue3中v-if生效时并没有item变量，因此会报错：
&lt;template>
  &lt;div v-for="item in list" v-if="item % 2 === 0" :key="item">{{ item }}&lt;/div>
&lt;/template>

&lt;script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5],
    };
  },
};
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue2-6-x-升级-vue2-7-x" tabindex="-1"><a class="header-anchor" href="#vue2-6-x-升级-vue2-7-x" aria-hidden="true">#</a> vue2.6.x 升级 vue2.7.x</h2>
<p>新增功能如下：
Vue2.7 本周发布？支持组合式 API、setup、css v-bind</p>
<ul>
<li>目的：很多人学习了 vue3.0，也有学习了 vue2,这样加快大家开发效率。</li>
<li>ropeSking 跳绳升级 2.7 没有问题，可以正常开发测试，同时这里增加了一些建议在分支中</li>
<li>方法：基本总结下来
（1）vue2.7.8 替换
（2）删除 vue-compiler
（3）eslint+eslint-plugin-vue 引入
&quot;eslint&quot;: &quot;^8.18.0&quot;,
&quot;eslint-plugin-vue&quot;: &quot;^9.1.1&quot;,
（4）如果 vue2 中使用了 render 这样组件实现，可能报错，暂时解决不了</li>
</ul>
</div></template>
