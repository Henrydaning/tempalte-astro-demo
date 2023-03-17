<template><div><p><img src="/images/home.png" alt="成长"></p>
<nav class="table-of-contents"><ul><li><RouterLink to="#回到博客主页">回到博客主页</RouterLink><ul><li><RouterLink to="#_001插件vue-draggable-next使用">001插件vue-draggable-next使用</RouterLink></li><li><RouterLink to="#_002dayjs使用常用日期格式化">002dayjs使用常用日期格式化</RouterLink></li></ul></li></ul></nav>
<h2 id="回到博客主页" tabindex="-1"><a class="header-anchor" href="#回到博客主页" aria-hidden="true">#</a> 回到博客主页</h2>
<p><RouterLink to="/">博客首页</RouterLink></p>
<h3 id="_001插件vue-draggable-next使用" tabindex="-1"><a class="header-anchor" href="#_001插件vue-draggable-next使用" aria-hidden="true">#</a> 001插件vue-draggable-next使用</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
Events：API中的方法汇总说明：
Support for Sortable events:
start, add, remove, update, end, choose, unchoose, sort, filter, clone

使用案例
&lt;draggable :list="list" @end="onEnd">

---增加一个可拖动区域样式设置：handle配置:只能在logo区域拖动
 &lt;draggable
        v-model="columns" tag="transition-group" item-key="id" v-bind="dragOptions" group="columns"
        handle=".drag_box" @start="drag = true" @end="actions.onEnd"
      >
-----------内部样式：drag_box指定这个样式区
      &lt;div class="drag_box">
            &lt;img class="column_item_img" :src="require('@/assets/icons/drag.png')">
          &lt;/div>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_002dayjs使用常用日期格式化" tabindex="-1"><a class="header-anchor" href="#_002dayjs使用常用日期格式化" aria-hidden="true">#</a> 002dayjs使用常用日期格式化</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>比较两个日期函数
dayjs(value).diff(value2,days);

格式化日期
dayjs(value).forMat(YYYY-MM-DD);

import dayjs from 'dayjs';
return {dayjs};//return这个即可。如果是setup，非常方便



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
