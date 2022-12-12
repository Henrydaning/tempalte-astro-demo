[[toc]]

## 1.Chrome 相关开发记录插件

### （1）ajax 插件拦截器

#### 项目架构

### （2）

####

## React 和 Chrome 插件项目文件夹目录结构

```

- `manifest.json` 是整个插件的功能和文件配置清单，非常重要
- `images` 存放的为插件的图标文件
- `_locales` 存放的为插件的国际化语言脚本
- `scripts` 存放的为`js` 文件
- `styles`存放的为样式文件
- `html`存放的`html`文件

```

## **`manifest.json` 文件**

```
{
 // 清单文件的版本，这个必须写，而且必须是2
 "manifest_version": 2,
 // 插件的名称
 "name": "hello-world-plugin",
 // 插件的版本
 "version": "1.0.0",
 // 插件描述
 "description": "简单的Chrome扩展demo",
 // 图标，一般偷懒全部用一个尺寸的也没问题
 "icons":
 {
  "16": "img/icon.png",
  "48": "img/icon.png",
  "128": "img/icon.png"
 },
 // 会一直常驻的后台JS或后台页面
 "background":
 {
  // 2种指定方式，如果指定JS，那么会自动生成一个背景页
  "page": "background.html"
  //"scripts": ["js/background.js"]
 },
 // 浏览器右上角图标设置，browser_action、page_action、app必须三选一
 "browser_action": 
 {
  "default_icon": "img/icon.png",
  // 图标悬停时的标题，可选
  "default_title": "hello-world-plugin",
  "default_popup": "popup.html"
 },
 // 当某些特定页面打开才显示的图标
 /*"page_action":
 {
  "default_icon": "img/icon.png",
  "default_title": "我是pageAction",
  "default_popup": "popup.html"
 },*/
 // 需要直接注入页面的JS
 "content_scripts": 
 [
  {
   //"matches": ["http://*/*", "https://*/*"],
   // "<all_urls>" 表示匹配所有地址
   "matches": ["<all_urls>"],
   // 多个JS按顺序注入
   "js": ["js/jquery-1.8.3.js", "js/content-script.js"],
   // JS的注入可以随便一点，但是CSS的注意就要千万小心了，因为一不小心就可能影响全局样式
   "css": ["css/custom.css"],
   // 代码注入的时间，可选值： "document_start", "document_end", or "document_idle"，最后一个表示页面空闲时，默认document_idle
   "run_at": "document_start"
  },
  // 这里仅仅是为了演示content-script可以配置多个规则
  {
   "matches": ["*://*/*.png", "*://*/*.jpg", "*://*/*.gif", "*://*/*.bmp"],
   "js": ["js/show-image-content-size.js"]
  }
 ],
 // 权限申请
 "permissions":
 [
  "contextMenus", // 右键菜单
  "tabs", // 标签
  "notifications", // 通知
  "webRequest", // web请求
  "webRequestBlocking",
  "storage", // 插件本地存储
  "http://*/*", // 可以通过executeScript或者insertCSS访问的网站
  "https://*/*" // 可以通过executeScript或者insertCSS访问的网站
 ],
 // 普通页面能够直接访问的插件资源列表，如果不设置是无法直接访问的
 "web_accessible_resources": ["js/inject.js"],
 // 插件主页，这个很重要，不要浪费了这个免费广告位
 "homepage_url": "https://www.baidu.com",
 // 覆盖浏览器默认页面
 "chrome_url_overrides":
 {
  // 覆盖浏览器默认的新标签页
  "newtab": "newtab.html"
 },
 // Chrome40以前的插件配置页写法
 "options_page": "options.html",
 // Chrome40以后的插件配置页写法，如果2个都写，新版Chrome只认后面这一个
 "options_ui":
 {
  "page": "options.html",
  // 添加一些默认的样式，推荐使用
  "chrome_style": true
 },
 // 向地址栏注册一个关键字以提供搜索建议，只能设置一个关键字
 "omnibox": { "keyword" : "go" },
 // 默认语言
 "default_locale": "zh_CN",
 // devtools页面入口，注意只能指向一个HTML文件，不能是JS文件
 "devtools_page": "devtools.html"
}
```

配置 manifest.jsonwenjian neirogn

```
{
  "name": "Chrome插件Demo",
  "version": "1.0",
  "description": "React开发chrome插件Demo。",
  // 图标，图省事的话，所有尺寸都用一个图也行
  "icons": {
    "16": "images/icon.png",
    "48": "images/icon.png",
    "128": "images/icon.png"
  },
  // manifest.json的文件版本，必须是2
  "manifest_version": 2,
  // popup页面配置
  "page_action": {
    // 浏览器插件按钮的图标
    "default_icon": "images/icon.png",
    // 浏览器插件按钮hover显示的文字
    "default_title": "React CRX",
    // popup页面的路径（根目录为最终build生成的插件包目录）
    "default_popup": "index.html"
  },
  // background script配置
  "background": {
    // background script路径（根目录为最终build生成的插件包目录）
    "scripts": [
      "static/js/background.js"
    ],
    // 官方强烈建议这里为false，乖乖写就行了
    "persistent": false
  },
  // content script配置
  "content_scripts": [
    {
      // 应用于哪些页面地址（可以使用正则，<all_urls>表示匹配所有地址）
      "matches": [
        "<all_urls>"
      ],
      // 注入的css，注意不要污染样式
      "css": [
        "static/css/content.css"
      ],
      // 注入的js
      "js": [
        "static/js/content.js"
      ],
      // 代码注入的时间，可选document_start、document_end、document_idle（默认）
      "run_at": "document_end"
    }
  ],
  // 权限申请（需要background发起跨域请求的url也放在这里）
  "permissions": [
    // 标签
    "tabs",
    // 根据定制的网页规则，采取相应的措施（例如只在baidu.com启动组件）
    "declarativeContent",
    // 插件本地存储
    "storage",
    // 通知
    "notifications"
  ],
  // 如果向目标页面插入js，需要在这里声明下才能获得执行的权限
  "web_accessible_resources": ["insert.js"]
}
```

## plasmo 版本

Plasmo v0.42.0

此时内容输出

```
内置了各种
npm create plasmo -- --with-env

或是其他的with-vue


第二步

plasmo0.42.0

```

## vue 框架开发 chrome 插件的结构

[vueChrome 代码记录](https://gitee.com/nyhxiaoning/chrome-tools-vue-create-plugins-cli.git)

## 3.plasmo 插件 react 项目插件开发

[plasmo-react 项目](https://gitee.com/front-end-tool-development/plasma-react-browser-plugin.git)

### 实时开发预览方法

pnpm dev --target=chrome-mv3-dev
在 build 下面生成一个：chrome-mv3-dev-dev 文件夹，这样导入浏览器，然后可以实时修改
此时，不可以将 dev 的启动关闭

### 打包不同版本的内容

plasmo build --target=chrome-mv3-dev

### （1）问题开发：CHROME 扩展笔记之拒绝 unsafe-eval 求值

```
这是浏览器自带的"网页安全政策"（Content Security Policy）导致的；浏览器默认的Content-Security-Policy的安全政策时“ default-src ‘self’ ”。我们可以通过manifest.json重新配置Content Security Policy的配置开启eval功能;

,"content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'"


```
