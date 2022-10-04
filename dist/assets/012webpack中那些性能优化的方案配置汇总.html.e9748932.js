import{_ as l,r as a,o as v,c as r,a as e,b as i,w as s,d as c,e as d}from"./app.9dce475b.js";const t={},u={class:"table-of-contents"},m=d("1.CDN \u5F15\u5165\u5B9E\u73B0\uFF0C\u6027\u80FD\u4F18\u5316\u8003\u8651 webpack"),b=d("2.env \u914D\u7F6E env.development"),o=c(`<p>oss\u76F8\u5173\u5185\u5BB9\u5168\u90E8\u5220\u9664xxx</p><h2 id="_1-cdn-\u5F15\u5165\u5B9E\u73B0-\u6027\u80FD\u4F18\u5316\u8003\u8651-webpack" tabindex="-1"><a class="header-anchor" href="#_1-cdn-\u5F15\u5165\u5B9E\u73B0-\u6027\u80FD\u4F18\u5316\u8003\u8651-webpack" aria-hidden="true">#</a> 1.CDN \u5F15\u5165\u5B9E\u73B0\uFF0C\u6027\u80FD\u4F18\u5316\u8003\u8651 webpack</h2><p>\uFF081\uFF09\u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>\u4FEE\u6539 HTML \u9875\u9762\uFF0C\u589E\u52A0\u5982\u4E0B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &lt;!-- TODO:\u751F\u6210\u5F15\u5165CDN\u7684\u5173\u952E\u4EE3\u7801\u90E8\u5206 --&gt;
&lt;!-- require cdn assets js --&gt;
&lt;% for (var i in htmlWebpackPlugin.options.cdn &amp;&amp; htmlWebpackPlugin.options.cdn.js) { %&gt;
    &lt;script type=&quot;text/javascript&quot; src=&quot;&lt;%= htmlWebpackPlugin.options.cdn.js[i] %&gt;&quot;&gt;&lt;/script&gt;
&lt;% } %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u589E\u52A0 webpack \u7684\u914D\u7F6E\u5982\u4E0B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const assetsCDN = {
  // webpack build externals
  externals: {
    vue: &#39;Vue&#39;,
    &#39;vue-router&#39;: &#39;VueRouter&#39;,
    vuex: &#39;Vuex&#39;,
    axios: &#39;axios&#39;,
    nprogress: &#39;NProgress&#39;,
    clipboard: &#39;ClipboardJS&#39;,
    &#39;@antv/data-set&#39;: &#39;DataSet&#39;,
    &#39;js-cookie&#39;: &#39;Cookies&#39;
  },
  css: [
  ],
  js: [
    &#39;//cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js&#39;,
    &#39;//cdn.jsdelivr.net/npm/vue-router@3.3.4/dist/vue-router.min.js&#39;,
    &#39;//cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.min.js&#39;,
    &#39;//cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js&#39;,
    &#39;//cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.js&#39;,
    &#39;//cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js&#39;,
    &#39;//cdn.jsdelivr.net/npm/@antv/data-set@0.11.4/build/data-set.min.js&#39;,
    &#39;//cdn.jsdelivr.net/npm/js-cookie@2.2.1/src/js.cookie.min.js&#39;
  ]
}

  chainWebpack: config =&gt; {
    // \u751F\u4EA7\u73AF\u5883\u4E0B\u4F7F\u7528CDN
    if (isProd) {
      config.plugin(&#39;html&#39;)
        .tap(args =&gt; {
          args[0].cdn = assetsCDN
        return args
      })
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2)\u65B9\u5F0F 2\uFF1A\u589E\u52A0\u63D2\u4EF6\uFF1Awebpack-cdn-plugin\uFF0C\u8FD9\u91CC\u652F\u6301 webpack4.x</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F7F\u7528\u4E24\u4E2A\u63D2\u4EF6
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);
const WebpackCdnPlugin = require(&#39;webpack-cdn-plugin&#39;);
\u7B80\u5355\u8FD9\u6837\u5199\u5373\u53EF
 plugins: [
    new HtmlWebpackPlugin(),
    new WebpackCdnPlugin({
      modules: [
        {
          name: &#39;vue&#39;,
          var: &#39;Vue&#39;,
          path: &#39;dist/vue.runtime.min.js&#39;
        },
        {
          name: &#39;vue-router&#39;,
          var: &#39;VueRouter&#39;,
          path: &#39;dist/vue-router.min.js&#39;
        },
        {
          name: &#39;vuex&#39;,
          var: &#39;Vuex&#39;,
          path: &#39;dist/vuex.min.js&#39;
        }
      ],
      publicPath: &#39;/node_modules&#39;
    })
  ]
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-env-\u914D\u7F6E-env-development" tabindex="-1"><a class="header-anchor" href="#_2-env-\u914D\u7F6E-env-development" aria-hidden="true">#</a> 2.env \u914D\u7F6E env.development</h2><p>\u9996\u5148\u521B\u5EFA\u4E00\u4E2A.env \u6587\u4EF6\u653E\u516C\u5171\u7684\u914D\u7F6E\u6C47\u603B\u5185\u5BB9\u6587\u4EF6\uFF0C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>VUE_APP_PUBLIC_PATH=/
VUE_APP_NAME=Admin
VUE_APP_ROUTES_KEY=admin.routes
VUE_APP_PERMISSIONS_KEY=admin.permissions
VUE_APP_ROLES_KEY=admin.roles
VUE_APP_USER_KEY=admin.user
VUE_APP_SETTING_KEY=admin.setting
VUE_APP_TBAS_KEY=admin.tabs
VUE_APP_TBAS_TITLES_KEY=admin.tabs.titles
VUE_APP_API_BASE_URL=http://api.iczer.com

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E.env.development \u5C31\u662F\u533A\u5206\u4E0D\u540C\u7684\u914D\u7F6E\u73AF\u5883\u7684\u6587\u4EF6\u3002 \u8FD9\u6837\u5199\u66F4\u4F18\u96C5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>VUE_APP_API_BASE_URL=http://dev.iczer.com

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function p(_,g){const n=a("RouterLink");return v(),r("div",null,[e("nav",u,[e("ul",null,[e("li",null,[i(n,{to:"#_1-cdn-\u5F15\u5165\u5B9E\u73B0-\u6027\u80FD\u4F18\u5316\u8003\u8651-webpack"},{default:s(()=>[m]),_:1})]),e("li",null,[i(n,{to:"#_2-env-\u914D\u7F6E-env-development"},{default:s(()=>[b]),_:1})])])]),o])}var h=l(t,[["render",p],["__file","012webpack\u4E2D\u90A3\u4E9B\u6027\u80FD\u4F18\u5316\u7684\u65B9\u6848\u914D\u7F6E\u6C47\u603B.html.vue"]]);export{h as default};
