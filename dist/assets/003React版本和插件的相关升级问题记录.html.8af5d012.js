import{_ as v,r as l,o as r,c,a as e,b as n,w as a,d as t,e as i}from"./app.40979aa8.js";const u={},o={class:"table-of-contents"},m=i("1.react-router-dom \u4ECE v5 \u5347\u7EA7\u540E\u4F7F\u7528\u53D8\u5316"),b=i("2.react-router-dom \u7684 v5 \u4F7F\u7528\u8BB0\u5F55"),_=t('<h2 id="_1-react-router-dom-\u4ECE-v5-\u5347\u7EA7\u540E\u4F7F\u7528\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#_1-react-router-dom-\u4ECE-v5-\u5347\u7EA7\u540E\u4F7F\u7528\u53D8\u5316" aria-hidden="true">#</a> 1.react-router-dom \u4ECE v5 \u5347\u7EA7\u540E\u4F7F\u7528\u53D8\u5316</h2><p>React Router \u4E2D\u7684\u7EC4\u4EF6\u4E3B\u8981\u5206\u4E3A\u4E09\u7C7B\uFF1A</p><ol><li>\u8DEF\u7531\u5668\uFF0C\u4F8B\u5982 BrowserRouter \u548C HashRouter</li><li>\u8DEF\u7531\u5339\u914D\u5668\uFF1A \u4F8B\u5982 Route \u548C Switch</li><li>\u5BFC\u822A\uFF1A\u4F8B\u5982 Link, NavLink, and Redirect</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[000---React Router v5 \u548C v6 \u7684\u6BD4\u8F83\\_\u5C0F\u516C\u9E21\u5361\u54C7\u4F0A\u5440~\u7684\u535A\u5BA2-CSDN \u535A\u5BA2 (yinxiang.com)](https://app.yinxiang.com/shard/s37/nl/24388549/daf35e74-1bcf-4340-aa77-1b3c6a8b2b7b)\n\n(1)v6 \u4E2D `Switch` \u540D\u79F0\u53D8\u4E3A `Routes`\n\n(2) v6 `&lt;Route&gt;` \u4E0D\u518D\u652F\u6301\u5B50\u7EC4\u4EF6\uFF0C\u6539\u4E3A\u4F7F\u7528 `element` \u5C5E\u6027\n\n(3) v6 \u4E2D\uFF0C `exact` \u5C5E\u6027\u4E0D\u518D\u9700\u8981\n\n(4)v6 \u4FDD\u7559 `Link`\uFF0C `NavLink`\uFF0C \u4F46\u662F `NavLink` \u7684 `activeClassName` \u5C5E\u6027\u88AB\u79FB\u9664\u3002\n\n(5)v6 \u79FB\u9664 `Redirect`\u7EC4\u4EF6\uFF0C\u6539\u4E3A\u4F7F\u7528 `Navigate`:\n\n\n&lt;Route path=&quot;/&quot; element ={&lt;Navigate replace to=&quot;/welcome&quot; /&gt;} /&gt;\n\n\n\n(6)v6 \u7528 `useNavigate` \u5B9E\u73B0\u7F16\u7A0B\u5F0F\u5BFC\u822A\uFF0C`useHistory` \u88AB\u79FB\u9664\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-react-router-dom-\u7684-v5-\u4F7F\u7528\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#_2-react-router-dom-\u7684-v5-\u4F7F\u7528\u8BB0\u5F55" aria-hidden="true">#</a> 2.react-router-dom \u7684 v5 \u4F7F\u7528\u8BB0\u5F55</h2>',5),h={href:"https://app.yinxiang.com/shard/s37/nl/24388549/255a5de7-608e-4591-9203-c6edfa2f900e",target:"_blank",rel:"noopener noreferrer"},g=i("009---React Router \u4E2D\u6587\u6587\u6863\uFF08v5 \uFF09 - \u6398\u91D1 (yinxiang.com)"),p=t(`<p>(1)Link \u548C NavLink \u4F7F\u7528\u5BF9\u6BD4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// to\u4E3Astring
&lt;Link to=&quot;/about&quot;&gt;\u5173\u4E8E&lt;/Link&gt;

// to\u4E3Aobj
&lt;Link to={{
  pathname: &#39;/courses&#39;,
  search: &#39;?sort=name&#39;,
  hash: &#39;#the-hash&#39;,
  state: { fromDashboard: true }
}}/&gt;

// replace
&lt;Link to=&quot;/courses&quot; replace /&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) NavLink \u662F Link \u7684\u4E00\u4E2A\u7279\u5B9A\u7248\u672C\uFF0C\u4F1A\u5728\u5339\u914D\u4E0A\u5F53\u524D\u7684 url \u7684\u65F6\u5019\u7ED9\u5DF2\u7ECF\u6E32\u67D3\u7684\u5143\u7D20\u6DFB\u52A0\u53C2\u6570\uFF0C\u7EC4\u4EF6\u7684\u5C5E\u6027\u6709</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
activeClassName(string)\uFF1A\u8BBE\u7F6E\u9009\u4E2D\u6837\u5F0F\uFF0C\u9ED8\u8BA4\u503C\u4E3A active
activeStyle(object)\uFF1A\u5F53\u5143\u7D20\u88AB\u9009\u4E2D\u65F6\uFF0C\u4E3A\u6B64\u5143\u7D20\u6DFB\u52A0\u6837\u5F0F
exact(bool)\uFF1A\u4E3A true \u65F6\uFF0C\u53EA\u6709\u5F53\u5BFC\u81F4\u548C\u5B8C\u5168\u5339\u914D class \u548C style \u624D\u4F1A\u5E94\u7528
strict(bool)\uFF1A\u4E3A true \u65F6\uFF0C\u5728\u786E\u5B9A\u4E3A\u4F4D\u7F6E\u662F\u5426\u4E0E\u5F53\u524D URL \u5339\u914D\u65F6\uFF0C\u5C06\u8003\u8651\u4F4D\u7F6E pathname \u540E\u7684\u659C\u7EBF
isActive(func)\u5224\u65AD\u94FE\u63A5\u662F\u5426\u6FC0\u6D3B\u7684\u989D\u5916\u903B\u8F91\u7684\u529F\u80FD



// activeClassName\u9009\u4E2D\u65F6\u6837\u5F0F\u4E3Aselected
&lt;NavLink
  to=&quot;/faq&quot;
  activeClassName=&quot;selected&quot;
&gt;FAQs&lt;/NavLink&gt;

// \u9009\u4E2D\u65F6\u6837\u5F0F\u4E3AactiveStyle\u7684\u6837\u5F0F\u8BBE\u7F6E
&lt;NavLink
  to=&quot;/faq&quot;
  activeStyle={{
    fontWeight: &#39;bold&#39;,
    color: &#39;red&#39;
   }}
&gt;FAQs&lt;/NavLink&gt;

// \u5F53event id\u4E3A\u5947\u6570\u7684\u65F6\u5019\uFF0C\u6FC0\u6D3B\u94FE\u63A5
const oddEvent = (match, location) =&gt; {
  if (!match) {
    return false
  }
  const eventID = parseInt(match.params.eventID)
  return !isNaN(eventID) &amp;&amp; eventID % 2 === 1
}

&lt;NavLink
  to=&quot;/events/123&quot;
  isActive={oddEvent}
&gt;Event 123&lt;/NavLink&gt;



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3) Switch \u662F\u552F\u4E00\u7684\u56E0\u4E3A\u5B83\u4EC5\u4EC5\u53EA\u4F1A\u6E32\u67D3\u4E00\u4E2A\u8DEF\u5F84\u3002\u76F8\u6BD4\u4E4B\u4E0B\uFF08\u4E0D\u4F7F\u7528 Switch \u5305\u88F9\u7684\u60C5\u51B5\u4E0B\uFF09\uFF0C\u6BCF\u4E00\u4E2A\u88AB location \u5339\u914D\u5230\u7684 Route \u5C06\u90FD\u4F1A\u88AB\u6E32\u67D3\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>React Router\u4E2D\u7684\u7EC4\u4EF6\u4E3B\u8981\u5206\u4E3A\u4E09\u7C7B\uFF1A

1. \u8DEF\u7531\u5668\uFF0C\u4F8B\u5982 BrowserRouter \u548C HashRouter
2. \u8DEF\u7531\u5339\u914D\u5668\uFF1A \u4F8B\u5982Route\u548CSwitch
3. \u5BFC\u822A\uFF1A\u4F8B\u5982Link, NavLink, and Redirect

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function x(k,L){const s=l("RouterLink"),d=l("ExternalLinkIcon");return r(),c("div",null,[e("nav",o,[e("ul",null,[e("li",null,[n(s,{to:"#_1-react-router-dom-\u4ECE-v5-\u5347\u7EA7\u540E\u4F7F\u7528\u53D8\u5316"},{default:a(()=>[m]),_:1})]),e("li",null,[n(s,{to:"#_2-react-router-dom-\u7684-v5-\u4F7F\u7528\u8BB0\u5F55"},{default:a(()=>[b]),_:1})])])]),_,e("p",null,[e("a",h,[g,n(d)])]),p])}var R=v(u,[["render",x],["__file","003React\u7248\u672C\u548C\u63D2\u4EF6\u7684\u76F8\u5173\u5347\u7EA7\u95EE\u9898\u8BB0\u5F55.html.vue"]]);export{R as default};
