
## meta标签一般放在整个html页面的head部分，在MDN中对他这样定义：

meta是文档级元数据元素，用来表示那些不能由其它 HTML 元相关元素（<base>、<link>, <script>、<style>或 <title>）之一表示的任何元数据。

是不是感觉看起来很抽象？说白了就是为了传达信息。
### 四大数据属性
先看看meta 元素定义的元数据的类型：

- 如果设置了 name属性，meta 元素提供的是文档级别的元数据，应用于整个页面。
- 如果设置了 http-equiv属性，meta 元素则是编译指令，提供的信息与类似命名的 HTTP 头部相同。
- 如果设置了 charset属性，meta 元素是一个字符集声明，告诉文档使用哪种字符编码。
- 如果设置了 itemprop 属性，meta 元素提供用户定义的元数据。

## name属性
name和content一起使用，前者表示要表示的元数据的名称，后者是元数据的值。
### author
用来表示网页的作者的名字，例如某个组织或者机构。
~~~
<meta name="author" content="aaa@mail.abc.com">
~~~
### description
是一段简短而精确的、对页面内容的描述。以头条和taobao的description标签为例：



### keywords
与页面内容相关的关键词，使用逗号分隔。某些搜索引擎在遇到这些关键字时，会用这些关键字对文档进行分类。
还是以头条和taobao为例

~~~

<meta name="keywords"  content="今日头条，头条，头条新闻">
<meta name="keywords"  content="淘宝，淘宝，网上购物，在线交易，网上交易，网店，购物，拍卖，网上，购物">

~~~


### viewpoint
为 viewport（视口）的初始大小提供指示。目前仅用于移动设备。
可能你也发现了，我们在vscode中自动生成html的代码片段时，会自动生成：
~~~
<meta name="viewport" content="width=device-width, initial-scale=1.0">
~~~

width用来设置 viewport 的宽度为设备宽度;
initial-scale为设备宽度与 viewport 大小之间的缩放比例。
~~~
<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,minimal-ui">
~~~

### robots
表示爬虫对此页面的处理行为，或者说，应当遵守的规则，是用来做搜索引擎抓取的。
它的content可以为：

all:搜索引擎将索引此网页，并继续通过此网页的链接索引文件将被检索
none:搜索引擎讲忽略此网页
index:搜索引擎索引此网页
follow:搜索引擎继续通过此网页的链接索引搜索其它的网页

### renderer
用来指定双核浏览器的渲染方式，比如360浏览器，我们可以通过这个设置来指定360浏览器的渲染方式
~~~
<meta name="renderer" content="webkit"> //默认webkit内核
<meta name="renderer" content="ie-comp"> //默认IE兼容模式
<meta name="renderer" content="ie-stand"> //默认IE标准模式
~~~



## http-equiv
http-equiv也是和content一起使用，前者表示要表示的元数据的名称，后者是元数据的值。
http-equiv 所有允许的值都是特定 HTTP 头部的名称，
X-UA-Compatible
我们最常见的http-equiv值可能就是X-UA-Compatible了，它常常长这个样子：

它是用来是做IE浏览器适配的。
IE=edge告诉浏览器，以当前浏览器支持的最新版本来渲染，IE9就以IE9版本来渲染。
chrome=1告诉浏览器，如果当前IE浏览器安装了Google Chrome Frame插件，就以chrome内核来渲染页面。
像上图这种两者都存在的情况：如果有chrome插件，就以chrome内核渲染，如果没有，就以当前浏览器支持的最高版本渲染。
另外，这个属性支持的范围是IE8-IE11
你可能注意到了，如果在我们的http头部中也设置了这个属性，并且和meta中设置的有冲突，那么哪一个优先呢？
答案是：开发者偏好（meta元素）优先于Web服务器设置（HTTP头）。
### content-type
用来声明文档类型和字符集
~~~
<meta  http-equiv="content-Type"  content="text/html"  chartset="utf-8">


~~~
### x-dns-prefetch-control
一般来说，HTML页面中的a标签会自动启用DNS提前解析来提升网站性能，但是在使用https协议的网站中失效了，我们可以设置：

来打开dns对a标签的提前解析
~~~
<meta  http-equiv="x-dns-prefetch-control"  content="on">

~~~
### cache-control、Pragma、Expires
和缓存相关的设置，但是遗憾的是这些往往不生效，我们一般都通过http headers来设置缓存策略
总结
常用了就是这些啦~实际使用时还有很多新的需要学习，这就需要俺们平时多看看其他网站是怎么设置meta的~ 一起加油叭



## 参考文章

1. [：文档级元数据元素](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FHTML%2FElement%2Fmeta)
2. [meta标签是做什么的](https://juejin.cn/post/6987919006468407309#heading-13)
3. [那些你不知道的meta标签](https://juejin.cn/post/6844903750239272973#heading-3)
4. [HTML meta标签总结与属性使用介绍](https://juejin.cn/post/6844903971308617736#heading-10)

