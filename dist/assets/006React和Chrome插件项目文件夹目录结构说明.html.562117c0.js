import{_ as d,r as t,o,c as v,a as n,b as i,w as u,d as a,e}from"./app.e8f259a7.js";const c={},r={class:"table-of-contents"},m=e("React\u548CChrome\u63D2\u4EF6\u9879\u76EE\u6587\u4EF6\u5939\u76EE\u5F55\u7ED3\u6784"),q=e("manifest.json \u6587\u4EF6"),b=e("plasmo\u7248\u672C"),p=e("vue\u6846\u67B6\u5F00\u53D1chrome\u63D2\u4EF6\u7684\u7ED3\u6784"),_=a(`<h2 id="react\u548Cchrome\u63D2\u4EF6\u9879\u76EE\u6587\u4EF6\u5939\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#react\u548Cchrome\u63D2\u4EF6\u9879\u76EE\u6587\u4EF6\u5939\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> React\u548CChrome\u63D2\u4EF6\u9879\u76EE\u6587\u4EF6\u5939\u76EE\u5F55\u7ED3\u6784</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
- \`manifest.json\` \u662F\u6574\u4E2A\u63D2\u4EF6\u7684\u529F\u80FD\u548C\u6587\u4EF6\u914D\u7F6E\u6E05\u5355\uFF0C\u975E\u5E38\u91CD\u8981
- \`images\` \u5B58\u653E\u7684\u4E3A\u63D2\u4EF6\u7684\u56FE\u6807\u6587\u4EF6
- \`_locales\` \u5B58\u653E\u7684\u4E3A\u63D2\u4EF6\u7684\u56FD\u9645\u5316\u8BED\u8A00\u811A\u672C
- \`scripts\` \u5B58\u653E\u7684\u4E3A\`js\` \u6587\u4EF6
- \`styles\`\u5B58\u653E\u7684\u4E3A\u6837\u5F0F\u6587\u4EF6
- \`html\`\u5B58\u653E\u7684\`html\`\u6587\u4EF6

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="manifest-json-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#manifest-json-\u6587\u4EF6" aria-hidden="true">#</a> <strong><code>manifest.json</code> \u6587\u4EF6</strong></h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
 // \u6E05\u5355\u6587\u4EF6\u7684\u7248\u672C\uFF0C\u8FD9\u4E2A\u5FC5\u987B\u5199\uFF0C\u800C\u4E14\u5FC5\u987B\u662F2
 &quot;manifest_version&quot;: 2,
 // \u63D2\u4EF6\u7684\u540D\u79F0
 &quot;name&quot;: &quot;hello-world-plugin&quot;,
 // \u63D2\u4EF6\u7684\u7248\u672C
 &quot;version&quot;: &quot;1.0.0&quot;,
 // \u63D2\u4EF6\u63CF\u8FF0
 &quot;description&quot;: &quot;\u7B80\u5355\u7684Chrome\u6269\u5C55demo&quot;,
 // \u56FE\u6807\uFF0C\u4E00\u822C\u5077\u61D2\u5168\u90E8\u7528\u4E00\u4E2A\u5C3A\u5BF8\u7684\u4E5F\u6CA1\u95EE\u9898
 &quot;icons&quot;:
 {
  &quot;16&quot;: &quot;img/icon.png&quot;,
  &quot;48&quot;: &quot;img/icon.png&quot;,
  &quot;128&quot;: &quot;img/icon.png&quot;
 },
 // \u4F1A\u4E00\u76F4\u5E38\u9A7B\u7684\u540E\u53F0JS\u6216\u540E\u53F0\u9875\u9762
 &quot;background&quot;:
 {
  // 2\u79CD\u6307\u5B9A\u65B9\u5F0F\uFF0C\u5982\u679C\u6307\u5B9AJS\uFF0C\u90A3\u4E48\u4F1A\u81EA\u52A8\u751F\u6210\u4E00\u4E2A\u80CC\u666F\u9875
  &quot;page&quot;: &quot;background.html&quot;
  //&quot;scripts&quot;: [&quot;js/background.js&quot;]
 },
 // \u6D4F\u89C8\u5668\u53F3\u4E0A\u89D2\u56FE\u6807\u8BBE\u7F6E\uFF0Cbrowser_action\u3001page_action\u3001app\u5FC5\u987B\u4E09\u9009\u4E00
 &quot;browser_action&quot;: 
 {
  &quot;default_icon&quot;: &quot;img/icon.png&quot;,
  // \u56FE\u6807\u60AC\u505C\u65F6\u7684\u6807\u9898\uFF0C\u53EF\u9009
  &quot;default_title&quot;: &quot;hello-world-plugin&quot;,
  &quot;default_popup&quot;: &quot;popup.html&quot;
 },
 // \u5F53\u67D0\u4E9B\u7279\u5B9A\u9875\u9762\u6253\u5F00\u624D\u663E\u793A\u7684\u56FE\u6807
 /*&quot;page_action&quot;:
 {
  &quot;default_icon&quot;: &quot;img/icon.png&quot;,
  &quot;default_title&quot;: &quot;\u6211\u662FpageAction&quot;,
  &quot;default_popup&quot;: &quot;popup.html&quot;
 },*/
 // \u9700\u8981\u76F4\u63A5\u6CE8\u5165\u9875\u9762\u7684JS
 &quot;content_scripts&quot;: 
 [
  {
   //&quot;matches&quot;: [&quot;http://*/*&quot;, &quot;https://*/*&quot;],
   // &quot;&lt;all_urls&gt;&quot; \u8868\u793A\u5339\u914D\u6240\u6709\u5730\u5740
   &quot;matches&quot;: [&quot;&lt;all_urls&gt;&quot;],
   // \u591A\u4E2AJS\u6309\u987A\u5E8F\u6CE8\u5165
   &quot;js&quot;: [&quot;js/jquery-1.8.3.js&quot;, &quot;js/content-script.js&quot;],
   // JS\u7684\u6CE8\u5165\u53EF\u4EE5\u968F\u4FBF\u4E00\u70B9\uFF0C\u4F46\u662FCSS\u7684\u6CE8\u610F\u5C31\u8981\u5343\u4E07\u5C0F\u5FC3\u4E86\uFF0C\u56E0\u4E3A\u4E00\u4E0D\u5C0F\u5FC3\u5C31\u53EF\u80FD\u5F71\u54CD\u5168\u5C40\u6837\u5F0F
   &quot;css&quot;: [&quot;css/custom.css&quot;],
   // \u4EE3\u7801\u6CE8\u5165\u7684\u65F6\u95F4\uFF0C\u53EF\u9009\u503C\uFF1A &quot;document_start&quot;, &quot;document_end&quot;, or &quot;document_idle&quot;\uFF0C\u6700\u540E\u4E00\u4E2A\u8868\u793A\u9875\u9762\u7A7A\u95F2\u65F6\uFF0C\u9ED8\u8BA4document_idle
   &quot;run_at&quot;: &quot;document_start&quot;
  },
  // \u8FD9\u91CC\u4EC5\u4EC5\u662F\u4E3A\u4E86\u6F14\u793Acontent-script\u53EF\u4EE5\u914D\u7F6E\u591A\u4E2A\u89C4\u5219
  {
   &quot;matches&quot;: [&quot;*://*/*.png&quot;, &quot;*://*/*.jpg&quot;, &quot;*://*/*.gif&quot;, &quot;*://*/*.bmp&quot;],
   &quot;js&quot;: [&quot;js/show-image-content-size.js&quot;]
  }
 ],
 // \u6743\u9650\u7533\u8BF7
 &quot;permissions&quot;:
 [
  &quot;contextMenus&quot;, // \u53F3\u952E\u83DC\u5355
  &quot;tabs&quot;, // \u6807\u7B7E
  &quot;notifications&quot;, // \u901A\u77E5
  &quot;webRequest&quot;, // web\u8BF7\u6C42
  &quot;webRequestBlocking&quot;,
  &quot;storage&quot;, // \u63D2\u4EF6\u672C\u5730\u5B58\u50A8
  &quot;http://*/*&quot;, // \u53EF\u4EE5\u901A\u8FC7executeScript\u6216\u8005insertCSS\u8BBF\u95EE\u7684\u7F51\u7AD9
  &quot;https://*/*&quot; // \u53EF\u4EE5\u901A\u8FC7executeScript\u6216\u8005insertCSS\u8BBF\u95EE\u7684\u7F51\u7AD9
 ],
 // \u666E\u901A\u9875\u9762\u80FD\u591F\u76F4\u63A5\u8BBF\u95EE\u7684\u63D2\u4EF6\u8D44\u6E90\u5217\u8868\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E\u662F\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u7684
 &quot;web_accessible_resources&quot;: [&quot;js/inject.js&quot;],
 // \u63D2\u4EF6\u4E3B\u9875\uFF0C\u8FD9\u4E2A\u5F88\u91CD\u8981\uFF0C\u4E0D\u8981\u6D6A\u8D39\u4E86\u8FD9\u4E2A\u514D\u8D39\u5E7F\u544A\u4F4D
 &quot;homepage_url&quot;: &quot;https://www.baidu.com&quot;,
 // \u8986\u76D6\u6D4F\u89C8\u5668\u9ED8\u8BA4\u9875\u9762
 &quot;chrome_url_overrides&quot;:
 {
  // \u8986\u76D6\u6D4F\u89C8\u5668\u9ED8\u8BA4\u7684\u65B0\u6807\u7B7E\u9875
  &quot;newtab&quot;: &quot;newtab.html&quot;
 },
 // Chrome40\u4EE5\u524D\u7684\u63D2\u4EF6\u914D\u7F6E\u9875\u5199\u6CD5
 &quot;options_page&quot;: &quot;options.html&quot;,
 // Chrome40\u4EE5\u540E\u7684\u63D2\u4EF6\u914D\u7F6E\u9875\u5199\u6CD5\uFF0C\u5982\u679C2\u4E2A\u90FD\u5199\uFF0C\u65B0\u7248Chrome\u53EA\u8BA4\u540E\u9762\u8FD9\u4E00\u4E2A
 &quot;options_ui&quot;:
 {
  &quot;page&quot;: &quot;options.html&quot;,
  // \u6DFB\u52A0\u4E00\u4E9B\u9ED8\u8BA4\u7684\u6837\u5F0F\uFF0C\u63A8\u8350\u4F7F\u7528
  &quot;chrome_style&quot;: true
 },
 // \u5411\u5730\u5740\u680F\u6CE8\u518C\u4E00\u4E2A\u5173\u952E\u5B57\u4EE5\u63D0\u4F9B\u641C\u7D22\u5EFA\u8BAE\uFF0C\u53EA\u80FD\u8BBE\u7F6E\u4E00\u4E2A\u5173\u952E\u5B57
 &quot;omnibox&quot;: { &quot;keyword&quot; : &quot;go&quot; },
 // \u9ED8\u8BA4\u8BED\u8A00
 &quot;default_locale&quot;: &quot;zh_CN&quot;,
 // devtools\u9875\u9762\u5165\u53E3\uFF0C\u6CE8\u610F\u53EA\u80FD\u6307\u5411\u4E00\u4E2AHTML\u6587\u4EF6\uFF0C\u4E0D\u80FD\u662FJS\u6587\u4EF6
 &quot;devtools_page&quot;: &quot;devtools.html&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6Emanifest.jsonwenjian neirogn</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;Chrome\u63D2\u4EF6Demo&quot;,
  &quot;version&quot;: &quot;1.0&quot;,
  &quot;description&quot;: &quot;React\u5F00\u53D1chrome\u63D2\u4EF6Demo\u3002&quot;,
  // \u56FE\u6807\uFF0C\u56FE\u7701\u4E8B\u7684\u8BDD\uFF0C\u6240\u6709\u5C3A\u5BF8\u90FD\u7528\u4E00\u4E2A\u56FE\u4E5F\u884C
  &quot;icons&quot;: {
    &quot;16&quot;: &quot;images/icon.png&quot;,
    &quot;48&quot;: &quot;images/icon.png&quot;,
    &quot;128&quot;: &quot;images/icon.png&quot;
  },
  // manifest.json\u7684\u6587\u4EF6\u7248\u672C\uFF0C\u5FC5\u987B\u662F2
  &quot;manifest_version&quot;: 2,
  // popup\u9875\u9762\u914D\u7F6E
  &quot;page_action&quot;: {
    // \u6D4F\u89C8\u5668\u63D2\u4EF6\u6309\u94AE\u7684\u56FE\u6807
    &quot;default_icon&quot;: &quot;images/icon.png&quot;,
    // \u6D4F\u89C8\u5668\u63D2\u4EF6\u6309\u94AEhover\u663E\u793A\u7684\u6587\u5B57
    &quot;default_title&quot;: &quot;React CRX&quot;,
    // popup\u9875\u9762\u7684\u8DEF\u5F84\uFF08\u6839\u76EE\u5F55\u4E3A\u6700\u7EC8build\u751F\u6210\u7684\u63D2\u4EF6\u5305\u76EE\u5F55\uFF09
    &quot;default_popup&quot;: &quot;index.html&quot;
  },
  // background script\u914D\u7F6E
  &quot;background&quot;: {
    // background script\u8DEF\u5F84\uFF08\u6839\u76EE\u5F55\u4E3A\u6700\u7EC8build\u751F\u6210\u7684\u63D2\u4EF6\u5305\u76EE\u5F55\uFF09
    &quot;scripts&quot;: [
      &quot;static/js/background.js&quot;
    ],
    // \u5B98\u65B9\u5F3A\u70C8\u5EFA\u8BAE\u8FD9\u91CC\u4E3Afalse\uFF0C\u4E56\u4E56\u5199\u5C31\u884C\u4E86
    &quot;persistent&quot;: false
  },
  // content script\u914D\u7F6E
  &quot;content_scripts&quot;: [
    {
      // \u5E94\u7528\u4E8E\u54EA\u4E9B\u9875\u9762\u5730\u5740\uFF08\u53EF\u4EE5\u4F7F\u7528\u6B63\u5219\uFF0C&lt;all_urls&gt;\u8868\u793A\u5339\u914D\u6240\u6709\u5730\u5740\uFF09
      &quot;matches&quot;: [
        &quot;&lt;all_urls&gt;&quot;
      ],
      // \u6CE8\u5165\u7684css\uFF0C\u6CE8\u610F\u4E0D\u8981\u6C61\u67D3\u6837\u5F0F
      &quot;css&quot;: [
        &quot;static/css/content.css&quot;
      ],
      // \u6CE8\u5165\u7684js
      &quot;js&quot;: [
        &quot;static/js/content.js&quot;
      ],
      // \u4EE3\u7801\u6CE8\u5165\u7684\u65F6\u95F4\uFF0C\u53EF\u9009document_start\u3001document_end\u3001document_idle\uFF08\u9ED8\u8BA4\uFF09
      &quot;run_at&quot;: &quot;document_end&quot;
    }
  ],
  // \u6743\u9650\u7533\u8BF7\uFF08\u9700\u8981background\u53D1\u8D77\u8DE8\u57DF\u8BF7\u6C42\u7684url\u4E5F\u653E\u5728\u8FD9\u91CC\uFF09
  &quot;permissions&quot;: [
    // \u6807\u7B7E
    &quot;tabs&quot;,
    // \u6839\u636E\u5B9A\u5236\u7684\u7F51\u9875\u89C4\u5219\uFF0C\u91C7\u53D6\u76F8\u5E94\u7684\u63AA\u65BD\uFF08\u4F8B\u5982\u53EA\u5728baidu.com\u542F\u52A8\u7EC4\u4EF6\uFF09
    &quot;declarativeContent&quot;,
    // \u63D2\u4EF6\u672C\u5730\u5B58\u50A8
    &quot;storage&quot;,
    // \u901A\u77E5
    &quot;notifications&quot;
  ],
  // \u5982\u679C\u5411\u76EE\u6807\u9875\u9762\u63D2\u5165js\uFF0C\u9700\u8981\u5728\u8FD9\u91CC\u58F0\u660E\u4E0B\u624D\u80FD\u83B7\u5F97\u6267\u884C\u7684\u6743\u9650
  &quot;web_accessible_resources&quot;: [&quot;insert.js&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="plasmo\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#plasmo\u7248\u672C" aria-hidden="true">#</a> plasmo\u7248\u672C</h2><p>Plasmo v0.42.0</p><p>\u6B64\u65F6\u5185\u5BB9\u8F93\u51FA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5185\u7F6E\u4E86\u5404\u79CD
npm create plasmo -- --with-env

\u6216\u662F\u5176\u4ED6\u7684with-vue


\u7B2C\u4E8C\u6B65

plasmo0.42.0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue\u6846\u67B6\u5F00\u53D1chrome\u63D2\u4EF6\u7684\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#vue\u6846\u67B6\u5F00\u53D1chrome\u63D2\u4EF6\u7684\u7ED3\u6784" aria-hidden="true">#</a> vue\u6846\u67B6\u5F00\u53D1chrome\u63D2\u4EF6\u7684\u7ED3\u6784</h2>`,11),h={href:"https://gitee.com/nyhxiaoning/chrome-tools-vue-create-plugins-cli.git",target:"_blank",rel:"noopener noreferrer"},g=e("vueChrome\u4EE3\u7801\u8BB0\u5F55");function f(j,x){const s=t("RouterLink"),l=t("ExternalLinkIcon");return o(),v("div",null,[n("nav",r,[n("ul",null,[n("li",null,[i(s,{to:"#react\u548Cchrome\u63D2\u4EF6\u9879\u76EE\u6587\u4EF6\u5939\u76EE\u5F55\u7ED3\u6784"},{default:u(()=>[m]),_:1})]),n("li",null,[i(s,{to:"#manifest-json-\u6587\u4EF6"},{default:u(()=>[q]),_:1})]),n("li",null,[i(s,{to:"#plasmo\u7248\u672C"},{default:u(()=>[b]),_:1})]),n("li",null,[i(s,{to:"#vue\u6846\u67B6\u5F00\u53D1chrome\u63D2\u4EF6\u7684\u7ED3\u6784"},{default:u(()=>[p]),_:1})])])]),_,n("p",null,[n("a",h,[g,i(l)])])])}var C=d(c,[["render",f],["__file","006React\u548CChrome\u63D2\u4EF6\u9879\u76EE\u6587\u4EF6\u5939\u76EE\u5F55\u7ED3\u6784\u8BF4\u660E.html.vue"]]);export{C as default};
