import{_ as v,r as t,o as a,c as u,a as e,b as n,w as d,e as i,d as r}from"./app.8f78c012.js";const c={},o={class:"table-of-contents"},m=i("Vue \u548C React \u5E95\u5C42\u5BF9\u6BD4"),b=i("Vue \u7248\u672C\u529F\u80FD\u5347\u7EA7\u548C\u8BF4\u660E"),h=i("vue3.2"),g=i("vue3.0"),p=i("\u529F\u80FD\uFF1A\u5355\u6587\u4EF6\u7EC4\u4EF6\u72B6\u6001\u9A71\u52A8\u7684 CSS \u53D8\u91CFroot"),f=i("\u529F\u80FD 1\uFF1ATeleport"),q=i("\u529F\u80FD 2\uFF1ASuspense"),x=i("\u529F\u80FD 3\uFF1Av-model"),_=i("\u529F\u80FD 4\uFF1A-for \u548C key"),y=i("\u529F\u80FD 5\uFF1Astyle \u4F7F\u7528\u4E24\u79CD\u7ED1\u5B9A"),k=i("\u529F\u80FD 6\uFF1A\u591A\u4E2A\u5C5E\u6027"),V=i("\u529F\u80FD\u8BF4\u660E 7\uFF1Av-for \u4E2D ref"),R=i("\u529F\u80FD 8\uFF1Av-for \u548C v-if \u4F18\u5148\u7EA7"),S=i("vue2.6.x \u5347\u7EA7 vue2.7.x"),w=e("h2",{id:"vue-\u548C-react-\u5E95\u5C42\u5BF9\u6BD4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-\u548C-react-\u5E95\u5C42\u5BF9\u6BD4","aria-hidden":"true"},"#"),i(" Vue \u548C React \u5E95\u5C42\u5BF9\u6BD4")],-1),T={href:"https://app.yinxiang.com/shard/s37/nl/24388549/6c9b7ccf-6467-45d3-bfeb-69965eeb6837",target:"_blank",rel:"noopener noreferrer"},I=i("Vue \u548C React \u5E95\u5C42\u5BF9\u6BD4"),C=e("h2",{id:"vue-\u7248\u672C\u529F\u80FD\u5347\u7EA7\u548C\u8BF4\u660E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-\u7248\u672C\u529F\u80FD\u5347\u7EA7\u548C\u8BF4\u660E","aria-hidden":"true"},"#"),i(" Vue \u7248\u672C\u529F\u80FD\u5347\u7EA7\u548C\u8BF4\u660E")],-1),N={href:"https://app.yinxiang.com/shard/s37/nl/24388549/32e5b15c-de55-44d3-b65d-f98d87b4b6cc",target:"_blank",rel:"noopener noreferrer"},B=i("Vue \u7248\u672C\u7684\u66F4\u65B0\u4E8B\u4EF6"),L=r(`<h2 id="vue3-2" tabindex="-1"><a class="header-anchor" href="#vue3-2" aria-hidden="true">#</a> vue3.2</h2><p>Vue3.2 \u65B0\u589E\u4E86\u4E00\u4E2A\u6307\u4EE4 v-memo, \u5F15\u5165\u8FD9\u4E2A\u6307\u4EE4\u7684\u76EE\u7684\u662F\u5E2E\u52A9\u5927\u5BB6\u66F4\u597D\u7684\u4E3A\u6211\u4EEC\u7684\u5E94\u7528\u505A\u6027\u80FD\u4F18\u5316\u{1F4AA}</p><p>\u7F13\u5B58\u4E00\u4E2A\u6A21\u677F\u7684\u5B50\u6811\u3002\u5728\u5143\u7D20\u548C\u7EC4\u4EF6\u4E0A\u90FD\u53EF\u4EE5\u4F7F\u7528\u3002\u4E3A\u4E86\u5B9E\u73B0\u7F13\u5B58\uFF0C\u8BE5\u6307\u4EE4\u9700\u8981\u4F20\u5165\u4E00\u4E2A\u56FA\u5B9A\u957F\u5EA6\u7684\u4F9D\u8D56\u503C\u6570\u7EC4\u8FDB\u884C\u6BD4\u8F83\u3002\u5982\u679C\u6570\u7EC4\u91CC\u7684\u6BCF\u4E2A\u503C\u90FD\u4E0E\u6700\u540E\u4E00\u6B21\u7684\u6E32\u67D3\u76F8\u540C\uFF0C\u90A3\u4E48\u6574\u4E2A\u5B50\u6811\u7684\u66F4\u65B0\u5C06\u88AB\u8DF3\u8FC7\u3002\u4E3E\u4F8B\u6765\u8BF4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5F53\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\uFF0C\u5982\u679C valueA \u548C valueB \u90FD\u4FDD\u6301\u4E0D\u53D8\uFF0C\u8FD9\u4E2A &lt;div&gt; \u53CA\u5176\u5B50\u9879\u7684\u6240\u6709\u66F4\u65B0\u90FD\u5C06\u88AB\u8DF3\u8FC7
&lt;div v-memo=&quot;[valueA, valueB]&quot;&gt;
    ...
&lt;/div&gt;


------\u4F7F\u7528\u573A\u666F
\u5047\u8BBE\u540E\u7AEF\u8FD4\u56DE\u6765\u4E86 10000 \u6761\u6570\u636E\uFF0C \u524D\u7AEF\u9700\u8981\u505A\u7B5B\u9009\uFF0C \u9009\u51FA\u7B26\u5408\u6761\u4EF6\u7684\u6570\u636E\u8FDB\u884C\u5C55\u793A\uFF0C \u5982\u679C\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\uFF0C\u5219\u4FDD\u6301\u4E0A\u6B21\u7684\u641C\u7D22\u7ED3\u679C\u3002

&lt;template&gt;
  &lt;div class=&quot;home&quot;&gt;
    &lt;input type=&quot;text&quot; v-model=&quot;value&quot;&gt;
    &lt;!-- v-memo\u4E2D\u503C\u82E5\u4E0D\u53D1\u751F\u53D8\u5316\uFF0C\u5219\u4E0D\u4F1A\u8FDB\u884C\u66F4\u65B0 --&gt;
    &lt;ul v-memo=&quot;[shouldUpdate]&quot;&gt;
        &lt;li class=&quot;licss&quot; v-for=&quot;item in arr&quot; :key=&quot;item&quot;&gt;
          {{ value }} -- {{ animalType[value] }}
        &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &quot;@vue/reactivity&quot;
import { watch } from &quot;@vue/runtime-core&quot;
const arr=new Array(10000)
const animalType={
  &#39;mie&#39;:&#39;\u{1F40F}&#39;,
  &#39;mo&#39;:&#39;\u{1F402}&#39;,
  &#39;miao&#39;:&#39;\u{1F431}&#39;,
}
const value=ref(&#39;mie&#39;)
const shouldUpdate=ref(0)
// \u76D1\u542Cvalue(\u8F93\u5165\u6846\u4E2D\u7684\u503C)\u3002
// \u5982\u679C\u6570\u636E\u53D1\u751F\u53D8\u5316\uFF0C\u5E76\u4E14\u5728animalType\u5BF9\u8C61\u4E2D\u5B58\u5728\u3002\u8BD5\u56FE\u8FDB\u884C\u66F4\u65B0\u3002\u5426\u5219\u8BD5\u56FE\u4E0D\u8FDB\u884C\u66F4\u65B0\u3002
watch(()=&gt;value.value,()=&gt;{
  if(Object.keys(animalType).includes(value.value)){
    shouldUpdate.value++
  }
})
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue3-0" tabindex="-1"><a class="header-anchor" href="#vue3-0" aria-hidden="true">#</a> vue3.0</h2><h3 id="\u529F\u80FD-\u5355\u6587\u4EF6\u7EC4\u4EF6\u72B6\u6001\u9A71\u52A8\u7684-css-\u53D8\u91CFroot" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD-\u5355\u6587\u4EF6\u7EC4\u4EF6\u72B6\u6001\u9A71\u52A8\u7684-css-\u53D8\u91CFroot" aria-hidden="true">#</a> \u529F\u80FD\uFF1A\u5355\u6587\u4EF6\u7EC4\u4EF6\u72B6\u6001\u9A71\u52A8\u7684 CSS \u53D8\u91CFroot</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CSS \u53D8\u91CF\u53C8\u79F0\u4E3A CSS \u81EA\u5B9A\u4E49\u5C5E\u6027\uFF0C\u5B83\u5305\u542B\u7684\u503C\u53EF\u4EE5\u5728\u6574\u4E2A\u6587\u6863\u4E2D\u91CD\u590D\u4F7F\u7528\u3002\u7531\u81EA\u5B9A\u4E49\u5C5E\u6027\u6807\u8BB0\u8BBE\u5B9A\u503C\uFF08\u6BD4\u5982\uFF1A --main-color: black; \uFF09\uFF0C\u7531 var \u51FD\u6570\u6765\u83B7\u53D6\u503C\uFF08\u6BD4\u5982\uFF1A color: var(--main-color); \uFF09

\u5982\u679C\u5E0C\u671B\u80FD\u591F\u5728 HTML \u6587\u6863\u4E2D\u90FD\u80FD\u8BBF\u95EE\u5230\uFF0C\u5219\u53EF\u4EE5\u5B9A\u4E49\u5728\u7C7B :root \u4E2D

:root{
  --test:400 + &#39;px&#39;;
}
/* \u4F7F\u7528 */
width: var(--test);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u53E6\u4E00\u79CD\u65B9\u6CD5v-bind" tabindex="-1"><a class="header-anchor" href="#\u53E6\u4E00\u79CD\u65B9\u6CD5v-bind" aria-hidden="true">#</a> \u53E6\u4E00\u79CD\u65B9\u6CD5v-bind</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>v-bind()\u7684\u5E38\u7528\u4F7F\u7528\u65B9\u5F0F\uFF0C\u4E3B\u8981\u5305\u62EC\u5728css,less,scss\u4E2D\u7684\u4F7F\u7528

.div {
  /* \u62FC\u63A5\u4F7F\u7528 */
  width: v-bind(width + &#39;px&#39;);
  /* \u76F4\u63A5\u4F7F\u7528 */
  height: v-bind(div_height);
  background: v-bind(div_color);
}

.span {
  /* \u5BF9\u8C61\u8C03\u7528 */
  width: v-bind(&#39;span.width&#39;);


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u529F\u80FD-1-teleport" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD-1-teleport" aria-hidden="true">#</a> \u529F\u80FD 1\uFF1ATeleport</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>React\u4E2D\u53EF\u4EE5\u901A\u8FC7createPortal\u51FD\u6570\u6765\u521B\u5EFA\u9700\u8981\u4F20\u9001\u7684\u8282\u70B9\uFF1B\u672C\u6765\u5C24\u5927\u5927\u60F3\u8D77\u540D\u53EBPortal\uFF0C\u4F46\u662FH5\u539F\u751F\u7684Portal\u6807\u7B7E\u4E5F\u5728\u8BA1\u5212\u4E2D\uFF0C\u867D\u7136\u6709\u4E00\u4E9B\u5B89\u5168\u95EE\u9898\uFF0C\u4F46\u662F\u4E3A\u4E86\u907F\u514D\u91CD\u540D\uFF0C\u56E0\u6B64\u6539\u6210Teleport

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u529F\u80FD-2-suspense" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD-2-suspense" aria-hidden="true">#</a> \u529F\u80FD 2\uFF1ASuspense</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Suspense\u662FVue3\u63A8\u51FA\u7684\u4E00\u4E2A\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u5B83\u5141\u8BB8\u6211\u4EEC\u7684\u7A0B\u5E8F\u5728\u7B49\u5F85\u5F02\u6B65\u7EC4\u4EF6\u65F6\u6E32\u67D3\u4E00\u4E9B\u540E\u5907\u7684\u5185\u5BB9\uFF0C\u53EF\u4EE5\u8BA9\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u5E73\u6ED1\u7684\u7528\u6237\u4F53\u9A8C\uFF1BVue\u4E2D\u52A0\u8F7D\u5F02\u6B65\u7EC4\u4EF6\u5176\u5B9E\u5728Vue2.x\u4E2D\u5DF2\u7ECF\u6709\u4E86\uFF0C\u6211\u4EEC\u7528\u7684vue-router\u4E2D\u52A0\u8F7D\u7684\u8DEF\u7531\u7EC4\u4EF6\u5176\u5B9E\u4E5F\u662F\u4E00\u4E2A\u5F02\u6B65\u7EC4\u4EF6\uFF1A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u529F\u80FD-3-v-model" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD-3-v-model" aria-hidden="true">#</a> \u529F\u80FD 3\uFF1Av-model</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728Vue2.x\u4E2D\uFF0Cv-model\u76F8\u5F53\u4E8E\u7ED1\u5B9Avalue\u5C5E\u6027\u548Cinput\u4E8B\u4EF6\uFF0C\u5B83\u672C\u8D28\u4E5F\u662F\u4E00\u4E2A\u8BED\u6CD5\u7CD6
\u5728vue2.3.0+\u7248\u672C\u5F15\u5165\u4E86.sync\u4FEE\u9970\u7B26\uFF0C\u5176\u672C\u8D28\u4E5F\u662F\u8BED\u6CD5\u7CD6\uFF0C\u662F\u5728\u7EC4\u4EF6\u4E0A\u7ED1\u5B9A@update:propName\u56DE\u8C03\uFF0C\u8BED\u6CD5\u66F4\u7B80\u6D01\uFF1A

ue3\u4E2D\u5C06v-model\u548C.sync\u8FDB\u884C\u4E86\u529F\u80FD\u7684\u6574\u5408\uFF0C\u629B\u5F03\u4E86.sync\uFF0C\u8868\u793A\uFF1A\u591A\u4E2A\u53CC\u5411\u7ED1\u5B9Avalue\u503C\u76F4\u63A5\u7528\u591A\u4E2Av-model\u4F20\u5C31\u597D\u4E86\uFF1B\u540C\u65F6\u4E5F\u5C06v-model\u9ED8\u8BA4\u4F20\u7684prop\u540D\u79F0\u7531value\u6539\u6210\u4E86modelValue\uFF1A

&lt;child-component
    v-model.msg1=&quot;msg1&quot;
    v-model.msg2=&quot;msg2&quot;&gt;
&lt;/child-component&gt;

&lt;!-- \u76F8\u5F53\u4E8E --&gt;
&lt;child-component
    :msg1=&quot;msg1&quot;
    @update:msg1=&quot;msg1=$event&quot;
    :msg2=&quot;msg2&quot;
    @update:msg2=&quot;msg2=$event&quot;&gt;
&lt;/child-component&gt;



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u529F\u80FD-4-for-\u548C-key" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD-4-for-\u548C-key" aria-hidden="true">#</a> \u529F\u80FD 4\uFF1A-for \u548C key</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728Vue2.x\u4E2D\uFF0C\u6211\u4EEC\u90FD\u77E5\u9053v-for\u6BCF\u6B21\u5FAA\u73AF\u90FD\u9700\u8981\u7ED9\u6BCF\u4E2A\u5B50\u8282\u70B9\u4E00\u4E2A\u552F\u4E00\u7684key\uFF0C\u8FD8\u4E0D\u80FD\u7ED1\u5B9A\u5728template\u6807\u7B7E\u4E0A
&lt;template v-for=&quot;item in list&quot;&gt;
  &lt;div :key=&quot;item.id&quot;&gt;...&lt;/div&gt;
  &lt;span :key=&quot;item.id&quot;&gt;...&lt;/span&gt;
&lt;/template&gt;

\u800C\u5728Vue3\u4E2D\uFF0Ckey\u503C\u5E94\u8BE5\u88AB\u653E\u7F6E\u5728template\u6807\u7B7E\u4E0A\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u4E0D\u7528\u4E3A\u6BCF\u4E2A\u5B50\u8282\u70B9\u8BBE\u4E00\u904D\uFF1A

&lt;template v-for=&quot;item in list&quot; :key=&quot;item.id&quot;&gt;
  &lt;div&gt;...&lt;/div&gt;
  &lt;span&gt;...&lt;/span&gt;
&lt;/template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u529F\u80FD-5-style-\u4F7F\u7528\u4E24\u79CD\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD-5-style-\u4F7F\u7528\u4E24\u79CD\u7ED1\u5B9A" aria-hidden="true">#</a> \u529F\u80FD 5\uFF1Astyle \u4F7F\u7528\u4E24\u79CD\u7ED1\u5B9A</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u57FA\u7840\u7C7B\u578B\u65B9\u5F0F\uFF1F\uFF1F\uFF1F
&lt;div  :style=&quot;&#39;background-color&#39;:oNum&quot;&gt;&lt;/div&gt;

\u5BF9\u8C61\u65B9\u5F0F
&lt;div :style=&quot;{}&quot;&gt;&lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u529F\u80FD-6-\u591A\u4E2A\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD-6-\u591A\u4E2A\u5C5E\u6027" aria-hidden="true">#</a> \u529F\u80FD 6\uFF1A\u591A\u4E2A\u5C5E\u6027</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u3000\u5728vue2.x\u4E2D\uFF0C\u5982\u679C\u4E00\u4E2A\u5143\u7D20\u540C\u65F6\u5B9A\u4E49\u4E86v-bind=&quot;object&quot;\u548C\u4E00\u4E2A\u76F8\u540C\u7684\u5355\u72EC\u7684\u5C5E\u6027\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5355\u72EC\u7684\u5C5E\u6027\u4F1A\u8986\u76D6object\u4E2D\u7684\u7ED1\u5B9A\uFF1A
&lt;div id=&quot;red&quot; v-bind=&quot;{ id: &#39;blue&#39; }&quot;&gt;&lt;/div&gt;
&lt;div v-bind=&quot;{ id: &#39;blue&#39; }&quot; id=&quot;red&quot;&gt;&lt;/div&gt;
&lt;!-- \u6700\u540E\u7ED3\u679C\u90FD\u76F8\u540C --&gt;
&lt;div id=&quot;red&quot;&gt;&lt;/div&gt;

\u3000\u7136\u800C\u5728vue3\u4E2D\uFF0C\u5982\u679C\u4E00\u4E2A\u5143\u7D20\u540C\u65F6\u5B9A\u4E49\u4E86v-bind=&quot;object&quot;\u548C\u4E00\u4E2A\u76F8\u540C\u7684\u5355\u72EC\u7684\u5C5E\u6027\uFF0C\u90A3\u4E48\u58F0\u660E\u7ED1\u5B9A\u7684\u987A\u5E8F\u51B3\u5B9A\u4E86\u6700\u540E\u7684\u7ED3\u679C\uFF08\u540E\u8005\u8986\u76D6\u524D\u8005\uFF09\uFF1A

&lt;!-- template --&gt;
&lt;div id=&quot;red&quot; v-bind=&quot;{ id: &#39;blue&#39; }&quot;&gt;&lt;/div&gt;
&lt;!-- result --&gt;
&lt;div id=&quot;blue&quot;&gt;&lt;/div&gt;

&lt;!-- template --&gt;
&lt;div v-bind=&quot;{ id: &#39;blue&#39; }&quot; id=&quot;red&quot;&gt;&lt;/div&gt;
&lt;!-- result --&gt;
&lt;div id=&quot;red&quot;&gt;&lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u529F\u80FD\u8BF4\u660E-7-v-for-\u4E2D-ref" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u8BF4\u660E-7-v-for-\u4E2D-ref" aria-hidden="true">#</a> \u529F\u80FD\u8BF4\u660E 7\uFF1Av-for \u4E2D ref</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vue2.x\u4E2D\uFF0C\u5728v-for\u4E0A\u4F7F\u7528ref\u5C5E\u6027\uFF0C\u901A\u8FC7this.$refs\u4F1A\u5F97\u5230\u4E00\u4E2A\u6570\u7EC4\uFF1A

&lt;template
  &lt;div v-for=&quot;item in list&quot; :ref=&quot;setItemRef&quot;&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  data(){
    list: [1, 2]
  },
  mounted () {
    // [div, div]
    console.log(this.$refs.setItemRef)
  }
}
&lt;/script&gt;

\u56E0\u6B64vue3\u4E0D\u518D\u81EA\u52A8\u521B\u5EFA\u6570\u7EC4\uFF0C\u800C\u662F\u5C06ref\u7684\u5904\u7406\u65B9\u5F0F\u53D8\u4E3A\u4E86\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u9ED8\u8BA4\u4F20\u5165\u8BE5\u8282\u70B9\uFF1A

&lt;template
  &lt;div v-for=&quot;item in 3&quot; :ref=&quot;setItemRef&quot;&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import { reactive, onUpdated } from &#39;vue&#39;
export default {
  setup() {
    let itemRefs = reactive([])

    const setItemRef = el =&gt; {
      itemRefs.push(el)
    }

    onUpdated(() =&gt; {
      console.log(itemRefs)
    })

    return {
      itemRefs,
      setItemRef
    }
  }
}
&lt;/script&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u529F\u80FD-8-v-for-\u548C-v-if-\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD-8-v-for-\u548C-v-if-\u4F18\u5148\u7EA7" aria-hidden="true">#</a> \u529F\u80FD 8\uFF1Av-for \u548C v-if \u4F18\u5148\u7EA7</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u3000\u5728vue2.x\u4E2D\uFF0C\u5728\u4E00\u4E2A\u5143\u7D20\u4E0A\u540C\u65F6\u4F7F\u7528v-for\u548Cv-if\uFF0Cv-for\u6709\u66F4\u9AD8\u7684\u4F18\u5148\u7EA7\uFF0C\u56E0\u6B64\u5728vue2.x\u4E2D\u505A\u6027\u80FD\u4F18\u5316\uFF0C\u6709\u4E00\u4E2A\u91CD\u8981\u7684\u70B9\u5C31\u662Fv-for\u548Cv-if\u4E0D\u80FD\u653E\u5728\u540C\u4E00\u4E2A\u5143\u7D20\u4E0A\u3002

\u3000\u3000\u800C\u5728vue3\u4E2D\uFF0Cv-if\u6BD4v-for\u6709\u66F4\u9AD8\u7684\u4F18\u5148\u7EA7\u3002\u56E0\u6B64\u4E0B\u9762\u7684\u4EE3\u7801\uFF0C\u5728vue2.x\u4E2D\u80FD\u6B63\u5E38\u8FD0\u884C\uFF0C\u4F46\u662F\u5728vue3\u4E2Dv-if\u751F\u6548\u65F6\u5E76\u6CA1\u6709item\u53D8\u91CF\uFF0C\u56E0\u6B64\u4F1A\u62A5\u9519\uFF1A
&lt;template&gt;
  &lt;div v-for=&quot;item in list&quot; v-if=&quot;item % 2 === 0&quot; :key=&quot;item&quot;&gt;{{ item }}&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5],
    };
  },
};
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue2-6-x-\u5347\u7EA7-vue2-7-x" tabindex="-1"><a class="header-anchor" href="#vue2-6-x-\u5347\u7EA7-vue2-7-x" aria-hidden="true">#</a> vue2.6.x \u5347\u7EA7 vue2.7.x</h2><p>\u65B0\u589E\u529F\u80FD\u5982\u4E0B\uFF1A Vue2.7 \u672C\u5468\u53D1\u5E03\uFF1F\u652F\u6301\u7EC4\u5408\u5F0F API\u3001setup\u3001css v-bind</p><ul><li>\u76EE\u7684\uFF1A\u5F88\u591A\u4EBA\u5B66\u4E60\u4E86 vue3.0\uFF0C\u4E5F\u6709\u5B66\u4E60\u4E86 vue2,\u8FD9\u6837\u52A0\u5FEB\u5927\u5BB6\u5F00\u53D1\u6548\u7387\u3002</li><li>ropeSking \u8DF3\u7EF3\u5347\u7EA7 2.7 \u6CA1\u6709\u95EE\u9898\uFF0C\u53EF\u4EE5\u6B63\u5E38\u5F00\u53D1\u6D4B\u8BD5\uFF0C\u540C\u65F6\u8FD9\u91CC\u589E\u52A0\u4E86\u4E00\u4E9B\u5EFA\u8BAE\u5728\u5206\u652F\u4E2D</li><li>\u65B9\u6CD5\uFF1A\u57FA\u672C\u603B\u7ED3\u4E0B\u6765 \uFF081\uFF09vue2.7.8 \u66FF\u6362 \uFF082\uFF09\u5220\u9664 vue-compiler \uFF083\uFF09eslint+eslint-plugin-vue \u5F15\u5165 &quot;eslint&quot;: &quot;^8.18.0&quot;, &quot;eslint-plugin-vue&quot;: &quot;^9.1.1&quot;, \uFF084\uFF09\u5982\u679C vue2 \u4E2D\u4F7F\u7528\u4E86 render \u8FD9\u6837\u7EC4\u4EF6\u5B9E\u73B0\uFF0C\u53EF\u80FD\u62A5\u9519\uFF0C\u6682\u65F6\u89E3\u51B3\u4E0D\u4E86</li></ul>`,28);function U(j,A){const l=t("RouterLink"),s=t("ExternalLinkIcon");return a(),u("div",null,[e("nav",o,[e("ul",null,[e("li",null,[n(l,{to:"#vue-\u548C-react-\u5E95\u5C42\u5BF9\u6BD4"},{default:d(()=>[m]),_:1})]),e("li",null,[n(l,{to:"#vue-\u7248\u672C\u529F\u80FD\u5347\u7EA7\u548C\u8BF4\u660E"},{default:d(()=>[b]),_:1})]),e("li",null,[n(l,{to:"#vue3-2"},{default:d(()=>[h]),_:1})]),e("li",null,[n(l,{to:"#vue3-0"},{default:d(()=>[g]),_:1}),e("ul",null,[e("li",null,[n(l,{to:"#\u529F\u80FD-\u5355\u6587\u4EF6\u7EC4\u4EF6\u72B6\u6001\u9A71\u52A8\u7684-css-\u53D8\u91CFroot"},{default:d(()=>[p]),_:1})]),e("li",null,[n(l,{to:"#\u529F\u80FD-1-teleport"},{default:d(()=>[f]),_:1})]),e("li",null,[n(l,{to:"#\u529F\u80FD-2-suspense"},{default:d(()=>[q]),_:1})]),e("li",null,[n(l,{to:"#\u529F\u80FD-3-v-model"},{default:d(()=>[x]),_:1})]),e("li",null,[n(l,{to:"#\u529F\u80FD-4-for-\u548C-key"},{default:d(()=>[_]),_:1})]),e("li",null,[n(l,{to:"#\u529F\u80FD-5-style-\u4F7F\u7528\u4E24\u79CD\u7ED1\u5B9A"},{default:d(()=>[y]),_:1})]),e("li",null,[n(l,{to:"#\u529F\u80FD-6-\u591A\u4E2A\u5C5E\u6027"},{default:d(()=>[k]),_:1})]),e("li",null,[n(l,{to:"#\u529F\u80FD\u8BF4\u660E-7-v-for-\u4E2D-ref"},{default:d(()=>[V]),_:1})]),e("li",null,[n(l,{to:"#\u529F\u80FD-8-v-for-\u548C-v-if-\u4F18\u5148\u7EA7"},{default:d(()=>[R]),_:1})])])]),e("li",null,[n(l,{to:"#vue2-6-x-\u5347\u7EA7-vue2-7-x"},{default:d(()=>[S]),_:1})])])]),w,e("p",null,[e("a",T,[I,n(s)])]),C,e("p",null,[e("a",N,[B,n(s)])]),L])}var $=v(c,[["render",U],["__file","001Vue\u7248\u672C\u5347\u7EA7\u548C\u529F\u80FD\u8BF4\u660E.html.vue"]]);export{$ as default};
