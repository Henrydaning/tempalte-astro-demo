import{_ as a,r as d,o as s,c as r,a as e,b as l,d as n,e as t}from"./app.10c769de.js";const o={},u=n(`<h2 id="windows-\u8FDB\u7A0B\u76F8\u5173-\u6740\u6B7B\u8FDB\u7A0B\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#windows-\u8FDB\u7A0B\u76F8\u5173-\u6740\u6B7B\u8FDB\u7A0B\u547D\u4EE4" aria-hidden="true">#</a> windows \u8FDB\u7A0B\u76F8\u5173\uFF0C\u6740\u6B7B\u8FDB\u7A0B\u547D\u4EE4</h2><h3 id="_1-\u67E5\u770B\u5F53\u524D\u7684\u6240\u6709\u7684\u8FDB\u7A0B\u548C\u7AEF\u53E3\u5360\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u67E5\u770B\u5F53\u524D\u7684\u6240\u6709\u7684\u8FDB\u7A0B\u548C\u7AEF\u53E3\u5360\u7528" aria-hidden="true">#</a> 1.\u67E5\u770B\u5F53\u524D\u7684\u6240\u6709\u7684\u8FDB\u7A0B\u548C\u7AEF\u53E3\u5360\u7528</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u67E5\u770B\u7AEF\u53E3\u5360\u7528 netstat -ano


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u67E5\u770B\u5236\u5B9A\u7AEF\u53E3\u5360\u7528\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_2-\u67E5\u770B\u5236\u5B9A\u7AEF\u53E3\u5360\u7528\u60C5\u51B5" aria-hidden="true">#</a> 2.\u67E5\u770B\u5236\u5B9A\u7AEF\u53E3\u5360\u7528\u60C5\u51B5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>netstat -aon|findstr 8080       \u6570\u5B57\u4E3A\u7AEF\u53E3\u53F7


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u6740\u6389\u8FDB\u7A0B-taskkill" tabindex="-1"><a class="header-anchor" href="#_3-\u6740\u6389\u8FDB\u7A0B-taskkill" aria-hidden="true">#</a> 3.\u6740\u6389\u8FDB\u7A0B\uFF1Ataskkill</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>taskkill /f /PID 22524    \u6740PID




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pm2-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#pm2-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> PM2 \u662F\u4EC0\u4E48</h2>`,8),c={href:"https://app.yinxiang.com/shard/s37/nl/24388549/5d7140a1-b1ca-4cc5-9e81-c32a6d7ed19e",target:"_blank",rel:"noopener noreferrer"},v=t("\u76F8\u5173PM2\u7684\u4F7F\u7528\u8BB0\u5F55"),m=n(`<p>PM2 \u662F node \u8FDB\u7A0B\u7BA1\u7406\u5DE5\u5177\uFF0C\u53EF\u4EE5\u5229\u7528\u5B83\u6765\u7B80\u5316\u5F88\u591A node \u5E94\u7528\u7BA1\u7406\u7684\u7E41\u7410\u4EFB\u52A1\uFF0C\u8FD9\u91CC\u63A8\u8350\u4E00\u4E2A node \u7248\u672C\u63A7\u5236\u5DE5\u5177--nvm\u3002</p><h2 id="_1-\u4E3A\u4EC0\u4E48\u4F7F\u7528-pm2" tabindex="-1"><a class="header-anchor" href="#_1-\u4E3A\u4EC0\u4E48\u4F7F\u7528-pm2" aria-hidden="true">#</a> 1.\u4E3A\u4EC0\u4E48\u4F7F\u7528 pm2</h2><p>\u7EBF\u4E0A\u9879\u76EE\uFF0C\u5982\u679C\u76F4\u63A5\u901A\u8FC7 node app \u6765\u542F\u52A8\uFF0C\u56E0\u4E3A node \u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u6240\u4EE5\u5982\u679C\u62A5\u9519\u4E86\u53EF\u80FD\u4F1A\u4F7F\u9879\u76EE\u76F4\u63A5\u505C\u6B62\uFF0C\u4ECE\u800C\u5BFC\u81F4\u6574\u4E2A\u670D\u52A1\u5D29\u6E83\u3002</p><h3 id="\u4E00\u822C\u76D1\u63A7-node-\u6709\u51E0\u79CD\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u4E00\u822C\u76D1\u63A7-node-\u6709\u51E0\u79CD\u65B9\u6848" aria-hidden="true">#</a> \u4E00\u822C\u76D1\u63A7 node \u6709\u51E0\u79CD\u65B9\u6848\uFF1A</h3><p>supervisor: \u4E00\u822C\u7528\u4F5C\u5F00\u53D1\u73AF\u5883\u7684\u4F7F\u7528\uFF1B forever: \u7BA1\u7406\u591A\u4E2A\u7AD9\u70B9\uFF0C\u4E00\u822C\u6BCF\u4E2A\u7AD9\u70B9\u7684\u8BBF\u95EE\u91CF\u4E0D\u5927\u7684\u60C5\u51B5\uFF0C\u4E0D\u9700\u8981\u76D1\u63A7\uFF1B PM2: \u7F51\u7AD9\u7684\u8BBF\u95EE\u91CF\u6BD4\u8F83\u5927\uFF0C\u9700\u8981\u5B8C\u6574\u7684\u76D1\u63A7\u9875\u9762\u3002</p><h2 id="_2-pm2-\u7684\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-pm2-\u7684\u4F18\u70B9" aria-hidden="true">#</a> 2.pm2 \u7684\u4F18\u70B9</h2><p>pm2 \u4F18\u70B9</p><p>\u540E\u53F0\u8FD0\u884C(\u5173\u6389 cmd \u7A97\u53E3\u4F9D\u7136\u8FD0\u884C) 0 \u79D2\u505C\u673A\u91CD\u8F7D\uFF0C\u7EF4\u62A4\u5347\u7EA7\u65F6\u4E0D\u9700\u8981\u505C\u673A Linux (stable) &amp; MacOSx (stable) &amp; Windows (stable).\u591A\u5E73\u53F0\u652F\u6301 \u8FDB\u7A0B\u5B88\u62A4 (\u505C\u6B62\u4E0D\u7A33\u5B9A\u7684\u8FDB\u7A0B\uFF0C\u907F\u514D\u65E0\u9650\u5FAA\u73AF) \u5185\u5EFA\u8D1F\u8F7D\u5747\u8861 \u5B9E\u65F6\u63A7\u5236\u53F0\u68C0\u6D4B \u63D0\u4F9B HTTP API \u7B49 \u8FDC\u7A0B\u63A7\u5236\u548C\u5B9E\u65F6\u7684\u63A5\u53E3 API ( nodejs \u6A21\u5757,\u5141\u8BB8\u548C PM2 \u8FDB\u7A0B\u7BA1\u7406\u5668\u4EA4\u4E92 ) \u4E0D\u4EC5\u4EC5\u53EF\u4EE5\u542F\u52A8 node \u7A0B\u5E8F\uFF0C\u5BF9\u4E8E\u4E00\u822C\u7684\u811A\u672C\u7A0B\u5E8F\u540C\u6837\u53EF\u4EE5</p><h2 id="_3-pm2-\u914D\u7F6E\u6587\u4EF6\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_3-pm2-\u914D\u7F6E\u6587\u4EF6\u542F\u52A8" aria-hidden="true">#</a> 3.pm2 \u914D\u7F6E\u6587\u4EF6\u542F\u52A8</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728\u4E0A\u9762\u7684\u542F\u52A8\u547D\u4EE4\u4F8B\u5B50\u4E2D\uFF0C\u6709\u4E00\u6761pm2 start app.json\u547D\u4EE4\uFF0C\u53EF\u4EE5\u5728app.json\u6587\u4EF6\u4E2D\u6DFB\u52A0\u914D\u7F6E
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u67E5\u770B\u4E0E\u76D1\u89C6\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#_4-\u67E5\u770B\u4E0E\u76D1\u89C6\u8FDB\u7A0B" aria-hidden="true">#</a> 4.\u67E5\u770B\u4E0E\u76D1\u89C6\u8FDB\u7A0B</h2><p>pm2 list\uFF1A\u663E\u793A\u6240\u6709\u8FDB\u7A0B\u4FE1\u606F\uFF1B pm2 show 11\uFF0Cpm2 info 11\uFF1A\u67E5\u770B\u8FDB\u7A0B id \u4E3A 11 \u7684\u8BE6\u7EC6\u4FE1\u606F\uFF1B pm2 monit\uFF1A\u8FDB\u5165\u76D1\u89C6\u9875\u9762\uFF0C\u76D1\u89C6\u6BCF\u4E2A node \u8FDB\u7A0B\u7684 CPU \u548C\u5185\u5B58\u7684\u4F7F\u7528\u60C5\u51B5\u3002</p><h2 id="_5-\u91CD\u8F7D\u3001\u91CD\u542F" tabindex="-1"><a class="header-anchor" href="#_5-\u91CD\u8F7D\u3001\u91CD\u542F" aria-hidden="true">#</a> 5.\u91CD\u8F7D\u3001\u91CD\u542F</h2><p>pm2 restart 11\uFF1A\u91CD\u542F id \u4E3A 11 \u7684\u8FDB\u7A0B\uFF1B pm2 restart all\uFF1A\u91CD\u542F\u6240\u6709\u8FDB\u7A0B\uFF1B pm2 reload 11\uFF1A0 \u79D2\u505C\u673A\u91CD\u8F7D id \u4E3A 11 \u8FDB\u7A0B\uFF08\u7528\u4E8E NETWORKED \u8FDB\u7A0B\uFF09\uFF1B pm2 reload all\uFF1A\u91CD\u8F7D\u6240\u6709\u8FDB\u7A0B</p>`,14);function b(h,p){const i=d("ExternalLinkIcon");return s(),r("div",null,[u,e("p",null,[e("a",c,[v,l(i)])]),m])}var q=a(o,[["render",b],["__file","001PM2\u8FDB\u7A0B\u76F8\u5173\u6C47\u603B\u8BB0\u5F55.html.vue"]]);export{q as default};
