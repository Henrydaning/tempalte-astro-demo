import{_ as s,r as l,o as a,c as d,a as e,b as r,e as n,d as t}from"./app.5805b0e6.js";const v={},u=e("h2",{id:"_1-lerna-\u5B9E\u73B0-monorepo-\u67B6\u6784\u5B9E\u73B0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-lerna-\u5B9E\u73B0-monorepo-\u67B6\u6784\u5B9E\u73B0","aria-hidden":"true"},"#"),n(" 1.lerna \u5B9E\u73B0 monorepo \u67B6\u6784\u5B9E\u73B0")],-1),c=e("ul",null,[e("li",null,"lerna-monorepo \u67B6\u6784\u5B9E\u6218")],-1),o={href:"https://gitee.com/nyhxiaoning/lerna-workspace-projects-demos.git",target:"_blank",rel:"noopener noreferrer"},m=n("lerna \u9879\u76EE\u67B6\u6784\u7BA1\u7406\u6C47\u603B\u4F7F\u7528"),p=n(" \u5982\u679C\u67D0\u4E00\u4E2A\u9879\u76EE yarn \u5B89\u88C5\u4E0D\u4E0A\uFF0C\u5220\u9664\u76EE\u5F55\uFF0C\u91CD\u65B0\u521B\u5EFA\u5B50\u9879\u76EE\uFF0C\u91CD\u65B0\u5B89\u88C5 \u5FEB\u901F\u521B\u5EFA\u811A\u624B\u67B6\u547D\u4EE4"),b=t(`<h3 id="_1-\u521B\u5EFA-lerna-\u5DE5\u7A0B" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA-lerna-\u5DE5\u7A0B" aria-hidden="true">#</a> 1.\u521B\u5EFA Lerna \u5DE5\u7A0B\uFF1A</h3><p>git init lerna-demo &amp;&amp; cd lerna-demo &amp;&amp; lerna init</p><h3 id="_2-\u521B\u5EFA\u4E24\u4E2A-package" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u4E24\u4E2A-package" aria-hidden="true">#</a> 2.\u521B\u5EFA\u4E24\u4E2A package\uFF1A</h3><p>lerna create lerna-module1 lerna create lerna-module2</p><h3 id="_3-package-\u4E2D\u4E92\u76F8\u5F15\u7528-\u600E\u4E48\u521B\u5EFA\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#_3-package-\u4E2D\u4E92\u76F8\u5F15\u7528-\u600E\u4E48\u521B\u5EFA\u94FE\u63A5" aria-hidden="true">#</a> 3.package \u4E2D\u4E92\u76F8\u5F15\u7528\uFF0C\u600E\u4E48\u521B\u5EFA\u94FE\u63A5</h3><p>\u6BD4\u5982 module2 \u4F7F\u7528\u4E86 module1 \u7684\u5305</p><p>lerna add module1 --scope module2 \u8FD0\u884C\u6D4B\u8BD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>lerna run  test  --scope=lerna-module1\u6216\u662F
lerna run  test  --scope lerna-module1\u6216\u662F
lerna run  test  packages/lerna-module1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-pnpm-\u521B\u5EFA\u6B65\u9AA4-monrepo-\u9879\u76EE\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-pnpm-\u521B\u5EFA\u6B65\u9AA4-monrepo-\u9879\u76EE\u65B9\u5F0F" aria-hidden="true">#</a> 2.pnpm \u521B\u5EFA\u6B65\u9AA4 monrepo \u9879\u76EE\u65B9\u5F0F</h2><h4 id="\u65B0\u5EFA\u6839\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u65B0\u5EFA\u6839\u76EE\u5F55" aria-hidden="true">#</a> \u65B0\u5EFA\u6839\u76EE\u5F55</h4><p>\u9996\u5148 Monorepo \u9700\u8981\u4E00\u4E2A\u6839\u9879\u76EE\uFF0C\u6240\u4EE5\u6211\u4EEC\u5148\u521B\u5EFA\u4E00\u4E2A\u6839\u9879\u76EE\uFF0C\u4ED6\u76F8\u5F53\u4E8E\u4E00\u4E2A\u5BB9\u5668\uFF0C\u7528\u6765\u5B58\u653E\u6211\u4EEC\u7684\u5B50\u9879\u76EE\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u6839\u9879\u76EE\u5E76\u4E0D\u9700\u8981\u5B89\u88C5\u592A\u591A\u7684\u4F9D\u8D56</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u811A\u624B\u67B6\u81EA\u5DF1\u9009pnpm create vite
vanilla---vite\u7EAF\u811A\u624B\u67B6
vue
React
lit---lit+vite\u811A\u624B\u67B6
Preact


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u521B\u5EFA-pnpm-workspace-yaml" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-pnpm-workspace-yaml" aria-hidden="true">#</a> \u521B\u5EFA pnpm-workspace.yaml</h4><p>\u65B0\u5EFA pnpm-workspace.yaml \u6587\u4EF6\uFF0C\u4ED6\u7684\u4F5C\u7528\u662F\uFF1A\u6307\u5B9A\u5DE5\u4F5C\u7A7A\u95F4 workspace \u7684\u76EE\u5F55\uFF0C\u91CC\u9762\u7684\u5185\u5BB9\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>packages:
  # \u5B50\u9879\u76EE\u5B58\u653E\u7684\u5730\u65B9
  - &#39;packages/*&#39;
  \u5982\u679C\u6CA1\u6709\u4E0B\u9762\u7684\u53EF\u4EE5\u653E\u5165\u4E00\u4E2A\u5305\uFF0C\u5176\u5B9E\u600E\u4E48\u653E\u90FD\u53EF\u4EE5
  # \u516C\u7528\u7EC4\u4EF6\u76EE\u5F55
  - &#39;components/**&#39;
  # request\u76EE\u5F55
  - &#39;apis/**&#39;
  # utils\u76EE\u5F55
  - &#39;utils/**&#39;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u521B\u5EFA\u516C\u7528\u76EE\u5F55-\u5EFA\u8BAE\u662F\u4E00\u4E2A\u53EA\u542B\u6709\u811A\u624B\u67B6\u7684\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u516C\u7528\u76EE\u5F55-\u5EFA\u8BAE\u662F\u4E00\u4E2A\u53EA\u542B\u6709\u811A\u624B\u67B6\u7684\u5BB9\u5668" aria-hidden="true">#</a> \u521B\u5EFA\u516C\u7528\u76EE\u5F55\uFF08\u5EFA\u8BAE\u662F\u4E00\u4E2A\u53EA\u542B\u6709\u811A\u624B\u67B6\u7684\u5BB9\u5668\uFF09</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm create vite

Project name: apis
Select a framework: \u203A vanilla
Select a variant: \u203A vanilla-ts

npm create vite

Project name: utils
Select a framework: \u203A vanilla
Select a variant: \u203A vanilla-ts

npm init vue@3

Project Name -&gt; compnents
Typescript -&gt; Yes
JSX -&gt; Yes
Pinia -&gt; Yes
Testing -&gt; No
Eslint -&gt; Yes


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B50\u9879\u76EE\u5982\u4F55\u4F7F\u7528\u5E93-\u4F8B\u5982\u8BF7\u6C42-api-\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5B50\u9879\u76EE\u5982\u4F55\u4F7F\u7528\u5E93-\u4F8B\u5982\u8BF7\u6C42-api-\u5E93" aria-hidden="true">#</a> \u5B50\u9879\u76EE\u5982\u4F55\u4F7F\u7528\u5E93\uFF1A\u4F8B\u5982\u8BF7\u6C42 api \u5E93</h4><p>https://mp.weixin.qq.com/s/y0cHuMxc7bC9Lhh5q2j5zQ</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd apis

npm i axios

\u521B\u5EFA\u548C\u5BFC\u51FA\u81EA\u5DF1\u7684apo\u5C01\u88C5\u4EE3\u7801\u540E\uFF0C
\u4E00\u822C\u662F\u63A5\u53E3\u8BF7\u6C42\u62E6\u622A\u5668\u548C\u54CD\u5E94\u62E6\u622A\u5668
\u7136\u540Esrc\u6587\u4EF6\u4E0B\uFF0C\u653E\u4E00\u4E9B\u6A21\u5757\u7684\u8BF7\u6C42\u51FD\u6570
\u5728apis/src\u4E0B\u521B\u5EFA\uFF1A

request.ts---\u8BF7\u6C42\u548C\u54CD\u5E94\u62E6\u622A\u5668
user.ts---api\u7684\u5C01\u88C5\u63A5\u53E3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B8C\u6210\u540E\uFF0C\u5BF9\u4E8E\u8FD9\u4E2A apis \u7684\u5305\u8FDB\u884C\u4E2A\u6027\u547D\u4EE4\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u7684\u540D\u79F0\u548C\u7248\u672C\u53F7\uFF0C\u51B3\u5B9A\u4E86\u5B50\u9879\u76EE\u5F15\u7528\u65F6\u5019\u8FD9\u91CC\u7684\u663E\u793A\u3002</p><ul><li>\u4FEE\u6539 name \u548C version\uFF08\u5728 package.json\uFF09</li></ul><p>\u521B\u5EFA\u597D\u4E4B\u540E\uFF0C\u7136\u540E</p><h4 id="\u9879\u76EE\u5F15\u7528\u8FD9\u4E2A\u5305\u7684\u65F6\u5019" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u5F15\u7528\u8FD9\u4E2A\u5305\u7684\u65F6\u5019" aria-hidden="true">#</a> \u9879\u76EE\u5F15\u7528\u8FD9\u4E2A\u5305\u7684\u65F6\u5019</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u9996\u5148\u8FDB\u5165\u67D0\u4E00\u4E2A\u9879:\u8FD9\u91CC\u7684package.json\u4E2D\u7684name\u5C31\u662F\u8FD9\u91CC\u7684api-nyh\u540D\u79F0
pnpm  install  apis-nyh -D
\u9ED8\u8BA4\u5B89\u88C5\u5230\u751F\u4EA7\u73AF\u5883\u3002



- \u9879\u76EE\u6D4B\u8BD5\u4F7F\u7528api---\u6CE8\u610F\u8FD9\u91CC\u6709\u4E2A\u4F7F\u7528\u65B9\u6CD5
\u6CE8\u610F\u5F15\u5165\u7684\u65F6\u5019\uFF0C\u6CE8\u610F\u5148\u628A\u81EA\u5DF1\u7684\u7248\u672C\u5220\u9664\uFF0C\u7136\u540E\u4F7F\u7528 pnpm  install  apis-nyh -D
\u5982\u679C\u662F\u5F15\u7528\u672C\u5730workspace\u7684\u5305\uFF0C\u5305\u540D\u79F0\u524D\u9762\u52A0\u4E0A@



\u6BD4\u5982\u4E0B\u9762
import { getUser\uFF0CcreateUser } from &#39;apis-nyh&#39;


\u5982\u679C\u4E0A\u9762\u4E0D\u751F\u6548
\u9996\u5148\u5F15\u5165\u5305\u540E\uFF0C\u5728\u5305\u524D\u9762\u52A0\u4E0A\u4E00\u4E2A@\uFF0C\u5C31\u53EF\u4EE5\u968F\u610F\u7684\u4F7F\u7528\u4E86\uFF0C\u6BD4\u5982\u539F\u6765\u7684\u5305\u540D\u79F0\u662Fapis-nyh
\u4F7F\u7528\u7684\u65F6\u5019\u5FC5\u987B\u52A0\u4E0A@apis-nyh
\u8FD9\u6837\uFF0C\u6240\u6709\u7684\u5305\u90FD\u53EF\u4EE5\u4E00\u76EE\u4E86\u7136\u7684\u4F7F\u7528\u4E86\uFF0C\u53EA\u8981\u5C06\u6574\u4E2A\u9879\u76EE\u7528@xxxx\u5F15\u5165\u4EE5\u540E\uFF0C\u90FD\u662F\u6A21\u5757\u5316\u7684\u4F7F\u7528\u65B9\u5F0F\u4E86



import { getUser\uFF0CcreateUser } from &#39;@api-ts&#39;

\u6CE8\u610F\u6253\u5305\u540E\uFF0C\u5176\u5B9E\u662F\u4E00\u4E2A\u5BF9\u8C61\u8F93\u51FA\uFF0C
\u4F8B\u5982\uFF1A\u591A\u4E2A\u5BFC\u5165\u4E00\u4E2A\u5BF9\u8C61\uFF08\u591A\u4E2Aexport\u4EC5\u4EC5\u9002\u7528\u4E8E\u5355\u4E2A\u9879\u76EE\u4E2D\uFF0C\u5982\u679C\u8FD9\u4E2A\u9879\u76EE\u505Alib\u5E93\uFF0C\u90A3\u4E48\u53EA\u80FD\u5BFC\u51FA\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u4E0A\u6302\u5C5E\u6027\u6216\u662F\u65B9\u6CD5\uFF09
//!!!\u6CE8\u610F\u8FD9\u91CC\u7684\u5751\uFF0C\u88AB\u5751\u4E86
 export const userApi = {
    addFn: () =&gt; {
        return add
    },
    getUserFn: () =&gt; {
        return getUser
    },
    createUserFn: () =&gt; {
        return createUser
    },
    getCommentScheduleWeekFn: () =&gt; {
        return getCommentScheduleWeek
    },
    getCommentScheduleDayFn: () =&gt; {
        return getCommentScheduleDay
    },
    getSingleMusicDetailsFn: () =&gt; {
        return getSingleMusicDetails
    },
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u52A0\u5FEB\u6267\u884C\u6784\u5EFA\u901F\u5EA6\u7684-vue3-\u6846\u67B6\u547D\u4EE4-skiplibcheck" tabindex="-1"><a class="header-anchor" href="#\u52A0\u5FEB\u6267\u884C\u6784\u5EFA\u901F\u5EA6\u7684-vue3-\u6846\u67B6\u547D\u4EE4-skiplibcheck" aria-hidden="true">#</a> \u52A0\u5FEB\u6267\u884C\u6784\u5EFA\u901F\u5EA6\u7684 vue3 \u6846\u67B6\u547D\u4EE4--skipLibCheck</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E00\u822C\u9879\u76EEvue3\u5B89\u88C5\u540E\uFF0C\u6709\u4E00\u4E2A\u811A\u672Cbuild\uFF0C\u5982\u4E0B\uFF0C\u4F46\u662F\u6709\u65F6\u5019\u6267\u884C\u68C0\u67E5\u603B\u662F\u62A5\u9519\uFF0C\u90A3\u4E48\u53EF\u4EE5\u8DF3\u8FC7
pnpm i @test/utils -r --filter web-vite-client
&quot;build&quot;: &quot;vue-tsc --noEmit --skipLibCheck &amp;&amp; vite build&quot;


scripts.build \u5B57\u6BB5\uFF0C\u539F\u6765\u91CC\u9762\u6267\u884C\u4E86\u4E24\u6761\u547D\u4EE4 vue-tsc --noEmit &amp;&amp; vite build \uFF0C\u55EF\uFF1F\u8FD9\u4E2A vue-tsc \u662F\u5E72\u561B\u7684\uFF0C\u67E5\u627E\u4E86\u4E00\u4E0B\u539F\u6765\u662F\u5BF9 vue 3 \u7684\u4E00\u4E2A\u7C7B\u578B\u68C0\u6D4B\u5DE5\u5177\uFF0C\u7136\u540E\u6211\u5C1D\u8BD5\u5355\u72EC\u6267\u884C vue-tsc --noEmit \uFF0C\u4E0A\u9762\u7684\u62A5\u9519\u51FA\u73B0\u4E86\uFF0C\u539F\u6765\u662F vue-tsc \u5F15\u8D77\u7684\u9519\u8BEF\u3002



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5305\u5B89\u88C5\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5305\u5B89\u88C5\u64CD\u4F5C" aria-hidden="true">#</a> \u5305\u5B89\u88C5\u64CD\u4F5C</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> \u628A\u5305\u5B89\u88C5\u5728\u54EA\u91CC
 -w \u8868\u793A\u628A\u5305\u5B89\u88C5\u5728 root \u4E0B\uFF0C\u8BE5\u5305\u4F1A\u653E\u7F6E\u5728 &lt;root&gt;/node_modules \u4E0B\u3002
 \u5F53\u7136\u4E5F\u53EF\u4EE5\u628A\u628A\u5B89\u88C5\u5728\u6240\u6709 packages \u4E2D\uFF0C\u4F7F\u7528 -r \u4EE3\u66FF -w\u3002\u4F60\u5FC5\u987B\u4F7F\u7528\u5176\u4E2D\u4E00\u4E2A\u53C2\u6570\u3002
 \u4F8B\u5982\u628A dayjs \u88C5\u5165 packages/web \u4E0B\uFF0Cpackages/web \u4E2D\u7684 package.json name \u4E3A @test/web\u3002
 \u9700\u8981\u6267\u884C\uFF1Apnpm i dayjs -r --filter @test/web

\u547D\u4EE4\u5982\u4E0B
\u628A\u5305\u5B89\u88C5\u5230\u6240\u6709\u7684\u9879\u76EE
pnpm i dayjs -r

\u628A\u5305\u5B89\u88C5\u5728web-vite-client\u9879\u76EE(\u9879\u76EE\u540D\u79F0package\u7684name\u5B57\u6BB5)
pnpm i color -r --filter web-vite-client



\u6211\u4EEC\u5F00\u53D1\u597Dapis\u5305\u4E4B\u540E\u5B89\u88C5\u5230web-vite-client\u4E2D

pnpm i @nyh/apis -r --filter web-vite-client

pnpm i axios -r --filter @test/utils
pnpm i json-bigint -r --filter @test/utils
pnpm i @test/utils -r --filter web-vite-client


\u66F4\u65B0

pnpm up apis-ts -r --filter vue3-components
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pnpm-\u9879\u76EE\u914D\u7F6E\u9700\u8981\u589E\u52A0\u914D\u7F6E\u5168\u5C40-ts-config-json-\u6CE8\u610F\u7B2C\u4E00\u70B9" tabindex="-1"><a class="header-anchor" href="#pnpm-\u9879\u76EE\u914D\u7F6E\u9700\u8981\u589E\u52A0\u914D\u7F6E\u5168\u5C40-ts-config-json-\u6CE8\u610F\u7B2C\u4E00\u70B9" aria-hidden="true">#</a> pnpm \u9879\u76EE\u914D\u7F6E\u9700\u8981\u589E\u52A0\u914D\u7F6E\u5168\u5C40 ts.config.json:\u6CE8\u610F\u7B2C\u4E00\u70B9</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5168\u5C40\u7684tsconfig.json
{
  &quot;compilerOptions&quot;: {
    &quot;target&quot;: &quot;ESNext&quot;,
    &quot;module&quot;: &quot;ESNext&quot;,
    &quot;lib&quot;: [&quot;ESNext&quot;, &quot;DOM&quot;, &quot;DOM.Iterable&quot;, &quot;webworker&quot;],
    &quot;moduleResolution&quot;: &quot;Node&quot;,
    &quot;esModuleInterop&quot;: true,---------\u5141\u8BB8\u5F53\u524D\u7684es\u6A21\u5757
    &quot;strict&quot;: true,
    &quot;allowJs&quot;: true,
    &quot;declaration&quot;: true,
    &quot;resolveJsonModule&quot;: true,
    &quot;skipLibCheck&quot;: true,
    &quot;noEmitOnError&quot;: true,
    &quot;noUnusedLocals&quot;: false,
    &quot;noImplicitAny&quot;: false,
    &quot;declarationMap&quot;: true,-------------\u4E3A\u6E90\u6587\u4EF6\u521B\u5EFA\u4E00\u4E2Ad.ts\u751F\u547D
    &quot;isolatedModules&quot;: true
  },
  &quot;references&quot;: [------------------\u8FD9\u90E8\u5206\u653E\u4E00\u4E9B\u76F8\u5173\u7684package\u5305\u7684\u5F15\u7528\uFF0C\u8FD9\u91CC\u505A\u5173\u7CFB\u7684\u8FDE\u63A5\uFF0C\u5982\u679C\u5305\u4E4B\u95F4\u6709\u5F15\u7528\u5173\u7CFB
    { &quot;path&quot;: &quot;packages/apis-ts&quot; },
    { &quot;path&quot;: &quot;packages/vue3-components&quot; },
    { &quot;path&quot;: &quot;web-vue3-vite-meituan-ts&quot; }
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6CE8\u610F\u7B2C\u4E8C\u70B9-\u4F5C\u4E3A-utils-\u8BF7\u6C42\u5E93-\u5982\u679C\u8FDB\u884C\u6253\u5305-\u914D\u7F6E-tsconfig-\u548C-package" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u7B2C\u4E8C\u70B9-\u4F5C\u4E3A-utils-\u8BF7\u6C42\u5E93-\u5982\u679C\u8FDB\u884C\u6253\u5305-\u914D\u7F6E-tsconfig-\u548C-package" aria-hidden="true">#</a> \u6CE8\u610F\u7B2C\u4E8C\u70B9\uFF1A\u4F5C\u4E3A utils \u8BF7\u6C42\u5E93\uFF0C\u5982\u679C\u8FDB\u884C\u6253\u5305\uFF0C\u914D\u7F6E tsconfig \u548C package</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tsconfig.json
{
  &quot;extends&quot;: &quot;../../tsconfig.json&quot;,
  &quot;compilerOptions&quot;: {
    &quot;composite&quot;: true,------\u8FD9\u4E2A\u5C5E\u6027
    &quot;rootDir&quot;: &quot;./src&quot;,
    &quot;outDir&quot;: &quot;./dist&quot;
  },
  &quot;include&quot;: [&quot;./src&quot;]
}

package.json\u4E2D\u914D\u7F6E\uFF1A\u6700\u540E\u6253\u5305\u7684\u7C7B\u578B\uFF08\u540C\u65F6\u5F97\u76CA\u4E8E\u5168\u5C40tsconfig\u914D\u7F6E\uFF0CdeclarationMap\u4F1A\u751F\u6210.d.ts\uFF0C\u81EA\u5DF1\u4E0D\u7528\u521B\u5EFA\u4E86d.ts\u4E86\uFF09
{
    &quot;name&quot;: &quot;foo&quot;,
    &quot;author&quot;: &quot;Vandelay Industries&quot;,
    &quot;version&quot;: &quot;1.0.0&quot;,
    &quot;main&quot;: &quot;./lib/foo.js&quot;,
    &quot;typings&quot;: &quot;./lib/foo.d.ts&quot;
}
\u8FD9\u91CCtypeing\u662F\u8BFB\u53D6\u7C7B\u578B\u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u8FD9\u4E2A\u4F5C\u4E3A\u6A21\u5757\u6216\u662F\u5BF9\u5916\u5305\u7684\u65F6\u5019\u4F7F\u7528\u3002
\u8BBF\u95EE\u7684\u65F6\u5019\u5C1D\u8BD5\u52A0\u8F7D\u4EE3\u7801\u5305\u8DEF\u5F84\u4E0Bdist\u4E0B\u7684index.d.ts\u6587\u4EF6\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u4E5F\u5305\u542B\u4E86\u6587\u4EF6\u7C7B\u578B\u4FE1\u606F\u3002


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-lerna-\u5B9E\u73B0-monorepo-\u548C-pnpm-\u5B9E\u73B0-monorepo-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_3-lerna-\u5B9E\u73B0-monorepo-\u548C-pnpm-\u5B9E\u73B0-monorepo-\u533A\u522B" aria-hidden="true">#</a> 3.lerna \u5B9E\u73B0 monorepo \u548C pnpm \u5B9E\u73B0 monorepo \u533A\u522B</h2><p>\uFF081\uFF09leran yarn + lerna \u7684\u7EC4\u5408\u5DF2\u7ECF\u662F\u73B0\u5728 monorepo \u7684\u901A\u7528\u65B9\u6848\uFF0C\u4E5F\u662F\u529F\u80FD\u6700\u591A\uFF0C\u6700\u706B\u7684\u65B9\u6848\uFF0C\u4F7F\u7528\u8FD9\u5957\u65B9\u6848\u7EDD\u5BF9\u662F\u6B63\u786E\u7684\u3002</p><p>\u4F46\u662F\u5176\u4E0A\u624B\u5B58\u5728\u4E00\u5B9A\u7684\u95E8\u69DB\uFF0C\u76F8\u6BD4 pnpm \u8FD9\u79CD\u81EA\u5E26 workspace \u7684\u65B9\u6848\uFF0C\u5728\u6548\u7387\u4E0A\u4E0D\u80FD\u5339\u654C\u3002</p><h3 id="lerna-\u67B6\u6784\u8001\u7248\u672C\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#lerna-\u67B6\u6784\u8001\u7248\u672C\u7F3A\u70B9" aria-hidden="true">#</a> lerna \u67B6\u6784\u8001\u7248\u672C\u7F3A\u70B9\uFF0C</h3><p>\uFF081\uFF09\u65B0\u5165\u95E8 monorepo \u7684\u5C0F\u767D\u6765\u8BF4\uFF0C\u5149\u641E\u6E05\u5355\u72EC\u4F7F\u7528 lerna \u548C yarn + workspace + lerna \u7684\u533A\u522B\uFF0C\u5C31\u8DB3\u591F\u5403\u4E00\u58F6\u7684\u4E86\u3002 \u540C\u65F6 package.json \u660E\u786E\u6307\u660E workspace \u4F4D\u7F6E</p><p>\u4E24\u4E2A\u5730\u65B9\u7EF4\u62A4 workspace\u3002</p><p>\uFF082\uFF09yarn + lerna \u4E2D\u7684\u65B9\u6848\u662F\u914D\u7F6E\u81EA\u52A8\u62AC\u5347\uFF0C\u8FD9\u79CD\u65B9\u6848\u4F1A\u5B58\u5728\u4F9D\u8D56\u6EE5\u7528\u7684\u95EE\u9898</p><h3 id="pnpm-\u67B6\u6784-monorepo" tabindex="-1"><a class="header-anchor" href="#pnpm-\u67B6\u6784-monorepo" aria-hidden="true">#</a> pnpm \u67B6\u6784 monorepo</h3><p>\u5148\u5728\u9879\u76EE\u6839\u76EE\u5F55\u5EFA\u7ACB\u4E00\u4E2A pnpm \u7684 workspcae \u914D\u7F6E\u6587\u4EF6 pnpm-workspace.yaml\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u914D\u7F6E\u4E00\u4E9B\u597D\u7528\u7684\u6307\u4EE4
\u4E48\u5728\u9879\u76EE\u6839\u76EE\u5F55 package.json \u914D\u7F6E\u9879\u76EE\u542F\u52A8\u547D\u4EE4\uFF1A

&quot;scripts&quot;: {
    &quot;dev:app1&quot;: &quot;pnpm start --filter \\&quot;@mono/app1\\&quot;&quot;,
    &quot;dev:app2&quot;: &quot;pnpm start --filter \\&quot;@mono/app2\\&quot;&quot;
},

\u8FD9\u91CC --filter \u53C2\u6570\u5373\u7279\u5B9A\u8981\u4F5C\u7528\u5230\u54EA\u4E2A\u5B50\u9879\u76EE\uFF0C\u8BE6\u89C1\uFF1Apnpm \u8FC7\u6EE4


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u9879\u76EE\u5F3A\u5236\u53EA\u53EF\u4EE5\u4F7F\u7528\u67D0\u4E00\u4E2A\u5B89\u88C5\u5305\u3002-\u4F7F\u7528\u4E00\u4E2A\u811A\u672C-preinstall" tabindex="-1"><a class="header-anchor" href="#_4-\u9879\u76EE\u5F3A\u5236\u53EA\u53EF\u4EE5\u4F7F\u7528\u67D0\u4E00\u4E2A\u5B89\u88C5\u5305\u3002-\u4F7F\u7528\u4E00\u4E2A\u811A\u672C-preinstall" aria-hidden="true">#</a> 4.\u9879\u76EE\u5F3A\u5236\u53EA\u53EF\u4EE5\u4F7F\u7528\u67D0\u4E00\u4E2A\u5B89\u88C5\u5305\u3002---\u4F7F\u7528\u4E00\u4E2A\u811A\u672C preinstall</h2><p>\u5F3A\u5236\u68C0\u67E5\u5F53\u524D\u7684\u5305\u7BA1\u7406\u5DE5\u5177\uFF1Aonly-allow\u914D\u7F6E\u68C0\u67E5package.json\u4E2DpreInstall\u94A9\u5B50 only-allow \u5B89\u88C5\u540E\uFF0C \u914D\u7F6E\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u53EA\u80FD\u4F7F\u7528npm
{
  &quot;scripts&quot;: {
    &quot;preinstall&quot;: &quot;npx only-allow npm&quot;
  }
}

\u667A\u80FD\u4F7F\u7528pnpm

{
  &quot;scripts&quot;: {
    &quot;preinstall&quot;: &quot;npx only-allow pnpm&quot;
  }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7npm\u7684\u6587\u6863\u6211\u4E86\u89E3\u5230\uFF0C\u5728scripts\u4E2D\uFF0Cnpm\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF08Life Cycle Scripts\uFF09\uFF0C\u5B83\u4EEC\u53EA\u5728\u7279\u5B9A\u60C5\u5F62\u4E0B\u89E6\u53D1\uFF0C \u800C\u4E14\uFF0C\u66F4\u8FDB\u4E00\u6B65\u7684\u662F\uFF0C\u4E5F\u5141\u8BB8\u7528\u6237\u521B\u5EFA\u81EA\u5B9A\u4E49\u7684\u94A9\u5B50\uFF0C\u5E76\u901A\u8FC7 pre-\u548Cpost-\u524D\u7F00\uFF0C\u53EF\u4EE5\u5728\u6267\u884C\u7279\u5B9Ascirpts\u65F6\uFF0C\u9644\u52A0\u6267\u884C\u4E00\u4E9B\u524D\u7F6E\u6216\u8005\u540E\u7F6E\u7684\u7A0B\u5E8F\u3002</p><p>\u4E0B\u9762\u5B58\u7591\uFF0C\u56E0\u4E3A\u6D4B\u8BD5\u4E86\u4E00\u4E0B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5B89\u88C5only-allow\u8FDB\u884C\u68C0\u67E5\uFF0C\u4E0D\u4F1A\u4E0D\u652F\u6301\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5E9F\u5F03\u77E5\u8BC6\u3002
pnpm\u7684\u5904\u7406\u548Cnpm\u548Cyarn\u90FD\u4E0D\u592A\u4E00\u6837\uFF0C\u5B83\u8BA4\u4E3A\u652F\u6301\u7528\u6237\u81EA\u5B9A\u4E49\u7684scripts\u4F7F\u7528pre\u548Cpost\u524D\u7F00\u5BB9\u6613\u5F15\u8D77\u8BEF\u89E3\uFF0C\u800C\u4E14\u53EF\u80FD\u4F1A\u5BFC\u81F4\u90E8\u5206\u4EBA\u5728\u6BEB\u65E0\u77E5\u89C9\u7684\u60C5\u5F62\u4E0B\u6267\u884C\u4E86\u4ED6\u4EEC\u5E76\u4E0D\u60F3\u6267\u884C\u7684\u7A0B\u5E8F\uFF0C\u56E0\u6B64pnpm\u9ED8\u8BA4\u4E0D\u652F\u6301\u7528\u6237\u81EA\u5B9A\u4E49scirpts\u7684pre\u548Cpost\u524D\u7F00\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,49);function h(q,g){const i=l("ExternalLinkIcon");return a(),d("div",null,[u,c,e("p",null,[e("a",o,[m,r(i)]),p]),b])}var f=s(v,[["render",h],["__file","010\u9879\u76EEmonorepo\u67B6\u6784\u5F00\u53D1.html.vue"]]);export{f as default};
