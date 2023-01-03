## 1.webpack 模块联邦

## 2.webpack 热更新原理

## 3.webpack 的 mode 模式
### 3种mode模式。
没有设置，自动webapck的mode模式是production。经过压缩和混淆优化。
[webpack的mode模式](./webpackmode.png)

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
