<template><div><h2 id="vite框架打包库文件模式实现" tabindex="-1"><a class="header-anchor" href="#vite框架打包库文件模式实现" aria-hidden="true">#</a> vite框架打包库文件模式实现</h2>
<h3 id="第一步-创建index" tabindex="-1"><a class="header-anchor" href="#第一步-创建index" aria-hidden="true">#</a> 第一步：创建index</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>src/components 目录下，新建打包配置文件 index.ts。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第二步-根目录创建一个build-cjs" tabindex="-1"><a class="header-anchor" href="#第二步-根目录创建一个build-cjs" aria-hidden="true">#</a> 第二步：根目录创建一个build.cjs</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const path = require('path')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')

// 添加打包入口文件夹 packages（需要手动创建）
const entryDir = path.resolve(__dirname, '../src/components')
// 添加出口文件夹 lib（不需要手动创建，会自动生成）
const outDir = path.resolve(__dirname, '../lib')

// vite 配置
const baseConfig = defineConfig({
	configFile: false,
	publicDir: false,
	plugins: [vue()]
})

// rollup 配置（vite 基于 rollup 打包）
const rollupOptions = {
    // 这两个库不需要打包
	external: ['vue', 'vue-router'],
	output: {
		globals: {
			vue: 'Vue'
		}
	}
}

//全量构建
const buildAll = async () => {
  await build(defineConfig({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, 'index.ts'),
		    // 组件库名字
        name: 'my-components-base',
        fileName: 'my-components-base',
		    // 输出格式
        formats: ['es', 'umd']
      },
      outDir
    }
  }))
}


const buildLib = async () => {
  await buildAll()
}

buildLib()



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第三步-打包命令" tabindex="-1"><a class="header-anchor" href="#第三步-打包命令" aria-hidden="true">#</a> 第三步：打包命令</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>"build:components": "node --trace-warnings ./build/build.js",
"lib": "npm run build:components"

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第四步-使用方式" tabindex="-1"><a class="header-anchor" href="#第四步-使用方式" aria-hidden="true">#</a> 第四步：使用方式</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>main.js中全局引入
// 引入组件
import MyComponents from '../lib/my-components-base.es.js'
// 注意一定要引入样式
import '../lib/style.css'


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第五步-发布npm" tabindex="-1"><a class="header-anchor" href="#第五步-发布npm" aria-hidden="true">#</a> 第五步：发布npm</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>private 值为 false，组件库不能私有；

version 默认为 0.0.0，发布到 npm 必须遵守规范，这里改为 1.0.0；
main 当组件库被 import 时，默认指向 /lib/my-components.es.js 文件；



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>npm login的时候，nrm切换到npm的镜像源地址。</p>
<p>第二：出现下面校验，使用方法登录npm网站，点击account
npm ERR! This operation requires a one-time password from your authenticator.</p>
<p>然后自己选择npm内部的双因子认证登录，避免丢失。
自己下载authenticator后，扫描即可。</p>
<p>npm publish后，发现错误说，你不能发布名为lib的包，意思是重名了。</p>
<h3 id="创建npm私有服务器-公司内部访问" tabindex="-1"><a class="header-anchor" href="#创建npm私有服务器-公司内部访问" aria-hidden="true">#</a> 创建npm私有服务器，公司内部访问</h3>
<p>因为npm上面的包都是公共，不能私有化。</p>
<p>-npm install -g verdaccio --unsafe-perm</p>
<p>-安装完成后，命令行输入verdaccio启动一次，会生成下面文件
会有输出显示：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>安装后，在文件夹 C:\Users\rongm\.config\verdaccio\config.yaml

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>-在配置文件的末尾添加listen: 0.0.0.0:4873</p>
<p>-配置文件的storage选项，然后把仓库的位置填写进去，注意是用斜线，而不是反斜线</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
storage: E:/CICD/selfnpm

重启verdaccio命令
访问：http://127.0.0.1:4873/或是本机ip+端口4873

接着nrm add localnpm  ip+端口4873

增加后，nrm ls  
localnpm ----- http://localhost:4873/


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-切换私有npm域，新建用户
npm adduser</p>
<p>这里添加的daning,密码和原来的npm一样，然后访问127.0.0.1：4873</p>
<p>-将刚刚的lib库，尝试再次上传一次</p>
<p>创建一个npm init -f</p>
<h3 id="私有域配置了nrm后-如果使用" tabindex="-1"><a class="header-anchor" href="#私有域配置了nrm后-如果使用" aria-hidden="true">#</a> 私有域配置了nrm后，如果使用，</h3>
<p>就是npm i 后使用，和正常的一摸一样，
在私有域找不到，会自动连接到npm.mirror上，自己不用担心私有共有的包的问题。</p>
<h2 id="_2-利用tsup快速打包出各种ts的依赖包-类似rollup" tabindex="-1"><a class="header-anchor" href="#_2-利用tsup快速打包出各种ts的依赖包-类似rollup" aria-hidden="true">#</a> 2.利用tsup快速打包出各种ts的依赖包,类似rollup</h2>
<p>Bundle your TypeScript library with no config, powered by <a href="https://github.com/evanw/esbuild" target="_blank" rel="noopener noreferrer">esbuild<ExternalLinkIcon/></a>.</p>
<p>上面是官方的说明。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tsup src/index.ts --dts --format cjs,esm
指定打包出cjs,esm的模块，同时自动生成一个d.ts的声明文件。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-第三方vite插件的配置开发和引入" tabindex="-1"><a class="header-anchor" href="#_1-第三方vite插件的配置开发和引入" aria-hidden="true">#</a> （1）第三方vite插件的配置开发和引入</h3>
<p><a href="https://gitee.com/nyhxiaoning/vite-cli-tools-list.git" target="_blank" rel="noopener noreferrer">vite脚手架插件的配置和使用<ExternalLinkIcon/></a></p>
<p>第一步：创建一个插件项目：vite-plugin-template</p>
<p>通过上面的tsup导出后，成为一个插件。</p>
<p>然后回到一个项目中使用</p>
<p>第二步：在项目vite-vue3中使用</p>
<p>先用：<code v-pre>pnpm link &lt;dir&gt;</code><a href="https://pnpm.io/zh/cli/link#pnpm-link-dir" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon/></a></p>
<p>从执行此命令的路径或通过 <code v-pre>&lt;dir&gt;</code> 指定的文件夹，链接<code v-pre>package</code>到<code v-pre>node_modules</code>中。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>pnpm link ./../vite-plugin-template/
将同一文件夹的vite-lugin-template项目链接到vite-vue3项目中

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
