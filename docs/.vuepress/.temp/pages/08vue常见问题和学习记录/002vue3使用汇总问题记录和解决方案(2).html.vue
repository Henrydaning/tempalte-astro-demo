<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#看不懂的ts项目-tsc编译文件多次看">看不懂的ts项目，tsc编译文件多次看</RouterLink></li><li><RouterLink to="#好用的小功能-vue3好用的地方">好用的小功能，vue3好用的地方</RouterLink></li><li><RouterLink to="#_1-script增加setup后-导入模块后-不需要再注册">1.script增加setup后，导入模块后，不需要再注册</RouterLink></li><li><RouterLink to="#_2-process在vite中移除">2.process在vite中移除</RouterLink></li><li><RouterLink to="#_3-components配置是对象">3.components配置是对象</RouterLink></li><li><RouterLink to="#_4-子组件修改父组件">4.子组件修改父组件</RouterLink></li><li><RouterLink to="#_5-provide和inject">5.provide和inject</RouterLink></li><li><RouterLink to="#_6-vue3时代-你应该全面拥抱依赖注入">6.Vue3时代，你应该全面拥抱依赖注入</RouterLink><ul><li><RouterLink to="#vue3的全局状态管理-抛弃vuex-使用自己定义的嗯转实现">vue3的全局状态管理，抛弃vuex，使用自己定义的嗯转实现</RouterLink></li></ul></li><li><RouterLink to="#父子件通信">父子件通信</RouterLink><ul><li><RouterLink to="#vue3搭建事件总线机制">vue3搭建事件总线机制</RouterLink></li><li><RouterLink to="#使用方法">使用方法</RouterLink></li><li><RouterLink to="#总结通信说明">总结通信说明</RouterLink></li></ul></li><li><RouterLink to="#_8-对于aixos请求封装后的使用">8.对于aixos请求封装后的使用</RouterLink></li><li><RouterLink to="#vue2和vue3的api的区别">vue2和vue3的api的区别</RouterLink><ul><li><RouterLink to="#vue3中没有this怎么办">vue3中没有this怎么办</RouterLink></li><li><RouterLink to="#怎样自定义派发事件">怎样自定义派发事件</RouterLink></li><li><RouterLink to="#如何选择我该如何在reactive和ref之间做选择">如何选择我该如何在reactive和ref之间做选择？</RouterLink></li></ul></li><li><RouterLink to="#_9-如何快速将接口改造成async和await">9.如何快速将接口改造成async和await</RouterLink></li><li><RouterLink to="#_10为什么有人吐槽vue3-0没有vue2-0好用">10为什么有人吐槽vue3.0没有vue2.0好用</RouterLink><ul><li><RouterLink to="#一、完全抛弃options-api的作风-改用composition-api的写法">一、完全抛弃options api的作风，改用composition api的写法</RouterLink></li></ul></li></ul></nav>
<h2 id="看不懂的ts项目-tsc编译文件多次看" tabindex="-1"><a class="header-anchor" href="#看不懂的ts项目-tsc编译文件多次看" aria-hidden="true">#</a> 看不懂的ts项目，tsc编译文件多次看</h2>
<h2 id="好用的小功能-vue3好用的地方" tabindex="-1"><a class="header-anchor" href="#好用的小功能-vue3好用的地方" aria-hidden="true">#</a> 好用的小功能，vue3好用的地方</h2>
<h2 id="_1-script增加setup后-导入模块后-不需要再注册" tabindex="-1"><a class="header-anchor" href="#_1-script增加setup后-导入模块后-不需要再注册" aria-hidden="true">#</a> 1.script增加setup后，导入模块后，不需要再注册</h2>
<p>setup</p>
<h2 id="_2-process在vite中移除" tabindex="-1"><a class="header-anchor" href="#_2-process在vite中移除" aria-hidden="true">#</a> 2.process在vite中移除</h2>
<p>需要增加定义</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vite.config.js中增加
define:{
    "process.env":{}
  },


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-components配置是对象" tabindex="-1"><a class="header-anchor" href="#_3-components配置是对象" aria-hidden="true">#</a> 3.components配置是对象</h2>
<p>components:{
homecom
},
注意这里的组件配置是一个对象。</p>
<p>自己傻傻的和vuex的导入混在一起了。</p>
<h2 id="_4-子组件修改父组件" tabindex="-1"><a class="header-anchor" href="#_4-子组件修改父组件" aria-hidden="true">#</a> 4.子组件修改父组件</h2>
<p>子组件定义事件eventfn，定义在emits中，导出。
父组件中引入子组件，给子组件标签中加入这个@eventfn=&quot;fatherfn&quot;，然后父组件内容进行对应属性赋值。</p>
<h2 id="_5-provide和inject" tabindex="-1"><a class="header-anchor" href="#_5-provide和inject" aria-hidden="true">#</a> 5.provide和inject</h2>
<p>父组件有一个 provide 选项来提供数据，子组件有一个 inject 选项来开始使用这些数据。</p>
<p>大家肯定第一想到的就Vue2中的provide / inject选项。
如果要把data里的数据provide，说白了就是打算用this，provide要写成函数：
注意传统使用provide和inject方法，这里两种模式，使用的区别好处在于，一种直接对象数组，一种是返回函数对象。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//这种写法用于使用this.
provide() {
    return {
      abcabc: computed(() => this.abc),
      updateAbc: this.updateAbc
    }
  },

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>没错，这套逻辑在vue3中同样适用，同时这两个选项变成了两个方法。</p>
<h2 id="_6-vue3时代-你应该全面拥抱依赖注入" tabindex="-1"><a class="header-anchor" href="#_6-vue3时代-你应该全面拥抱依赖注入" aria-hidden="true">#</a> 6.Vue3时代，你应该全面拥抱依赖注入</h2>
<p>vue3中的响应式变量ref/reactive天生与组件解耦，也就是说，可以在组件外单独声明ref/reactive，然后再在组件内引用。</p>
<p>这样一来，跨组件共享状态的需求在框架内部就得到解决，Vue3的诞生早已注定了vuex这类方案的死亡。</p>
<h3 id="vue3的全局状态管理-抛弃vuex-使用自己定义的嗯转实现" tabindex="-1"><a class="header-anchor" href="#vue3的全局状态管理-抛弃vuex-使用自己定义的嗯转实现" aria-hidden="true">#</a> vue3的全局状态管理，抛弃vuex，使用自己定义的嗯转实现</h3>
<p>api
Vue3中有一对新增的api，provide和inject，熟悉Vue2的朋友应该明白，</p>
<p>在上层组件通过provide提供一些变量，在子组件中可以通过inject来拿到，但是必须在组件的对象里面声明，使用场景的也很少，所以之前我也并没有往状态管理的方向去想。</p>
<p>但是Vue3中新增了Hook，而Hook的特征之一就是可以在组件外去写一些自定义Hook，所以我们不光可以在.vue组件内部使用Vue的能力， 在任意的文件下（如context.ts）下也可以，</p>
<p>如果我们在context.ts中</p>
<p>自定义并export一个hook叫useProvide，并且在这个hook中使用provide并且注册一些全局状态，</p>
<p>再自定义并export一个hook叫useInject，并且在这个hook中使用inject返回刚刚provide的全局状态，</p>
<p>然后在根组件的setup函数中调用useProvide。</p>
<p>就可以在任意的子组件去共享这些全局状态了。</p>
<h2 id="父子件通信" tabindex="-1"><a class="header-anchor" href="#父子件通信" aria-hidden="true">#</a> 父子件通信</h2>
<p>Vue3.x 推荐使用 mitt.js
Vue2.x 使用 EventBus 进行组件通信，而 Vue3.x 推荐使用 mitt.js。</p>
<p>比起 Vue 实例上的 EventBus，mitt.js 好在哪里呢？首先它足够小，仅有200bytes，其次支持全部事件的监听和批量移除，它还不依赖 Vue 实例，所以可以跨框架使用，React 或者 Vue，甚至 jQuery 项目都能使用同一套库。</p>
<h3 id="vue3搭建事件总线机制" tabindex="-1"><a class="header-anchor" href="#vue3搭建事件总线机制" aria-hidden="true">#</a> vue3搭建事件总线机制</h3>
<p>封装自定义事务总线文件 mybus.js，创建新的 js 文件。
npm install -S mitt.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
import mitt from 'mitt';
export default mitt();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其余两种方式
第二种，全局main.js挂载。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import  {createApp} from "vue";
import App from "./App.vue"
import mitt  from "mitt";

const app = createApp(App);
app.config.globalProperties.$mittbus = mitt();



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三种，在组件内引入</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>setup (props) {
    const formItemMitt = mitt()
    return {
      formItemMitt
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h3>
<p>!!!
接收方on：记住一定要写在mounted，这里一定要格外注意，千万不要写在method中，如果你用WebStorm是不会报错误的，这个bug非常不好排查，我是深受其害，费了很大劲才找到错误。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import mitt from 'mitt'

const emitter = mitt()

// listen to an event
emitter.on('foo', e => console.log('foo', e) )

// listen to all events
emitter.on('*', (type, e) => console.log(type, e) )

// fire an event
emitter.emit('foo', { a: 'b' })

// clearing all events
emitter.all.clear()

// working with handler references:
function onFoo() {}
emitter.on('foo', onFoo)   // listen
emitter.off('foo', onFoo)  // unlisten





#### 记录自己脑子被门挤了的mitt调用错误。

自定义封装好mitt后。

childmittFn是子组件派发的事件。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接收方组件：Onmounted写好
onMounted(() =&gt; {
// console.log('页面挂载完成，触发了onMounted钩子函数');
// TODO:使用mitt事件总线全局监听:
emitter.on(&quot;childmittFn&quot;, e =&gt; {
console.log('foohaha', e)
})
})</p>
<p>传入方：派发方
<button @click="childmittFn">mitt点击事件子组件发动一个事件</button></p>
<pre><code>事件定义
  const childmittFnName = () =&gt; {/*  */
        emitter.emit(&quot;childmittFn&quot;, '我是来自child的事件')
        // fire an event
    }

    导出事件

    return {
        childmittFnName
    }
</code></pre>
<p>//排查过程，一直在测试，没有报错，但是就是不会打印接收方，为什么。</p>
<p>！！！！！！！！！！！！！！！！！！！！！
最后发现自己脑子被门挤了，html定义函数的时候，定义的是一个接收方的函数名称触发。这个不是没找脑子写代码吗！！！！</p>
<p>修改方法很简单，但是费了1个多小时。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结通信说明" tabindex="-1"><a class="header-anchor" href="#总结通信说明" aria-hidden="true">#</a> 总结通信说明</h3>
<p>provide/inject局限于父子/爷孙组件通信；
而mitt基于事件总线的订阅发布模式，任意组件之间都可以通信。</p>
<p>当然通信也可以使用传统的emit</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>从setup中传入当前的上下文
    setup(props, context) {
        console.log(props,'这个子组件和父组件的传参')
        //setup是在beforeCreate和created之前执行，创建的是data和method
        /**
         * @description: 子组件实现事件
         * @param {*} val
         * @return {*}
         */
         const submitForm = () => {
            context.emit('mychildevent', 222) // 后定义事件以及传值,TODO:派发出去子组件上面的自定义事件
        }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-对于aixos请求封装后的使用" tabindex="-1"><a class="header-anchor" href="#_8-对于aixos请求封装后的使用" aria-hidden="true">#</a> 8.对于aixos请求封装后的使用</h2>
<p>async和await
await可以讲过函数返回值取出来。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>例子
    // 获取渔船数据
    const getshipData = async () => {
      state.listData = (await getVideoList()).data;
      console.log("listData...", state.listData);

      // 页面加载完成，给兄弟组件video传值
      VueEvent.emit("passInfo", state.listData);
      let name = state.listData[0].fisherName;
      handClickShip(0, name);
    };

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue2和vue3的api的区别" tabindex="-1"><a class="header-anchor" href="#vue2和vue3的api的区别" aria-hidden="true">#</a> vue2和vue3的api的区别</h2>
<p><a href="https://zhuanlan.zhihu.com/p/337871096" target="_blank" rel="noopener noreferrer">比较vue2和vue3<ExternalLinkIcon/></a></p>
<h3 id="vue3中没有this怎么办" tabindex="-1"><a class="header-anchor" href="#vue3中没有this怎么办" aria-hidden="true">#</a> vue3中没有this怎么办</h3>
<p>vue3中组件实例结构如下，各个选项中的this实际上是ctx或proxy
const {ctx,proxy} = getCurrentInstance()</p>
<p>当然坑还是有的，你仔细观察这个ctx，发现它不是一个Proxy对象，也就是这位兄台只有值却没有响应性，
所以如果要利用响应特性，还得用proxy这个属性返回上下文对象，如果只是想要数据，上图中不是有个data也是Proxy类型的嘛。</p>
<h3 id="怎样自定义派发事件" tabindex="-1"><a class="header-anchor" href="#怎样自定义派发事件" aria-hidden="true">#</a> 怎样自定义派发事件</h3>
<p>方法1</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>setup(props, { emit }) {
    emit('ooxx')
}
或是
setup(props, ctx) {
    ctx.emit('ooxx')
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法2</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>setup() {
  getCurrentInstance().emit('ooxx') 
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何选择我该如何在reactive和ref之间做选择" tabindex="-1"><a class="header-anchor" href="#如何选择我该如何在reactive和ref之间做选择" aria-hidden="true">#</a> 如何选择我该如何在reactive和ref之间做选择？</h3>
<p>composition-api引入了独立的数据响应式方法reactive，它可以将传入的对象做响应式处理
const state = reactive({
foo: 'foo',
})
watchEffect(() =&gt; {
console.log(state.foo)
})
state.foo = 'foooooo' // 输出 'foooooo'</p>
<h4 id="单个值时用reactive-显得比较多余-使用ref-但是记住修改值-加上value" tabindex="-1"><a class="header-anchor" href="#单个值时用reactive-显得比较多余-使用ref-但是记住修改值-加上value" aria-hidden="true">#</a> 单个值时用reactive()显得比较多余,使用ref,但是记住修改值，加上value</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>setup() {
    const foo = ref('foo')
    return { foo } 
}
//当然这里有一个副作用
但是Ref对象也有副作用：修改值，必须加上value

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多个值-使用reacive-返回值增加torefs增加响应式" tabindex="-1"><a class="header-anchor" href="#多个值-使用reacive-返回值增加torefs增加响应式" aria-hidden="true">#</a> 多个值，使用reacive,返回值增加toRefs增加响应式</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const mouse = reactive({
    x: 0,
    y: 0
})
return {
    ...toRef(mouse)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="watcheffect和watch有啥不同" tabindex="-1"><a class="header-anchor" href="#watcheffect和watch有啥不同" aria-hidden="true">#</a> watchEffect和watch有啥不同？</h4>
<p>watch监听目标，指定属性名称
watch(() =&gt; state.counter, (val, prevVal) =&gt; {})</p>
<p>watchEffect不需要指定名称</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>watchEffect(() => {
    console.log(state.counter)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>watch可以获取变化前后的值</p>
<p>watch是懒执行的，它等效于vue2中的this.$watch()，watchEffect为了收集依赖，要立即执行一次</p>
<h4 id="关于多个生命周期钩子" tabindex="-1"><a class="header-anchor" href="#关于多个生命周期钩子" aria-hidden="true">#</a> 关于多个生命周期钩子</h4>
<p>可以写多个相同钩子，会按照顺序执行</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>setup() {
    onMounted(() => {})
  onMounted(() => {})
  onMounted(() => {})
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="可以拆分到独立函数中-去执行不同的钩子" tabindex="-1"><a class="header-anchor" href="#可以拆分到独立函数中-去执行不同的钩子" aria-hidden="true">#</a> 可以拆分到独立函数中，去执行不同的钩子</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function fun1() {
  // 这里可以用onMounted执行代码
    onMounted(() => {})
}
function fun2() {
  // 这里还可以用onMounted执行代码
    onMounted(() => {})
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="watch的使用-这里注意-需要监听的ref响应式的值" tabindex="-1"><a class="header-anchor" href="#watch的使用-这里注意-需要监听的ref响应式的值" aria-hidden="true">#</a> watch的使用：这里注意，需要监听的ref响应式的值</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
  // watch 有三个参数：第一个是个getter（所谓getter写法就是你要写个getter函数）,第二个是个回调函数，第三个是个options(这个参数是放vue2.0的deep或者immediate等可选项)
    // 第一种：直接放ref
    watch(baby, () => {
      return `I'm sure,I'm a 300 month baby, ${baby.value}`
    })
   // 第二种：放ref的value值，不知道为什么不可以生效，！！！！
   watch(() => baby.value, () => {
      return `I'm sure,I'm a 300 month baby, ${baby.value}`
    })







</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="watcheffect监听的经典使用-oninvalidate做一些事件销毁移除" tabindex="-1"><a class="header-anchor" href="#watcheffect监听的经典使用-oninvalidate做一些事件销毁移除" aria-hidden="true">#</a> watchEffect监听的经典使用，onInvalidate做一些事件销毁移除</h4>
<pre><code>// TODO:还有一种,我们监听完成一个事件，然后将这个事件移除，避免内存泄露
watchEffect((onInvalidate) =&gt; {
  // 这里的变化就相当于依赖了age.value，如果age变化了就会触发这个监听
  // 刚刚创建组件的时候会立即执行这个
  const _age = `her age is ${baby.value}`;
  console.log(_age);
  debugger;
  //有时候你需要在这里挂载一些监听事件
  const handerClick = () =&gt; {};
  document.addEventListener(&quot;click&quot;, handerClick);
  // 在vue2.0我们需要在destroy的时候remove它，这里提供了一个方法onInvalidate回调解决remove的问题
  onInvalidate(() =&gt; {
    /*
    执行时机:  在副作用即将重新执行时，就是在每次执行这个watchEffect回调的时候会先执行这个,如果在setup()或生命周期钩子函数中使用watchEffect, 则在卸载组件时执行此函数。
   */
    document.removeEventListener(&quot;click&quot;, handerClick);
  });
});
</code></pre>
<h4 id="vue3如何全局绑定方法或是属性" tabindex="-1"><a class="header-anchor" href="#vue3如何全局绑定方法或是属性" aria-hidden="true">#</a> vue3如何全局绑定方法或是属性</h4>
<p>CreateApp(App).config.globalProperties.$emm = xxx</p>
<p>然后，目前个人只能曲线找到方案，通过使用method方法，vue2中的，然后this，自然找到，这个时候，this.$emm可以</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    methods: {
        // TODO:定义在method中，不用return，就可以使用
        handleClick() {
            //   this.$bus.$emit('click')
            this.$bus.$emit("childmittFn", '我是来自child的事件')
        }
    }


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>--------------------但是vue3中，说是proxy或是ctx,可以，但是实际使用，全是找不到这个全局属性！！！！！！！不知道为什么</p>
<h2 id="_9-如何快速将接口改造成async和await" tabindex="-1"><a class="header-anchor" href="#_9-如何快速将接口改造成async和await" aria-hidden="true">#</a> 9.如何快速将接口改造成async和await</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
export function  exampleapi (params) {
    return  request({
            url: `admin`,
            method: "GET",
            params
    })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改造，因为async默认返回一个promise，用new Promise包裹一下即可</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>export function  exampleapi (params) {
    return  new Promise(()=>{
        request({
            url: `admin`,
            method: "GET",
            params
        });
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10为什么有人吐槽vue3-0没有vue2-0好用" tabindex="-1"><a class="header-anchor" href="#_10为什么有人吐槽vue3-0没有vue2-0好用" aria-hidden="true">#</a> 10为什么有人吐槽vue3.0没有vue2.0好用</h2>
<h3 id="一、完全抛弃options-api的作风-改用composition-api的写法" tabindex="-1"><a class="header-anchor" href="#一、完全抛弃options-api的作风-改用composition-api的写法" aria-hidden="true">#</a> 一、完全抛弃options api的作风，改用composition api的写法</h3>
<p>了解vue2.0的都知道vue2.0是基于配置参数的风格去开发的，所有的代码都会已配置为入口，如data, method, computed, filter,watch这样的操作都是需要配置入口的</p>
<p>但是vue3.0完全抛弃这样的做法。采用了类似react的hooks的作风，如reactive, coumputed这个的hooks.</p>
<p>为什么使用了hook，在vue3中
发现options api在一些情况下会造成问题，当项目庞大时，无法做代码的抽离和调度，虽然在vue2.0中提供了mixins这样的options
但是大量的mixins的使用会造成代码的混乱和难以维护性，</p>
<p>因此尤雨溪还是才做用了类似react的composition api的作风</p>
</div></template>
