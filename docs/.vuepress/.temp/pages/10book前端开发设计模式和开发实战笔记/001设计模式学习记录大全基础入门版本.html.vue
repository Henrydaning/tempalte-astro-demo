<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#接口是什么-接口和函数区别">接口是什么，接口和函数区别</RouterLink></li><li><RouterLink to="#_1-单例模式">1.单例模式</RouterLink><ul><li><RouterLink to="#_1-单例模式两个条件">（1）单例模式两个条件</RouterLink></li><li><RouterLink to="#_2-适用">（2）适用</RouterLink></li></ul></li><li><RouterLink to="#原型模式">原型模式</RouterLink></li><li><RouterLink to="#_4-适配器模式">4.适配器模式</RouterLink></li><li><RouterLink to="#_5-装饰模式">5.装饰模式</RouterLink></li><li><RouterLink to="#_6-代理模式">6.代理模式</RouterLink></li><li><RouterLink to="#_7-发布-订阅模式">7.发布-订阅模式</RouterLink></li><li><RouterLink to="#_7-javascript发布订阅者模式-另一个例子">7.JavaScript发布订阅者模式（另一个例子）</RouterLink></li></ul></nav>
<p>[toc]</p>
<p>参考文章
1.<a href="https://blog.csdn.net/villainy13579/article/details/81220824" target="_blank" rel="noopener noreferrer">JavaScript常用设计模式<ExternalLinkIcon/></a></p>
<p>2.<a href="https://github.com/nyhxiaoning/blog-4" target="_blank" rel="noopener noreferrer">github关于不同设计模式<ExternalLinkIcon/></a></p>
<p>3.<a href="https://www.runoob.com/design-pattern/factory-pattern.html" target="_blank" rel="noopener noreferrer">设计模式<ExternalLinkIcon/></a></p>
<p>4.<a href="https://segmentfault.com/a/1190000014919700" target="_blank" rel="noopener noreferrer">JavaScript 中常见设计模式整理<ExternalLinkIcon/></a></p>
<p>5.<a href="https://github.com/sunzhaoye/blog/issues/16" target="_blank" rel="noopener noreferrer">github中的常见的设计模式整理<ExternalLinkIcon/></a></p>
<h2 id="接口是什么-接口和函数区别" tabindex="-1"><a class="header-anchor" href="#接口是什么-接口和函数区别" aria-hidden="true">#</a> 接口是什么，接口和函数区别</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
我们可以定义一个公共的接口类: Interface，接着我们考虑下接口类需要有哪些成员和方法

（1）接口是一组方法签名的集合
其他内置接口的语言可以在接口中进行函数声明，从而定义一个接口；而在javasc
ript中，我们需要通过给Interface类增加一个数组成员，保存方法名称，我命名
为:methods，另外还有个成员:name，这个成员是接口名，方便我们快速定位错误—
比如我们的对象到底是没实现哪个接口的哪个方法。

（2）

代码如下：
     /**
     * 创建接口对象
     * @param name 接口名 
     * @param methods 接口方法
     */
    var Interface = function(name,methods){
        if(arguments.length != 2){
            throw new Error('必须输入两个参数,当前个数'+arguments.length);
        }
 
        this.name=name;
        this.methods=[];
        for(var i=0, len=methods.length; i&lt;len; i++){
            if(typeof methods[i] !== 'string'){
                throw new Error('方法名参数必须为string');
            }
            this.methods.push(methods[i]);
        }
    };
    /**
     * 接口实现
     * @param  object1 实现接口对象
     * @param  object2 对应接口
     * @return 实现错误抛出异常
     */
    Interface.ensureImplements = function(object){
        if(arguments.length &lt; 2){
            throw new Error('必须输入两个参数,当前个数' + arguments.length);
        }
        for(var i=1, len=arguments.length; i &lt; len; i++){
            var interface = arguments[i];
            if(interface.constructor != Interface){
                throw new Error("请实现接口");
            }
 
            for (var j = 0, methodsLen = interface.methods.length; j &lt; methodsLen; j++){
                var method = interface.methods[j];
                if(!object[method] || typeof object[method] !== 'function'){
                    throw new Error("接口名:"+interface.name+"方法名："+method+"没找到");
                }
            };
        }
    }
 
 
    var DynamicMap = new Interface('DynamicMap',['centerOnPoint','zoom','draw']);
 
    /**
     * 执行方法
     * @param  函数方法
     * @return 执行结果
     */
    function displayRoute(mapInstance){
        Interface.ensureImplements(mapInstance,DynamicMap);//实现接口
 
        /**
         * 调用
         */
        mapInstance.centerOnPoint(12,34);
        mapInstance.zoom(5);
        mapInstance.draw();
    }
    /**
     * 函数方法
     * @type 实现接口方法
     */
    var a={
        centerOnPoint:function(x,y){
            console.log(x*y);
        },
        zoom:function(x){
            console.log(x);
        },
        draw:function(){
            console.log("x*y");
        }
    }
    displayRoute(a);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-单例模式" tabindex="-1"><a class="header-anchor" href="#_1-单例模式" aria-hidden="true">#</a> 1.单例模式</h2>
<h3 id="_1-单例模式两个条件" tabindex="-1"><a class="header-anchor" href="#_1-单例模式两个条件" aria-hidden="true">#</a> （1）单例模式两个条件</h3>
<ul>
<li>确保只有一个实例</li>
<li>可以全局访问</li>
</ul>
<h3 id="_2-适用" tabindex="-1"><a class="header-anchor" href="#_2-适用" aria-hidden="true">#</a> （2）适用</h3>
<ul>
<li>适用于弹框的实现, 全局缓存</li>
<li>数据库对象的创建</li>
<li></li>
</ul>
<h2 id="原型模式" tabindex="-1"><a class="header-anchor" href="#原型模式" aria-hidden="true">#</a> 原型模式</h2>
<p>补充</p>
<h1 id="prototype和-proto-区别" tabindex="-1"><a class="header-anchor" href="#prototype和-proto-区别" aria-hidden="true">#</a> prototype和__proto__区别</h1>
<p>前者是函数才有的属性，准确的说是构造函数才有的属性。后者是所有JavaScript对象（包括函数）都有的属性</p>
<p>每一个构造器（即是函数）都有一个默认的prototype属性，指向自己的原型，对于
某些内容中这种属性叫做__proto__，这种属性在简单对象中比如直接{}或是[]
这种中使用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>

在对象创建时，就会有一些预定义的属性，其中定义函数的时候，
这个预定义属性就是prototype,这个prototype是一个普通的对象。

而定义对象的时候，就会生成一个__proto__，这个__proto__
指向的是这个对象的构造函数的prototype.

凡是对象都有一个__proto__属性，这个是永远都有的
这个__proto__指向的就是他的构造函数的prototype 
而这个函数a的prototype对象的构造函数是谁呢？ 
没错就是开头说到的Object.prototype。
对于所有对象都有关于__proto__属性，而关于这个属性，永远指向难过的是他的
构造函数，这个构造函数对于每一个比如

function A(a){
		this.a = a;
}
var a = new A()

a.__proto__ = A  //执行构造类，
按照道理，A应该也有__proto__

那A.__proto__ = Function.prototype//(注意Function的构造类)


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
 function per(){
    this.getAge = function(age){
       console.log(age)
    }

 }
//拓展Per类的方法
 per.prototype.getName =function(name){
     console.log(name)
 }
//利用原型模式实现继承
 var a = {};//
 a.__proto__= per.prototype;
 //记住这里继承的是per的上一级的链式，也就是只能使用拓展的上一层的方法，因为这里相当与是将上一层的弗雷相等
alert(a.getAge("333"));//333
alert(a.getName('3333'));//undefined


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
//TODO:很奇怪，不是继承了吗？怎么只有getAge可以用，而getName不可以用，
    当然在第一个注释里面写清楚了，我们将这个原型链实现继承的时候，我们将原来的构造函数也继承了原来的per的构造函数，而不是拓展之后的增加的
    
    我们应该怎么将继承这个per的所有的方法和构造函数
    
    类的继承
     function per(){
        this.getAge = function(age){
           console.log(age)
        }

    }
    //拓展Per类的方法
     per.prototype.getName =function(name){
         console.log(name)
     }
    //利用原型模式实现继承
     var a = {};//
     //TODO:前面的都没有问题，但是这里为什么不能使用，是不是继承写的不对
     //TODO:确实不对，首先下面的继承
     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为这个继承及其重要，我们这里将单独拿出来
做一个图</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
graph LR
    A[per原型] --> B[per] 
    A1[a原型] --- B1[a空对象] 
    A4[per原型] -- 使用 a.__proto__ = per.prototype --> B4[per] 
    A4[per原型] -- 使用 a.__proto__ = per.prototype --> C[a]


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果per是空对象，那么a完全继承了per；但是per不是空对象，相当于a和per都是per原型的子类，而这个per和a之间是没有关系的</p>
<p>所以上面只能让a对象找到per原型上面的方法，也就是将a的原型链的最上游设置成了per.prototype;不能再找上面一层。相当于a=per了，</p>
<p><strong>我们其实需要的是下面这种关系</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>graph LR
    A[per原型] --> B[per] 
    B3[a原型] --- B1[a空对象] 
    B[per] --> B1[a空对象] 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们需要per和a发生关系，而不是没有关系</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>a.prototype是一个类，原型模式就是一个类，
那么这个 a.__proto__= per.prototype;就不是上面的关系，
    需要a.prototype = new per();//{}和a的实例化出来的内容进行赋值，但是
    这样赋值不能保证所有的都是一样，这个只是默认创建了一个per的内容，但是里面的构造函数和创建a的构造函数不一样，所以不能用per的构造函数，
    a.__proto__.constuuctor =a;
    
    


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>串联继承，（不支持多继承）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>graph LR

    C[m] --> D[n]
    D[n] --> K[k]


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>


	/**
	 * 串连集成
	 */
	function m(){
		this.showM = function(){
			alert("IM IS M")
		}
	}
	function n(){
		this.showN = function(){
			alert("IM IS n")
		}
	}	
	function k(){};
	n.prototype = new m();
	n.prototype.constructor = n;
	
	k.prototype = new n();
	k.prototype.constructor = k;
	
	var boo = new k();
	boo.showM();
	boo.showN();


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>

## 继承和聚合


先看一段继承代码


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>function Person(name){
this.name = name;
}</p>
<p>function Teacher(name , book){
//继承父类person的属性和方法
Person.call(this,name);
//使用自己的属性
this.book = book;
//对比一下，为什么在这里写teacher的方法，可以
/*     this.getBook = function(book){
return this.book = book;
} */</p>
<p>}</p>
<p>//开始实现teacher继承person
//1.转移继承原型
Teacher.prototype = new Person();</p>
<p>//2.构造函数的赋值
Teacher.prototype.constructor = Teacher;</p>
<p>//3.实验给teacher增加一个方法,这个时候book这个属性已经在teacher上面，所以直接用
Teacher.prototype.getBook = function(){
return this.book;
}</p>
<p>var Confucious = new Teacher('cat','rat');
alert(Confucious.getBook());</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>


上面的代码相当于每一次继承，我们需要写两行经典代码，继承原型和构造函数赋值
我们可以实现一个函数

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>//subClass子类，superClass父类
function  extend(subClass,superClass){
    
    //子类的原型类等于父类的原型属性
    //1.初始化中间空对象，用来转换父类关系
    var F = funtion(){};
    F.prototype = superClass.prototype;
    //为什么这么写，为了省去call在继承的时候，将this的指向创建给
    临时的对象this
    
    
    //让子类继承F
    subclass.prototype = new F();
    sunClass.prototype.constructor = subClass;
    
    //为子类增加父类的属性superClass,其实是模拟call
    subCalss.superClass = superClass.prototype;
    
    //4.增加一个保险，就算原型类是超类，object，也会把构造函数的
    级别将下来
    
    
    
    
}
</code></pre>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>






## 2.工厂模式

工厂模式分为好几种，这里就不一一讲解了，以下是一个简单工厂模式的例子

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>class Man {
constructor(name) {
this.name = name
}
alertName() {
alert(this.name)
}
}</p>
<p>class Factory {
static create(name) {
return new Man(name)
}
}</p>
<p>Factory.create('yck').alertName()</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
当然工厂模式并不仅仅是用来 new 出实例。

可以想象一个场景。假设有一份很复杂的代码需要用户去调用，但是用户并不关心这些复杂的代码，只需要你提供给我一个接口去调用，用户只负责传递需要的参数，至于这些参数怎么使用，内部有什么逻辑是不关心的，只需要你最后返回我一个实例。这个构造过程就是工厂。

工厂起到的作用就是隐藏了创建实例的复杂度，只需要提供一个接口，简单清晰。

在 Vue 源码中，你也可以看到工厂模式的使用，比如创建异步组件


export function createComponent (
  Ctor: Class&lt;Component> | Function | Object | void,
  data: ?VNodeData,
  context: Component,
  children: ?Array&lt;VNode>,
  tag?: string
): VNode | Array&lt;VNode> | void {
    
    // 逻辑处理...
  
  const vnode = new VNode(
    `vue-component-${Ctor.cid}${name ? `-${name}` : ''}`,
    data, undefined, undefined, undefined, context,
    { Ctor, propsData, listeners, tag, children },
    asyncFactory
  )

  return vnode
}
在上述代码中，我们可以看到我们只需要调用 createComponent 传入参数就能创建一个组件实例，但是创建这个实例是很复杂的一个过程，工厂帮助我们隐藏了这个复杂的过程，只需要一句代码调用就能实现功能。

## 3.单例模式

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单例模式很常用，比如全局缓存、全局状态管理等等这些只需要一个对象，就可以使用单例模式。</p>
<p>单例模式的核心就是保证全局只有一个对象可以访问。因为 JS 是门无类的语言，所以别的语言实现单例的方式并不能套入 JS 中，我们只需要用一个变量确保实例只创建一次就行，以下是如何实现单例模式的例子</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>


class Singleton {
  constructor() {}
}

Singleton.getInstance = (function() {
  let instance
  return function() {
    if (!instance) {
      instance = new Singleton()
    }
    return instance
  }
})()

let s1 = Singleton.getInstance()
let s2 = Singleton.getInstance()
console.log(s1 === s2) // true
在 Vuex 源码中，你也可以看到单例模式的使用，虽然它的实现方式不大一样，通过一个外部变量来控制只安装一次 Vuex

let Vue // bind on install

export function install (_Vue) {
  if (Vue &amp;&amp; _Vue === Vue) {
    // 如果发现 Vue 有值，就不重新创建实例了
    return
  }
  Vue = _Vue
  applyMixin(Vue)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-适配器模式" tabindex="-1"><a class="header-anchor" href="#_4-适配器模式" aria-hidden="true">#</a> 4.适配器模式</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
适配器用来解决两个接口不兼容的情况，不需要改变已有的接口，通过包装一层的方式实现两个接口的正常协作。

以下是如何实现适配器模式的例子

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
class Plug {
  getName() {
    return '港版插头'
  }
}

class Target {
  constructor() {
    this.plug = new Plug()
  }
  getName() {
    return this.plug.getName() + ' 适配器转二脚插头'
  }
}

let target = new Target()
target.getName() // 港版插头 适配器转二脚插头

在 Vue 中，我们其实经常使用到适配器模式。比如父组件传递给子组件一个时间戳属性，组件内部需要将时间戳转为正常的日期显示，一般会使用 computed 来做转换这件事情，这个过程就使用到了适配器模式。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-装饰模式" tabindex="-1"><a class="header-anchor" href="#_5-装饰模式" aria-hidden="true">#</a> 5.装饰模式</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
装饰模式不需要改变已有的接口，作用是给对象添加功能。就像我们经常需要给手机戴个保护套防摔一样，不改变手机自身，给手机添加了保护套提供防摔功能。


### 用户需求例子
装饰者模式概述

　　在不改变原对象的基础上，通过对其进行包装拓展（添加属性或者方法）使原有对象可以满足用户更复杂的需求

**实际需求**

　　在已有的代码基础上，为每个表单中的input默认输入框上边显示一行提示文案，当用户点击输入框时文案消失
　　

**基础**　
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
原有代码：

var telInput = document.getElementById('tel_input');
var telWarnText = document.getElementById('tel_warn_text');
input.onclick = function(){
  telWarnText.style.display = 'inline-block';  
}

第一次改进后的代码：


var telInput = document.getElementById('tel_input');
var telWarnText = document.getElementById('tel_warn_text');
var telDemoText = document.getElementById('tel_demo_text');
input.onclick = function(){
  telWarnText.style.display = 'inline-block';  
  telDemoText.style.display = 'none';  
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>优化版</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
var decorator = function(input, fn) {
    // 获取事件源
    var input = document.getElementById(input);
    // 若事件源已绑定事件
    if(typeof input.onclick === 'function') {
        // 缓存事件源原有回调函数
        var oldClickFn = input.onclick;
        // 为事件源定义新的事件
        input.onclick = function() {
            // 事件源原有回调函数
            oldClcikFn();
            // 执行事件源新增回调函数
            fn();
        }
    }else{
        // 事件源未绑定事件，直接为事件源添加新增回调函数
        input.onclick = fn;
    }
}


添加新功能

// 电话输入框功能装饰
decorator('tel_input', function(){
    document.getElementById('tel_demo_text').style.display = 'none';
})

// 姓名输入框功能装饰
decorator('name_input', function(){
    document.getElementById('tel_demo_text').style.display = 'none';
})


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是如何实现装饰模式的例子，使用了 ES7 中的装饰器语法</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
function readonly(target, key, descriptor) {
  descriptor.writable = false
  return descriptor
}

class Test {
  @readonly
  name = 'yck'
}

let t = new Test()

t.yck = '111' // 不可修改
在 React 中，装饰模式其实随处可见

import { connect } from 'react-redux'
class MyComponent extends React.Component {
    // ...
}
export default connect(mapStateToProps)(MyComponent)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-代理模式" tabindex="-1"><a class="header-anchor" href="#_6-代理模式" aria-hidden="true">#</a> 6.代理模式</h2>
<p>代理是为了控制对对象的访问，不让外部直接访问到对象。
在现实生活中，也有很多代理的场景。比如你需要买一件国外的产品，这时候你可以通过代购来购买产品。</p>
<p>在实际代码中其实代理的场景很多，也就不举框架中的例子了，比如事件代理就用到了代理模式。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
&lt;ul id="ul">
    &lt;li>1&lt;/li>
    &lt;li>2&lt;/li>
    &lt;li>3&lt;/li>
    &lt;li>4&lt;/li>
    &lt;li>5&lt;/li>
&lt;/ul>
&lt;script>
    let ul = document.querySelector('#ul')
    ul.addEventListener('click', (event) => {
        console.log(event.target);
    })
&lt;/script>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为存在太多的 li，不可能每个都去绑定事件。这时候可以通过给父节点绑定一个事件，让父节点作为代理去拿到真实点击的节点。</p>
<h2 id="_7-发布-订阅模式" tabindex="-1"><a class="header-anchor" href="#_7-发布-订阅模式" aria-hidden="true">#</a> 7.发布-订阅模式</h2>
<p>发布-订阅模式也叫做观察者模式。通过一对一或者一对多的依赖关系，当对象发生改变时，订阅方都会收到通知。在现实生活中，也有很多类似场景，比如我需要在购物网站上购买一个产品，但是发现该产品目前处于缺货状态，这时候我可以点击有货通知的按钮，让网站在产品有货的时候通过短信通知我。</p>
<p>在实际代码中其实发布-订阅模式也很常见，比如我们点击一个按钮触发了点击事件就是使用了该模式</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
&lt;ul id="ul">&lt;/ul>
&lt;script>
    let ul = document.querySelector('#ul')
    ul.addEventListener('click', (event) => {
        console.log(event.target);
    })
&lt;/script>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Vue 中，如何实现响应式也是使用了该模式。对于需要实现响应式的对象来说，在 get 的时候会进行依赖收集，当改变了对象的属性时，就会触发派发更新。</p>
<p>外观模式
外观模式提供了一个接口，隐藏了内部的逻辑，更加方便外部调用。</p>
<p>举个例子来说，我们现在需要实现一个兼容多种浏览器的添加事件方法</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
function addEvent(elm, evType, fn, useCapture) {
  if (elm.addEventListener) {
    elm.addEventListener(evType, fn, useCapture)
    return true
  } else if (elm.attachEvent) {
    var r = elm.attachEvent("on" + evType, fn)
    return r
  } else {
    elm["on" + evType] = fn
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于不同的浏览器，添加事件的方式可能会存在兼容问题。如果每次都需要去这样写一遍的话肯定是不能接受的，所以我们将这些判断逻辑统一封装在一个接口中，外部需要添加事件只需要调用 addEvent 即可。</p>
<h2 id="_7-javascript发布订阅者模式-另一个例子" tabindex="-1"><a class="header-anchor" href="#_7-javascript发布订阅者模式-另一个例子" aria-hidden="true">#</a> 7.JavaScript发布订阅者模式（另一个例子）</h2>
<p>假如你要建立一个网站，通常来说会有许多用户。你作为一名管理者，有时候需要将重要的消息发布给你的用户。在软件开发领域，开发此功能往往用到发布订阅者模式。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    1.定义发布者类：
    发布者的最基本的两个属性：发送的消息和发送者
    function Publisher() {
        this.observers =[]; // 存储需要发布消息的人
        this.state="hello"  // 发送的消息
    }
    
    //TODO:
    //一个Publisher还需要有能够接纳新的订阅消息的人的功能，或者删除某个订阅者的功能，同时需要能够将消息发送出去的功能
    var pubsub =(()=>
    var topics = {};
    function subscribe(topic){
    if(!topics[topic]){
        topics[topic]= [];
    }
    topics[topic] = function (a){
        console. log(a)
    }
    function publish(topic,...args
    if(let topics[topic])
    
        return;
    for (let params of args){
        topics [topic](params)
        }
    }
    return {
        subscribe,
        publish
    })()
    pubsub.subscribe("test");//订阅者A订阅了test事件
    pubsub.pub1ish(test',123',"HH");//123H(发布者B发布了test事件)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
