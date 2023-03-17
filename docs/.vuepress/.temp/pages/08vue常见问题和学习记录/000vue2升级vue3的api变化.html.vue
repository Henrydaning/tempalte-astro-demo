<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#一-composition-api">一.Composition API</RouterLink></li><li><RouterLink to="#二-reactive-类工具-api">二 reactive 类工具 API</RouterLink></li><li><RouterLink to="#三-ref-类工具-api">三 ref 类工具 API</RouterLink></li><li><RouterLink to="#四-应用配置-原全局配置和全局-api">四. 应用配置（原全局配置和全局 API）</RouterLink></li><li><RouterLink to="#五-全局-api-新增">五. 全局 API（新增）</RouterLink></li><li><RouterLink to="#六-选项-数据">六. 选项 / 数据</RouterLink></li><li><RouterLink to="#七-选项-dom-不变">七. 选项 / DOM(不变)</RouterLink></li><li><RouterLink to="#八-选项-生命周期钩子">八. 选项 / 生命周期钩子</RouterLink></li><li><RouterLink to="#九-选项-资源">九. 选项 / 资源</RouterLink></li><li><RouterLink to="#十一-选项-其它">十一. 选项 / 其它</RouterLink></li><li><RouterLink to="#十二-实例-property">十二. 实例 property</RouterLink></li><li><RouterLink to="#十三-实例方法-数据">十三. 实例方法 / 数据</RouterLink></li><li><RouterLink to="#十四-实例方法-事件">十四. 实例方法 / 事件</RouterLink></li><li><RouterLink to="#十五-实例方法-生命周期">十五. 实例方法 / 生命周期</RouterLink></li><li><RouterLink to="#十六-指令">十六. 指令</RouterLink></li><li><RouterLink to="#十七-特殊-attribute">十七. 特殊 attribute</RouterLink></li><li><RouterLink to="#十八-内置的组件">十八. 内置的组件</RouterLink></li><li><RouterLink to="#十九-总结">十九. 总结</RouterLink><ul><li><RouterLink to="#不支持ie11的vue3">不支持IE11的vue3</RouterLink></li><li><RouterLink to="#vue2-x支持ie11的代码">vue2.x支持ie11的代码</RouterLink></li></ul></li></ul></nav>
<p>vue3 新内容</p>
<h2 id="一-composition-api" tabindex="-1"><a class="header-anchor" href="#一-composition-api" aria-hidden="true">#</a> 一.Composition API</h2>
<p>将数据、方法、computed、生命周期函数, 集中写在一个地方。<br>
1.1 setup()<br>
<code v-pre>setup()</code>作为在组件内使用<code v-pre>Composition API</code>的入口点。执行时机是在<code v-pre>beforeCreate</code>和<code v-pre>created</code>之间, 不能使用 this 获取组件的其他变量，而且不能是异步。<code v-pre>setup</code>返回的对象和方法，都可以在模版中使用。<br>
setup 有两个参数,<code v-pre>props</code>,<code v-pre>context</code>。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script lang="js">
import {toRefs} from 'vue'
export default {
    name: 'demo',
    props:{
      name: String,
    },
    setup(props, context){
      // 这里需要使用toRefs来进行解构
      // 这里的props与vue2基本一致,当然这里的name也可以直接在template中使用
      const { name }=toRefs(props);
      console.log(name.value);
      // 只能获取到这三个属性,也是不能使用ES6的解构
      // 属性，同vue2的$attrs
      console.log(context.attrs);
      // 插槽
      console.log(context.slots);
      // 事件，同vue2的$emit
      console.log(context.emit);
  }
}
&lt;/script>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.2 reactive<br>
<code v-pre>vue3</code>将响应式的功能和 vue 代码解耦，单独作为一个 js 库来调用。（在其他任何 js 运行的框架当中，都可以引入和使用<code v-pre>vue3</code>的这个响应式功能）。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
  &lt;div>{{ state.text }}&lt;/div>
  &lt;button @click="test">测试一下？&lt;/button>
&lt;/template>
&lt;script>
import { reactive } from 'vue';
export default {
  setup() {
    // 通过reactive声明一个可响应式的对象
    const state = reactive({ text: "我帅吗" });
    // 通过reactive声明一个可响应式的数组
    const state1 = reactive([ text: "我帅吗" ]);
    // 声明一个修改方法
    const test = () => state.text = '你很丑';
    // 返回state和方法
    return { state,test };
  }
};
&lt;/script>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个跟<code v-pre>vue2</code>比较大的区别，使用上面的方法，才能实现数据的响应式。然后这里的对象可以随意赋值，不会出现<code v-pre>vue2</code>中深层未定义的对象值赋值不能响应式的问题。因为现在 vue 的底层是用<code v-pre>proxy</code>实现的数据监听。<br>
<strong>注意：这里的元素只能是对象或者数组，基本数据类型需要使用 ref</strong><br>
1.3 ref<br>
声明响应式的基本数据类型</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import { ref } from 'vue';
export default {
  setup(){
    const a = ref(1);
    const b = ref('1');
    const c = ref(true);
    // 声明一个修改方法
    const test = () => {
      // 注意：在setup里面修改ref的值是需要通过.value的，template做了解套，所以不需要。
      // ref 作为 reactive的对象的值时不需要.value
      // ref 作为 reactive的数组的值时需要.value
      a.value = 2;
      b.value = '1';
      c.value = false;
    };
    return { a, b, c, test };
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取 DOM 元素</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
  &lt;div ref="testDom">&lt;/div>
&lt;/template>

&lt;script>
import { ref, onMounted } from 'vue';
export default {
  setup(){
    const testDom = ref(null);
    //使用onMounted钩子,类似在vue2的mounted生命周期中操作元素
    onMounted(() => {
      // 记得要加.value
      console.log(testDom.value);
    })
    return { testDom };
  }
}
&lt;/script>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.4 readonly</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const state = reactive({ name: 0 })
const readOnlyState = readonly(state)
// 可以修改
state.name = '帅';
// 无法修改并警告
readOnlyState.name = '帅';

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-reactive-类工具-api" tabindex="-1"><a class="header-anchor" href="#二-reactive-类工具-api" aria-hidden="true">#</a> 二 reactive 类工具 API</h2>
<p>2.1 isProxy， isReactive，isReadonly<br>
isProxy 是检查一个对象是否是由 reactive 或者 readonly 方法创建的代理。后面两个是单独的检测。 注意：只要检测的对象里有 reactive，就算被 readonly 处理过了，isReactive 也为 true。<br>
2.2 toRaw<br>
把被代理或者响应式的对象转换成普通对象</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> const state = {} 
const stateReactive = reactive(state) 
console.log(toRaw(stateReactive) === state) // true 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.3 markRaw<br>
禁止这个对象成为响应式</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> const state = markRaw({ name: '帅' }) console.log(isReactive(reactive(state))) // false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意，markRaw 只作用于根元素，如果使用子元素去赋值，还是可以转成响应式代理</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> const state = markRaw({   data: { id: 123 }, }) 
const newState = reactive({   data: state.data, }) 
console.log(isReactive(newState.data)) // true 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.4 shallowReactive, shallowReadonly<br>
跟上面<code v-pre>reactive</code>,<code v-pre>readonly</code>的作用一样，区别是这两个方法是浅层的监听。 只会对第一层响应式，深层次的数据不会响应</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> const state = shallowReactive({ name: '123', test: { id: 1 } }) 
const test = () => {   // 深层次数据的变化不会触发响应式   state.test.id = 2; };

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-ref-类工具-api" tabindex="-1"><a class="header-anchor" href="#三-ref-类工具-api" aria-hidden="true">#</a> 三 ref 类工具 API</h2>
<p>3.1 isRef<br>
检查一个值是否为一个<code v-pre>ref</code>对象<br>
3.2 toRef<br>
用来作为一个<code v-pre>reactive</code>对象的属性, 保持响应式</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> const state = reactive({   a: 0 }) // 作为一个reactive对象的属性 
const aRef = toRef(state, 'a') // 在这里修改读取Ref要使用.
value aRef.value++ console.log(state.a) // 1 
 state.a++ console.log(aRef.value) // 2 


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.3 toRefs<br>
将响应式对象转换为普通对象 (类似解构)，但是还可以保留响应式。可以用来对一些响应式变量多次复用。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> function useFeatureX() { const state = reactive({     foo: 1,     bar: 2   })  
 return toRefs(state) } export default { 
  setup() {    
 // 可以在不失去响应式的情况下复用
 const { foo, bar } = useFeatureX()    
 return {       foo,       bar     } 
  }
 } 
 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.4 unref<br>
获取 ref 值的语法糖</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> val = isRef(val) ? val.value : val 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.5 customRef</p>
<p>创建一个自定义的<code v-pre>ref</code>, 对它的读写进行手动控制。这是文档上的一个防抖的例子</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> &lt;input v-model="text" /> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function useDebouncedRef(value, delay = 200) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        // 读值的时候,触发依赖
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          // 写值的时候，进行防抖，触发依赖
          trigger()
        }, delay)
      }
    }
  })
}

export default {
  setup() {
    return {
      text: useDebouncedRef('hello')
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.6 shallowRef, triggerRef<br>
shallowRef 数据是没有响应式的，但是可以使用 triggerRef 来手动触发</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> const shallow = shallowRef({   greet: 'Hello, world' }) 
shallow.value.greet = 'Hello, universe' triggerRef(shallow) //手动触发响应式 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>computed and watch<br>
4.1 computed</li>
</ol>
<ul>
<li>传入一个 getter 函数，返回一个默认不可手动修改的 ref 对象</li>
<li>具有 get 和 set 函数的对象来创建可写的 ref 对象</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> const count = ref(1)
// 只读的
const plusOne = computed(() => count.value + 1)
// 可更改的
const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => {
    count.value = val - 1
  },
})

plusOne.value = 1
console.log(count.value) // 0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.2 watchEffect<br>
立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> const count = ref(0) 
watchEffect(() => console.log(count.value)) // 打印出 0,初始化的时候就会打印 
setTimeout(() => {   count.value++   // -> 打印出 1 }, 100) 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>停止观察</strong><br>
卸载组件的时候会自动停止，也可以手动停止监听</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> const stop = watchEffect(() => {   /* ... */ }) // 停止监听程序 stop() 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>副作用</strong><br>
如果一个函数内外有依赖于外部变量或者环境时，常常我们称之为其有副作用，如果我们仅通过函数签名不打开内部代码检查并不能知道该函数在干什么，作为一个独立函数我们期望有明确的输入和输出，副作用是 bug 的发源地，作为程序员开发者应尽量少的开发有副作用的函数或方法，副作用也使得方法通用性下降不适合扩展和可重用性</p>
<p><strong>运行时机</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> // 初始化运行需要读取dom
onMounted(() => {
  watchEffect(() => {
  })
})
//设置运行时机
watchEffect(
  () => {/* ... */},
  {flush: 'pre'}
)
// pre是默认，组件更新前执行
// post, 组件更新后执行
// sync, 同步运行

 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.3 watch<br>
跟 vue2 的 watch 一致</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> // 侦听一个 getter const state = reactive({ count: 0 }) 
watch(   () => state.count,   (count, prevCount) => {     /* ... */   } )  // 直接侦听一个 ref 
const count = ref(0) watch(count, (count, prevCount) => {   /* ... */ }) 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>监听多个数据源</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {   /* ... */ }) 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>与 watchEffect 共享的行为</strong><br>
停止监听，清除副作用，副作用刷新时机，侦听器调试方面跟 watchEffect 参数是一样的。</p>
<h2 id="四-应用配置-原全局配置和全局-api" tabindex="-1"><a class="header-anchor" href="#四-应用配置-原全局配置和全局-api" aria-hidden="true">#</a> 四. 应用配置（原全局配置和全局 API）</h2>
<p><strong>注意：全局配置的 Vue 都用现在的 createApp 生成的实例来替代</strong><br>
createApp(新增)</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// vue2挂载dom方法
new Vue({
  render: (h) => h(App)
}).$mount("#app");
// vue3
createApp(App).mount('#app')


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，之前用到的全局配置的 Vue 都用现在的 createApp 生成的实例来替代</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import { createApp } from 'vue'
const app = createApp({})

// 比如注册全局组件
app.component('my-component', {
  /* ... */
})
// 是否允许devtools检查代码
app.config.devtools = true  


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>globalProperties(新增)</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>app.config.globalProperties.foo = 'bar'
app.component('child-component', {
  mounted() {
    console.log(this.foo) // 'bar'
  }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>添加可在程序内的任何组件实例中访问的全局属性。当存在键冲突时，组件属性将优先</li>
<li>替代掉 Vue2.x 的 Vue.prototype 属性放到原型上的写法</li>
</ul>
<p>unmount(新增)<br>
卸载 DOM 元素上应用程序实例的根组件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> const app = createApp(App) app.mount('#app') // 5秒之后，卸载APP组件
 setTimeout(() => app.unmount('#app'), 5000) 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-全局-api-新增" tabindex="-1"><a class="header-anchor" href="#五-全局-api-新增" aria-hidden="true">#</a> 五. 全局 API（新增）</h2>
<p>createApp<br>
类似之前全局的 Vue 变量，整个组件树共享的上下文，第二个参数作为 props 值传入<br>
h<br>
就是之前的 createElement。<br>
jsx 偶尔在用，但是这个底层的相对用的比较少，就不细讲了</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> render() {   return Vue.h('h1', {}, 'Some title') } 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>defineComponent（组件）<br>
创建一个组件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import { defineComponent } from 'vue'
const MyComponent = defineComponent({
  data() {
    return { count: 1 }
  },
  methods: {
    increment() {
      this.count++
    }
  }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>defineAsyncComponent(异步组件)<br>
创建一个异步组件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() =>
   /*或者*/
  import('./components/AsyncComponent.vue')
   /*或者*/
  new Promise((resolve, reject) => {
  /*可以reject*/
      resolve({
        template: '&lt;div>I am async!&lt;/div>'
      })
    })
)

app.component('async-component', AsyncComp)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>resolveComponent<br>
只能在<code v-pre>render</code>和<code v-pre>setup</code>中使用，通过名称来寻找组件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>app.component('MyComponent', {
  /* ... */
})
const MyComponent = resolveComponent('MyComponent')


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>resolveDynamicComponent<br>
只能在<code v-pre>render</code>和<code v-pre>setup</code>中使用，解析活动的组件 active<br>
resolveDirective<br>
只能在<code v-pre>render</code>和<code v-pre>setup</code>中使用，允许通过名称解析指令<br>
withDirectives<br>
只能在<code v-pre>render</code>和<code v-pre>setup</code>中使用，允许应用指令到<code v-pre>VNode</code>。返回一个带有应用指令的<code v-pre>VNode</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const bar = resolveDirective('bar')

return withDirectives(h('div'), [
  [bar, this.y]
])

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>createRenderer<br>
接受两个泛型参数：<code v-pre>HostNode</code>和<code v-pre>HostElement</code>，对应于宿主环境中的<code v-pre>Node</code>和 <code v-pre>Element</code>类型。<br>
这个东西不太清楚具体的使用场景</p>
<h2 id="六-选项-数据" tabindex="-1"><a class="header-anchor" href="#六-选项-数据" aria-hidden="true">#</a> 六. 选项 / 数据</h2>
<p>emits(新增)<br>
在 $emit 触发事件之前验证参数</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const app = Vue.createApp({})

// 对象语法
app.component('reply-form', {
  created() {
    this.$emit('check')
  },
  emits: {
    // 没有验证函数
    click: null,

    // 带有验证函数
    submit: payload => {
      if (payload.email &amp;&amp; payload.password) {
        return true
      } else {
        console.warn(`Invalid submit event payload!`)
        return false
      }
    }
  }
})


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七-选项-dom-不变" tabindex="-1"><a class="header-anchor" href="#七-选项-dom-不变" aria-hidden="true">#</a> 七. 选项 / DOM(不变)</h2>
<h2 id="八-选项-生命周期钩子" tabindex="-1"><a class="header-anchor" href="#八-选项-生命周期钩子" aria-hidden="true">#</a> 八. 选项 / 生命周期钩子</h2>
<ul>
<li>beforeDestroy -&gt; <code v-pre>beforeUnmount</code></li>
<li>destroyed -&gt; <code v-pre>unmounted</code></li>
<li>renderTracked（新增）</li>
</ul>
<p>告诉你哪个操作跟踪了组件以及该操作的目标对象和键</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>renderTracked({ key, target, type }) {
  // 这里的target为更新之前的值,type是get
  console.log({ key, target, type })
} 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>renderTriggered（新增）</li>
</ul>
<p>告诉你是什么操作触发了重新渲染，以及该操作的目标对象和键。 target 为更新之后的值, type 是 set<br>
这些生命周期还可以通过 API 在 setup() 里使用</p>
<ul>
<li>beforeMount -&gt; <code v-pre>onBeforeMount</code></li>
<li>mounted -&gt; <code v-pre>onMounted</code></li>
<li>beforeUpdate -&gt; <code v-pre>onBeforeUpdate</code></li>
<li>updated -&gt; <code v-pre>onUpdated</code></li>
<li>beforeDestroy -&gt; <code v-pre>onBeforeUnmount</code></li>
<li>destroyed -&gt; <code v-pre>onUnmounted</code></li>
<li>errorCaptured -&gt; <code v-pre>onErrorCaptured</code></li>
</ul>
<h2 id="九-选项-资源" tabindex="-1"><a class="header-anchor" href="#九-选项-资源" aria-hidden="true">#</a> 九. 选项 / 资源</h2>
<p>filters(废弃)<br>
过滤器还是有时候在用的<br>
十. 选项 / 组合<br>
parent（废弃）<br>
这个属性平时开发基本不会用到<br>
setup(详情见上面)</p>
<h2 id="十一-选项-其它" tabindex="-1"><a class="header-anchor" href="#十一-选项-其它" aria-hidden="true">#</a> 十一. 选项 / 其它</h2>
<p>delimiters（废弃）<br>
functional（废弃）<br>
使用了新的异步组件的生成方法<br>
model（废弃）<br>
v-model 修改了，不需要固定的属性名和事件名了，手动去处理<br>
comments（废弃）</p>
<h2 id="十二-实例-property" tabindex="-1"><a class="header-anchor" href="#十二-实例-property" aria-hidden="true">#</a> 十二. 实例 property</h2>
<p>vm.$attrs（修改）<br>
现在<code v-pre>$attrs</code>不但会获取父作用域中不作为组件<code v-pre>props</code>的值，也可以获取到自定义事件（包含了 $listeners 的功能）。<br>
vm.$children（废弃）<br>
vm.$scopedSlots（废弃）<br>
vm.$isServer（废弃）<br>
vm.$listeners（废弃）</p>
<h2 id="十三-实例方法-数据" tabindex="-1"><a class="header-anchor" href="#十三-实例方法-数据" aria-hidden="true">#</a> 十三. 实例方法 / 数据</h2>
<p><code v-pre>vue3</code>底层使用了 proxy 进行数据监听，所以不需要这两个方法了。<br>
vm.$set（废弃）<br>
vm.$delete（废弃）</p>
<h2 id="十四-实例方法-事件" tabindex="-1"><a class="header-anchor" href="#十四-实例方法-事件" aria-hidden="true">#</a> 十四. 实例方法 / 事件</h2>
<p>因为现在可以直接在 setup 调用生命周期 api，而且可以引入别的 js 里的方法来使用，所以这些方法也可以不需要了。<br>
vm.$on（废弃）<br>
vm.$once（废弃）<br>
vm.$off（废弃）</p>
<h2 id="十五-实例方法-生命周期" tabindex="-1"><a class="header-anchor" href="#十五-实例方法-生命周期" aria-hidden="true">#</a> 十五. 实例方法 / 生命周期</h2>
<p>vm.$mount（废弃）<br>
统一使用 createApp 的 mount 方法来挂载<br>
vm.$destroy（废弃）<br>
统一使用 createApp 的 unmount 方法来卸载</p>
<h2 id="十六-指令" tabindex="-1"><a class="header-anchor" href="#十六-指令" aria-hidden="true">#</a> 十六. 指令</h2>
<p>v-bind（修改）</p>
<ul>
<li>.prop 去除</li>
<li>.sync 去除 (现在需要手动去同步)</li>
<li>.camel 将 kebab-case attribute 名转换为 camelCase</li>
</ul>
<p>v-model（修改）<br>
对于组件可以绑定多个属性值</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
  &lt;!--在vue3.0中，v-model后面需要跟一个modelValue，即要双向绑定的属性名-->
  &lt;!-- 在Vue3.0中也可以继续使用`Vue2.0`的写法 -->
  &lt;a-input v-model:value="value" placeholder="Basic usage" />
&lt;/template>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义一个组件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
  &lt;div>
    &lt;input :value="value" @input="_handleChangeValue" />
  &lt;/div>
&lt;/template>
&lt;script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  name: "CustomInput",
  setup(props, { emit }) {
    function _handleChangeValue(e) {
      // vue3.0 是通过emit事件名为 update:modelValue来更新v-model的
      emit("update:value", e.target.value);
    }
    return {
      _handleChangeValue
    };
  }
};
&lt;/script>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>v-on（修改）<br>
.{keyAlias} - 仅当事件是从特定键触发时才触发回调。不再通过键码的修饰符来触发。<br>
v-is（新增）<br>
类似 vue2 中的: is 绑定，可以让组件在某些特定的 html 标签中渲染，比如 table,ul。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> &lt;!-- 不正确，不会渲染任何内容 --> &lt;tr v-is="blog-post-row">&lt;/tr>
 &lt;!-- 正确 --> &lt;tr v-is="'blog-post-row'">&lt;/tr>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十七-特殊-attribute" tabindex="-1"><a class="header-anchor" href="#十七-特殊-attribute" aria-hidden="true">#</a> 十七. 特殊 attribute</h2>
<p>key(修改)<br>
循环的时候，<code v-pre>key</code>要设置在<code v-pre>template</code>上。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> &lt;template v-for="item in list" :key="item.id"> &lt;div>...&lt;/div> &lt;span>...&lt;/span> &lt;/template>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>ref(修改)<br>
<code v-pre>v-for</code>里使用的<code v-pre>ref</code>将不会再自动创建数组<br>
解决方式:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> &lt;div v-for="item in list" :ref="setItemRef">&lt;/div> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>export default {
  data() {
    return {
      itemRefs: []
    }
  },
  methods: {
    setItemRef(el) {
      this.itemRefs.push(el)
    }
  },
  beforeUpdate() {
    this.itemRefs = []
  },
  updated() {
    console.log(this.itemRefs)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十八-内置的组件" tabindex="-1"><a class="header-anchor" href="#十八-内置的组件" aria-hidden="true">#</a> 十八. 内置的组件</h2>
<p>transition（修改）</p>
<ul>
<li>Props 新增：</li>
</ul>
<p>persisted - boolean 如果为 true，则表示这是一个转换，实际上不会插入 / 删除元素，而是切换显示 / 隐藏状态。 transition 过渡挂钩被注入，但会被渲染器跳过。 相反，自定义指令可以通过调用注入的钩子（例如 v-show）来控制过渡<br>
enter-class -&gt;<code v-pre>enter-from-class</code><br>
leave-class -&gt;<code v-pre>leave-from-class</code></p>
<ul>
<li>事件</li>
</ul>
<p>before appear<br>
teleport(新增)<br>
将内容插入到目标元素中</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> &lt;teleport to="#popup" :disabled="displayVideoInline"> &lt;h1>999999&lt;/h1> &lt;/teleport> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>to</code>必填属性，必须是一个有效的 query 选择器，或者是元素 (如果在浏览器环境中使用）。中的内容将会被放置到指定的目标元素中<br>
<code v-pre>disabled</code>这是一个可选项 ，做一个是可以用来禁用的功能，这意味着它的插槽内容不会移动到任何地方，而是按没有 teleport 组件一般来呈现【默认为 false】<br>
适合场景，全局的 loading，多个内容合并等等等。</p>
<h2 id="十九-总结" tabindex="-1"><a class="header-anchor" href="#十九-总结" aria-hidden="true">#</a> 十九. 总结</h2>
<p>总体来说，<code v-pre>vue3</code>在尽可能的兼容<code v-pre>vue2</code>的同时，又引入了全新的组合式 API 的编程方式，这种新的模式有点类似 react 的思想，解决了之前版本对于业务代码难复用的问题，而且对一个页面来说，不同的功能代码可以更好的去区分，不会有以前各种变量和方法挤在一堆，后期难于维护的问题。加上良好的<code v-pre>ts</code>支持，很好很强大。<br>
周边的一些组件<code v-pre>vue Router4.0</code>, <code v-pre>vuex4.0</code>也都提供了<code v-pre>vue3</code>支持。组件库这块，<code v-pre>ant design vue</code>和<code v-pre>vant</code>已经支持了<code v-pre>vue3</code>。<br>
不过正如官方文档中建议的，目前还不建议把一些重要的项目迁移到 vue3 当中，因为 vue3 还有很多需要完善的地方，而且目前还不支持 ie，等兼容的工作完成，还是只能兼容到 ie11。</p>
<h3 id="不支持ie11的vue3" tabindex="-1"><a class="header-anchor" href="#不支持ie11的vue3" aria-hidden="true">#</a> 不支持IE11的vue3</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
不支持 IE11 的原因
所以我硬着头皮看了下英文，总结一下原因有三：
1.Proxy 更香，Vue 团队想用
2.Vue 团队想为干掉 IE 贡献一份力量
3.若支持，开发和维护成本都太高。
Vue 2 基于 ES5 getter/setters，Vue 3 基于 Proxy，若实现他们要逻辑双写。
Vue 团队不想因为 IE11 做更多的牺牲, 如果未来再出个 Super Proxy 我就太难了。

我们想着，使用babel转换vue3，Babel 的 transpiled 和 polyfilled 都没办法支持 Proxy
 的功能特性。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue2-x支持ie11的代码" tabindex="-1"><a class="header-anchor" href="#vue2-x支持ie11的代码" aria-hidden="true">#</a> vue2.x支持ie11的代码</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>在vue.config.js中的配置
 chainWebpack: (config) => {
    // 在chainWebpack中添加下面的代码
    config.entry.app = ['babel-polyfill', './src/main.js'];
};


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
