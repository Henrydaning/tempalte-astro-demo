<template><div><p><img src="/images/home.png" alt="成长"></p>
<nav class="table-of-contents"><ul><li><RouterLink to="#_1-比较三种-electron-打包方式的比较">1.比较三种 electron 打包方式的比较</RouterLink></li></ul></nav>
<h2 id="_1-比较三种-electron-打包方式的比较" tabindex="-1"><a class="header-anchor" href="#_1-比较三种-electron-打包方式的比较" aria-hidden="true">#</a> 1.比较三种 electron 打包方式的比较</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>electron功能实现
（1）electron-forge package
只是打包成一个目录到out目录下，注意这种打包一般用于调试，并不是用于分发
（2）
 "@electron-forge/cli": "^6.0.0-beta.65",
"@electron-forge/maker-deb": "^6.0.0-beta.65",
"@electron-forge/maker-rpm": "^6.0.0-beta.65",
"@electron-forge/maker-squirrel": "^6.0.0-beta.65",
"@electron-forge/maker-zip": "^6.0.0-beta.65",
"electron": "^20.0.1",




（3）相关的electron的打包的命令安装
命令结构如下（根据实际情况修改）：
“.”：需要打包的应用目录（即当前目录），
“myClient”：应用名称，
“--win”：打包平台（以Windows为例），
“--out ../myClient”：输出目录，
“--arch=64”：64位，
“--app-version=0.0.1”：应用版本，
“--electron-version=2.0.0”：electron版本


（4）electron-packager及electron-builder，electron-forge三种方式
这里官方强烈推荐使用yarn安装依赖包，但我使用了npm安装的依赖也可以正常打包

注意：
1、打包时要分清devDependencies与dependencies的区别，文章后会讲。
2、package.json 的额外字段 —— productName、author 和 description，
虽然这几个字段并不是打包必备的，


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
