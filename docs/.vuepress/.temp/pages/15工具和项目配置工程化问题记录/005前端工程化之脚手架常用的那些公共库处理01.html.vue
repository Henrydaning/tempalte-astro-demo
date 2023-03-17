<template><div><p><img src="/images/home.png" alt="成长"></p>
<nav class="table-of-contents"><ul><li><RouterLink to="#回到博客主页">回到博客主页</RouterLink><ul><li><RouterLink to="#说明">说明</RouterLink></li><li><RouterLink to="#vue-request和axios区别">vue-request和axios区别</RouterLink></li></ul></li><li><RouterLink to="#_1-统一处理当前的http和报错信息的封装模块">1.统一处理当前的http和报错信息的封装模块</RouterLink></li><li><RouterLink to="#_2-前端对于数字的处理库">2.前端对于数字的处理库</RouterLink><ul><li><RouterLink to="#处理数字的工具库-注意-但是不解决精度问题">处理数字的工具库（注意：但是不解决精度问题）</RouterLink></li><li><RouterLink to="#处理前端的大数字的精度丢失">处理前端的大数字的精度丢失</RouterLink></li><li><RouterLink to="#_002第三方的请求库处理数字">002第三方的请求库处理数字</RouterLink></li><li><RouterLink to="#解决精度的计算保留小数的土办法-变成整数">解决精度的计算保留小数的土办法:变成整数</RouterLink></li></ul></li><li><RouterLink to="#_003解决框架中报错的问题">003解决框架中报错的问题</RouterLink><ul><li><RouterLink to="#_004处理consoleimporter快速安装console控制台的npm包">004处理consoleImporter快速安装console控制台的npm包</RouterLink></li><li><RouterLink to="#_005vscode自更新绝对路径">005vscode自更新绝对路径</RouterLink></li></ul></li><li><RouterLink to="#_006强行引入lib库的源码方法">006强行引入lib库的源码方法</RouterLink><ul><li><RouterLink to="#es6和cjs模块切换">es6和cjs模块切换</RouterLink></li></ul></li><li><RouterLink to="#vite2版本中支持require引入库文件的方法">vite2版本中支持require引入库文件的方法</RouterLink></li></ul></nav>
<h2 id="回到博客主页" tabindex="-1"><a class="header-anchor" href="#回到博客主页" aria-hidden="true">#</a> 回到博客主页</h2>
<p><RouterLink to="/">博客首页</RouterLink></p>
<h3 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h3>
<p>这里是对于<a href="https://www.processon.com/mindmap/6214476d079129079ad749e1" target="_blank" rel="noopener noreferrer">前端各种框架库的解决方案的补充<ExternalLinkIcon/></a>
比如vue-request就不出现在下面</p>
<h3 id="vue-request和axios区别" tabindex="-1"><a class="header-anchor" href="#vue-request和axios区别" aria-hidden="true">#</a> vue-request和axios区别</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>🌈  兼容 Vue 2 &amp; 3
🚀  所有数据都具有响应式
🔄  轮询请求：pollingInterval: 1000, // 请求间隔时间
🤖  自动处理错误重试
🗄  内置请求缓存
💧  节流请求与防抖请求
🎯  聚焦页面时自动重新请求：当电脑在休眠状态重新激活后，页面的数据需要同步到最新状态时。（  refreshOnWindowFocus: true,refocusTimespan: 1000, // 请求间隔时间）
⚙️  强大的分页扩展以及加载更多扩展
📠  完全使用 Typescript 编写，具有强大的类型提示
⚡️  兼容 Vite
🍃  轻量化
📦  开箱即用
## 注意使用v2.x版本支持vue2,3,如果是v1.x版本，支持vue3

vuerequest目的
在以往的业务项目中，常常被 loading 状态的管理、请求的节流防抖、接口数据的缓存、分页等这些重复的实现所困惑。每当开启一个新项目时，我们都得手动去处理以上这些问题，这将是一个重复性的工作，而且还得确保团队的一致。
VueRequest 旨在为开发者提供便捷、快速的方式来管理接口的状态。在业务开发中省去上述的那些“脏活累活”，只需要简单的配置即可使用，专注于业务核心的开发。

那和axios如何一起使用。
换句话说，你可以使用 第三方的请求库（如 axios ） 来获取数据，然后将该请求传给 VueRequest 来进行管理。
import { useRequest } from 'vue-request';
import axios from 'axios';

const getUser = userName => {
  return axios.get('api/user', {
    params: {
      name: userName,
    },
  });
};

const { data, run } = useRequest(getUser, {
  defaultParams: ['马冬梅'],
});

// ...
run('张三');

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-统一处理当前的http和报错信息的封装模块" tabindex="-1"><a class="header-anchor" href="#_1-统一处理当前的http和报错信息的封装模块" aria-hidden="true">#</a> 1.统一处理当前的http和报错信息的封装模块</h2>
<p>vue2版本
vue3版本
最新vue3-ts版本
https://gitee.com/nyhxiaoning/tov-template.git</p>
<p>利用vue-request和axios封装https请求和报错处理。</p>
<h2 id="_2-前端对于数字的处理库" tabindex="-1"><a class="header-anchor" href="#_2-前端对于数字的处理库" aria-hidden="true">#</a> 2.前端对于数字的处理库</h2>
<h3 id="处理数字的工具库-注意-但是不解决精度问题" tabindex="-1"><a class="header-anchor" href="#处理数字的工具库-注意-但是不解决精度问题" aria-hidden="true">#</a> 处理数字的工具库（注意：但是不解决精度问题）</h3>
<p>math.js</p>
<h3 id="处理前端的大数字的精度丢失" tabindex="-1"><a class="header-anchor" href="#处理前端的大数字的精度丢失" aria-hidden="true">#</a> 处理前端的大数字的精度丢失</h3>
<p>json-bigint解决js的大整数的坑的精度丢失</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
ES6 引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。
超出 2 的 53 次方之后，一个数就不精确了。
import jsonBig from 'json-bigint'

var json = '{ "value" : 9223372036854775807, "v2": 123 }'

还可以在封装的axios中处理内容：Axios 提供自定义处理原始后端返回数据的 API：transformResponse 。
import axios from 'axios'

import jsonBig from 'json-bigint'

var json = '{ "value" : 9223372036854775807, "v2": 123 }'

console.log(jsonBig.parse(json))

const request = axios.create({
  baseURL: '你接口的基础路径', // 接口基础路径

  // transformResponse 允许自定义原始的响应数据（字符串）
  transformResponse: [function (data) {
    try {
      // 如果转换成功则返回转换的数据结果
      return jsonBig.parse(data)
    } catch (err) {
      // 如果转换失败，则包装为统一数据格式并返回
      return {
        data
      }
    }
  }]
})

export default request

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_002第三方的请求库处理数字" tabindex="-1"><a class="header-anchor" href="#_002第三方的请求库处理数字" aria-hidden="true">#</a> 002第三方的请求库处理数字</h3>
<h4 id="处理bignumber-js" tabindex="-1"><a class="header-anchor" href="#处理bignumber-js" aria-hidden="true">#</a> 处理bignumber.js</h4>
<p>用于任意精度算术的 JavaScript 库。
BigNumber.js 的toFixed 来解决浮点数运算导致的各种各样的问题。</p>
<h4 id="decimal-js" tabindex="-1"><a class="header-anchor" href="#decimal-js" aria-hidden="true">#</a> decimal.js</h4>
<p>用于 JavaScript 的任意精度十进制类型。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>new Decimal('0.046875000000')            // '0.046875'

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决精度的计算保留小数的土办法-变成整数" tabindex="-1"><a class="header-anchor" href="#解决精度的计算保留小数的土办法-变成整数" aria-hidden="true">#</a> 解决精度的计算保留小数的土办法:变成整数</h3>
<p>JS浮点数做乘法运算导致精度丢失的问题.
原因其实就是js number类型运算都需要先将十进制转二进制</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>JS 数字类型只有number类型，number类型相当于其他强类型语言中的double类型(双精度浮点型)，不区分浮点型和整数型.
由于Js的所有数字类型都是双精度浮点型(64位)采用 IEEE754 标准

64位二进制数表示一个number数字

其中 64位 = 1位符号位 + 11位指数位 + 52位小数位
符号位：用来表示数字的正负，-1^符号位数值，0为正数，1为负数

指数位：一般都用科学计数法表示数值大小，但是这里一般都是2进制的科学计数法，表示2的多少次方

小数位：科学计数法前面的数值，IEEE745标准，默认所有的该数值都转为1.xxxxx这种格式，优点是可以省略一位小数位，可以存储更多的数字内容，缺点是丢失精度.

如果是整数转换：整数转二进制，除2取余，那么7表示为 111 = 1x2^3 + 1x2^2 + 1x2^1
如果是小数转换：小数的转化二进制过程是通过判断小数是不是满 1/2，1/4，8/1以此类推，换成数学公式就是 乘二取整法。
那么： 0.1 => 0.0001 1001 1001 1001…（无限循环）存储起来。



console.log(2.567*100);//结果是浮点数，那么精度丢失，256.70000000000005 
console.log(2.56-3);//浮点数减法，精度丢失,-0.43999999999999995
console.log(2.33*100);//结果是整数，精度没有丢233,一般保险起见，多乘10，后除以10
console.log(0.34*1000/10)

有个坑，不要再控制台做测试，控制台进行了优化处理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_003解决框架中报错的问题" tabindex="-1"><a class="header-anchor" href="#_003解决框架中报错的问题" aria-hidden="true">#</a> 003解决框架中报错的问题</h2>
<p><a href="https://app.yinxiang.com/shard/s37/nl/24388549/5bb546b1-1047-4c54-afc2-3f70d7ab42fe" target="_blank" rel="noopener noreferrer">处理await的报错误问题<ExternalLinkIcon/></a></p>
<p><a href="https://app.yinxiang.com/shard/s37/nl/24388549/30c25a2d-fcb5-47ac-b1e2-38e6cfc76319" target="_blank" rel="noopener noreferrer">js中异步实现方案<ExternalLinkIcon/></a></p>
<p><a href="https://juejin.cn/post/6979564690787532814" target="_blank" rel="noopener noreferrer">前端错误处理汇总篇<ExternalLinkIcon/></a></p>
<p><a href="https://app.yinxiang.com/shard/s37/nl/24388549/bc25dd43-2ddb-472f-ac5c-05330f540e80" target="_blank" rel="noopener noreferrer">前端错误处理汇总01<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>错误类型的总结
同步错误 => 可以被1.try...catch 2.window.onerror 3.process.on('uncaughtException')捕获。

异步错误 => 例如setInterval、没有被await的异步函数等，是不会被try...catch捕获的，但是会被window.onerror和process.on('uncaughtException')捕获。

Promise错误 => Promise.reject(new Error('some wrong'));像是这样的promise错误，是不会被window.onerror和process.on('uncaughtException')捕获的，更不会被try...catch捕获，想要捕获它们只能，process.on('unhandledRejection')以及window.addEventListener('unhandledrejection')

补充错误图片和音频资源加载静态资源css,js加载错误
unhandledRejection的兼容性很差，还有客户端onerror事件是不能捕获到图片音视频加载出错及其他静态资源（如js,css等404）的错误的，可以使用addEventListener在捕获阶段捕获。
&lt;script src="https://cdn.xxx.com/js/test.js"  onerror="errorHandler(this)">&lt;/script>

&lt;link rel="stylesheet" href="https://cdn.xxx.com/styles/test.css" onerror="errorHandler(this)">

window.addEventListener('error', (errorEvent) => {
    console.log(errorEvent)
    cosnole.log(errorEvent.message)
}, true)
需要注意的是这里拿到的是一个event事件，和前面不一样，拿到的并不是一个error对象。

----------------------
注意：在局部被try...catch了的错误是不会继续往上层抛出了的，所以全局处理的捕获是肯定捕获不到的，除非在catch到以后处理完成，将错误继续向上层throw。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_004处理consoleimporter快速安装console控制台的npm包" tabindex="-1"><a class="header-anchor" href="#_004处理consoleimporter快速安装console控制台的npm包" aria-hidden="true">#</a> 004处理consoleImporter快速安装console控制台的npm包</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Console importer
注意：chrome浏览器可以，关闭安全的限制：--disable-web-security --user-data-dir=C:\MyChromeDevUserData
但是edge同样配置，然后选择csdn或是其他的一些个人当前所在网站，注意选择素有站点可用。
1. 安装Console Importer插件
2. $i('name')安装npm包

具体安装包链接
https://app.yinxiang.com/shard/s37/nl/24388549/17eae8d6-ba10-44bf-ace2-f2aedf12eb86


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_005vscode自更新绝对路径" tabindex="-1"><a class="header-anchor" href="#_005vscode自更新绝对路径" aria-hidden="true">#</a> 005vscode自更新绝对路径</h3>
<p>ts框架中，一些包地址可以快速直达，如果设置了alias，发现无法直达，可以tsconfig配置一下。
如果非ts框架，可以配置jsconfig.js</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>webpack项目中，和webpack项目中配置过的别名做一个一一对应
---------jsconfig.json-------------
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "@i/*": ["src/api/*"],
      "@c/*": ["src/components/*"],
      "@a/*": ["src/assets/*"],
      "@s/*": ["src/styles/*"],
      "@u/*": ["src/utils/*"],
      "@v/*": ["src/views/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}

--------webpack的配置文件别名--------
configureWebpack: {
    resolve: {
    alias: {
        "@": resolve("src"),
        "@i": resolve("src/api"),
        "@c": resolve("src/components"),
        "@a": resolve("src/assets"),
        "@s": resolve("src/styles"),
        "@u": resolve("src/utils"),
        "@v": resolve("src/views")
        }
    }
}

这样文件就可以直接import智能提示和跳转了
注意：配置完成之后重启VSCode

示例：在使用组件 HelloWorld.vue 的时候智能提示可以使用。




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>VS Code 的最佳功能之一是它的文件导入很友善，使用绝对路径，例如：@/components/Button 比 ../../Button 更让人舒适；
当移动文件重新组织目录时，希望 VS Code 能自动更新文件的路径？你可以配置它们：
请注意，您需要在 .tsconfig/.jsconfig 文件中配置路径才能使用绝对路径导入。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_006强行引入lib库的源码方法" tabindex="-1"><a class="header-anchor" href="#_006强行引入lib库的源码方法" aria-hidden="true">#</a> 006强行引入lib库的源码方法</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>第一种方式esm的es6模块化

import PlainDraggable from '@/lib/js/plain-draggable.esm.js';
第二种方式强行将当前的模块引入，
import PlainDraggable from '@/lib/js/plain-draggable.min.js';
但是如果这样引入项目中，可能出现缺失一些苦，需要单独引入
pnpm i pointer-event cssprefix anim-event m-class-list -D


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es6和cjs模块切换" tabindex="-1"><a class="header-anchor" href="#es6和cjs模块切换" aria-hidden="true">#</a> es6和cjs模块切换</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
CommonJS 模块导出的其实是一个对象，相当于一开始module.exports = {} 是一个空对象，然后在这个空对象里面事项了属性和方法，并将整个对象导出。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vite2版本中支持require引入库文件的方法" tabindex="-1"><a class="header-anchor" href="#vite2版本中支持require引入库文件的方法" aria-hidden="true">#</a> vite2版本中支持require引入库文件的方法</h2>
<p>vite支持require+注意支持vite2版本，vite3不支持！！！
yarn add -D vite-plugin-require-transform
注意具体项目： https://gitee.com/nyhxiaoning/my-vue-vite-app.git
推广到很多vite2项目中，测试vite1项目如果可以，也推广，很多好用的react和vue包，用起来。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>（1）使用注意：不能直接用模板字符串，
可以直接在html模板上require引入，
（2）变量使用方式：可以在代码中，使用

const img1 = require('@/assets/' + a +'/login-bg.jpg')
let img2 = img1
这样吧img2放入模板HTMl中，但是如果直接使用img1报错。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
