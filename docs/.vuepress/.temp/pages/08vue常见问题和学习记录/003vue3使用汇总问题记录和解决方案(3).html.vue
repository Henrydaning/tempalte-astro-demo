<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_1-vue4许多写法不熟练">1.vue4许多写法不熟练</RouterLink></li><li><RouterLink to="#_1-vue3的生命周期钩子">1.vue3的生命周期钩子</RouterLink></li><li><RouterLink to="#_2-vue2和vue3钩子比较转换">2.vue2和vue3钩子比较转换</RouterLink></li><li><RouterLink to="#_3-经典案例网站vue3">3.经典案例网站vue3</RouterLink></li><li><RouterLink to="#_4-script-setup-这个语法糖到底为我们提供了哪些便捷呢">4.script setup 这个语法糖到底为我们提供了哪些便捷呢？</RouterLink></li><li><RouterLink to="#_5-动态组件使用功能没有变化">5.动态组件使用功能没有变化</RouterLink></li><li><RouterLink to="#_6-可以使用命名空间">6.可以使用命名空间，</RouterLink></li><li><RouterLink to="#_7-运行时声明和类型声明">7.运行时声明和类型声明</RouterLink><ul><li><RouterLink to="#运行时声明-只有运行后报错发现">运行时声明，只有运行后报错发现</RouterLink></li><li><RouterLink to="#类型声明-利用ts检测">类型声明，利用ts检测</RouterLink></li><li><RouterLink to="#类型声明的缺点之一-没有props提供默认值">类型声明的缺点之一，没有props提供默认值</RouterLink></li></ul></li><li><RouterLink to="#_5-自定义事件defineemits">5.自定义事件defineEmits</RouterLink><ul><li><RouterLink to="#运行时声明">运行时声明</RouterLink></li></ul></li><li><RouterLink to="#_6-vue3的模板可以有多个根元素">6.vue3的模板可以有多个根元素</RouterLink></li><li><RouterLink to="#_7-vue3中reacitve函数如何声明一个响应式数组-如以下案例">7.vue3中reacitve函数如何声明一个响应式数组，如以下案例</RouterLink></li><li><RouterLink to="#_8-vuerouter4和vue-router3对比">8.vuerouter4和vue-router3对比</RouterLink><ul><li><RouterLink to="#vue2">Vue2</RouterLink></li><li><RouterLink to="#vue3中router的使用">Vue3中router的使用</RouterLink></li></ul></li><li><RouterLink to="#_9-vue3中那些好用的特性。">9.vue3中那些好用的特性。</RouterLink><ul><li><RouterLink to="#v-bind变量使用两种场景">v-bind变量使用两种场景</RouterLink></li><li><RouterLink to="#vue3中快速获取dom元素">vue3中快速获取dom元素</RouterLink></li><li><RouterLink to="#vue3中快速使用v-model和多个v-model和多个v-model">vue3中快速使用v-model和多个v-model和多个v-model</RouterLink></li></ul></li><li><RouterLink to="#_10-快速在vue项目中写声明文件">10.快速在vue项目中写声明文件</RouterLink></li><li><RouterLink to="#_11-vue中使用proxy替换this的使用注意事项场景">11.vue中使用proxy替换this的使用注意事项场景</RouterLink></li><li><RouterLink to="#_11-vue3中图片处理方案-vite引入">11.vue3中图片处理方案：vite引入</RouterLink></li></ul></nav>
<p>[TOC]</p>
<h2 id="_1-vue4许多写法不熟练" tabindex="-1"><a class="header-anchor" href="#_1-vue4许多写法不熟练" aria-hidden="true">#</a> 1.vue4许多写法不熟练</h2>
<h2 id="_1-vue3的生命周期钩子" tabindex="-1"><a class="header-anchor" href="#_1-vue3的生命周期钩子" aria-hidden="true">#</a> 1.vue3的生命周期钩子</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
export default {
    setup(){
        // setup里面data和methods初始化数据。
        return {

        }
        onMounted(()=>{
            // 数据渲染完成
        });
        onBeforeUpdate(()=>{
            // TODO:onBeforeUpdate——当响应数据改变，且重新渲染前调用
        });
        onUpdated(()=>{
            // 组件更新,onUpdated——重新渲染后调用
        });

        onBeforeUnMounted(()=>{
            // TODO:onBeforeUnmount——Vue实例销毁前调用
        });
        onUnMounted(()=>{
            // TODO:onUnmounted——实例销毁后调用
        });

    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-vue2和vue3钩子比较转换" tabindex="-1"><a class="header-anchor" href="#_2-vue2和vue3钩子比较转换" aria-hidden="true">#</a> 2.vue2和vue3钩子比较转换</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
beforeCreate -> setup()
created -> setup()
beforeMount -> onBeforeMount
mounted -> onMounted
beforeUpdate -> onBeforeUpdate
updated -> onUpdated
beforeDestroy -> onBeforeUnmount
destroyed -> onUnmounted
errorCaptured -> onErrorCaptured

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-经典案例网站vue3" tabindex="-1"><a class="header-anchor" href="#_3-经典案例网站vue3" aria-hidden="true">#</a> 3.经典案例网站vue3</h2>
<p><a href="https://blog.csdn.net/qq_41800366/article/details/120091329" target="_blank" rel="noopener noreferrer">总结学习vue3新特性<ExternalLinkIcon/></a></p>
<h2 id="_4-script-setup-这个语法糖到底为我们提供了哪些便捷呢" tabindex="-1"><a class="header-anchor" href="#_4-script-setup-这个语法糖到底为我们提供了哪些便捷呢" aria-hidden="true">#</a> 4.script setup 这个语法糖到底为我们提供了哪些便捷呢？</h2>
<ul>
<li>import之后的组件，不用注册，可以直接使用</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
&lt;script setup lang='ts'>
import SaySomething from "./Components/SaySomething.vue";
&lt;/script>

&lt;template>
  &lt;SaySomething />
&lt;/template>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-动态组件使用功能没有变化" tabindex="-1"><a class="header-anchor" href="#_5-动态组件使用功能没有变化" aria-hidden="true">#</a> 5.动态组件使用功能没有变化</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script setup lang='ts'>
import { ref } from "vue";
import Bar from "./Components/Bar.vue";
import Foo from "./Components/Foo.vue";

const condition = ref(false);
setTimeout(() => condition.value = true, 2000);
&lt;/script>

&lt;template>
  &lt;component :is="condition ? Bar : Foo"/>
&lt;/template>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-可以使用命名空间" tabindex="-1"><a class="header-anchor" href="#_6-可以使用命名空间" aria-hidden="true">#</a> 6.可以使用命名空间，</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
&lt;script setup lang='ts'>
import * as Form from "../Components";
&lt;/script>

&lt;template>
  &lt;Form.Foo />
  &lt;Form.Bar />
&lt;/template>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-运行时声明和类型声明" tabindex="-1"><a class="header-anchor" href="#_7-运行时声明和类型声明" aria-hidden="true">#</a> 7.运行时声明和类型声明</h2>
<h3 id="运行时声明-只有运行后报错发现" tabindex="-1"><a class="header-anchor" href="#运行时声明-只有运行后报错发现" aria-hidden="true">#</a> 运行时声明，只有运行后报错发现</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
定义props，这种只有在运行时候，才能检测到defineProps函数API
&lt;script setup lang='ts'>
const props = defineProps({
foo: String,
bar: {
  type: Number,
  required: true
}
})
&lt;/script>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型声明-利用ts检测" tabindex="-1"><a class="header-anchor" href="#类型声明-利用ts检测" aria-hidden="true">#</a> 类型声明，利用ts检测</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
&lt;script setup lang='ts'>
const props = defineProps&lt;{
  foo?: string
  bar: number
}>()
&lt;/script>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型声明的缺点之一-没有props提供默认值" tabindex="-1"><a class="header-anchor" href="#类型声明的缺点之一-没有props提供默认值" aria-hidden="true">#</a> 类型声明的缺点之一，没有props提供默认值</h3>
<p>为了解决这个问题，提供了 withDefaults 宏命令。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>注意：！！！
widthDefaults 是为了给 defineProps 使用类型声明时提供添加默认值的的方法，
因此，需要注意这仅仅适用于 &lt;script setup lang='ts'> 且 defineProps 使用类型声明。

&lt;script setup lang="ts">
const props = withDefaults(defineProps&lt;{
  title?: string,
  list?: List.Basic[],
}>(), {
  title: 'Hello withDefaults',
  list: () => [{ id: 3, content: '3', isDone: false }],
});
&lt;/script>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-自定义事件defineemits" tabindex="-1"><a class="header-anchor" href="#_5-自定义事件defineemits" aria-hidden="true">#</a> 5.自定义事件defineEmits</h2>
<h3 id="运行时声明" tabindex="-1"><a class="header-anchor" href="#运行时声明" aria-hidden="true">#</a> 运行时声明</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
&lt;script>
    const emit = defineEmits(["handleclick","handlechange"])
    const handleclick = ()=>{
        emit("handleclick","2121")
    }

&lt;/script>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-vue3的模板可以有多个根元素" tabindex="-1"><a class="header-anchor" href="#_6-vue3的模板可以有多个根元素" aria-hidden="true">#</a> 6.vue3的模板可以有多个根元素</h2>
<p>template下面可以写多个div同级</p>
<h2 id="_7-vue3中reacitve函数如何声明一个响应式数组-如以下案例" tabindex="-1"><a class="header-anchor" href="#_7-vue3中reacitve函数如何声明一个响应式数组-如以下案例" aria-hidden="true">#</a> 7.vue3中reacitve函数如何声明一个响应式数组，如以下案例</h2>
<p>reative点击修改了，但是
// ,reactive定义复杂的数据类型的数据(不然使用会有报错提醒),ref推荐定义基本数据类型,
// 我们发现ref定义的数据打印结果需要.value才能获取到结果,而reactive则不需要</p>
<p>、</p>
<h2 id="_8-vuerouter4和vue-router3对比" tabindex="-1"><a class="header-anchor" href="#_8-vuerouter4和vue-router3对比" aria-hidden="true">#</a> 8.vuerouter4和vue-router3对比</h2>
<h3 id="vue2" tabindex="-1"><a class="header-anchor" href="#vue2" aria-hidden="true">#</a> Vue2</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
this.$router.push({
  path: "/index"
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue3中router的使用" tabindex="-1"><a class="header-anchor" href="#vue3中router的使用" aria-hidden="true">#</a> Vue3中router的使用</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
import { useRoute, useRouter } from "vue-router";
export default {
  setup(props, context) {
    // 获取路由器实例
    const router = useRouter();
    // route是响应式对象,可监控器变化
    const route = useRoute();
    const onSubmit = e => {
      e.preventDefault();
      validate()
        .then(() => {
          login(state.login).then(res => {
            if (res.code == 0) {
              router.push("/");
            }
          });
        })
        .catch(err => {});
    };
  }
};


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue3,是可以和vue2一样将router挂载至vue对象上的。</p>
<p>但是，官方不建议这么做，因此呢，vue-router是每个单页分别引入的。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
import { useRouter, useRoute } from "vue-router";
export default {
    name: "article,
    components: {},
    // VUE3 语法 第一个执行的钩子函数
    // setup官方文档
    // https://www.vue3js.cn/docs/zh/guide/composition-api-setup.html#参数
    setup(props: any, content: any) {
        // 实例化路由
        var router = useRouter();
       // 路由参数
        var route = useRoute();
        /**
         * @name: 声明data
         * @author: camellia
         * @email: guanchao_gc@qq.com
         * @date: 2021-01-18
         */
        const data = reactive({
            // 文章id
            article_id: route.query.article_id ? route.query.article_id : 0,
        });
/**
         * @name: 子分类显示
         * @author: camellia
         * @email: guanchao_gc@qq.com
         * @date: 2021-01-15          */
        const cateSonShow = (cate_id_son:number) =>{
            data.cate_id_son = cate_id_son;
            router.push(
            {
                path: '/pc/articleList',
                // 路由query传参
                query: {
                    cate_id_son: data.cate_id_son
                }
            });
        }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-vue3中那些好用的特性。" tabindex="-1"><a class="header-anchor" href="#_9-vue3中那些好用的特性。" aria-hidden="true">#</a> 9.vue3中那些好用的特性。</h2>
<h3 id="v-bind变量使用两种场景" tabindex="-1"><a class="header-anchor" href="#v-bind变量使用两种场景" aria-hidden="true">#</a> v-bind变量使用两种场景</h3>
<p>vue3中v-bind变量使用（之前是var）
vue3中变量使用，vue3中css部分，使用变量，其实和template模板使用变量的规则一致.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>v-bind使用
简单使用：直接可以使用变量。使用方式就是v-bind(变量)
---高级使用：三元表达式

v-bind里面写的js表达式必须使用引号包起来
background-color: v-bind('relationFlag?"red": "white"')


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue3中快速获取dom元素" tabindex="-1"><a class="header-anchor" href="#vue3中快速获取dom元素" aria-hidden="true">#</a> vue3中快速获取dom元素</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue2 模板中可以通过在 DOM 结构中指定 ref 属性，然后在逻辑代码中通过 this.$refs.
vue3中其实也是通过指定一个ref属性，然后再onMounted中，let index = ref(null);
onMounted中，index.value.contains(e.target);//点击的是index中的元素吗

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue3中快速使用v-model和多个v-model和多个v-model" tabindex="-1"><a class="header-anchor" href="#vue3中快速使用v-model和多个v-model和多个v-model" aria-hidden="true">#</a> vue3中快速使用v-model和多个v-model和多个v-model</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue3中实现v-model的快捷方式
vue3 中对 v-model 也是进行了大刀阔斧的改革，在 vue3 中实现 v-model 不需要再给组件添加一个 model 属性，只需要：
1、在组件的 props 中添加一个 modelValue 的属性
2、更新值的时候组件中的 emit 时有一个 update:modelValue 的方法

支持多个v-model连用
 &lt;child v-model="count" v-model:age="age">&lt;/child>
 
 更新原来的默认v-model和自定义的v-model
  handleClick() { 
      this.$emit('update:modelValue', this.modelValue + 3) 
  }, 
  handleInput(event) { 
      this.$emit('update:age', +(event.target.value)) 
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-快速在vue项目中写声明文件" tabindex="-1"><a class="header-anchor" href="#_10-快速在vue项目中写声明文件" aria-hidden="true">#</a> 10.快速在vue项目中写声明文件</h2>
<p>tsconfg.json中配置一个include中配置引入：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
vue文件ts中如何自己写声明文件：

  tsconfig.ts中，引入依赖声明
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  补充引入文件
  *表示任意字符，**表示目录

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-vue中使用proxy替换this的使用注意事项场景" tabindex="-1"><a class="header-anchor" href="#_11-vue中使用proxy替换this的使用注意事项场景" aria-hidden="true">#</a> 11.vue中使用proxy替换this的使用注意事项场景</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>getCurrentInstance可以返回实例对象。
注意不要把该函数当作是optionsApi中来获取 this 使用。
---该方法只在 setup、生命周期函数中有效，在方法中是无效的

注意⚠️，通过&lt;script setup>语法糖的写法，其组件是默认关闭的，也就是说如果是通过$refs或者$parents来访问子组件中定义的值是拿不到的，必须通过defineExpose向外暴露你想获取的值才行。

注意：
//vue3-typescript
const { proxy, ctx } = (getCurrentInstance() as ComponentInternalInstance)
//注意不要用ctx，因为ctx打包后，会失效。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-vue3中图片处理方案-vite引入" tabindex="-1"><a class="header-anchor" href="#_11-vue3中图片处理方案-vite引入" aria-hidden="true">#</a> 11.vue3中图片处理方案：vite引入</h2>
<p>总结图片内容：</p>
<ul>
<li>vite脚手架中图片引入处理使用：new URL后。
注意不能使用require, require 是属于 Webpack方法
background背景图使用相对地址，</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>a.图片引入方式。单个图片 引入，多个图片引入
单个图片引入和多个图片
---------单个图片
import homeIcon from '@/assets/images/home/home_icon.png' 
&lt;img :src="homeIcon" />
---------多个图片
const getAssetsFile = (url, picStyle) => {
    //  new URL('./img.png', import.meta.url).href
    return new URL(`../../common/images/${url}.${picStyle}`, import.meta.url).href;
};
这里使用只用传入图片的名称，url和picStyle参数分别是图片名称和图片格式

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
