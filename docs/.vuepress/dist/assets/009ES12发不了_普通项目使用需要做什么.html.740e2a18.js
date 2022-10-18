import{_ as i,r as s,o as l,c as a,a as e,b as d,w as r,d as v,e as u}from"./app.ff59bb27.js";const t={},b={class:"table-of-contents"},c=u("\u7C7B\u5E93\u5F00\u53D1"),m=v(`<h4 id="es12-\u53D1\u5E03\u4E86-\u5728-vue-\u9879\u76EE\u4E2D\u60F3\u8981\u4F7F\u7528-\u5982\u4F55\u505A\u5230" tabindex="-1"><a class="header-anchor" href="#es12-\u53D1\u5E03\u4E86-\u5728-vue-\u9879\u76EE\u4E2D\u60F3\u8981\u4F7F\u7528-\u5982\u4F55\u505A\u5230" aria-hidden="true">#</a> ES12 \u53D1\u5E03\u4E86\uFF0C\u5728 vue \u9879\u76EE\u4E2D\u60F3\u8981\u4F7F\u7528\uFF0C\u5982\u4F55\u505A\u5230\uFF1F</h4><p>\u6700\u7B80\u5355\u7C97\u66B4\u7684\u529E\u6CD5\u5C31\u662F babel-loader \u5F15\u5165\u3002</p><h4 id="_1-\u65B9\u6CD5-1-vue-webpack-\u914D\u7F6E\u4E2D-\u9ED8\u8BA4\u4F7F\u7528-vue-cli-plugin-babel" tabindex="-1"><a class="header-anchor" href="#_1-\u65B9\u6CD5-1-vue-webpack-\u914D\u7F6E\u4E2D-\u9ED8\u8BA4\u4F7F\u7528-vue-cli-plugin-babel" aria-hidden="true">#</a> \uFF081\uFF09\u65B9\u6CD5 1\uFF1Avue+webpack \u914D\u7F6E\u4E2D\uFF0C\u9ED8\u8BA4\u4F7F\u7528\uFF1A**@vue/cli-plugin-babel</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Uses Babel 7 + babel-loader + @vue/babel-preset-app by default\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7babel.config.js\u6587\u4EF6\u8FDB\u884C\u5176\u4ED6\u7684\u81EA\u5B9A\u4E49\u914D\u7F6E\u3002

module.exports = {
    presets: [
        &#39;@vue/cli-plugin-babel/preset&#39;
    ]
};
\u8FD9\u6837\u9ED8\u8BA4\u914D\u7F6E\u540E\uFF0C\u53EF\u4EE5\u5C06\u6240\u6709\u7684API\u8F6C\u6362\u3002\u901A\u8FC7@vue/cli-plugin-babel/preset \u914D\u7F6Ebabel \u7684 presets
\u8F6C\u6362\u9AD8\u7EA7\u8BED\u6CD5\u4F7F\u7528\uFF0C\u65E0\u8BBA\u662FES6,ES7+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u65B9\u6CD5-2-\u8131\u79BB-vue-\u6846\u67B6\u770B-\u6216\u662F-vite-\u811A\u624B\u67B6\u7684\u65F6\u5019" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5-2-\u8131\u79BB-vue-\u6846\u67B6\u770B-\u6216\u662F-vite-\u811A\u624B\u67B6\u7684\u65F6\u5019" aria-hidden="true">#</a> \u65B9\u6CD5 2\uFF1A\u8131\u79BB vue \u6846\u67B6\u770B\uFF0C\u6216\u662F vite \u811A\u624B\u67B6\u7684\u65F6\u5019\uFF0C</h4><p>\u6211\u4EEC\u9700\u8981\u8BA4\u771F\u8003\u8651</p><p>Babel 7.4 \u4E4B\u540E\u4E0D\u518D\u63A8\u8350\u4F7F\u7528<code>@babel/polyfill</code>\uFF0C\u800C\u662F\u63A8\u8350\u6D4F\u89C8\u5668\u4F7F\u7528 corejs \u7BA1\u7406\u3002</p><p>core-js \u662F\u5B8C\u5168\u6A21\u5757\u5316\u7684 javascript \u6807\u51C6\u5E93\u3002</p><blockquote><p>core-js v2 \u5DF2\u7ECF\u4E0D\u518D\u7EF4\u62A4\uFF0C\u63A8\u8350\u4F7F\u7528 v3 \u7248\u672C</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// .babelrc
{
  &quot;presets&quot;: [
    [
      &quot;@babel/preset-env&quot;,
      {
        &quot;targets&quot;: {
          &quot;chrome&quot;: &quot;80&quot; // \u63A8\u8350\u4F7F\u7528 .browserslistrc
        },
        &quot;useBuiltIns&quot;: &quot;entry&quot;,
        &quot;corejs&quot;: {
          &quot;version&quot;: 3, // 2 \u548C 3 \u7248\u672C\u90FD\u9700\u8981\u624B\u52A8\u5B89\u88C5\u5E93\uFF1Ayarn add core-js@3
          &quot;proposals&quot;: false
        }
      }
    ]
  ],
  &quot;plugins&quot;: []
}

\u7136\u540E\u5728\u5165\u53E3\u6587\u4EF6\u5F15\u5165polyfill\u6587\u4EF6
import &#39;core-js/stable&#39;;
import &#39;regenerator-runtime/runtime&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u65B9\u6CD5-3-\u4F7F\u7528-plugin-transform-runtime" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5-3-\u4F7F\u7528-plugin-transform-runtime" aria-hidden="true">#</a> \u65B9\u6CD5 3\uFF1A\u4F7F\u7528 plugin-transform-runtime</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\`plugin-transform-runtime\`\u53EF\u4EE5\u4E3B\u8981\u505A\u4E86\u4E09\u4EF6\u4E8B\uFF1A



- \u5F53\u5F00\u53D1\u8005\u4F7F\u7528\u5F02\u6B65\u6216\u751F\u6210\u5668\u7684\u65F6\u5019\uFF0C\u81EA\u52A8\u5F15\u5165\`@babel/runtime/regenerator\`\uFF0C\u5F00\u53D1\u8005\u4E0D\u5FC5\u5728\u5165\u53E3\u6587\u4EF6\u505A\u989D\u5916\u5F15\u5165
- \u63D0\u4F9B\u6C99\u76D2\u73AF\u5883\uFF0C\u907F\u514D\u5168\u5C40\u73AF\u5883\u7684\u6C61\u67D3
- \u79FB\u9664\`babel\`\u5185\u8054\u7684\`helpers\`\uFF0C\u7EDF\u4E00\u4F7F\u7528\`@babel/runtime/helpers\`\u4EE3\u66FF\uFF0C\u51CF\u5C0F\u6253\u5305\u4F53\u79EF

 \u5F53\u4F7F\u7528\u6B64\u65B9\u6848\u65F6\uFF0C\u4E0D\u9700\u8981\u5728\u5165\u53E3\u6587\u4EF6\u5904\u624B\u52A8\u5F15\u5165\`core-js\`\u548C\`regenerator-runtime\`\u3002\u8BE6\u7EC6\u7684\u914D\u7F6E\u9879\u5EFA\u8BAE\u5728\u9700\u8981\u7528\u7684\u65F6\u5019\u67E5\u770B\u5B98\u65B9\u6587\u6863\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn add @babel/runtime //\u9ED8\u8BA4 corejs\u4E3A false\uFF0C
\u5982\u679C\u4F7F\u7528 core-js v3 \u7684 runtime\uFF0C
\u5219\u9700\u8981\u5B89\u88C5 @babel/runtime-corejs3 yarn add -D babel-plugin-transform-runtime

\u4F5C\u8005\uFF1A\u5999\u624DDev
\u94FE\u63A5\uFF1Ahttps://juejin.cn/post/6984020141746946084
\u6765\u6E90\uFF1A\u7A00\u571F\u6398\u91D1
\u8457\u4F5C\u6743\u5F52\u4F5C\u8005\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u4F5C\u8005\u83B7\u5F97\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002

\u6211\u4EEC\u7528babel\u63D2\u4EF6\u7684\u65F6\u5019\uFF0C\u6709\u4E00\u4E2A@babel/preset-env,@babel/preset-env\u7684\u4F5C\u7528\u5C31\u662F\u5C06\u5E38\u7528\u7684ES6\u7279\u6027\u653E\u5230\u4E00\u8D77\u4E86,\u7136\u540E\u8FD9\u6837\u6211\u4EEC\u53EF\u4EE5\u8BBE\u7F6E


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u65B9\u6CD5-4-\u533A\u5206-babel-preset-env-\u548C-plugin-transform-runtime-\u7684\u673A\u5236\u3002" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5-4-\u533A\u5206-babel-preset-env-\u548C-plugin-transform-runtime-\u7684\u673A\u5236\u3002" aria-hidden="true">#</a> \u65B9\u6CD5 4\uFF1A\u533A\u5206@babel/preset-env \u548C plugin-transform-runtime \u7684\u673A\u5236\u3002</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F7F\u7528\u524D\u5982\u679C\u662Fbabel7\u7248\u672C\uFF0C\u5982\u4E0B\u770B\u3002

\`@babel/preset-env\`\u548C\`plugin-transform-runtime\`\u4E8C\u8005\u90FD\u53EF\u4EE5\u8BBE\u7F6E\u4F7F\u7528\`corejs\`\u6765\u5904\u7406\`polyfill\`\uFF0C\u4E8C\u8005\u5404\u6709\u4F7F\u7528\u573A\u666F\uFF0C\u5728\u9879\u76EE\u5F00\u53D1\u548C\u7C7B\u5E93\u5F00\u53D1\u7684\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528\u4E0D\u540C\u7684\u914D\u7F6E\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u9879\u76EE\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u5F00\u53D1" aria-hidden="true">#</a> \u9879\u76EE\u5F00\u53D1</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>useBuiltIns\u4F7F\u7528usage\uFF0C\u5C3D\u91CF\u4F7F\u7528\u793E\u533A\u5E7F\u6CDB\u4F7F\u7528\u7684\u4F18\u8D28\u5E93\u4EE5\u4F18\u5316\u6253\u5305\u4F53\u79EF\uFF0C\u4E0D\u4F7F\u7528\u6682\u672A\u8FDB\u5165\u89C4\u8303\u7684\u7279\u6027\u3002plugin-transform-runtime\u53EA\u4F7F\u7528\u5176\u79FB\u9664\u5185\u8054\u590D\u7528\u7684\u8F85\u52A9\u51FD\u6570\u7684\u7279\u6027\uFF0C\u51CF\u5C0F\u6253\u5305\u4F53\u79EF\u3002

{
  &quot;presets&quot;: [
    [
      &quot;@babel/preset-env&quot;,
      {
        // targets \u5B98\u65B9\u63A8\u8350\u4F7F\u7528 .browserslistrc \u914D\u7F6E
        &quot;useBuiltIns&quot;: &quot;usage&quot;,
        &quot;corejs&quot;: {
          &quot;version&quot;: 3,
          &quot;proposals&quot;: false
        }
      }
    ]
  ],
  &quot;plugins&quot;: [
    [
      &quot;@babel/plugin-transform-runtime&quot;,
      {
        &quot;corejs&quot;: false // \u9ED8\u8BA4\u503C\uFF0C\u5373\u4F7F\u5982\u6B64\u4F9D\u7136\u9700\u8981 yarn add @babel/runtime
      }
    ]
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7C7B\u5E93\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u5E93\u5F00\u53D1" aria-hidden="true">#</a> \u7C7B\u5E93\u5F00\u53D1</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7C7B\u5E93\u5F00\u53D1\u5C3D\u91CF\u4E0D\u4F7F\u7528\u6C61\u67D3\u5168\u5C40\u73AF\u5883\u7684polyfill\uFF0C\u56E0\u6B64@babel/preset-env\u53EA\u53D1\u6325\u8BED\u6CD5\u8F6C\u6362\u7684\u529F\u80FD\uFF0Cpolyfill\u7531plugin-transform-runtime\u6765\u5904\u7406\uFF0C\u63A8\u8350\u4F7F\u7528core-js@3\uFF0C\u5E76\u4E14\u4E0D\u4F7F\u7528\u672A\u8FDB\u5165\u89C4\u8303\u7684\u7279\u6027\u3002
{
  &quot;presets&quot;: [
    [
      &quot;@babel/preset-env&quot;,
    ]
  ],
  &quot;plugins&quot;: [
    [
      &quot;@babel/plugin-transform-runtime&quot;,
      {
        &quot;corejs&quot;: {
          &quot;version&quot;: 3,
          &quot;proposals&quot;: true
        },
        &quot;useESModules&quot;: true
      }
    ]
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u65B9\u6CD5-5-\u4E09\u4E2A\u76F8\u5173-babel-\u63D2\u4EF6\u4F5C\u7528-browserslist-preset-env-core-js" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5-5-\u4E09\u4E2A\u76F8\u5173-babel-\u63D2\u4EF6\u4F5C\u7528-browserslist-preset-env-core-js" aria-hidden="true">#</a> \u65B9\u6CD5 5\uFF1A\u4E09\u4E2A\u76F8\u5173 babel \u63D2\u4EF6\u4F5C\u7528\uFF1A<strong>browserslist\uFF0Cpreset-env\uFF0Ccore-js</strong></h4><h4 id="\u65B9\u6848-6-\u76EE\u524D-babel-\u548C-tsc-\u90FD\u53EF\u4EE5\u652F\u6301-ts-\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848-6-\u76EE\u524D-babel-\u548C-tsc-\u90FD\u53EF\u4EE5\u652F\u6301-ts-\u7F16\u8BD1" aria-hidden="true">#</a> \u65B9\u6848 6\uFF1A\u76EE\u524D babel \u548C tsc \u90FD\u53EF\u4EE5\u652F\u6301 ts \u7F16\u8BD1</h4><p>\u6700\u597D\u4F7F\u7528 typescript \u652F\u6301 tsc</p><p>\u5BF9\u4E8E babel \u6765\u8BF4\u914D\u7F6E</p><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>module.exports = {
    presets: [
        [
            &#39;@babel/preset-typescript&#39;
        ],
        [
            &#39;@babel/preset-env&#39;,
            {
                targets: &#39;\u76EE\u6807\u73AF\u5883&#39;,
                useBuiltIns: &#39;usage&#39; // \u2018entry\u2019
            }
        ]
    ],
    plugins: [ &#39;@babel/plugin-transform-runtime&#39;]
}
\u4F46\u662F\u6CE8\u610F\uFF1Ababel\u6709\u4E00\u4E9B\u4E0D\u652F\u6301\u7684 ts \u8BED\u6CD5
babel \u662F\u6BCF\u4E2A\u6587\u4EF6\u5355\u72EC\u7F16\u8BD1\u7684\uFF0C\u800C tsc \u4E0D\u662F\uFF0Ctsc \u662F\u6574\u4E2A\u9879\u76EE\u4E00\u8D77\u7F16\u8BD1\uFF0C\u4F1A\u5904\u7406\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\uFF0C\u4F1A\u505A\u8DE8\u6587\u4EF6\u7684\u7C7B\u578B\u58F0\u660E\u5408\u5E76\uFF0C\u6BD4\u5982 namespace \u548C interface \u5C31\u53EF\u4EE5\u8DE8\u6587\u4EF6\u5408\u5E76\u3002
\u6240\u4EE5 babel \u7F16\u8BD1 ts \u4EE3\u7801\u6709\u4E00\u4E9B\u7279\u6027\u662F\u6CA1\u6CD5\u652F\u6301\u7684\u3002

babel\u7684\u597D\u5904\uFF0C\u53EF\u4EE5\u6839\u636Epreset-env\u4E2D\u914D\u7F6E\u6309\u9700\u5F15\u5165\uFF0C\u4F46\u662Ftsc\u56E0\u4E3A\u6CA1\u6709\u505Apolyfill\u5904\u7406\uFF0C\u9700\u8981\u5168\u91CF\u5F15\u5165corejs.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function o(p,h){const n=s("RouterLink");return l(),a("div",null,[e("nav",b,[e("ul",null,[e("li",null,[d(n,{to:"#\u7C7B\u5E93\u5F00\u53D1"},{default:r(()=>[c]),_:1})])])]),m])}var q=i(t,[["render",o],["__file","009ES12\u53D1\u4E0D\u4E86,\u666E\u901A\u9879\u76EE\u4F7F\u7528\u9700\u8981\u505A\u4EC0\u4E48.html.vue"]]);export{q as default};
