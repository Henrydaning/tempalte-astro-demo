import{_ as e,o as n,c as i,d as l}from"./app.659177ce.js";const s={},d=l(`<h2 id="_001-elementplus\u5E93\u7684\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#_001-elementplus\u5E93\u7684\u56FE\u6807" aria-hidden="true">#</a> 001.elementplus\u5E93\u7684\u56FE\u6807</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@element-plus/icons-vue
\u4F7F\u7528\u65B9\u6CD5\uFF0C\u5BF9\u4E8E\u5B98\u65B9\u7684API\u4E0A\u9762\u7684\u6837\u5F0F\uFF0C\u4F7F\u7528el-icon-delete-solid\u56FE\u6807\u7684\u65B9\u5F0F
\u65B9\u6CD51\uFF1A&lt;i class=&quot;el-icon-share&quot;&gt;&lt;/i&gt;\uFF08\u4EC5\u4EC5\u7528\u4E8EelementUI,elementplus\u4E2D\uFF09

\u65B9\u6CD52\uFF1A\u7EC4\u4EF6\u5F62\u5F0F\u6309\u9700\u5F15\u5165\uFF0C\u6BD4\u5982\u56FE\u6807\u53EB\u505A\uFF1Ael-icon-delete
\u90A3\u4E48\u5F15\u5165import { Delete } from &#39;@element-plus/icons-vue&#39;;//\u540C\u65F6\u6CE8\u518C\u7EC4\u4EF6
&lt;el-icon size=
&quot;22&quot;
 color=
&quot;#000&quot;
&gt;&lt;/el-icon&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_002-\u5176\u4ED6\u975Eelementplus\u56FE\u6807\u5E93\u7684\u4F7F\u7528-\u5BF9\u4E8E\u56FE\u6807\u5E93\u5176\u4ED6\u7684\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#_002-\u5176\u4ED6\u975Eelementplus\u56FE\u6807\u5E93\u7684\u4F7F\u7528-\u5BF9\u4E8E\u56FE\u6807\u5E93\u5176\u4ED6\u7684\u5F15\u5165" aria-hidden="true">#</a> 002.\u5176\u4ED6\u975Eelementplus\u56FE\u6807\u5E93\u7684\u4F7F\u7528\uFF1A\u5BF9\u4E8E\u56FE\u6807\u5E93\u5176\u4ED6\u7684\u5F15\u5165</h3><p>\u5916\u90E8\u56FE\u6807\u5E93\uFF0C\u5229\u7528uniplugin-icon\u63D2\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i -D @iconify-json/xxx
\u81EA\u52A8\u5B89\u88C5\u56FE\u6807\u96C6
// vue.config.js
const Icons = require(&#39;unplugin-icons/webpack&#39;)
module.exports = {
  configureWebpack: {
    plugins: [
      Icons({
        compiler: &#39;vue3&#39;,
        // \u81EA\u52A8\u5B89\u88C5
        autoInstall: true
      }),
    ],
  }
}
\u53EF\u4EE5\u4F7F\u7528\u4E0A\u9762\u7684el-icon\u5305\u88F9\u3002\u5176\u4ED6\u7684\u7EC4\u4EF6
&lt;template&gt;
  &lt;el-icon size=&quot;22&quot; color=&quot;#000&quot;&gt;
    &lt;IconBaseline5g /&gt;
  &lt;/el-icon&gt;
&lt;/template&gt;
 
&lt;script setup&gt;
import IconBaseline5g from &#39;~icons/ic/baseline-5g&#39;
&lt;/script&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_003\u4F7F\u7528svg\u4F5C\u4E3A\u56FE\u6807\u81EA\u5B9A\u4E49svg\u56FE\u7247\u4F5C\u4E3A\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#_003\u4F7F\u7528svg\u4F5C\u4E3A\u56FE\u6807\u81EA\u5B9A\u4E49svg\u56FE\u7247\u4F5C\u4E3A\u56FE\u6807" aria-hidden="true">#</a> 003\u4F7F\u7528svg\u4F5C\u4E3A\u56FE\u6807\u81EA\u5B9A\u4E49svg\u56FE\u7247\u4F5C\u4E3A\u56FE\u6807</h2><p>\u8FD8\u6709\u53E6\u4E00\u79CD\u65B9\u6CD5\uFF0C\u5199\u4E00\u4E2Asvgicon\u6CE8\u518C\u6587\u4EF6\u3002\u4E0B\u9762\u662F\u66F4\u597D\u7684\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// vue.config.js
const Icons = require(&#39;unplugin-icons/webpack&#39;)
// \u5F15\u5165loader
const { FileSystemIconLoader } = require(&#39;unplugin-icons/loaders&#39;)
module.exports = {
  configureWebpack: {
    plugins: [
      Icons({
        compiler: &#39;vue3&#39;,
        autoInstall: true,
        // \u81EA\u5B9A\u4E49\u56FE\u6807\u52A0\u8F7D
        customCollections: {
          // home\u56FE\u6807\u96C6
          // \u7ED9svg\u6587\u4EF6\u8BBE\u7F6Efill=&quot;currentColor&quot;\u5C5E\u6027\uFF0C\u4F7F\u56FE\u6807\u7684\u989C\u8272\u5177\u6709\u9002\u5E94\u6027
          home: FileSystemIconLoader(&#39;src/assets/svg/home&#39;, svg =&gt; svg.replace(/^&lt;svg /, &#39;&lt;svg fill=&quot;currentColor&quot; &#39;)),
         // about\u56FE\u6807\u96C6
          about: FileSystemIconLoader(&#39;src/assets/svg/about&#39;, svg =&gt; svg.replace(/^&lt;svg /, &#39;&lt;svg fill=&quot;currentColor&quot; &#39;)),
        },
      }),
    ],
  }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u516C\u53F8\u81EA\u5DF1\u7684\u7EC4\u4EF6\u5E93-\u5F15\u5165\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u516C\u53F8\u81EA\u5DF1\u7684\u7EC4\u4EF6\u5E93-\u5F15\u5165\u7EC4\u4EF6" aria-hidden="true">#</a> \u516C\u53F8\u81EA\u5DF1\u7684\u7EC4\u4EF6\u5E93\uFF0C\u5F15\u5165\u7EC4\u4EF6</h2><p>\u53C2\u8003\u5DF2\u7ECF\u6210\u578B\u7684\u9879\u76EE\u53C2\u8003 unplugin-icons \u63D2\u4EF6\u63D0\u4F9B\u7ED9\u6211\u4EEC\u4E00\u4E2A unplugin-icons/resolver \u5305\uFF0C\u8FD9\u4E2A\u5305\u5C31\u662F\u7528\u6765\u5904\u7406 Icon \u76F8\u5173\u7684\u81EA\u52A8\u5F15\u5165\u89E3\u6790\u7684\uFF0C\u6211\u4EEC\u53EB\u5B83 Icon\u81EA\u52A8\u5F15\u5165\u89E3\u6790\u5668\uFF0C\u5176\u5B9E\u5B9E\u73B0\u8D77\u6765\u4E5F\u662F\u975E\u5E38\u7B80\u5355\u7684\uFF0C\u5177\u4F53\u7B49\u770B\u4E86\u4E0B\u9762\u81EA\u5B9A\u4E49\u81EA\u52A8\u5F15\u5165\u5C31\u660E\u767D\u4E86\u3002</p>`,10),v=[d];function a(c,r){return n(),i("div",null,v)}var t=e(s,[["render",a],["__file","009vue\u9879\u76EE\u4E2D\u5F15\u5165\u56FE\u6807\u5E93\u6216\u662F\u7EC4\u4EF6\u5E93\u7684\u65B9\u6CD5\u6C47\u603B.html.vue"]]);export{t as default};
