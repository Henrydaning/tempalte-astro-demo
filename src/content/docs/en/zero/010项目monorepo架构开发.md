### 1.lerna 实现 monorepo 架构实现

- lerna-monorepo 架构实战

[lerna 项目架构管理汇总使用](https://gitee.com/nyhxiaoning/lerna-workspace-projects-demos.git)
如果某一个项目 yarn 安装不上，删除目录，重新创建子项目，重新安装
快速创建脚手架命令

#### 1.创建 Lerna 工程：

git init lerna-demo && cd lerna-demo && lerna init

#### 2.创建两个 package：

lerna create lerna-module1
lerna create lerna-module2

#### 3.package 中互相引用，怎么创建链接

比如 module2 使用了 module1 的包

lerna add module1 --scope module2
运行测试

```
lerna run  test  --scope=lerna-module1或是
lerna run  test  --scope lerna-module1或是
lerna run  test  packages/lerna-module1
```

### 2.pnpm 创建步骤 monrepo 项目方式

###### 新建根目录

首先 Monorepo 需要一个根项目，所以我们先创建一个根项目，他相当于一个容器，用来存放我们的子项目，所以这个根项目并不需要安装太多的依赖

```

脚手架自己选pnpm create vite
vanilla---vite纯脚手架
vue
React
lit---lit+vite脚手架
Preact


```

###### 创建 pnpm-workspace.yaml

新建 pnpm-workspace.yaml 文件，他的作用是：指定工作空间 workspace 的目录，里面的内容为：

```
packages:
  # 子项目存放的地方
  - 'packages/*'
  如果没有下面的可以放入一个包，其实怎么放都可以
  # 公用组件目录
  - 'components/**'
  # request目录
  - 'apis/**'
  # utils目录
  - 'utils/**'


```

###### 创建公用目录（建议是一个只含有脚手架的容器）

```
npm create vite

Project name: apis
Select a framework: › vanilla
Select a variant: › vanilla-ts

npm create vite

Project name: utils
Select a framework: › vanilla
Select a variant: › vanilla-ts

npm init vue@3

Project Name -> compnents
Typescript -> Yes
JSX -> Yes
Pinia -> Yes
Testing -> No
Eslint -> Yes


```

###### 子项目如何使用库：例如请求 api 库

https://mp.weixin.qq.com/s/y0cHuMxc7bC9Lhh5q2j5zQ

```
cd apis

npm i axios

创建和导出自己的apo封装代码后，
一般是接口请求拦截器和响应拦截器
然后src文件下，放一些模块的请求函数
在apis/src下创建：

request.ts---请求和响应拦截器
user.ts---api的封装接口

```

完成后，对于这个 apis 的包进行个性命令，因为这里的名称和版本号，决定了子项目引用时候这里的显示。

- 修改 name 和 version（在 package.json）

创建好之后，然后

###### 项目引用这个包的时候

```
首先进入某一个项:这里的package.json中的name就是这里的api-nyh名称
pnpm  install  apis-nyh -D
默认安装到生产环境。



- 项目测试使用api---注意这里有个使用方法
注意引入的时候，注意先把自己的版本删除，然后使用 pnpm  install  apis-nyh -D
如果是引用本地workspace的包，包名称前面加上@



比如下面
import { getUser，createUser } from 'apis-nyh'


如果上面不生效
首先引入包后，在包前面加上一个@，就可以随意的使用了，比如原来的包名称是apis-nyh
使用的时候必须加上@apis-nyh
这样，所有的包都可以一目了然的使用了，只要将整个项目用@xxxx引入以后，都是模块化的使用方式了



import { getUser，createUser } from '@api-ts'

注意打包后，其实是一个对象输出，
例如：多个导入一个对象（多个export仅仅适用于单个项目中，如果这个项目做lib库，那么只能导出一个对象，对象上挂属性或是方法）
//!!!注意这里的坑，被坑了
 export const userApi = {
    addFn: () => {
        return add
    },
    getUserFn: () => {
        return getUser
    },
    createUserFn: () => {
        return createUser
    },
    getCommentScheduleWeekFn: () => {
        return getCommentScheduleWeek
    },
    getCommentScheduleDayFn: () => {
        return getCommentScheduleDay
    },
    getSingleMusicDetailsFn: () => {
        return getSingleMusicDetails
    },
};

```

###### 加快执行构建速度的 vue3 框架命令--skipLibCheck

```
一般项目vue3安装后，有一个脚本build，如下，但是有时候执行检查总是报错，那么可以跳过
pnpm i @test/utils -r --filter web-vite-client
"build": "vue-tsc --noEmit --skipLibCheck && vite build"


scripts.build 字段，原来里面执行了两条命令 vue-tsc --noEmit && vite build ，嗯？这个 vue-tsc 是干嘛的，查找了一下原来是对 vue 3 的一个类型检测工具，然后我尝试单独执行 vue-tsc --noEmit ，上面的报错出现了，原来是 vue-tsc 引起的错误。



```

###### 包安装操作

```
 把包安装在哪里
 -w 表示把包安装在 root 下，该包会放置在 <root>/node_modules 下。
 当然也可以把把安装在所有 packages 中，使用 -r 代替 -w。你必须使用其中一个参数。
 例如把 dayjs 装入 packages/web 下，packages/web 中的 package.json name 为 @test/web。
 需要执行：pnpm i dayjs -r --filter @test/web

命令如下
把包安装到所有的项目
pnpm i dayjs -r

把包安装在web-vite-client项目(项目名称package的name字段)
pnpm i color -r --filter web-vite-client



我们开发好apis包之后安装到web-vite-client中

pnpm i @nyh/apis -r --filter web-vite-client

pnpm i axios -r --filter @test/utils
pnpm i json-bigint -r --filter @test/utils
pnpm i @test/utils -r --filter web-vite-client


更新

pnpm up apis-ts -r --filter vue3-components
```

#### pnpm 项目配置需要增加配置全局 ts.config.json:注意第一点

```
全局的tsconfig.json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "lib": ["ESNext", "DOM", "DOM.Iterable", "webworker"],
    "moduleResolution": "Node",
    "esModuleInterop": true,---------允许当前的es模块
    "strict": true,
    "allowJs": true,
    "declaration": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "noEmitOnError": true,
    "noUnusedLocals": false,
    "noImplicitAny": false,
    "declarationMap": true,-------------为源文件创建一个d.ts生命
    "isolatedModules": true
  },
  "references": [------------------这部分放一些相关的package包的引用，这里做关系的连接，如果包之间有引用关系
    { "path": "packages/apis-ts" },
    { "path": "packages/vue3-components" },
    { "path": "web-vue3-vite-meituan-ts" }
  ]
}

```

#### 注意第二点：作为 utils 请求库，如果进行打包，配置 tsconfig 和 package

```
tsconfig.json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "composite": true,------这个属性
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["./src"]
}

package.json中配置：最后打包的类型（同时得益于全局tsconfig配置，declarationMap会生成.d.ts，自己不用创建了d.ts了）
{
    "name": "foo",
    "author": "Vandelay Industries",
    "version": "1.0.0",
    "main": "./lib/foo.js",
    "typings": "./lib/foo.d.ts"
}
这里typeing是读取类型文件的路径，这个作为模块或是对外包的时候使用。
访问的时候尝试加载代码包路径下dist下的index.d.ts文件，这个文件也包含了文件类型信息。


```

### 3.lerna 实现 monorepo 和 pnpm 实现 monorepo 区别

（1）leran
yarn + lerna 的组合已经是现在 monorepo 的通用方案，也是功能最多，最火的方案，使用这套方案绝对是正确的。

但是其上手存在一定的门槛，相比 pnpm 这种自带 workspace 的方案，在效率上不能匹敌。

#### lerna 架构老版本缺点，

（1）新入门 monorepo 的小白来说，光搞清单独使用 lerna 和 yarn + workspace + lerna 的区别，就足够吃一壶的了。
同时 package.json 明确指明 workspace 位置

两个地方维护 workspace。

（2）yarn + lerna 中的方案是配置自动抬升，这种方案会存在依赖滥用的问题

#### pnpm 架构 monorepo

先在项目根目录建立一个 pnpm 的 workspcae 配置文件 pnpm-workspace.yaml。

```
配置一些好用的指令
么在项目根目录 package.json 配置项目启动命令：

"scripts": {
    "dev:app1": "pnpm start --filter \"@mono/app1\"",
    "dev:app2": "pnpm start --filter \"@mono/app2\""
},

这里 --filter 参数即特定要作用到哪个子项目，详见：pnpm 过滤


```

### 4.项目强制只可以使用某一个安装包。---使用一个脚本 preinstall 

强制检查当前的包管理工具：only-allow配置检查package.json中preInstall钩子
only-allow 安装后，
配置使用
~~~
只能使用npm
{
  "scripts": {
    "preinstall": "npx only-allow npm"
  }
}

智能使用pnpm

{
  "scripts": {
    "preinstall": "npx only-allow pnpm"
  }
}


~~~

通过npm的文档我了解到，在scripts中，npm提供了一系列的生命周期钩子（Life Cycle Scripts），它们只在特定情形下触发，
而且，更进一步的是，也允许用户创建自定义的钩子，并通过 pre-和post-前缀，可以在执行特定scirpts时，附加执行一些前置或者后置的程序。


下面存疑，因为测试了一下，可以通过安装only-allow进行检查，不会不支持。
~~~
废弃知识。
pnpm的处理和npm和yarn都不太一样，它认为支持用户自定义的scripts使用pre和post前缀容易引起误解，而且可能会导致部分人在毫无知觉的情形下执行了他们并不想执行的程序，因此pnpm默认不支持用户自定义scirpts的pre和post前缀。
~~~