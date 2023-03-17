<template><div><p>[toc]</p>
<h2 id="一些常见使用习惯" tabindex="-1"><a class="header-anchor" href="#一些常见使用习惯" aria-hidden="true">#</a> 一些常见使用习惯</h2>
<h3 id="组件的开发必须使用大驼峰命名" tabindex="-1"><a class="header-anchor" href="#组件的开发必须使用大驼峰命名" aria-hidden="true">#</a> 组件的开发必须使用大驼峰命名</h3>
<h3 id="jsx-使用说明习惯" tabindex="-1"><a class="header-anchor" href="#jsx-使用说明习惯" aria-hidden="true">#</a> jsx 使用说明习惯</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>注意事项：
1、JSX的语法很严格 所有的标签必须闭合
&lt;hr/>不能写成&lt;hr>

2、JSX采用的是JS的注释方式 形如/* */ 或 //
且由于是JSX语法 需写在花括号内部 像这样：

{/*我是注释*/}
1
或

{
	// 我是注释
}

3、在为JSX语法的元素添加类名(class)的时候
用className来替代class
用htmlFor来替代for
class和for是JS中的关键字 为了防止歧义 在JSX中必须换个关键字

4、在JSX语法中 创建DOM的时候 所有节点必须有唯一的根元素进行包裹
就像Vue的&lt;template>里面一样 必须有唯一的根元素进行包裹 不能有多个平级的根元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="classname" tabindex="-1"><a class="header-anchor" href="#classname" aria-hidden="true">#</a> className</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1.jsx中的使用规范，一个jsx最好用小括号括起来，避免自动分号
- jsx的语法更佳接近js而不是html,所以reactDOM使用小驼峰命名定义属性。jsx中class变成了className
- class是关键字，在react中使用不方便
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="所有-react-组件都必须像纯函数一样保护它们的-props-不被更改。" tabindex="-1"><a class="header-anchor" href="#所有-react-组件都必须像纯函数一样保护它们的-props-不被更改。" aria-hidden="true">#</a> 所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。</h3>
<h3 id="jsx-中写注释-括起来" tabindex="-1"><a class="header-anchor" href="#jsx-中写注释-括起来" aria-hidden="true">#</a> jsx 中写注释：{}括起来</h3>
<h3 id="jsx-中自定义组件名称必须以大写字母开头。" tabindex="-1"><a class="header-anchor" href="#jsx-中自定义组件名称必须以大写字母开头。" aria-hidden="true">#</a> jsx 中自定义组件名称必须以大写字母开头。</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>React 会将以小写字母开头的组件视为原生 DOM 标签。例如，&lt;div /> 代表 HTML 的 div 标签，而 &lt;Welcome /> 则代表一个组件，并且需在作用域内使用 Welcome。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="reactdom-渲染前-默认将输入所有的内容进行转义。" tabindex="-1"><a class="header-anchor" href="#reactdom-渲染前-默认将输入所有的内容进行转义。" aria-hidden="true">#</a> ReactDom 渲染前，默认将输入所有的内容进行转义。</h3>
<p>避免了 xss 攻击。</p>
<h3 id="避免将-props-的值复制给-state-这是一个常见的错误" tabindex="-1"><a class="header-anchor" href="#避免将-props-的值复制给-state-这是一个常见的错误" aria-hidden="true">#</a> 避免将 props 的值复制给 state！这是一个常见的错误：</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>constructor(props) {
 super(props);
 // 不要这样做
 this.state = { color: props.color };
}
如此做毫无必要（你可以直接使用 this.props.color），同时还产生了 bug（更新 prop 中的 color 时，并不会影响 state）。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="componentdidupdate-必须注意它必须被包裹在一个条件语句里" tabindex="-1"><a class="header-anchor" href="#componentdidupdate-必须注意它必须被包裹在一个条件语句里" aria-hidden="true">#</a> componentDidUpdate()必须注意它必须被包裹在一个条件语句里</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>componentDidUpdate(prevProps) {
  // 典型用法（不要忘记比较 props）：
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一般-react-构建的应用通常只有单一的根-dom-节点。" tabindex="-1"><a class="header-anchor" href="#一般-react-构建的应用通常只有单一的根-dom-节点。" aria-hidden="true">#</a> 一般 React 构建的应用通常只有单一的根 DOM 节点。</h3>
<p>但是如果将 React 集成到一个已经存在的应用，那么可以在应用中包含多个根 DOM
2.jsx 中的通过引号将属性值转为字符串字面量，</p>
<h2 id="_1-jsx-转换使用特定属性值" tabindex="-1"><a class="header-anchor" href="#_1-jsx-转换使用特定属性值" aria-hidden="true">#</a> 1.jsx 转换使用特定属性值</h2>
<p>方法 1：使用引号
方法 2：使用{}</p>
<h1 id="第三章-元素渲染" tabindex="-1"><a class="header-anchor" href="#第三章-元素渲染" aria-hidden="true">#</a> 第三章：元素渲染</h1>
<h2 id="_1-更新已经渲染的元素" tabindex="-1"><a class="header-anchor" href="#_1-更新已经渲染的元素" aria-hidden="true">#</a> 1.更新已经渲染的元素</h2>
<p>React 元素是不可变对象，一般创建，不可以更改它的属性或是子元素，它代表了某一个特定时刻的 UI.</p>
<h2 id="_2-react-只更新它需要更新的部分" tabindex="-1"><a class="header-anchor" href="#_2-react-只更新它需要更新的部分" aria-hidden="true">#</a> 2.React 只更新它需要更新的部分</h2>
<h1 id="第四章-组件和-pops" tabindex="-1"><a class="header-anchor" href="#第四章-组件和-pops" aria-hidden="true">#</a> 第四章：组件和 Pops</h1>
<p>组件概念上，类似于 js 函数，接受任意的入参，返回用于描述页面展示内容的 React 元素。</p>
<h2 id="函数组件和-class-组件" tabindex="-1"><a class="header-anchor" href="#函数组件和-class-组件" aria-hidden="true">#</a> 函数组件和 class 组件</h2>
<h3 id="js-函数定义一个函数组件" tabindex="-1"><a class="header-anchor" href="#js-函数定义一个函数组件" aria-hidden="true">#</a> js 函数定义一个函数组件</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function  welcome(props){
    return &lt;h1>hello{props.name}&lt;/h1>
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="class-组件" tabindex="-1"><a class="header-anchor" href="#class-组件" aria-hidden="true">#</a> class 组件</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>class  Welcome extends React.Component{
    render(){
        return &lt;h1>hello{this.props.name}&lt;/h1>
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="渲染组件" tabindex="-1"><a class="header-anchor" href="#渲染组件" aria-hidden="true">#</a> 渲染组件</h2>
<p>当 React 元素渲染用户自定义的组件时候，会将 jsx 所接收的属性以及子组件 children 转换为单个对象传递给组件，这个对象称为 props</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>上面定义好的函数（class组件）组件，使用
const element = (&lt;Welcome  name="daning" />)
ReactDOM.render(
    element,
    docuement.getElementById('root')
)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props-的只读性" tabindex="-1"><a class="header-anchor" href="#props-的只读性" aria-hidden="true">#</a> props 的只读性</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>组件不能修改自身的 props.
纯函数，输入的内容和输出的内容唯一确定，不会输入相同输出不同。下面修改了入参。
function withdraw(account, amount) {
account.total -= amount;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-state-和生命周期" tabindex="-1"><a class="header-anchor" href="#_5-state-和生命周期" aria-hidden="true">#</a> 5.state 和生命周期</h1>
<h2 id="组件的生命周期" tabindex="-1"><a class="header-anchor" href="#组件的生命周期" aria-hidden="true">#</a> 组件的生命周期</h2>
<p>组件的生命周期。</p>
<h3 id="当组件实例被创建并插入-dom-中时-其生命周期调用顺序如下" tabindex="-1"><a class="header-anchor" href="#当组件实例被创建并插入-dom-中时-其生命周期调用顺序如下" aria-hidden="true">#</a> 当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1.constructor()
    （1）通过给 this.state 赋值对象来初始化内部 state。
    （2）为事件处理函数绑定实例
2.static getDerivedStateFromProps()（它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。）
3.render()
4.componentDidMount()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件更新时-调用顺序" tabindex="-1"><a class="header-anchor" href="#组件更新时-调用顺序" aria-hidden="true">#</a> 组件更新时，调用顺序</h3>
<p>当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1.static getDerivedStateFromProps()
2.shouldComponentUpdate()
3.render()
4.getSnapshotBeforeUpdate()
5.componentDidUpdate()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="当然这些所有的都是手动的调用-和-vue-一样-如果只是确保一些单一的功能-可以调用必要的" tabindex="-1"><a class="header-anchor" href="#当然这些所有的都是手动的调用-和-vue-一样-如果只是确保一些单一的功能-可以调用必要的" aria-hidden="true">#</a> 当然这些所有的都是手动的调用（和 vue 一样，如果只是确保一些单一的功能，可以调用必要的）</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>（1）如果你需要执行副作用（例如，数据提取或动画）以响应 props 中的更改，请改用 componentDidUpdate。
componentDidUpdate() 会在更新后会被立即调用

（2）componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重复调用相同的值-有一个类似-vue-的计算属性-memoization-帮助函数来阻止非必要的过滤" tabindex="-1"><a class="header-anchor" href="#重复调用相同的值-有一个类似-vue-的计算属性-memoization-帮助函数来阻止非必要的过滤" aria-hidden="true">#</a> 重复调用相同的值，有一个类似 vue 的计算属性， memoization 帮助函数来阻止非必要的过滤：</h4>
<p>缓存上一次的值。</p>
<h3 id="组件卸载调用方法" tabindex="-1"><a class="header-anchor" href="#组件卸载调用方法" aria-hidden="true">#</a> 组件卸载调用方法</h3>
<p>当组件从 DOM 中移除时会调用如下方法：</p>
<p>componentWillUnmount()</p>
<h3 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h3>
<p>当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：</p>
<p>static getDerivedStateFromError()
componentDidCatch()</p>
<h3 id="总的来说-react-分为两大阶段-render-阶段和-commit-阶段-常用如下" tabindex="-1"><a class="header-anchor" href="#总的来说-react-分为两大阶段-render-阶段和-commit-阶段-常用如下" aria-hidden="true">#</a> 总的来说 React 分为两大阶段：render 阶段和 commit 阶段（常用如下）</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>挂载时候，constructor->render->(更新 DOM 和 refs)componentDidMount
更新时候，render->(更新 DOM 和 refs)componentDidMount
卸载时候，componentWillUnmount
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数组件转换为-class-组件" tabindex="-1"><a class="header-anchor" href="#函数组件转换为-class-组件" aria-hidden="true">#</a> 函数组件转换为 class 组件</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>第一步，创建一个同名的ES6的class,并且继承于React.Component
第二步，添加一个空的render方法
第三步，将函数体移动到render()内部。
第四步，将render中使用this.props替换props.
第五步，删除剩余的空函数的声明。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="向-class-中添加局部的-state" tabindex="-1"><a class="header-anchor" href="#向-class-中添加局部的-state" aria-hidden="true">#</a> 向 class 中添加局部的 state</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>如何将date从props移动到state中
第一步，通过render方法中的this.props.date替换成this.state.date
第二步，增加class的构造函数，然后在该函数中为this.state赋值初始值
constructor(props){
    super(props)
    this.state = {date:new Date()}
}
第三步，移除原函数组件中的date属性。
ReactDOM.render(
  &lt;Clock />,
  document.getElementById('root')
);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将生命周期方法添加到-class" tabindex="-1"><a class="header-anchor" href="#将生命周期方法添加到-class" aria-hidden="true">#</a> 将生命周期方法添加到 class</h3>
<p>将上面声明周期函数写入 class 中即可。</p>
<h2 id="正确的使用-state" tabindex="-1"><a class="header-anchor" href="#正确的使用-state" aria-hidden="true">#</a> 正确的使用 State</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1.不要直接修改State,使用setState函数
// Wrong
this.state.comment = 'Hello';
this.setState({
    comment:'12'
})
2.State的更新可能是异步的
出于性能考虑，React可能会把多个setState当成一个调用。
如果是多个对象，那么无法控制更新状态。
setState接收一个函数，而不是一个对象。函数使用state作为参数，第二个参数props.
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
使用函数，保证这个是一个单例模式。
vue中为什么data是一个函数。
将data封装成函数后，在实例化组件的时候，我们只是调用了data函数生成的数据副本，避免了数据污染。
3.State的更新会被合并。

4.数据是向下流动的。
为什么成为state是局部的或是封装的原因。
因为不论是父组件还是子组件都无法知道某一个组件内部是有状态还是无状态，并且他们不关心他们是函数还是class组件。
除了拥有并且设置他的组件，其他组件无法访问。

&lt;FormattedDate date={this.state.date} />
这里FormattedDate组件会在props中接受参数date,但是组件本身无法知道他是来自Clock的state,还是Clock的props,或是手动输入。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="第六章-react-事件处理" tabindex="-1"><a class="header-anchor" href="#第六章-react-事件处理" aria-hidden="true">#</a> 第六章：React 事件处理</h1>
<h2 id="事件处理的语法" tabindex="-1"><a class="header-anchor" href="#事件处理的语法" aria-hidden="true">#</a> 事件处理的语法</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1.React事件命名使用小驼峰命名，而不是纯小写原生方式
2.JSX语法中需要传入一个函数作为事件处理函数，而不是一个字符串。
3.你不能通过return false阻止默认行为，必须显式调用preventDefault,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="向事件处理程序传递参数" tabindex="-1"><a class="header-anchor" href="#向事件处理程序传递参数" aria-hidden="true">#</a> 向事件处理程序传递参数</h2>
<p>方法 1：箭头函数实现传递，因为如果是箭头函数，事件的对象必须通过显式的方法进行传递</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;button onClick={(e) => this.deleteRow(id, e)}>Delete Row&lt;/button>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>方法 2：bingd 传递参数，符合我们的常识认知</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。
&lt;button onClick={this.deleteRow.bind(this, id)}>Delete Row&lt;/button>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="第七章-条件渲染" tabindex="-1"><a class="header-anchor" href="#第七章-条件渲染" aria-hidden="true">#</a> 第七章：条件渲染</h1>
<h2 id="true-expression-总是会返回-expression。" tabindex="-1"><a class="header-anchor" href="#true-expression-总是会返回-expression。" aria-hidden="true">#</a> true &amp;&amp; expression 总是会返回 expression。</h2>
<p>因为在 JavaScript 中，true &amp;&amp; expression 总是会返回 expression, 而 false &amp;&amp; expression 总是会返回 false。</p>
<h2 id="阻止组件渲染" tabindex="-1"><a class="header-anchor" href="#阻止组件渲染" aria-hidden="true">#</a> 阻止组件渲染</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>让 render 方法直接返回 null，而不进行任何渲染。

```
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    &lt;div className="warning">
      Warning!
    &lt;/div>
  );
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="第八章-列表-key" tabindex="-1"><a class="header-anchor" href="#第八章-列表-key" aria-hidden="true">#</a> 第八章：列表 &amp; Key</h1>
<h2 id="key-帮助-react-识别哪些元素改变了-比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。" tabindex="-1"><a class="header-anchor" href="#key-帮助-react-识别哪些元素改变了-比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。" aria-hidden="true">#</a> key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。</h2>
<p>当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key。
如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值。</p>
<h2 id="用-key-提取组件" tabindex="-1"><a class="header-anchor" href="#用-key-提取组件" aria-hidden="true">#</a> 用 key 提取组件</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>元素的 key 只有放在就近的数组上下文中才有意义。

错误案例


function ListItem(props) {
  const value = props.value;
  return (
    // 错误！你不需要在这里指定 key：
    &lt;li key={value.toString()}>
      {value}
    &lt;/li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // 错误！元素的 key 应该在这里指定：
    &lt;ListItem value={number} />
  );
  return (
    &lt;ul>
      {listItems}
    &lt;/ul>
  );
}

const numbers = [1, 2, 3, 4, 5];



正确方法

function ListItem(props) {
  // 正确！这里不需要指定 key：
  return &lt;li>{props.value}&lt;/li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // 正确！key 应该在数组的上下文中被指定
    &lt;ListItem key={number.toString()}              value={number} />

  );
  return (
    &lt;ul>
      {listItems}
    &lt;/ul>
  );
}



一个好的经验法则是：在 map() 方法中的元素需要设置 key 属性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="key-只是在兄弟节点之间必须唯一" tabindex="-1"><a class="header-anchor" href="#key-只是在兄弟节点之间必须唯一" aria-hidden="true">#</a> key 只是在兄弟节点之间必须唯一</h2>
<p>数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key 值：</p>
<h2 id="key-会传递信息给-react-但不会传递给你的组件。如果你的组件中需要使用-key-属性的值-请用其他属性名显式传递这个值" tabindex="-1"><a class="header-anchor" href="#key-会传递信息给-react-但不会传递给你的组件。如果你的组件中需要使用-key-属性的值-请用其他属性名显式传递这个值" aria-hidden="true">#</a> key 会传递信息给 React ，但不会传递给你的组件。如果你的组件中需要使用 key 属性的值，请用其他属性名显式传递这个值：</h2>
<h1 id="第九章-在-react-里-html-表单元素的工作方式和其他的-dom-元素有些不同" tabindex="-1"><a class="header-anchor" href="#第九章-在-react-里-html-表单元素的工作方式和其他的-dom-元素有些不同" aria-hidden="true">#</a> 第九章：在 React 里，HTML 表单元素的工作方式和其他的 DOM 元素有些不同</h1>
<p>表单元素通常会保持一些内部的 state。例如这个纯 HTML 表单只接受一个名称。</p>
<h2 id="受控组件" tabindex="-1"><a class="header-anchor" href="#受控组件" aria-hidden="true">#</a> 受控组件</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>HTML 中表单元素：input,textarea,select 等都是自己维护 state,根据用户输入来进行更新。
React 中可变状态通常保存 state 属性中，只能通过 setState 来更新。
所以我们可以结合两者，让 React 的 state 成为唯一的数据源。比如原理的 name 赋值使用 this.state
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="textarea-标签" tabindex="-1"><a class="header-anchor" href="#textarea-标签" aria-hidden="true">#</a> textarea 标签</h2>
<p>HTML 中，textarea 元素通过子元素定义其文本。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;textarea>
  你好， 这是在 text area 里的文本
&lt;/textarea>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>React 中使用 value 代替，这样，textarea 的使用和 input 的使用非常相似。</p>
<h2 id="select-标签" tabindex="-1"><a class="header-anchor" href="#select-标签" aria-hidden="true">#</a> select 标签</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>HTML 中，select 创建下拉标签，这里使用 selected 来选择默认选中，
React 中使用 select 标签的 value 属性，来定义这个选中，在根标签中更新它。
你可以将数组传递到 value 属性中，以支持在 select 标签中选择多个选项：
&lt;select multiple={true} value={['B', 'C']}>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="input-标签" tabindex="-1"><a class="header-anchor" href="#input-标签" aria-hidden="true">#</a> input 标签</h2>
<p>HTML 中 input type=file 允许用户选择文件，但是这里的 value 中只读，所以它是一个非受控组件。</p>
<h2 id="处理多个输入-可以给每一个元素添加-name-根据函数-event-target-name-的值选择" tabindex="-1"><a class="header-anchor" href="#处理多个输入-可以给每一个元素添加-name-根据函数-event-target-name-的值选择" aria-hidden="true">#</a> 处理多个输入，可以给每一个元素添加 name,根据函数 event.target.name 的值选择</h2>
<h2 id="受控组件和非受控组件" tabindex="-1"><a class="header-anchor" href="#受控组件和非受控组件" aria-hidden="true">#</a> 受控组件和非受控组件</h2>
<p>在大多数情况下，我们推荐使用 受控组件 来处理表单数据。在一个受控组件中，表单数据是由 React 组件来管理的。
另一种替代方案是使用非受控组件，这时表单数据将交由 DOM 节点来处理。</p>
<h3 id="一些外部嵌套-react-的快速-demo-使用非受控组件操作-dom" tabindex="-1"><a class="header-anchor" href="#一些外部嵌套-react-的快速-demo-使用非受控组件操作-dom" aria-hidden="true">#</a> 一些外部嵌套 react 的快速 demo,使用非受控组件操作 dom</h3>
<p>因为非受控组件将真实数据储存在 DOM 节点中，所以在使用非受控组件时，
有时候反而更容易同时集成 React 和非 React 代码。</p>
<h1 id="第十章-状态提升" tabindex="-1"><a class="header-anchor" href="#第十章-状态提升" aria-hidden="true">#</a> 第十章：状态提升</h1>
<p>多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去。
在 React 中，将多个组件中需要共享的 state 向上移动到它们的最近共同父组件中，
便可实现共享 state。这就是所谓的“状态提升”。</p>
<p>如果可以通过 prop 来推导或是父级数据推断，那么不应该使用 state 定义，而是找到公共的内容一起使用。</p>
<h1 id="第十一章" tabindex="-1"><a class="header-anchor" href="#第十一章" aria-hidden="true">#</a> 第十一章</h1>
<p>推荐使用组合而非继承来实现组件间的代码重用。
JSX 标签中的所有内容都会作为一个 children prop 传递给 FancyBorder 组件。
在 React 中，我们也可以通过组合来实现这一点。“特殊”组件可以通过 props 定制并渲染“一般”组件：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function Dialog(props) {
  return (
    &lt;FancyBorder color="blue">
      &lt;h1 className="Dialog-title">
        {props.title}
      &lt;/h1>
      &lt;p className="Dialog-message">
        {props.message}
      &lt;/p>
    &lt;/FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    &lt;Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="props-和组合为你提供了清晰而安全地定制组件外观和行为的灵活方式。" tabindex="-1"><a class="header-anchor" href="#props-和组合为你提供了清晰而安全地定制组件外观和行为的灵活方式。" aria-hidden="true">#</a> Props 和组合为你提供了清晰而安全地定制组件外观和行为的灵活方式。</h4>
<p>注意：组件可以接受任意 props，包括基本数据类型，React 元素以及函数。</p>
<h3 id="props-和-state-区别" tabindex="-1"><a class="header-anchor" href="#props-和-state-区别" aria-hidden="true">#</a> props 和 state 区别</h3>
<p>props 是传递给组件的（类似于函数的形参），而 state 是在组件内被组件自己管理的（类似于在一个函数内声明的变量）。</p>
<h1 id="_12-react-设计哲学" tabindex="-1"><a class="header-anchor" href="#_12-react-设计哲学" aria-hidden="true">#</a> 12.React 设计哲学</h1>
<h2 id="第一步将设计好的-ui-分为组件层级" tabindex="-1"><a class="header-anchor" href="#第一步将设计好的-ui-分为组件层级" aria-hidden="true">#</a> 第一步将设计好的 UI 分为组件层级</h2>
<h2 id="第二步搭建基础的静态-ui-页面" tabindex="-1"><a class="header-anchor" href="#第二步搭建基础的静态-ui-页面" aria-hidden="true">#</a> 第二步搭建基础的静态 UI 页面</h2>
<h2 id="第三步-定义数据结构-确定-ui-的-state-的最小表示" tabindex="-1"><a class="header-anchor" href="#第三步-定义数据结构-确定-ui-的-state-的最小表示" aria-hidden="true">#</a> 第三步：定义数据结构，确定 UI 的 state 的最小表示</h2>
<h2 id="第四步-确定-state-的设置位置。" tabindex="-1"><a class="header-anchor" href="#第四步-确定-state-的设置位置。" aria-hidden="true">#</a> 第四步：确定 state 的设置位置。</h2>
<p>根据 React 中最小实现，放置 state 的使用位置。</p>
<h2 id="第五步-添加反向数据流" tabindex="-1"><a class="header-anchor" href="#第五步-添加反向数据流" aria-hidden="true">#</a> 第五步：添加反向数据流</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>处于较低层级的表单组件更新较高层级的 FilterableProductTable 中的 state。
我们可以使用输入框的 onChange 事件来监视用户输入的变化，并通知 FilterableProductTable 传递给 SearchBar 的回调函数。然后该回调函数将调用 setState()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="补充一个小知识" tabindex="-1"><a class="header-anchor" href="#补充一个小知识" aria-hidden="true">#</a> 补充一个小知识</h1>
<p>ES6 开始，对象初始值设定项语法还支持计算属性名称。这允许您将表达式放在括号中</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let config = {
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="ref-转发是一项将-ref-自动地通过组件传递到其一子组件的技巧。" tabindex="-1"><a class="header-anchor" href="#ref-转发是一项将-ref-自动地通过组件传递到其一子组件的技巧。" aria-hidden="true">#</a> Ref 转发是一项将 ref 自动地通过组件传递到其一子组件的技巧。</h1>
<p>访问其 DOM 节点对管理焦点，选中或动画来说是不可避免的。
Ref 转发是一个可选特性，其允许某些组件接收 ref，并将其向下传递（换句话说，“转发”它）给子组件.</p>
<h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const FancyButton = React.forwardRef((props, ref) => (
  &lt;button ref={ref} className="FancyButton">
    {props.children}
  &lt;/button>
));

// 你可以直接获取 DOM button 的 ref：
const ref = React.createRef();
&lt;FancyButton ref={ref}>Click me!&lt;/FancyButton>;



当 ref 挂载完成，ref.current 将指向 &lt;button> DOM 节点。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="注意自动绑定-如何-class-中的方法自动绑定-this" tabindex="-1"><a class="header-anchor" href="#注意自动绑定-如何-class-中的方法自动绑定-this" aria-hidden="true">#</a> 注意自动绑定，如何 class 中的方法自动绑定 this</h1>
<h3 id="手动绑定-this" tabindex="-1"><a class="header-anchor" href="#手动绑定-this" aria-hidden="true">#</a> 手动绑定 this</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
一般而言，class 创建的组件需要在 constructor 中显式绑定 this,.bind(this).
constructor(props) {
super(props);
this.state = {message: 'Hello!'};
// 这一行很重要！
this.handleClick = this.handleClick.bind(this);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定实现组件的绑定-this" tabindex="-1"><a class="header-anchor" href="#自定实现组件的绑定-this" aria-hidden="true">#</a> 自定实现组件的绑定 this</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>如果使用 createReactClass() 方法创建组件，组件中的方法会自动绑定至实例，所以不需要像上面那样做：

var SayHello = createReactClass({
getInitialState: function() {
return {message: 'Hello!'};
},

handleClick: function() {
alert(this.state.message);
},

render: function() {
return (
&lt;button onClick={this.handleClick}>
Say hello
&lt;/button>
);
}
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="fragments" tabindex="-1"><a class="header-anchor" href="#fragments" aria-hidden="true">#</a> Fragments</h1>
<p>React 中的一个常见模式是一个组件返回多个元素。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>render() {
  return (
    &lt;React.Fragment>
      &lt;ChildA />
      &lt;ChildB />
      &lt;ChildC />
    &lt;/React.Fragment>
  );
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="另外一种短语法则" tabindex="-1"><a class="header-anchor" href="#另外一种短语法则" aria-hidden="true">#</a> 另外一种短语法则</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>return (
      &lt;>
        &lt;td>Hello&lt;/td>
        &lt;td>World&lt;/td>
      &lt;/>
    );

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="代码分割" tabindex="-1"><a class="header-anchor" href="#代码分割" aria-hidden="true">#</a> 代码分割</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>在你的应用中引入代码分割的最佳方式是通过动态 import() 语法。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用之前案例" tabindex="-1"><a class="header-anchor" href="#使用之前案例" aria-hidden="true">#</a> 使用之前案例</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import { add } from './math';

console.log(add(16, 26));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用之后案例" tabindex="-1"><a class="header-anchor" href="#使用之后案例" aria-hidden="true">#</a> 使用之后案例</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import("./math").then(math => {
  console.log(math.add(16, 26));
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码懒加载-lazy" tabindex="-1"><a class="header-anchor" href="#代码懒加载-lazy" aria-hidden="true">#</a> 代码懒加载 lazy</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
const OtherComponent = React.lazy(() => import('./OtherComponent'));
import React, { lazy } from 'react';
const MyComponent = lazy(() => import("./MyComponent.js"));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="深入-jsx" tabindex="-1"><a class="header-anchor" href="#深入-jsx" aria-hidden="true">#</a> 深入 JSX</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
实际上，jsx 只是 React.createElement（component,props,...children）的函数语法糖


olor="blue" shadowSize={2}>
  Click Me
&lt;/MyButton>

编译结果
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jsx-类型中使用点语法" tabindex="-1"><a class="header-anchor" href="#jsx-类型中使用点语法" aria-hidden="true">#</a> JSX 类型中使用点语法</h2>
<h2 id="用户定义的组件必须以大写字母开头" tabindex="-1"><a class="header-anchor" href="#用户定义的组件必须以大写字母开头" aria-hidden="true">#</a> 用户定义的组件必须以大写字母开头</h2>
<h1 id="高阶组件-hoc-暂停" tabindex="-1"><a class="header-anchor" href="#高阶组件-hoc-暂停" aria-hidden="true">#</a> 高阶组件 HOC 暂停</h1>
<p>高阶组件就是参数为组件，返回值为新组件的函数。
组件是将 props 转换为 UI,高阶组件是将组件转换为另一个组件。</p>
<h2 id="hoc-常见的高阶组件" tabindex="-1"><a class="header-anchor" href="#hoc-常见的高阶组件" aria-hidden="true">#</a> HOC 常见的高阶组件</h2>
<p>Redux 的 connect 是高阶组件
Relay 的 createFramentContainer 是高阶组件</p>
<h2 id="组件是-react-中代码复用的基本单元-但是某些模式下-不适合传统组件。" tabindex="-1"><a class="header-anchor" href="#组件是-react-中代码复用的基本单元-但是某些模式下-不适合传统组件。" aria-hidden="true">#</a> 组件是 React 中代码复用的基本单元，但是某些模式下，不适合传统组件。</h2>
<h3 id="案例学习-commentlist-组件-订阅外部数据源-渲染评论列表" tabindex="-1"><a class="header-anchor" href="#案例学习-commentlist-组件-订阅外部数据源-渲染评论列表" aria-hidden="true">#</a> 案例学习：commentlist 组件，订阅外部数据源，渲染评论列表</h3>
</div></template>
