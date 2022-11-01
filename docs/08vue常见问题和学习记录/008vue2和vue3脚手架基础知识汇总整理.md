[[toc]]

## 0.vue-cli 脚手架的一些简单命令增加

继续熟悉一些 vue-cli-serve 的命令，获取参数值，process.args


```
1.传参vue-cli-service
--mode        指定环境模式 (默认值：production)，匹配env文件
--dest        指定输出目录 (默认值：dist)
--modern      面向现代浏览器带自动回退地构建应用
--target      app | lib | wc | wc-async (默认值：app)
--name        库或 Web Components 模式下的名字 (默认值：package.json 中的 "name" 字段或入口文件名)
--no-clean    在构建项目之前不清除目标目录


```

### (1)框架中参数
vue-cli-service build --mode development


### （2）环境变量控制在vue2中
~~~
注意，只有 NODE_ENV，BASE_URL 和以 VUE_APP_ 开头的变量将通过 webpack.DefinePlugin 静态地嵌入到客户端侧的代码中。这是为了避免意外公开机器上可能具有相同名称的私钥。

---文件.env文件
.env.development

NODE_ENV=development
VUE_APP_TITLE=My App (staging)

~~~

### (3)我们可以在vue.config.js中计算环境变量，
但是需要用VUE_APP_开头，用于版本信息

~~~
process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  // config
}

~~~

### (4)只在本地有效的变量
有的时候，需要不提交到代码仓库的变量，因为有时候项目托管在公共仓库，那么此时有一个.env.local文件取代，本地文件可以忽略。
可以在指定模式下使用.env.development.local这个会在development模式下使用，被git忽略。

### （5）具体命令使用
#### 一种命令：包打包模式的时候，引入和不引入vue库的设置
在库模式中，Vue 是外置的。这意味着包中不会有 Vue，即便你在代码中导入了 Vue。
~~~
vue-cli-service build --target lib
上面的命令，不会答案波vue库。

下面的命令如果想要加载进入内置vue
vue-cli-service build --target lib --inline-vue


~~~

#### 打包webcompoents组件
Web Components 模式不支持 IE11 及更低版本
注意：
在 Web Components 模式中，Vue 是外置的。这意味着包中不会有 Vue，即便你在代码中导入了 Vue。这里的包会假设在页面中已经有一个可用的全局变量 Vue。
~~~
vue-cli-service build --target wc --name my-element [entry]


答案波后，引入
<script src="https://unpkg.com/vue"></script>
<script src="path/to/my-element.js"></script>

<!-- 可在普通 HTML 中或者其它任何框架中使用 -->
<my-element></my-element>


~~~

#### gitlab部署说明

根据gitlab部署配置在gitlab-ci.yml
配置内容



## 1.vue2.x 基础知识汇总

[000VUE 基础知识全局熟悉 (processon.com)](https://www.processon.com/mindmap/60d132a36376892d4918b734)



## 3.vite脚手架中配置

### （1）vite中各种配置环境文件设置

