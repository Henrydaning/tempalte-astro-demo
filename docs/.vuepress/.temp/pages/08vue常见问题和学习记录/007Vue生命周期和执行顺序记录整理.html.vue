<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_0-渲染和生命周期对应">0.渲染和生命周期对应</RouterLink></li><li><RouterLink to="#_1-生命周期的对比变化">1.生命周期的对比变化</RouterLink></li><li><RouterLink to="#_2-详细版本声明周期补充">2.详细版本声明周期补充</RouterLink></li></ul></nav>
<p>Vue和React中生命周期变化</p>
<p><a href="https://www.processon.com/mindmap/631adc475653bb64a8e83878?tutorial=false" target="_blank" rel="noopener noreferrer">001React生命周期 (processon.com)<ExternalLinkIcon/></a></p>
<h2 id="_0-渲染和生命周期对应" tabindex="-1"><a class="header-anchor" href="#_0-渲染和生命周期对应" aria-hidden="true">#</a> 0.渲染和生命周期对应</h2>
<ol>
<li>beforeCreate（创建前）</li>
<li>created （创建后）</li>
<li>beforeMount (载入前)</li>
<li>mounted （载入后）</li>
<li>beforeUpdate （更新前）</li>
<li>updated   （更新后）</li>
<li>beforeDestroy（ 销毁前）</li>
<li>destroyed （销毁后）</li>
</ol>
<h2 id="_1-生命周期的对比变化" tabindex="-1"><a class="header-anchor" href="#_1-生命周期的对比变化" aria-hidden="true">#</a> 1.生命周期的对比变化</h2>
<ul>
<li>beforeMount -&gt; <code v-pre>onBeforeMount</code></li>
<li>mounted -&gt; <code v-pre>onMounted</code></li>
<li>beforeUpdate -&gt; <code v-pre>onBeforeUpdate</code></li>
<li>updated -&gt; <code v-pre>onUpdated</code></li>
<li>beforeDestroy -&gt; <code v-pre>onBeforeUnmount</code></li>
<li>destroyed -&gt; <code v-pre>onUnmounted</code></li>
<li>errorCaptured -&gt; <code v-pre>onErrorCaptured</code></li>
</ul>
<h2 id="_2-详细版本声明周期补充" tabindex="-1"><a class="header-anchor" href="#_2-详细版本声明周期补充" aria-hidden="true">#</a> 2.详细版本声明周期补充</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>beforeMount -> onBeforeMount
mounted -> onMounted
beforeUpdate -> onBeforeUpdate
updated -> onUpdated
beforeDestroy -> onBeforeUnmount
destroyed -> onUnmounted
errorCaptured -> onErrorCaptured

---------补充vue2的生命周期
beforeCreate，在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
created，在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前尚不可用。
beforeMount，在挂载开始之前被调用：相关的 render 函数首次被调用。
mounted，实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当mounted被调用时 vm.$el 也在文档内。
beforeUpdate，数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
updated，由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
activated，被 keep-alive 缓存的组件激活时调用。
deactivated，被 keep-alive 缓存的组件停用时调用。
beforeDestroy，实例销毁之前调用。在这一步，实例仍然完全可用。
destroyed，实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。
errorCaptured，当捕获一个来自子孙组件的错误时被调用。



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
