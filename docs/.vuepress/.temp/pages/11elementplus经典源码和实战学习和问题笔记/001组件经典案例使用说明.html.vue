<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_1-cascader级联选择器。">1.cascader级联选择器。</RouterLink><ul><li><RouterLink to="#_1-el-cascader-panel直接展示出来面板">（1）el-cascader-panel直接展示出来面板</RouterLink></li></ul></li><li><RouterLink to="#_2-popover展示">2.popover展示</RouterLink><ul><li><RouterLink to="#_1-定义当前的popover的位置">（1）定义当前的popover的位置</RouterLink></li><li><RouterLink to="#_2-通过js控制当前的popover的显示和隐藏。visibility">（2）通过js控制当前的popover的显示和隐藏。visibility</RouterLink></li><li><RouterLink to="#_3-通过插槽直接显示出来一个popover按钮。">（3）通过插槽直接显示出来一个popover按钮。</RouterLink></li></ul></li></ul></nav>
<h2 id="_1-cascader级联选择器。" tabindex="-1"><a class="header-anchor" href="#_1-cascader级联选择器。" aria-hidden="true">#</a> 1.cascader级联选择器。</h2>
<p>希望有一个清晰的数据结构。</p>
<h3 id="_1-el-cascader-panel直接展示出来面板" tabindex="-1"><a class="header-anchor" href="#_1-el-cascader-panel直接展示出来面板" aria-hidden="true">#</a> （1）el-cascader-panel直接展示出来面板</h3>
<p>级联面板直接展示出来。</p>
<h2 id="_2-popover展示" tabindex="-1"><a class="header-anchor" href="#_2-popover展示" aria-hidden="true">#</a> 2.popover展示</h2>
<h3 id="_1-定义当前的popover的位置" tabindex="-1"><a class="header-anchor" href="#_1-定义当前的popover的位置" aria-hidden="true">#</a> （1）定义当前的popover的位置</h3>
<p>placement=&quot;top-start&quot;</p>
<h3 id="_2-通过js控制当前的popover的显示和隐藏。visibility" tabindex="-1"><a class="header-anchor" href="#_2-通过js控制当前的popover的显示和隐藏。visibility" aria-hidden="true">#</a> （2）通过js控制当前的popover的显示和隐藏。visibility</h3>
<p>popover使用js控制显示和隐藏：使用 proxy.$refs.curElPopover.visibility = true;
这个属性控制当前的popover的显示和隐藏。
注意如果不好用，记得配合好当前的popover上面的visable属性。</p>
<h3 id="_3-通过插槽直接显示出来一个popover按钮。" tabindex="-1"><a class="header-anchor" href="#_3-通过插槽直接显示出来一个popover按钮。" aria-hidden="true">#</a> （3）通过插槽直接显示出来一个popover按钮。</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
  &lt;el-popover placement="right" :width="400" trigger="click">
      &lt;template #reference>
 &lt;/template>
 &lt;/el-popover>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
