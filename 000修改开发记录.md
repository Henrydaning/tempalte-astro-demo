### 配置目录方法

```
修改文件：packages\test-vuepress-to-astro-one\src\consts.ts
增加一个片段部分目录
'four Section': [{ text: 'Page 5', link: 'en/page-5' }],
自动将右侧的子菜单内容，解析出来。


```

### 2.配置静态资源图片：md 或是 astro 文件

```
存储在 public/assets/stars.png 的本地图片
引入方式
-----------------------md文件中
<!-- 存储在 public/assets/stars.png 的本地图片 -->
![一片繁星闪烁的夜空。](/assets/stars.png)
<img src="/assets/stars.png" alt="一片繁星闪烁的夜空。">

<!-- 位于其它服务器上的图片 -->
![Astro 的 logo](https://astro.build/assets/logo.png)
<img src="https://astro.build/assets/logo.png" width="25" alt="Astro 的 logo">

-----------------------img标签使用
---
import rocket from '../images/rocket.svg';
---
<!-- 位于其它服务器上的图片 -->
<img src="https://astro.build/assets/logo.png" width="25" alt="Astro 的 logo">

<!-- 存储在 public/assets/stars.png 的本地图片 -->
<img src="/assets/stars.png" alt="一片繁星闪烁的夜空。">
```

### 3.配置目录路由左侧

#### 必须注意，这里的目录的 consts.ts 文件中

目录必须用英文开头，不能数字开头。

### 4.如何配置引入图片

```
可以在 .md 文件中使用 Markdown 标准语法 ![]()，或 HTML 标准语法 <img> 标签，来调用位于 public/ 文件夹下或其它服务器上的图片。

```

### 5.astro 配置网站

[astro 网站](https://astro.build/)

[astro 的 API 网站](https://docs.astro.build/zh-cn/guides/markdown-content/)

#### 增加直接编辑当前的 md 的页面功能

一般直接访问查看文件的网站
https://github.com/nyhxiaoning/nyhxiaoning.github.io/blob/master/src/content/docs/en/zero.md

官方学习的文档地址
https://github.com/withastro/docs/blob/main/src/content/docs/zh-cn/guides/images.mdx

```
------------------------------------------第一部分
src\components\Footer
在页脚部分内容增加。编辑下面的文件
src\components\Footer\AvatarList.astro

const { path } = Astro.props;
const resolvedPath = `examples/docs/${path}`;

const url = `https://api.github.com/repos/withastro/astro/commits?path=${resolvedPath}`;
//地址当前的url
const commitsURL = `https://github.com/nyhxiaoning/nyhxiaoning.github.io/src/content/docs/${resolvedPath}`;

-------------------------------------------第二部分
src\consts.ts
文件编辑
/**
 * 打开源头编辑页面的时候
 */
export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;


------------------------------------------第三部分
文件的md存储相对路径
src\layouts\MainLayout.astro
这里配置修改一个文件
currentFile，这个变量修改内容：因为查看github库资源的内容后，这里看是这样显示的，所以将原来的pages修改为：content/docs即可
const currentFile = `src/content/docs${currentPage.replace(/\/$/, '')}.md`;
```

### 6.Markdown 页面构建路由

标题部分 Markdown 页面

```
Astro 将 /src/pages 目录中的任一 .md 文件视为一个页面。将文件放在此目录或其的任何一个子目录中，则将用文件的路径名自动构建页面路由。

注意：这里的内容文件名默认自动变成路由名称

```

### 7.文件夹结构，在 astro 中怎么写

#### 注意路由名称写成英文，不要数字开头，如果是中文，那么使用 base64 转码一下。

注意使用 en 这种文件夹的时候，注意当前的 md 文件必须是：在 en 的第一个子集下面。

```
[001前端经典问题考究思考](/en/zero/001%E5%89%8D%E7%AB%AF%E7%BB%8F%E5%85%B8%E9%97%AE%E9%A2%98%E8%80%83%E7%A9%B6%E6%80%9D%E8%80%83)
下面的内容
#### 002前端经典问题考究思考：错误，修改为上面的内容
[001前端经典问题考究思考](/en/zero/001%E5%89%8D%E7%AB%AF%E7%BB%8F%E5%85%B8%E9%97%AE%E9%A2%98%E8%80%83%E7%A9%B6%E6%80%9D%E8%80%83.md)
```

#### 一个文件夹就是一个菜单

这里注意：content/docs/en 下的文件夹每一个都是一个
文件块。
引用的时候:注意方式：这里的 docs 下面的父级文件夹必须写。
en 加上，然后最后的文件名称后需要加上/表示时路由，例如

```
有关 Astro 功能的详细信息，请查阅
[为什么选择 Astro](/zh-cn/concepts/why-astro/)的详细说明。✨

真实的文件位置：
src\content\docs\zh-cn\concepts\why-astro.mdx
需要解析成
[为什么选择 Astro](/zh-cn/concepts/why-astro/)



```

### 8.一个 astro 的英文情况下菜单解析的问题：小写英文。

如果出现英文，都小写，因为 windows 系统大小写不敏感。
当然必须是文件夹小写字母。路由第一级解析问题。第二级的时候可以大小写。
因为内部astro会将文件中大写字母转成小写字母渲染处理。

注意：文件夹必须小写，文件名称尽量用小写，当前可以允许大写。
---但是有一个bug.尽量用小写文件名称。因为astro只默认解析首字母小写，如果写成了中间字母大写，
又会导致解析报错，所以不要自讨苦吃。
给astro提一个PR。

```
en/0nodejavascript个人前端项目实战记录和链接/006常用h5开发总结

改成小写后，如果使用路由跳转使用
注意：这里可以使用中文路由了，小写英文。
[007常用react开发总结](/en/zero/007常用react开发汇总)


```

### 9.设置菜单

（E:\companyDoc\docs-main\docs-main）
固定菜单到最左侧
引入官网的 API 案例：

### 10.vuepress 迁移到 astro

#### (1)img 图片中，

必须放在 public 下的文件夹下，而 vuepress 可以在当前的 src 下面。

#### （2）配置 base 打包部署

```
vuepress默认不需要配置，但是
astro中需要配置一下文件：astro.config.mjs

site: 'https://astronaut.github.io',
base: '/my-repo',


site 应当为 https://<YOUR_USERNAME>.github.io 或 https://my-custom-domain.com
base 应当是你的存储库的名称，以正斜杠（/）开头, 例如 /my-repo。这是为了告诉 Astro 你的网站的根目录是 /my-repo，而非默认的 /。

！！！！！！！！！！！！！！大坑，注意一下：如果当前的xxx.github.io的仓库名称，不要设置base的地址，默认就可以。

```


#### （3）部署github.io的时候，出现了下面的问题：暂时废弃这个github.io的方式，转向gitee和vercel
~~~
CSP的字体加载问题和限制，这里，尝试使用网上的各种CSP的安全策略，删除和引入相关的文件都不生效，
Refused to load the font 'data:application/font-woff2;base64,
 <meta http-equiv="Content-Security-Policy" content="default-src *; connect-src * ws://* wss://*; style-src * 'unsafe-inline' 'unsafe-eval'; media-src * ; img-src * data:; font-src * ; script-src * 'unsafe-inline' 'unsafe-eval';" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

~~~

##### 使用vercel网站部署
登录网站：https://vercel.com/
创建一个项目站点
~~~
因为是部署在vercel，所以astro.config.mjs中配置site（base默认不配置）
https://vuepress-note-net.vercel.app
这里的地址名称是vercel的Project Name名称，那么地址就是https://ProjectName.vercel.app

测试另外一个项目。
在overview的菜单位置，创建一个项目


~~~

### 11 突然的问题

#### （1）如果出现当前的报错：废弃后，重新开始

```

astro.config.mjs文件中，site必须配置一下，否则new URL会报错使用的时候。
 D:\works\blog-github.io\nyhxiaoning.github.io\src\layouts\MainLayout.astro:31:24
  Code:
    30 |       {`${data.title} 🚀 ${SITE.title}`}
    > 31 |     </title>
         |                        ^
废弃这个分支，重新下载开始

	// TODO:这里的地址site和base写的慎重一些，如果都写了，这里可能出现解析错误地址
	// TODO:如果这里site地址不配置，可能出现new URL的地址解析出错
	site: 'https://nyhxiaoning.github.io/',

```

#### （2）部署到githubAction注意
因为这里的目录是dist，所以只是上传dist就可以，因为如果全部上传，默认githubAction会扫描其他src文件夹，会报错。

使用官方的astro的部署脚本，自动搜索即可。


#### （3）部署站点需要的网站
- vercel的部署点
[vercel](https://vercel.com/nyhxiaoning/nyhxiaoning-github-io/F1AnDF37xs5Kgmgaf4cbcJcakK3J)

- algolia
[algolia](https://www.algolia.com/account/api-keys/all?applicationId=L77QL0K6KC)

- docsearch服务器搜索功能
[docsearch](https://docsearch.algolia.com/apply/)
注意申请搜索的地方时候问题：我们申请之后，可能过一两天会收到邮件回复，或是3-5天。
收到邮件之后，此时需要回复邮件，告诉自己就是网站的维护者，并且可以修改代码：
注意，如果搜索不到数据，那么需要查看algolia的地址查看：
~~~
<script type="text/javascript">
docsearch({
appId: NYHNYH-R4VZ6APA0K,
apiKey: e4d1f9139e83a60fe82b1c9242f2d599,
indexName: henry-psi,
container: '### REPLACE ME WITH A CONTAINER (e.g. div) ###'
debug: false // Set debug to true if you want to inspect the modal
});
</script>

~~~
[vuepress中使用algolia](https://app.yinxiang.com/u/0/client/web#?b=f42f2f6a-13c6-417f-ad96-132da39431b9&n=cf706c02-6833-44cc-b209-c537d34e6192&s=s37&)


#### （4）报错不要文件名中有点和大写字母，解析出错。
~~~
Node.js优化性能.md

~~~

#### （5）切换路由后，这里的最左侧的菜单栏选中态。
这里的选中态选中后，中间再次点击跳转后，左侧的选中态消失。
~~~
-LeftSidebar.astro文件找到，修改方法，增加一个script标签内的逻辑，左侧
-PageContent.astro文件控制第二级，因为中间的内容。
<script is:inline>

  // TODO:根据当前的选中的路由的名称，反转成路由菜单
  console.log("%s 当前的值💡 ");
  console.log(
    "%c💡 当前的最新打印，用完删除",
    "background-color:blue;color:#fff"
  );
  let testDiv = document.getElementsByClassName("nav-group astro-KQNE5HRN")[0];

  testDiv.getElementsByTagName("ul")[0].children[5].style =
    "color: rgb(56,149,255);font-weight:700;background:rgb(225,239,255)";
</script>

~~~