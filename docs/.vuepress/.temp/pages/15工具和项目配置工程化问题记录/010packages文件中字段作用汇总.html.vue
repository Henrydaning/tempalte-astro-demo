<template><div><p>许多软件包都具有一个或多个要安装到 PATH 中的可执行文件 package.json 是我们前端工程化开发中必须要了解的知识，也是前端工程化深入的必经之路。</p>
<p><a href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json/" target="_blank" rel="noopener noreferrer">package 官方网站地址<ExternalLinkIcon/></a></p>
<h2 id="package-中锁定版本" tabindex="-1"><a class="header-anchor" href="#package-中锁定版本" aria-hidden="true">#</a> package 中锁定版本</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>线上锁定版本，不变版本
npm install --save-exact &lt;package_name>
或者npm install --save &lt;package_name>@1.2.3



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="package-json-中包版本的管理" tabindex="-1"><a class="header-anchor" href="#package-json-中包版本的管理" aria-hidden="true">#</a> package.json 中包版本的管理</h2>
<p>name 的名称会作为参数传递给 require,因此应该是唯一的，简短的。
name:定义项目的名称
version 是项目的版本号
组件库开发的时候，通过项目名称和版本号来定义包的唯一性。
（注意：如果发版本 npm publish 的时候，name 重名，会发布失败）</p>
<h2 id="version-的版本的语义化怎么来识别。" tabindex="-1"><a class="header-anchor" href="#version-的版本的语义化怎么来识别。" aria-hidden="true">#</a> version 的版本的语义化怎么来识别。</h2>
<p>version 是项目版本号，符合语义化版本的规则，遵循：大版本.次要版本.小版本。
对于版本号的测试是否符合语义化：通过包 server。
在线快速测试版本号是否正确的地址：
<a href="https://semver.npmjs.com/" target="_blank" rel="noopener noreferrer">在线校测包是否符合语义化版本：翻墙使用<ExternalLinkIcon/></a>
本地使用：npm i -g semver</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>semver -r ^0.12.0 0.12.0 0.13.0 0.13.1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>查看当前的包的所有版本
npm view xxx versions</p>
</li>
<li>
<p>查看当前的包的安装版本
npm view xxx version</p>
</li>
<li>
<p>升级一个包的命令
pnpm 升级，pnpm update xxx -D
注意：有时候升级不上去，先移除旧的，然后指定安装。</p>
</li>
</ul>
<p>npm-check 工具升级</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install npm-check -g
npm-check -u
然后选择依赖项目，选择升级的版本，但是这个只能升级到最新，所以指定版本号可以指定升级版本。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h2>
<p>项目描述信息，字符串，便于快速在 npm 上面搜索项目</p>
<h2 id="keywords" tabindex="-1"><a class="header-anchor" href="#keywords" aria-hidden="true">#</a> keywords</h2>
<p>项目关键字，便于在 npm 上面快速搜索项目</p>
<h2 id="homepage" tabindex="-1"><a class="header-anchor" href="#homepage" aria-hidden="true">#</a> homepage</h2>
<p>项目的主页地址。</p>
<h2 id="bug" tabindex="-1"><a class="header-anchor" href="#bug" aria-hidden="true">#</a> bug</h2>
<p>bug 的反馈 url 或是邮箱地址。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>"bugs":{"url":"https://github.com/owner","email":"daning@163.com"},

如果只有一个属性，可以写成一个字符串
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> license</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>项目的许可证，知道这个包的使用权限，有些包可以商用，有些包只能自用。
例如
不可以商用的依赖有
	heatmap.js：收费
		https://www.patrick-wied.at/static/heatmapjs/get-heatmap.html
	highcharts.js商业需授权，代码开源。
	highcharts-3d.js不可以商用，

可以商用的依赖
	turf遵从MIT许可，可商用
	echarts.js-可以商用，遵循Apache-2.0，修改源代码后，需要增加说明
	mapv.js-BSD可以商用，也可以修改使用BSD协议的代码。
	echarts-liquidfill.js-MIT，可商用

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体商用的比较，可以查看下图（来自阮一峰网站）
<img src="/images/free_software_licenses.png" alt="是否可以商用分析图"></p>
<h2 id="author-contributors" tabindex="-1"><a class="header-anchor" href="#author-contributors" aria-hidden="true">#</a> author,contributors</h2>
<p>作者 author 表示一个 person 对象，person 对象包含：name,url,email.
contributors 表示共享者，会有多个</p>
<h2 id="files-是下载依赖包所包含的文件。配置了就会增加白名单-将一些包隐藏。" tabindex="-1"><a class="header-anchor" href="#files-是下载依赖包所包含的文件。配置了就会增加白名单-将一些包隐藏。" aria-hidden="true">#</a> files 是下载依赖包所包含的文件。配置了就会增加白名单，将一些包隐藏。</h2>
<p>files 是一个数组，描述将软件包作为依赖，需要包含的条目，</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>即npm的白名单，如下图，npm官方解释，也就是说发包后需要包括哪些文件，不配置的话默认发布全部文件。
我们可以配置一下，表示
//不会上传build文件夹和bin.js的文件
`"files": [
    "build",
    "bin.js"
  ]`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="main-主页面-也就是项目的入口文件" tabindex="-1"><a class="header-anchor" href="#main-主页面-也就是项目的入口文件" aria-hidden="true">#</a> main 主页面，也就是项目的入口文件</h2>
<p>不配置，默认是项目根目录下面的 index.js
main:&quot;./index.js&quot;</p>
<h2 id="browser" tabindex="-1"><a class="header-anchor" href="#browser" aria-hidden="true">#</a> browser</h2>
<p>如果要在客户端使用模块，那么使用 browser 字段代替 main 字段。
具体：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>我们想要写一个能够跑在浏览器上和node上的包，但是由于二者在执行环境上有微弱的区别，
比如浏览器上请求数据是用XMLHttpRequest对象，但是node上用的是http或者https

如何区分浏览器环境和Node环境呢？
browser字段存在是浏览器环境，否则是Node环境执行二进制流。
if (process.browser) {
    module.exports = function (string) {
    return btoa(string)
  }
} else {
    module.exports = function (string) {
    return Buffer.from(string, 'binary').toString('base64')
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>官方地址解释：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>browser是一个字符串，单个环境入口
"browser": "./lib/browser/main.js"

browser是一个对象，声明要替换或是忽略的文件。（为了兼容不同环境打包）
这种形式比较适合替换部分文件，不需要创建新的入口。key是要替换的module或者文件名，右侧是替换的
打包浏览器环境的时候，key会被后面的value替换。
"browser": {"module-a": "./browser/module-a.js","./server/module-b.js": "./browser/module-b.js"}
打包到浏览器环境时，会将来自module-a的替换为./browser/module-a.js

还可以使用布尔值，不打包默写文件，
"browser": {"module-a":false,"./server/only.js":"./shims/server-only.js"}
表示模块module-a不会再浏览器缓解国内下打包

注意：如果你的包能在浏览器和node上无差异化地实现，就不需要browser字段了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引申出来一个问题-如何写一个同时支持-node-和-js-的包。" tabindex="-1"><a class="header-anchor" href="#引申出来一个问题-如何写一个同时支持-node-和-js-的包。" aria-hidden="true">#</a> 引申出来一个问题，如何写一个同时支持 Node 和 js 的包。</h3>
<p>粗暴的简单方案：将 Node 包用 export default 包裹一层对象。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>比如浏览器中一个函数：提供base64编码函数
module.exports = function (string) {
  return btoa(string);
};


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一个-es-包-如何快速直接浏览器环境" tabindex="-1"><a class="header-anchor" href="#一个-es-包-如何快速直接浏览器环境" aria-hidden="true">#</a> 一个 ES 包，如何快速直接浏览器环境</h3>
<h4 id="快速将一个包-变成标准化浏览器支持-利用-script-卡引入" tabindex="-1"><a class="header-anchor" href="#快速将一个包-变成标准化浏览器支持-利用-script-卡引入" aria-hidden="true">#</a> 快速将一个包，变成标准化浏览器支持，利用 script 卡引入</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>使用npm install -g browserify


browserify main.js > bundle.js

&lt;script src="bundle.js">

如果使用原来的包ES引入，但是相当于增加了defer延迟加载
&lt;script type="module" src="main.js">

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="browserify-和-webpack-都定义了一个叫-process-browser-的字段" tabindex="-1"><a class="header-anchor" href="#browserify-和-webpack-都定义了一个叫-process-browser-的字段" aria-hidden="true">#</a> Browserify 和 Webpack 都定义了一个叫 process.browser 的字段</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Browserify 和 Webpack 都定义了一个叫 process.browser 的字段
if (process.browser) {
  module.exports = function (string) {
    return btoa(string);
  };
} else {
  module.exports = function (string) {
    return Buffer.from(string, 'binary').toString('base64');
  };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="type-字段作用" tabindex="-1"><a class="header-anchor" href="#type-字段作用" aria-hidden="true">#</a> type 字段作用</h2>
<p>只有.mjs 文件扩展名被当作 ES 模块，新的.cjs 文件扩展名将被当作 CommonJS 模块。.cjs 扩展名是当.mjs 和.js 当作 es 模块的时候，保留项目中的 CommonJS 文件用到的。</p>
<p>在你的项目 package.json 中添加'type':'module'字段，Node.js 就会把项目中所有的.js 文件当作 ES 模块</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>你可以把那些文件重命名为.mjs或者把它们放到一个子文件夹然后添加一个package.json包含{ “type”: “commonjs” },这样那些.js文件会被当作CommonJS处理

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bin-字段-指定各个内部命令指向的执行文件位置。" tabindex="-1"><a class="header-anchor" href="#bin-字段-指定各个内部命令指向的执行文件位置。" aria-hidden="true">#</a> bin 字段：指定各个内部命令指向的执行文件位置。</h2>
<h3 id="注意-并不是配置了-bin-字段-就可以执行执行一些内容代码。" tabindex="-1"><a class="header-anchor" href="#注意-并不是配置了-bin-字段-就可以执行执行一些内容代码。" aria-hidden="true">#</a> 注意：并不是配置了 bin 字段，就可以执行执行一些内容代码。</h3>
<h3 id="弄清楚-bin-和可执行文件路径关系" tabindex="-1"><a class="header-anchor" href="#弄清楚-bin-和可执行文件路径关系" aria-hidden="true">#</a> 弄清楚 bin 和可执行文件路径关系</h3>
<p>许多软件包都具有一个或多个要安装到 PATH 中的可执行文件。</p>
<p>（1）bin 字段是命令到本地文件名的映射。
（2）在安装时，npm 会将文件符号链接到 bin 文件夹 以进行全局安装或./node_modules/.bin/本地安装。（bin 里面就是一些可执行文件）
（3）当我们使用 npm 或者 yarn 命令安装包时，如果该包的 package.json 文件有 bin 字段，就会在 node_modules 文件夹下面的 .bin 目录中复制了 bin 字段链接的执行文件。我们在调用执行文件时，可以不带路径，直接使用命令名来执行相对应的执行文件。</p>
<p>可以指定一些内部指令，比如</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>"bin": { "mybuild": "./bin/mybuild.js" }


指定了一个mybuild的内部指令，执行mybuild.js文件。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本地安装后，这个命令会自动在包的 node_modules 中建立一个符号链接，也就是 node_modules 汇总快捷方式，生成
node_modules/.bin/mybuild,而 node_modules/.bin/目录会在运行时加入到系统 PATH 变量，因此可以直接调用这种命令。</p>
<p>注意：bin 中引用的文件需要在文件头部加入一行开头编辑这是执行脚本
#!/usr/bin/envnode</p>
<p>根据上面内置完成的命令，在运行时候 bin 目录会加入 PATH,这样我们脚本可以增加这种执行文件，简化命令每次输入
start: 'node node_modules/.bin/my-app-cli'
---npm run start 执行这个文件 my-app-cli</p>
<h2 id="browser-module-和-main-字段使用场景。" tabindex="-1"><a class="header-anchor" href="#browser-module-和-main-字段使用场景。" aria-hidden="true">#</a> browser，module 和 main 字段使用场景。</h2>
<p>由于我们使用的模块规范有 ESM 和 commonJS 两种，为了能在 node 环境下原生执行 ESM 规范的脚本文件，.mjs 文件就应运而生。优先级 mjs &gt; js</p>
<p>package.json 中加载文件优先级，
main : 定义了 npm 包的入口文件，browser 环境和 node 环境均可使用
module : 定义 npm 包的 ESM 规范的入口文件，browser 环境和 node 环境均可使用
browser : 定义 npm 包在 browser 环境下的入口文件。</p>
<h3 id="总结一下" tabindex="-1"><a class="header-anchor" href="#总结一下" aria-hidden="true">#</a> 总结一下：</h3>
<p>如果 npm 包导出的是 ESM 规范的包，使用 module
如果 npm 包只在 web 端使用，并且严禁在 server 端使用，使用 browser。
如果 npm 包只在 server 端使用，使用 main
如果 npm 包在 web 端和 server 端都允许使用，使用 browser 和 main</p>
<h2 id="scripts-指定了运行脚本的命令行缩写" tabindex="-1"><a class="header-anchor" href="#scripts-指定了运行脚本的命令行缩写" aria-hidden="true">#</a> scripts 指定了运行脚本的命令行缩写</h2>
<p>比如：vue-cli-serve serve 启动，在 script 脚本中</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>"scripts": { "serve": "vue-cli-service serve", "build": "vue-cli-service build" },

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="config-添加命令行的环境变量" tabindex="-1"><a class="header-anchor" href="#config-添加命令行的环境变量" aria-hidden="true">#</a> config 添加命令行的环境变量：</h2>
<h2 id="devdependencies-和-dependencies" tabindex="-1"><a class="header-anchor" href="#devdependencies-和-dependencies" aria-hidden="true">#</a> devDependencies 和 dependencies</h2>
<p>发布到生产环境的包：dependencies
开发环境需要的包：devDependencies</p>
<p>--save 写入生产环境
--save-dev 写入开发环境。</p>
<h2 id="peerdependencies-安装当前模块的时候-同时依赖的第三方版本" tabindex="-1"><a class="header-anchor" href="#peerdependencies-安装当前模块的时候-同时依赖的第三方版本" aria-hidden="true">#</a> peerDependencies：安装当前模块的时候，同时依赖的第三方版本</h2>
<p>npm3.0 之后，这个字段需要自己配置</p>
<h2 id="bundleddependencies-指定发布的时候-哪些模块可以一起打包" tabindex="-1"><a class="header-anchor" href="#bundleddependencies-指定发布的时候-哪些模块可以一起打包" aria-hidden="true">#</a> bundledDependencies：指定发布的时候，哪些模块可以一起打包</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bundledDependencies是一个数组，指定发布时将定义的模块一起打包

{ "name": "vue-project", "version": "1.0.0", "bundledDependencies": [ "elementui", "echarts" ] }


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optionaldependencies-一个包安装失败的时候-不希望影响-npm-正常运行。" tabindex="-1"><a class="header-anchor" href="#optionaldependencies-一个包安装失败的时候-不希望影响-npm-正常运行。" aria-hidden="true">#</a> optionaldependencies：一个包安装失败的时候，不希望影响 npm 正常运行。</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>比如echarts安装失败，不要影响正常项目运行。那么忽略一个npm包
如果出现包找不到或者安装失败时，但又不影响npm继续运行，可将该包放在optionalDependencies对象中。

"optionalDependencies": { "echarts": "^4.9.0" }

表示的是定义的模块如果安装失败，不会在输入npm install时失败

常见的
    "optionalDependencies": {
        "vue-cli-plugin-electron-builder": "~2.1.1"
    },
    这个包是否安装，不影响运行。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optionaldependencies-配置解决一个-peer-以来经典问题" tabindex="-1"><a class="header-anchor" href="#optionaldependencies-配置解决一个-peer-以来经典问题" aria-hidden="true">#</a> &quot;optionalDependencies&quot;: 配置解决一个 peer 以来经典问题</h2>
<h3 id="比如我使用-react-new-rewired-后-安装" tabindex="-1"><a class="header-anchor" href="#比如我使用-react-new-rewired-后-安装" aria-hidden="true">#</a> 比如我使用 react-new-rewired 后，安装</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
npm i customize-cra -D
总是出现 electron 依赖报错，我可以将这个依赖配置一下，将 package.json 配置添加一下，然后增加配置即可。

"optionalDependencies": {
"electron": "^20.0.1"
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="engines-指定包的运行平台" tabindex="-1"><a class="header-anchor" href="#engines-指定包的运行平台" aria-hidden="true">#</a> engines：指定包的运行平台</h2>
<p>有时候我们开发了一个严格依赖 node 版本环境的版本包，需要给包增加一个标志：
&quot;engines&quot;: {&quot;node&quot; : &quot;&gt;=8.9.0 &lt;12.x&quot;, &quot;npm&quot; : &quot;~6.14.12&quot; }</p>
<h2 id="os-指定包运行操作系统" tabindex="-1"><a class="header-anchor" href="#os-指定包运行操作系统" aria-hidden="true">#</a> os:指定包运行操作系统</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>一般都可以
"os" : [ "win32", "darwin", "linux" ],



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="priviate-指定包是否可以被发布-如果-true-npm-会拒绝发布" tabindex="-1"><a class="header-anchor" href="#priviate-指定包是否可以被发布-如果-true-npm-会拒绝发布" aria-hidden="true">#</a> priviate 指定包是否可以被发布，如果 true,npm 会拒绝发布</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>决定我们的项目是否会发布，如果设置为true,那么npm会拒绝发布

"private": true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如果是一个-ts-包-那么增加-typing-字段-指定打包后声明文件" tabindex="-1"><a class="header-anchor" href="#如果是一个-ts-包-那么增加-typing-字段-指定打包后声明文件" aria-hidden="true">#</a> 如果是一个 ts 包，那么增加 typing 字段，指定打包后声明文件</h2>
<p>&quot;typings&quot;: &quot;index.d.ts&quot;,</p>
<h2 id="将一个包-es-引入和直接-script-引入方式区别" tabindex="-1"><a class="header-anchor" href="#将一个包-es-引入和直接-script-引入方式区别" aria-hidden="true">#</a> 将一个包 ES 引入和直接 script 引入方式区别</h2>
<p>script 标签上是否加 type=module</p>
<h3 id="快速将一个包-变成标准化浏览器支持-利用-script-卡引入-1" tabindex="-1"><a class="header-anchor" href="#快速将一个包-变成标准化浏览器支持-利用-script-卡引入-1" aria-hidden="true">#</a> 快速将一个包，变成标准化浏览器支持，利用 script 卡引入</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>使用npm install -g browserify


browserify main.js > bundle.js

&lt;script src="bundle.js">

如果使用原来的包ES引入
&lt;script type="module" src="main.js">

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
