import{_ as l}from"./home.d4d9b4a0.js";import{_ as a,r as t,o as r,c,a as e,b as s,w as d,e as i,d as u}from"./app.74aa4554.js";const v={},o=e("p",null,[e("img",{src:l,alt:"\u6210\u957F"})],-1),m={class:"table-of-contents"},h=i("\u56DE\u5230\u535A\u5BA2\u4E3B\u9875"),b=i("003\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u4F4D\u7F6E\uFF1A\u5FEB\u901F\u627E\u5230\u9875\u9762\u4E2D\u7EC4\u4EF6"),_=i("002\u5FEB\u901Fdebug"),p=i("004\u589E\u52A0\u4EE3\u7406\u670D\u52A1\u5668\u7684\u5B66\u4E60whistle"),g=i("\uFF081\uFF09\u4E2A\u4EBA\u5E38\u7528\u7684\u5B9E\u73B0\u573A\u666F"),x=i("\uFF082\uFF09\u6D4F\u89C8\u5668\u4EE3\u7406"),f=i("\uFF083\uFF09\u6D4F\u89C8\u5668\u7684whistle\u754C\u9762"),w=i("\uFF084\uFF09\u6CE8\u610F\u5F00\u542F\u540E\uFF0C\u5982\u679C\u4EE3\u7406\u5730\u5740\u540E\uFF0C\u65E0\u6CD5\u62FF\u5230\u4EFB\u610F\u5730\u5740"),k=e("h2",{id:"\u56DE\u5230\u535A\u5BA2\u4E3B\u9875",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u56DE\u5230\u535A\u5BA2\u4E3B\u9875","aria-hidden":"true"},"#"),i(" \u56DE\u5230\u535A\u5BA2\u4E3B\u9875")],-1),C=i("\u535A\u5BA2\u9996\u9875"),T=u(`<h2 id="_003\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u4F4D\u7F6E-\u5FEB\u901F\u627E\u5230\u9875\u9762\u4E2D\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_003\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u4F4D\u7F6E-\u5FEB\u901F\u627E\u5230\u9875\u9762\u4E2D\u7EC4\u4EF6" aria-hidden="true">#</a> 003\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u4F4D\u7F6E\uFF1A\u5FEB\u901F\u627E\u5230\u9875\u9762\u4E2D\u7EC4\u4EF6</h2><p>\u6CE8\u610F\u4E00\u4E2A\u517C\u5BB9\u6027\u95EE\u9898\uFF1A\u5BF9\u4E8E\u81EA\u52A8\u5BFC\u5165api\u7684auto\u63D2\u4EF6\u6709\u51B2\u7A81\uFF0C node14.3\u7248\u672C\u4EE5\u4E0A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   // \u5F15\u5165\u53EA\u9700\u5982\u4E0B\u4E09\u6B65
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_002\u5FEB\u901Fdebug" tabindex="-1"><a class="header-anchor" href="#_002\u5FEB\u901Fdebug" aria-hidden="true">#</a> 002\u5FEB\u901Fdebug</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vscode\u4E2Ddebugger\uFF0Creact\u9879\u76EE\u76F4\u63A5\u52A0launch\u540E\u3002

vue\u9879\u76EE\u4E00\u822C\u52A0\u4E0A\u540E\uFF0C\u5982\u679C\u4E0D\u53EF\u4EE5\uFF0C\u9700\u8981\u52A0\u4E00\u4E9B\u914D\u7F6E
&quot;sourceMapPathOverrides&quot;: {
&quot;webpack://?:*/*&quot;: &quot;\${workspaceFolder}/*&quot;
}
\u5426\u5219\u5C31\u662F\u9ED8\u8BA4\u7684webRoot



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_004\u589E\u52A0\u4EE3\u7406\u670D\u52A1\u5668\u7684\u5B66\u4E60whistle" tabindex="-1"><a class="header-anchor" href="#_004\u589E\u52A0\u4EE3\u7406\u670D\u52A1\u5668\u7684\u5B66\u4E60whistle" aria-hidden="true">#</a> 004\u589E\u52A0\u4EE3\u7406\u670D\u52A1\u5668\u7684\u5B66\u4E60whistle</h2><p>\u539F\u56E0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u57FA\u4E8E Node \u5B9E\u73B0\uFF0C\u8DE8\u5E73\u53F0 web \u8C03\u8BD5\u4EE3\u7406\u5DE5\u5177\uFF0Cwindow\uFF0CLinux\uFF0CMac \u90FD\u53EF\u4EE5\u4F7F\u7528
\u7528\u4E8E\u67E5\u770B\u3001\u4FEE\u6539 HTTP\u3001HTTPS\u3001Websocket \u7684\u8BF7\u6C42\u3001\u54CD\u5E94\uFF0C\u4E5F\u53EF\u4EE5\u4F5C\u4E3A HTTP \u4EE3\u7406\u670D\u52A1\u5668\u4F7F\u7528
whistle \u91C7\u7528\u7684\u662F\u7C7B\u4F3C\u914D\u7F6E\u7CFB\u7EDF hosts \u7684\u65B9\u5F0F\uFF0C\u4E00\u5207\u64CD\u4F5C\u90FD\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u5B9E\u73B0
\u53EF\u4EE5\u901A\u8FC7 Node \u6A21\u5757\u6269\u5C55\u529F\u80FD

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-\u4E2A\u4EBA\u5E38\u7528\u7684\u5B9E\u73B0\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u4E2A\u4EBA\u5E38\u7528\u7684\u5B9E\u73B0\u573A\u666F" aria-hidden="true">#</a> \uFF081\uFF09\u4E2A\u4EBA\u5E38\u7528\u7684\u5B9E\u73B0\u573A\u666F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7ED1\u5B9A Host
\u66FF\u6362\u8BF7\u6C42\uFF08Mock \u6570\u636E\uFF09
\u4F7F\u7528 Weinre \u6216\u8005 vConsole \u8C03\u8BD5\u79FB\u52A8\u7AEF\u9875\u9762
\u4FEE\u6539 cookie
\u5F80 HTML \u4E2D\u63D2\u5165\u6837\u5F0F


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u6D4F\u89C8\u5668\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#_2-\u6D4F\u89C8\u5668\u4EE3\u7406" aria-hidden="true">#</a> \uFF082\uFF09\u6D4F\u89C8\u5668\u4EE3\u7406</h3><p>\u63A8\u8350\u5B89\u88C5 SwitchyOmega \u3002\u8003\u8651\u5230\u4E00\u4E9B\u670B\u53CB\u65E0\u6CD5\u5F88\u597D\u7684\u4E0B\u8F7D\u5B89\u88C5\uFF0C\u53EF\u4EE5\u53BB \u8FD9\u91CC \u4E0B\u8F7D\u3002\u7136\u540E\u914D\u7F6E\u5982\u4E0B\uFF1A</p><h3 id="_3-\u6D4F\u89C8\u5668\u7684whistle\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#_3-\u6D4F\u89C8\u5668\u7684whistle\u754C\u9762" aria-hidden="true">#</a> \uFF083\uFF09\u6D4F\u89C8\u5668\u7684whistle\u754C\u9762</h3><p>\u4EE5\u4E0B\u662F whistle \u7684\u754C\u9762\uFF0C\u5E38\u89C1\u7684\u51E0\u4E2A\u9009\u9879\uFF1A</p><p>Network\u2014\u2014\u8BF7\u6C42\u5217\u8868\u9875\u9762</p><p>Rules\u2014\u2014\u64CD\u4F5C\u89C4\u5219\u914D\u7F6E\u9875\u9762</p><p>Values\u2014\u2014\u5B58\u653E KeyValue \u7684\u7CFB\u7EDF</p><p>Plugins\u2014\u2014\u63D2\u4EF6\u5217\u8868\u9875\u9762</p><h3 id="_4-\u6CE8\u610F\u5F00\u542F\u540E-\u5982\u679C\u4EE3\u7406\u5730\u5740\u540E-\u65E0\u6CD5\u62FF\u5230\u4EFB\u610F\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#_4-\u6CE8\u610F\u5F00\u542F\u540E-\u5982\u679C\u4EE3\u7406\u5730\u5740\u540E-\u65E0\u6CD5\u62FF\u5230\u4EFB\u610F\u5730\u5740" aria-hidden="true">#</a> \uFF084\uFF09\u6CE8\u610F\u5F00\u542F\u540E\uFF0C\u5982\u679C\u4EE3\u7406\u5730\u5740\u540E\uFF0C\u65E0\u6CD5\u62FF\u5230\u4EFB\u610F\u5730\u5740</h3><p>ws start\u540E\u5730\u5740\uFF1A127.0.0.1:8899 Note: If all the above URLs are unable to access, check the firewall settings \u4E0B\u8F7D\u5F00\u542FHTTPS\u914D\u7F6E\u4F4D\u7F6E\u7684\u5185\u5BB9 \u8FD9\u91CC\u8FD8\u9700\u8981\u4E0B\u8F7D\u4E00\u4E2A\u6D4F\u89C8\u5668\u63D2\u4EF6:SwitchyOmega\u8BBE\u7F6E\u4E00\u4E2A\u4EE3\u7406whstile\u7684\u6A21\u5F0F\uFF0C\u8FD9\u6837\u6240\u6709\u7684\u8BF7\u6C42\u90FD\u88AB\u62E6\u622A\u5230whstle\u4E0A\u3002</p><p>\u6709\u65F6\u5019https\u8BF7\u6C42\u65E0\u6CD5\u62E6\u622A\uFF0C\u90A3\u4E48\u4E0B\u8F7D\u4E00\u4E2A\u6839\u8BC1\u4E66 \u6682\u65F6\u5148\u4E0D\u7528\u653E\u5728gitee\u4E0A\u9762\uFF1A https://gitee.com/nyhxiaoning/pnpm-monorepo-mul-react-vue-manager.git/rootCA.crt</p>`,23);function P(j,L){const n=t("RouterLink");return r(),c("div",null,[o,e("nav",m,[e("ul",null,[e("li",null,[s(n,{to:"#\u56DE\u5230\u535A\u5BA2\u4E3B\u9875"},{default:d(()=>[h]),_:1})]),e("li",null,[s(n,{to:"#_003\u5FEB\u901F\u5B9A\u4F4D\u4EE3\u7801\u4F4D\u7F6E-\u5FEB\u901F\u627E\u5230\u9875\u9762\u4E2D\u7EC4\u4EF6"},{default:d(()=>[b]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#_002\u5FEB\u901Fdebug"},{default:d(()=>[_]),_:1})])])]),e("li",null,[s(n,{to:"#_004\u589E\u52A0\u4EE3\u7406\u670D\u52A1\u5668\u7684\u5B66\u4E60whistle"},{default:d(()=>[p]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#_1-\u4E2A\u4EBA\u5E38\u7528\u7684\u5B9E\u73B0\u573A\u666F"},{default:d(()=>[g]),_:1})]),e("li",null,[s(n,{to:"#_2-\u6D4F\u89C8\u5668\u4EE3\u7406"},{default:d(()=>[x]),_:1})]),e("li",null,[s(n,{to:"#_3-\u6D4F\u89C8\u5668\u7684whistle\u754C\u9762"},{default:d(()=>[f]),_:1})]),e("li",null,[s(n,{to:"#_4-\u6CE8\u610F\u5F00\u542F\u540E-\u5982\u679C\u4EE3\u7406\u5730\u5740\u540E-\u65E0\u6CD5\u62FF\u5230\u4EFB\u610F\u5730\u5740"},{default:d(()=>[w]),_:1})])])])])]),k,e("p",null,[s(n,{to:"/"},{default:d(()=>[C]),_:1})]),T])}var S=a(v,[["render",P],["__file","006\u8C03\u8BD5\u6E90\u7801\u76F8\u5173\u5DE5\u5177\u65B9\u6CD5.html.vue"]]);export{S as default};
