<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_1-window对象和window对象区别">1.Window对象和window对象区别</RouterLink></li><li><RouterLink to="#_2">2.</RouterLink></li></ul></nav>
<h2 id="_1-window对象和window对象区别" tabindex="-1"><a class="header-anchor" href="#_1-window对象和window对象区别" aria-hidden="true">#</a> 1.Window对象和window对象区别</h2>
<p>Window 是接口， window 是实例，全局变量是 window 的属性。
window instanceof Window
Window 对象
Window 对象表示浏览器中打开的窗口。
如果文档包含框架（frame 或 iframe 标签），浏览器会为 HTML 文档创建一个 window 对象，
并为每个框架创建一个额外的 window 对象。
注释：没有应用于 window 对象的公开标准，不过所有浏览器都支持该对象。</p>
<p>(1)补充有时候
windows下直接挂载function不可以，除非使用属性包裹，然后属性是function方法才可以</p>
<h2 id="_2" tabindex="-1"><a class="header-anchor" href="#_2" aria-hidden="true">#</a> 2.</h2>
</div></template>
