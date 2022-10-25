import{_ as i}from"./home.a572c826.js";import{_ as l,r as s,o as r,c as t,a as e,b as d,w as o,d as a,e as c}from"./app.860495fb.js";const u={},v=e("p",null,[e("img",{src:i,alt:"\u6210\u957F"})],-1),m={class:"table-of-contents"},b=c("1.\u6BD4\u8F83\u4E09\u79CD electron \u6253\u5305\u65B9\u5F0F\u7684\u6BD4\u8F83"),_=a(`<h2 id="_1-\u6BD4\u8F83\u4E09\u79CD-electron-\u6253\u5305\u65B9\u5F0F\u7684\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#_1-\u6BD4\u8F83\u4E09\u79CD-electron-\u6253\u5305\u65B9\u5F0F\u7684\u6BD4\u8F83" aria-hidden="true">#</a> 1.\u6BD4\u8F83\u4E09\u79CD electron \u6253\u5305\u65B9\u5F0F\u7684\u6BD4\u8F83</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>electron\u529F\u80FD\u5B9E\u73B0
\uFF081\uFF09electron-forge package
\u53EA\u662F\u6253\u5305\u6210\u4E00\u4E2A\u76EE\u5F55\u5230out\u76EE\u5F55\u4E0B\uFF0C\u6CE8\u610F\u8FD9\u79CD\u6253\u5305\u4E00\u822C\u7528\u4E8E\u8C03\u8BD5\uFF0C\u5E76\u4E0D\u662F\u7528\u4E8E\u5206\u53D1
\uFF082\uFF09
 &quot;@electron-forge/cli&quot;: &quot;^6.0.0-beta.65&quot;,
&quot;@electron-forge/maker-deb&quot;: &quot;^6.0.0-beta.65&quot;,
&quot;@electron-forge/maker-rpm&quot;: &quot;^6.0.0-beta.65&quot;,
&quot;@electron-forge/maker-squirrel&quot;: &quot;^6.0.0-beta.65&quot;,
&quot;@electron-forge/maker-zip&quot;: &quot;^6.0.0-beta.65&quot;,
&quot;electron&quot;: &quot;^20.0.1&quot;,




\uFF083\uFF09\u76F8\u5173\u7684electron\u7684\u6253\u5305\u7684\u547D\u4EE4\u5B89\u88C5
\u547D\u4EE4\u7ED3\u6784\u5982\u4E0B\uFF08\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u4FEE\u6539\uFF09\uFF1A
\u201C.\u201D\uFF1A\u9700\u8981\u6253\u5305\u7684\u5E94\u7528\u76EE\u5F55\uFF08\u5373\u5F53\u524D\u76EE\u5F55\uFF09\uFF0C
\u201CmyClient\u201D\uFF1A\u5E94\u7528\u540D\u79F0\uFF0C
\u201C--win\u201D\uFF1A\u6253\u5305\u5E73\u53F0\uFF08\u4EE5Windows\u4E3A\u4F8B\uFF09\uFF0C
\u201C--out ../myClient\u201D\uFF1A\u8F93\u51FA\u76EE\u5F55\uFF0C
\u201C--arch=64\u201D\uFF1A64\u4F4D\uFF0C
\u201C--app-version=0.0.1\u201D\uFF1A\u5E94\u7528\u7248\u672C\uFF0C
\u201C--electron-version=2.0.0\u201D\uFF1Aelectron\u7248\u672C


\uFF084\uFF09electron-packager\u53CAelectron-builder\uFF0Celectron-forge\u4E09\u79CD\u65B9\u5F0F
\u8FD9\u91CC\u5B98\u65B9\u5F3A\u70C8\u63A8\u8350\u4F7F\u7528yarn\u5B89\u88C5\u4F9D\u8D56\u5305\uFF0C\u4F46\u6211\u4F7F\u7528\u4E86npm\u5B89\u88C5\u7684\u4F9D\u8D56\u4E5F\u53EF\u4EE5\u6B63\u5E38\u6253\u5305

\u6CE8\u610F\uFF1A
1\u3001\u6253\u5305\u65F6\u8981\u5206\u6E05devDependencies\u4E0Edependencies\u7684\u533A\u522B\uFF0C\u6587\u7AE0\u540E\u4F1A\u8BB2\u3002
2\u3001package.json \u7684\u989D\u5916\u5B57\u6BB5 \u2014\u2014 productName\u3001author \u548C description\uFF0C
\u867D\u7136\u8FD9\u51E0\u4E2A\u5B57\u6BB5\u5E76\u4E0D\u662F\u6253\u5305\u5FC5\u5907\u7684\uFF0C


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function q(p,f){const n=s("RouterLink");return r(),t("div",null,[v,e("nav",m,[e("ul",null,[e("li",null,[d(n,{to:"#_1-\u6BD4\u8F83\u4E09\u79CD-electron-\u6253\u5305\u65B9\u5F0F\u7684\u6BD4\u8F83"},{default:o(()=>[b]),_:1})])])]),_])}var k=l(u,[["render",q],["__file","007electron\u5B66\u4E60\u7B14\u8BB0.html.vue"]]);export{k as default};
