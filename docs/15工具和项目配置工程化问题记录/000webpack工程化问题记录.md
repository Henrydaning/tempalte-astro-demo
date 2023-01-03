## 0.webpack 打包原理

[webpack 打包原理](https://juejin.cn/post/6844904038543130637)
### webpack 构建流程
Webpack 的运行流程是一个串行的过程,从启动到结束会依次执行以下流程 :

- 初始化参数：从配置文件和 Shell 语句中读取与合并参数,得出最终的参数。
- 开始编译：用上一步得到的参数初始化 Compiler 对象,加载所有配置的插件,执行对象的 run 方法开始执行编译。
- 确定入口：根据配置中的 entry 找出所有的入口文件。
- 编译模块：从入口文件出发,调用所有配置的 Loader 对模块进行翻译,再找出该模块依赖的模块,再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
- 完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后,得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。
- 输出资源：根据入口和模块之间的依赖关系,组装成一个个包含多个模块的 Chunk,再把每个 Chunk 转换成一个单独的文件加入到输出列表,这步是可以修改输出内容的最后机会。
- 输出完成：在确定好输出内容后,根据配置确定输出的路径和文件名,把文件内容写入到文件系统。

## 1.webpack 模块联邦

## 2.webpack 热更新原理

## 3.webpack 的 mode 模式

### 3 种 mode 模式。

没有设置，自动 webapck 的 mode 模式是 production。经过压缩和混淆优化。
[webpack 的 mode 模式](./webpackmode.png)

## 4.webpack 的插件开发

## 5.webpack 的缓存策略

## 6.webpack 的打包配置：解决支持 umd 格式，解决通用配置 node 和前端 this 环境。

打包成 umd 格式，注意一个大坑，比如 js 端的 this 是 self，但是 node 端不识别。

### 解决方案

输出的时候配置
大概意思就是，默认值为 self 当 output.libraryTarget 为 umd.
webpack 打包的时候，这里默认不会将 es6 转换为 es5 的代码。

```
output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryExport: 'default',
    library: '[name]',
    globalObject: 'this',   // here
    libraryTarget: 'umd'
}

```

## 7.webpack 的 devtool 的配置不同打包代码生成。devtool 里的 7 种 SourceMap 模式。

### 几种内容说明

eval：webpack 的 sourcemap 的配置就利用了浏览器对 eval 代码的调试支持。

每个 module 会封装到 eval 里包裹起来执行，并且会在末尾追加注释 //@ sourceURL.
浏览器 devtool 支持通过 sourceUrl 来把 eval 的内容单独生成文件，
还可以进一步通过 sourceMappingUrl 来映射回源码，webpack 利用这个特性来简化了 sourcemap 的处理，可以直接从模块开始映射，不用从 bundle 级别。

source-map
生成一个 SourceMap 文件.

hidden-source-map
和 source-map 一样，但不会在 bundle 末尾追加注释.

inline-source-map
生成一个 DataUrl 形式的 SourceMap 文件.

eval-source-map
每个 module 会通过 eval() 来执行，并且生成一个 DataUrl 形式的 SourceMap .

cheap-source-map
生成一个没有列信息（column-mappings）的 SourceMaps 文件，不包含 loader 的 sourcemap（譬如 babel 的 sourcemap）

cheap-module-source-map
生成一个没有列信息（column-mappings）的 SourceMaps 文件，同时 loader 的 sourcemap 也被简化为只包含对应行的。

cheap：只映射到源代码的某一行，不精确到列，可以提升 sourcemap 生成速度

module： sourcemap 生成时会关联每一步 loader 生成的 sourcemap，配合 sourcemap-loader 可以映射回最初的源码

### 2.webpack 不仅支持这 7 种，而且它们还是可以任意组合

上面的 eval、inline、hidden 关键字，就如文档所说，你可以设置 souremap 选项为 cheap-module-inline-source-map。

### 3.使用哪一种模式好？

开发环境推荐：cheap-module-eval-source-map

生产环境推荐：cheap-module-source-map （这也是下版本 webpack 使用-d 命令启动 debug 模式时的默认选项）

原因如下：

（1）使用 cheap 模式可以大幅提高 souremap 生成的效率。大部分情况我们调试并不关心列信息，而且就算 sourcemap 没有列，
有些浏览器引擎（例如 v8） 也会给出列信息。
（2）使用 eval 方式可大幅提高持续构建效率。参考官方文档提供的速度对比表格可以看到 eval 模式的编译速度很快。
（3）使用 module 可支持 babel 这种预编译工具（在 webpack 里做为 loader 使用）。
（4）使用 eval-source-map 模式可以减少网络请求。这种模式开启 DataUrl 本身包含完整 sourcemap 信息，并不需要像 sourceURL 那样，
浏览器需要发送一个完整请求去获取 sourcemap 文件，这会略微提高点效率。而生产环境中则不宜用 eval，这样会让文件变得极大。

一般 dev 环境下，使用 eval,pro 使用普通模式。

### 味真美 dev 下使用 eval 的模式。
