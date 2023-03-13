import{_ as s,r,o as d,c as t,a as e,b as a,d as l,e as n}from"./app.5805b0e6.js";var c="/dist/assets/error.28532144.png";const v={},o=l(`<h1 id="\u524D\u7AEF\u57CB\u70B9" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u57CB\u70B9" aria-hidden="true">#</a> \u524D\u7AEF\u57CB\u70B9</h1><h1 id="\u524D\u7AEF\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u76D1\u63A7" aria-hidden="true">#</a> \u524D\u7AEF\u76D1\u63A7</h1><p>\u5F00\u6E90\u514D\u8D39\u597D\u7528\u7684 bug \u57CB\u70B9\u8FFD\u8E2A\u7CFB\u7EDF\uFF1Asentry</p><h2 id="sentry-\u7684\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#sentry-\u7684\u7279\u6027" aria-hidden="true">#</a> sentry \u7684\u7279\u6027</h2><ul><li>\u53D1\u9001\u9519\u8BEF\u901A\u77E5</li><li>\u7ED9\u51FA\u5BA2\u6237\u7AEF\u76F8\u5173\u4FE1\u606F\uFF0C\u5305\u62EC\u6D4F\u89C8\u5668\u7248\u672C\u3001\u64CD\u4F5C\u7CFB\u7EDF\u548C\u8BF7\u6C42\u5185\u5BB9\u7B49</li><li>\u4EE3\u7801\u7248\u672C\uFF08release \u7248\u672C\u53F7\uFF09</li><li>\u4E0A\u4F20\u4EE3\u7801\u6E90\u6587\u4EF6\uFF08source map\uFF09</li></ul><h2 id="_1-\u5982\u4F55\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a> 1.\u5982\u4F55\u4F7F\u7528</h2><h3 id="_1-\u6CE8\u518C\u8D26\u53F7\u5E76\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_1-\u6CE8\u518C\u8D26\u53F7\u5E76\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \uFF081\uFF09\u6CE8\u518C\u8D26\u53F7\u5E76\u521B\u5EFA\u9879\u76EE</h3><p>https://sentry.io/ \u70B9\u51FB\u4E2A\u4EBA\u7684\u8D26\u53F7\u540E\uFF0C\u8FDB\u5165\u9009\u62E9\uFF1A Install Sentry</p><h3 id="_2-\u627E\u5230-user-settings-\u9009\u62E9\u4E2D\u6587\u3002" tabindex="-1"><a class="header-anchor" href="#_2-\u627E\u5230-user-settings-\u9009\u62E9\u4E2D\u6587\u3002" aria-hidden="true">#</a> \uFF082\uFF09\u627E\u5230 user Settings\uFF0C\u9009\u62E9\u4E2D\u6587\u3002</h3><h3 id="_3-\u5C06\u81EA\u5DF1\u6848\u4F8B\u4E2D\u7684\u4EE3\u7801\u8D4B\u503C\u5230\u9879\u76EE\u4E2D-\u8FD9\u91CC\u9009\u62E9-vue2-\u4E3A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-\u5C06\u81EA\u5DF1\u6848\u4F8B\u4E2D\u7684\u4EE3\u7801\u8D4B\u503C\u5230\u9879\u76EE\u4E2D-\u8FD9\u91CC\u9009\u62E9-vue2-\u4E3A\u4F8B" aria-hidden="true">#</a> \uFF083\uFF09\u5C06\u81EA\u5DF1\u6848\u4F8B\u4E2D\u7684\u4EE3\u7801\u8D4B\u503C\u5230\u9879\u76EE\u4E2D\uFF0C\u8FD9\u91CC\u9009\u62E9 Vue2 \u4E3A\u4F8B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// # Using npm
// npm install --save @sentry/vue @sentry/tracing
import * as Sentry from &quot;@sentry/vue&quot;;
import { BrowserTracing } from &quot;@sentry/tracing&quot;;



Sentry.init({
  Vue,
  dsn: &quot;https://6cb22222222222222222222222226.ingest.sentry.io/4504196373872640&quot;,
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: [&quot;localhost&quot;, &quot;my-site-url.com&quot;, /^\\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u6D4B\u8BD5\u67D0\u5904\u5D29\u6E83" tabindex="-1"><a class="header-anchor" href="#_4-\u6D4B\u8BD5\u67D0\u5904\u5D29\u6E83" aria-hidden="true">#</a> \uFF084\uFF09\u6D4B\u8BD5\u67D0\u5904\u5D29\u6E83</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   mysentryFn(e) {
      const a = {}
      //\u6B64\u5904\u540C\u6837\u4F1A\u62A5\u9519
      console.log(a.name.name)
      //\u629B\u51FA\u9519\u8BEF
      new Error(&#39;\u629B\u51FA\u9519\u8BEF&#39;)

    },
    \u8FD9\u6837\u754C\u9762\u7684\u95EE\u9898\u83DC\u5355\u680F\u76EE\uFF0C\u51FA\u73B0\u76F8\u5173\u5185\u5BB9


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u9AD8\u7EA7\u529F\u80FD-\u5728\u5173\u952E\u9519\u8BEF\u5904-\u5F39\u51FA\u7A97\u53E3" tabindex="-1"><a class="header-anchor" href="#_5-\u9AD8\u7EA7\u529F\u80FD-\u5728\u5173\u952E\u9519\u8BEF\u5904-\u5F39\u51FA\u7A97\u53E3" aria-hidden="true">#</a> \uFF085\uFF09\u9AD8\u7EA7\u529F\u80FD\uFF0C\u5728\u5173\u952E\u9519\u8BEF\u5904\uFF0C\u5F39\u51FA\u7A97\u53E3</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Sentry.init({
  dsn: &quot;your dsnxxxxxxxxx&quot;,
  beforeSend(event, hint) {
    // Check if it is an exception, and if so, show the report dialog
    if (event.exception) {
      Sentry.showReportDialog({ eventId: event.event_id });
    }
    return event;
  },
});


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-\u53EF\u4EE5\u901A\u8FC7-environment-\u533A\u5206\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#_6-\u53EF\u4EE5\u901A\u8FC7-environment-\u533A\u5206\u73AF\u5883" aria-hidden="true">#</a> 6.\u53EF\u4EE5\u901A\u8FC7 environment \u533A\u5206\u73AF\u5883</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Sentry.init({
  environment: p<wbr>rocess.env.NODE_ENV,

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-\u81EA\u5B9A\u4E49-bug-\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_7-\u81EA\u5B9A\u4E49-bug-\u4FE1\u606F" aria-hidden="true">#</a> 7.\u81EA\u5B9A\u4E49 bug \u4FE1\u606F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u8FD8\u6709\u53EF\u4EE5\u81EA\u5B9A\u4E49 bug \u4E0A\u4E0B\u6587\u4FE1\u606F
Sentry.setUser({&quot;email&quot;: &quot;xx@xx.cn&quot;});
Sentry.setTag(&#39;api&#39;, &#39;api/list/get&#39;)
Sentry.setLevel(&#39;error&#39;);
Sentry.setExtra(&#39;data&#39;, {
  req: {a:1},
  res: {b:1},
  header:headers
})
Sentry.captureException(new Error(&#39;throw new api&#39;))


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-\u9879\u76EE\u6848\u4F8B\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#_8-\u9879\u76EE\u6848\u4F8B\u5730\u5740" aria-hidden="true">#</a> 8.\u9879\u76EE\u6848\u4F8B\u5730\u5740</h3>`,20),u={href:"https://gitee.com/nyhxiaoning/vue-antd-admin.git",target:"_blank",rel:"noopener noreferrer"},h=n("\u6848\u4F8B\u9879\u76EE\u5730\u5740sentry"),m=e("h3",{id:"_9-\u76F8\u5173\u7684\u9519\u8BEF\u5904\u7406\u6C47\u603B\u65B9\u68481-processon",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_9-\u76F8\u5173\u7684\u9519\u8BEF\u5904\u7406\u6C47\u603B\u65B9\u68481-processon","aria-hidden":"true"},"#"),n(" 9.\u76F8\u5173\u7684\u9519\u8BEF\u5904\u7406\u6C47\u603B\u65B9\u68481\uFF1AprocessOn")],-1),b={href:"https://www.processon.com/mindmap/6214476d079129079ad749e1",target:"_blank",rel:"noopener noreferrer"},_=n("processOn\u9519\u8BEF\u5904\u7406"),p=e("h3",{id:"_10-\u5E38\u7528\u9519\u8BEF\u5904\u7406\u65B9\u6848\u6C47\u603B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_10-\u5E38\u7528\u9519\u8BEF\u5904\u7406\u65B9\u6848\u6C47\u603B","aria-hidden":"true"},"#"),n(" 10.\u5E38\u7528\u9519\u8BEF\u5904\u7406\u65B9\u6848\u6C47\u603B")],-1),x=e("p",null,"\uFF081\uFF09\u7ED9\u6240\u6709\u7684await\u90FD\u5305\u88F9\uFF0Ctry,catch",-1),g=e("p",null,[n("\uFF083\uFF09\u6C47\u603B\u5C55\u793A\u62A5\u9519 "),e("img",{src:c,alt:"\u62A5\u9519\u6C47\u603B\u4E24\u79CD\uFF1A\u540C\u6B65\u548C\u5F02\u6B65"})],-1);function f(y,S){const i=r("ExternalLinkIcon");return d(),t("div",null,[o,e("p",null,[e("a",u,[h,a(i)])]),m,e("p",null,[e("a",b,[_,a(i)])]),p,x,g])}var w=s(v,[["render",f],["__file","019\u524D\u7AEF\u57CB\u70B9\u76D1\u63A7\u65B9\u6848\u8BB0\u5F55.html.vue"]]);export{w as default};
