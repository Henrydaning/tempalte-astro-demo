<template><div><p><img src="/images/home.png" alt="成长"></p>
<nav class="table-of-contents"><ul><li><RouterLink to="#回到博客主页">回到博客主页</RouterLink><ul><li><RouterLink to="#vue源码中的ts类型使用">vue源码中的ts类型使用</RouterLink></li></ul></li><li><RouterLink to="#_0一些ts基础知识汇总">0一些ts基础知识汇总</RouterLink><ul><li><RouterLink to="#在-typescript-中-我们使用接口-interfaces-来定义对象的类型。">在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。</RouterLink></li><li><RouterLink to="#js中类的概念总结">js中类的概念总结</RouterLink></li><li><RouterLink to="#类与接口">类与接口</RouterLink></li><li><RouterLink to="#接口继承类">接口继承类</RouterLink></li><li><RouterLink to="#声明-class-point-时-除了会创建一个名为-point-的类之外-同时也创建了一个名为-point-的类型-实例的类型-。">声明 class Point 时，除了会创建一个名为 Point 的类之外，同时也创建了一个名为 Point 的类型（实例的类型）。</RouterLink></li><li><RouterLink to="#经典案例对于interface声明接口和class声明接口的最好案例">经典案例对于interface声明接口和class声明接口的最好案例</RouterLink></li><li><RouterLink to="#经典全局变量的方法拓展-拓展array和number">经典全局变量的方法拓展，拓展Array和Number</RouterLink></li><li><RouterLink to="#泛型-定义函数-接口或是类的时候-不预先指定具体类型">泛型：定义函数，接口或是类的时候，不预先指定具体类型，</RouterLink></li><li><RouterLink to="#元祖的使用">元祖的使用</RouterLink></li></ul></li><li><RouterLink to="#_1-基本ts的类型定义汇总分类">1.基本ts的类型定义汇总分类：</RouterLink><ul><li><RouterLink to="#定义泛型进行接口类型定义">定义泛型进行接口类型定义</RouterLink></li><li><RouterLink to="#对于数组泛型">对于数组泛型</RouterLink></li></ul></li><li><RouterLink to="#常见一些ts用法术语和案例。">常见一些ts用法术语和案例。</RouterLink><ul><li><RouterLink to="#类型定义别名">类型定义别名</RouterLink></li><li><RouterLink to="#类型断言用法-使用as">类型断言用法，使用as</RouterLink></li><li><RouterLink to="#ts中使用双重断言">ts中使用双重断言</RouterLink></li><li><RouterLink to="#看到标题可能很多同学会有疑问-为什么要断言为-any-类型-之前不是说要尽量让类型明确吗。">看到标题可能很多同学会有疑问，为什么要断言为 any 类型？之前不是说要尽量让类型明确吗。</RouterLink></li><li><RouterLink to="#枚举">枚举</RouterLink></li></ul></li><li><RouterLink to="#xxx-和xxx-区别">xxx[]和xxx&lt;&gt;区别</RouterLink></li><li><RouterLink to="#vue中拓展工具库函数">vue中拓展工具库函数</RouterLink></li><li><RouterLink to="#在-typescript-中-我们使用接口-interfaces-来定义对象的类型。-1">在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。</RouterLink></li></ul></nav>
<h2 id="回到博客主页" tabindex="-1"><a class="header-anchor" href="#回到博客主页" aria-hidden="true">#</a> 回到博客主页</h2>
<p><RouterLink to="/">博客首页</RouterLink></p>
<ul>
<li>第一步基本使用知识</li>
<li>第二步vue中使用场景</li>
</ul>
<h3 id="vue源码中的ts类型使用" tabindex="-1"><a class="header-anchor" href="#vue源码中的ts类型使用" aria-hidden="true">#</a> vue源码中的ts类型使用</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
import {ref, Ref} from 'vue'
const props = defineProps&lt;{ title: string value?: number}>()

interface Todo{
  title:string,
  done:boolean
}
let todos:Ref&lt;Todo[]> = ref([{title:'学习Vue',done:false}])


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0一些ts基础知识汇总" tabindex="-1"><a class="header-anchor" href="#_0一些ts基础知识汇总" aria-hidden="true">#</a> 0一些ts基础知识汇总</h2>
<h3 id="在-typescript-中-我们使用接口-interfaces-来定义对象的类型。" tabindex="-1"><a class="header-anchor" href="#在-typescript-中-我们使用接口-interfaces-来定义对象的类型。" aria-hidden="true">#</a> 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};

------------高级用法



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js中类的概念总结" tabindex="-1"><a class="header-anchor" href="#js中类的概念总结" aria-hidden="true">#</a> js中类的概念总结</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>- 类（Class）：定义了一件事物的抽象特点，包含它的属性和方法
- 对象（Object）：类的实例，通过 new 生成
- 面向对象（OOP）的三大特性：封装、继承、多态
封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat
存取器（getter &amp; setter）：用以改变属性的读取和赋值行为
修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法
抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
- 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口







</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类与接口" tabindex="-1"><a class="header-anchor" href="#类与接口" aria-hidden="true">#</a> 类与接口</h3>
<p>接口对于对象形状进行描述。
通过类来实现（implement）接口</p>
<h3 id="接口继承类" tabindex="-1"><a class="header-anchor" href="#接口继承类" aria-hidden="true">#</a> 接口继承类</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明-class-point-时-除了会创建一个名为-point-的类之外-同时也创建了一个名为-point-的类型-实例的类型-。" tabindex="-1"><a class="header-anchor" href="#声明-class-point-时-除了会创建一个名为-point-的类之外-同时也创建了一个名为-point-的类型-实例的类型-。" aria-hidden="true">#</a> 声明 class Point 时，除了会创建一个名为 Point 的类之外，同时也创建了一个名为 Point 的类型（实例的类型）。</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>（这也是为什么接口继承类）
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

function printPoint(p: Point) {
    console.log(p.x, p.y);
}

这里Point可以是一个类型使用。
补充这里interface声明接口非常简单：就是函数和属性。
因为class声明的Point类创建的Point类型不包含构造函数，静态属性和方法。
所以其实class使用类的继承或是对象的时候，只会是使用当前的属性和方法。



因此，很多泛型的使用。
Array&lt;Point>;//内部元素是Point接口


总结：interface和class都可以声明接口，定义类型。
class本质实现是构造函数类型。
这里注意：class中如果是对于接口类型的声明，只做接口，其实只需要一些属性和方法，其他的作为类实质使用，不是作为
类型接口使用。
因为interface接口声明比较纯粹，就是属性和方法。或是对于class的实现（实例化当前的属性和方法）
interface Point3d extends Point {
    z: number;
}
//当前的接口类型继承Point类。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="经典案例对于interface声明接口和class声明接口的最好案例" tabindex="-1"><a class="header-anchor" href="#经典案例对于interface声明接口和class声明接口的最好案例" aria-hidden="true">#</a> 经典案例对于interface声明接口和class声明接口的最好案例</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
class Point {
    /** 静态属性，坐标系原点 */
    static origin = new Point(0, 0);
    /** 静态方法，计算与原点距离 */
    static distanceToOrigin(p: Point) {
        return Math.sqrt(p.x * p.x + p.y * p.y);
    }
    /** 实例属性，x 轴的值 */
    x: number;
    /** 实例属性，y 轴的值 */
    y: number;
    /** 构造函数 */
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    /** 实例方法，打印此点 */
    printPoint() {
        console.log(this.x, this.y);
    }
}

interface PointInstanceType {
    x: number;
    y: number;
    printPoint(): void;
}


let p1: Point;
let p2: PointInstanceType;
----------------注意：这里的Point和PointInstanceType是一样的-------------
不过一个小区别注意一下，在接口定义的时候，
注意：interface是定义的只是函数的类型，不能有实现。
接口是对于类型的抽象定义，类是对于函数或是属性的实现（ts中特殊，类可以作为接口类型）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="经典全局变量的方法拓展-拓展array和number" tabindex="-1"><a class="header-anchor" href="#经典全局变量的方法拓展-拓展array和number" aria-hidden="true">#</a> 经典全局变量的方法拓展，拓展Array和Number</h3>
<h4 id="拓展array" tabindex="-1"><a class="header-anchor" href="#拓展array" aria-hidden="true">#</a> 拓展Array</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>文件名称：type.ts; //扩展函
declare interface Array&lt;T> {
    /**
     * 获取数组第一个元素
     */
    first(this: T[]): T;
    /**
    * 获取数组最后一个元素
    */
    last(this: T[]): T;
    /**
    * 通过索引移除元素
    * @parpam index：索引
    */
    removeAt(this: T[], index: number): void;
    /**
     * 移除指定元素
     * @parpam item：需要移除得元素
     */
    remove(this: T[], item: T): void;
}

下面写一些内容
Array.prototype.first = function &lt;T>(this: T[]): T {
    return this[0];
};

Array.prototype.last = function &lt;T>(this: T[]): T {
    return this[this.length - 1];
};


Array.prototype.removeAt = function &lt;T>(this: T[], index: number) {
    if (index > -1)
        this.splice(index, 1);
};

然后main.js引入
import "./type.ts"; //扩展函数




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型-定义函数-接口或是类的时候-不预先指定具体类型" tabindex="-1"><a class="header-anchor" href="#泛型-定义函数-接口或是类的时候-不预先指定具体类型" aria-hidden="true">#</a> 泛型：定义函数，接口或是类的时候，不预先指定具体类型，</h3>
<p>而是在使用的时候，再指定类型</p>
<h4 id="定义一个泛型数组" tabindex="-1"><a class="header-anchor" href="#定义一个泛型数组" aria-hidden="true">#</a> 定义一个泛型数组</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>定义一个泛型数组let arr2 :Array&lt;number> = [111,345,5]


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="定义一个泛型函数接口" tabindex="-1"><a class="header-anchor" href="#定义一个泛型函数接口" aria-hidden="true">#</a> 定义一个泛型函数接口</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>interface createSearch2&lt;T>{
    (length:number,value:T):Array&lt;T>
}
--------使用
let createArray: createSearch2&lt;any>;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="泛型默认参数" tabindex="-1"><a class="header-anchor" href="#泛型默认参数" aria-hidden="true">#</a> 泛型默认参数</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function  createArray(length,number){}的ts优化使用

function createArray&lt;T = string>(length: number, value: T): Array&lt;T> {
    let result: T[] = [];
    for (let i = 0; i &lt; length; i++) {
        result[i] = value;
    }
    return result;
}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元祖的使用" tabindex="-1"><a class="header-anchor" href="#元祖的使用" aria-hidden="true">#</a> 元祖的使用</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>简单案例：// TODO:元组
let  ttom: [string,number] = ['to1m',1212];

注意定义数组：
- 第一种：定义一个数组let arr2 :Array&lt;number> = [111,345,5];---泛型默认参数传入number
- 第二种：let fab:number[] = [11,2,4,5]；---类型挂在[]前面


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-基本ts的类型定义汇总分类" tabindex="-1"><a class="header-anchor" href="#_1-基本ts的类型定义汇总分类" aria-hidden="true">#</a> 1.基本ts的类型定义汇总分类：</h2>
<p>ref和reactive初始化变量的汇总</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义泛型进行接口类型定义" tabindex="-1"><a class="header-anchor" href="#定义泛型进行接口类型定义" aria-hidden="true">#</a> 定义泛型进行接口类型定义</h3>
<h3 id="对于数组泛型" tabindex="-1"><a class="header-anchor" href="#对于数组泛型" aria-hidden="true">#</a> 对于数组泛型</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>案例1： /** 视图集合 */
 const views = ref([] as ViewEntity[])

        /** 菜单完整数据 */
        const menu = ref({} as MenuEntity)


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见一些ts用法术语和案例。" tabindex="-1"><a class="header-anchor" href="#常见一些ts用法术语和案例。" aria-hidden="true">#</a> 常见一些ts用法术语和案例。</h2>
<h3 id="类型定义别名" tabindex="-1"><a class="header-anchor" href="#类型定义别名" aria-hidden="true">#</a> 类型定义别名</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>type NameOf = eventname | nameover;




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型断言用法-使用as" tabindex="-1"><a class="header-anchor" href="#类型断言用法-使用as" aria-hidden="true">#</a> 类型断言用法，使用as</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const queryObj = {} as any;

粗糙的定义。
vue中
const menu = ref({} as MenuEntity)

这里看MenuEntity是一个对象实体。

/**
 * 菜单接口
 */
export interface IMenu {
    /**菜单的唯一标识 */
    id: string
    /**菜单的父级节点标识 */
    parentId: string | undefined
    /**菜单的名称 */
    name: string
    /**
     * 菜单的类型
     * @catalog 目录, 
     * @list 表格,
     * @doc 文档
    */
    type: string
    /** 扩展字段 */
    extend: any,
    children: MenuEntity[]
}
/**
 * 菜单项实体：对于类的对象实现。
 */
export class MenuEntity implements IMenu {
    constructor(id: string) {
        this.id = id;
        this.name = "";
        this.type = "";
        this.children = []
    }
    children: MenuEntity[];
    id: string;
    parentId: string | undefined;
    name: string;
    type: string;
    extend: any
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ts中使用双重断言" tabindex="-1"><a class="header-anchor" href="#ts中使用双重断言" aria-hidden="true">#</a> ts中使用双重断言</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>      searchCondition: null as unknown as ScreenCofig,

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="看到标题可能很多同学会有疑问-为什么要断言为-any-类型-之前不是说要尽量让类型明确吗。" tabindex="-1"><a class="header-anchor" href="#看到标题可能很多同学会有疑问-为什么要断言为-any-类型-之前不是说要尽量让类型明确吗。" aria-hidden="true">#</a> 看到标题可能很多同学会有疑问，为什么要断言为 any 类型？之前不是说要尽量让类型明确吗。</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>为了让代码清晰便于阅读，在使用TypeScript 开发的过程中我们一定要尽量避免声明 any 类型。但是在实际的开发过程中，难免遇到某些场景使得 TypeScript 无法编译通过，这里例举以下两个场景。

方法被调用的时候，实际传入的参数有可能是一个更加具体的值？
例如
function handler (e: Event) {
    let touchEvent = e as TouchEvent;
}
下面的代码会报错
function handler (e: Event) {
    let $element = e as HTMLElement; // 类型“Event”不可转换为类型“HTMLElement”。类型“Event”中缺少属性“accessKey”。
}

function handler (e: Event) {
    let $element = e as any as HTMLElement; // 双重断言
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>例子：enum  Direction {up,left,right}
输出内容
{
  "0": "up",
  "1": "left",
  "2": "right",
  "up": 0,
  "left": 1,
  "right": 2
}

例如------------
/**
 * Column Type
 * 列筛选类型
 */
export enum SortType {
    default = 0,
    string = 1,
    boolean = 2,
    date = 3,
    number = 4
}

使用导入import后
/**
    * 获取分组下拉选项
    */
getOptions: function (): Array&lt;OptionsEntity> {
    let allColumns = gridOptions.columnApi?.getAllColumns();
    let columns = allColumns?.filter(x => x.isVisible() &amp;&amp; x.getColId() !== "add");
    return columns?.map(item => {
        let info = item.getColDef();
        return {
            value: info.field,
            caption: info.headerName,
            columnType: SortType.string
        }
    }) as Array&lt;OptionsEntity>;
},

------------解释上面的内容，其实
/**
 * 下拉框项实体
 */
export class OptionsEntity {
    constructor() {
        this.value = ''
        this.caption = ''
        this.columnType = SortType.default
    }
    value: string
    caption: string
    columnType: SortType
    source: any
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="xxx-和xxx-区别" tabindex="-1"><a class="header-anchor" href="#xxx-和xxx-区别" aria-hidden="true">#</a> xxx[]和xxx&lt;&gt;区别</h2>
<h2 id="vue中拓展工具库函数" tabindex="-1"><a class="header-anchor" href="#vue中拓展工具库函数" aria-hidden="true">#</a> vue中拓展工具库函数</h2>
<h2 id="在-typescript-中-我们使用接口-interfaces-来定义对象的类型。-1" tabindex="-1"><a class="header-anchor" href="#在-typescript-中-我们使用接口-interfaces-来定义对象的类型。-1" aria-hidden="true">#</a> 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。</h2>
</div></template>
