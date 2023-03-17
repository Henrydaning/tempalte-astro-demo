<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_1-react-router-dom-从-v5-升级后使用变化">1.react-router-dom 从 v5 升级后使用变化</RouterLink></li><li><RouterLink to="#_2-react-router-dom-的-v5-使用记录">2.react-router-dom 的 v5 使用记录</RouterLink></li></ul></nav>
<h2 id="_1-react-router-dom-从-v5-升级后使用变化" tabindex="-1"><a class="header-anchor" href="#_1-react-router-dom-从-v5-升级后使用变化" aria-hidden="true">#</a> 1.react-router-dom 从 v5 升级后使用变化</h2>
<p>React Router 中的组件主要分为三类：</p>
<ol>
<li>路由器，例如 BrowserRouter 和 HashRouter</li>
<li>路由匹配器： 例如 Route 和 Switch</li>
<li>导航：例如 Link, NavLink, and Redirect</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[000---React Router v5 和 v6 的比较\_小公鸡卡哇伊呀~的博客-CSDN 博客 (yinxiang.com)](https://app.yinxiang.com/shard/s37/nl/24388549/daf35e74-1bcf-4340-aa77-1b3c6a8b2b7b)

(1)v6 中 `Switch` 名称变为 `Routes`

(2) v6 `&lt;Route>` 不再支持子组件，改为使用 `element` 属性

(3) v6 中， `exact` 属性不再需要

(4)v6 保留 `Link`， `NavLink`， 但是 `NavLink` 的 `activeClassName` 属性被移除。

(5)v6 移除 `Redirect`组件，改为使用 `Navigate`:


&lt;Route path="/" element ={&lt;Navigate replace to="/welcome" />} />



(6)v6 用 `useNavigate` 实现编程式导航，`useHistory` 被移除

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-react-router-dom-的-v5-使用记录" tabindex="-1"><a class="header-anchor" href="#_2-react-router-dom-的-v5-使用记录" aria-hidden="true">#</a> 2.react-router-dom 的 v5 使用记录</h2>
<p><a href="https://app.yinxiang.com/shard/s37/nl/24388549/255a5de7-608e-4591-9203-c6edfa2f900e" target="_blank" rel="noopener noreferrer">009---React Router 中文文档（v5 ） - 掘金 (yinxiang.com)<ExternalLinkIcon/></a></p>
<p>(1)Link 和 NavLink 使用对比</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// to为string
&lt;Link to="/about">关于&lt;/Link>

// to为obj
&lt;Link to={{
  pathname: '/courses',
  search: '?sort=name',
  hash: '#the-hash',
  state: { fromDashboard: true }
}}/>

// replace
&lt;Link to="/courses" replace />

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) NavLink 是 Link 的一个特定版本，会在匹配上当前的 url 的时候给已经渲染的元素添加参数，组件的属性有</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
activeClassName(string)：设置选中样式，默认值为 active
activeStyle(object)：当元素被选中时，为此元素添加样式
exact(bool)：为 true 时，只有当导致和完全匹配 class 和 style 才会应用
strict(bool)：为 true 时，在确定为位置是否与当前 URL 匹配时，将考虑位置 pathname 后的斜线
isActive(func)判断链接是否激活的额外逻辑的功能



// activeClassName选中时样式为selected
&lt;NavLink
  to="/faq"
  activeClassName="selected"
>FAQs&lt;/NavLink>

// 选中时样式为activeStyle的样式设置
&lt;NavLink
  to="/faq"
  activeStyle={{
    fontWeight: 'bold',
    color: 'red'
   }}
>FAQs&lt;/NavLink>

// 当event id为奇数的时候，激活链接
const oddEvent = (match, location) => {
  if (!match) {
    return false
  }
  const eventID = parseInt(match.params.eventID)
  return !isNaN(eventID) &amp;&amp; eventID % 2 === 1
}

&lt;NavLink
  to="/events/123"
  isActive={oddEvent}
>Event 123&lt;/NavLink>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3) Switch 是唯一的因为它仅仅只会渲染一个路径。相比之下（不使用 Switch 包裹的情况下），每一个被 location 匹配到的 Route 将都会被渲染。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>React Router中的组件主要分为三类：

1. 路由器，例如 BrowserRouter 和 HashRouter
2. 路由匹配器： 例如Route和Switch
3. 导航：例如Link, NavLink, and Redirect

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
