<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_1-vue2和vue3中的生命周期函数">1.vue2和vue3中的生命周期函数</RouterLink></li><li><RouterLink to="#_2-computed和watch和method执行顺序">2.computed和watch和method执行顺序</RouterLink></li><li><RouterLink to="#_3-子组件state和props直接传递给子组件的属性执行顺序。">3.子组件state和props直接传递给子组件的属性执行顺序。</RouterLink><ul><li><RouterLink to="#mounted">mounted</RouterLink></li><li><RouterLink to="#加载父子组件渲染过程">加载父子组件渲染过程</RouterLink></li><li><RouterLink to="#理解这个渲染">理解这个渲染</RouterLink></li><li><RouterLink to="#解决方法">解决方法</RouterLink></li><li><RouterLink to="#那为什么传递props就可以了。">那为什么传递props就可以了。</RouterLink></li><li><RouterLink to="#综合解决方案-两种-推荐方法2-onbeforeupdate">综合解决方案：两种，推荐方法2：onBeforeUpdate</RouterLink></li><li><RouterLink to="#方法1-父组件通过延迟-将异步渲染数据变成同步后-再传递">方法1：父组件通过延迟，将异步渲染数据变成同步后，再传递</RouterLink></li><li><RouterLink to="#方法2-子组件确保一定是拿到数据再渲染-利用一个生命周期函数onbeforeupdate">方法2：子组件确保一定是拿到数据再渲染，利用一个生命周期函数onBeforeUpdate</RouterLink></li></ul></li><li><RouterLink to="#_4-vue3中setup问题">4.vue3中setup问题</RouterLink></li><li><RouterLink to="#_5-创建自定义指令方法">5.创建自定义指令方法</RouterLink></li></ul></nav>
<h2 id="_1-vue2和vue3中的生命周期函数" tabindex="-1"><a class="header-anchor" href="#_1-vue2和vue3中的生命周期函数" aria-hidden="true">#</a> 1.vue2和vue3中的生命周期函数</h2>
<p>同时使用，那么优先vue3的周期函数，接着是同样的作用vue2周期函数。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>

*   beforeMount -> `onBeforeMount`
*   mounted -> `onMounted`
*   beforeUpdate -> `onBeforeUpdate`
*   updated -> `onUpdated`
*   beforeDestroy -> `onBeforeUnmount`
*   destroyed -> `onUnmounted`
*   errorCaptured -> `onErrorCaptured`

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-computed和watch和method执行顺序" tabindex="-1"><a class="header-anchor" href="#_2-computed和watch和method执行顺序" aria-hidden="true">#</a> 2.computed和watch和method执行顺序</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>默认加载的时候先computed再watch，不执行methods；

等触发某一事件后，则是：先methods再watch。


computed是在HTML DOM加载后马上执行的，如赋值；而methods则必须要有一定的触发条件才能执行，如点击事件；watch呢？它用于观察Vue实例上的数据变动。对应一个对象，键是观察表达式，值是对应回调。值也可以是方法名，或者是对象，包含选项。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-子组件state和props直接传递给子组件的属性执行顺序。" tabindex="-1"><a class="header-anchor" href="#_3-子组件state和props直接传递给子组件的属性执行顺序。" aria-hidden="true">#</a> 3.子组件state和props直接传递给子组件的属性执行顺序。</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>父组件传给子组件一个props.AgeName属性，
其实子组件可以直接在页面使用{{AgeName}},这里属性使用，但是如果此时重新用这个属性，
state.nameAgeProp:props.AgeName;//此时数据不会更新为传入的props.AgeName，更可能为空，为什么？
其实本质上，这里涉及了一个父子组件的渲染顺序。
这里。本质上，先和生命周期思考

对于父子组件的生命周期影响，这里只有两个钩子：beforeUpdate和updated两个钩子。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mounted" tabindex="-1"><a class="header-anchor" href="#mounted" aria-hidden="true">#</a> mounted</h3>
<p>mounted的时候，是可以操作dom，因为这个时候已经完成渲染</p>
<h3 id="加载父子组件渲染过程" tabindex="-1"><a class="header-anchor" href="#加载父子组件渲染过程" aria-hidden="true">#</a> 加载父子组件渲染过程</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>父组件BeforeCreate->父组件created->父组件beforeMount->子组件beforeCreate->子组件create->子组件beforeMount接下来是dom完成阶段，子组件mounted->父组件mounted
注意：强行将父组件的值传递给子组件，此时子组件mounted的时候，如果只是渲染自己子组件中的值，那么此时子组件此时state自身的值都是初始化的值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="理解这个渲染" tabindex="-1"><a class="header-anchor" href="#理解这个渲染" aria-hidden="true">#</a> 理解这个渲染</h3>
<p>可以理解为父组件生命周期没有完成，子组件生命周期已经走完了，才会走父组件的生命周期。</p>
<p>这个可能会导致一个问题：如果父组件传给子组件的是异步数据（父组件通过接口渲染完成后的数据，可能出现子组件在mounted钩子初始化的时候接受不到的情况。）
原文中，对于el-propogation组件的值和下面div的list传给过去的值，因为div下面的list需要渲染，所以</p>
<p>mounted钩子默认加载只会执行一次，由于数据是要等到200毫秒以后才能拿到，那么子组件的mounted钩子执行的时候，还没有拿到父组件传递过来的数据，但是又必须要打印出来msg的结果，那这样的话，就只能去打印props中的msg的默认值空字符串了</p>
<h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h3>
<p>父组件可以在赋值的时候，利用setTImout，专业那个可以确保拿到数据后，将子组件的v-if设置为 true，确保渲染子组件的时候，已经有值了。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>父组件

 created() {
    // 用定时器模拟发请求异步获取后端接口的数据
    setTimeout(() => {
      this.msg = "666";
      this.isGetData = true // 拿到数据以后，再把isGetData置为true，这样的话，子组件就会被渲染啦，数据也就会被传递过去啦
    }, 200);
    

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本质原因探索：就是父组件是异步数据传递。</p>
<!-- ![3e249080d73aa77cdf56858f9bf698ef.png](en-resource://database/7999:1) -->
<h3 id="那为什么传递props就可以了。" tabindex="-1"><a class="header-anchor" href="#那为什么传递props就可以了。" aria-hidden="true">#</a> 那为什么传递props就可以了。</h3>
<p>比如我们自组件使用prop.AgeName可以获取值，但是子组件中state.AgePropName:props.AgeName,的时候，这里state.AgePropName是初始化值，不是新的值。
这里其实有两个问题：子组件的值渲染世纪和props传值到页面渲染时机。</p>
<h4 id="第一个子组件的state渲染时机" tabindex="-1"><a class="header-anchor" href="#第一个子组件的state渲染时机" aria-hidden="true">#</a> 第一个子组件的state渲染时机</h4>
<p>由于数据是要等到200毫秒以后才能拿到，那么子组件的mounted钩子执行的时候，还没有拿到父组件传递过来的数据，但是又必须要打印出来state.AgePropName的结果，那这样的话，就只能去打印props中给的props.AgeName的默认值了，这里传递的props默认是一个对象，所以打印此时typeof  state.AgePropName是null空对象。
这说明，props值初始化这个阶段在mounted之前，应该是没有执行的。</p>
<h4 id="props-agename渲染" tabindex="-1"><a class="header-anchor" href="#props-agename渲染" aria-hidden="true">#</a> props.AgeName渲染</h4>
<p>但是如果直接使用props的值，比如用props初始化的值渲染到页面，那么此时的时机就是不一样，因为至少这个过程晚于上面state.AgePropName初始化，因为父组件beforMounted后子组件beforeMounted,子组件mounted后父组件mounted,那么子组件渲染完成后，使用props.AgeName，那么此时就是好时机，此时父组件其实渲染完成，再次给组件更新props新的值，（之前子组件渲染的props.AgeName是空，但是此时watch一直没有用，因为不在这个生命周期，）但是会走onBeforeUpdate这个生命周期，注意这个生命周期中，一定是父组件更新的props值，到现在已经确保好了，那么此时props的所有属性值都有值的状态了。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
onBeforeUpdate(()=>{
//此时可以打印props值。
   console.log('--------此时使用了这个onBeforeUpdate周期',props.myListTotal)
        })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="综合解决方案-两种-推荐方法2-onbeforeupdate" tabindex="-1"><a class="header-anchor" href="#综合解决方案-两种-推荐方法2-onbeforeupdate" aria-hidden="true">#</a> 综合解决方案：两种，推荐方法2：onBeforeUpdate</h3>
<h3 id="方法1-父组件通过延迟-将异步渲染数据变成同步后-再传递" tabindex="-1"><a class="header-anchor" href="#方法1-父组件通过延迟-将异步渲染数据变成同步后-再传递" aria-hidden="true">#</a> 方法1：父组件通过延迟，将异步渲染数据变成同步后，再传递</h3>
<p>父组件控制一定是异步数据完成了赋值，子组件再进行渲染，利用setTimeout和v-if是true，子组件再渲染</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    setTimeout(() => {
      this.msg = "666";
      this.isGetData = true // 拿到数据以后，再把isGetData置为true，这样的话，子组件就会被渲染啦，数据也就会被传递过去啦
    }, 200);


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法2-子组件确保一定是拿到数据再渲染-利用一个生命周期函数onbeforeupdate" tabindex="-1"><a class="header-anchor" href="#方法2-子组件确保一定是拿到数据再渲染-利用一个生命周期函数onbeforeupdate" aria-hidden="true">#</a> 方法2：子组件确保一定是拿到数据再渲染，利用一个生命周期函数onBeforeUpdate</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>        onBeforeUpdate(()=>{
            console.log('--------此时使用了这个onBeforeUpdate周期',props.myListTotal)
            // 这个阶段重新给state.myListPageTotals赋值，一定可以了
            // TODO:
            state.myListPageTotals = props.myListTotal;//此时会再次执行一次watch,因为此时state值变化了，watch
        })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法3：有一个取巧的办法，</p>
<p>直接使用props.AgeName属性直接在页面渲染，这个属性此时因为是子组件渲染阶段，那么此时父组件的赋值已经完全完成。</p>
<h2 id="_4-vue3中setup问题" tabindex="-1"><a class="header-anchor" href="#_4-vue3中setup问题" aria-hidden="true">#</a> 4.vue3中setup问题</h2>
<p>setup函数只会在页面初始化的时候执行一次setup进入页面只会执行一次，如果后期再给person添加属性，这个属性不会是响应式的</p>
<p>setup是在beforeCreate和created之前执行，创建的是data和method。</p>
<h2 id="_5-创建自定义指令方法" tabindex="-1"><a class="header-anchor" href="#_5-创建自定义指令方法" aria-hidden="true">#</a> 5.创建自定义指令方法</h2>
<p><a href="https://app.yinxiang.com/shard/s37/nl/24388549/30312329-3d9d-4d7e-8559-9f05c970ed1f" target="_blank" rel="noopener noreferrer">000---vue3的新的api汇总和一些vue常见问题md<ExternalLinkIcon/></a></p>
</div></template>
