<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_1-新的es标准的实现xxx-test测试">1.新的ES标准的实现XXX---test测试</RouterLink></li><li><RouterLink to="#_2-es2022新增">2.ES2022新增</RouterLink></li></ul></nav>
<h2 id="_1-新的es标准的实现xxx-test测试" tabindex="-1"><a class="header-anchor" href="#_1-新的es标准的实现xxx-test测试" aria-hidden="true">#</a> 1.新的ES标准的实现XXX---test测试</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>- ？？用于判断当前的值不是null或undefined，如果是，就用后面的值。

- ？.是否有属性的判断如果没有当前的属性，可以不去使用，避免报错

- 还有一个高级使用{}
一般使用
let obj = {name:'每日',age:23,sex:"男性"}
let {name} = obj;

如果想要先声明一下使用，需要加上（）小括号
let name,age;
({name,age} = obj)


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-es2022新增" tabindex="-1"><a class="header-anchor" href="#_2-es2022新增" aria-hidden="true">#</a> 2.ES2022新增</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ECMA 国际组织批准 ECMAScript 2022：一些新的功能
为类添加新的成员---------------？
通过 in 运算符进行私有属性检查
顶级模块中的 await
error.cause 指出导致错误的原因
String/Array/类数组增加 .at()
正则表达式匹配索引
Object.hasOwn(obj, propKey)，一种安全的方式来检查对象是否具有自己的非继承的属性

Array.prototype.find()
The find() method returns the first element     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
