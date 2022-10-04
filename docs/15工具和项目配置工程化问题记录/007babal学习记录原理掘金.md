[toc]


# bebel语法转换网站
[网站1](https://link.juejin.cn/?target=https%3A%2F%2Fastexplorer.net%2F)



## 1.vscode的debugger的学习记录

直接点击上面的调试面板，创建一个launch




## 2.babel的学习记录课程准备




### babel的用途
#### （1）转译 esnext、typescript、flow 等到目标环境支持的 js；
a.这个是最常用的功能，用来把代码中的 esnext 的新的语法、typescript和flow 的语法转成基于目标环境支持的语法的实现。b.还可以把目标环境不支持的 api 进行 polyfill。

c.经典案例//TODO:
// TODO: !!! 待补充
#### (2)一些特定用途的代码转换
a.babel 是一个转译器，暴露了很多 api，用这些 api 可以完成代码到 AST 的 parse
b.AST 的转换
c.以及目标代码的生成。
d.特定用途的转换
自动在函数中插入代码；
自动国际化；
自动将default import 转换成named import；
自动埋点功能
e.taro框架就是使用babel的api实现的

#### （3）代码的静态分析
对于代码进行parse后，可以进行转换了，因为通过AST可以理解代码。
a.linter工具分析代码的AST结构；
b.api文档生成工具，可以提取源码中的注释，然后生成文档；
c.type checker会根据AST中提取的类型，推导类型信息
d.压缩混淆工具，可以分析代码的结构，进行无用代码的删除，变量名的混淆，


### 上面的相关章节的汇总代码地址
[代码地址](https://github.com/QuarkGluonPlasma/babel-plugin-exercize)



### 3.babel的编译流程

#### （1）babel实质是一个转译器。

一般编译器是高级语言到底层语言的转换工具。对于高层语言到高层语言的转换，叫做转译器。
#### （2）bebel转译流程
a.parse：通过parser把源码转换成抽象语法树；（目的将源码字符串转成计算机可以理解的AST，这个过程分为词法分析和语法分析）
b.transform:遍历AST,调用各种transform插件对于AST进行增删改；(AST是计算机可以理解的字符串意思)
c.generate:把转换后的AST打印成目标代码，生成source-map

[babel的解析过程说明](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03bdbe8096944a0fa09c86ac2ff09e56~tplv-k3u1fbpfcp-watermark.image
)

s说明：soursemap记录源码到目标代码的转换关系，通过这个sourcemap可以找到目标代码中每一个节点对应的源码。

### 3.babel的AST
AST是对于源码的抽象，字面量，标识符，表达式，语句，模块语法，class语法都有各自的AST，我们分别来了解一下。

#### literal 字面量
字符串的字面量比如：let name = 'str';//这里'str'就是字符串的字面量；

[js中各种字面量](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29185815036a4ea1878484ba773a3b6e~tplv-k3u1fbpfcp-watermark.image)


#### identifier标识符：变量名，属性名，参数名
标识符包含的内容有很多，变量名，属性名，参数名等等各种声明和引用的名字，都是identifier。我们知道js中标识符只能用字母或是数字或是下划线或是美元符号，同时不能够用数字开头。

#### statement语句
最小的独立执行单元。

#### declaration声明语句
作用：用于定义变量。
声明语句是一种特殊的语句，它执行的逻辑是在作用域内声明一个变量、函数。class,import,export
#### Expression表达式
特点：执行完成后有返回值。TODO:这个是和语句的区别

[常见表达式说明](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/feabcb940982409b911dcbb6066e8aa7~tplv-k3u1fbpfcp-watermark.image)

其实有的既可以是语句，也可以是表达式。语句的特点是最小执行单元，可以独立运行，表达式有返回值。所以对于identifier来说，都是符合。
当然，其他都是符合的，比如匿名函数直接执行，会报错。匿名类也是不可以直接的声明。

#### class语法特殊有专门的AST来作为使用。

[class抽象语法树](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0c62ec375157488780e2beae39e7620d~tplv-k3u1fbpfcp-watermark.image)

Modules也有专门的AST语法树
import有三种导入方法
named import:命名函数导入：import { nameFn } from "xxx"
default import:默认方法导入： import a from 'xxx'// 注意这里是因为export default xxx
namespaced import:命名空间导入: import * as b from 'b';//就是将所有的模块的方法全部导入，放到b这个下面调用
第三种方法对应的是：export * from 'b';这样才可以解析正确。

//

#### program和directive
Program 是包裹具体执行语句的节点，而 Directive 则是代码中的指令部分。
program是表示整个程序的节点，他有body代表执行的程序体，里面放着将要执行的函数的集合。

directive指令，表示记录一些指令，比如use strict就是存储在这里。

AST中的tokens是词法分析结果么.(就是一个个小小的单词)
#### File & Comment
babel 的 AST 最外层节点是 File，它有 program、comments、tokens 等属性，分别存放 Program 程序体、注释、token 等，是最外层节点。

#### 6 种就是常见的一些 AST 节点类型，babel 就是通过这些节点来抽象源码中不同的部分。




#### babel的api学习

> 注意，我们学习的 api 是 babel 7.x 的，babel 6 的 api 还没有按照scope 来划分，是 babel-parser 这种，
> 而 babel 7 变成了@babel/parser 这种。但具体 api 差不多，我们学的是一些原理性的东西，这些东西在版本迭代中是不会变的。
> 