## 001es module中使用__dirname
因为path是Node模块，一些方法无法直接使用。
~~~
在nodejs中使用es module时，__dirname未定义，因为__dirname、__filename只有在commonjs 中才有；

报错： __dirname is not defined in ES module scope

import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
~~~


## 002如何抽离使用项目中的库
### 引用 webpack 的模块联邦架构

#### lib-app
暴露了一些库模块：axios,vue,react，react-dom。提供远程公共库依赖，它是一个纯粹的 remote

#### component-app
暴露了一些公共组件：作为生产者，但同时又消费expose暴露的react模块，

#### main-app
上层 App，依赖 lib-app 和 component-app 应用。


#### lib-app中axios,vue两个库进行模块联邦测试
npm run start先编译出来模块联邦需要的库文件：axios,vue,react等
~~~

npm run  start后生成依赖
[0] + 8 modules
[0] webpack 5.74.0 compiled successfully in 1144 ms


随后启动模块服务：npm run serve
~~~
### component-app中作为生产者和消费者进行模块联邦
~~~
npm run start生成依赖
[0]     remote lib-app/react 6 bytes (remote) 6 bytes (share-init) [built] [code generated]
[0]     remote lib-app/react-dom 6 bytes (remote) 6 bytes (share-init) [built] [code generated]
[0]   container entry 42 bytes [built] [code generated]
[0]   external "lib_app@http://localhost:3000/remoteEntry.js" 42 bytes [built] [code generated]
[0] webpack 5.74.0 compiled successfully in 2256 ms


随后启动模块服务：npm run serve

~~~
[借鉴了很多github项目上的代码](https://github.com/anderlaw/react-webpack-MF.git)
#### 打包成组件库，然后导出成lib库包，再通过资源引用
成本，需要构造一个lib库，见[vitelib开发组件库](./001vitevue3%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E5%BA%93.md)

### webpack模块联邦实现的更好。
我们利用模块联邦，将项目中所有的公共组件设置为一个项目，然后导出expose暴露，再消费者哪里，利用remote引用。
注意配置output的目录代码。
好处：实现了代码的公共代码抽离，相对于资源库来说，修改方便，减少了搭建一个私有组件库的vedecco问题。

实现demo案例：[模块联邦实现和封装](https://gitee.com/nyhxiaoning/webpack-cli-tools-list.git)

![模块联邦同时运行lib公共依赖库，com组件库，主项目](/images/modulesbundle.png)



## 003webpack中使用cdn减少资源下载，加快速度











## 003webpack中开发一个plugin

webpack插件中，两个对象compiler编译对象是webpack启动后，一次性生成webpack环境配置，可以访问整个webpack的运行时期。插件应用时候，会收到整个对象的引用，可以访问webpack的主环境。

另一个compilation对象是webpack的实时生成的编译对象，一个compilation表现了当前的模块资源，编译内容依赖变化。

### 插件的时候原理

webpack打包是一种事件流的机制，它的原理是将各个插件串联起来。那么实现这一切的核心就是在compiler对象中的tapable，将plugin控制在webpack事件流上运行。（基本使用几个tap类中钩子：compile是创建compilation之前，compilation创建完成，emit输出资源到目录前，done编译完成）

注意webpack插件中旧的api:compiler.plugin，新的api是compiler.hooks.emit.tap("WebapckTransformplugins")

插件通过具有apply方法的prototype对象实例化出来。

### 插件的基本内容组成

~~~
从官网得知：编写一个webpack插件需要由以下组成：

1. 一个javascript命名函数。
2. 在插件函数的prototype上定义一个 apply 方法。
3. 指定一个绑定到webpack自身的钩子函数。
4. 处理webpack内部实列的特定数据。
5. 功能完成后调用webpack提供的回调函数。
~~~

### vue.config.js中内容

#### 开发插件的步骤：[项目地址](https://gitee.com/nyhxiaoning/vue3.0-ts-admin.git)



~~~
第一步：创建一个js命令的类，添加apply方法。
第二部：为这个类中增加不同webpack阶段的的狗子函数，处理专门的内容
第三步：callback调用防止卡到构建

注释，这里有一个注释：vue.config.js因为对于webpack进行了抽象，因此使用的插件方法如下
  chainWebpack: config => {
    // config.plugin('codecomment').use(
    //   new FileListPlugin({
    //     outputFile: 'my-assets.md'
    //   })
    // );
    config.plugin('loger').use(
      new LogWebpackPlugin(
        () => {
          debugger;
          console.log('emit已经派发了');
        },
        () => {
          console.log('done事件发生了，成功构建了');
        }
      )
    );
    
项目地址查看：

~~~





## 004开发webpack和vite插件的模板

## 开发插件
上面写了原生开发webpack和vite插件功能的代码和脚手架，有没有模板，真的有。

https://github.com/nyhxiaoning/gogocode.git

### 开发webpack的插件模板

[gogocode](https://github.com/thx/gogocode)/[example](https://github.com/thx/gogocode/tree/main/example)/**demo-with-webpack-plugin**/

### 开发vite的插件模板

[gogocode](https://github.com/thx/gogocode)/[example](https://github.com/thx/gogocode/tree/main/example)/**demo-with-vite-plugin**/





## 005rollup开发一个通用插件

支持cdn引用

支持es6模块

支持commonjs

~~~
rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript";

export default {
  input: "src/index.ts", // 打包入口
  output: {
    // 打包出口
    file: "dist/index.js",
    format: "umd", // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    name: "utilibs", // cdn方式引入时挂载在window上面用的就是这个名字
    sourcemap: true,
  },
  plugins: [
    // 打包插件
    resolve(), // 查找和打包node_modules中的第三方模块
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    typescript(), // 解析TypeScript
    babel({ babelHelpers: "bundled" }), // babel配置,编译es6
  ],
};

~~~

项目详情地址：https://github.com/nyhxiaoning/utilibs-rollup-npm.git



### 简单打包rollup一个文件函数成es,commonjs

~~~
全局安装rollup后
 rollup ./src/input1.js --format es   打包一个es格式的文件
  rollup ./src/input1.js --format cjs  打包一个commonjs格式的文件
  
~~~



## 006.利用tsup快速打包出各种ts的依赖包,类似rollup

Bundle your TypeScript library with no config, powered by [esbuild](https://github.com/evanw/esbuild).

上面是官方的说明。

~~~
tsup src/index.ts --dts --format cjs,esm
指定打包出cjs,esm的模块，同时自动生成一个d.ts的声明文件。

~~~

### （1）第三方vite插件的配置开发和引入

[vite脚手架插件的配置和使用](https://gitee.com/nyhxiaoning/vite-cli-tools-list.git)

第一步：创建一个插件项目：vite-plugin-template

通过上面的tsup导出后，成为一个插件。

然后回到一个项目中使用

第二步：在项目vite-vue3中使用

先用：`pnpm link <dir>`[](https://pnpm.io/zh/cli/link#pnpm-link-dir)

从执行此命令的路径或通过 `<dir>` 指定的文件夹，链接`package`到`node_modules`中。

~~~
pnpm link ./../vite-plugin-template/
将同一文件夹的vite-lugin-template项目链接到vite-vue3项目中

~~~



## 007babel是如何实现引入commonjs转换成es

~~~
es module 在转换时会在 export 上挂载__esModule 属性。
所有在导入时，如果是 es module 直接返回，
如果不是则当 cjs 处理， 把整体模块挂在一个对象的 default 属性上，这样后续的操作就统一了。

~~~



## 008关于rollup和babel处理commonjs模块成es模块的思考。

rollup 直接把 default export 挂到了 module.exports 上。而 babel 还是通过 __esModule 的标识，挂载在 exports.default 上。这个地方需要特别关注， 假如有一个库之前时 使用 babel 处理的， 那 cjs 用户只能以 `require('lib').default` 的形式来使用。 有一天这个库的作者决定使用 rollup, 那么 cjs 的用户想要使用新的库，只能去更改原先的代码。

我们平常的开发中，可能我们已经习惯了 default export, 特别是在vue, react 项目中，我们自然的写下 `export default myComponent`。

如果本身项目都建立在 es module的体系下, default export 绝对是一个 很便利的方式。

但是，如果你同时需要支持 cjs 和 esm,涉及到相互调用的问题， 那就要慎重考虑 `default export`。 



**因为 esm 与 cjs 如何成功相互使用，并不由你决定，而是由帮你打包处理的工具决定。**



[引用地址](https://juejin.cn/post/6844904126195695624)