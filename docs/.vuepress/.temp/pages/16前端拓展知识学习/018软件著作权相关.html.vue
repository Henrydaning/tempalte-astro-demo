<template><div><h2 id="_1-软件著作权的代码量申请" tabindex="-1"><a class="header-anchor" href="#_1-软件著作权的代码量申请" aria-hidden="true">#</a> 1.软件著作权的代码量申请</h2>
<p>软件著作权的申请材料中，有一项是提供源代码，要求是60页word文档，每页50行，总共3000行，不足3000行的，可以全部提交代码就可以。</p>
<p><strong>web的前端代码一般都是html、js、css</strong>，源代码片段是否要包含前端代码，主要看你填写软著申请表时，编程语言那一栏是怎么填写的。</p>
<p>如果在填写软著申请表时，编程语言没有写前端相关的编程语言，那么就不用包含前端代码。</p>
<p>总之，提交的代码片段的编程语言，一定要和你自己填写申请表时所写的编程语言对应上，不然会出现补正的情况。</p>
<p>希望我的经验能够给你一些参考，软件著作权问题，有问必答。</p>
<h2 id="_2-代码统计神器" tabindex="-1"><a class="header-anchor" href="#_2-代码统计神器" aria-hidden="true">#</a> 2.代码统计神器</h2>
<h4 id="_1-其他软件上面的工具" tabindex="-1"><a class="header-anchor" href="#_1-其他软件上面的工具" aria-hidden="true">#</a> （1）其他软件上面的工具</h4>
<p>mac和ubuntu上面，使用GitStats</p>
<h4 id="_2-windows上面的统计-cloc" tabindex="-1"><a class="header-anchor" href="#_2-windows上面的统计-cloc" aria-hidden="true">#</a> （2）windows上面的统计：cloc</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>---运行cloc

首先执行cd 文件夹路径 配置一下你想要检测的目标路径，再执行cloc .（中间有个空格！）命令，
开始检测

---注意：安装cloc后，执行出现perl无法使用
此时使用注册一个perl下载器，
已经申请过，这里使用如下
powershell -Command "&amp; $([scriptblock]::Create((New-Object Net.WebClient).DownloadString('https://platform.activestate.com/dl/cli/_pdli01/install.ps1'))) -c'state activate --default rongmayisheng/Perl-5.36.0-Windows'"

安装完成后，进入下面
[rongmayisheng/Perl-5.36.0-Windows] E:\code\mycompany\company-web-iot-simulator\src\Perl-5.36.0-Windows>

---对于这个perl工具，安装完成后，再次进入：
state activate --default rongmayisheng/Perl-5.36.0-Windows
即可。但是注意：只能单独从管理员cmd进入，不可以在其他的相互的命令行工具切换进入（原因，可能是全局变量的问题）
就是管理员权限入口的cmd命令行进行安装和命令使用


然后进入自己想要测试的项目中：
[rongmayisheng/Perl-5.36.0-Windows] E:\code\mycompany\company-web-iot-simulator\src>
执行：cloc .  注意这个点前面有空格
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
JavaScript                      36            269             35           6111
TypeScript                      27            309             85           3230
CSS                             20            278             16           1629
JSX                              2             11              5            179
YAML                             1              5              2             42
SVG                              1              0              0              1
-------------------------------------------------------------------------------
SUM:                            87            872            143          11192
-------------------------------------------------------------------------------

已经有了总文件使用11192行

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
