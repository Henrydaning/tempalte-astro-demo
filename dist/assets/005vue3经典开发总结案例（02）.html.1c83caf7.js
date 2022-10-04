import{_ as t}from"./home.d4d9b4a0.js";import{_ as r,r as d,o as u,c,a as e,b as n,w as s,e as i,d as a}from"./app.dc3baf66.js";const o={},m=e("p",null,[e("img",{src:t,alt:"\u6210\u957F"})],-1),b={class:"table-of-contents"},p=i("\u56DE\u5230\u535A\u5BA2\u4E3B\u9875"),g=i("001.vue3\u4E2D\u4F7F\u7528jsx\u548Ctsx\u7684\u65B9\u5F0F\u5199\u7EC4\u4EF6"),h=i("003\u4F7F\u7528vite\u6216\u662Fwebpack\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u6846\u67B6:\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u4F4D\u7F6E"),x=i("004vue\u4E2D\u4E22\u5931\u54CD\u5E94\u5F0F\u7684\u4E09\u79CD\u573A\u666F"),_=i("005vue-router\u4E2D\u7684\u65B9\u6CD5\u8C03\u7528\uFF1A\u5F53\u524D\u8DEF\u7531\u53D8\u5316\u76D1\u542C"),f=i("006vue3\u521B\u5EFA\u811A\u624B\u67B6\u7684\u6700\u65B0\u547D\u4EE4"),k=i("006\u642D\u5EFA\u4E00\u4E2Avue\u7684\u7EC4\u4EF6\u5E93\u5F00\u53D1\u7F51\u7AD9"),C=i("007vueUse\u662Fvue\u4E2D\u597D\u7528\u7684\u51FD\u6570\u5E93\u7EC4\u4EF6\u96C6\u5408\u8BF4\u660E"),w=e("h2",{id:"\u56DE\u5230\u535A\u5BA2\u4E3B\u9875",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u56DE\u5230\u535A\u5BA2\u4E3B\u9875","aria-hidden":"true"},"#"),i(" \u56DE\u5230\u535A\u5BA2\u4E3B\u9875")],-1),j=i("\u535A\u5BA2\u9996\u9875"),S=a(`<h3 id="_001-vue3\u4E2D\u4F7F\u7528jsx\u548Ctsx\u7684\u65B9\u5F0F\u5199\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_001-vue3\u4E2D\u4F7F\u7528jsx\u548Ctsx\u7684\u65B9\u5F0F\u5199\u7EC4\u4EF6" aria-hidden="true">#</a> 001.vue3\u4E2D\u4F7F\u7528jsx\u548Ctsx\u7684\u65B9\u5F0F\u5199\u7EC4\u4EF6</h3><p>\u5728 setup \u4E2D\u901A\u8FC7\u51FD\u6570\u8FD4\u56DE\uFF0C\u8981\u4E0D\u5C31\u5728 render \u51FD\u6570\u4E2D\u5B9E\u73B0</p><h4 id="\u6848\u4F8B1" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B1" aria-hidden="true">#</a> \u6848\u4F8B1</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const  Foo = {
    setup\uFF08\uFF09{
        const count = ref(0);
        //// \u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570
    // \u5982\u679C\u662F\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u7684\u8BDD\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5176\u5B9E\u53EF\u4EE5\u770B\u505A view \u548C model \u4E4B\u95F4\u7684\u63A5\u53E3\u5C42\uFF0C\u4F46\u662F\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\u7684\u8BDD\uFF0C\u5C31\u7834\u574F\u4E86
    // \u5FC5\u987B\u5BF9 ref \u7C7B\u578B\u7684\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4F7F\u7528 .value
        return ()=&gt;{
            &lt;div&gt;{count.value}&lt;/div&gt;
        }
    }
}



\u5728 setup \u4E2D\u76F4\u63A5\u8FD4\u56DE\u7684\u8BDD\uFF0C\u5176\u5B9E\u662F\u7834\u574F\u4E86 setup \u8FD4\u56DE\u5BF9\u8C61\u4F5C\u4E3A view \u548C model \u5C42\u7684\u63A5\u53E3\uFF0C\u800C\u4E14\u5982\u679C\u662F ref \u7C7B\u578B\u7684\u54CD\u5E94\u5F0F\u5BF9\u8C61\u7684\u8BDD\uFF0C\u4F60\u8FD8\u5FC5\u987B\u4F7F\u7528 .value ,\u4EAB\u53D7\u4E0D\u5230\u7ED3\u6784 ref \u4E86\u3002\u4F60\u4F1A\u53D1\u73B0\u4F60\u7684\u4EE3\u7801\u53EF\u8BFB\u6027\u6781\u5DEE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6848\u4F8B2</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// render \u4E2D\u5B9E\u73B0
const Foo = {
   setup(){
    const count = ref(0) 
    return {count}
   },
   render(ctx){
     // \u5FC5\u987B\u8C03\u7528 ctx
     return &lt;div&gt;{ctx.count}&lt;/div&gt;
   }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u603B\u7ED3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u5BF9\u4E8E\u6211\u6765\u8BB2 \u53EF\u8BFB\u6027\u5927\u4E8E\u7075\u6D3B\u6027

\u800C\u4E14 templete \u4F1A\u4EAB\u53D7\u5230\u6240\u6709\u7684\u7F16\u8BD1\u4F18\u5316

\u4E0D\u7BA1\u662F\u4ECE\u53EF\u8BFB\u6027\u4E0A\u8FD8\u662F\u6027\u80FD\u4E0A\u6211\u90FD\u63A8\u8350\u4F18\u5148\u4F7F\u7528 templete \u3002

\u5F53\u903B\u8F91\u5FC5\u987B\u8981\u7528 jsx/tsx \u6765\u5B9E\u73B0\u7684\u8BDD\u518D\u4E0A\u3002
\uFF08JSX \u7684\u8868\u8FBE\u80FD\u529B\u6BD4 template \u66F4\u5F3A\u3002
JSX \u8868\u8FBE\u80FD\u529B\u7684\u4E0A\u9650\u662F JS \u8BED\u8A00\u672C\u8EAB\uFF0C\u800C template \u8868\u8FBE\u80FD\u529B\u7684\u4E0A\u9650\u662F Vue \u7684\u5404\u79CD\u6307\u4EE4\u5982 v-if v-for v-bind \uFF09

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_002\u4E24\u4E2Avue3\u7EC4\u4EF6\u573A\u666F\u4F7F\u7528jsx\u66F4\u4F73" tabindex="-1"><a class="header-anchor" href="#_002\u4E24\u4E2Avue3\u7EC4\u4EF6\u573A\u666F\u4F7F\u7528jsx\u66F4\u4F73" aria-hidden="true">#</a> 002\u4E24\u4E2Avue3\u7EC4\u4EF6\u573A\u666F\u4F7F\u7528jsx\u66F4\u4F73</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u573A\u666F1
\u6839\u636E props \u4E0A\u7684 reverse \u5C5E\u6027\uFF0C\u6765\u51B3\u5B9A\u662F\u5426\u8981\u8C03\u6362\u4E24\u5757\u5185\u5BB9\u7684\u6E32\u67D3\u987A\u5E8F
const renderContent = () =&gt; {
  const Content = [
    &lt;div class=&quot;foo&quot;&gt;Foo DOM...&lt;/div&gt;,
    &lt;div class=&quot;bar&quot;&gt;Bar DOM...&lt;/div&gt;,
  ];
  if (props.reverse) {
    Content.reverse();
  }
  return &lt;div&gt;{Content}&lt;/div&gt;;
}

//\u901A\u8FC7\u6A21\u677F\u5B9E\u73B0
&lt;template&gt;
  &lt;div&gt;
    &lt;template v-if=&quot;reverse&quot;&gt;
      &lt;div class=&quot;bar&quot;&gt;Bar DOM...&lt;/div&gt;
      &lt;div class=&quot;foo&quot;&gt;Foo DOM...&lt;/div&gt;
    &lt;/template&gt;
    &lt;template v-else&gt;
      &lt;div class=&quot;foo&quot;&gt;Foo DOM...&lt;/div&gt;
      &lt;div class=&quot;bar&quot;&gt;Bar DOM...&lt;/div&gt;
    &lt;/template&gt;
  &lt;/div&gt;
&lt;/template&gt;

\u573A\u666F2
\u5982\u679C\u505A\u4E00\u4E2Atable\u7EC4\u4EF6\uFF0C\u652F\u6301cell\u81EA\u5B9A\u4E49
&lt;MyTable cellRender={(data)=&gt;&lt;strong&gt;{data.icon} {data.text}&lt;/strong&gt;}

\u5982\u679C\u9700\u8981template\u7684\u8BDD\uFF0C\u53EA\u80FD\u901A\u8FC7slot,\u5728slot\u91CC\u9762\u4F7F\u7528\u4E2D\u95F4\u53D8\u91CF\u3002
&lt;template&gt;
    &lt;table class=&quot;jeremy-table&quot; :bordered=&quot;bordered&quot;&gt;
        &lt;slot&gt;&lt;/slot&gt;
    &lt;/table&gt;
&lt;/template&gt;

\u7136\u540E\u5012\u5165\u540E
&lt;nyh-table&gt;
    &lt;template v-slot=&quot;header&quot;&gt;
        &lt;span&gt;\u5FEB\u901F\u6392\u5E8F\u7B97\u6CD5&lt;/span&gt;
    &lt;/template&gt;
&lt;/nyh-table&gt;




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_003\u4F7F\u7528vite\u6216\u662Fwebpack\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u6846\u67B6-\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_003\u4F7F\u7528vite\u6216\u662Fwebpack\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u6846\u67B6-\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u4F4D\u7F6E" aria-hidden="true">#</a> 003\u4F7F\u7528vite\u6216\u662Fwebpack\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u6846\u67B6:\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u4F4D\u7F6E</h3><h4 id="vite\u7248\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#vite\u7248\u672C\u4F7F\u7528" aria-hidden="true">#</a> vite\u7248\u672C\u4F7F\u7528</h4><p>\u6CE8\u610F\u4E00\u4E2A\u517C\u5BB9\u6027\u95EE\u9898\uFF1A\u5BF9\u4E8E\u81EA\u52A8\u5BFC\u5165api\u7684auto\u63D2\u4EF6\u6709\u51B2\u7A81\uFF0C node14.3\u7248\u672C\u4EE5\u4E0A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   // \u5F15\u5165\u53EA\u9700\u5982\u4E0B\u4E09\u6B65
    //1\u3001install package
    yarn add @guijixing/vue-code-link --dev
    //2\u3001vite.config.js//\u6CE8\u610F\u5982\u679Cvite\u6846\u67B6\uFF0C\u4E00\u5B9A\u653E\u5728vue()\u63D2\u4EF6\u524D\uFF0C\u6700\u524D\u9762
    import { openCodeServer, addCodeLocation } from &#39;@guijixing/vue-code-link&#39;;
    export default ({ command, mode }: ConfigEnv): UserConfig =&gt; {
        ...
        const isBuild = command === &#39;build&#39;;
        const codePlugins = !isBuild ? [openCodeServer(), addCodeLocation()] : [];
        return {
            base: VITE_PUBLIC_PATH,
            root,
            resolve: {
            alias: [
                {
                    find: &#39;vue-i18n&#39;,
                    replacement: &#39;vue-i18n/dist/vue-i18n.cjs.js&#39;
                },
                ...
            ],
            ...///\u6CE8\u610F\u63D2\u4EF6\u9700\u8981\u653E\u5728\u6700\u524D\u9762
            plugins:[...codePlugins,...]
            ...
        }
    }

    //3\u3001main.js
    import { openCodeClient } from &#39;@guijixing/vue-code-link&#39;
    openCodeClient.init()


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="webpack\u7248\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#webpack\u7248\u672C\u4F7F\u7528" aria-hidden="true">#</a> webpack\u7248\u672C\u4F7F\u7528</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> \u5F15\u5165\u53EA\u9700\u5982\u4E0B\u4E09\u6B65
    //1\u3001install package
    npm install -s @linzhinan/vue-code-link
    //2\u3001vue.config.js
    const { vueCodeLinkServer, vueCodeLinkLoaderConfig } = require(&#39;@linzhinan/vue-code-link&#39;)
    module.exports = {
        ...
        devServer: {
          ...
          //\u6DFB\u52A0\u76D1\u542C\u670D\u52A1
          before: vueCodeLinkServer.before
        },
        ...
        chainWebpack(config) {
          //\u6DFB\u52A0vue-code-link\u5904\u7406\u5668
          vueCodeLinkLoaderConfig.addVueCodeLinkLoader(config)
          ...
        }
    }
    //3\u3001main.js
    import { vueCodeLinkClient } from &#39;@linzhinan/vue-code-link&#39;
    vueCodeLinkClient.init()



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4ED6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
vscode\u4E2D\u8DF3\u8F6C\u5230\u5F53\u524D\u7684dom\u7684react\u9879\u76EE
react-page-click - npm (npmjs.com)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_004vue\u4E2D\u4E22\u5931\u54CD\u5E94\u5F0F\u7684\u4E09\u79CD\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_004vue\u4E2D\u4E22\u5931\u54CD\u5E94\u5F0F\u7684\u4E09\u79CD\u573A\u666F" aria-hidden="true">#</a> 004vue\u4E2D\u4E22\u5931\u54CD\u5E94\u5F0F\u7684\u4E09\u79CD\u573A\u666F</h3><h3 id="_005vue-router\u4E2D\u7684\u65B9\u6CD5\u8C03\u7528-\u5F53\u524D\u8DEF\u7531\u53D8\u5316\u76D1\u542C" tabindex="-1"><a class="header-anchor" href="#_005vue-router\u4E2D\u7684\u65B9\u6CD5\u8C03\u7528-\u5F53\u524D\u8DEF\u7531\u53D8\u5316\u76D1\u542C" aria-hidden="true">#</a> 005vue-router\u4E2D\u7684\u65B9\u6CD5\u8C03\u7528\uFF1A\u5F53\u524D\u8DEF\u7531\u53D8\u5316\u76D1\u542C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { useRoute, onBeforeRouteUpdate } from &#39;vue-router&#39;;
\u8FD9\u91CC\u662F\u5F53\u524D\u7684\u8DEF\u7531\u9875\u9762\u53D8\u5316\u7684\u76D1\u542C\uFF0C\u8FD9\u91CC\u8DEF\u7531\u53D8\u5316\uFF0C\u76F4\u63A5\u4F7F\u7528onBeforeRouteUpdate

onBeforeRouteUpdate\u8DEF\u7531\u5B88\u536B

onBeforeRouteUpdate\u8DEF\u7531\u5B88\u536B
import { useRouter,onBeforeRouteUpdate } from &#39;vue-router&#39;;
//------\u65B9\u6CD51\uFF1A\u8DEF\u7531\u5207\u6362
let router = useRouter()
onBeforeRouteUpdate((to) =&gt; {
        // console.log(&#39;onBeforeRouteUpdate&#39;,to.path);     
 });
//\u65B9\u6CD52\uFF1A-----
watch\u76D1\u542C
watch(() =&gt;router.currentRoute.value.path,(newValue,oldValue)=&gt; {
        console.log(&#39;watch&#39;,newValue);
},{ immediate: true })
//\u65B9\u6CD53\uFF1AonUpdated
\u4F7F\u7528\u751F\u547D\u5468\u671F\u51FD\u6570\u8FDB\u884C\u76D1\u542C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_006vue3\u521B\u5EFA\u811A\u624B\u67B6\u7684\u6700\u65B0\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_006vue3\u521B\u5EFA\u811A\u624B\u67B6\u7684\u6700\u65B0\u547D\u4EE4" aria-hidden="true">#</a> 006vue3\u521B\u5EFA\u811A\u624B\u67B6\u7684\u6700\u65B0\u547D\u4EE4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u521B\u5EFAvite\u7684\u9879\u76EE\u7684vue\u811A\u624B\u67B6
\u7B2C\u4E00\u6B65\uFF1Anpm create vite@latest   \uFF08 npm init vite@latest  =&gt;  npx create-vite\uFF09
\u7B2C\u4E8C\u6B65\uFF1A\u589E\u52A0eslint\u548Cpreffer
yarn create vite-pretty-lint//\u53EF\u80FD\u4F1A\u62A5\u9519\uFF0C\u8BD5\u8BD5npm
// NPM
npm create vite-pretty-lint


\u521B\u5EFAwebpack\u7684\u9879\u76EE\u811A\u624B\u67B6
npm install -g @vue/cli  // \u66F4\u65B0
vue create  \u9879\u76EE\u540D\u79F0



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_006\u642D\u5EFA\u4E00\u4E2Avue\u7684\u7EC4\u4EF6\u5E93\u5F00\u53D1\u7F51\u7AD9" tabindex="-1"><a class="header-anchor" href="#_006\u642D\u5EFA\u4E00\u4E2Avue\u7684\u7EC4\u4EF6\u5E93\u5F00\u53D1\u7F51\u7AD9" aria-hidden="true">#</a> 006\u642D\u5EFA\u4E00\u4E2Avue\u7684\u7EC4\u4EF6\u5E93\u5F00\u53D1\u7F51\u7AD9</h3><p>\u8FD9\u4E2A\u53EF\u4EE5\u5C06\u7EC4\u5EFA\u5E93\u8BF4\u660E\u6587\u6863\u8BBE\u8BA1\u7684\u975E\u5E38\u597D\uFF0C\u600E\u6837\u4F7F\u7528\uFF0C\u600E\u4E48\u8C03\u7528\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>

\u521B\u5EFA\u4E00\u4E2AstorybookV3\u7248\u672C\u7684\u7EC4\u4EF6\u5E93
\u9996\u5148\u7528\u4E0A\u9762\u7684vite\u521B\u5EFA\u9879\u76EE\uFF0C\u7136\u540E\u589E\u52A0npx sb init\u547D\u4EE4\u540E\uFF0C\u8FDB\u884C\u67E5\u770B\uFF0C\u4E00\u822C\u6CA1\u6709\u95EE\u9898\u4E86\u3002
\u8FD0\u884C\u7EC4\u4EF6\u5E93\u540E\uFF0C npm run storybook

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),q={href:"https://gitee.com/nyhxiaoning/storyBookVue3Vue2lib.git",target:"_blank",rel:"noopener noreferrer"},L=i("\u7EC4\u4EF6\u5E93\u6848\u4F8B\u5730\u5740"),B=a(`<h3 id="_007vueuse\u662Fvue\u4E2D\u597D\u7528\u7684\u51FD\u6570\u5E93\u7EC4\u4EF6\u96C6\u5408\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_007vueuse\u662Fvue\u4E2D\u597D\u7528\u7684\u51FD\u6570\u5E93\u7EC4\u4EF6\u96C6\u5408\u8BF4\u660E" aria-hidden="true">#</a> 007vueUse\u662Fvue\u4E2D\u597D\u7528\u7684\u51FD\u6570\u5E93\u7EC4\u4EF6\u96C6\u5408\u8BF4\u660E</h3><h4 id="vueuse\u5E93\u4E2D\u597D\u7528\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#vueuse\u5E93\u4E2D\u597D\u7528\u529F\u80FD" aria-hidden="true">#</a> vueUse\u5E93\u4E2D\u597D\u7528\u529F\u80FD</h4><p>Utilities\u5DE5\u5177\u5408\u96C6 useDebounceFn useThrottleFn useToggle</p><p>useEventBus-\u4F7F\u7528\u4E8B\u4EF6\u603B\u7EBF\uFF1A useBase64---\u5185\u5BB9\u8F6C\u6362\u6210base64 createEventHook---\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2Aevent\u4E8B\u4EF6hook</p><p>component\u7EC4\u4EF6\u4F7F\u7528\u529F\u80FD useVModels---\u5B50\u7EC4\u4EF6\u5FEB\u901F\u4F7F\u7528vmodel\u7684\u5B57\u6BB5\u66F4\u65B0\u548C\u53D8\u5316 useDateFormat---\u683C\u5F0F\u5316\u65E5\u671F\u5DE5\u5177</p><p>\u9632\u6296\u8282\u6D41\u7684\u4F7F\u7528\uFF1AuseDebounceFn\u548CuseThrooleFn</p><p>\u4E8B\u4EF6\u603B\u7EBF\u5FEB\u901F\u4F7F\u7528\uFF1AuseEmit</p><p>\u76D1\u542C\u64CD\u4F5C\u9875\u9762windows.document\u4E4B\u5916\u7684\u5185\u5BB9\uFF0C\u6BD4\u5982console\u63A7\u5236\u53F0\uFF0C\uFF1AuseWindowFocus \u8FFD\u8E2A\u4E86\u5F53\u524D\u7684\u64CD\u4F5C\uFF0C\u70B9\u51FB\u4E86document\u7684\u5185\u5BB9\uFF0Curl\u7684\u53D8\u5316\u89E6\u53D1\u6D4F\u89C8\u5668\u8F93\u5165\uFF0C</p><p>\u76D1\u542C\u5F53\u524D\u7684\u62D6\u52A8\u4E86\u6D4F\u89C8\u5668\u7684\u5927\u5C0F\uFF1AuseWindowSize</p><p>useColorMode\u4E00\u952E\u5207\u6362\u5F53\u524D\u7684\u4E3B\u9898\u8272\uFF1AuseColorMode</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7ED9\u5F53\u524D\u7684ref\u5143\u7D20\u6DFB\u52A0\u6837\u5F0F\u989C\u8272\u53D8\u91CF\uFF1AuseCssVar
const el = ref(null)

const color = useCssVar(&#39;--color&#39;, el)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5FEB\u901F\u4F7F\u7528\u672C\u5730\u7684\u54CD\u5E94\u5F0FlocalStorage:useLocalStorage</p><p>\u54CD\u5E94\u5F0F\u7684localStorage\u548CSessionStorage:useStorage</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u76F4\u63A5\u652F\u6301\u4F20\u5165\u5BF9\u8C61\uFF0C\u57FA\u672C\u7C7B\u578B\uFF0C\u540C\u65F6\u662F\u54CD\u5E94\u5F0F\uFF1Aconst statesss = useStorage(&#39;my-store&#39;, { hello: &#39;hi&#39;, greeting: &#39;Hello&#39; });
\u907F\u514D\u5237\u65B0\u540E\uFF0C\u4E00\u4E9B\u5185\u5BB9\u4E22\u5931\uFF0C\u8FD9\u6837\u4F7F\u7528useLocalStorage\uFF0C\u7136\u540E\u53D6\u7684\u65F6\u5019\u4F7F\u7528localStorage.getItem,\u518D\u6B21\u4FEE\u6539\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>useDraggle\u4E2D\u4F7F\u7528\u4E00\u4E2A\u7EC4\u4EF6\u5F15\u5165\u9700\u8981\u62D6\u52A8\u7684\u5143\u7D20 \u5FC5\u987B\u4F7F\u7528\u7EC4\u4EF6</p><p>\u76D1\u542C\u5F53\u524D\u5904\u4E8E\u6D3B\u52A8\u7684dom\u5143\u7D20</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const activeElement = useActiveElement()
watch(activeElement, (el) =&gt; {
  console.log(&#39;focus changed to&#39;, el)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u589E\u52A0\u63D2\u4EF6vueuse\u7684\u4F7F\u7528\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u589E\u52A0\u63D2\u4EF6vueuse\u7684\u4F7F\u7528\u6848\u4F8B" aria-hidden="true">#</a> \u589E\u52A0\u63D2\u4EF6vueUse\u7684\u4F7F\u7528\u6848\u4F8B</h4><ul><li>useFileDialog\uFF0C\u4F7F\u7528\u5FEB\u901F\u7684\u5F39\u7A97\u4E0A\u4F20\u6587\u4EF6\uFF0C\u64CD\u4F5C\u3002</li><li>useFileSystemAccess ,\u4F7F\u7528\u4E0D\u540C\u7684\u6570\u636E\u683C\u5F0F\u4E0A\u4F20\u5F53\u524D\u7684\u6587\u4EF6</li><li>useTextareaAutosize textarea\u81EA\u52A8\u6839\u636E\u5185\u5BB9\u6539\u53D8\u5927\u5C0F</li><li>useShare\u4F7F\u7528\u6D4F\u89C8\u5668\u652F\u6301\u7684\u5206\u4EAB</li><li>useScriptTag\u4F7F\u7528\u6CE8\u5165\u7684js\u811A\u672C</li><li>useScreenOrientation\u83B7\u53D6\u5F53\u524D\u7684\u5C4F\u5E55\u65B9\u5411\uFF0Ch5\u4E2D\u6709\u7528</li><li>useObjectUrl\u5C06\u4E00\u4E2A\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u6216\u662F\u5A92\u4F53\u6587\u4EF6\u901A\u8FC7\u521B\u5EFAObjectURL\u81EA\u52A8\u751F\u6210\u3002</li><li>useWebNotification\u901A\u8FC7\u6D4F\u89C8\u5668\u53D1\u9001\u4E00\u4E2A\u901A\u77E5\u4E2Awindows</li><li>useMediaControls\u5236\u4F5C\u4E00\u4E2A\u7B80\u5355\u7684\u5A92\u4F53\u64AD\u653E\u5668</li><li>useFullscreen\u4F7F\u7528\u5F53\u524D\u7684\u5168\u5C4F</li><li>useMouseInElement\u5143\u7D20\u4F4D\u7F6E\u8BB0\u5F55</li></ul>`,19);function U(V,R){const l=d("RouterLink"),v=d("ExternalLinkIcon");return u(),c("div",null,[m,e("nav",b,[e("ul",null,[e("li",null,[n(l,{to:"#\u56DE\u5230\u535A\u5BA2\u4E3B\u9875"},{default:s(()=>[p]),_:1}),e("ul",null,[e("li",null,[n(l,{to:"#_001-vue3\u4E2D\u4F7F\u7528jsx\u548Ctsx\u7684\u65B9\u5F0F\u5199\u7EC4\u4EF6"},{default:s(()=>[g]),_:1})]),e("li",null,[n(l,{to:"#_003\u4F7F\u7528vite\u6216\u662Fwebpack\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u6846\u67B6-\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u4F4D\u7F6E"},{default:s(()=>[h]),_:1})]),e("li",null,[n(l,{to:"#_004vue\u4E2D\u4E22\u5931\u54CD\u5E94\u5F0F\u7684\u4E09\u79CD\u573A\u666F"},{default:s(()=>[x]),_:1})]),e("li",null,[n(l,{to:"#_005vue-router\u4E2D\u7684\u65B9\u6CD5\u8C03\u7528-\u5F53\u524D\u8DEF\u7531\u53D8\u5316\u76D1\u542C"},{default:s(()=>[_]),_:1})]),e("li",null,[n(l,{to:"#_006vue3\u521B\u5EFA\u811A\u624B\u67B6\u7684\u6700\u65B0\u547D\u4EE4"},{default:s(()=>[f]),_:1})]),e("li",null,[n(l,{to:"#_006\u642D\u5EFA\u4E00\u4E2Avue\u7684\u7EC4\u4EF6\u5E93\u5F00\u53D1\u7F51\u7AD9"},{default:s(()=>[k]),_:1})]),e("li",null,[n(l,{to:"#_007vueuse\u662Fvue\u4E2D\u597D\u7528\u7684\u51FD\u6570\u5E93\u7EC4\u4EF6\u96C6\u5408\u8BF4\u660E"},{default:s(()=>[C]),_:1})])])])])]),w,e("p",null,[n(l,{to:"/"},{default:s(()=>[j]),_:1})]),S,e("p",null,[e("a",q,[L,n(v)])]),B])}var M=r(o,[["render",U],["__file","005vue3\u7ECF\u5178\u5F00\u53D1\u603B\u7ED3\u6848\u4F8B\uFF0802\uFF09.html.vue"]]);export{M as default};
