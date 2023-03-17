<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_1-color-convert">1.color-convert</RouterLink></li></ul></nav>
<h2 id="_1-color-convert" tabindex="-1"><a class="header-anchor" href="#_1-color-convert" aria-hidden="true">#</a> 1.color-convert</h2>
<p>颜色转换器。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var convert = require('color-convert');
 
convert.rgb.hsl(140, 200, 100);             // [96, 48, 59]
convert.keyword.rgb('blue');
颜色转为十六进制
convert.rgb.hex(123, 45, 67);      // '7B2D43'
convert.rgb.hex([123, 45, 67]);    // '7B2D43'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="补充各种颜色模型" tabindex="-1"><a class="header-anchor" href="#补充各种颜色模型" aria-hidden="true">#</a> 补充各种颜色模型</h4>
<ul>
<li>HSV(hue,saturation,value)颜色空间的模型，HSV模型对应于画家配色的方法</li>
<li>HSI色彩空间是从人的视觉系统出发，HSI色彩空间和RGB色彩空间只是同一物理量的不同表示法，因而它们之间存在着 转换关系。</li>
<li>RGB(red,green,blue)颜色空间最常用的用途就是显示器系统</li>
<li>CMYK(cyan,magenta,yellow)颜色空间应用于印刷工业</li>
<li>HSL(hue,saturation,lightness)颜色空间，这个颜色空间都是用户台式机图形程序的颜色表示</li>
<li>HSB(hue,saturation,brightness)颜色空间，这个颜色空间都是用户台式机图形程序的颜色表示，</li>
<li>Lab颜色空间是由CIE(国际照明委员会)制定的一种色彩模式。自然界中任何一点色都可以在Lab空间 中表达出来，它的色彩空间比RGB空间还要大。以数字化方式来描述人的视觉感应， 与设备无关，所以它弥补了RGB和CMYK模式必须依赖于设备色彩特性的不足。（<code v-pre>hwb()</code>，<code v-pre>lab()</code>并且<code v-pre>lch()</code>目前仅在 Safari 中受支持。）</li>
<li>YUV颜色空间在现代彩色电视系统</li>
</ul>
</div></template>
