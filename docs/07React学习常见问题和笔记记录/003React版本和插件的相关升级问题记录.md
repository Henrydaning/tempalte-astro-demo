[[toc]]

## 1.react-router-dom 从 v5 升级后使用变化

React Router 中的组件主要分为三类：

1. 路由器，例如 BrowserRouter 和 HashRouter
2. 路由匹配器： 例如 Route 和 Switch
3. 导航：例如 Link, NavLink, and Redirect

```
[000---React Router v5 和 v6 的比较\_小公鸡卡哇伊呀~的博客-CSDN 博客 (yinxiang.com)](https://app.yinxiang.com/shard/s37/nl/24388549/daf35e74-1bcf-4340-aa77-1b3c6a8b2b7b)

(1)v6 中 `Switch` 名称变为 `Routes`

(2) v6 `<Route>` 不再支持子组件，改为使用 `element` 属性

(3) v6 中， `exact` 属性不再需要

(4)v6 保留 `Link`， `NavLink`， 但是 `NavLink` 的 `activeClassName` 属性被移除。

(5)v6 移除 `Redirect`组件，改为使用 `Navigate`:


<Route path="/" element ={<Navigate replace to="/welcome" />} />



(6)v6 用 `useNavigate` 实现编程式导航，`useHistory` 被移除

```

## 2.react-router-dom 的 v5 使用记录

[009---React Router 中文文档（v5 ） - 掘金 (yinxiang.com)](https://app.yinxiang.com/shard/s37/nl/24388549/255a5de7-608e-4591-9203-c6edfa2f900e)

(1)Link 和 NavLink 使用对比

```
// to为string
<Link to="/about">关于</Link>

// to为obj
<Link to={{
  pathname: '/courses',
  search: '?sort=name',
  hash: '#the-hash',
  state: { fromDashboard: true }
}}/>

// replace
<Link to="/courses" replace />

```

(2) NavLink 是 Link 的一个特定版本，会在匹配上当前的 url 的时候给已经渲染的元素添加参数，组件的属性有

```

activeClassName(string)：设置选中样式，默认值为 active
activeStyle(object)：当元素被选中时，为此元素添加样式
exact(bool)：为 true 时，只有当导致和完全匹配 class 和 style 才会应用
strict(bool)：为 true 时，在确定为位置是否与当前 URL 匹配时，将考虑位置 pathname 后的斜线
isActive(func)判断链接是否激活的额外逻辑的功能



// activeClassName选中时样式为selected
<NavLink
  to="/faq"
  activeClassName="selected"
>FAQs</NavLink>

// 选中时样式为activeStyle的样式设置
<NavLink
  to="/faq"
  activeStyle={{
    fontWeight: 'bold',
    color: 'red'
   }}
>FAQs</NavLink>

// 当event id为奇数的时候，激活链接
const oddEvent = (match, location) => {
  if (!match) {
    return false
  }
  const eventID = parseInt(match.params.eventID)
  return !isNaN(eventID) && eventID % 2 === 1
}

<NavLink
  to="/events/123"
  isActive={oddEvent}
>Event 123</NavLink>



```

(3) Switch 是唯一的因为它仅仅只会渲染一个路径。相比之下（不使用 Switch 包裹的情况下），每一个被 location 匹配到的 Route 将都会被渲染。

```
React Router中的组件主要分为三类：

1. 路由器，例如 BrowserRouter 和 HashRouter
2. 路由匹配器： 例如Route和Switch
3. 导航：例如Link, NavLink, and Redirect

```
