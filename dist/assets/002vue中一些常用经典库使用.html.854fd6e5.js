import{_ as a}from"./home.d4d9b4a0.js";import{_ as t,r as l,o as r,c as o,a as e,b as s,w as d,e as n,d as u}from"./app.dc3baf66.js";const v={},c=e("p",null,[e("img",{src:a,alt:"\u6210\u957F"})],-1),m={class:"table-of-contents"},_=n("\u56DE\u5230\u535A\u5BA2\u4E3B\u9875"),b=n("001\u63D2\u4EF6vue-draggable-next\u4F7F\u7528"),g=n("002dayjs\u4F7F\u7528\u5E38\u7528\u65E5\u671F\u683C\u5F0F\u5316"),h=e("h2",{id:"\u56DE\u5230\u535A\u5BA2\u4E3B\u9875",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u56DE\u5230\u535A\u5BA2\u4E3B\u9875","aria-hidden":"true"},"#"),n(" \u56DE\u5230\u535A\u5BA2\u4E3B\u9875")],-1),q=n("\u535A\u5BA2\u9996\u9875"),x=u(`<h3 id="_001\u63D2\u4EF6vue-draggable-next\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_001\u63D2\u4EF6vue-draggable-next\u4F7F\u7528" aria-hidden="true">#</a> 001\u63D2\u4EF6vue-draggable-next\u4F7F\u7528</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
Events\uFF1AAPI\u4E2D\u7684\u65B9\u6CD5\u6C47\u603B\u8BF4\u660E\uFF1A
Support for Sortable events:
start, add, remove, update, end, choose, unchoose, sort, filter, clone

\u4F7F\u7528\u6848\u4F8B
&lt;draggable :list=&quot;list&quot; @end=&quot;onEnd&quot;&gt;

---\u589E\u52A0\u4E00\u4E2A\u53EF\u62D6\u52A8\u533A\u57DF\u6837\u5F0F\u8BBE\u7F6E\uFF1Ahandle\u914D\u7F6E:\u53EA\u80FD\u5728logo\u533A\u57DF\u62D6\u52A8
 &lt;draggable
        v-model=&quot;columns&quot; tag=&quot;transition-group&quot; item-key=&quot;id&quot; v-bind=&quot;dragOptions&quot; group=&quot;columns&quot;
        handle=&quot;.drag_box&quot; @start=&quot;drag = true&quot; @end=&quot;actions.onEnd&quot;
      &gt;
-----------\u5185\u90E8\u6837\u5F0F\uFF1Adrag_box\u6307\u5B9A\u8FD9\u4E2A\u6837\u5F0F\u533A
      &lt;div class=&quot;drag_box&quot;&gt;
            &lt;img class=&quot;column_item_img&quot; :src=&quot;require(&#39;@/assets/icons/drag.png&#39;)&quot;&gt;
          &lt;/div&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_002dayjs\u4F7F\u7528\u5E38\u7528\u65E5\u671F\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#_002dayjs\u4F7F\u7528\u5E38\u7528\u65E5\u671F\u683C\u5F0F\u5316" aria-hidden="true">#</a> 002dayjs\u4F7F\u7528\u5E38\u7528\u65E5\u671F\u683C\u5F0F\u5316</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6BD4\u8F83\u4E24\u4E2A\u65E5\u671F\u51FD\u6570
dayjs(value).diff(value2,days);

\u683C\u5F0F\u5316\u65E5\u671F
dayjs(value).forMat(YYYY-MM-DD);

import dayjs from &#39;dayjs&#39;;
return {dayjs};//return\u8FD9\u4E2A\u5373\u53EF\u3002\u5982\u679C\u662Fsetup\uFF0C\u975E\u5E38\u65B9\u4FBF



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function p(f,y){const i=l("RouterLink");return r(),o("div",null,[c,e("nav",m,[e("ul",null,[e("li",null,[s(i,{to:"#\u56DE\u5230\u535A\u5BA2\u4E3B\u9875"},{default:d(()=>[_]),_:1}),e("ul",null,[e("li",null,[s(i,{to:"#_001\u63D2\u4EF6vue-draggable-next\u4F7F\u7528"},{default:d(()=>[b]),_:1})]),e("li",null,[s(i,{to:"#_002dayjs\u4F7F\u7528\u5E38\u7528\u65E5\u671F\u683C\u5F0F\u5316"},{default:d(()=>[g]),_:1})])])])])]),h,e("p",null,[s(i,{to:"/"},{default:d(()=>[q]),_:1})]),x])}var E=t(v,[["render",p],["__file","002vue\u4E2D\u4E00\u4E9B\u5E38\u7528\u7ECF\u5178\u5E93\u4F7F\u7528.html.vue"]]);export{E as default};
