import{_ as t}from"./home.d4d9b4a0.js";import{_ as v,r as a,o as u,c as o,a as e,b as i,w as d,e as n,d as r}from"./app.239b462e.js";const c={},m=e("p",null,[e("img",{src:t,alt:"\u6210\u957F"})],-1),b={class:"table-of-contents"},h=n("\u56DE\u5230\u535A\u5BA2\u4E3B\u9875"),p=n("\u8BF4\u660E"),_=n("vue-request\u548Caxios\u533A\u522B"),g=n("1.\u7EDF\u4E00\u5904\u7406\u5F53\u524D\u7684http\u548C\u62A5\u9519\u4FE1\u606F\u7684\u5C01\u88C5\u6A21\u5757"),x=n("2.\u524D\u7AEF\u5BF9\u4E8E\u6570\u5B57\u7684\u5904\u7406\u5E93"),q=n("\u5904\u7406\u6570\u5B57\u7684\u5DE5\u5177\u5E93\uFF08\u6CE8\u610F\uFF1A\u4F46\u662F\u4E0D\u89E3\u51B3\u7CBE\u5EA6\u95EE\u9898\uFF09"),f=n("\u5904\u7406\u524D\u7AEF\u7684\u5927\u6570\u5B57\u7684\u7CBE\u5EA6\u4E22\u5931"),j=n("002\u7B2C\u4E09\u65B9\u7684\u8BF7\u6C42\u5E93\u5904\u7406\u6570\u5B57"),w=n("\u89E3\u51B3\u7CBE\u5EA6\u7684\u8BA1\u7B97\u4FDD\u7559\u5C0F\u6570\u7684\u571F\u529E\u6CD5:\u53D8\u6210\u6574\u6570"),E=n("003\u89E3\u51B3\u6846\u67B6\u4E2D\u62A5\u9519\u7684\u95EE\u9898"),y=n("004\u5904\u7406consoleImporter\u5FEB\u901F\u5B89\u88C5console\u63A7\u5236\u53F0\u7684npm\u5305"),k=n("005vscode\u81EA\u66F4\u65B0\u7EDD\u5BF9\u8DEF\u5F84"),R=n("006\u5F3A\u884C\u5F15\u5165lib\u5E93\u7684\u6E90\u7801\u65B9\u6CD5"),I=n("es6\u548Ccjs\u6A21\u5757\u5207\u6362"),N=n("vite2\u7248\u672C\u4E2D\u652F\u6301require\u5F15\u5165\u5E93\u6587\u4EF6\u7684\u65B9\u6CD5"),S=e("h2",{id:"\u56DE\u5230\u535A\u5BA2\u4E3B\u9875",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u56DE\u5230\u535A\u5BA2\u4E3B\u9875","aria-hidden":"true"},"#"),n(" \u56DE\u5230\u535A\u5BA2\u4E3B\u9875")],-1),V=n("\u535A\u5BA2\u9996\u9875"),B=e("h3",{id:"\u8BF4\u660E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8BF4\u660E","aria-hidden":"true"},"#"),n(" \u8BF4\u660E")],-1),C=n("\u8FD9\u91CC\u662F\u5BF9\u4E8E"),L={href:"https://www.processon.com/mindmap/6214476d079129079ad749e1",target:"_blank",rel:"noopener noreferrer"},D=n("\u524D\u7AEF\u5404\u79CD\u6846\u67B6\u5E93\u7684\u89E3\u51B3\u65B9\u6848\u7684\u8865\u5145"),J=n(" \u6BD4\u5982vue-request\u5C31\u4E0D\u51FA\u73B0\u5728\u4E0B\u9762"),P=r(`<h3 id="vue-request\u548Caxios\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#vue-request\u548Caxios\u533A\u522B" aria-hidden="true">#</a> vue-request\u548Caxios\u533A\u522B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u{1F308}  \u517C\u5BB9 Vue 2 &amp; 3
\u{1F680}  \u6240\u6709\u6570\u636E\u90FD\u5177\u6709\u54CD\u5E94\u5F0F
\u{1F504}  \u8F6E\u8BE2\u8BF7\u6C42\uFF1ApollingInterval: 1000, // \u8BF7\u6C42\u95F4\u9694\u65F6\u95F4
\u{1F916}  \u81EA\u52A8\u5904\u7406\u9519\u8BEF\u91CD\u8BD5
\u{1F5C4}  \u5185\u7F6E\u8BF7\u6C42\u7F13\u5B58
\u{1F4A7}  \u8282\u6D41\u8BF7\u6C42\u4E0E\u9632\u6296\u8BF7\u6C42
\u{1F3AF}  \u805A\u7126\u9875\u9762\u65F6\u81EA\u52A8\u91CD\u65B0\u8BF7\u6C42\uFF1A\u5F53\u7535\u8111\u5728\u4F11\u7720\u72B6\u6001\u91CD\u65B0\u6FC0\u6D3B\u540E\uFF0C\u9875\u9762\u7684\u6570\u636E\u9700\u8981\u540C\u6B65\u5230\u6700\u65B0\u72B6\u6001\u65F6\u3002\uFF08  refreshOnWindowFocus: true,refocusTimespan: 1000, // \u8BF7\u6C42\u95F4\u9694\u65F6\u95F4\uFF09
\u2699\uFE0F  \u5F3A\u5927\u7684\u5206\u9875\u6269\u5C55\u4EE5\u53CA\u52A0\u8F7D\u66F4\u591A\u6269\u5C55
\u{1F4E0}  \u5B8C\u5168\u4F7F\u7528 Typescript \u7F16\u5199\uFF0C\u5177\u6709\u5F3A\u5927\u7684\u7C7B\u578B\u63D0\u793A
\u26A1\uFE0F  \u517C\u5BB9 Vite
\u{1F343}  \u8F7B\u91CF\u5316
\u{1F4E6}  \u5F00\u7BB1\u5373\u7528
## \u6CE8\u610F\u4F7F\u7528v2.x\u7248\u672C\u652F\u6301vue2,3,\u5982\u679C\u662Fv1.x\u7248\u672C\uFF0C\u652F\u6301vue3

vuerequest\u76EE\u7684
\u5728\u4EE5\u5F80\u7684\u4E1A\u52A1\u9879\u76EE\u4E2D\uFF0C\u5E38\u5E38\u88AB loading \u72B6\u6001\u7684\u7BA1\u7406\u3001\u8BF7\u6C42\u7684\u8282\u6D41\u9632\u6296\u3001\u63A5\u53E3\u6570\u636E\u7684\u7F13\u5B58\u3001\u5206\u9875\u7B49\u8FD9\u4E9B\u91CD\u590D\u7684\u5B9E\u73B0\u6240\u56F0\u60D1\u3002\u6BCF\u5F53\u5F00\u542F\u4E00\u4E2A\u65B0\u9879\u76EE\u65F6\uFF0C\u6211\u4EEC\u90FD\u5F97\u624B\u52A8\u53BB\u5904\u7406\u4EE5\u4E0A\u8FD9\u4E9B\u95EE\u9898\uFF0C\u8FD9\u5C06\u662F\u4E00\u4E2A\u91CD\u590D\u6027\u7684\u5DE5\u4F5C\uFF0C\u800C\u4E14\u8FD8\u5F97\u786E\u4FDD\u56E2\u961F\u7684\u4E00\u81F4\u3002
VueRequest \u65E8\u5728\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4FBF\u6377\u3001\u5FEB\u901F\u7684\u65B9\u5F0F\u6765\u7BA1\u7406\u63A5\u53E3\u7684\u72B6\u6001\u3002\u5728\u4E1A\u52A1\u5F00\u53D1\u4E2D\u7701\u53BB\u4E0A\u8FF0\u7684\u90A3\u4E9B\u201C\u810F\u6D3B\u7D2F\u6D3B\u201D\uFF0C\u53EA\u9700\u8981\u7B80\u5355\u7684\u914D\u7F6E\u5373\u53EF\u4F7F\u7528\uFF0C\u4E13\u6CE8\u4E8E\u4E1A\u52A1\u6838\u5FC3\u7684\u5F00\u53D1\u3002

\u90A3\u548Caxios\u5982\u4F55\u4E00\u8D77\u4F7F\u7528\u3002
\u6362\u53E5\u8BDD\u8BF4\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 \u7B2C\u4E09\u65B9\u7684\u8BF7\u6C42\u5E93\uFF08\u5982 axios \uFF09 \u6765\u83B7\u53D6\u6570\u636E\uFF0C\u7136\u540E\u5C06\u8BE5\u8BF7\u6C42\u4F20\u7ED9 VueRequest \u6765\u8FDB\u884C\u7BA1\u7406\u3002
import { useRequest } from &#39;vue-request&#39;;
import axios from &#39;axios&#39;;

const getUser = userName =&gt; {
  return axios.get(&#39;api/user&#39;, {
    params: {
      name: userName,
    },
  });
};

const { data, run } = useRequest(getUser, {
  defaultParams: [&#39;\u9A6C\u51AC\u6885&#39;],
});

// ...
run(&#39;\u5F20\u4E09&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-\u7EDF\u4E00\u5904\u7406\u5F53\u524D\u7684http\u548C\u62A5\u9519\u4FE1\u606F\u7684\u5C01\u88C5\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_1-\u7EDF\u4E00\u5904\u7406\u5F53\u524D\u7684http\u548C\u62A5\u9519\u4FE1\u606F\u7684\u5C01\u88C5\u6A21\u5757" aria-hidden="true">#</a> 1.\u7EDF\u4E00\u5904\u7406\u5F53\u524D\u7684http\u548C\u62A5\u9519\u4FE1\u606F\u7684\u5C01\u88C5\u6A21\u5757</h2><p>vue2\u7248\u672C vue3\u7248\u672C \u6700\u65B0vue3-ts\u7248\u672C https://gitee.com/nyhxiaoning/tov-template.git</p><p>\u5229\u7528vue-request\u548Caxios\u5C01\u88C5https\u8BF7\u6C42\u548C\u62A5\u9519\u5904\u7406\u3002</p><h2 id="_2-\u524D\u7AEF\u5BF9\u4E8E\u6570\u5B57\u7684\u5904\u7406\u5E93" tabindex="-1"><a class="header-anchor" href="#_2-\u524D\u7AEF\u5BF9\u4E8E\u6570\u5B57\u7684\u5904\u7406\u5E93" aria-hidden="true">#</a> 2.\u524D\u7AEF\u5BF9\u4E8E\u6570\u5B57\u7684\u5904\u7406\u5E93</h2><h3 id="\u5904\u7406\u6570\u5B57\u7684\u5DE5\u5177\u5E93-\u6CE8\u610F-\u4F46\u662F\u4E0D\u89E3\u51B3\u7CBE\u5EA6\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u6570\u5B57\u7684\u5DE5\u5177\u5E93-\u6CE8\u610F-\u4F46\u662F\u4E0D\u89E3\u51B3\u7CBE\u5EA6\u95EE\u9898" aria-hidden="true">#</a> \u5904\u7406\u6570\u5B57\u7684\u5DE5\u5177\u5E93\uFF08\u6CE8\u610F\uFF1A\u4F46\u662F\u4E0D\u89E3\u51B3\u7CBE\u5EA6\u95EE\u9898\uFF09</h3><p>math.js</p><h3 id="\u5904\u7406\u524D\u7AEF\u7684\u5927\u6570\u5B57\u7684\u7CBE\u5EA6\u4E22\u5931" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u524D\u7AEF\u7684\u5927\u6570\u5B57\u7684\u7CBE\u5EA6\u4E22\u5931" aria-hidden="true">#</a> \u5904\u7406\u524D\u7AEF\u7684\u5927\u6570\u5B57\u7684\u7CBE\u5EA6\u4E22\u5931</h3><p>json-bigint\u89E3\u51B3js\u7684\u5927\u6574\u6570\u7684\u5751\u7684\u7CBE\u5EA6\u4E22\u5931</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
ES6 \u5F15\u5165\u4E86Number.MAX_SAFE_INTEGER\u548CNumber.MIN_SAFE_INTEGER\u8FD9\u4E24\u4E2A\u5E38\u91CF\uFF0C\u7528\u6765\u8868\u793A\u8FD9\u4E2A\u8303\u56F4\u7684\u4E0A\u4E0B\u9650\u3002
\u8D85\u51FA 2 \u7684 53 \u6B21\u65B9\u4E4B\u540E\uFF0C\u4E00\u4E2A\u6570\u5C31\u4E0D\u7CBE\u786E\u4E86\u3002
import jsonBig from &#39;json-bigint&#39;

var json = &#39;{ &quot;value&quot; : 9223372036854775807, &quot;v2&quot;: 123 }&#39;

\u8FD8\u53EF\u4EE5\u5728\u5C01\u88C5\u7684axios\u4E2D\u5904\u7406\u5185\u5BB9\uFF1AAxios \u63D0\u4F9B\u81EA\u5B9A\u4E49\u5904\u7406\u539F\u59CB\u540E\u7AEF\u8FD4\u56DE\u6570\u636E\u7684 API\uFF1AtransformResponse \u3002
import axios from &#39;axios&#39;

import jsonBig from &#39;json-bigint&#39;

var json = &#39;{ &quot;value&quot; : 9223372036854775807, &quot;v2&quot;: 123 }&#39;

console.log(jsonBig.parse(json))

const request = axios.create({
  baseURL: &#39;\u4F60\u63A5\u53E3\u7684\u57FA\u7840\u8DEF\u5F84&#39;, // \u63A5\u53E3\u57FA\u7840\u8DEF\u5F84

  // transformResponse \u5141\u8BB8\u81EA\u5B9A\u4E49\u539F\u59CB\u7684\u54CD\u5E94\u6570\u636E\uFF08\u5B57\u7B26\u4E32\uFF09
  transformResponse: [function (data) {
    try {
      // \u5982\u679C\u8F6C\u6362\u6210\u529F\u5219\u8FD4\u56DE\u8F6C\u6362\u7684\u6570\u636E\u7ED3\u679C
      return jsonBig.parse(data)
    } catch (err) {
      // \u5982\u679C\u8F6C\u6362\u5931\u8D25\uFF0C\u5219\u5305\u88C5\u4E3A\u7EDF\u4E00\u6570\u636E\u683C\u5F0F\u5E76\u8FD4\u56DE
      return {
        data
      }
    }
  }]
})

export default request

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_002\u7B2C\u4E09\u65B9\u7684\u8BF7\u6C42\u5E93\u5904\u7406\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#_002\u7B2C\u4E09\u65B9\u7684\u8BF7\u6C42\u5E93\u5904\u7406\u6570\u5B57" aria-hidden="true">#</a> 002\u7B2C\u4E09\u65B9\u7684\u8BF7\u6C42\u5E93\u5904\u7406\u6570\u5B57</h3><h4 id="\u5904\u7406bignumber-js" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406bignumber-js" aria-hidden="true">#</a> \u5904\u7406bignumber.js</h4><p>\u7528\u4E8E\u4EFB\u610F\u7CBE\u5EA6\u7B97\u672F\u7684 JavaScript \u5E93\u3002 BigNumber.js \u7684toFixed \u6765\u89E3\u51B3\u6D6E\u70B9\u6570\u8FD0\u7B97\u5BFC\u81F4\u7684\u5404\u79CD\u5404\u6837\u7684\u95EE\u9898\u3002</p><h4 id="decimal-js" tabindex="-1"><a class="header-anchor" href="#decimal-js" aria-hidden="true">#</a> decimal.js</h4><p>\u7528\u4E8E JavaScript \u7684\u4EFB\u610F\u7CBE\u5EA6\u5341\u8FDB\u5236\u7C7B\u578B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Decimal(&#39;0.046875000000&#39;)            // &#39;0.046875&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u89E3\u51B3\u7CBE\u5EA6\u7684\u8BA1\u7B97\u4FDD\u7559\u5C0F\u6570\u7684\u571F\u529E\u6CD5-\u53D8\u6210\u6574\u6570" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u7CBE\u5EA6\u7684\u8BA1\u7B97\u4FDD\u7559\u5C0F\u6570\u7684\u571F\u529E\u6CD5-\u53D8\u6210\u6574\u6570" aria-hidden="true">#</a> \u89E3\u51B3\u7CBE\u5EA6\u7684\u8BA1\u7B97\u4FDD\u7559\u5C0F\u6570\u7684\u571F\u529E\u6CD5:\u53D8\u6210\u6574\u6570</h3><p>JS\u6D6E\u70B9\u6570\u505A\u4E58\u6CD5\u8FD0\u7B97\u5BFC\u81F4\u7CBE\u5EA6\u4E22\u5931\u7684\u95EE\u9898. \u539F\u56E0\u5176\u5B9E\u5C31\u662Fjs number\u7C7B\u578B\u8FD0\u7B97\u90FD\u9700\u8981\u5148\u5C06\u5341\u8FDB\u5236\u8F6C\u4E8C\u8FDB\u5236</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>JS \u6570\u5B57\u7C7B\u578B\u53EA\u6709number\u7C7B\u578B\uFF0Cnumber\u7C7B\u578B\u76F8\u5F53\u4E8E\u5176\u4ED6\u5F3A\u7C7B\u578B\u8BED\u8A00\u4E2D\u7684double\u7C7B\u578B(\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u578B)\uFF0C\u4E0D\u533A\u5206\u6D6E\u70B9\u578B\u548C\u6574\u6570\u578B.
\u7531\u4E8EJs\u7684\u6240\u6709\u6570\u5B57\u7C7B\u578B\u90FD\u662F\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u578B(64\u4F4D)\u91C7\u7528 IEEE754 \u6807\u51C6

64\u4F4D\u4E8C\u8FDB\u5236\u6570\u8868\u793A\u4E00\u4E2Anumber\u6570\u5B57

\u5176\u4E2D 64\u4F4D = 1\u4F4D\u7B26\u53F7\u4F4D + 11\u4F4D\u6307\u6570\u4F4D + 52\u4F4D\u5C0F\u6570\u4F4D
\u7B26\u53F7\u4F4D\uFF1A\u7528\u6765\u8868\u793A\u6570\u5B57\u7684\u6B63\u8D1F\uFF0C-1^\u7B26\u53F7\u4F4D\u6570\u503C\uFF0C0\u4E3A\u6B63\u6570\uFF0C1\u4E3A\u8D1F\u6570

\u6307\u6570\u4F4D\uFF1A\u4E00\u822C\u90FD\u7528\u79D1\u5B66\u8BA1\u6570\u6CD5\u8868\u793A\u6570\u503C\u5927\u5C0F\uFF0C\u4F46\u662F\u8FD9\u91CC\u4E00\u822C\u90FD\u662F2\u8FDB\u5236\u7684\u79D1\u5B66\u8BA1\u6570\u6CD5\uFF0C\u8868\u793A2\u7684\u591A\u5C11\u6B21\u65B9

\u5C0F\u6570\u4F4D\uFF1A\u79D1\u5B66\u8BA1\u6570\u6CD5\u524D\u9762\u7684\u6570\u503C\uFF0CIEEE745\u6807\u51C6\uFF0C\u9ED8\u8BA4\u6240\u6709\u7684\u8BE5\u6570\u503C\u90FD\u8F6C\u4E3A1.xxxxx\u8FD9\u79CD\u683C\u5F0F\uFF0C\u4F18\u70B9\u662F\u53EF\u4EE5\u7701\u7565\u4E00\u4F4D\u5C0F\u6570\u4F4D\uFF0C\u53EF\u4EE5\u5B58\u50A8\u66F4\u591A\u7684\u6570\u5B57\u5185\u5BB9\uFF0C\u7F3A\u70B9\u662F\u4E22\u5931\u7CBE\u5EA6.

\u5982\u679C\u662F\u6574\u6570\u8F6C\u6362\uFF1A\u6574\u6570\u8F6C\u4E8C\u8FDB\u5236\uFF0C\u96642\u53D6\u4F59\uFF0C\u90A3\u4E487\u8868\u793A\u4E3A 111 = 1x2^3 + 1x2^2 + 1x2^1
\u5982\u679C\u662F\u5C0F\u6570\u8F6C\u6362\uFF1A\u5C0F\u6570\u7684\u8F6C\u5316\u4E8C\u8FDB\u5236\u8FC7\u7A0B\u662F\u901A\u8FC7\u5224\u65AD\u5C0F\u6570\u662F\u4E0D\u662F\u6EE1 1/2\uFF0C1/4\uFF0C8/1\u4EE5\u6B64\u7C7B\u63A8\uFF0C\u6362\u6210\u6570\u5B66\u516C\u5F0F\u5C31\u662F \u4E58\u4E8C\u53D6\u6574\u6CD5\u3002
\u90A3\u4E48\uFF1A 0.1 =&gt; 0.0001 1001 1001 1001\u2026\uFF08\u65E0\u9650\u5FAA\u73AF\uFF09\u5B58\u50A8\u8D77\u6765\u3002



console.log(2.567*100);//\u7ED3\u679C\u662F\u6D6E\u70B9\u6570\uFF0C\u90A3\u4E48\u7CBE\u5EA6\u4E22\u5931\uFF0C256.70000000000005 
console.log(2.56-3);//\u6D6E\u70B9\u6570\u51CF\u6CD5\uFF0C\u7CBE\u5EA6\u4E22\u5931,-0.43999999999999995
console.log(2.33*100);//\u7ED3\u679C\u662F\u6574\u6570\uFF0C\u7CBE\u5EA6\u6CA1\u6709\u4E22233,\u4E00\u822C\u4FDD\u9669\u8D77\u89C1\uFF0C\u591A\u4E5810\uFF0C\u540E\u9664\u4EE510
console.log(0.34*1000/10)

\u6709\u4E2A\u5751\uFF0C\u4E0D\u8981\u518D\u63A7\u5236\u53F0\u505A\u6D4B\u8BD5\uFF0C\u63A7\u5236\u53F0\u8FDB\u884C\u4E86\u4F18\u5316\u5904\u7406
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_003\u89E3\u51B3\u6846\u67B6\u4E2D\u62A5\u9519\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_003\u89E3\u51B3\u6846\u67B6\u4E2D\u62A5\u9519\u7684\u95EE\u9898" aria-hidden="true">#</a> 003\u89E3\u51B3\u6846\u67B6\u4E2D\u62A5\u9519\u7684\u95EE\u9898</h2>`,21),T={href:"https://app.yinxiang.com/shard/s37/nl/24388549/5bb546b1-1047-4c54-afc2-3f70d7ab42fe",target:"_blank",rel:"noopener noreferrer"},A=n("\u5904\u7406await\u7684\u62A5\u9519\u8BEF\u95EE\u9898"),U={href:"https://app.yinxiang.com/shard/s37/nl/24388549/30c25a2d-fcb5-47ac-b1e2-38e6cfc76319",target:"_blank",rel:"noopener noreferrer"},F=n("js\u4E2D\u5F02\u6B65\u5B9E\u73B0\u65B9\u6848"),H={href:"https://juejin.cn/post/6979564690787532814",target:"_blank",rel:"noopener noreferrer"},M=n("\u524D\u7AEF\u9519\u8BEF\u5904\u7406\u6C47\u603B\u7BC7"),W={href:"https://app.yinxiang.com/shard/s37/nl/24388549/bc25dd43-2ddb-472f-ac5c-05330f540e80",target:"_blank",rel:"noopener noreferrer"},G=n("\u524D\u7AEF\u9519\u8BEF\u5904\u7406\u6C47\u603B01"),O=r(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u9519\u8BEF\u7C7B\u578B\u7684\u603B\u7ED3
\u540C\u6B65\u9519\u8BEF =&gt; \u53EF\u4EE5\u88AB1.try...catch 2.window.onerror 3.process.on(&#39;uncaughtException&#39;)\u6355\u83B7\u3002

\u5F02\u6B65\u9519\u8BEF =&gt; \u4F8B\u5982setInterval\u3001\u6CA1\u6709\u88ABawait\u7684\u5F02\u6B65\u51FD\u6570\u7B49\uFF0C\u662F\u4E0D\u4F1A\u88ABtry...catch\u6355\u83B7\u7684\uFF0C\u4F46\u662F\u4F1A\u88ABwindow.onerror\u548Cprocess.on(&#39;uncaughtException&#39;)\u6355\u83B7\u3002

Promise\u9519\u8BEF =&gt; Promise.reject(new Error(&#39;some wrong&#39;));\u50CF\u662F\u8FD9\u6837\u7684promise\u9519\u8BEF\uFF0C\u662F\u4E0D\u4F1A\u88ABwindow.onerror\u548Cprocess.on(&#39;uncaughtException&#39;)\u6355\u83B7\u7684\uFF0C\u66F4\u4E0D\u4F1A\u88ABtry...catch\u6355\u83B7\uFF0C\u60F3\u8981\u6355\u83B7\u5B83\u4EEC\u53EA\u80FD\uFF0Cprocess.on(&#39;unhandledRejection&#39;)\u4EE5\u53CAwindow.addEventListener(&#39;unhandledrejection&#39;)

\u8865\u5145\u9519\u8BEF\u56FE\u7247\u548C\u97F3\u9891\u8D44\u6E90\u52A0\u8F7D\u9759\u6001\u8D44\u6E90css,js\u52A0\u8F7D\u9519\u8BEF
unhandledRejection\u7684\u517C\u5BB9\u6027\u5F88\u5DEE\uFF0C\u8FD8\u6709\u5BA2\u6237\u7AEFonerror\u4E8B\u4EF6\u662F\u4E0D\u80FD\u6355\u83B7\u5230\u56FE\u7247\u97F3\u89C6\u9891\u52A0\u8F7D\u51FA\u9519\u53CA\u5176\u4ED6\u9759\u6001\u8D44\u6E90\uFF08\u5982js,css\u7B49404\uFF09\u7684\u9519\u8BEF\u7684\uFF0C\u53EF\u4EE5\u4F7F\u7528addEventListener\u5728\u6355\u83B7\u9636\u6BB5\u6355\u83B7\u3002
&lt;script src=&quot;https://cdn.xxx.com/js/test.js&quot;  onerror=&quot;errorHandler(this)&quot;&gt;&lt;/script&gt;

&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.xxx.com/styles/test.css&quot; onerror=&quot;errorHandler(this)&quot;&gt;

window.addEventListener(&#39;error&#39;, (errorEvent) =&gt; {
    console.log(errorEvent)
    cosnole.log(errorEvent.message)
}, true)
\u9700\u8981\u6CE8\u610F\u7684\u662F\u8FD9\u91CC\u62FF\u5230\u7684\u662F\u4E00\u4E2Aevent\u4E8B\u4EF6\uFF0C\u548C\u524D\u9762\u4E0D\u4E00\u6837\uFF0C\u62FF\u5230\u7684\u5E76\u4E0D\u662F\u4E00\u4E2Aerror\u5BF9\u8C61\u3002

----------------------
\u6CE8\u610F\uFF1A\u5728\u5C40\u90E8\u88ABtry...catch\u4E86\u7684\u9519\u8BEF\u662F\u4E0D\u4F1A\u7EE7\u7EED\u5F80\u4E0A\u5C42\u629B\u51FA\u4E86\u7684\uFF0C\u6240\u4EE5\u5168\u5C40\u5904\u7406\u7684\u6355\u83B7\u662F\u80AF\u5B9A\u6355\u83B7\u4E0D\u5230\u7684\uFF0C\u9664\u975E\u5728catch\u5230\u4EE5\u540E\u5904\u7406\u5B8C\u6210\uFF0C\u5C06\u9519\u8BEF\u7EE7\u7EED\u5411\u4E0A\u5C42throw\u3002


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_004\u5904\u7406consoleimporter\u5FEB\u901F\u5B89\u88C5console\u63A7\u5236\u53F0\u7684npm\u5305" tabindex="-1"><a class="header-anchor" href="#_004\u5904\u7406consoleimporter\u5FEB\u901F\u5B89\u88C5console\u63A7\u5236\u53F0\u7684npm\u5305" aria-hidden="true">#</a> 004\u5904\u7406consoleImporter\u5FEB\u901F\u5B89\u88C5console\u63A7\u5236\u53F0\u7684npm\u5305</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Console importer
\u6CE8\u610F\uFF1Achrome\u6D4F\u89C8\u5668\u53EF\u4EE5\uFF0C\u5173\u95ED\u5B89\u5168\u7684\u9650\u5236\uFF1A--disable-web-security --user-data-dir=C:\\MyChromeDevUserData
\u4F46\u662Fedge\u540C\u6837\u914D\u7F6E\uFF0C\u7136\u540E\u9009\u62E9csdn\u6216\u662F\u5176\u4ED6\u7684\u4E00\u4E9B\u4E2A\u4EBA\u5F53\u524D\u6240\u5728\u7F51\u7AD9\uFF0C\u6CE8\u610F\u9009\u62E9\u7D20\u6709\u7AD9\u70B9\u53EF\u7528\u3002
1. \u5B89\u88C5Console Importer\u63D2\u4EF6
2. $i(&#39;name&#39;)\u5B89\u88C5npm\u5305

\u5177\u4F53\u5B89\u88C5\u5305\u94FE\u63A5
https://app.yinxiang.com/shard/s37/nl/24388549/17eae8d6-ba10-44bf-ace2-f2aedf12eb86


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_005vscode\u81EA\u66F4\u65B0\u7EDD\u5BF9\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#_005vscode\u81EA\u66F4\u65B0\u7EDD\u5BF9\u8DEF\u5F84" aria-hidden="true">#</a> 005vscode\u81EA\u66F4\u65B0\u7EDD\u5BF9\u8DEF\u5F84</h3><p>ts\u6846\u67B6\u4E2D\uFF0C\u4E00\u4E9B\u5305\u5730\u5740\u53EF\u4EE5\u5FEB\u901F\u76F4\u8FBE\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86alias\uFF0C\u53D1\u73B0\u65E0\u6CD5\u76F4\u8FBE\uFF0C\u53EF\u4EE5tsconfig\u914D\u7F6E\u4E00\u4E0B\u3002 \u5982\u679C\u975Ets\u6846\u67B6\uFF0C\u53EF\u4EE5\u914D\u7F6Ejsconfig.js</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>webpack\u9879\u76EE\u4E2D\uFF0C\u548Cwebpack\u9879\u76EE\u4E2D\u914D\u7F6E\u8FC7\u7684\u522B\u540D\u505A\u4E00\u4E2A\u4E00\u4E00\u5BF9\u5E94
---------jsconfig.json-------------
{
  &quot;compilerOptions&quot;: {
    &quot;baseUrl&quot;: &quot;./&quot;,
    &quot;paths&quot;: {
      &quot;@/*&quot;: [&quot;src/*&quot;],
      &quot;@i/*&quot;: [&quot;src/api/*&quot;],
      &quot;@c/*&quot;: [&quot;src/components/*&quot;],
      &quot;@a/*&quot;: [&quot;src/assets/*&quot;],
      &quot;@s/*&quot;: [&quot;src/styles/*&quot;],
      &quot;@u/*&quot;: [&quot;src/utils/*&quot;],
      &quot;@v/*&quot;: [&quot;src/views/*&quot;]
    }
  },
  &quot;exclude&quot;: [&quot;node_modules&quot;, &quot;dist&quot;]
}

--------webpack\u7684\u914D\u7F6E\u6587\u4EF6\u522B\u540D--------
configureWebpack: {
    resolve: {
    alias: {
        &quot;@&quot;: resolve(&quot;src&quot;),
        &quot;@i&quot;: resolve(&quot;src/api&quot;),
        &quot;@c&quot;: resolve(&quot;src/components&quot;),
        &quot;@a&quot;: resolve(&quot;src/assets&quot;),
        &quot;@s&quot;: resolve(&quot;src/styles&quot;),
        &quot;@u&quot;: resolve(&quot;src/utils&quot;),
        &quot;@v&quot;: resolve(&quot;src/views&quot;)
        }
    }
}

\u8FD9\u6837\u6587\u4EF6\u5C31\u53EF\u4EE5\u76F4\u63A5import\u667A\u80FD\u63D0\u793A\u548C\u8DF3\u8F6C\u4E86
\u6CE8\u610F\uFF1A\u914D\u7F6E\u5B8C\u6210\u4E4B\u540E\u91CD\u542FVSCode

\u793A\u4F8B\uFF1A\u5728\u4F7F\u7528\u7EC4\u4EF6 HelloWorld.vue \u7684\u65F6\u5019\u667A\u80FD\u63D0\u793A\u53EF\u4EE5\u4F7F\u7528\u3002




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>VS Code \u7684\u6700\u4F73\u529F\u80FD\u4E4B\u4E00\u662F\u5B83\u7684\u6587\u4EF6\u5BFC\u5165\u5F88\u53CB\u5584\uFF0C\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u4F8B\u5982\uFF1A@/components/Button \u6BD4 ../../Button \u66F4\u8BA9\u4EBA\u8212\u9002\uFF1B
\u5F53\u79FB\u52A8\u6587\u4EF6\u91CD\u65B0\u7EC4\u7EC7\u76EE\u5F55\u65F6\uFF0C\u5E0C\u671B VS Code \u80FD\u81EA\u52A8\u66F4\u65B0\u6587\u4EF6\u7684\u8DEF\u5F84\uFF1F\u4F60\u53EF\u4EE5\u914D\u7F6E\u5B83\u4EEC\uFF1A
\u8BF7\u6CE8\u610F\uFF0C\u60A8\u9700\u8981\u5728 .tsconfig/.jsconfig \u6587\u4EF6\u4E2D\u914D\u7F6E\u8DEF\u5F84\u624D\u80FD\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u5BFC\u5165\u3002


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_006\u5F3A\u884C\u5F15\u5165lib\u5E93\u7684\u6E90\u7801\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_006\u5F3A\u884C\u5F15\u5165lib\u5E93\u7684\u6E90\u7801\u65B9\u6CD5" aria-hidden="true">#</a> 006\u5F3A\u884C\u5F15\u5165lib\u5E93\u7684\u6E90\u7801\u65B9\u6CD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7B2C\u4E00\u79CD\u65B9\u5F0Fesm\u7684es6\u6A21\u5757\u5316

import PlainDraggable from &#39;@/lib/js/plain-draggable.esm.js&#39;;
\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u5F3A\u884C\u5C06\u5F53\u524D\u7684\u6A21\u5757\u5F15\u5165\uFF0C
import PlainDraggable from &#39;@/lib/js/plain-draggable.min.js&#39;;
\u4F46\u662F\u5982\u679C\u8FD9\u6837\u5F15\u5165\u9879\u76EE\u4E2D\uFF0C\u53EF\u80FD\u51FA\u73B0\u7F3A\u5931\u4E00\u4E9B\u82E6\uFF0C\u9700\u8981\u5355\u72EC\u5F15\u5165
pnpm i pointer-event cssprefix anim-event m-class-list -D


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es6\u548Ccjs\u6A21\u5757\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#es6\u548Ccjs\u6A21\u5757\u5207\u6362" aria-hidden="true">#</a> es6\u548Ccjs\u6A21\u5757\u5207\u6362</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
CommonJS \u6A21\u5757\u5BFC\u51FA\u7684\u5176\u5B9E\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u76F8\u5F53\u4E8E\u4E00\u5F00\u59CBmodule.exports = {} \u662F\u4E00\u4E2A\u7A7A\u5BF9\u8C61\uFF0C\u7136\u540E\u5728\u8FD9\u4E2A\u7A7A\u5BF9\u8C61\u91CC\u9762\u4E8B\u9879\u4E86\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u5E76\u5C06\u6574\u4E2A\u5BF9\u8C61\u5BFC\u51FA\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vite2\u7248\u672C\u4E2D\u652F\u6301require\u5F15\u5165\u5E93\u6587\u4EF6\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#vite2\u7248\u672C\u4E2D\u652F\u6301require\u5F15\u5165\u5E93\u6587\u4EF6\u7684\u65B9\u6CD5" aria-hidden="true">#</a> vite2\u7248\u672C\u4E2D\u652F\u6301require\u5F15\u5165\u5E93\u6587\u4EF6\u7684\u65B9\u6CD5</h2><p>vite\u652F\u6301require+\u6CE8\u610F\u652F\u6301vite2\u7248\u672C\uFF0Cvite3\u4E0D\u652F\u6301\uFF01\uFF01\uFF01 yarn add -D vite-plugin-require-transform \u6CE8\u610F\u5177\u4F53\u9879\u76EE\uFF1A https://gitee.com/nyhxiaoning/my-vue-vite-app.git \u63A8\u5E7F\u5230\u5F88\u591Avite2\u9879\u76EE\u4E2D\uFF0C\u6D4B\u8BD5vite1\u9879\u76EE\u5982\u679C\u53EF\u4EE5\uFF0C\u4E5F\u63A8\u5E7F\uFF0C\u5F88\u591A\u597D\u7528\u7684react\u548Cvue\u5305\uFF0C\u7528\u8D77\u6765\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09\u4F7F\u7528\u6CE8\u610F\uFF1A\u4E0D\u80FD\u76F4\u63A5\u7528\u6A21\u677F\u5B57\u7B26\u4E32\uFF0C
\u53EF\u4EE5\u76F4\u63A5\u5728html\u6A21\u677F\u4E0Arequire\u5F15\u5165\uFF0C
\uFF082\uFF09\u53D8\u91CF\u4F7F\u7528\u65B9\u5F0F\uFF1A\u53EF\u4EE5\u5728\u4EE3\u7801\u4E2D\uFF0C\u4F7F\u7528

const img1 = require(&#39;@/assets/&#39; + a +&#39;/login-bg.jpg&#39;)
let img2 = img1
\u8FD9\u6837\u5427img2\u653E\u5165\u6A21\u677FHTMl\u4E2D\uFF0C\u4F46\u662F\u5982\u679C\u76F4\u63A5\u4F7F\u7528img1\u62A5\u9519\u3002


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function X($,z){const s=a("RouterLink"),l=a("ExternalLinkIcon");return u(),o("div",null,[m,e("nav",b,[e("ul",null,[e("li",null,[i(s,{to:"#\u56DE\u5230\u535A\u5BA2\u4E3B\u9875"},{default:d(()=>[h]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#\u8BF4\u660E"},{default:d(()=>[p]),_:1})]),e("li",null,[i(s,{to:"#vue-request\u548Caxios\u533A\u522B"},{default:d(()=>[_]),_:1})])])]),e("li",null,[i(s,{to:"#_1-\u7EDF\u4E00\u5904\u7406\u5F53\u524D\u7684http\u548C\u62A5\u9519\u4FE1\u606F\u7684\u5C01\u88C5\u6A21\u5757"},{default:d(()=>[g]),_:1})]),e("li",null,[i(s,{to:"#_2-\u524D\u7AEF\u5BF9\u4E8E\u6570\u5B57\u7684\u5904\u7406\u5E93"},{default:d(()=>[x]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#\u5904\u7406\u6570\u5B57\u7684\u5DE5\u5177\u5E93-\u6CE8\u610F-\u4F46\u662F\u4E0D\u89E3\u51B3\u7CBE\u5EA6\u95EE\u9898"},{default:d(()=>[q]),_:1})]),e("li",null,[i(s,{to:"#\u5904\u7406\u524D\u7AEF\u7684\u5927\u6570\u5B57\u7684\u7CBE\u5EA6\u4E22\u5931"},{default:d(()=>[f]),_:1})]),e("li",null,[i(s,{to:"#_002\u7B2C\u4E09\u65B9\u7684\u8BF7\u6C42\u5E93\u5904\u7406\u6570\u5B57"},{default:d(()=>[j]),_:1})]),e("li",null,[i(s,{to:"#\u89E3\u51B3\u7CBE\u5EA6\u7684\u8BA1\u7B97\u4FDD\u7559\u5C0F\u6570\u7684\u571F\u529E\u6CD5-\u53D8\u6210\u6574\u6570"},{default:d(()=>[w]),_:1})])])]),e("li",null,[i(s,{to:"#_003\u89E3\u51B3\u6846\u67B6\u4E2D\u62A5\u9519\u7684\u95EE\u9898"},{default:d(()=>[E]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#_004\u5904\u7406consoleimporter\u5FEB\u901F\u5B89\u88C5console\u63A7\u5236\u53F0\u7684npm\u5305"},{default:d(()=>[y]),_:1})]),e("li",null,[i(s,{to:"#_005vscode\u81EA\u66F4\u65B0\u7EDD\u5BF9\u8DEF\u5F84"},{default:d(()=>[k]),_:1})])])]),e("li",null,[i(s,{to:"#_006\u5F3A\u884C\u5F15\u5165lib\u5E93\u7684\u6E90\u7801\u65B9\u6CD5"},{default:d(()=>[R]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#es6\u548Ccjs\u6A21\u5757\u5207\u6362"},{default:d(()=>[I]),_:1})])])]),e("li",null,[i(s,{to:"#vite2\u7248\u672C\u4E2D\u652F\u6301require\u5F15\u5165\u5E93\u6587\u4EF6\u7684\u65B9\u6CD5"},{default:d(()=>[N]),_:1})])])]),S,e("p",null,[i(s,{to:"/"},{default:d(()=>[V]),_:1})]),B,e("p",null,[C,e("a",L,[D,i(l)]),J]),P,e("p",null,[e("a",T,[A,i(l)])]),e("p",null,[e("a",U,[F,i(l)])]),e("p",null,[e("a",H,[M,i(l)])]),e("p",null,[e("a",W,[G,i(l)])]),O])}var Y=v(c,[["render",X],["__file","005\u524D\u7AEF\u5DE5\u7A0B\u5316\u4E4B\u811A\u624B\u67B6\u5E38\u7528\u7684\u90A3\u4E9B\u516C\u5171\u5E93\u5904\u740601.html.vue"]]);export{Y as default};
