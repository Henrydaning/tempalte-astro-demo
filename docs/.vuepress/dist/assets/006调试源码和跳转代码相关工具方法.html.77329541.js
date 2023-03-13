import{_ as r}from"./home.d4d9b4a0.js";import{_ as t,r as l,o as c,c as o,a as e,b as i,w as s,e as n,d as v}from"./app.5805b0e6.js";const u={},m=e("p",null,[e("img",{src:r,alt:"\u6210\u957F"})],-1),_={class:"table-of-contents"},b=n("\u56DE\u5230\u535A\u5BA2\u4E3B\u9875"),h=n("IDE\u8DF3\u8F6C\u9875\u9762\u4EE3\u7801\u4F4D\u7F6E\uFF1AReact+Vue\u9879\u76EE\u90FD\u6709\u4F7F\u7528"),p=n("003\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u4F4D\u7F6E\uFF1A\u5FEB\u901F\u627E\u5230\u9875\u9762\u4E2D\u7EC4\u4EF6"),g=n("002\u5FEB\u901Fdebug"),f=e("h2",{id:"\u56DE\u5230\u535A\u5BA2\u4E3B\u9875",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u56DE\u5230\u535A\u5BA2\u4E3B\u9875","aria-hidden":"true"},"#"),n(" \u56DE\u5230\u535A\u5BA2\u4E3B\u9875")],-1),x=n("\u535A\u5BA2\u9996\u9875"),k=e("h2",{id:"ide\u8DF3\u8F6C\u9875\u9762\u4EE3\u7801\u4F4D\u7F6E-react-vue\u9879\u76EE\u90FD\u6709\u4F7F\u7528",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ide\u8DF3\u8F6C\u9875\u9762\u4EE3\u7801\u4F4D\u7F6E-react-vue\u9879\u76EE\u90FD\u6709\u4F7F\u7528","aria-hidden":"true"},"#"),n(" IDE\u8DF3\u8F6C\u9875\u9762\u4EE3\u7801\u4F4D\u7F6E\uFF1AReact+Vue\u9879\u76EE\u90FD\u6709\u4F7F\u7528")],-1),C={href:"https://app.yinxiang.com/shard/s37/nl/24388549/a5c0bcf2-daeb-4777-8bea-f2ba2d906651",target:"_blank",rel:"noopener noreferrer"},E=n("IDE\u8DF3\u8F6C\u4EE3\u7801\u4F4D\u7F6E"),j=n(" [000---\u70B9\u51FB\u9875\u9762\u5143\u7D20\u8DF3\u8F6CIDE\u5BF9\u5E94\u4EE3\u7801\uFF0C\u8BD5\u8BD5\u8FD9\u51E0\u4E2A\u5DE5\u5177\uFF01]"),I=v(`<h3 id="_003\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u4F4D\u7F6E-\u5FEB\u901F\u627E\u5230\u9875\u9762\u4E2D\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_003\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u4F4D\u7F6E-\u5FEB\u901F\u627E\u5230\u9875\u9762\u4E2D\u7EC4\u4EF6" aria-hidden="true">#</a> 003\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u4F4D\u7F6E\uFF1A\u5FEB\u901F\u627E\u5230\u9875\u9762\u4E2D\u7EC4\u4EF6</h3><p>\u6CE8\u610F\u4E00\u4E2A\u517C\u5BB9\u6027\u95EE\u9898\uFF1A\u5BF9\u4E8E\u81EA\u52A8\u5BFC\u5165api\u7684auto\u63D2\u4EF6\u6709\u51B2\u7A81\uFF0C node14.3\u7248\u672C\u4EE5\u4E0A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   // \u5F15\u5165\u53EA\u9700\u5982\u4E0B\u4E09\u6B65
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4ED6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
vscode\u4E2D\u8DF3\u8F6C\u5230\u5F53\u524D\u7684dom\u7684react\u9879\u76EE
react-page-click - npm (npmjs.com)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_002\u5FEB\u901Fdebug" tabindex="-1"><a class="header-anchor" href="#_002\u5FEB\u901Fdebug" aria-hidden="true">#</a> 002\u5FEB\u901Fdebug</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vscode\u4E2Ddebugger\uFF0Creact\u9879\u76EE\u76F4\u63A5\u52A0launch\u540E\u3002

vue\u9879\u76EE\u4E00\u822C\u52A0\u4E0A\u540E\uFF0C\u5982\u679C\u4E0D\u53EF\u4EE5\uFF0C\u9700\u8981\u52A0\u4E00\u4E9B\u914D\u7F6E
&quot;sourceMapPathOverrides&quot;: {
&quot;webpack://?:*/*&quot;: &quot;\${workspaceFolder}/*&quot;
}
\u5426\u5219\u5C31\u662F\u9ED8\u8BA4\u7684webRoot



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function L(V,q){const d=l("RouterLink"),a=l("ExternalLinkIcon");return c(),o("div",null,[m,e("nav",_,[e("ul",null,[e("li",null,[i(d,{to:"#\u56DE\u5230\u535A\u5BA2\u4E3B\u9875"},{default:s(()=>[b]),_:1})]),e("li",null,[i(d,{to:"#ide\u8DF3\u8F6C\u9875\u9762\u4EE3\u7801\u4F4D\u7F6E-react-vue\u9879\u76EE\u90FD\u6709\u4F7F\u7528"},{default:s(()=>[h]),_:1}),e("ul",null,[e("li",null,[i(d,{to:"#_003\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u4F4D\u7F6E-\u5FEB\u901F\u627E\u5230\u9875\u9762\u4E2D\u7EC4\u4EF6"},{default:s(()=>[p]),_:1})])])]),e("li",null,[i(d,{to:"#_002\u5FEB\u901Fdebug"},{default:s(()=>[g]),_:1})])])]),f,e("p",null,[i(d,{to:"/"},{default:s(()=>[x]),_:1})]),k,e("p",null,[e("a",C,[E,i(a)]),j]),I])}var P=t(u,[["render",L],["__file","006\u8C03\u8BD5\u6E90\u7801\u548C\u8DF3\u8F6C\u4EE3\u7801\u76F8\u5173\u5DE5\u5177\u65B9\u6CD5.html.vue"]]);export{P as default};
