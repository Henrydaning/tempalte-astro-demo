<template><div><h2 id="_001es-module-中使用-dirname" tabindex="-1"><a class="header-anchor" href="#_001es-module-中使用-dirname" aria-hidden="true">#</a> 001es module 中使用__dirname</h2>
<p>因为 path 是 Node 模块，一些方法无法直接使用。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>在nodejs中使用es module时，__dirname未定义，因为__dirname、__filename只有在commonjs 中才有；

报错： __dirname is not defined in ES module scope

import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_002-如何抽离使用项目中的库" tabindex="-1"><a class="header-anchor" href="#_002-如何抽离使用项目中的库" aria-hidden="true">#</a> 002 如何抽离使用项目中的库</h2>
<h3 id="引用-webpack-的模块联邦架构" tabindex="-1"><a class="header-anchor" href="#引用-webpack-的模块联邦架构" aria-hidden="true">#</a> 引用 webpack 的模块联邦架构</h3>
<h4 id="lib-app" tabindex="-1"><a class="header-anchor" href="#lib-app" aria-hidden="true">#</a> lib-app</h4>
<p>暴露了一些库模块：axios,vue,react，react-dom。提供远程公共库依赖，它是一个纯粹的 remote</p>
<h4 id="component-app" tabindex="-1"><a class="header-anchor" href="#component-app" aria-hidden="true">#</a> component-app</h4>
<p>暴露了一些公共组件：作为生产者，但同时又消费 expose 暴露的 react 模块，</p>
<h4 id="main-app" tabindex="-1"><a class="header-anchor" href="#main-app" aria-hidden="true">#</a> main-app</h4>
<p>上层 App，依赖 lib-app 和 component-app 应用。</p>
<h4 id="lib-app-中-axios-vue-两个库进行模块联邦测试" tabindex="-1"><a class="header-anchor" href="#lib-app-中-axios-vue-两个库进行模块联邦测试" aria-hidden="true">#</a> lib-app 中 axios,vue 两个库进行模块联邦测试</h4>
<p>npm run start 先编译出来模块联邦需要的库文件：axios,vue,react 等</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
npm run  start后生成依赖
[0] + 8 modules
[0] webpack 5.74.0 compiled successfully in 1144 ms


随后启动模块服务：npm run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="component-app-中作为生产者和消费者进行模块联邦" tabindex="-1"><a class="header-anchor" href="#component-app-中作为生产者和消费者进行模块联邦" aria-hidden="true">#</a> component-app 中作为生产者和消费者进行模块联邦</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm run start生成依赖
[0]     remote lib-app/react 6 bytes (remote) 6 bytes (share-init) [built] [code generated]
[0]     remote lib-app/react-dom 6 bytes (remote) 6 bytes (share-init) [built] [code generated]
[0]   container entry 42 bytes [built] [code generated]
[0]   external "lib_app@http://localhost:3000/remoteEntry.js" 42 bytes [built] [code generated]
[0] webpack 5.74.0 compiled successfully in 2256 ms


随后启动模块服务：npm run serve

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://github.com/anderlaw/react-webpack-MF.git" target="_blank" rel="noopener noreferrer">借鉴了很多 github 项目上的代码<ExternalLinkIcon/></a></p>
<h4 id="打包成组件库-然后导出成-lib-库包-再通过资源引用" tabindex="-1"><a class="header-anchor" href="#打包成组件库-然后导出成-lib-库包-再通过资源引用" aria-hidden="true">#</a> 打包成组件库，然后导出成 lib 库包，再通过资源引用</h4>
<p>成本，需要构造一个 lib 库，见<RouterLink to="/15%E5%B7%A5%E5%85%B7%E5%92%8C%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE%E5%B7%A5%E7%A8%8B%E5%8C%96%E9%97%AE%E9%A2%98%E8%AE%B0%E5%BD%95/001vitevue3%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E5%BA%93.html">vitelib 开发组件库</RouterLink></p>
<h3 id="webpack-模块联邦实现的更好。" tabindex="-1"><a class="header-anchor" href="#webpack-模块联邦实现的更好。" aria-hidden="true">#</a> webpack 模块联邦实现的更好。</h3>
<p>我们利用模块联邦，将项目中所有的公共组件设置为一个项目，然后导出 expose 暴露，再消费者哪里，利用 remote 引用。
注意配置 output 的目录代码。
好处：实现了代码的公共代码抽离，相对于资源库来说，修改方便，减少了搭建一个私有组件库的 vedecco 问题。</p>
<p>实现 demo 案例：<a href="https://gitee.com/nyhxiaoning/webpack-cli-tools-list.git" target="_blank" rel="noopener noreferrer">模块联邦实现和封装<ExternalLinkIcon/></a></p>
<p><img src="/images/modulesbundle.png" alt="模块联邦同时运行lib公共依赖库，com组件库，主项目"></p>
<h2 id="_003webpack-中使用-cdn-减少资源下载-加快速度" tabindex="-1"><a class="header-anchor" href="#_003webpack-中使用-cdn-减少资源下载-加快速度" aria-hidden="true">#</a> 003webpack 中使用 cdn 减少资源下载，加快速度</h2>
<h2 id="_003webpack-中开发一个-plugin" tabindex="-1"><a class="header-anchor" href="#_003webpack-中开发一个-plugin" aria-hidden="true">#</a> 003webpack 中开发一个 plugin</h2>
<p>webpack 插件中，两个对象 compiler 编译对象是 webpack 启动后，一次性生成 webpack 环境配置，可以访问整个 webpack 的运行时期。插件应用时候，会收到整个对象的引用，可以访问 webpack 的主环境。</p>
<p>另一个 compilation 对象是 webpack 的实时生成的编译对象，一个 compilation 表现了当前的模块资源，编译内容依赖变化。</p>
<h3 id="插件的时候原理" tabindex="-1"><a class="header-anchor" href="#插件的时候原理" aria-hidden="true">#</a> 插件的时候原理</h3>
<p>webpack 打包是一种事件流的机制，它的原理是将各个插件串联起来。那么实现这一切的核心就是在 compiler 对象中的 tapable，将 plugin 控制在 webpack 事件流上运行。（基本使用几个 tap 类中钩子：compile 是创建 compilation 之前，compilation 创建完成，emit 输出资源到目录前，done 编译完成）</p>
<p>注意 webpack 插件中旧的 api:compiler.plugin，新的 api 是 compiler.hooks.emit.tap(&quot;WebapckTransformplugins&quot;)</p>
<p>插件通过具有 apply 方法的 prototype 对象实例化出来。</p>
<h3 id="插件的基本内容组成" tabindex="-1"><a class="header-anchor" href="#插件的基本内容组成" aria-hidden="true">#</a> 插件的基本内容组成</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>从官网得知：编写一个webpack插件需要由以下组成：

1. 一个javascript命名函数。
2. 在插件函数的prototype上定义一个 apply 方法。
3. 指定一个绑定到webpack自身的钩子函数。
4. 处理webpack内部实列的特定数据。
5. 功能完成后调用webpack提供的回调函数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-config-js-中内容" tabindex="-1"><a class="header-anchor" href="#vue-config-js-中内容" aria-hidden="true">#</a> vue.config.js 中内容</h3>
<h4 id="开发插件的步骤-项目地址" tabindex="-1"><a class="header-anchor" href="#开发插件的步骤-项目地址" aria-hidden="true">#</a> 开发插件的步骤：<a href="https://gitee.com/nyhxiaoning/vue3.0-ts-admin.git" target="_blank" rel="noopener noreferrer">项目地址<ExternalLinkIcon/></a></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>第一步：创建一个js命令的类，添加apply方法。
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_004-开发-webpack-和-vite-插件的模板" tabindex="-1"><a class="header-anchor" href="#_004-开发-webpack-和-vite-插件的模板" aria-hidden="true">#</a> 004 开发 webpack 和 vite 插件的模板</h2>
<h2 id="开发插件" tabindex="-1"><a class="header-anchor" href="#开发插件" aria-hidden="true">#</a> 开发插件</h2>
<p>上面写了原生开发 webpack 和 vite 插件功能的代码和脚手架，有没有模板，真的有。</p>
<p>https://github.com/nyhxiaoning/gogocode.git</p>
<h3 id="开发-webpack-的插件模板" tabindex="-1"><a class="header-anchor" href="#开发-webpack-的插件模板" aria-hidden="true">#</a> 开发 webpack 的插件模板</h3>
<p><a href="https://github.com/thx/gogocode" target="_blank" rel="noopener noreferrer">gogocode<ExternalLinkIcon/></a>/<a href="https://github.com/thx/gogocode/tree/main/example" target="_blank" rel="noopener noreferrer">example<ExternalLinkIcon/></a>/<strong>demo-with-webpack-plugin</strong>/</p>
<h3 id="开发-vite-的插件模板" tabindex="-1"><a class="header-anchor" href="#开发-vite-的插件模板" aria-hidden="true">#</a> 开发 vite 的插件模板</h3>
<p><a href="https://github.com/thx/gogocode" target="_blank" rel="noopener noreferrer">gogocode<ExternalLinkIcon/></a>/<a href="https://github.com/thx/gogocode/tree/main/example" target="_blank" rel="noopener noreferrer">example<ExternalLinkIcon/></a>/<strong>demo-with-vite-plugin</strong>/</p>
<h2 id="_005rollup-开发一个通用插件" tabindex="-1"><a class="header-anchor" href="#_005rollup-开发一个通用插件" aria-hidden="true">#</a> 005rollup 开发一个通用插件</h2>
<h3 id="注意-rollup-引入-babel-的时候-有一个坑" tabindex="-1"><a class="header-anchor" href="#注意-rollup-引入-babel-的时候-有一个坑" aria-hidden="true">#</a> 注意 rollup 引入 babel 的时候，有一个坑</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rollup --config简写rollup  -c

第一部分
import babel from 'rollup-plugin-babel'

export default {
  input: './src/main',
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
    name: 'bundleName'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}


第二部分
{
  "presets": [
    [
      "@babel/env",
      {
        "modules": false // 设置为false,否则babel会在rollup有机会执行其操作之前导致我们的模块转化为commonjs
      }
    ]
  ]
}




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rollup-不将第三方包放入打包结果中" tabindex="-1"><a class="header-anchor" href="#rollup-不将第三方包放入打包结果中" aria-hidden="true">#</a> rollup 不将第三方包放入打包结果中</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>不将第三方库放入打包结果,在plugins中放入：external
如果你不想第三方库被打包进来，而可以在外面引入，配合使用的话，可以在rollup.config.js中配置external
rollup.config.js
export default {
  input: './src/main',
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
    name: 'bundleName'
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: ['lodash']
}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>支持 cdn 引用</p>
<p>支持 es6 模块</p>
<p>支持 commonjs</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rollup.config.js
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目详情地址：https://github.com/nyhxiaoning/utilibs-rollup-npm.git</p>
<h3 id="简单打包-rollup-一个文件函数成-es-commonjs" tabindex="-1"><a class="header-anchor" href="#简单打包-rollup-一个文件函数成-es-commonjs" aria-hidden="true">#</a> 简单打包 rollup 一个文件函数成 es,commonjs</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>全局安装rollup后
 rollup ./src/input1.js --format es   打包一个es格式的文件
  rollup ./src/input1.js --format cjs  打包一个commonjs格式的文件

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_006-利用-tsup-快速打包出各种-ts-的依赖包-类似-rollup" tabindex="-1"><a class="header-anchor" href="#_006-利用-tsup-快速打包出各种-ts-的依赖包-类似-rollup" aria-hidden="true">#</a> 006.利用 tsup 快速打包出各种 ts 的依赖包,类似 rollup</h2>
<p>Bundle your TypeScript library with no config, powered by <a href="https://github.com/evanw/esbuild" target="_blank" rel="noopener noreferrer">esbuild<ExternalLinkIcon/></a>.</p>
<p>上面是官方的说明。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tsup src/index.ts --dts --format cjs,esm
指定打包出cjs,esm的模块，同时自动生成一个d.ts的声明文件。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-第三方-vite-插件的配置开发和引入" tabindex="-1"><a class="header-anchor" href="#_1-第三方-vite-插件的配置开发和引入" aria-hidden="true">#</a> （1）第三方 vite 插件的配置开发和引入</h3>
<p><a href="https://gitee.com/nyhxiaoning/vite-cli-tools-list.git" target="_blank" rel="noopener noreferrer">vite 脚手架插件的配置和使用<ExternalLinkIcon/></a></p>
<p>第一步：创建一个插件项目：vite-plugin-template</p>
<p>通过上面的 tsup 导出后，成为一个插件。</p>
<p>然后回到一个项目中使用</p>
<p>第二步：在项目 vite-vue3 中使用</p>
<p>先用：<code v-pre>pnpm link &lt;dir&gt;</code><a href="https://pnpm.io/zh/cli/link#pnpm-link-dir" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon/></a></p>
<p>从执行此命令的路径或通过 <code v-pre>&lt;dir&gt;</code> 指定的文件夹，链接<code v-pre>package</code>到<code v-pre>node_modules</code>中。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>pnpm link ./../vite-plugin-template/
将同一文件夹的vite-lugin-template项目链接到vite-vue3项目中

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_007babel-是如何实现引入-commonjs-转换成-es" tabindex="-1"><a class="header-anchor" href="#_007babel-是如何实现引入-commonjs-转换成-es" aria-hidden="true">#</a> 007babel 是如何实现引入 commonjs 转换成 es</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>es module 在转换时会在 export 上挂载__esModule 属性。
所有在导入时，如果是 es module 直接返回，
如果不是则当 cjs 处理， 把整体模块挂在一个对象的 default 属性上，这样后续的操作就统一了。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_008-关于-rollup-和-babel-处理-commonjs-模块成-es-模块的思考。" tabindex="-1"><a class="header-anchor" href="#_008-关于-rollup-和-babel-处理-commonjs-模块成-es-模块的思考。" aria-hidden="true">#</a> 008 关于 rollup 和 babel 处理 commonjs 模块成 es 模块的思考。</h2>
<p>rollup 直接把 default export 挂到了 module.exports 上。而 babel 还是通过 __esModule 的标识，挂载在 exports.default 上。这个地方需要特别关注， 假如有一个库之前时 使用 babel 处理的， 那 cjs 用户只能以 <code v-pre>require('lib').default</code> 的形式来使用。 有一天这个库的作者决定使用 rollup, 那么 cjs 的用户想要使用新的库，只能去更改原先的代码。</p>
<p>我们平常的开发中，可能我们已经习惯了 default export, 特别是在 vue, react 项目中，我们自然的写下 <code v-pre>export default myComponent</code>。</p>
<p>如果本身项目都建立在 es module 的体系下, default export 绝对是一个 很便利的方式。</p>
<p>但是，如果你同时需要支持 cjs 和 esm,涉及到相互调用的问题， 那就要慎重考虑 <code v-pre>default export</code>。</p>
<p><strong>因为 esm 与 cjs 如何成功相互使用，并不由你决定，而是由帮你打包处理的工具决定。</strong></p>
<p><a href="https://juejin.cn/post/6844904126195695624" target="_blank" rel="noopener noreferrer">引用地址<ExternalLinkIcon/></a></p>
</div></template>
