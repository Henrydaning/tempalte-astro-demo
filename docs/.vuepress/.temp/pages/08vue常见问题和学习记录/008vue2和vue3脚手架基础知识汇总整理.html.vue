<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_0-vue-cli-脚手架的一些简单命令增加">0.vue-cli 脚手架的一些简单命令增加</RouterLink><ul><li><RouterLink to="#_1-框架中参数">(1)框架中参数</RouterLink></li><li><RouterLink to="#_2-环境变量控制在vue2中">（2）环境变量控制在vue2中</RouterLink></li><li><RouterLink to="#_3-我们可以在vue-config-js中计算环境变量">(3)我们可以在vue.config.js中计算环境变量，</RouterLink></li><li><RouterLink to="#_4-只在本地有效的变量">(4)只在本地有效的变量</RouterLink></li><li><RouterLink to="#_5-具体命令使用">（5）具体命令使用</RouterLink></li></ul></li><li><RouterLink to="#_1-vue2-x-基础知识汇总">1.vue2.x 基础知识汇总</RouterLink></li><li><RouterLink to="#_3-vite脚手架中配置">3.vite脚手架中配置</RouterLink><ul><li><RouterLink to="#_1-vite中各种配置环境文件设置">（1）vite中各种配置环境文件设置</RouterLink></li></ul></li></ul></nav>
<h2 id="_0-vue-cli-脚手架的一些简单命令增加" tabindex="-1"><a class="header-anchor" href="#_0-vue-cli-脚手架的一些简单命令增加" aria-hidden="true">#</a> 0.vue-cli 脚手架的一些简单命令增加</h2>
<p>继续熟悉一些 vue-cli-serve 的命令，获取参数值，process.args</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1.传参vue-cli-service
--mode        指定环境模式 (默认值：production)，匹配env文件
--dest        指定输出目录 (默认值：dist)
--modern      面向现代浏览器带自动回退地构建应用
--target      app | lib | wc | wc-async (默认值：app)
--name        库或 Web Components 模式下的名字 (默认值：package.json 中的 "name" 字段或入口文件名)
--no-clean    在构建项目之前不清除目标目录


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-框架中参数" tabindex="-1"><a class="header-anchor" href="#_1-框架中参数" aria-hidden="true">#</a> (1)框架中参数</h3>
<p>vue-cli-service build --mode development</p>
<h3 id="_2-环境变量控制在vue2中" tabindex="-1"><a class="header-anchor" href="#_2-环境变量控制在vue2中" aria-hidden="true">#</a> （2）环境变量控制在vue2中</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>注意，只有 NODE_ENV，BASE_URL 和以 VUE_APP_ 开头的变量将通过 webpack.DefinePlugin 静态地嵌入到客户端侧的代码中。这是为了避免意外公开机器上可能具有相同名称的私钥。

---文件.env文件
.env.development

NODE_ENV=development
VUE_APP_TITLE=My App (staging)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-我们可以在vue-config-js中计算环境变量" tabindex="-1"><a class="header-anchor" href="#_3-我们可以在vue-config-js中计算环境变量" aria-hidden="true">#</a> (3)我们可以在vue.config.js中计算环境变量，</h3>
<p>但是需要用VUE_APP_开头，用于版本信息</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  // config
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-只在本地有效的变量" tabindex="-1"><a class="header-anchor" href="#_4-只在本地有效的变量" aria-hidden="true">#</a> (4)只在本地有效的变量</h3>
<p>有的时候，需要不提交到代码仓库的变量，因为有时候项目托管在公共仓库，那么此时有一个.env.local文件取代，本地文件可以忽略。
可以在指定模式下使用.env.development.local这个会在development模式下使用，被git忽略。</p>
<h3 id="_5-具体命令使用" tabindex="-1"><a class="header-anchor" href="#_5-具体命令使用" aria-hidden="true">#</a> （5）具体命令使用</h3>
<h4 id="一种命令-包打包模式的时候-引入和不引入vue库的设置" tabindex="-1"><a class="header-anchor" href="#一种命令-包打包模式的时候-引入和不引入vue库的设置" aria-hidden="true">#</a> 一种命令：包打包模式的时候，引入和不引入vue库的设置</h4>
<p>在库模式中，Vue 是外置的。这意味着包中不会有 Vue，即便你在代码中导入了 Vue。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue-cli-service build --target lib
上面的命令，不会答案波vue库。

下面的命令如果想要加载进入内置vue
vue-cli-service build --target lib --inline-vue


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="打包webcompoents组件" tabindex="-1"><a class="header-anchor" href="#打包webcompoents组件" aria-hidden="true">#</a> 打包webcompoents组件</h4>
<p>Web Components 模式不支持 IE11 及更低版本
注意：
在 Web Components 模式中，Vue 是外置的。这意味着包中不会有 Vue，即便你在代码中导入了 Vue。这里的包会假设在页面中已经有一个可用的全局变量 Vue。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vue-cli-service build --target wc --name my-element [entry]


答案波后，引入
&lt;script src="https://unpkg.com/vue">&lt;/script>
&lt;script src="path/to/my-element.js">&lt;/script>

&lt;!-- 可在普通 HTML 中或者其它任何框架中使用 -->
&lt;my-element>&lt;/my-element>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="gitlab部署说明" tabindex="-1"><a class="header-anchor" href="#gitlab部署说明" aria-hidden="true">#</a> gitlab部署说明</h4>
<p>根据gitlab部署配置在gitlab-ci.yml
配置内容</p>
<h2 id="_1-vue2-x-基础知识汇总" tabindex="-1"><a class="header-anchor" href="#_1-vue2-x-基础知识汇总" aria-hidden="true">#</a> 1.vue2.x 基础知识汇总</h2>
<p><a href="https://www.processon.com/mindmap/60d132a36376892d4918b734" target="_blank" rel="noopener noreferrer">000VUE 基础知识全局熟悉 (processon.com)<ExternalLinkIcon/></a></p>
<h2 id="_3-vite脚手架中配置" tabindex="-1"><a class="header-anchor" href="#_3-vite脚手架中配置" aria-hidden="true">#</a> 3.vite脚手架中配置</h2>
<h3 id="_1-vite中各种配置环境文件设置" tabindex="-1"><a class="header-anchor" href="#_1-vite中各种配置环境文件设置" aria-hidden="true">#</a> （1）vite中各种配置环境文件设置</h3>
</div></template>
