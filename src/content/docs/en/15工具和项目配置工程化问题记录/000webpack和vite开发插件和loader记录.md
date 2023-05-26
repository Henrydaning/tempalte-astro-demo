
### 004webpack 中开发一个 plugin

webpack 插件中，两个对象 compiler 编译对象是 webpack 启动后，一次性生成 webpack 环境配置，可以访问整个 webpack 的运行时期。插件应用时候，会收到整个对象的引用，可以访问 webpack 的主环境。

另一个 compilation 对象是 webpack 的实时生成的编译对象，一个 compilation 表现了当前的模块资源，编译内容依赖变化。

#### 插件的时候原理

webpack 打包是一种事件流的机制，它的原理是将各个插件串联起来。那么实现这一切的核心就是在 compiler 对象中的 tapable，将 plugin 控制在 webpack 事件流上运行。（基本使用几个 tap 类中钩子：compile 是创建 compilation 之前，compilation 创建完成，emit 输出资源到目录前，done 编译完成）

注意 webpack 插件中旧的 api:compiler.plugin，新的 api 是 compiler.hooks.emit.tap("WebapckTransformplugins")

插件通过具有 apply 方法的 prototype 对象实例化出来。

#### 插件的基本内容组成

```
从官网得知：编写一个webpack插件需要由以下组成：

1. 一个javascript命名函数。
2. 在插件函数的prototype上定义一个 apply 方法。
3. 指定一个绑定到webpack自身的钩子函数。
4. 处理webpack内部实列的特定数据。
5. 功能完成后调用webpack提供的回调函数。
```

#### vue.config.js 中内容

###### 开发插件的步骤：[项目地址](https://gitee.com/nyhxiaoning/vue3.0-ts-admin.git)

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

### webpack 包管理工具的开发和使用记录

test-branch-ts 分支：https://gitee.com/nyhxiaoning/vue3.0-ts-admin.git

#### （1）开发 webpack 插件：快速去除 log,error,table,info 的插件。

利用 apply 注入一个函数对 compilation 进行操作。

webpack4 和 webpack5 做一下兼容，判断 compilation.hook 上，如果是 4 属性为 optimazeAsset 如果是 5，属性是 processAsset

#### （2）webpack 插件函数封装：脚手架创建工具包 cli

本质上：使用了 commander 命令行执行工具和 inqur 交互式解析器

#### （3）webpack 获取 url 在线地址 url 的相关信息内容：通过 http 模块。

因为每一个在线 github 包地址类似，

```
主分支是main或是master即可。
https://github.com/apache/echarts/blob/main/package.json
https://github.com/apache/echarts/blob/master/package.json
```

http.get（url）获取在线包

#### （4）webpack 获取每一个包的相关的最新版本和许可证信息实现思路

![当前的配置vue.config后功能输出](/images/webpackloader2.png)

```CSS
第一步：读取项目所有的依赖包。通过fs，然后将所有package.json内容返回。

返回后，获取到fs.read读取package.json后获取devDepences和depencies两个属性的所有内容。

取出当前的所有包。

第二步：将当前的所有包传入函数中，获取当前的每一个包对应的远程资源地址在线包git地址
可以通过http.get，http模块获取。

第二步：通过cheerio和request两个包，获取每一个包的html信息页面。
通过第一个的包名称和npm在线地址拼接获取到包url的在线地址，然后通过cheerio获取html页面信息。

第三步：获取到当前的html页面信息后，通过转成字符串获取当前的license的位置，截断获取当前的字符串，

这里注意去掉单引号和双引号的内容，转成对象最后，获取到的想要的信息

第四步：通过for循环，将所有的包对象放入一个大数组中，最后获取当前的所有的依赖的
许可证版本和最新版本
```


### 005vite 中开发一个 plugin


