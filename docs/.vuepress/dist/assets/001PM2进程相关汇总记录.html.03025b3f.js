import{_ as d,r as l,o as a,c as r,a as e,b as v,d as n,e as i}from"./app.5805b0e6.js";const c={},t=n(`<h2 id="windows-\u8FDB\u7A0B\u76F8\u5173-\u6740\u6B7B\u8FDB\u7A0B\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#windows-\u8FDB\u7A0B\u76F8\u5173-\u6740\u6B7B\u8FDB\u7A0B\u547D\u4EE4" aria-hidden="true">#</a> windows \u8FDB\u7A0B\u76F8\u5173\uFF0C\u6740\u6B7B\u8FDB\u7A0B\u547D\u4EE4</h2><h3 id="_1-\u67E5\u770B\u5F53\u524D\u7684\u6240\u6709\u7684\u8FDB\u7A0B\u548C\u7AEF\u53E3\u5360\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u67E5\u770B\u5F53\u524D\u7684\u6240\u6709\u7684\u8FDB\u7A0B\u548C\u7AEF\u53E3\u5360\u7528" aria-hidden="true">#</a> 1.\u67E5\u770B\u5F53\u524D\u7684\u6240\u6709\u7684\u8FDB\u7A0B\u548C\u7AEF\u53E3\u5360\u7528</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u67E5\u770B\u7AEF\u53E3\u5360\u7528 netstat -ano


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u67E5\u770B\u5236\u5B9A\u7AEF\u53E3\u5360\u7528\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_2-\u67E5\u770B\u5236\u5B9A\u7AEF\u53E3\u5360\u7528\u60C5\u51B5" aria-hidden="true">#</a> 2.\u67E5\u770B\u5236\u5B9A\u7AEF\u53E3\u5360\u7528\u60C5\u51B5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>netstat -aon|findstr 8080       \u6570\u5B57\u4E3A\u7AEF\u53E3\u53F7


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u6740\u6389\u8FDB\u7A0B-taskkill" tabindex="-1"><a class="header-anchor" href="#_3-\u6740\u6389\u8FDB\u7A0B-taskkill" aria-hidden="true">#</a> 3.\u6740\u6389\u8FDB\u7A0B\uFF1Ataskkill</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>taskkill /f /PID 22524    \u6740PID




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pm2-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#pm2-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> PM2 \u662F\u4EC0\u4E48</h2>`,8),m=i("\u4F7F\u7528pm2\u6765\u5F7B\u5E95\u638C\u63E1\u5FAE\u670D\u52A1\u8FD0\u7EF4\u7CBE\u9AD3 "),u={href:"https://app.yinxiang.com/shard/s37/nl/24388549/5d7140a1-b1ca-4cc5-9e81-c32a6d7ed19e",target:"_blank",rel:"noopener noreferrer"},o=i("\u76F8\u5173 PM2 \u7684\u4F7F\u7528\u8BB0\u5F55"),b=n(`<p>PM2 \u662F node \u8FDB\u7A0B\u7BA1\u7406\u5DE5\u5177\uFF0C\u53EF\u4EE5\u5229\u7528\u5B83\u6765\u7B80\u5316\u5F88\u591A node \u5E94\u7528\u7BA1\u7406\u7684\u7E41\u7410\u4EFB\u52A1\uFF0C\u8FD9\u91CC\u63A8\u8350\u4E00\u4E2A node \u7248\u672C\u63A7\u5236\u5DE5\u5177--nvm\u3002</p><h2 id="_1-\u4E3A\u4EC0\u4E48\u4F7F\u7528-pm2" tabindex="-1"><a class="header-anchor" href="#_1-\u4E3A\u4EC0\u4E48\u4F7F\u7528-pm2" aria-hidden="true">#</a> 1.\u4E3A\u4EC0\u4E48\u4F7F\u7528 pm2</h2><p>\u7EBF\u4E0A\u9879\u76EE\uFF0C\u5982\u679C\u76F4\u63A5\u901A\u8FC7 node app \u6765\u542F\u52A8\uFF0C\u56E0\u4E3A node \u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u6240\u4EE5\u5982\u679C\u62A5\u9519\u4E86\u53EF\u80FD\u4F1A\u4F7F\u9879\u76EE\u76F4\u63A5\u505C\u6B62\uFF0C\u4ECE\u800C\u5BFC\u81F4\u6574\u4E2A\u670D\u52A1\u5D29\u6E83\u3002</p><h3 id="\u4E00\u822C\u76D1\u63A7-node-\u6709\u51E0\u79CD\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u4E00\u822C\u76D1\u63A7-node-\u6709\u51E0\u79CD\u65B9\u6848" aria-hidden="true">#</a> \u4E00\u822C\u76D1\u63A7 node \u6709\u51E0\u79CD\u65B9\u6848\uFF1A</h3><p>supervisor: \u4E00\u822C\u7528\u4F5C\u5F00\u53D1\u73AF\u5883\u7684\u4F7F\u7528\uFF1B forever: \u7BA1\u7406\u591A\u4E2A\u7AD9\u70B9\uFF0C\u4E00\u822C\u6BCF\u4E2A\u7AD9\u70B9\u7684\u8BBF\u95EE\u91CF\u4E0D\u5927\u7684\u60C5\u51B5\uFF0C\u4E0D\u9700\u8981\u76D1\u63A7\uFF1B PM2: \u7F51\u7AD9\u7684\u8BBF\u95EE\u91CF\u6BD4\u8F83\u5927\uFF0C\u9700\u8981\u5B8C\u6574\u7684\u76D1\u63A7\u9875\u9762\u3002</p><h2 id="_2-pm2-\u7684\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-pm2-\u7684\u4F18\u70B9" aria-hidden="true">#</a> 2.pm2 \u7684\u4F18\u70B9</h2><p>pm2 \u4F18\u70B9</p><p>\uFF081\uFF09\u540E\u53F0\u8FD0\u884C(\u5173\u6389 cmd \u7A97\u53E3\u4F9D\u7136\u8FD0\u884C) \uFF082\uFF090 \u79D2\u505C\u673A\u91CD\u8F7D\uFF0C\u7EF4\u62A4\u5347\u7EA7\u65F6\u4E0D\u9700\u8981\u505C\u673A Linux (stable) &amp; MacOSx (stable) &amp; Windows (stable).\u591A\u5E73\u53F0\u652F\u6301 \uFF083\uFF09\u8FDB\u7A0B\u5B88\u62A4 (\u505C\u6B62\u4E0D\u7A33\u5B9A\u7684\u8FDB\u7A0B\uFF0C\u907F\u514D\u65E0\u9650\u5FAA\u73AF) \uFF084\uFF09\u5185\u5EFA\u8D1F\u8F7D\u5747\u8861 \uFF085\uFF09\u5B9E\u65F6\u63A7\u5236\u53F0\u68C0\u6D4B \uFF086\uFF09\u63D0\u4F9B HTTP API \u7B49 \uFF087\uFF09\u8FDC\u7A0B\u63A7\u5236\u548C\u5B9E\u65F6\u7684\u63A5\u53E3 API ( nodejs \u6A21\u5757,\u5141\u8BB8\u548C PM2 \u8FDB\u7A0B\u7BA1\u7406\u5668\u4EA4\u4E92 ) \uFF088\uFF09\u4E0D\u4EC5\u4EC5\u53EF\u4EE5\u542F\u52A8 node \u7A0B\u5E8F\uFF0C\u5BF9\u4E8E\u4E00\u822C\u7684\u811A\u672C\u7A0B\u5E8F\u540C\u6837\u53EF\u4EE5\u81EA\u52A8\u5316\u90E8\u7F72\u9879\u76EE</p><h2 id="_3-pm2-\u914D\u7F6E\u6587\u4EF6\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_3-pm2-\u914D\u7F6E\u6587\u4EF6\u542F\u52A8" aria-hidden="true">#</a> 3.pm2 \u914D\u7F6E\u6587\u4EF6\u542F\u52A8</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728\u4E0A\u9762\u7684\u542F\u52A8\u547D\u4EE4\u4F8B\u5B50\u4E2D\uFF0C\u6709\u4E00\u6761pm2 start app.json\u547D\u4EE4\uFF0C\u53EF\u4EE5\u5728app.json\u6587\u4EF6\u4E2D\u6DFB\u52A0\u914D\u7F6E
apps:json\u7ED3\u6784\uFF0Capps\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5BF9\u8C61\u5C31\u5BF9\u5E94\u4E00\u4E2Apm2\u4E2D\u8FD0\u884C\u7684\u5E94\u7528

\u53C2\u6570\u63A7\u5236\uFF1A

name:\u5E94\u7528\u7A0B\u5E8F\u540D\u79F0
args:\u811A\u672C\u7684\u53C2\u6570\u57DF
cwd:\u5E94\u7528\u7A0B\u5E8F\u6240\u5728\u7684\u76EE\u5F55
script:\u5E94\u7528\u7A0B\u5E8F\u7684\u811A\u672C\u8DEF\u5F84
log_date_format:
node_args:node \u7684\u53C2\u6570\u57DF
error_file:\u81EA\u5B9A\u4E49\u5E94\u7528\u7A0B\u5E8F\u7684\u9519\u8BEF\u65E5\u5FD7\u6587\u4EF6
out_file:\u81EA\u5B9A\u4E49\u5E94\u7528\u7A0B\u5E8F\u65E5\u5FD7\u6587\u4EF6
pid_file:\u81EA\u5B9A\u4E49\u5E94\u7528\u7A0B\u5E8F\u7684pid\u6587\u4EF6
instances:
min_uptime:\u6700\u5C0F\u8FD0\u884C\u65F6\u95F4\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u7684\u662F60s\u5373\u5982\u679C\u5E94\u7528\u7A0B\u5E8F\u572860s\u5185\u9000\u51FA\uFF0Cpm2\u4F1A\u8BA4\u4E3A\u7A0B\u5E8F\u5F02\u5E38\u9000\u51FA\uFF0C\u6B64\u65F6\u89E6\u53D1\u91CD\u542Fmax_restarts\u8BBE\u7F6E\u6570\u91CF
max_restarts:\u8BBE\u7F6E\u5E94\u7528\u7A0B\u5E8F\u5F02\u5E38\u9000\u51FA\u91CD\u542F\u7684\u6B21\u6570\uFF0C\u9ED8\u8BA415\u6B21\uFF08\u4ECE0\u5F00\u59CB\u8BA1\u6570\uFF09
cron_restart:\u5B9A\u65F6\u542F\u52A8\uFF0C\u89E3\u51B3\u91CD\u542F\u80FD\u89E3\u51B3\u7684\u95EE\u9898
watch:\u662F\u5426\u542F\u7528\u76D1\u63A7\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u662Ffalse\u3002\u5982\u679C\u8BBE\u7F6E\u6210true\uFF0C\u5F53\u5E94\u7528\u7A0B\u5E8F\u53D8\u52A8\u65F6\uFF0C  pm2\u4F1A\u81EA\u52A8\u91CD\u8F7D\u3002\u8FD9\u91CC\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4F60\u8981\u76D1\u63A7\u7684\u6587\u4EF6\u3002
merge_logs:
exec_interpreter:\u5E94\u7528\u7A0B\u5E8F\u7684\u811A\u672C\u7C7B\u578B\uFF0C\u8FD9\u91CC\u4F7F\u7528\u7684shell\uFF0C\u9ED8\u8BA4\u662Fnodejs
exec_mode:\u5E94\u7528\u7A0B\u5E8F\u542F\u52A8\u6A21\u5F0F\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u7684\u662Fcluster_mode\uFF08\u96C6\u7FA4\uFF09\uFF0C\u9ED8\u8BA4\u662Ffork
autorestart:\u542F\u7528/\u7981\u7528\u5E94\u7528\u7A0B\u5E8F\u5D29\u6E83\u6216\u9000\u51FA\u65F6\u81EA\u52A8\u91CD\u542F
vizion:\u542F\u7528/\u7981\u7528vizion\u7279\u6027(\u7248\u672C\u63A7\u5236)


{
  &quot;apps&quot;: [
    {
      &quot;name&quot;: &quot;serverName&quot;, // \u540D\u79F0
      &quot;script&quot;: &quot;./index.js&quot;, // \u5165\u53E3\u6587\u4EF6
      &quot;env&quot;: { // \u73AF\u5883
        &quot;NODE_ENV&quot;: &quot;development&quot;
      },
      &quot;env_production&quot;: {
        &quot;NODE_ENV&quot;: &quot;production&quot;
      },
      &quot;instances&quot;: 4, // \u542F\u7528\u591A\u5C11\u4E2A\u5B9E\u4F8B
      &quot;exec_mode&quot;: &quot;cluster&quot;, // \u5E94\u7528\u7A0B\u5E8F\u542F\u52A8\u6A21\u5F0F\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u7684\u662Fcluster_mode\uFF08\u96C6\u7FA4\uFF09\uFF0C\u9ED8\u8BA4\u662Ffork
      &quot;max_restarts&quot; : 3, // \u8BBE\u7F6E\u5E94\u7528\u7A0B\u5E8F\u5F02\u5E38\u9000\u51FA\u91CD\u542F\u7684\u6B21\u6570\uFF0C\u9ED8\u8BA415\u6B21\uFF08\u4ECE0\u5F00\u59CB\u8BA1\u6570\uFF09
      &quot;restart_delay&quot; : 5000, // \u5F02\u5E38\u91CD\u542F\u60C5\u51B5\u4E0B\uFF0C\u5EF6\u65F6\u91CD\u542F\u65F6\u95F4
      &quot;log_date_format&quot; : &quot;YYYY-MM-DD HH:mm Z&quot;,
      &quot;combine_logs&quot; : true,
      &quot;log_file&quot;: &quot;&lt;yourpath&gt;/combined.outerr.log&quot;, // \u65E5\u5FD7\u76EE\u5F55
      &quot;out_file&quot;: &quot;&lt;yourpath&gt;/out.log&quot;,
      &quot;error_file&quot;: &quot;&lt;yourpath&gt;/err.log&quot;,
    }
  ]
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ecosystem-config-js-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#ecosystem-config-js-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> ecosystem.config.js \u914D\u7F6E\u6587\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
  // apps\u662F\u4E00\u4E2Ajson\u7ED3\u6784\u7684\u6570\u7EC4 \uFF0C\u6BCF\u4E00\u4E2A\u6570\u7EC4\u6210\u5458\u5BF9\u5E94\u4E00\u4E2Apm2\u4E2D\u8FD0\u884C\u7684\u5E94\u7528
  apps : [
    {
      // \u5E94\u7528\u7A0B\u5E8F\u540D\u79F0
      name: &#39;next-test&#39;,
      // \u6267\u884C\u6587\u4EF6
      script: &#39;index.js&#39;,
      // \u5E94\u7528\u7A0B\u5E8F\u6240\u5728\u7684\u76EE\u5F55
      cwd: &#39;./&#39;,
      // \u4F20\u9012\u7ED9\u811A\u672C\u7684\u53C2\u6570
      args: &#39;&#39;,
      // \u6307\u5B9A\u7684\u811A\u672C\u89E3\u91CA\u5668
      interpreter: &#39;&#39;,
      // \u4F20\u9012\u7ED9\u89E3\u91CA\u5668\u7684\u53C2\u6570
      interpreter_args: &#39;&#39;,
      // \u662F\u5426\u542F\u7528\u76D1\u63A7\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u662Ffalse\u3002\u5982\u679C\u8BBE\u7F6E\u6210true\uFF0C\u5F53\u5E94\u7528\u7A0B\u5E8F\u53D8\u52A8\u65F6\uFF0Cpm2\u4F1A\u81EA\u52A8\u91CD\u8F7D\u3002\u8FD9\u91CC\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4F60\u8981\u76D1\u63A7\u7684\u6587\u4EF6\u3002
      watch: true, // watch: &#39;./&#39;,
      // \u4E0D\u7528\u76D1\u542C\u7684\u6587\u4EF6
      ignore_watch: [
        &#39;node_modules&#39;,
        &#39;logs&#39;
      ],
      // \u5E94\u7528\u7A0B\u5E8F\u542F\u52A8\u6A21\u5F0F\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u7684\u662F cluster_mode\uFF08\u96C6\u7FA4\uFF09\uFF0C\u9ED8\u8BA4\u662Ffork
      exec_mode: &#39;cluster_mode&#39;,
      // \u5E94\u7528\u542F\u52A8\u5B9E\u4F8B\u4E2A\u6570\uFF0C\u4EC5\u5728cluster\u6A21\u5F0F\u6709\u6548 \u9ED8\u8BA4\u4E3Afork\uFF1B\u6216\u8005 max
      instances: 4,
      // \u6700\u5927\u5185\u5B58\u9650\u5236\u6570\uFF0C\u8D85\u51FA\u81EA\u52A8\u91CD\u542F
      max_memory_restart: 8,
      // \u81EA\u5B9A\u4E49\u5E94\u7528\u7A0B\u5E8F\u7684\u9519\u8BEF\u65E5\u5FD7\u6587\u4EF6(\u9519\u8BEF\u65E5\u5FD7\u6587\u4EF6)
      error_file: &#39;./logs/app-err.log&#39;,
      // \u81EA\u5B9A\u4E49\u5E94\u7528\u7A0B\u5E8F\u65E5\u5FD7\u6587\u4EF6(\u6B63\u5E38\u65E5\u5FD7\u6587\u4EF6)
      out_file: &#39;./logs/app-out.log&#39;,
      // \u8BBE\u7F6E\u8FFD\u52A0\u65E5\u5FD7\u800C\u4E0D\u662F\u65B0\u5EFA\u65E5\u5FD7
      merge_logs: true,
      // \u6307\u5B9A\u65E5\u5FD7\u6587\u4EF6\u7684\u65F6\u95F4\u683C\u5F0F
      log_date_format: &#39;YYYY-MM-DD HH:mm:ss&#39;,
      // \u6700\u5C0F\u8FD0\u884C\u65F6\u95F4\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u7684\u662F60s\u5373\u5982\u679C\u5E94\u7528\u7A0B\u5E8F\u5728* 60s\u5185\u9000\u51FA\uFF0Cpm2\u4F1A\u8BA4\u4E3A\u7A0B\u5E8F\u5F02\u5E38\u9000\u51FA\uFF0C\u6B64\u65F6\u89E6\u53D1\u91CD\u542F* max_restarts\u8BBE\u7F6E\u6570\u91CF\uFF0C\u5E94\u7528\u8FD0\u884C\u5C11\u4E8E\u65F6\u95F4\u88AB\u8BA4\u4E3A\u662F\u5F02\u5E38\u542F\u52A8
      min_uptime: &#39;60s&#39;,
      // \u8BBE\u7F6E\u5E94\u7528\u7A0B\u5E8F\u5F02\u5E38\u9000\u51FA\u91CD\u542F\u7684\u6B21\u6570\uFF0C\u9ED8\u8BA415\u6B21\uFF08\u4ECE0\u5F00\u59CB\u8BA1\u6570\uFF09,\u6700\u5927\u5F02\u5E38\u91CD\u542F\u6B21\u6570\uFF0C\u5373\u5C0F\u4E8Emin_uptime\u8FD0\u884C\u65F6\u95F4\u91CD\u542F\u6B21\u6570\uFF1B
      max_restarts: 10,
      // \u542F\u7528/\u7981\u7528\u5E94\u7528\u7A0B\u5E8F\u5D29\u6E83\u6216\u9000\u51FA\u65F6\u81EA\u52A8\u91CD\u542F\uFF0C\u9ED8\u8BA4\u4E3Atrue, \u53D1\u751F\u5F02\u5E38\u7684\u60C5\u51B5\u4E0B\u81EA\u52A8\u91CD\u542F
      autorestart: true,
      // \u5B9A\u65F6\u542F\u52A8\uFF0C\u89E3\u51B3\u91CD\u542F\u80FD\u89E3\u51B3\u7684\u95EE\u9898\uFF0Ccrontab\u65F6\u95F4\u683C\u5F0F\u91CD\u542F\u5E94\u7528\uFF0C\u76EE\u524D\u53EA\u652F\u6301cluster\u6A21\u5F0F;
      cron_restart: &#39;&#39;,
      // \u5F02\u5E38\u91CD\u542F\u60C5\u51B5\u4E0B\uFF0C\u5EF6\u65F6\u91CD\u542F\u65F6\u95F4
      restart_delay: &#39;60s&#39;,
      // \u73AF\u5883\u914D\u7F6E
      // env: {
      //   // \u516C\u5171\u53D8\u91CF
      //   COMMON_VARIABLE: true
      // },
      // \u751F\u4EA7\u73AF\u5883\u914D\u7F6E
      // $ pm2 start app.js --env
      env: {
        // \u73AF\u5883\u53C2\u6570\uFF0C\u5F53\u524D\u6307\u5B9A\u4E3A\u751F\u4EA7\u73AF\u5883 p<wbr>rocess.env.NODE_ENV
        NODE_ENV: &#39;production&#39;,
        // \u5F53\u524D\u73AF\u5883\u63A5\u53E3\u5730\u5740\uFF0C\u5982\u679C\u4E0D\u7528\u53EF\u4E0D\u914D\u7F6E p<wbr>rocess.env.REMOTE_ADDR
        REMOTE_ADDR: &#39;http://www.dzm.com/&#39;
      },
      // \u5F00\u53D1\u73AF\u5883\u914D\u7F6E
      // $ pm2 start app.js --env_dev
      env_dev: {
        // \u73AF\u5883\u53C2\u6570\uFF0C\u5F53\u524D\u6307\u5B9A\u4E3A\u5F00\u53D1\u73AF\u5883 p<wbr>rocess.env.NODE_ENV
        NODE_ENV: &#39;development&#39;,
        // \u5F53\u524D\u73AF\u5883\u63A5\u53E3\u5730\u5740\uFF0C\u5982\u679C\u4E0D\u7528\u53EF\u4E0D\u914D\u7F6E p<wbr>rocess.env.REMOTE_ADDR
        REMOTE_ADDR: &#39;http://www.dzm-dev.com/&#39;
      },
      // \u6D4B\u8BD5\u73AF\u5883\u914D\u7F6E
      // $ pm2 start app.js --env_test
      env_test: {
        // \u73AF\u5883\u53C2\u6570\uFF0C\u5F53\u524D\u6307\u5B9A\u4E3A\u6D4B\u8BD5\u73AF\u5883 p<wbr>rocess.env.NODE_ENV
        NODE_ENV: &#39;test&#39;,
        // \u5F53\u524D\u73AF\u5883\u63A5\u53E3\u5730\u5740\uFF0C\u5982\u679C\u4E0D\u7528\u53EF\u4E0D\u914D\u7F6E p<wbr>rocess.env.REMOTE_ADDR
        REMOTE_ADDR: &#39;http://www.dzm-test.com/&#39;
      }
    }
  ],

  // \u73AF\u5883\u90E8\u7F72
  deploy : {
    // \u751F\u6210\u73AF\u5883
    // 1\u3001\u4E0A\u4F20\u4EE3\u7801\u5230\u4E91\u7AEF\u4ED3\u5E93
    // 2\u3001\u90E8\u7F72\u547D\u4EE4\u9884\u89C8\uFF1A
    // \u9996\u6B21\u90E8\u7F72: $ pm2 deploy ecosystem.json production setup
    // \u66F4\u65B0\u7248\u672C: $ pm2 deploy ecosystem.json production update
    // \u8FD4\u56DE\u4E0A\u4E00\u4E2A\u7248\u672C: $ pm2 deploy ecosystem.json production revert 1
    // 3\u3001\u6267\u884C\u9996\u6B21\u90E8\u7F72\uFF1A$ pm2 deploy ecosystem.json production setup
    // 4\u3001\u6267\u884C\u90E8\u7F72\u8FD0\u884C\uFF1A$ pm2 deploy ecosystem.json production
    // 5\u3001\u770B\u5230 success \u6210\u529F\uFF0C\u62A5\u9519\u770B\u9519\u8BEF\u81EA\u884C\u767E\u5EA6
    production : {
      // ssh\u7684\u7528\u6237\u540D\uFF0C\u767B\u5F55\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u7528\u6237\u540D
      user : &#39;dzm&#39;,
      // \u8981\u53D1\u5E03\u7684\u673A\u5668\uFF0C\u8FDC\u7A0B\u670D\u52A1\u5668\u7684IP\u6216hostname\uFF0C\u6B64\u5904\u53EF\u4EE5\u662F\u6570\u7EC4\u540C\u6B65\u90E8\u7F72\u591A\u4E2A\u670D\u52A1\u5668\uFF0C\u4E0D\u8FC7\u9274\u4E8E\u6211\u4EEC\u53EA\u6709\u4E00\u4E2A\u670D\u52A1\u5668\uFF0C\u56E0\u6B64\u6211\u4EEC\u586B\u5199 10.0.90.164
      host : &#39;10.0.90.164&#39;,
      // \u670D\u52A1\u5668\u7AEF\u53E3
      port : 8083,
      // \u8981\u53D1\u5E03\u7684\u4EE3\u7801\u5206\u652F\uFF0C\u8FDC\u7AEF\u540D\u79F0\u53CA\u5206\u652F\u540D
      ref  : &#39;origin/master&#39;,
      // \u4EE3\u7801Git\u4ED3\u5E93\u5730\u5740
      repo : &#39;git@gitlab.dzm.net:dzm/nuxt-test&#39;,
      // \u670D\u52A1\u5668\u5B58\u50A8\u4EE3\u7801\u5730\u5740\uFF0C\u8FDC\u7A0B\u670D\u52A1\u5668\u90E8\u7F72\u76EE\u5F55\uFF0C\u9700\u8981\u586B\u5199user\u5177\u5907\u5199\u5165\u6743\u9650\u7684\u76EE\u5F55\uFF0C\u4E5F\u5C31\u662F\u670D\u52A1\u5668\u5B58\u653E\u4E0A\u9762git\u5E93\u4EE3\u7801\u7684\u5730\u65B9
      path : &#39;/usr/local/var/www/production&#39;,
      // ssh\u6743\u9650\u914D\u7F6E
      // &#39;ssh_options&#39;: &#39;StrictHostKeyChecking=no&#39;,
      &#39;ssh_options&#39;: [&#39;StrictHostKeyChecking=no&#39;, &#39;PasswordAuthentication=no&#39;],
      // 1\u3001\u5728 setup \u524D\u89E6\u53D1\uFF0C\u5982\u5B89\u88C5 git
      &#39;pre-setup&#39;: &#39;&#39;,
      // 2\u3001\u5728 setup \u540E\u89E6\u53D1\uFF0C\u5982\u505A\u4E00\u4E9B\u5176\u4ED6\u914D\u7F6E
      &#39;post-setup&#39;: &#39;&#39;,
      // 3\u3001\u5728 deploy \u524D\u89E6\u53D1\uFF0C\u6267\u884C\u672C\u5730\u811A\u672C
      &#39;pre-deploy-local&#39;: &#39;&#39;,
      // 4\u3001\u5728 deploy \u524D\u89E6\u53D1\uFF0C\u6267\u884C\u8FDC\u7A0B\u811A\u672C
      &#39;pre-deploy&#39;: &#39;git fetch --all&#39;,
      // 5\u3001\u5728 deploy \u540E\u89E6\u53D1\uFF0C\u6267\u884C\u8FDC\u7A0B\u811A\u672C\uFF0C\u5982 npm install\uFF0C\u90E8\u7F72\u540E\u9700\u8981\u6267\u884C\u7684\u547D\u4EE4
      // &#39;post-deploy&#39; : &#39;npm install &amp;&amp; pm2 startOrRestart ecosystem.config.js --env production&#39;,
      &#39;post-deploy&#39; : &#39;npm install &amp;&amp; pm2 reload ecosystem.config.js --env production&#39;,
      // \u73AF\u5883\u53D8\u91CF
      &#39;env&#39;  : {
        // \u6307\u5B9A\u4E3A\u751F\u6210\u73AF\u5883
        &#39;NODE_ENV&#39;: &#39;production&#39;
      }
    }
  }
};




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ecosystem-config-js\u548Cpm-json\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#ecosystem-config-js\u548Cpm-json\u533A\u522B" aria-hidden="true">#</a> ecosystem.config.js\u548Cpm.json\u533A\u522B</h3><h2 id="_4-\u67E5\u770B\u4E0E\u76D1\u89C6\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#_4-\u67E5\u770B\u4E0E\u76D1\u89C6\u8FDB\u7A0B" aria-hidden="true">#</a> 4.\u67E5\u770B\u4E0E\u76D1\u89C6\u8FDB\u7A0B</h2><p>pm2 list\uFF1A\u663E\u793A\u6240\u6709\u8FDB\u7A0B\u4FE1\u606F\uFF1B pm2 show 11\uFF0Cpm2 info 11\uFF1A\u67E5\u770B\u8FDB\u7A0B id \u4E3A 11 \u7684\u8BE6\u7EC6\u4FE1\u606F\uFF1B pm2 monit\uFF1A\u8FDB\u5165\u76D1\u89C6\u9875\u9762\uFF0C\u76D1\u89C6\u6BCF\u4E2A node \u8FDB\u7A0B\u7684 CPU \u548C\u5185\u5B58\u7684\u4F7F\u7528\u60C5\u51B5\u3002</p><h2 id="_5-\u91CD\u8F7D\u3001\u91CD\u542F" tabindex="-1"><a class="header-anchor" href="#_5-\u91CD\u8F7D\u3001\u91CD\u542F" aria-hidden="true">#</a> 5.\u91CD\u8F7D\u3001\u91CD\u542F</h2><p>pm2 restart 11\uFF1A\u91CD\u542F id \u4E3A 11 \u7684\u8FDB\u7A0B\uFF1B pm2 restart all\uFF1A\u91CD\u542F\u6240\u6709\u8FDB\u7A0B\uFF1B pm2 reload 11\uFF1A0 \u79D2\u505C\u673A\u91CD\u8F7D id \u4E3A 11 \u8FDB\u7A0B\uFF08\u7528\u4E8E NETWORKED \u8FDB\u7A0B\uFF09\uFF1B pm2 reload all\uFF1A\u91CD\u8F7D\u6240\u6709\u8FDB\u7A0B</p><p>pm2 stop all \u5173\u95ED\u6240\u6709\u7684\u8FDB\u7A0B</p><p>pm2 save \u4FDD\u5B58\u5F53\u524D\u7684pm\u8FDB\u7A0B</p><h2 id="_6-\u6848\u4F8B-\u4F7F\u7528-pm2-\u81EA\u52A8\u5316\u90E8\u7F72-node-\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_6-\u6848\u4F8B-\u4F7F\u7528-pm2-\u81EA\u52A8\u5316\u90E8\u7F72-node-\u9879\u76EE" aria-hidden="true">#</a> 6.\u6848\u4F8B\uFF1A\u4F7F\u7528 pm2 \u81EA\u52A8\u5316\u90E8\u7F72 node \u9879\u76EE</h2><h3 id="\u6700\u5C0F\u6848\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u6848\u4F8B-1" aria-hidden="true">#</a> \u6700\u5C0F\u6848\u4F8B 1</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.\u5168\u5C40\u5B89\u88C5\uFF1A
npm install pm2 -g

2.\u542F\u52A8js\u811A\u672C\uFF1A
pm2 start start.js
- \u8FD8\u53EF\u4EE5\u6307\u5B9A\u7A0B\u5E8F\u540D\u79F0
pm2 start start.js --name application1
- \u9009\u62E9\u96C6\u7FA4\u542F\u52A8\u6A21\u5F0F
// -i \u8868\u793A number-instances \u5B9E\u4F8B\u6570\u91CF
// max \u8868\u793A PM2\u5C06\u81EA\u52A8\u68C0\u6D4B\u53EF\u7528CPU\u7684\u6570\u91CF \u53EF\u4EE5\u81EA\u5DF1\u6307\u5B9A\u6570\u91CF
pm2 start start.js -i max

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u771F\u5B9E-node-\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u771F\u5B9E-node-\u6848\u4F8B" aria-hidden="true">#</a> \u771F\u5B9E node \u6848\u4F8B</h3><p>\u786E\u4FDD\u670D\u52A1\u5668\u5B89\u88C5 pm2</p><h4 id="_1-\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA-deploy-yaml-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA-deploy-yaml-\u6587\u4EF6" aria-hidden="true">#</a> (1)\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA deploy.yaml \u6587\u4EF6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># deploy.yaml
apps:
  - script: ./start.js       # \u5165\u53E3\u6587\u4EF6
    name: &#39;app&#39;              # \u7A0B\u5E8F\u540D\u79F0
    env:                     # \u73AF\u5883\u53D8\u91CF
      COMMON_VARIABLE: true
    env_production:
      NODE_ENV: production

deploy:                     # \u90E8\u7F72\u811A\u672C
  production:               # \u751F\u4EA7\u73AF\u5883
    user: lentoo            # \u670D\u52A1\u5668\u7684\u7528\u6237\u540D
    host: 192.168.2.166     # \u670D\u52A1\u5668\u7684ip\u5730\u5740
    port: 22                # ssh\u7AEF\u53E3
    ref: origin/master      # \u8981\u62C9\u53D6\u7684git\u5206\u652F
    ssh_options: StrictHostKeyChecking=no # SSH \u516C\u94A5\u68C0\u67E5
    repo: https://github.com/**.git # \u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740
    path: /home              # \u62C9\u53D6\u5230\u670D\u52A1\u5668\u67D0\u4E2A\u76EE\u5F55\u4E0B
    pre-deploy: git fetch --all # \u90E8\u7F72\u524D\u6267\u884C
    post-deploy: npm install &amp;&amp;  pm2 reload deploy.yaml --env production # \u90E8\u7F72\u540E\u6267\u884C
    env:
      NODE_ENV: production


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-\u6848\u4F8B7\u7BA1\u7406\u4E00\u4E2A\u8FF7\u4F60\u7684\u5FAE\u670D\u52A1\u5E73\u53F0" tabindex="-1"><a class="header-anchor" href="#_7-\u6848\u4F8B7\u7BA1\u7406\u4E00\u4E2A\u8FF7\u4F60\u7684\u5FAE\u670D\u52A1\u5E73\u53F0" aria-hidden="true">#</a> 7.\u6848\u4F8B7\u7BA1\u7406\u4E00\u4E2A\u8FF7\u4F60\u7684\u5FAE\u670D\u52A1\u5E73\u53F0</h2>`,27);function p(h,_){const s=l("ExternalLinkIcon");return a(),r("div",null,[t,e("p",null,[m,e("a",u,[o,v(s)])]),b])}var x=d(c,[["render",p],["__file","001PM2\u8FDB\u7A0B\u76F8\u5173\u6C47\u603B\u8BB0\u5F55.html.vue"]]);export{x as default};
