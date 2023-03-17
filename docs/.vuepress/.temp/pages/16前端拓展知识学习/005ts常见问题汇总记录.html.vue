<template><div><h2 id="_000tsconfig-ts-配置文件汇总说明" tabindex="-1"><a class="header-anchor" href="#_000tsconfig-ts-配置文件汇总说明" aria-hidden="true">#</a> 000tsconfig.ts 配置文件汇总说明</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
   // 指定需要编译文件 否则默认当前目录下除了exclude之外的所有.ts, .d.ts,.tsx 文件
   "include": ["./test.ts"],
   // 指定需要编译文件 否则默认当前目录下除了exclude之外的所有.ts, .d.ts,.tsx 文件
   "files": ["./src/**/*"],
   // 不编译某些文件
   "exclude": ["test.ts"],
   "compilerOptions": {
       // 只编译修改过的文件,这个时候会生成tsconfig.tsbuildinfo,下次编译的时候会进行对比只编译修改过的文件
       "incremental": true,
       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
       "target": "es5",
       // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
       "module": "commonjs",
       /* 注意：如果未指定--lib，则会注入默认的librares列表。注入的默认库为：
       对于 --target ES5: DOM,ES5,ScriptHost
       对于 --target ES6: DOM,ES6,DOM.Iterable,ScriptHost
       TS 绝不会在您的代码中注入polyfill,所以需要你自己制定编译lib
       */
       "lib": ["es5", "dom", "ScriptHost", "es2015.promise"],
       // 允许编译JS
       "allowJs": true,
       /*
       是否检测JS的语法,例如下面的语法编辑器会报错
       let name = 'paul';
       console.log(name.a.b)
       */
       "checkJs": true,
       // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
       "jsx": preserve,
       /*
       如果设为true，编译每个ts文件之后会生成一个js文件和一个声明文件,
       declaration和allowJs不能同时设为true
       */
       "declaration": true
       // 值为true或false，指定是否为声明文件.d.ts生成map文件
       "declarationMap": true
       // 用来指定编译时是否生成.map文件
       "sourceMap": true,
       // 当module设置为 'amd' and 'system'的时候可以使用此命令,这样可以将ts文件打包到一个目录下
       "outFile":"./",
       //  outDir 编译后的文件存到到哪个目录下,默认是每一个ts文件的当前目录,,下面的配置就是把ts编译到build目录下
       "outDir": './build',
       // 下面单独介绍
       "rootDir": "./src",
       // 是否编译构建引用项目,很复杂后面介绍
       "composite": true,
       // 指定文件用来存储增量编译信息,默认是tsconfig.tsbuildinfo
       "tsBuildInfoFile": "./",
       // 编译的时候删除注释
       "removeComments": true,
       // 不生成编译文件，这个一般比较少用,这个build目录下将没有任何文件,但是会进行编译,有错误会抛出
       "noEmit": true,
       // 是否引入npm包tslib中的辅助函数,__extends等
       "importHelpers": true,
       // 当target为'ES5' or 'ES3'时，为'for-of', spread, and destructuring'中的迭代器提供完全支持
       "downlevelIteration": true,
       // isolatedModules的值为true或false，指定是否将每个文件作为单独的模块，默认为true，它不可以和declaration同时设定
       // 不是很理解,将每一个文件作为单独模块
       "isolatedModules": true,
       /* Strict Type-Checking Options */
       // 严格模式将会打开下面的几个选项
       "strict": false,
       /*
       不允许变量或函数参数具有隐式any类型,例如
       function(name) {
           return name;
       }
       */
       "noImplicitAny": true,
       // null类型检测,const teacher: string = null;会报错
       "strictNullChecks": true,
       // 对函数参数进行严格逆变比较
       "strictFunctionTypes": true,
       // 严格检查bind call apply
       "strictBindCallApply": true,
       // 此规则将验证构造函数内部初始化前后已定义的属性。
       "strictPropertyInitialization": true,
       // 检测this是否隐式指定
       "noImplicitThis": true,
       // 使用js的严格模式,在每一个文件上部声明 use strict
       "alwaysStrict": true,
       /* Additional Checks */
       // 默认false,是否检测定义了但是没使用的变量
       "noUnusedLocals": true,
       // 用于检查是否有在函数体中没有使用的参数
       "noUnusedParameters": true,
       // 用于检查函数是否有返回值，设为true后，如果函数没有返回值则会提示
       "noImplicitReturns": true,
       // 用于检查switch中是否有case没有使用break跳出switch
       "noFallthroughCasesInSwitch": true,
       /* Module Resolution Options */
       // 用于选择模块解析策略，有'node'和'classic'两种类型
       "moduleResolution": "node",
       // 复杂的很 下面单独介绍这三个模块
       "baseUrl": './'
       "paths": {},
       "rootDirs": [],
       /* typeRoots用来指定声明文件或文件夹的路径列表，如果指定了此项，则只有在这里列出的声明文件才会被加载 */
       typeRoots: [],
       // types用来指定需要包含的模块，只有在这里列出的模块的声明文件才会被加载进来
       types:[],
       // 用来指定允许从没有默认导出的模块中默认导入
       "allowSyntheticDefaultImports": true,
       // 通过为导入内容创建命名空间，实现CommonJS和ES模块之间的互操作性
       "esModuleInterop": true ,
       // 不把符号链接解析为真实路径，具体可以了解下webpack和node.js的symlink相关知识
       "preserveSymlinks": true,
       "allowUmdGlobalAccess": true,

       // sourceRoot用于指定调试器应该找到TypeScript文件而不是源文件的位置，这个值会被写进.map文件里
       "sourceRoot": '',
       // mapRoot用于指定调试器找到映射文件而非生成文件的位置，指定map文件的根路径，该选项会影响.map文件中的sources属性
       "mapRoot",
       // inlineSourceMap指定是否将map文件内容和js文件编译在一个同一个js文件中，如果设为true,则map的内容会以//#soureMappingURL=开头，然后接base64字符串的形式插入在js文件底部
       "inlineSourceMap": true,
       // inlineSources用于指定是否进一步将ts文件的内容也包含到输出文件中
       "inlineSources": true,

       // experimentalDecorators用于指定是否启用实验性的装饰器特性
       "experimentalDecorators": true,

       // emitDecoratorMetadata用于指定是否为装上去提供元数据支持，关于元数据，也是ES6的新标准，可以通过Reflect提供的静态方法获取元数据，如果需要使用Reflect的一些方法，需要引用ES2015.Reflect这个库
       "emitDecoratorMetadata": true,
       // compileOnSave的值是true或false，如果设为true，在我们编辑了项目中的文件保存的时候，编辑器会根据tsconfig.json中的配置重新生成文件，不过这个要编辑器支持
       "compileOnSave": true,
       // 很复杂 下面介绍
       "references":[]",
   }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tsconfig-ts-常见配置说明" tabindex="-1"><a class="header-anchor" href="#tsconfig-ts-常见配置说明" aria-hidden="true">#</a> tsconfig.ts 常见配置说明</h3>
<h4 id="compileroptions-下的配置-target-module-lib-allowjs" tabindex="-1"><a class="header-anchor" href="#compileroptions-下的配置-target-module-lib-allowjs" aria-hidden="true">#</a> compilerOptions 下的配置：target,module,lib,allowJs</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
  "target": "es5",
  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
  "module": "commonjs",
  /*
    注意：如果未指定--lib，则会注入默认的librares列表。注入的默认库为：
    对于 --target ES5: DOM,ES5,ScriptHost
    对于 --target ES6: DOM,ES6,DOM.Iterable,ScriptHost
    TS 绝不会在您的代码中注入polyfill,所以需要你自己制定编译lib
  */
  "lib": ["es5", "dom", "ScriptHost", "es2015.promise"],
  // 允许编译JS
  "allowJs": true,



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在-ts-项目中用-eslint-和-ts-插件自动化注释体用修改建议" tabindex="-1"><a class="header-anchor" href="#在-ts-项目中用-eslint-和-ts-插件自动化注释体用修改建议" aria-hidden="true">#</a> 在 ts 项目中用 eslint 和 ts 插件自动化注释体用修改建议</h4>
<p>compilerOptions 中配置 plugins</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    "plugins": [{ "name": "tslint-language-service" }]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_001-解决全局安装-ts-后-console-log-不可以使用" tabindex="-1"><a class="header-anchor" href="#_001-解决全局安装-ts-后-console-log-不可以使用" aria-hidden="true">#</a> 001.解决全局安装 ts 后 console.log 不可以使用</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>以下两种方法任选其一即可：
1.ts-node 版本过高，降低一下版本就好了。

npm i -g ts-node@8.5.4
2.全局安装 ts-node 运行依赖包 tslib 和 @types/node。
npm i -g tslib @types/node


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_002-引入工具函数的方法报错如何解决" tabindex="-1"><a class="header-anchor" href="#_002-引入工具函数的方法报错如何解决" aria-hidden="true">#</a> 002.引入工具函数的方法报错如何解决</h2>
<p>import { UtilInterface } from '@/libs/types/util' // 工具函数接口
declare module 'vue/types/vue' { interface Vue { $util: UtilInterface, //这样声明，可在全局使用this.$util $baseUrl: string, } }</p>
<p>原因：Typescript 2.0 之后，TypeScript 将会默认的查看 ./node_modules/@types 文件夹，自动从这里来获取模块的类型定义.如果没有自己在项目中增加声明文件配合 typeRoot 设置类型文件夹。</p>
<h2 id="_003ts-2531-可能获取到对象为空-那么后面增加一个-非空断言" tabindex="-1"><a class="header-anchor" href="#_003ts-2531-可能获取到对象为空-那么后面增加一个-非空断言" aria-hidden="true">#</a> 003ts-2531 可能获取到对象为空：那么后面增加一个！，非空断言</h2>
<p>//加一个!，感叹号什么意思呢，它其实是 not null 的断言操作符，不执行运行时检查，告诉编译器只需要知道这个东西</p>
<h2 id="_004vue-中-ref-声明写法" tabindex="-1"><a class="header-anchor" href="#_004vue-中-ref-声明写法" aria-hidden="true">#</a> 004vue 中 ref 声明写法</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>第四处
初始化ref
  const itemsConditionArr = ref([] as any[]);
  或是
   const itemsConditionArr2 = ref({} as any);




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_004-读懂-ts-中-object-object-类型之间的区别" tabindex="-1"><a class="header-anchor" href="#_004-读懂-ts-中-object-object-类型之间的区别" aria-hidden="true">#</a> 004 读懂 TS 中 Object, object, {} 类型之间的区别</h2>
<p>TS 中的 Object 类型，包含了数组、函数和对象。</p>
<p>Object vs object
（1）类型 Object 包括原始值
function func1(x: Object) { }
func1('semlinker'); // OK</p>
<p>（2）类型 object 不包含原始值，只包含数组、函数和对象。
object 类型是：TypeScript 2.2 引入的新类型，它用于表示非原始类型
（3）空类型 {}，常用于类型声明
当访问一个空对象上给一个属性，会直接报错。
const obj = {};</p>
<p>// Error: Property 'prop' does not exist on type '{}'.
obj.prop = &quot;semlinker&quot;;
但是你仍然可以使用在 Object 类型上定义的所有属性和方法，比如 toString</p>
</div></template>
