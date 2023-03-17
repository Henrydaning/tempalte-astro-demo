<template><div><p><img src="/images/home.png" alt="成长"></p>
<nav class="table-of-contents"><ul><li><RouterLink to="#回到博客主页">回到博客主页</RouterLink></li><li><RouterLink to="#api类的不熟悉问题">API类的不熟悉问题</RouterLink></li><li><RouterLink to="#记录组内常见vue问题">记录组内常见vue问题</RouterLink><ul><li><RouterLink to="#_001vue中自定义v-model使用">001vue中自定义v-model使用</RouterLink></li><li><RouterLink to="#computed的经典使用场景。">computed的经典使用场景。</RouterLink></li><li><RouterLink to="#watch和computed使用场景区分">watch和computed使用场景区分</RouterLink></li><li><RouterLink to="#组内computed指导记录">组内computed指导记录</RouterLink></li><li><RouterLink to="#使用popover使用js控制弹出编程">使用popover使用js控制弹出编程</RouterLink></li><li><RouterLink to="#_006api的vue常用知识复习">006API的vue常用知识复习</RouterLink></li><li><RouterLink to="#_006vue快捷使用操作汇总内容">006vue快捷使用操作汇总内容</RouterLink></li></ul></li></ul></nav>
<h2 id="回到博客主页" tabindex="-1"><a class="header-anchor" href="#回到博客主页" aria-hidden="true">#</a> 回到博客主页</h2>
<p><RouterLink to="/">博客首页</RouterLink></p>
<ul>
<li>
<p>第一类：基础API类的不熟悉问题</p>
</li>
<li>
<p>第二类：样式类</p>
</li>
<li>
<p>高级API使用使用</p>
</li>
<li>
<p>框架之间结合使用问题</p>
</li>
</ul>
<h2 id="api类的不熟悉问题" tabindex="-1"><a class="header-anchor" href="#api类的不熟悉问题" aria-hidden="true">#</a> API类的不熟悉问题</h2>
<h2 id="记录组内常见vue问题" tabindex="-1"><a class="header-anchor" href="#记录组内常见vue问题" aria-hidden="true">#</a> 记录组内常见vue问题</h2>
<h3 id="_001vue中自定义v-model使用" tabindex="-1"><a class="header-anchor" href="#_001vue中自定义v-model使用" aria-hidden="true">#</a> 001vue中自定义v-model使用</h3>
<p>本质上还是通过 自定义标签的 attribute 传递和接受；</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>在自定义标签中注册 v-model:attriButeName="value" , 会拆分为两个属性

:attributeName="value" 和 @update:attributeName="value=$event" ；

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
---父组件绑定
&lt;my-comp v-model:name="nameValue" v-model:age="ageValue" />
注意如果v-model没有指定，那么会用默认的modelValue替代，等同一下


---子组件中使用：
export default {
    // props 注册接受 自定义标签的 name和age 
    props:['name', 'age'],
    // emits 注册 接受自定义标签的 update:name 和 update:age 属性绑定的事件
    emits: ['update:name', 'update:age'],
    setup(context){
        setTimeout(() => {
          // 通过 $emit 触发事件传递数据
          context.emit('update:name', 'new-name');
          context.emit('update:age', 100)
        })
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="computed的经典使用场景。" tabindex="-1"><a class="header-anchor" href="#computed的经典使用场景。" aria-hidden="true">#</a> computed的经典使用场景。</h3>
<p>/-------------当赋值给计算属性的时候，将调用setter函数。
多用于在模板组件中需要修改计算属性自身的值的时候。-----------------/</p>
<p>computed的属性可以被视为是data一样，可以读取和设值。
一般使用：
都是return返回值。</p>
<p>watch和computed对比使用场景：一个值变化了，通知监听触发</p>
<p>子组件中v-model的创建自定义的属性变化，变化之后，需要做一个监听通知。</p>
<p>简单不用watch的办法是通过computed方法，将set和get方法放入，然后set中进行通知。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>computed: {
    updateMessage: {
      get: function() {
        console.log('计算属性', this.message)
        return this.message
      },
      set: function(newVal) {
        this.message = newVal
        console.log('newVal', newVal)
      }
    }
  },
  mounted () {
    //计算属性变化了
    updateMessage = '222'
    console.log('测试：', this)
   },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="watch和computed使用场景区分" tabindex="-1"><a class="header-anchor" href="#watch和computed使用场景区分" aria-hidden="true">#</a> watch和computed使用场景区分</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>--- computed是根据当前值或是多个值，计算新的值的时候，使用（如果vue3使用，需要单独导出，或是在reactive中。）
--- watch是监听一个值变化的时候，通知或是处理其他事情
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组内computed指导记录" tabindex="-1"><a class="header-anchor" href="#组内computed指导记录" aria-hidden="true">#</a> 组内computed指导记录</h3>
<h4 id="vue3中两种computed的使用" tabindex="-1"><a class="header-anchor" href="#vue3中两种computed的使用" aria-hidden="true">#</a> vue3中两种computed的使用</h4>
<ul>
<li>方式1：set和get方式</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
其实set功能和watch做类似的功能，通知变化使用。比函数更好用一些

这种在reactive中写这种，用于子组件，
const state = reactive({
    dateFlag: computed({
        set(val)  {
            let temp = props.params.displayName.indexOf("/n");
            console.error(temp,'temp',val,'计算属性传递的实参');
        },
        get(){
            let temp = props.params.displayName.indexOf("/n");
            console.error(temp,'temp');

            return temp>0?true:false;
        }
    })
});

一般是:
  const  dateFlag = computed({
        set(val)  {
            let temp = props.params.displayName.indexOf("/n");
            console.error(temp,'temp',val,'计算属性传递的实参');
        },
        get(){
            let temp = props.params.displayName.indexOf("/n");
            console.error(temp,'temp');
            return temp>0?true:false;
        }
    })


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>方式2：在computed中调用函数</li>
</ul>
<p>vue在computed中调用函数</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
---vue2用法

dataAmand () {
       return function (value) {
         return this.countNum(value, 4)
       }
}

---vue3用法:传入函数计算值
const state= reactive({
        displayDateValue: computed(()=>{
        return function(value:string){
            return value;
        };
    })
})





- 使用案例3多个参数实例：给计算属性传递多个参数，
传入一个当前值，将当前的值根据不同的情况进行渲染，不需要进行函数声明，避免函数的声明混乱。
---计算属性可以减少重新计算，
displayDateValue: computed(()=>{
    return function(value:string,type:number){
        let temp = value.indexOf("datehead");
        if(temp > 0){
            return value.split("datehead")[type];
        }else  {
            return value;
        }
    };
})


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用popover使用js控制弹出编程" tabindex="-1"><a class="header-anchor" href="#使用popover使用js控制弹出编程" aria-hidden="true">#</a> 使用popover使用js控制弹出编程</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
// 当前的popover的ref
const popoverRef = ref();
//使用unref原因，如果参数是一个 ref，则返回内部值，否则返回参数本身。
/**
 * 命令触发popover弹出界面
 */
const onClickOutside = () => {
  // unref(popoverRef).popperRef?.delayHide?.();
  // casterSelectTableFn();
  unref(popoverRef).popperRef?.delayHide?.();
};


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_006api的vue常用知识复习" tabindex="-1"><a class="header-anchor" href="#_006api的vue常用知识复习" aria-hidden="true">#</a> 006API的vue常用知识复习</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@click.capture:事件捕获，先执行父级的函数，再去执行子级触发，就是

@click.self：只会触发本身的函数
（self只响应当前元素自身触发的事件，不会响应经过冒泡触发的事件，并不会阻止冒泡继续向外部触发）
@click.once：只会执行一次

@click.prevent:阻止标签上原生的默认行为，比如a超链接的跳转，表单的提交

@click.stop:阻止事件的传递，只会执行当前的元素函数
（stop是从自身开始不向外部发射冒泡信号）

.passive 滚动事件的默认行为 (即滚动行为) 将会立即触发，而不会等待 onScroll 完成。这个 .passive 修饰符尤其能够提升移动端的性能。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_006vue快捷使用操作汇总内容" tabindex="-1"><a class="header-anchor" href="#_006vue快捷使用操作汇总内容" aria-hidden="true">#</a> 006vue快捷使用操作汇总内容</h3>
<p>分享内容记录</p>
<h4 id="vue3中-refs使用" tabindex="-1"><a class="header-anchor" href="#vue3中-refs使用" aria-hidden="true">#</a> vue3中$refs使用</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>getCurrentInstance岁软可以返回实例对象。
注意不要把该函数当作是optionsApi中来获取 this 使用。
该方法只在 setup、生命周期函数中有效，在方法中是无效的

注意⚠️，通过&lt;script setup>语法糖的写法，其组件是默认关闭的，也就是说如果是通过$refs或者$parents来访问子组件中定义的值是拿不到的，必须通过defineExpose向外暴露你想获取的值才行。

注意：
//vue3-typescript
const { proxy, ctx } = (getCurrentInstance() as ComponentInternalInstance)
// TODO：注意不要用ctx，因为ctx打包后，会失效。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="快捷使用vue中数据和内容方法" tabindex="-1"><a class="header-anchor" href="#快捷使用vue中数据和内容方法" aria-hidden="true">#</a> 快捷使用vue中数据和内容方法</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue3中setup可以方便不需要return就可以。

---------------老一点的方法如

store和初始化使用数据的问题
初始化之后，这里displayValue和store.state.btnFlag关系已经断开了。
除非使用计算属性或是watch重新给变化后，displayValue重新赋值。
即使使用reactive包裹初始化，也只是将数据在初始化的时候和视图进行了双向绑定，如果变化了，需要重新赋值，才能使得当前的变化。

const state = reactive({
      displayValue:store.state.btnFlag
 }


----

如果vue中模板使用store，需要return中加入一下。
props中的参数，可以直接在模板中使用

引入一个库后，快速在temple模板使用


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
