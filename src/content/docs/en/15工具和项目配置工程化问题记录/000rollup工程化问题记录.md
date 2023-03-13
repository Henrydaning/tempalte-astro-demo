## 1.rollup 打包的几种格式说明

├── out
│ ├── amd
│ │ └── bundle.js
│ ├── cjs
│ │ └── bundle.js
│ ├── ems
│ │ └── bundle.js
│ ├── iife
│ │ └── bundle.js
│ ├── system
│ │ └── bundle.js
│ └── umd
│ └── bundle.js

IIFE: 适合部分场景作为 SDK 进行使用，尤其是需要把自己挂到 window 上的场景。
默认打包成这种方式。

CommonJS: 仅 node.js 使用的库。

AMD: 只需要在浏览器端使用的场景。

UMD: 既可能在浏览器端也可能在 node.js 里使用的场景。

SystemJs: 和 UMD 类似。目前较出名的 Angular 用的就是它。

ESM: 1. 还会被引用、二次编译的场景（如组件库等）；2.浏览器调试场景如 vite.js 的开发时。3.对浏览器兼容性非常宽松的场景。

## 2.webpack 的 umd 和 webpack 的 umd 区别。

rollup 的 umd 打包模式和 webpack 的 umd 格式打包的区别
前端打包工具有很多——webpack,gulp,rollup 等等，网上有很多文章分析它们分别更适合哪些场景，
ebpack 更适合打包组件库、应用程序之类的应用，
而 rollup 更适合打包纯 js 的类库(因为更小)。
