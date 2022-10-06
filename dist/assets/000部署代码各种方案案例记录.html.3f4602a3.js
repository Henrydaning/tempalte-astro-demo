import{_ as l,r as a,o as r,c as t,a as e,b as n,w as s,d as c,e as d}from"./app.eaa4ef0b.js";const u={},v={class:"table-of-contents"},o=d("\u90E8\u7F72\u7ED3\u679C\u6C47\u603B"),b=d("001\u7B80\u5355\u624B\u52A8\u90E8\u7F72"),m=d("002\u7B80\u5355\u547D\u4EE4\u90E8\u7F72"),h=d("002\u4F7F\u7528githubAction\u90E8\u7F72"),_=d("003\u811A\u672C\u589E\u52A0sh\u90E8\u7F72"),g=d("004jenkins,\u76D1\u542Cgit push\u81EA\u52A8\u90E8\u7F72\u5B9E\u73B0\u6D41\u7A0B\u3002"),p=d("005\u8D85\u7EA7\u7B80\u5355\u7684\u547D\u4EE4Vercel"),x=c(`<h2 id="\u90E8\u7F72\u7ED3\u679C\u6C47\u603B" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u7ED3\u679C\u6C47\u603B" aria-hidden="true">#</a> \u90E8\u7F72\u7ED3\u679C\u6C47\u603B</h2><h3 id="_001\u7B80\u5355\u624B\u52A8\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#_001\u7B80\u5355\u624B\u52A8\u90E8\u7F72" aria-hidden="true">#</a> 001\u7B80\u5355\u624B\u52A8\u90E8\u7F72</h3><p>\u624B\u52A8\u6253\u5305\u540E\uFF0C\u5C06\u6587\u4EF6\u5939\u63D0\u4EA4\u5230\u8FDC\u7A0B\u4EE3\u7801\u670D\u52A1\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package.json\u811A\u672C\u4E2D\u4F7F\u7528scp\u547D\u4EE4\u63A8\u9001\uFF1A\u672C\u5730dist/*\u6240\u6709\u63A8\u52A8\u5230linux\u670D\u52A1\u5668
 &quot;push&quot;: &quot;vue-cli-service build --mode mas &amp;&amp; scp -r dist/* root@xxx.3mzz.cn:/home/dockerservice/nginx/html/art_production&quot;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_002\u7B80\u5355\u547D\u4EE4\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#_002\u7B80\u5355\u547D\u4EE4\u90E8\u7F72" aria-hidden="true">#</a> 002\u7B80\u5355\u547D\u4EE4\u90E8\u7F72</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8BF4\u767D\u4E86\uFF0C\u5B58\u653E\u4E00\u4E2Agithub\u7F51\u7AD9\u76EE\u5F55\u4F4D\u7F6E\uFF0C\u505A\u4E00\u4E2A\u76F8\u5BF9\u6587\u4EF6\u5939\u7684\u5B9A\u4F4D
    &quot;buildDoc&quot;: &quot;npm run docs:build  --  --dest=dist&quot;,
    
    \u4EE5\u540E\u65B0\u7684\u6587\u4EF6\u9879\u76EE\uFF0C\u53EF\u4EE5\u7528dist\u4E4B\u5916\u7684\u6587\u4EF6\u5939\u505A\u5B58\u50A8\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_002\u4F7F\u7528githubaction\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#_002\u4F7F\u7528githubaction\u90E8\u7F72" aria-hidden="true">#</a> 002\u4F7F\u7528githubAction\u90E8\u7F72</h3><p>\u81EA\u52A8\u5316\u90E8\u7F72\uFF1A\u9700\u8981\u914D\u7F6E\u4E00\u4E0B\u5F53\u524D\u7684Action\u811A\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E00\u76F4\u53EF\u4EE5\u6B63\u5E38\u8D70\u6D41\u7A0B\uFF0C\u4F46\u662F\u4E0D\u4F1A\u81EA\u52A8\u90E8\u7F72\u81EA\u52A8\u5316
\u6682\u5B58\uFF0C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_003\u811A\u672C\u589E\u52A0sh\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#_003\u811A\u672C\u589E\u52A0sh\u90E8\u7F72" aria-hidden="true">#</a> 003\u811A\u672C\u589E\u52A0sh\u90E8\u7F72</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6BCF\u4E00\u6B21\u63D0\u4EA4\u4F7F\u7528\u547D\u4EE4npm run deploy
\u8FD9\u91CC\u5185\u5BB9
# \u6253\u5305\u751F\u6210\u9759\u6001\u6587\u4EF6
npm run build

# \u8FDB\u5165\u6253\u5305\u597D\u7684\u6587\u4EF6\u5939
cd build
\u4F1A\u5C06\u5F53\u524D\u7684build\u4E0B\u7684\u76EE\u5F55\u5185\u5BB9\u5168\u90E8\u4E0A\u4F20

\u5982\u679C\u6CA1\u6709cd build\u8FD9\u4E00\u6B65\uFF0C\u4F1A\u9ED8\u8BA4\u6839\u636E\u6587\u4EF6\u5939.gitignore\u8FDB\u884C\u6587\u4EF6\u5168\u90E8\u4E0A\u4F20


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_004jenkins-\u76D1\u542Cgit-push\u81EA\u52A8\u90E8\u7F72\u5B9E\u73B0\u6D41\u7A0B\u3002" tabindex="-1"><a class="header-anchor" href="#_004jenkins-\u76D1\u542Cgit-push\u81EA\u52A8\u90E8\u7F72\u5B9E\u73B0\u6D41\u7A0B\u3002" aria-hidden="true">#</a> 004jenkins,\u76D1\u542Cgit push\u81EA\u52A8\u90E8\u7F72\u5B9E\u73B0\u6D41\u7A0B\u3002</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u914D\u7F6E\u597DgiteeAPI\u4EE4\u724C\u540E\uFF0C
\u914D\u7F6E\u4E0B\u8F7D\u4EE3\u7801\u603B\u662F\u62A5\u9519\u3002

\u91CD\u65B0\u5B89\u88C5jenkins\u540E\uFF0C\u5B89\u88C5gitee\u63D2\u4EF6\u518D\u6B21\u5C1D\u8BD5\u89E3\u51B3\u4E86\u3002


jenkins\u914D\u7F6E\u4EE3\u7801\u7CFB\u7EDFCICD\u7684\u4E24\u5904
Gitee\u63D2\u4EF6\u5B89\u88C5\u3002

\u914D\u7F6E\u4E24\u4E2A\u5168\u5C40\u51ED\u8BC1\uFF1A
- ssh\u51ED\u8BC1
- \u4EE3\u7801\u989DGiteeAPI\u6743\u9650

\u95EE\u9898\u6CE8\u610F\uFF1Ajenins\u914D\u7F6E\u79C1\u94A5ssh\u7684\u683C\u5F0F\u548C\u76F4\u63A5\u751F\u6210\u4E0D\u4E00\u6837\u3002

\u914D\u7F6E\u4E00\u4E2A\u9879\u76EE\u7684\u65F6\u5019\uFF0CPoll SCM\u89E6\u53D1\u5668\u4F5C\u7528
- \u70B9\u51FB\u65E5\u7A0B\u8868\u7684\uFF1F\u540E\u6709\u6848\u4F8B\uFF1AH/15 * * * *\u6211\u4EEC\u9009\u62E9\u4E00\u4E2A\u89E6\u53D1\u540E15\u5206\u949F\u5185\u6267\u884C




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_005\u8D85\u7EA7\u7B80\u5355\u7684\u547D\u4EE4vercel" tabindex="-1"><a class="header-anchor" href="#_005\u8D85\u7EA7\u7B80\u5355\u7684\u547D\u4EE4vercel" aria-hidden="true">#</a> 005\u8D85\u7EA7\u7B80\u5355\u7684\u547D\u4EE4Vercel</h3><p>\u90E8\u7F72\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u9879\u76EE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u524D\u5F80 Vercel \uFF0C\u4ECE GitHub \u521B\u5EFA\u4E00\u4E2A\u65B0\u9879\u76EE\uFF0C\u5E76\u8FDB\u884C\u5982\u4E0B\u914D\u7F6E\uFF1A

FRAMEWORK PRESET: Other
BUILD COMMAND: yarn docs:build
OUTPUT DIRECTORY: docs/.vuepress/dist

\u53EA\u9700\u8981\u6307\u5B9A\u4E09\u4E2A\u5730\u65B9\uFF0C\u7136\u540E\u548Cgithub\u9879\u76EE\u7ED1\u5B9A\u540E\uFF0C\u81EA\u52A8\u90E8\u7F72\u751F\u6210\u4E00\u4E2A\u7F51\u7AD9\u57DF\u540D\u3002



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function f(k,j){const i=a("RouterLink");return r(),t("div",null,[e("nav",v,[e("ul",null,[e("li",null,[n(i,{to:"#\u90E8\u7F72\u7ED3\u679C\u6C47\u603B"},{default:s(()=>[o]),_:1}),e("ul",null,[e("li",null,[n(i,{to:"#_001\u7B80\u5355\u624B\u52A8\u90E8\u7F72"},{default:s(()=>[b]),_:1})]),e("li",null,[n(i,{to:"#_002\u7B80\u5355\u547D\u4EE4\u90E8\u7F72"},{default:s(()=>[m]),_:1})]),e("li",null,[n(i,{to:"#_002\u4F7F\u7528githubaction\u90E8\u7F72"},{default:s(()=>[h]),_:1})]),e("li",null,[n(i,{to:"#_003\u811A\u672C\u589E\u52A0sh\u90E8\u7F72"},{default:s(()=>[_]),_:1})]),e("li",null,[n(i,{to:"#_004jenkins-\u76D1\u542Cgit-push\u81EA\u52A8\u90E8\u7F72\u5B9E\u73B0\u6D41\u7A0B\u3002"},{default:s(()=>[g]),_:1})]),e("li",null,[n(i,{to:"#_005\u8D85\u7EA7\u7B80\u5355\u7684\u547D\u4EE4vercel"},{default:s(()=>[p]),_:1})])])])])]),x])}var A=l(u,[["render",f],["__file","000\u90E8\u7F72\u4EE3\u7801\u5404\u79CD\u65B9\u6848\u6848\u4F8B\u8BB0\u5F55.html.vue"]]);export{A as default};
