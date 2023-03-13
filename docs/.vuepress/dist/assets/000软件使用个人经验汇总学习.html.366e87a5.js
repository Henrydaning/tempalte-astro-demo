import{_ as e,o as i,c as n,d as s}from"./app.5805b0e6.js";const d={},a=s(`<h2 id="_1-\u5982\u4F55\u5C06\u4E00\u4E2Aexe\u9879\u76EE\u5728\u5168\u5C40\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#_1-\u5982\u4F55\u5C06\u4E00\u4E2Aexe\u9879\u76EE\u5728\u5168\u5C40\u6267\u884C" aria-hidden="true">#</a> 1.\u5982\u4F55\u5C06\u4E00\u4E2Aexe\u9879\u76EE\u5728\u5168\u5C40\u6267\u884C</h2><p>\u9996\u5148\u5C06.exe\u6587\u4EF6\u540D\u79F0\u548C\u6587\u4EF6\u5939\u540D\u79F0\u4E00\u81F4\uFF0C\u8FD9\u6837\u4FBF\u4E8E\u67E5\u627E\uFF0C\u7136\u540E\u5C06\u8FD9\u4E2A\u5730\u5740\u653E\u5165path\u73AF\u5883\u53D8\u91CF\u5373</p><h2 id="_2-\u5982\u4F55\u5B9E\u65F6\u8DDF\u8E2A\u81EA\u5DF1fork\u7684\u5206\u652F\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#_2-\u5982\u4F55\u5B9E\u65F6\u8DDF\u8E2A\u81EA\u5DF1fork\u7684\u5206\u652F\u5185\u5BB9" aria-hidden="true">#</a> 2.\u5982\u4F55\u5B9E\u65F6\u8DDF\u8E2A\u81EA\u5DF1fork\u7684\u5206\u652F\u5185\u5BB9</h2><p>\u6709\u65F6\u5019\u6211\u4EECfork\u4E86\u4E00\u4E2A\u4ED3\u5E93\uFF0C\u4F46\u662F\u6211\u4EEC\u6709\u65F6\u5019\u9700\u8981\u5C06fork\u7684\u4ED3\u5E93\u548C\u81EA\u5DF1\u7684\u672C\u5730\u4ED3\u5E93\u8FDB\u884C\u5B9E\u65F6\u7684\u66F4\u65B0\u540C\u6B65\uFF0C\u90A3\u4E48\u6211\u4EEC\u9700\u8981\u505A\u4EC0\u4E48</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5982\u4F55\u901A\u8FC7\u672C\u5730\u547D\u4EE4\u884C\u540C\u6B65\u66F4\u65B0\uFF1F\uFF1A7\u6B65\u9AA4
\u9A8C\u8BC1\u8FDC\u7A0B\u5206\u652F\u53EF\u4EE5 fetch \u6216 push
git remote -v
2. \u6307\u660E\u6211\u4EEC\u9700\u8981\u540C\u6B65\u7684\u4ED3\u5E93:\u65B0\u589E\u4E00\u4E2A\u8FD9\u91CC\u7528upstream\u4E3A\u4F8B

git remote add upstream https://xxx.git
3. \u9A8C\u8BC1
git remote -v
4. \u62C9\u53D6\u66F4\u65B0\u7684 branches \u548C commits
git fetch upstream

5. Checkout \u672C\u5730\u5206\u652F
git checkout main

6. \u5408\u5E76\uFF1A\u8FDC\u7A0B\u6E90\u5206\u652Fupstream/main
git merge upstream/main

7. \u63D0\u4EA4
git push origin main


\u53E6\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u6781\u5176\u7B80\u5355
git  fetch  upstream
\u8FD8\u662Fgit  fetch  upstream/main\u5F85\u786E\u8BA4


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r=[a];function l(t,v){return i(),n("div",null,r)}var m=e(d,[["render",l],["__file","000\u8F6F\u4EF6\u4F7F\u7528\u4E2A\u4EBA\u7ECF\u9A8C\u6C47\u603B\u5B66\u4E60.html.vue"]]);export{m as default};
