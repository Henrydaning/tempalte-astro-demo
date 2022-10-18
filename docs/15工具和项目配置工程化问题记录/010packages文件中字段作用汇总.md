package.json 是我们前端工程化开发中必须要了解的知识，也是前端工程化深入的必经之路。

[package 官方网站地址](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)

## package中锁定版本
~~~
线上锁定版本，不变版本
npm install --save-exact <package_name>
或者npm install --save <package_name>@1.2.3



~~~
## package.json 中包版本的管理

name 的名称会作为参数传递给 require,因此应该是唯一的，简短的。
name:定义项目的名称
version 是项目的版本号
组件库开发的时候，通过项目名称和版本号来定义包的唯一性。
（注意：如果发版本 npm publish 的时候，name 重名，会发布失败）

## version 的版本的语义化怎么来识别。

version 是项目版本号，符合语义化版本的规则，遵循：大版本.次要版本.小版本。
对于版本号的测试是否符合语义化：通过包 server。
在线快速测试版本号是否正确的地址：
[在线校测包是否符合语义化版本：翻墙使用](https://semver.npmjs.com/)
本地使用：npm i -g semver

```
semver -r ^0.12.0 0.12.0 0.13.0 0.13.1

```

- 查看当前的包的所有版本
  npm view xxx versions
- 查看当前的包的安装版本
  npm view xxx version

- 升级一个包的命令
  pnpm 升级，pnpm update xxx -D
  注意：有时候升级不上去，先移除旧的，然后指定安装。

npm-check 工具升级

```
npm install npm-check -g
npm-check -u
然后选择依赖项目，选择升级的版本，但是这个只能升级到最新，所以指定版本号可以指定升级版本。

```

## description

项目描述信息，字符串，便于快速在 npm 上面搜索项目

## keywords

项目关键字，便于在 npm 上面快速搜索项目

## homepage

项目的主页地址。

## bug

bug 的反馈 url 或是邮箱地址。

```
"bugs":{"url":"https://github.com/owner","email":"daning@163.com"},

如果只有一个属性，可以写成一个字符串
```

## license

```
项目的许可证，知道这个包的使用权限，有些包可以商用，有些包只能自用。
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

```

具体商用的比较，可以查看下图（来自阮一峰网站）
![是否可以商用分析图](/images/free_software_licenses.png)

## author,contributors

作者 author 表示一个 person 对象，person 对象包含：name,url,email.
contributors 表示共享者，会有多个

## files 是下载依赖包所包含的文件。配置了就会增加白名单，将一些包隐藏。

files 是一个数组，描述将软件包作为依赖，需要包含的条目，

```
即npm的白名单，如下图，npm官方解释，也就是说发包后需要包括哪些文件，不配置的话默认发布全部文件。
我们可以配置一下，表示
//不会上传build文件夹和bin.js的文件
`"files": [
    "build",
    "bin.js"
  ]`
```

## main 主页面，也就是项目的入口文件

不配置，默认是项目根目录下面的 index.js
main:"./index.js"

## browser

如果要在客户端使用模块，那么使用 browser 字段代替 main 字段。
具体：

```
我们想要写一个能够跑在浏览器上和node上的包，但是由于二者在执行环境上有微弱的区别，
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
```

官方地址解释：

```
browser是一个字符串，单个环境入口
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
```

### 引申出来一个问题，如何写一个同时支持 Node 和 js 的包。

粗暴的简单方案：将 Node 包用 export default 包裹一层对象。

```
比如浏览器中一个函数：提供base64编码函数
module.exports = function (string) {
  return btoa(string);
};


```
### 一个ES包，如何快速直接浏览器环境
#### 快速将一个包，变成标准化浏览器支持，利用script卡引入
~~~
使用npm install -g browserify


browserify main.js > bundle.js

<script src="bundle.js">

如果使用原来的包ES引入，但是相当于增加了defer延迟加载
<script type="module" src="main.js">

~~~

#### Browserify 和 Webpack 都定义了一个叫 process.browser 的字段

```
Browserify 和 Webpack 都定义了一个叫 process.browser 的字段
if (process.browser) {
  module.exports = function (string) {
    return btoa(string);
  };
} else {
  module.exports = function (string) {
    return Buffer.from(string, 'binary').toString('base64');
  };
}
```

## type 字段作用

只有.mjs 文件扩展名被当作 ES 模块，新的.cjs 文件扩展名将被当作 CommonJS 模块。.cjs 扩展名是当.mjs 和.js 当作 es 模块的时候，保留项目中的 CommonJS 文件用到的。

在你的项目 package.json 中添加'type':'module'字段，Node.js 就会把项目中所有的.js 文件当作 ES 模块

```
你可以把那些文件重命名为.mjs或者把它们放到一个子文件夹然后添加一个package.json包含{ “type”: “commonjs” },这样那些.js文件会被当作CommonJS处理

```

## bin 字段：指定各个内部命令指向的执行文件位置。

可以指定一些内部指令，比如

```
"bin": { "mybuild": "./bin/mybuild.js" }


指定了一个mybuild的内部指令，执行mybuild.js文件。


```

本地安装后，这个命令会自动在包的 node_modules 中建立一个符号链接，也就是 node_modules 汇总快捷方式，生成
node_modules/.bin/mybuild,而 node_modules/.bin/目录会在运行时加入到系统 PATH 变量，因此可以直接调用这种命令。

注意：bin 中引用的文件需要在文件头部加入一行开头编辑这是执行脚本
#!/usr/bin/envnode

根据上面内置完成的命令，在运行时候bin目录会加入PATH,这样我们脚本可以增加这种执行文件，简化命令每次输入
  start: 'node node_modules/.bin/my-app-cli'
---npm run start执行这个文件my-app-cli

## browser，module 和 main 字段使用场景。

由于我们使用的模块规范有 ESM 和 commonJS 两种，为了能在 node 环境下原生执行 ESM 规范的脚本文件，.mjs 文件就应运而生。优先级 mjs > js

package.json 中加载文件优先级，
main : 定义了 npm 包的入口文件，browser 环境和 node 环境均可使用
module : 定义 npm 包的 ESM 规范的入口文件，browser 环境和 node 环境均可使用
browser : 定义 npm 包在 browser 环境下的入口文件。

### 总结一下：

如果 npm 包导出的是 ESM 规范的包，使用 module
如果 npm 包只在 web 端使用，并且严禁在 server 端使用，使用 browser。
如果 npm 包只在 server 端使用，使用 main
如果 npm 包在 web 端和 server 端都允许使用，使用 browser 和 main


## scripts 指定了运行脚本的命令行缩写

比如：vue-cli-serve serve 启动，在 script 脚本中

```
"scripts": { "serve": "vue-cli-service serve", "build": "vue-cli-service build" },

```

## config 添加命令行的环境变量：

## devDependencies 和 dependencies

发布到生产环境的包：dependencies
开发环境需要的包：devDependencies

--save 写入生产环境
--save-dev 写入开发环境。

## peerDependencies：安装当前模块的时候，同时依赖的第三方版本

npm3.0 之后，这个字段需要自己配置

## bundledDependencies：指定发布的时候，哪些模块可以一起打包

```
bundledDependencies是一个数组，指定发布时将定义的模块一起打包

{ "name": "vue-project", "version": "1.0.0", "bundledDependencies": [ "elementui", "echarts" ] }


```

## optionaldependencies：一个包安装失败的时候，不希望影响npm正常运行。
~~~
比如echarts安装失败，不要影响正常项目运行。那么忽略一个npm包
如果出现包找不到或者安装失败时，但又不影响npm继续运行，可将该包放在optionalDependencies对象中。

"optionalDependencies": { "echarts": "^4.9.0" }

表示的是定义的模块如果安装失败，不会在输入npm install时失败

常见的
    "optionalDependencies": {
        "vue-cli-plugin-electron-builder": "~2.1.1"
    },
    这个包是否安装，不影响运行。
    

~~~

## engines：指定包的运行平台
有时候我们开发了一个严格依赖node版本环境的版本包，需要给包增加一个标志：
"engines": {"node" : ">=8.9.0 <12.x", "npm" : "~6.14.12" }


## os:指定包运行操作系统
~~~
一般都可以
"os" : [ "win32", "darwin", "linux" ],



~~~

## priviate指定包是否可以被发布，如果true,npm会拒绝发布
~~~
决定我们的项目是否会发布，如果设置为true,那么npm会拒绝发布

"private": true

~~~


## 如果是一个ts包，那么增加typing字段，指定打包后声明文件
  "typings": "index.d.ts",


## 将一个包ES引入和直接script引入方式区别
script标签上是否加type=module
### 快速将一个包，变成标准化浏览器支持，利用script卡引入
~~~
使用npm install -g browserify


browserify main.js > bundle.js

<script src="bundle.js">

如果使用原来的包ES引入
<script type="module" src="main.js">

~~~