[[toc]]


## 1.新的ES标准的实现XXX---test测试
~~~
- ？？用于判断当前的值不是null或undefined，如果是，就用后面的值。

- ？.是否有属性的判断如果没有当前的属性，可以不去使用，避免报错

- 还有一个高级使用{}
一般使用
let obj = {name:'每日',age:23,sex:"男性"}
let {name} = obj;

如果想要先声明一下使用，需要加上（）小括号
let name,age;
({name,age} = obj)


~~~


## 2.ES2022新增
~~~
ECMA 国际组织批准 ECMAScript 2022：一些新的功能
为类添加新的成员---------------？
通过 in 运算符进行私有属性检查
顶级模块中的 await
error.cause 指出导致错误的原因
String/Array/类数组增加 .at()
正则表达式匹配索引
Object.hasOwn(obj, propKey)，一种安全的方式来检查对象是否具有自己的非继承的属性

Array.prototype.find()
The find() method returns the first element     
~~~