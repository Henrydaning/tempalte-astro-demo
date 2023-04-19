## 1.个人一步步的实现webpack和vite配置
不建议，太浪费时间

## 2.目前比较好的通用解决方案。
市面上面的两个比较好的解决方案
- webpack-to-vite
可以将当前的项目直接生成一个project-toVite的项目，然后yarn之后直接启动。
这个对于vue2.6不太友好，需要将当前的vue2.6项目先升级到vue2.7具体的内容可以找【第8章：vue版本升级和功能说明】
- wp2vite
类似于上面的配置，但是这个是直接在当前的项目中进行配置的插入，然后yarn之后启动。


### （1）两种方案相同点。
基本都会增加vite.config.js和html.
然后其他的css配置，resolve解析，基本的配置项目转换。
╔════════╤═════════════════════════════════════╤══════════════════╗
║ Number │ Conversion item                     │ Conversion count ║
╟────────┼─────────────────────────────────────┼──────────────────╢
║  B01   │ add package.json                    │        1         ║
║  B02   │ add index.html                      │        1         ║
║  B03   │ add vite.config.js                  │        1         ║
║  B04   │ required plugins                    │        1         ║
║  B11   │ html-webpack-plugin is supported    │        1         ║
║  V01   │ base public path                    │        1         ║
║  V02   │ css options                         │        1         ║
║  V03   │ build options                       │        1         ║
║  V05   │ resolve.alias options               │        1         ║
║  V06   │ client-side env variables           │        1         ║
║  V08   │ transform functional webpack config │        3         ║
╚════════╧═════════════════════════════════════╧══════════════════╝

### （2）实际使用后如果是非常小的项目，
基本上面的两个方案兼容vue2.x都很好。

### （3）如果项目比较大。
主要会遇到的问题：process.env
但是这个wp2vite会自动接入替换，webpack-to-vite需要手动配置。

### （4）相同缺点。
对于less的文件导入支持差，其实这个不是插件的问题，是vite的问题。

#### 解决vite中引入less遇到的问题和解决的全过程。
其实：仅仅支持less变量，默认增加:lang=less支持嵌套可以。
但是如果使用全局变量和文件导入，需要看第三部分。



## 3.vite中配置less全局文件引入参考例子：
[vite中引入less文件全局css配置](https://app.yinxiang.com/u/0/client/web#?n=52932727-15cb-4ab9-a00e-f81386c8a30a&b=e2c25791-e400-4f64-8b96-ec3078a2ca5b&legacy=p)

支持样式内联：  javascriptEnabled:true
### vite中使用全局less变量:默认支持
~~~
// @import "constant/index";

@bgc-color-red: #ff0000;
@text-color-yellow: #ffff00;

.special-color {
    color: @text-color-yellow;
  }

.special-bgc{
    color: @bgc-color-red;
}

~~~

#### 全局变量使用less
~~~
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        charset: false,
        additionalData: '@import "./src/style/index.less";'
      }
    }
  },


~~~

### vite中使用文件导入@import
~~~
默认支持：
但是地址不能乱写，需要用相对地址。
~~~

### Vite打包后，出现less的@import后面~匹配不上的问题。
这里两类问题：
~~~

（这里使用了参考的： { find: /^~/, replacement: '' }没有生效）
    alias: [
      { find: /^~/, replacement: '' }
    ],
~~~


~~~
下面的靠谱的方案已经验证了两种
已经实现代码地址和分支： https://gitee.com/zkwq/h5-appDebug-Platform.git 分支 feature-test-Webpack-project
@import '~ant-design-vue/lib/style/themes/default';
第一种修改方法：直接将这里的~删除即可。
第二种修改方法：将这里的地址通过相对地址，从node_modules开始。
第三种修改方法：将这里的~直接使用‘’代替，这导致一个问题，会将这里的ant-design-vue认为是当前的文件夹，找不到文件，个人认为应该将这里的~替换成‘’，然后默认从node_modules下面找，但是根据网上的替换方案，没有成功，这里暂时不进行测试。
~~~














