import{_ as a}from"./home.38846c8f.js";import{_ as t,r as s,o as r,c as u,a as e,b as i,w as d,e as n,d as c}from"./app.99cc9b2a.js";const o={},m=e("p",null,[e("img",{src:a,alt:"\u6210\u957F"})],-1),b={class:"table-of-contents"},p=n("\u56DE\u5230\u535A\u5BA2\u4E3B\u9875"),g=n("001.vue3\u4E2D\u4F7F\u7528jsx\u548Ctsx\u7684\u65B9\u5F0F\u5199\u7EC4\u4EF6"),h=n("003\u4F7F\u7528vite\u6216\u662Fwebpack\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u6846\u67B6:\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u4F4D\u7F6E"),_=n("004vue\u4E2D\u4E22\u5931\u54CD\u5E94\u5F0F\u7684\u4E09\u79CD\u573A\u666F"),x=n("005vue-router\u4E2D\u7684\u65B9\u6CD5\u8C03\u7528\uFF1A\u5F53\u524D\u8DEF\u7531\u53D8\u5316\u76D1\u542C"),f=n("006vue3\u521B\u5EFA\u811A\u624B\u67B6\u7684\u6700\u65B0\u547D\u4EE4"),k=n("006\u642D\u5EFA\u4E00\u4E2Avue\u7684\u7EC4\u4EF6\u5E93\u5F00\u53D1\u7F51\u7AD9"),C=e("h2",{id:"\u56DE\u5230\u535A\u5BA2\u4E3B\u9875",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u56DE\u5230\u535A\u5BA2\u4E3B\u9875","aria-hidden":"true"},"#"),n(" \u56DE\u5230\u535A\u5BA2\u4E3B\u9875")],-1),q=n("\u535A\u5BA2\u9996\u9875"),j=c(`<h3 id="_001-vue3\u4E2D\u4F7F\u7528jsx\u548Ctsx\u7684\u65B9\u5F0F\u5199\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_001-vue3\u4E2D\u4F7F\u7528jsx\u548Ctsx\u7684\u65B9\u5F0F\u5199\u7EC4\u4EF6" aria-hidden="true">#</a> 001.vue3\u4E2D\u4F7F\u7528jsx\u548Ctsx\u7684\u65B9\u5F0F\u5199\u7EC4\u4EF6</h3><p>\u5728 setup \u4E2D\u901A\u8FC7\u51FD\u6570\u8FD4\u56DE\uFF0C\u8981\u4E0D\u5C31\u5728 render \u51FD\u6570\u4E2D\u5B9E\u73B0</p><h4 id="\u6848\u4F8B1" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B1" aria-hidden="true">#</a> \u6848\u4F8B1</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const  Foo = {
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



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_006\u642D\u5EFA\u4E00\u4E2Avue\u7684\u7EC4\u4EF6\u5E93\u5F00\u53D1\u7F51\u7AD9" tabindex="-1"><a class="header-anchor" href="#_006\u642D\u5EFA\u4E00\u4E2Avue\u7684\u7EC4\u4EF6\u5E93\u5F00\u53D1\u7F51\u7AD9" aria-hidden="true">#</a> 006\u642D\u5EFA\u4E00\u4E2Avue\u7684\u7EC4\u4EF6\u5E93\u5F00\u53D1\u7F51\u7AD9</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>

\u521B\u5EFA\u4E00\u4E2AstorybookV3\u7248\u672C\u7684\u7EC4\u4EF6\u5E93
\u9996\u5148\u7528\u4E0A\u9762\u7684vite\u521B\u5EFA\u9879\u76EE\uFF0C\u7136\u540E\u589E\u52A0npx sb init\u547D\u4EE4\u540E\uFF0C\u8FDB\u884C\u67E5\u770B\uFF0C\u4E00\u822C\u6CA1\u6709\u95EE\u9898\u4E86\u3002
\u8FD0\u884C\u7EC4\u4EF6\u5E93\u540E\uFF0C npm run storybook

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),w={href:"https://gitee.com/nyhxiaoning/storyBookVue3Vue2lib.git",target:"_blank",rel:"noopener noreferrer"},B=n("\u7EC4\u4EF6\u5E93\u6848\u4F8B\u5730\u5740");function L(R,V){const l=s("RouterLink"),v=s("ExternalLinkIcon");return r(),u("div",null,[m,e("nav",b,[e("ul",null,[e("li",null,[i(l,{to:"#\u56DE\u5230\u535A\u5BA2\u4E3B\u9875"},{default:d(()=>[p]),_:1}),e("ul",null,[e("li",null,[i(l,{to:"#_001-vue3\u4E2D\u4F7F\u7528jsx\u548Ctsx\u7684\u65B9\u5F0F\u5199\u7EC4\u4EF6"},{default:d(()=>[g]),_:1})]),e("li",null,[i(l,{to:"#_003\u4F7F\u7528vite\u6216\u662Fwebpack\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u6846\u67B6-\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u4F4D\u7F6E"},{default:d(()=>[h]),_:1})]),e("li",null,[i(l,{to:"#_004vue\u4E2D\u4E22\u5931\u54CD\u5E94\u5F0F\u7684\u4E09\u79CD\u573A\u666F"},{default:d(()=>[_]),_:1})]),e("li",null,[i(l,{to:"#_005vue-router\u4E2D\u7684\u65B9\u6CD5\u8C03\u7528-\u5F53\u524D\u8DEF\u7531\u53D8\u5316\u76D1\u542C"},{default:d(()=>[x]),_:1})]),e("li",null,[i(l,{to:"#_006vue3\u521B\u5EFA\u811A\u624B\u67B6\u7684\u6700\u65B0\u547D\u4EE4"},{default:d(()=>[f]),_:1})]),e("li",null,[i(l,{to:"#_006\u642D\u5EFA\u4E00\u4E2Avue\u7684\u7EC4\u4EF6\u5E93\u5F00\u53D1\u7F51\u7AD9"},{default:d(()=>[k]),_:1})])])])])]),C,e("p",null,[i(l,{to:"/"},{default:d(()=>[q]),_:1})]),j,e("p",null,[e("a",w,[B,i(v)])])])}var S=t(o,[["render",L],["__file","005vue3\u7ECF\u5178\u5F00\u53D1\u603B\u7ED3\u6848\u4F8B\uFF0802\uFF09.html.vue"]]);export{S as default};
