## 概览

meta标签一般放在整个`html`页面的`head`部分，在`MDN`中对他这样定义：

> meta是**文档级元数据元素**，用来表示那些不能由其它 HTML 元相关元素（`<base>`、`<link>`, `<script>`、`<style>`或 `<title>`）之一表示的任何元数据。

是不是感觉看起来很抽象？说白了就是为了传达信息。

先看看`meta` 元素定义的元数据的类型：

- 如果设置了 `name`属性，`meta` 元素提供的是文档级别的元数据，应用于整个页面。
- 如果设置了 `http-equiv`属性，`meta` 元素则是编译指令，提供的信息与类似命名的 HTTP 头部相同。
- 如果设置了 `charset`属性，`meta` 元素是一个字符集声明，告诉文档使用哪种字符编码。
- 如果设置了 `itemprop` 属性，`meta` 元素提供用户定义的元数据。

## name属性

`name`和`content`一起使用，前者表示要表示的元数据的`名称`，后者是元数据的`值`。

### author

用来表示网页的作者的名字，例如某个组织或者机构。

```html
html
复制代码<meta name="author" content="aaa@mail.abc.com">
```

### description

是一段简短而精确的、对页面内容的描述。以头条和taobao的`description`标签为例：

![img](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/49f4385dc1ed48feaa3fc5e0b46acf83~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/825ce35f4abd4c06afa40e66013579bf~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

### keywords

与页面内容相关的关键词，使用逗号分隔。某些搜索引擎在遇到这些关键字时，会用这些关键字对文档进行分类。 还是以头条和taobao为例

![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0e7392738a9648d18a959b3cdb63cef5~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)





~~~


<meta name="keywords"  content="淘宝，淘宝，网上购物，在线交易，网上交易，网店，购物，拍卖，网上，购物">
~~~







![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/78198feb62944b84a2b464b9bec5df6c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

### viewpoint

为 viewport（视口）的初始大小提供指示。目前仅用于移动设备。

可能你也发现了，我们在`vscode`中自动生成`html`的代码片段时，会自动生成：

```html
html
复制代码<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

`width`用来设置 viewport 的宽度为设备宽度;

`initial-scale`为设备宽度与 viewport 大小之间的缩放比例。



<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,minimal-ui">

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1be03506cff042e89f244a225a6bcb05~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

### robots

表示爬虫对此页面的处理行为，或者说，应当遵守的规则，是用来做搜索引擎抓取的。

它的`content`可以为：

1. `all`:搜索引擎将索引此网页，并继续通过此网页的链接索引文件将被检索
2. `none`:搜索引擎讲忽略此网页
3. `index`:搜索引擎索引此网页
4. `follow`:搜索引擎继续通过此网页的链接索引搜索其它的网页

### renderer

用来指定双核浏览器的渲染方式，比如360浏览器，我们可以通过这个设置来指定360浏览器的渲染方式

```html
html
复制代码<meta name="renderer" content="webkit"> //默认webkit内核
<meta name="renderer" content="ie-comp"> //默认IE兼容模式
<meta name="renderer" content="ie-stand"> //默认IE标准模式
```

## http-equiv

`http-equiv`也是和`content`一起使用，前者表示要表示的元数据的`名称`，后者是元数据的`值`。

`http-equiv` 所有允许的值都是特定 HTTP 头部的名称，

### X-UA-Compatible

我们最常见的`http-equiv`值可能就是`X-UA-Compatible`了，它常常长这个样子：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0a51d78fca0e470d871cdad5aac6d331~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

它是用来是做IE浏览器适配的。

`IE=edge`告诉浏览器，以当前浏览器支持的最新版本来渲染，IE9就以IE9版本来渲染。

`chrome=1`告诉浏览器，如果当前IE浏览器安装了`Google Chrome Frame`插件，就以chrome内核来渲染页面。

像上图这种两者都存在的情况：如果有chrome插件，就以chrome内核渲染，如果没有，就以当前浏览器支持的最高版本渲染。

另外，这个属性支持的范围是`IE8-IE11`

你可能注意到了，如果在我们的`http`头部中也设置了这个属性，并且和`meta`中设置的有冲突，那么哪一个优先呢？ 答案是：开发者偏好（`meta`元素）优先于Web服务器设置（HTTP头）。

### content-type

用来声明文档类型和字符集

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e79c0e0e369749cc862755af01bfd01b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)





### x-dns-prefetch-control

一般来说，HTML页面中的a标签会自动启用DNS提前解析来提升网站性能，但是在使用https协议的网站中失效了，我们可以设置：

![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29822f4066704d098e91860a98d2cae2~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

来打开dns对a标签的提前解析、



~~~
<meta  http-equiv="content-Type"  content="text/html"  chartset="utf-8">

<meta  http-equiv="x-dns-prefetch-control"  content="on">
~~~



### cache-control、Pragma、Expires

和缓存相关的设置，但是遗憾的是这些往往不生效，我们一般都通过`http headers`来设置缓存策略

## 总结

常用了就是这些啦~实际使用时还有很多新的需要学习，这就需要俺们平时多看看其他网站是怎么设置`meta`的~ 一起加油叭

## 参考文章

1. [：文档级元数据元素](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FHTML%2FElement%2Fmeta)
2. [meta标签是做什么的](https://juejin.cn/post/6987919006468407309#heading-13)
3. [那些你不知道的meta标签](https://juejin.cn/post/6844903750239272973#heading-3)
4. [HTML meta标签总结与属性使用介绍](https://juejin.cn/post/6844903971308617736#heading-10)



作者：花椰菜菜
链接：https://juejin.cn/post/7089271039842058253
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
