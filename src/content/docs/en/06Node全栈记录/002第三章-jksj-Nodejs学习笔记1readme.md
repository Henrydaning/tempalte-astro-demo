### 需求分析

设计网站架构顺序
从浏览器发送请求，到服务器发生了什么事情。
### 打印执行时间
1.glob递归的打印文件
console.time("glob")

console.timeEnd("glob)
glob模块执行划分多长时间。

### 1.下载页面

#### （1）增加html引入今天static的引入
koa-static

#### (2)koa-mount
第二个参数可以使用一个koa实例。

#### （3）nodemXn的使用XXXX被自己错信坑死，nodemon这个命令

nodemon index.js

#### nodemon nodemon
### 2.详情页
#### proto协议
二进制协议，
- 优点
空间占用小，没有冗余字段；
运算规则简单，解析效率高。

- 缺点
可读性差，难于调试；
扩展性差，对于旧版本不太容易兼容新字段。


### 搭建api服务
7.API服务
（1）restApI\\通过路径进行不同的资源（食堂吃饭）

简单易懂
可以快速搭建
在数据聚合方面有很大的劣势
(get中专门一个字段数据，在一堆冗余数据中进行查找)
（2）GrapghQL --->吃自助
专注于数据聚合，前端需要什么数据，就返回什么数据。不会冗余。

让前端有自定义查询数据的能力



### 实现基于graphql的数据内容传递
const { graphql } = require("graphql");
const query = require("./index");

query("{hello,num}").then(res=>{
    console.log('res',res)
})

// TODO:如何基于graphql给http传递数据服务器
// koa-graphql

#### koa-graphql

### 3.播放器


### 4.列表页

### 8.从URL到渲染出页面出现过程。


### 9.前后端同构
前后台使用同一套模板写代码，渲染html。
Vue中使用VueServerRenderer.renderToString()

React中使用ReactDomServer.renderToString()

### 10.React.Vue同构最大的难度，其实是数据部分。
比如前端的vuex，Redux，这些数据怎样管理使得同构部分的代码更好。
引出了next框架和nuxt框架



### 11.Nuxt.js
~~~
npx create-nuxt-app <project-name>
Nuxt.js 是一个基于 Vue.js 的通用应用框架，一个用于Vue.js 开发SSR应用的一站式解决方案。它的优点是将原来几个配置文件要完成的内容，都整合在了一个nuxt.config.js，封装与扩展性完美的契合。

简单说nuxtjs项目，它其实就是一个vue的项目融合一个node.js server项目，这里node服务有两个作用，第一点是代替浏览器的工作,笼统理解就是在created时的请求数据和页面渲染，第二点是当作静态文件服务器，把渲染好的页面返回给用户。

~~~


### 12.Next.js
npx create-next-app


Next.js基于React开发
npx create-next-app

直观的、 基于页面 的路由系统（并支持 动态路由）
预渲染。支持在页面级的 静态生成 (SSG) 和 服务器端渲染 (SSR)
自动代码拆分，提升页面加载速度
具有经过优化的预取功能的 客户端路由
内置 CSS 和 Sass 的支持，并支持任何 CSS-in-JS 库
开发环境支持 快速刷新
利用 Serverless Functions 及 API 路由 构建 API 功能
完全可扩展

### 13.axios
可以前后端请求同构。
注意处理数据和处理环境不要混合在一起。

### 14.前后端同构的问题说明
前后端同构的关键
- 注意职责的分离，处理环境的代码，处理数据的代码分割。

- 



### 15.对于html中写调用方法
this.abbfn.bind(this.1);




### 16.webpack打包jsx
webpack.config.js中配置了入口和出口后，直接启动webpack就可以自动完成。
如果没有webpack.config.js，那么只能使用自己写命令，webpack input.js -o output.js
(webpack编译babel命令教程)





### 17.HTTP服务性能测试。
HTTP服务性能检查工具
#### 压力测试工具
ab:apache bench
webbench

这里以ab为例。
输入
apache bin目录下面，直接输入命令
ab -n100 -c 5 15  http://baidu.com/
其中－n表示请求数，－c表示并发数,第三个参数15，表示持续压力测试15s,
这里注意一点，如果当期的性能支持不了当期的并发数，该命令会无效输出。




### HTTP性能瓶颈一般除了并发，很大程度上是js中的拼接字符串和数据处理部分

#### 如何快速找到nodejs中js代码的性能瓶颈。

Nodejs自带的工具
Node profile
### node性能命令 node自带profile
第一个命令:启动命令的时候中间加上prof
node --prof entry.js

停止后，生成一个文件一般是iso开头

第二个命令:将性能分析，写入一个1.txt文件，便于查看
node --prof-process isoxxxx文件名 >1.txt

### node性能优化工具2chrome devtool
ndoe --inspect-brk  entry.js
这里利用node内核是v8引擎，brk启动调试暂停，占用程序运行。
同时进入chrome浏览器，输入chrome://inspect
chrome://inspect/#devices
点击下面的inspect超链接，弹出一个devtool的工具，可以选择开始收集性能数据

### node的一个npm包Clinic.js
npm install -g clinic

wrk http://localhost:3000
autocannon http://localhost:3000


### 怎样检测我们的内存泄漏
V8的垃圾回收机制
每一个对象都有一个标记引用，当标记为0的时候，启动垃圾回收
如果多次垃圾回收后，新生代中的对象没有被释放，那么放入老生代的内存中，

新生代，容量小，垃圾回收更快
老生代，容量大，垃圾回收更慢。


#### 如何检测chrome devtool看出内存泄漏
每隔一段时间，进行一次点击提取快照。
打开inspect后，有一个Memory选项tab,左侧有一个profile选项，点击一下，可以截取快照
压测做到一半的时候，做一个快照，压测完成做一个快照
多次截取快照，可以两次进行对比。


#### 优秀内存分配策略的学习buffer
Buffer内存的分配策略