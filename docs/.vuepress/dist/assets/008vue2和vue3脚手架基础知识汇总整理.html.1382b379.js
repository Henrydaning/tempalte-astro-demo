import{_ as t,r as s,o as r,c,a as e,b as n,w as l,d as v,e as i}from"./app.abc348f0.js";const u={},o={class:"table-of-contents"},_=i("0.vue-cli \u811A\u624B\u67B6\u7684\u4E00\u4E9B\u7B80\u5355\u547D\u4EE4\u589E\u52A0"),h=i("(1)\u6846\u67B6\u4E2D\u53C2\u6570"),m=i("\uFF082\uFF09\u73AF\u5883\u53D8\u91CF\u63A7\u5236\u5728vue2\u4E2D"),b=i("(3)\u6211\u4EEC\u53EF\u4EE5\u5728vue.config.js\u4E2D\u8BA1\u7B97\u73AF\u5883\u53D8\u91CF\uFF0C"),p=i("(4)\u53EA\u5728\u672C\u5730\u6709\u6548\u7684\u53D8\u91CF"),g=i("\uFF085\uFF09\u5177\u4F53\u547D\u4EE4\u4F7F\u7528"),x=i("1.vue2.x \u57FA\u7840\u77E5\u8BC6\u6C47\u603B"),f=i("3.vite\u811A\u624B\u67B6\u4E2D\u914D\u7F6E"),V=i("\uFF081\uFF09vite\u4E2D\u5404\u79CD\u914D\u7F6E\u73AF\u5883\u6587\u4EF6\u8BBE\u7F6E"),E=v(`<h2 id="_0-vue-cli-\u811A\u624B\u67B6\u7684\u4E00\u4E9B\u7B80\u5355\u547D\u4EE4\u589E\u52A0" tabindex="-1"><a class="header-anchor" href="#_0-vue-cli-\u811A\u624B\u67B6\u7684\u4E00\u4E9B\u7B80\u5355\u547D\u4EE4\u589E\u52A0" aria-hidden="true">#</a> 0.vue-cli \u811A\u624B\u67B6\u7684\u4E00\u4E9B\u7B80\u5355\u547D\u4EE4\u589E\u52A0</h2><p>\u7EE7\u7EED\u719F\u6089\u4E00\u4E9B vue-cli-serve \u7684\u547D\u4EE4\uFF0C\u83B7\u53D6\u53C2\u6570\u503C\uFF0Cprocess.args</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.\u4F20\u53C2vue-cli-service
--mode        \u6307\u5B9A\u73AF\u5883\u6A21\u5F0F (\u9ED8\u8BA4\u503C\uFF1Aproduction)\uFF0C\u5339\u914Denv\u6587\u4EF6
--dest        \u6307\u5B9A\u8F93\u51FA\u76EE\u5F55 (\u9ED8\u8BA4\u503C\uFF1Adist)
--modern      \u9762\u5411\u73B0\u4EE3\u6D4F\u89C8\u5668\u5E26\u81EA\u52A8\u56DE\u9000\u5730\u6784\u5EFA\u5E94\u7528
--target      app | lib | wc | wc-async (\u9ED8\u8BA4\u503C\uFF1Aapp)
--name        \u5E93\u6216 Web Components \u6A21\u5F0F\u4E0B\u7684\u540D\u5B57 (\u9ED8\u8BA4\u503C\uFF1Apackage.json \u4E2D\u7684 &quot;name&quot; \u5B57\u6BB5\u6216\u5165\u53E3\u6587\u4EF6\u540D)
--no-clean    \u5728\u6784\u5EFA\u9879\u76EE\u4E4B\u524D\u4E0D\u6E05\u9664\u76EE\u6807\u76EE\u5F55


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-\u6846\u67B6\u4E2D\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_1-\u6846\u67B6\u4E2D\u53C2\u6570" aria-hidden="true">#</a> (1)\u6846\u67B6\u4E2D\u53C2\u6570</h3><p>vue-cli-service build --mode development</p><h3 id="_2-\u73AF\u5883\u53D8\u91CF\u63A7\u5236\u5728vue2\u4E2D" tabindex="-1"><a class="header-anchor" href="#_2-\u73AF\u5883\u53D8\u91CF\u63A7\u5236\u5728vue2\u4E2D" aria-hidden="true">#</a> \uFF082\uFF09\u73AF\u5883\u53D8\u91CF\u63A7\u5236\u5728vue2\u4E2D</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6CE8\u610F\uFF0C\u53EA\u6709 NODE_ENV\uFF0CBASE_URL \u548C\u4EE5 VUE_APP_ \u5F00\u5934\u7684\u53D8\u91CF\u5C06\u901A\u8FC7 webpack.DefinePlugin \u9759\u6001\u5730\u5D4C\u5165\u5230\u5BA2\u6237\u7AEF\u4FA7\u7684\u4EE3\u7801\u4E2D\u3002\u8FD9\u662F\u4E3A\u4E86\u907F\u514D\u610F\u5916\u516C\u5F00\u673A\u5668\u4E0A\u53EF\u80FD\u5177\u6709\u76F8\u540C\u540D\u79F0\u7684\u79C1\u94A5\u3002

---\u6587\u4EF6.env\u6587\u4EF6
.env.development

NODE_ENV=development
VUE_APP_TITLE=My App (staging)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u6211\u4EEC\u53EF\u4EE5\u5728vue-config-js\u4E2D\u8BA1\u7B97\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_3-\u6211\u4EEC\u53EF\u4EE5\u5728vue-config-js\u4E2D\u8BA1\u7B97\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> (3)\u6211\u4EEC\u53EF\u4EE5\u5728vue.config.js\u4E2D\u8BA1\u7B97\u73AF\u5883\u53D8\u91CF\uFF0C</h3><p>\u4F46\u662F\u9700\u8981\u7528VUE_APP_\u5F00\u5934\uFF0C\u7528\u4E8E\u7248\u672C\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>p<wbr>rocess.env.VUE_APP_VERSION = require(&#39;./package.json&#39;).version

module.exports = {
  // config
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u53EA\u5728\u672C\u5730\u6709\u6548\u7684\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_4-\u53EA\u5728\u672C\u5730\u6709\u6548\u7684\u53D8\u91CF" aria-hidden="true">#</a> (4)\u53EA\u5728\u672C\u5730\u6709\u6548\u7684\u53D8\u91CF</h3><p>\u6709\u7684\u65F6\u5019\uFF0C\u9700\u8981\u4E0D\u63D0\u4EA4\u5230\u4EE3\u7801\u4ED3\u5E93\u7684\u53D8\u91CF\uFF0C\u56E0\u4E3A\u6709\u65F6\u5019\u9879\u76EE\u6258\u7BA1\u5728\u516C\u5171\u4ED3\u5E93\uFF0C\u90A3\u4E48\u6B64\u65F6\u6709\u4E00\u4E2A.env.local\u6587\u4EF6\u53D6\u4EE3\uFF0C\u672C\u5730\u6587\u4EF6\u53EF\u4EE5\u5FFD\u7565\u3002 \u53EF\u4EE5\u5728\u6307\u5B9A\u6A21\u5F0F\u4E0B\u4F7F\u7528.env.development.local\u8FD9\u4E2A\u4F1A\u5728development\u6A21\u5F0F\u4E0B\u4F7F\u7528\uFF0C\u88ABgit\u5FFD\u7565\u3002</p><h3 id="_5-\u5177\u4F53\u547D\u4EE4\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_5-\u5177\u4F53\u547D\u4EE4\u4F7F\u7528" aria-hidden="true">#</a> \uFF085\uFF09\u5177\u4F53\u547D\u4EE4\u4F7F\u7528</h3><h4 id="\u4E00\u79CD\u547D\u4EE4-\u5305\u6253\u5305\u6A21\u5F0F\u7684\u65F6\u5019-\u5F15\u5165\u548C\u4E0D\u5F15\u5165vue\u5E93\u7684\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E00\u79CD\u547D\u4EE4-\u5305\u6253\u5305\u6A21\u5F0F\u7684\u65F6\u5019-\u5F15\u5165\u548C\u4E0D\u5F15\u5165vue\u5E93\u7684\u8BBE\u7F6E" aria-hidden="true">#</a> \u4E00\u79CD\u547D\u4EE4\uFF1A\u5305\u6253\u5305\u6A21\u5F0F\u7684\u65F6\u5019\uFF0C\u5F15\u5165\u548C\u4E0D\u5F15\u5165vue\u5E93\u7684\u8BBE\u7F6E</h4><p>\u5728\u5E93\u6A21\u5F0F\u4E2D\uFF0CVue \u662F\u5916\u7F6E\u7684\u3002\u8FD9\u610F\u5473\u7740\u5305\u4E2D\u4E0D\u4F1A\u6709 Vue\uFF0C\u5373\u4FBF\u4F60\u5728\u4EE3\u7801\u4E2D\u5BFC\u5165\u4E86 Vue\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vue-cli-service build --target lib
\u4E0A\u9762\u7684\u547D\u4EE4\uFF0C\u4E0D\u4F1A\u7B54\u6848\u6CE2vue\u5E93\u3002

\u4E0B\u9762\u7684\u547D\u4EE4\u5982\u679C\u60F3\u8981\u52A0\u8F7D\u8FDB\u5165\u5185\u7F6Evue
vue-cli-service build --target lib --inline-vue


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6253\u5305webcompoents\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305webcompoents\u7EC4\u4EF6" aria-hidden="true">#</a> \u6253\u5305webcompoents\u7EC4\u4EF6</h4><p>Web Components \u6A21\u5F0F\u4E0D\u652F\u6301 IE11 \u53CA\u66F4\u4F4E\u7248\u672C \u6CE8\u610F\uFF1A \u5728 Web Components \u6A21\u5F0F\u4E2D\uFF0CVue \u662F\u5916\u7F6E\u7684\u3002\u8FD9\u610F\u5473\u7740\u5305\u4E2D\u4E0D\u4F1A\u6709 Vue\uFF0C\u5373\u4FBF\u4F60\u5728\u4EE3\u7801\u4E2D\u5BFC\u5165\u4E86 Vue\u3002\u8FD9\u91CC\u7684\u5305\u4F1A\u5047\u8BBE\u5728\u9875\u9762\u4E2D\u5DF2\u7ECF\u6709\u4E00\u4E2A\u53EF\u7528\u7684\u5168\u5C40\u53D8\u91CF Vue\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vue-cli-service build --target wc --name my-element [entry]


\u7B54\u6848\u6CE2\u540E\uFF0C\u5F15\u5165
&lt;script src=&quot;https://unpkg.com/vue&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;path/to/my-element.js&quot;&gt;&lt;/script&gt;

&lt;!-- \u53EF\u5728\u666E\u901A HTML \u4E2D\u6216\u8005\u5176\u5B83\u4EFB\u4F55\u6846\u67B6\u4E2D\u4F7F\u7528 --&gt;
&lt;my-element&gt;&lt;/my-element&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="gitlab\u90E8\u7F72\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#gitlab\u90E8\u7F72\u8BF4\u660E" aria-hidden="true">#</a> gitlab\u90E8\u7F72\u8BF4\u660E</h4><p>\u6839\u636Egitlab\u90E8\u7F72\u914D\u7F6E\u5728gitlab-ci.yml \u914D\u7F6E\u5185\u5BB9</p><h2 id="_1-vue2-x-\u57FA\u7840\u77E5\u8BC6\u6C47\u603B" tabindex="-1"><a class="header-anchor" href="#_1-vue2-x-\u57FA\u7840\u77E5\u8BC6\u6C47\u603B" aria-hidden="true">#</a> 1.vue2.x \u57FA\u7840\u77E5\u8BC6\u6C47\u603B</h2>`,22),w={href:"https://www.processon.com/mindmap/60d132a36376892d4918b734",target:"_blank",rel:"noopener noreferrer"},k=i("000VUE \u57FA\u7840\u77E5\u8BC6\u5168\u5C40\u719F\u6089 (processon.com)"),N=e("h2",{id:"_3-vite\u811A\u624B\u67B6\u4E2D\u914D\u7F6E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-vite\u811A\u624B\u67B6\u4E2D\u914D\u7F6E","aria-hidden":"true"},"#"),i(" 3.vite\u811A\u624B\u67B6\u4E2D\u914D\u7F6E")],-1),P=e("h3",{id:"_1-vite\u4E2D\u5404\u79CD\u914D\u7F6E\u73AF\u5883\u6587\u4EF6\u8BBE\u7F6E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-vite\u4E2D\u5404\u79CD\u914D\u7F6E\u73AF\u5883\u6587\u4EF6\u8BBE\u7F6E","aria-hidden":"true"},"#"),i(" \uFF081\uFF09vite\u4E2D\u5404\u79CD\u914D\u7F6E\u73AF\u5883\u6587\u4EF6\u8BBE\u7F6E")],-1);function j(y,q){const a=s("RouterLink"),d=s("ExternalLinkIcon");return r(),c("div",null,[e("nav",o,[e("ul",null,[e("li",null,[n(a,{to:"#_0-vue-cli-\u811A\u624B\u67B6\u7684\u4E00\u4E9B\u7B80\u5355\u547D\u4EE4\u589E\u52A0"},{default:l(()=>[_]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#_1-\u6846\u67B6\u4E2D\u53C2\u6570"},{default:l(()=>[h]),_:1})]),e("li",null,[n(a,{to:"#_2-\u73AF\u5883\u53D8\u91CF\u63A7\u5236\u5728vue2\u4E2D"},{default:l(()=>[m]),_:1})]),e("li",null,[n(a,{to:"#_3-\u6211\u4EEC\u53EF\u4EE5\u5728vue-config-js\u4E2D\u8BA1\u7B97\u73AF\u5883\u53D8\u91CF"},{default:l(()=>[b]),_:1})]),e("li",null,[n(a,{to:"#_4-\u53EA\u5728\u672C\u5730\u6709\u6548\u7684\u53D8\u91CF"},{default:l(()=>[p]),_:1})]),e("li",null,[n(a,{to:"#_5-\u5177\u4F53\u547D\u4EE4\u4F7F\u7528"},{default:l(()=>[g]),_:1})])])]),e("li",null,[n(a,{to:"#_1-vue2-x-\u57FA\u7840\u77E5\u8BC6\u6C47\u603B"},{default:l(()=>[x]),_:1})]),e("li",null,[n(a,{to:"#_3-vite\u811A\u624B\u67B6\u4E2D\u914D\u7F6E"},{default:l(()=>[f]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#_1-vite\u4E2D\u5404\u79CD\u914D\u7F6E\u73AF\u5883\u6587\u4EF6\u8BBE\u7F6E"},{default:l(()=>[V]),_:1})])])])])]),E,e("p",null,[e("a",w,[k,n(d)])]),N,P])}var A=t(u,[["render",j],["__file","008vue2\u548Cvue3\u811A\u624B\u67B6\u57FA\u7840\u77E5\u8BC6\u6C47\u603B\u6574\u7406.html.vue"]]);export{A as default};
