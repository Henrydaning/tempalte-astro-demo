<template><div><h1 id="前端埋点" tabindex="-1"><a class="header-anchor" href="#前端埋点" aria-hidden="true">#</a> 前端埋点</h1>
<h1 id="前端监控" tabindex="-1"><a class="header-anchor" href="#前端监控" aria-hidden="true">#</a> 前端监控</h1>
<p>开源免费好用的 bug 埋点追踪系统：sentry</p>
<h2 id="sentry-的特性" tabindex="-1"><a class="header-anchor" href="#sentry-的特性" aria-hidden="true">#</a> sentry 的特性</h2>
<ul>
<li>发送错误通知</li>
<li>给出客户端相关信息，包括浏览器版本、操作系统和请求内容等</li>
<li>代码版本（release 版本号）</li>
<li>上传代码源文件（source map）</li>
</ul>
<h2 id="_1-如何使用" tabindex="-1"><a class="header-anchor" href="#_1-如何使用" aria-hidden="true">#</a> 1.如何使用</h2>
<h3 id="_1-注册账号并创建项目" tabindex="-1"><a class="header-anchor" href="#_1-注册账号并创建项目" aria-hidden="true">#</a> （1）注册账号并创建项目</h3>
<p>https://sentry.io/
点击个人的账号后，进入选择：
Install Sentry</p>
<h3 id="_2-找到-user-settings-选择中文。" tabindex="-1"><a class="header-anchor" href="#_2-找到-user-settings-选择中文。" aria-hidden="true">#</a> （2）找到 user Settings，选择中文。</h3>
<h3 id="_3-将自己案例中的代码赋值到项目中-这里选择-vue2-为例" tabindex="-1"><a class="header-anchor" href="#_3-将自己案例中的代码赋值到项目中-这里选择-vue2-为例" aria-hidden="true">#</a> （3）将自己案例中的代码赋值到项目中，这里选择 Vue2 为例</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// # Using npm
// npm install --save @sentry/vue @sentry/tracing
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";



Sentry.init({
  Vue,
  dsn: "https://6cb22222222222222222222222226.ingest.sentry.io/4504196373872640",
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-测试某处崩溃" tabindex="-1"><a class="header-anchor" href="#_4-测试某处崩溃" aria-hidden="true">#</a> （4）测试某处崩溃</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>   mysentryFn(e) {
      const a = {}
      //此处同样会报错
      console.log(a.name.name)
      //抛出错误
      new Error('抛出错误')

    },
    这样界面的问题菜单栏目，出现相关内容


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-高级功能-在关键错误处-弹出窗口" tabindex="-1"><a class="header-anchor" href="#_5-高级功能-在关键错误处-弹出窗口" aria-hidden="true">#</a> （5）高级功能，在关键错误处，弹出窗口</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Sentry.init({
  dsn: "your dsnxxxxxxxxx",
  beforeSend(event, hint) {
    // Check if it is an exception, and if so, show the report dialog
    if (event.exception) {
      Sentry.showReportDialog({ eventId: event.event_id });
    }
    return event;
  },
});


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-可以通过-environment-区分环境" tabindex="-1"><a class="header-anchor" href="#_6-可以通过-environment-区分环境" aria-hidden="true">#</a> 6.可以通过 environment 区分环境</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Sentry.init({
  environment: process.env.NODE_ENV,

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-自定义-bug-信息" tabindex="-1"><a class="header-anchor" href="#_7-自定义-bug-信息" aria-hidden="true">#</a> 7.自定义 bug 信息</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
还有可以自定义 bug 上下文信息
Sentry.setUser({"email": "xx@xx.cn"});
Sentry.setTag('api', 'api/list/get')
Sentry.setLevel('error');
Sentry.setExtra('data', {
  req: {a:1},
  res: {b:1},
  header:headers
})
Sentry.captureException(new Error('throw new api'))


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-项目案例地址" tabindex="-1"><a class="header-anchor" href="#_8-项目案例地址" aria-hidden="true">#</a> 8.项目案例地址</h3>
<p><a href="https://gitee.com/nyhxiaoning/vue-antd-admin.git" target="_blank" rel="noopener noreferrer">案例项目地址sentry<ExternalLinkIcon/></a></p>
<h3 id="_9-相关的错误处理汇总方案1-processon" tabindex="-1"><a class="header-anchor" href="#_9-相关的错误处理汇总方案1-processon" aria-hidden="true">#</a> 9.相关的错误处理汇总方案1：processOn</h3>
<p><a href="https://www.processon.com/mindmap/6214476d079129079ad749e1" target="_blank" rel="noopener noreferrer">processOn错误处理<ExternalLinkIcon/></a></p>
<h3 id="_10-常用错误处理方案汇总" tabindex="-1"><a class="header-anchor" href="#_10-常用错误处理方案汇总" aria-hidden="true">#</a> 10.常用错误处理方案汇总</h3>
<p>（1）给所有的await都包裹，try,catch</p>
<p>（3）汇总展示报错
<img src="@source/15工具和项目配置工程化问题记录/error.png" alt="报错汇总两种：同步和异步"></p>
</div></template>
