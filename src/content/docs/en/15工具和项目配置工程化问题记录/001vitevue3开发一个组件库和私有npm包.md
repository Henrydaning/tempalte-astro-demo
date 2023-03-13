## vite 框架打包库文件模式实现

### 第一步：创建 index

```
src/components 目录下，新建打包配置文件 index.ts。


```

### 第二步：根目录创建一个 build.cjs

```
const path = require('path')
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



```

### 第三步：打包命令

```
"build:components": "node --trace-warnings ./build/build.js",
"lib": "npm run build:components"

```

### 第四步：使用方式

```
main.js中全局引入
// 引入组件
import MyComponents from '../lib/my-components-base.es.js'
// 注意一定要引入样式
import '../lib/style.css'


```

### 第五步：发布 npm

```
private 值为 false，组件库不能私有；

version 默认为 0.0.0，发布到 npm 必须遵守规范，这里改为 1.0.0；
main 当组件库被 import 时，默认指向 /lib/my-components.es.js 文件；



```

npm login 的时候，nrm 切换到 npm 的镜像源地址。

第二：出现下面校验，使用方法登录 npm 网站，点击 account
npm ERR! This operation requires a one-time password from your authenticator.

然后自己选择 npm 内部的双因子认证登录，避免丢失。
自己下载 authenticator 后，扫描即可。

npm publish 后，发现错误说，你不能发布名为 lib 的包，意思是重名了。

## 私有化部署 npm 服务支持

## 创建 npm 私有服务器，公司内部访问

因为 npm 上面的包都是公共，不能私有化。

-npm install -g verdaccio --unsafe-perm

-安装完成后，命令行输入 verdaccio 启动一次，会生成下面文件
会有输出显示：

```
安装后，在文件夹 C:\Users\rongm\.config\verdaccio\config.yaml

```

-在配置文件的末尾添加 listen: 0.0.0.0:4873

-配置文件的 storage 选项，然后把仓库的位置填写进去，注意是用斜线，而不是反斜线

```

storage: E:/CICD/selfnpm

重启verdaccio命令
访问：http://127.0.0.1:4873/或是本机ip+端口4873

接着nrm add localnpm  ip+端口4873

增加后，nrm ls
localnpm ----- http://localhost:4873/


```

-切换私有 npm 域，新建用户
npm adduser

这里添加的 daning,密码和原来的 npm 一样，然后访问 127.0.0.1：4873

-将刚刚的 lib 库，尝试再次上传一次

创建一个 npm init -f

### 私有域配置了 nrm 后，如果使用，

就是 npm i 后使用，和正常的一摸一样，
在私有域找不到，会自动连接到 npm.mirror 上，自己不用担心私有共有的包的问题。

## 2.利用 tsup 快速打包出各种 ts 的依赖包,类似 rollup

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

## 5.打包发布到 NPM 并通过 CDN 访问

### 语义化改动控制版本

```
通过npm version <update_type>自动改变版本

对于"version":"x.y.z"
1.修复bug,小改动，增加z
2.增加了新特性，但仍能向后兼容，增加y
3.有很大的改动，无法向后兼容,增加x

```

### （2）cdn 通过 jsdelivr 可以免费访问 npm 包

https://www.jsdelivr.com/

地址格式：https://cdn.jsdelivr.net/npm/(your packagename)@(version)
比如 vue 包：
https://cdn.jsdelivr.net/npm/vue@3.2.0

比如 jquery 包，这个特殊因为有做压缩
https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js

### （3）esm 方式：通过网络访问某一个包的另一种方式
https://www.jsdelivr.com/esm

比如 d3 包
import _ as d3 from 'https://esm.run/d3';
比如 vue 包
import _ as vue from "https://esm.run/vue"

### （4）本机方法：ssh 文件到远程地址：scp 内容

scp 这些命令和权限相关使用 git 命令行工具使用
比如：远程堡垒机或是服务器地址已经知道
scp /var/www/test.php root@192.168.0.101:/var/www/
把本机/var/www/目录下的 test.php 文件上传到 192.168.0.101 这台服务器上的/var/www/目录中.
但是一般没有权限，所以如果公司有这种开启的 ssh 账号权限。

```
主机IP：10.30.3.100
目录：/home/jeejioui/apisdks
账号/密码：jeejioui

scp 源文件 jeejioui@10.30.3.100:/home/jeejioui/apisdks/
scp -r 源目录 jeejioui@10.30.3.100:/home/jeejioui/apisdks/
下面都是使用git工具
（1）如果在windows上面使用，需要生成一个ssh权限钥匙后，操作，在git命令行下面的内容
scp -i id_ed25519  dist/test.js jeejioui@10.30.3.100:/home/jeejioui/apisdks/

报错：Permissions for 'id_ed25519' are too open.这时候，在git操作命令行工具中git工具，执行：chmod 600 id_ed25519
原因：大多使用了非本机自动生成的密钥，导致其权限过大，无法正常使用，一般修改其权限600 即可继续使用。

（2）scp操作的时候，目录下面的权限
chmod 600 id_ed25519

（3）登录当前的内网地址

ssh -i id_ed25519 jeejioui@10.30.3.100

（4）直接地址访问
10.30.3.100/apisdks/test.js


```
