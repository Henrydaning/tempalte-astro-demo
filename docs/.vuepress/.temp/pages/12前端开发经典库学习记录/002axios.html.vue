<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_1-axios拦截器封装">1.axios拦截器封装</RouterLink></li><li><RouterLink to="#_2-axios取消-防止重复点击。">2.axios取消，防止重复点击。</RouterLink></li></ul></nav>
<h2 id="_1-axios拦截器封装" tabindex="-1"><a class="header-anchor" href="#_1-axios拦截器封装" aria-hidden="true">#</a> 1.axios拦截器封装</h2>
<h2 id="_2-axios取消-防止重复点击。" tabindex="-1"><a class="header-anchor" href="#_2-axios取消-防止重复点击。" aria-hidden="true">#</a> 2.axios取消，防止重复点击。</h2>
<p>https://gitee.com/nyhxiaoning/pc-person-base-vuecli3-scaffold-0608.git</p>
<p>文件是fetch</p>
<p>config.cancelToken利用这个取消</p>
<p>通过map中的唯一值，键值是</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>实现思路
第一，
// TODO:增加请求携带cancelToken的请求，默认是true,如果不想要可以取消这个请求，传参
if (!config.cancelTokenFlag) {
config.cancelTokenFlag = true;
}
第二
// 对axios参数进行一些操作
config.cancelTokenFlag &amp;&amp; removePending(config);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>备注：
其中，Map是一个唯一值的数据存储，使用当前的请求地址作为键名，值为一个取消请求方法，如果有了这个键名，再次有，那么触发cacel方法</p>
</div></template>
