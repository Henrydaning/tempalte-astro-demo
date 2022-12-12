## 000 工程化相关的配置文件汇总

[前端工程化配置系统汇总文件内容](https://www.processon.com/mindmap/617781871efad44894fbe29d)

汇总了各种常见的配置情况：最优化说明：

### webpack4.x+babel+eslint

```


```

### webpack5.x+babel+eslint

```


```

### vite2.x+babel+eslint

```
import { defineConfig } from "vite";
const path = require("path");
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import { visualizer } from "rollup-plugin-visualizer";
// const BASE_API = import.meta.env.VITE_APP_BASE_API
import copy from 'rollup-plugin-copy'; // 引入插件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // visualizer({  //    build后的视图
    //   open: true,
    //   gzipSize: true,
    //   brotliSize: true
    // }),
    copy({
      targets: [
        { src: ['./src/lib/index.js'], dest: './public' }, // 执行拷贝，注意public目标

      ]
    }),
    Components({
      resolvers: [VantResolver()]
    }),
    AutoImport({
      imports: ["vue", "vue-router"] // 自动导入vue和vue-router相关函数
    })
  ],
  css: {
    preprocessorOptions: {
      // define global scss variable
      scss: {
        additionalData: `@import '@/common/styles/mixin.scss';`
      }
    }
  },
  server: {
    host: "0.0.0.0",
    port: 81,
    open: true
  },
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components"),
      views: path.resolve(__dirname, "src/views"),
      utils: path.resolve(__dirname, "src/utils")
    }
  },
  // 配置生产环境，不生成soureceMap-vite2.x配置
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_debugger: true,
        pure_funcs: ['console.log'] // 移除console
      },
    },
    sourcemap: false,
    outDir: 'dist', // 指定输出路径,构建从public中设置
    // assetsDir: "wap", //指定生成静态资源的存放路径
    // rollupOptions: {
    //   output: {
    //     chunkFileNames: 'assets/js/[name]-[hash].js',
    //     entryFileNames: 'assets/js/[name]-[hash].js',
    //     assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
    //   }
    // }
  }
});



vite项目学习补充--------------------------
（1）   /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: '/huangbiao',
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: 'target',
  port: 3000,
  // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  // 引入第三方的配置
  optimizeDeps: {<!-- -->
    include: ["moment", "echarts", "axios", "mockjs"]
  },

  （2）copy复制的vite插件生效的前提，默认设置了outDir是dist
  但是需要了解一下vite,打包从public复制，所以，我们打包的copy文件目的地一般是public
 正确的配置如下
     copy({
      targets: [
        { src: ['./src/lib/index.js'], dest: './public' }, // 执行拷贝

      ]
    }),
项目中的 public 目录中的文件会全訁贝到打包文件中

(3)其他配置补充
 // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  // 引入第三方的配置
  optimizeDeps: {<!-- -->
    include: ["moment", "echarts", "axios", "mockjs"]
  },

  （4）保留部分console.info只是删除console.log
  一些重要信息可以特殊化打印console.info留下
  compress: {
     drop_console: true, // 清除 console 语句
     drop_debugger: false, // 清除 debugger 语句
     pure_funcs: ['console.log'] // 移除console
   }

```

### vite3.x+babel+eslint

```
vite 3.x 已经将 esbuild 作为默认构建选项，你可以通过如下配置在构建时移除代码中的 console.log、debugger。

(1)配置vite.config.ts,移除打印信息
vite 3.x 已经将 esbuild 作为默认构建选项，
你可以通过如下配置在构建时移除代码中的 console.log、debugger。
// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
    build：{
      minify: 'esbuild', // 默认
    }，
    esbuild: {
      drop: ['console', 'debugger'],
    },
});

但是vite3.x支持vue2.x配置
如果你仍然使用 terser 作为构建工具，可以通过如下配置实现此目的。
 build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  }


```

- 待补充

## 001es module 中使用\_\_dirname

因为 path 是 Node 模块，一些方法无法直接使用。

```
在nodejs中使用es module时，__dirname未定义，因为__dirname、__filename只有在commonjs 中才有；

报错： __dirname is not defined in ES module scope

import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
```

## 002 如何抽离使用项目中的库

### 引用 webpack 的模块联邦架构

#### lib-app

暴露了一些库模块：axios,vue,react，react-dom。提供远程公共库依赖，它是一个纯粹的 remote

#### component-app

暴露了一些公共组件：作为生产者，但同时又消费 expose 暴露的 react 模块，

#### main-app

上层 App，依赖 lib-app 和 component-app 应用。

#### lib-app 中 axios,vue 两个库进行模块联邦测试

npm run start 先编译出来模块联邦需要的库文件：axios,vue,react 等

```

npm run  start后生成依赖
[0] + 8 modules
[0] webpack 5.74.0 compiled successfully in 1144 ms


随后启动模块服务：npm run serve
```

### component-app 中作为生产者和消费者进行模块联邦

```
npm run start生成依赖
[0]     remote lib-app/react 6 bytes (remote) 6 bytes (share-init) [built] [code generated]
[0]     remote lib-app/react-dom 6 bytes (remote) 6 bytes (share-init) [built] [code generated]
[0]   container entry 42 bytes [built] [code generated]
[0]   external "lib_app@http://localhost:3000/remoteEntry.js" 42 bytes [built] [code generated]
[0] webpack 5.74.0 compiled successfully in 2256 ms


随后启动模块服务：npm run serve

```

[借鉴了很多 github 项目上的代码](https://github.com/anderlaw/react-webpack-MF.git)

#### 打包成组件库，然后导出成 lib 库包，再通过资源引用

成本，需要构造一个 lib 库，见[vitelib 开发组件库](./001vitevue3%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E5%BA%93.md)

### webpack 模块联邦实现的更好。

我们利用模块联邦，将项目中所有的公共组件设置为一个项目，然后导出 expose 暴露，再消费者哪里，利用 remote 引用。
注意配置 output 的目录代码。
好处：实现了代码的公共代码抽离，相对于资源库来说，修改方便，减少了搭建一个私有组件库的 vedecco 问题。

实现 demo 案例：[模块联邦实现和封装](https://gitee.com/nyhxiaoning/webpack-cli-tools-list.git)

![模块联邦同时运行lib公共依赖库，com组件库，主项目](/images/modulesbundle.png)

## 003webpack 中使用 cdn 减少资源下载，加快速度

## 003webpack 中开发一个 plugin

webpack 插件中，两个对象 compiler 编译对象是 webpack 启动后，一次性生成 webpack 环境配置，可以访问整个 webpack 的运行时期。插件应用时候，会收到整个对象的引用，可以访问 webpack 的主环境。

另一个 compilation 对象是 webpack 的实时生成的编译对象，一个 compilation 表现了当前的模块资源，编译内容依赖变化。

### 插件的时候原理

webpack 打包是一种事件流的机制，它的原理是将各个插件串联起来。那么实现这一切的核心就是在 compiler 对象中的 tapable，将 plugin 控制在 webpack 事件流上运行。（基本使用几个 tap 类中钩子：compile 是创建 compilation 之前，compilation 创建完成，emit 输出资源到目录前，done 编译完成）

注意 webpack 插件中旧的 api:compiler.plugin，新的 api 是 compiler.hooks.emit.tap("WebapckTransformplugins")

插件通过具有 apply 方法的 prototype 对象实例化出来。

### 插件的基本内容组成

```
从官网得知：编写一个webpack插件需要由以下组成：

1. 一个javascript命名函数。
2. 在插件函数的prototype上定义一个 apply 方法。
3. 指定一个绑定到webpack自身的钩子函数。
4. 处理webpack内部实列的特定数据。
5. 功能完成后调用webpack提供的回调函数。
```

### vue.config.js 中内容

#### 开发插件的步骤：[项目地址](https://gitee.com/nyhxiaoning/vue3.0-ts-admin.git)

```
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

```

## 004 开发 webpack 和 vite 插件的模板

## 开发插件

上面写了原生开发 webpack 和 vite 插件功能的代码和脚手架，有没有模板，真的有。

https://github.com/nyhxiaoning/gogocode.git

### 开发 webpack 的插件模板

[gogocode](https://github.com/thx/gogocode)/[example](https://github.com/thx/gogocode/tree/main/example)/**demo-with-webpack-plugin**/

### 开发 vite 的插件模板

[gogocode](https://github.com/thx/gogocode)/[example](https://github.com/thx/gogocode/tree/main/example)/**demo-with-vite-plugin**/

## 005rollup 开发一个通用插件

### 注意 rollup 引入 babel 的时候，有一个坑

```
rollup --config简写rollup  -c

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




```

### rollup 不将第三方包放入打包结果中

```
不将第三方库放入打包结果,在plugins中放入：external
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



```

支持 cdn 引用

支持 es6 模块

支持 commonjs

```
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

```

项目详情地址：https://github.com/nyhxiaoning/utilibs-rollup-npm.git

### 简单打包 rollup 一个文件函数成 es,commonjs

```
全局安装rollup后
 rollup ./src/input1.js --format es   打包一个es格式的文件
  rollup ./src/input1.js --format cjs  打包一个commonjs格式的文件

```

## 006.利用 tsup 快速打包出各种 ts 的依赖包,类似 rollup

Bundle your TypeScript library with no config, powered by [esbuild](https://github.com/evanw/esbuild).

上面是官方的说明。

```
tsup src/index.ts --dts --format cjs,esm
指定打包出cjs,esm的模块，同时自动生成一个d.ts的声明文件。

```

### （1）第三方 vite 插件的配置开发和引入

[vite 脚手架插件的配置和使用](https://gitee.com/nyhxiaoning/vite-cli-tools-list.git)

第一步：创建一个插件项目：vite-plugin-template

通过上面的 tsup 导出后，成为一个插件。

然后回到一个项目中使用

第二步：在项目 vite-vue3 中使用

先用：`pnpm link <dir>`[](https://pnpm.io/zh/cli/link#pnpm-link-dir)

从执行此命令的路径或通过 `<dir>` 指定的文件夹，链接`package`到`node_modules`中。

```
pnpm link ./../vite-plugin-template/
将同一文件夹的vite-lugin-template项目链接到vite-vue3项目中

```

## 007babel 是如何实现引入 commonjs 转换成 es

```
es module 在转换时会在 export 上挂载__esModule 属性。
所有在导入时，如果是 es module 直接返回，
如果不是则当 cjs 处理， 把整体模块挂在一个对象的 default 属性上，这样后续的操作就统一了。

```

## 008 关于 rollup 和 babel 处理 commonjs 模块成 es 模块的思考。

rollup 直接把 default export 挂到了 module.exports 上。而 babel 还是通过 \_\_esModule 的标识，挂载在 exports.default 上。这个地方需要特别关注， 假如有一个库之前时 使用 babel 处理的， 那 cjs 用户只能以 `require('lib').default` 的形式来使用。 有一天这个库的作者决定使用 rollup, 那么 cjs 的用户想要使用新的库，只能去更改原先的代码。

我们平常的开发中，可能我们已经习惯了 default export, 特别是在 vue, react 项目中，我们自然的写下 `export default myComponent`。

如果本身项目都建立在 es module 的体系下, default export 绝对是一个 很便利的方式。

但是，如果你同时需要支持 cjs 和 esm,涉及到相互调用的问题， 那就要慎重考虑 `default export`。

**因为 esm 与 cjs 如何成功相互使用，并不由你决定，而是由帮你打包处理的工具决定。**

[引用地址](https://juejin.cn/post/6844904126195695624)
