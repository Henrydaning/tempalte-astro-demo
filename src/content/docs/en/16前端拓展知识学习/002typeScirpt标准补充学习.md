![成长](/images/home.png)




  


### 000ts中很多项目工程引入一些库报错

【在typesearch查询后安装](https://www.typescriptlang.org/dt/search?search=)
~~~

npm install --save @types/ui-grid

然后引用即可

import { IUiGridConstants } from 'ui-grid';


~~~

方法2：通过
## 网上前端typeSciript入门学习基础---复习基础常用

~~~
// 1. 自己定义变量可以设置基本类型
let courseName:string = '玩转Vue3全家桶'
let price:number = 129
let isOnline:boolean = true
let courseSales:undefined
let me:[string,number] = ["大圣",18];//定义元祖类型
//元组就是类型个数固定和类型都不固定的数组
// 2. 对象类型---声明对象
interface course {
    name:string,
    price:number[],
    avatar?:string|boolean,
    readonly address:string
}
//3 函数类型---声明函数类型
type addType = (a:number,b:number)=>number
interface addType1{
    (a:number,b:number):number
}
let add2:addType  = function(x: number, y: number): number {
    return x + y;
}
// 4. 宿主环境的类型TS提供了
let w:Window = window
let ele:HTMLElement = document.createElement('div')
ele.addEventListener('click',function(e:MouseEvent){
    w.alert(1)
},false)

// 5 泛型 （难点）
// <T>就是<某种类型>的意思，就是定义了一个类型变量，通过extends控制类型

function test<某种类型>(args:某种类型):某种类型{
    return args
}
// 别名使用
type ExtendsType<T> = T extends boolean ? "重学前端" : "玩转Vue3"
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]
}
//解释这里的infer类型含义,infer是推导出泛型类型
type ReturnType1<T> = T extends ()=>infer P ?P:never 

// 6. 用到框架中的源码
import {ref, Ref} from 'vue'
const props = defineProps<{ title: string value?: number}>()

interface Todo{
  title:string,
  done:boolean
}
let todos:Ref<Todo[]> = ref([{title:'学习Vue',done:false}])

const App: React.FC<IProps> = (props) => {
  const [count, setCount] = useState<number>(1)
  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>{count}</h2>
    </div>
  );
}
// 7.网络接口的类型
// 限制前后端接口的Typescript类型，限制参数传递，前后端联调爽歪歪
import axios from 'axios'
function request<T extends keyof API>(url:T,obj:Api[T]){
    return axios.post(url,obj)
}
interface Api{
    '/course/buy':{
        id:number
    },
    '/course/comment':{
        id:number,
        message:string
    }
}
request('/course/buy',{id:1})
request('/course/comment',{id:1,message:'嘎嘎好看'})
request('/course/comment',{id:1}) //如果message必传 类型提醒缺少参数
request('/course/404',{id:1}) //接口不存在 类型报错




~~~


## 2.常用关键字的高级使用


### keyof关键字

~~~

--------
keyof---------
keyof  interface或是对象是将对象key值拿出来
keyof any  则是：string | number |symbol
例如
interface iUserInfo{
  name:string,
  age:number
}

type keys = keyof iUserInfo;
keyof提取interface中的所有类型，生成一个联合类型
---------

~~~


### typeof
给类型起别名

~~~
优秀案例



~~~

### in 用于取联合类型的值，主要用于数组和对象的构造
~~~
in用于取联合类型的值。主要用于数组和对象的构造。
案例1常见
type Person = "name" | "school" | "major"

type Obj =  {
  [p in Person]: string
}
表示拿出这三个类型名称值，然后作为key,类型都是string
~~~


### 四种特殊类型
void 代表空，可以是 null 或者 undefined，一般是用于函数返回值。
any是任意类型，任何类型都可以赋值给它，它也可以赋值给任何类型。
unknown是未知类型，任何类型都可以赋值给它，但是它不可以赋值给别的类型。
never代表不可达，比如函数抛异常的时候，返回值就是never。


## 3.实用案例补充
### 定义泛型相关

~~~
定义一个数组，使用泛型定义。
let arr:Array<number> = [11,22,44]
不使用泛型定义一个数组
let  arr2:number[] = [1,3,5]


~~~

### 声明比较复杂的对象数组
~~~
//拿出需要声明的类型属性
type Person = "name" | "school" | "major"

export type  Obj =  {
  [p in Person]: string
}
导入后，直接使用
//进行定义声明
let myarr:Obj[]=[{"name":'3',"major":'3',school:'3'}]



~~~

### infer 的作用一言蔽之：推导泛型参数
推导出泛型参数
~~~
type  numberPromise = Promise<number>;
type n = numberPromise extend Promise<infer P>?P:never;
//此时推导出n的类型是number,实质就是type n = number;

~~~


## 4.接口和class一起使用定义的方式
使用interface定义基类，然后可以使用class 来implements实现这个接口。

虽然简单方式interface和class都可以定义一个类型。
~~~
/**
 * 选择组件项接口
 */
export interface IGrouping {
    /**
    * 正序
   */
    positiveeOrder: boolean,

    /**
     * 项id
    */
    property: string
}

/**
 * 选择组件项实体
 */
export class SelectItemEntity implements IGrouping {
    constructor() {
        this.positiveeOrder = true
        this.property = ''

    }
    positiveeOrder: boolean
    property: string
}

~~~




## interface和type的区别




### 每日ts汇总基础---基础复习版本
[基础入门学习](https://juejin.cn/post/7018805943710253086#heading-11)
### js的八种内置类型的表示
~~~

let str: string = "jimmy";
let num: number = 24;
let bool: boolean = false;
let u: undefined = undefined;
let n: null = null;
let obj: object = {x: 1};
let big: bigint = 100n;
let sym: symbol = Symbol("me"); 


~~~


### null和undefined是所有类型的子类型。
可以将null和undefined赋值给其他类型


### 数组两种定义
~~~
let arr:string[] = ["1","2"];
let arr2:Array<string> = ["1","2"]；


~~~


### 定义对象数组成员的接口
~~~

// interface是接口,后面会讲到
interface Arrobj{
    name:string,
    age:number
}
let arr3:Arrobj[]=[{name:'jimmy',age:22}]


~~~


### 可选参数
~~~
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

~~~

### 参数默认值

~~~
function buildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');


~~~

## 5.typescript的配置文件说明记录

~~~
{
    "compilerOptions": {
      "allowUnreachableCode": true, // 不报告执行不到的代码错误。
      "allowUnusedLabels": false, // 不报告未使用的标签错误
      "alwaysStrict": false, // 以严格模式解析并为每个源文件生成 "use strict"语句
      "baseUrl": ".", // 工作根目录
      "experimentalDecorators": true, // 启用实验性的ES装饰器
      "jsx": "react", // 在 .tsx文件里支持JSX
      "sourceMap": true, // 是否生成map文件
      "module": "commonjs", // 指定生成哪个模块系统代码
      "noImplicitAny": false, // 是否默认禁用 any
      "removeComments": true, // 是否移除注释
      "types": [
        //指定引入的类型声明文件，默认是自动引入所有声明文件，一旦指定该选项，则会禁用自动引入，改为只引入指定的类型声明文件，如果指定空数组[]则不引用任何文件
        "node" // 引入 node 的类型声明
      ],
      "paths": {
        // 指定模块的路径，和baseUrl有关联，和webpack中resolve.alias配置一样
        "src": [
          //指定后可以在文件之直接 import * from 'src';
          "./src"
        ]
      },
      "target": "ESNext", // 编译的目标是什么版本的
      "outDir": "./dist", // 输出目录
      "declaration": true, // 是否自动创建类型声明文件
      "declarationDir": "./lib", // 类型声明文件的输出目录
      "allowJs": true, // 允许编译javascript文件。
      "lib": [
        // 编译过程中需要引入的库文件的列表
        "es5",
        "es2015",
        "es2016",
        "es2017",
        "es2018",
        "dom"
      ]
    },
    // 指定一个匹配列表（属于自动指定该路径下的所有ts相关文件）
    "include": ["src/**/*"],
    // 指定一个排除列表（include的反向操作）
    "exclude": ["demo.ts"],
    // 指定哪些文件使用该配置（属于手动一个个指定文件）
    "files": [
      // "demo.ts"
    ]
  }
~~~

### 优化版分类说明

~~~
{
  "compilerOptions": {

    /* 基本选项 */
    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [],                             // 指定要包含在编译中的库文件
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outFile": "./",                       // 将输出文件合并为一个文件
    "outDir": "./",                        // 指定输出目录
    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
    "removeComments": true,                // 删除编译后的所有的注释
    "noEmit": true,                        // 不生成输出文件
    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
    "isolatedModules": true,               // 将每个文件作为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true,                        // 启用所有严格类型检查选项
    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true,              // 启用严格的 null 检查
    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                       // 包含类型声明的文件列表
    "types": [],                           // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true,        // 启用装饰器
    "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
  }
}
~~~





### （1）配置ts-node编译ts代码在tsconfig.json

ts-node包装了node，它可以直接运行ts代码。使用起来会很方便。为了提高执行速度，默认不会读取 `tsconfig.json` 中的 `files`, `include` 和 `exclude` 字段。

ts-node基于模块依赖读取声明字段，这会导致全局的d.ts文件不会被读取。

~~~
加载ts-node的时候，加上参数ts-node --files


~~~



### （2）为什么将文件放入了exclude中，编译的时候，还可以被选中。

tsconfig.json将文件夹转换为项目，如果不指定任何exclude和files，那么默认包含所有文件。

注意：exclude只是忽略文件夹。如果想要忽略文件，使用files字段。

tsc --listFiles命令可以列出所有编译时候包含的文件

`tsc --traceResolution` 来看看它们为什么会被包含在编译中





### （3）声明文件

三斜线语法，只能与哦那个与d.ts文件中，

~~~
三斜线指令仅可放在包含它的文件的最顶端，不含注释，否则仅当注释处理
方法一：用路径声明依赖的
/// <reference path="..." />
方法二：声明对某个包的依赖。
/// <reference types="..." />

~~~





### （4）reference引用高级使用

#### demo：在monorepo中引用不同项目

~~~
  "references": [
    {
      "path": "packages/apis-ts"
    },
    {
      "path": "packages/vue3-components"
    },
    {
      "path": "packages/web-vue3-vite-meituan-ts"
    }
  ]
~~~



### （5）tsconfig.json中lib表示指定包含在编译中的库文件

我们可以选择性的指定编译在库文件，这样减少运行时候报错。

也可以一劳永逸的安装一个tslib这样不用配置lib了。

（检查运行时候的所有声明）















## 常用的ts内容学习复习资源

### （1）个人processOn的ts记录



### （2）在线深入理解ts

[tsconfig.json 的行为 | 深入理解 TypeScript (jkchao.github.io)](https://jkchao.github.io/typescript-book-chinese/faqs/tsconfig-behavior.html#为什么把一个文件放入「exclude」选项中，它仍然会被编译器选中？)