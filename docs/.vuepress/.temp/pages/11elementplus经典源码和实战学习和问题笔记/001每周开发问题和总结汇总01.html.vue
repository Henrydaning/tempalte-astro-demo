<template><div><p><img src="/images/home.png" alt="成长"></p>
<nav class="table-of-contents"><ul><li><RouterLink to="#回到博客主页">回到博客主页</RouterLink></li><li><RouterLink to="#_01el-data-picker">01el-data-picker</RouterLink><ul><li><RouterLink to="#el-data-picker使用打开一个面板的时候-断开两边的事件区间的关联联动">el-data-picker使用打开一个面板的时候，断开两边的事件区间的关联联动</RouterLink></li><li><RouterLink to="#常见格式化数据的使用">常见格式化数据的使用</RouterLink></li></ul></li><li><RouterLink to="#_02switch">02switch</RouterLink><ul><li><RouterLink to="#重写switchlabel的字体大小">重写switchlabel的字体大小</RouterLink></li><li><RouterLink to="#_003组内问题vue中使用穿透elementplus样式">003组内问题vue中使用穿透elementplus样式</RouterLink></li><li><RouterLink to="#_004手动触发elpover属性">004手动触发elpover属性</RouterLink></li></ul></li><li><RouterLink to="#_03dialog">03dialog</RouterLink><ul><li><RouterLink to="#第一个属性-点击周围model不关闭当前的dialog">第一个属性，点击周围model不关闭当前的dialog</RouterLink></li><li><RouterLink to="#第二个属性-点击关闭按钮后-数据清空">第二个属性，点击关闭按钮后，数据清空</RouterLink></li></ul></li></ul></nav>
<h2 id="回到博客主页" tabindex="-1"><a class="header-anchor" href="#回到博客主页" aria-hidden="true">#</a> 回到博客主页</h2>
<p><RouterLink to="/">博客首页</RouterLink></p>
<h2 id="_01el-data-picker" tabindex="-1"><a class="header-anchor" href="#_01el-data-picker" aria-hidden="true">#</a> 01el-data-picker</h2>
<h3 id="el-data-picker使用打开一个面板的时候-断开两边的事件区间的关联联动" tabindex="-1"><a class="header-anchor" href="#el-data-picker使用打开一个面板的时候-断开两边的事件区间的关联联动" aria-hidden="true">#</a> el-data-picker使用打开一个面板的时候，断开两边的事件区间的关联联动</h3>
<p>unlink-panels</p>
<h3 id="常见格式化数据的使用" tabindex="-1"><a class="header-anchor" href="#常见格式化数据的使用" aria-hidden="true">#</a> 常见格式化数据的使用</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>属性：

        &lt;el-date-picker
          v-model="periodOfTime"
          style="margin-left: 5px"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
          size="small"
          type="daterange"
          unlink-panels
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          :shortcuts="shortcuts"
          @blur="dateChanged"
        />

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02switch" tabindex="-1"><a class="header-anchor" href="#_02switch" aria-hidden="true">#</a> 02switch</h2>
<h3 id="重写switchlabel的字体大小" tabindex="-1"><a class="header-anchor" href="#重写switchlabel的字体大小" aria-hidden="true">#</a> 重写switchlabel的字体大小</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/* 重写switchlabel的字体大小 */
:deep(.el-switch__label) {
	font-size: 12px;
	span {
		font-size: 12px;
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_003组内问题vue中使用穿透elementplus样式" tabindex="-1"><a class="header-anchor" href="#_003组内问题vue中使用穿透elementplus样式" aria-hidden="true">#</a> 003组内问题vue中使用穿透elementplus样式</h3>
<p>vue3最新使用:deep()，注意如果需要用父类，使用当前的父类，原因是
下面的后代选择器的原因</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>:deep(.el-tree) {
  border-radius: 5px;

  .el-tree-node:focus > .el-tree-node__content {
    background-color: #8dbae423;
    color: #0099ff;
    border-radius: 5px;
  }

  .el-tree-node > .el-tree-node__content {
    border-radius: 5px;
  }


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_004手动触发elpover属性" tabindex="-1"><a class="header-anchor" href="#_004手动触发elpover属性" aria-hidden="true">#</a> 004手动触发elpover属性</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
&lt;el-popover
    ref="popoverRef"
    :virtual-ref="buttonRef"
    trigger="click"
    title="With title"
    virtual-triggering
>
&lt;span> Some content &lt;/span>
&lt;/el-popover>
 
const popoverRef = ref()
const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.()
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03dialog" tabindex="-1"><a class="header-anchor" href="#_03dialog" aria-hidden="true">#</a> 03dialog</h2>
<h3 id="第一个属性-点击周围model不关闭当前的dialog" tabindex="-1"><a class="header-anchor" href="#第一个属性-点击周围model不关闭当前的dialog" aria-hidden="true">#</a> 第一个属性，点击周围model不关闭当前的dialog</h3>
<h3 id="第二个属性-点击关闭按钮后-数据清空" tabindex="-1"><a class="header-anchor" href="#第二个属性-点击关闭按钮后-数据清空" aria-hidden="true">#</a> 第二个属性，点击关闭按钮后，数据清空</h3>
<p>destroy-on-close</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;el-dialog v-model="dialogTableVisible" title="关联属性" :close-on-click-modal="false" >


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
