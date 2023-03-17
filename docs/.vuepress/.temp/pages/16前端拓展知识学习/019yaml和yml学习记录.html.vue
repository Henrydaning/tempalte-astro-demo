<template><div><h2 id="yaml是什么" tabindex="-1"><a class="header-anchor" href="#yaml是什么" aria-hidden="true">#</a> YAML是什么</h2>
<p>YAML是一种可读性高，以数据为中心的数据序列化格式，可以表达对象（键值对），数组，标量几种数据形式的脚本语言。</p>
<h2 id="_1-什么是序列化" tabindex="-1"><a class="header-anchor" href="#_1-什么是序列化" aria-hidden="true">#</a> 1.什么是序列化</h2>
<p>序列化是指将自定义的对象或者其他数据进行持久化，从而方便的进行传输和存储。
一般情况下，能够序列化的数据一定能够通过反序列化恢复。</p>
<h2 id="_2-yaml语法和格式" tabindex="-1"><a class="header-anchor" href="#_2-yaml语法和格式" aria-hidden="true">#</a> 2.YAML语法和格式</h2>
<h3 id="_1-基本语法" tabindex="-1"><a class="header-anchor" href="#_1-基本语法" aria-hidden="true">#</a> （1）基本语法</h3>
<p>1.用k：v的形式表示键值对关系，冒号后面必须有一个空格；
2.#表示注释
3.对大小写敏感
4.通过缩进来表示层级关系，缩排中空格的数目不重要，只要相同阶层的元素左侧对其就可以。
5.缩进只能使用空格，不能使用tab缩进箭
6.字符串可以不用双引号</p>
<h3 id="_2-格式" tabindex="-1"><a class="header-anchor" href="#_2-格式" aria-hidden="true">#</a> （2）格式</h3>
<p>1.对象和键值对：冒号后面必须有一个空格</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>（1）案例1：对象键值对
Name: daning

（2）通过缩进表示对象多个属性(注意不能用tab)
People:
 Name: daning
 sex: male

（3）也可以写成
people: {name: daning,sex: male}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.数组。数组或是列表元素采用-表示，用-开头行，表示构成一个数组</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>（1）单个数组[A,B]
- A
- B

（2）people:[yyy,zzz]
people: 
   - yyy
   - zzz



（3）行内表示
people: [xxx,zzz]

（4）对象数组
people: 
   - 
    name: yyy
    age: 18
   - 
    name:zzz
    age:90


（5）流式表示
people: [{name: yyy,age: 18},{name: zzz,age: 19}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.标量
标量表示最基本不可以再分的值：整数，浮点数，字符串，布尔值，Null,时间，日期</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>boolean: 
 - true # 大小写都可以
 - false

float: 
 - 3.14
 - 32e+5

int: 12

null: 
 nodeName: name

string: 123

date: 2020-01-01 # 格式为yyyy-MM-dd

datetime: 2020-01-01T15:09:09+08:00 


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.引用
&amp;用于建立锚点，*用于引用锚点，&lt;&lt;表示合并到当前的数据</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>defaults:&amp;defaults
   adapter: ppp
   host: qqq

development:
   datebase: mq
   &lt;&lt;: *defaults


上面的内容相当于
defaults:
    adapter: ppp
    host: qqq

development:
    datebase: mq
    adapter: ppp
    host: qqq

案例2
- &amp;showell steve
- clark
- eve
- *showell
相当于

- steve
- clark
- eve
- steve


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-使用场景" tabindex="-1"><a class="header-anchor" href="#_3-使用场景" aria-hidden="true">#</a> 3.使用场景</h2>
<p>1.脚本语言
YAML实现简单，解析成本低，适合脚本语言中使用</p>
<p>2.序列化</p>
<p>3.配置文件
写YAML必XML方便，所以YAML也可以用来配置文件，但是不同语言之间数据流转不建议使用YAML。</p>
</div></template>
