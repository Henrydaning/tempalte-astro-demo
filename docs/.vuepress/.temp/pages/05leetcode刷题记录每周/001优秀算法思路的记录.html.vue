<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_001对于去重思路的记录">001对于去重思路的记录</RouterLink></li></ul></nav>
<h2 id="_001对于去重思路的记录" tabindex="-1"><a class="header-anchor" href="#_001对于去重思路的记录" aria-hidden="true">#</a> 001对于去重思路的记录</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>常见去重逻辑思路梳理
（1）第一种关于去重的思考部分
if (nums[i] == nums[i + 1]) { // 去重操作
    continue;
}
三元组中出现重复元素的情况直接pass掉了
（2）第二种情况
if (i > 0 &amp;&amp; nums[i] == nums[i - 1]) {
    continue;
}
注意，这里不太好懂，我们分成例子：在看 {-1, -1 ,2} 这组数据，当遍历到 第一个 -1 的时候
我们只是使用nums[i]的时候，判断只要前一位没有-1，那么找个数组可以收录。

（3）注意循环中的细微差别作为思考的切入点
这里一般不考虑场景，我们以为num[i]和num[i-1]或是num[i+1]一种，但是其实不是这样

详见：

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://programmercarl.com/0015.%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.html#%E5%8E%BB%E9%87%8D%E9%80%BB%E8%BE%91%E7%9A%84%E6%80%9D%E8%80%83" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></p>
</div></template>
