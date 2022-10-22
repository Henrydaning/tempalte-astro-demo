import{_ as r,r as d,o as t,c as o,a as e,b as i,w as c,d as a,e as n}from"./app.2c91957f.js";var u="/dist/images/modulesbundle.png";const v={},m=a(`<h2 id="_001es-module-\u4E2D\u4F7F\u7528-dirname" tabindex="-1"><a class="header-anchor" href="#_001es-module-\u4E2D\u4F7F\u7528-dirname" aria-hidden="true">#</a> 001es module \u4E2D\u4F7F\u7528__dirname</h2><p>\u56E0\u4E3A path \u662F Node \u6A21\u5757\uFF0C\u4E00\u4E9B\u65B9\u6CD5\u65E0\u6CD5\u76F4\u63A5\u4F7F\u7528\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728nodejs\u4E2D\u4F7F\u7528es module\u65F6\uFF0C__dirname\u672A\u5B9A\u4E49\uFF0C\u56E0\u4E3A__dirname\u3001__filename\u53EA\u6709\u5728commonjs \u4E2D\u624D\u6709\uFF1B

\u62A5\u9519\uFF1A __dirname is not defined in ES module scope

import { dirname } from &#39;path&#39;
import { fileURLToPath } from &#39;url&#39;

const __dirname = dirname(fileURLToPath(i<wbr>mport.meta.url))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_002-\u5982\u4F55\u62BD\u79BB\u4F7F\u7528\u9879\u76EE\u4E2D\u7684\u5E93" tabindex="-1"><a class="header-anchor" href="#_002-\u5982\u4F55\u62BD\u79BB\u4F7F\u7528\u9879\u76EE\u4E2D\u7684\u5E93" aria-hidden="true">#</a> 002 \u5982\u4F55\u62BD\u79BB\u4F7F\u7528\u9879\u76EE\u4E2D\u7684\u5E93</h2><h3 id="\u5F15\u7528-webpack-\u7684\u6A21\u5757\u8054\u90A6\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528-webpack-\u7684\u6A21\u5757\u8054\u90A6\u67B6\u6784" aria-hidden="true">#</a> \u5F15\u7528 webpack \u7684\u6A21\u5757\u8054\u90A6\u67B6\u6784</h3><h4 id="lib-app" tabindex="-1"><a class="header-anchor" href="#lib-app" aria-hidden="true">#</a> lib-app</h4><p>\u66B4\u9732\u4E86\u4E00\u4E9B\u5E93\u6A21\u5757\uFF1Aaxios,vue,react\uFF0Creact-dom\u3002\u63D0\u4F9B\u8FDC\u7A0B\u516C\u5171\u5E93\u4F9D\u8D56\uFF0C\u5B83\u662F\u4E00\u4E2A\u7EAF\u7CB9\u7684 remote</p><h4 id="component-app" tabindex="-1"><a class="header-anchor" href="#component-app" aria-hidden="true">#</a> component-app</h4><p>\u66B4\u9732\u4E86\u4E00\u4E9B\u516C\u5171\u7EC4\u4EF6\uFF1A\u4F5C\u4E3A\u751F\u4EA7\u8005\uFF0C\u4F46\u540C\u65F6\u53C8\u6D88\u8D39 expose \u66B4\u9732\u7684 react \u6A21\u5757\uFF0C</p><h4 id="main-app" tabindex="-1"><a class="header-anchor" href="#main-app" aria-hidden="true">#</a> main-app</h4><p>\u4E0A\u5C42 App\uFF0C\u4F9D\u8D56 lib-app \u548C component-app \u5E94\u7528\u3002</p><h4 id="lib-app-\u4E2D-axios-vue-\u4E24\u4E2A\u5E93\u8FDB\u884C\u6A21\u5757\u8054\u90A6\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#lib-app-\u4E2D-axios-vue-\u4E24\u4E2A\u5E93\u8FDB\u884C\u6A21\u5757\u8054\u90A6\u6D4B\u8BD5" aria-hidden="true">#</a> lib-app \u4E2D axios,vue \u4E24\u4E2A\u5E93\u8FDB\u884C\u6A21\u5757\u8054\u90A6\u6D4B\u8BD5</h4><p>npm run start \u5148\u7F16\u8BD1\u51FA\u6765\u6A21\u5757\u8054\u90A6\u9700\u8981\u7684\u5E93\u6587\u4EF6\uFF1Aaxios,vue,react \u7B49</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
npm run  start\u540E\u751F\u6210\u4F9D\u8D56
[0] + 8 modules
[0] webpack 5.74.0 compiled successfully in 1144 ms


\u968F\u540E\u542F\u52A8\u6A21\u5757\u670D\u52A1\uFF1Anpm run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="component-app-\u4E2D\u4F5C\u4E3A\u751F\u4EA7\u8005\u548C\u6D88\u8D39\u8005\u8FDB\u884C\u6A21\u5757\u8054\u90A6" tabindex="-1"><a class="header-anchor" href="#component-app-\u4E2D\u4F5C\u4E3A\u751F\u4EA7\u8005\u548C\u6D88\u8D39\u8005\u8FDB\u884C\u6A21\u5757\u8054\u90A6" aria-hidden="true">#</a> component-app \u4E2D\u4F5C\u4E3A\u751F\u4EA7\u8005\u548C\u6D88\u8D39\u8005\u8FDB\u884C\u6A21\u5757\u8054\u90A6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm run start\u751F\u6210\u4F9D\u8D56
[0]     remote lib-app/react 6 bytes (remote) 6 bytes (share-init) [built] [code generated]
[0]     remote lib-app/react-dom 6 bytes (remote) 6 bytes (share-init) [built] [code generated]
[0]   container entry 42 bytes [built] [code generated]
[0]   external &quot;lib_app@http://localhost:3000/remoteEntry.js&quot; 42 bytes [built] [code generated]
[0] webpack 5.74.0 compiled successfully in 2256 ms


\u968F\u540E\u542F\u52A8\u6A21\u5757\u670D\u52A1\uFF1Anpm run serve

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),p={href:"https://github.com/anderlaw/react-webpack-MF.git",target:"_blank",rel:"noopener noreferrer"},b=n("\u501F\u9274\u4E86\u5F88\u591A github \u9879\u76EE\u4E0A\u7684\u4EE3\u7801"),h=e("h4",{id:"\u6253\u5305\u6210\u7EC4\u4EF6\u5E93-\u7136\u540E\u5BFC\u51FA\u6210-lib-\u5E93\u5305-\u518D\u901A\u8FC7\u8D44\u6E90\u5F15\u7528",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6253\u5305\u6210\u7EC4\u4EF6\u5E93-\u7136\u540E\u5BFC\u51FA\u6210-lib-\u5E93\u5305-\u518D\u901A\u8FC7\u8D44\u6E90\u5F15\u7528","aria-hidden":"true"},"#"),n(" \u6253\u5305\u6210\u7EC4\u4EF6\u5E93\uFF0C\u7136\u540E\u5BFC\u51FA\u6210 lib \u5E93\u5305\uFF0C\u518D\u901A\u8FC7\u8D44\u6E90\u5F15\u7528")],-1),_=n("\u6210\u672C\uFF0C\u9700\u8981\u6784\u9020\u4E00\u4E2A lib \u5E93\uFF0C\u89C1"),g=n("vitelib \u5F00\u53D1\u7EC4\u4EF6\u5E93"),x=e("h3",{id:"webpack-\u6A21\u5757\u8054\u90A6\u5B9E\u73B0\u7684\u66F4\u597D\u3002",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webpack-\u6A21\u5757\u8054\u90A6\u5B9E\u73B0\u7684\u66F4\u597D\u3002","aria-hidden":"true"},"#"),n(" webpack \u6A21\u5757\u8054\u90A6\u5B9E\u73B0\u7684\u66F4\u597D\u3002")],-1),f=e("p",null,"\u6211\u4EEC\u5229\u7528\u6A21\u5757\u8054\u90A6\uFF0C\u5C06\u9879\u76EE\u4E2D\u6240\u6709\u7684\u516C\u5171\u7EC4\u4EF6\u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u9879\u76EE\uFF0C\u7136\u540E\u5BFC\u51FA expose \u66B4\u9732\uFF0C\u518D\u6D88\u8D39\u8005\u54EA\u91CC\uFF0C\u5229\u7528 remote \u5F15\u7528\u3002 \u6CE8\u610F\u914D\u7F6E output \u7684\u76EE\u5F55\u4EE3\u7801\u3002 \u597D\u5904\uFF1A\u5B9E\u73B0\u4E86\u4EE3\u7801\u7684\u516C\u5171\u4EE3\u7801\u62BD\u79BB\uFF0C\u76F8\u5BF9\u4E8E\u8D44\u6E90\u5E93\u6765\u8BF4\uFF0C\u4FEE\u6539\u65B9\u4FBF\uFF0C\u51CF\u5C11\u4E86\u642D\u5EFA\u4E00\u4E2A\u79C1\u6709\u7EC4\u4EF6\u5E93\u7684 vedecco \u95EE\u9898\u3002",-1),k=n("\u5B9E\u73B0 demo \u6848\u4F8B\uFF1A"),w={href:"https://gitee.com/nyhxiaoning/webpack-cli-tools-list.git",target:"_blank",rel:"noopener noreferrer"},j=n("\u6A21\u5757\u8054\u90A6\u5B9E\u73B0\u548C\u5C01\u88C5"),y=a('<p><img src="'+u+`" alt="\u6A21\u5757\u8054\u90A6\u540C\u65F6\u8FD0\u884Clib\u516C\u5171\u4F9D\u8D56\u5E93\uFF0Ccom\u7EC4\u4EF6\u5E93\uFF0C\u4E3B\u9879\u76EE"></p><h2 id="_003webpack-\u4E2D\u4F7F\u7528-cdn-\u51CF\u5C11\u8D44\u6E90\u4E0B\u8F7D-\u52A0\u5FEB\u901F\u5EA6" tabindex="-1"><a class="header-anchor" href="#_003webpack-\u4E2D\u4F7F\u7528-cdn-\u51CF\u5C11\u8D44\u6E90\u4E0B\u8F7D-\u52A0\u5FEB\u901F\u5EA6" aria-hidden="true">#</a> 003webpack \u4E2D\u4F7F\u7528 cdn \u51CF\u5C11\u8D44\u6E90\u4E0B\u8F7D\uFF0C\u52A0\u5FEB\u901F\u5EA6</h2><h2 id="_003webpack-\u4E2D\u5F00\u53D1\u4E00\u4E2A-plugin" tabindex="-1"><a class="header-anchor" href="#_003webpack-\u4E2D\u5F00\u53D1\u4E00\u4E2A-plugin" aria-hidden="true">#</a> 003webpack \u4E2D\u5F00\u53D1\u4E00\u4E2A plugin</h2><p>webpack \u63D2\u4EF6\u4E2D\uFF0C\u4E24\u4E2A\u5BF9\u8C61 compiler \u7F16\u8BD1\u5BF9\u8C61\u662F webpack \u542F\u52A8\u540E\uFF0C\u4E00\u6B21\u6027\u751F\u6210 webpack \u73AF\u5883\u914D\u7F6E\uFF0C\u53EF\u4EE5\u8BBF\u95EE\u6574\u4E2A webpack \u7684\u8FD0\u884C\u65F6\u671F\u3002\u63D2\u4EF6\u5E94\u7528\u65F6\u5019\uFF0C\u4F1A\u6536\u5230\u6574\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u53EF\u4EE5\u8BBF\u95EE webpack \u7684\u4E3B\u73AF\u5883\u3002</p><p>\u53E6\u4E00\u4E2A compilation \u5BF9\u8C61\u662F webpack \u7684\u5B9E\u65F6\u751F\u6210\u7684\u7F16\u8BD1\u5BF9\u8C61\uFF0C\u4E00\u4E2A compilation \u8868\u73B0\u4E86\u5F53\u524D\u7684\u6A21\u5757\u8D44\u6E90\uFF0C\u7F16\u8BD1\u5185\u5BB9\u4F9D\u8D56\u53D8\u5316\u3002</p><h3 id="\u63D2\u4EF6\u7684\u65F6\u5019\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u7684\u65F6\u5019\u539F\u7406" aria-hidden="true">#</a> \u63D2\u4EF6\u7684\u65F6\u5019\u539F\u7406</h3><p>webpack \u6253\u5305\u662F\u4E00\u79CD\u4E8B\u4EF6\u6D41\u7684\u673A\u5236\uFF0C\u5B83\u7684\u539F\u7406\u662F\u5C06\u5404\u4E2A\u63D2\u4EF6\u4E32\u8054\u8D77\u6765\u3002\u90A3\u4E48\u5B9E\u73B0\u8FD9\u4E00\u5207\u7684\u6838\u5FC3\u5C31\u662F\u5728 compiler \u5BF9\u8C61\u4E2D\u7684 tapable\uFF0C\u5C06 plugin \u63A7\u5236\u5728 webpack \u4E8B\u4EF6\u6D41\u4E0A\u8FD0\u884C\u3002\uFF08\u57FA\u672C\u4F7F\u7528\u51E0\u4E2A tap \u7C7B\u4E2D\u94A9\u5B50\uFF1Acompile \u662F\u521B\u5EFA compilation \u4E4B\u524D\uFF0Ccompilation \u521B\u5EFA\u5B8C\u6210\uFF0Cemit \u8F93\u51FA\u8D44\u6E90\u5230\u76EE\u5F55\u524D\uFF0Cdone \u7F16\u8BD1\u5B8C\u6210\uFF09</p><p>\u6CE8\u610F webpack \u63D2\u4EF6\u4E2D\u65E7\u7684 api:compiler.plugin\uFF0C\u65B0\u7684 api \u662F compiler.hooks.emit.tap(&quot;WebapckTransformplugins&quot;)</p><p>\u63D2\u4EF6\u901A\u8FC7\u5177\u6709 apply \u65B9\u6CD5\u7684 prototype \u5BF9\u8C61\u5B9E\u4F8B\u5316\u51FA\u6765\u3002</p><h3 id="\u63D2\u4EF6\u7684\u57FA\u672C\u5185\u5BB9\u7EC4\u6210" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u7684\u57FA\u672C\u5185\u5BB9\u7EC4\u6210" aria-hidden="true">#</a> \u63D2\u4EF6\u7684\u57FA\u672C\u5185\u5BB9\u7EC4\u6210</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4ECE\u5B98\u7F51\u5F97\u77E5\uFF1A\u7F16\u5199\u4E00\u4E2Awebpack\u63D2\u4EF6\u9700\u8981\u7531\u4EE5\u4E0B\u7EC4\u6210\uFF1A

1. \u4E00\u4E2Ajavascript\u547D\u540D\u51FD\u6570\u3002
2. \u5728\u63D2\u4EF6\u51FD\u6570\u7684prototype\u4E0A\u5B9A\u4E49\u4E00\u4E2A apply \u65B9\u6CD5\u3002
3. \u6307\u5B9A\u4E00\u4E2A\u7ED1\u5B9A\u5230webpack\u81EA\u8EAB\u7684\u94A9\u5B50\u51FD\u6570\u3002
4. \u5904\u7406webpack\u5185\u90E8\u5B9E\u5217\u7684\u7279\u5B9A\u6570\u636E\u3002
5. \u529F\u80FD\u5B8C\u6210\u540E\u8C03\u7528webpack\u63D0\u4F9B\u7684\u56DE\u8C03\u51FD\u6570\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-config-js-\u4E2D\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#vue-config-js-\u4E2D\u5185\u5BB9" aria-hidden="true">#</a> vue.config.js \u4E2D\u5185\u5BB9</h3>`,12),E={id:"\u5F00\u53D1\u63D2\u4EF6\u7684\u6B65\u9AA4-\u9879\u76EE\u5730\u5740",tabindex:"-1"},q=e("a",{class:"header-anchor",href:"#\u5F00\u53D1\u63D2\u4EF6\u7684\u6B65\u9AA4-\u9879\u76EE\u5730\u5740","aria-hidden":"true"},"#",-1),B=n(" \u5F00\u53D1\u63D2\u4EF6\u7684\u6B65\u9AA4\uFF1A"),A={href:"https://gitee.com/nyhxiaoning/vue3.0-ts-admin.git",target:"_blank",rel:"noopener noreferrer"},L=n("\u9879\u76EE\u5730\u5740"),C=a(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7B2C\u4E00\u6B65\uFF1A\u521B\u5EFA\u4E00\u4E2Ajs\u547D\u4EE4\u7684\u7C7B\uFF0C\u6DFB\u52A0apply\u65B9\u6CD5\u3002
\u7B2C\u4E8C\u90E8\uFF1A\u4E3A\u8FD9\u4E2A\u7C7B\u4E2D\u589E\u52A0\u4E0D\u540Cwebpack\u9636\u6BB5\u7684\u7684\u72D7\u5B50\u51FD\u6570\uFF0C\u5904\u7406\u4E13\u95E8\u7684\u5185\u5BB9
\u7B2C\u4E09\u6B65\uFF1Acallback\u8C03\u7528\u9632\u6B62\u5361\u5230\u6784\u5EFA

\u6CE8\u91CA\uFF0C\u8FD9\u91CC\u6709\u4E00\u4E2A\u6CE8\u91CA\uFF1Avue.config.js\u56E0\u4E3A\u5BF9\u4E8Ewebpack\u8FDB\u884C\u4E86\u62BD\u8C61\uFF0C\u56E0\u6B64\u4F7F\u7528\u7684\u63D2\u4EF6\u65B9\u6CD5\u5982\u4E0B
  chainWebpack: config =&gt; {
    // config.plugin(&#39;codecomment&#39;).use(
    //   new FileListPlugin({
    //     outputFile: &#39;my-assets.md&#39;
    //   })
    // );
    config.plugin(&#39;loger&#39;).use(
      new LogWebpackPlugin(
        () =&gt; {
          debugger;
          console.log(&#39;emit\u5DF2\u7ECF\u6D3E\u53D1\u4E86&#39;);
        },
        () =&gt; {
          console.log(&#39;done\u4E8B\u4EF6\u53D1\u751F\u4E86\uFF0C\u6210\u529F\u6784\u5EFA\u4E86&#39;);
        }
      )
    );

\u9879\u76EE\u5730\u5740\u67E5\u770B\uFF1A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_004-\u5F00\u53D1-webpack-\u548C-vite-\u63D2\u4EF6\u7684\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#_004-\u5F00\u53D1-webpack-\u548C-vite-\u63D2\u4EF6\u7684\u6A21\u677F" aria-hidden="true">#</a> 004 \u5F00\u53D1 webpack \u548C vite \u63D2\u4EF6\u7684\u6A21\u677F</h2><h2 id="\u5F00\u53D1\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u63D2\u4EF6" aria-hidden="true">#</a> \u5F00\u53D1\u63D2\u4EF6</h2><p>\u4E0A\u9762\u5199\u4E86\u539F\u751F\u5F00\u53D1 webpack \u548C vite \u63D2\u4EF6\u529F\u80FD\u7684\u4EE3\u7801\u548C\u811A\u624B\u67B6\uFF0C\u6709\u6CA1\u6709\u6A21\u677F\uFF0C\u771F\u7684\u6709\u3002</p><p>https://github.com/nyhxiaoning/gogocode.git</p><h3 id="\u5F00\u53D1-webpack-\u7684\u63D2\u4EF6\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1-webpack-\u7684\u63D2\u4EF6\u6A21\u677F" aria-hidden="true">#</a> \u5F00\u53D1 webpack \u7684\u63D2\u4EF6\u6A21\u677F</h3>`,6),N={href:"https://github.com/thx/gogocode",target:"_blank",rel:"noopener noreferrer"},S=n("gogocode"),T=n("/"),R={href:"https://github.com/thx/gogocode/tree/main/example",target:"_blank",rel:"noopener noreferrer"},F=n("example"),P=n("/"),V=e("strong",null,"demo-with-webpack-plugin",-1),D=n("/"),M=e("h3",{id:"\u5F00\u53D1-vite-\u7684\u63D2\u4EF6\u6A21\u677F",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5F00\u53D1-vite-\u7684\u63D2\u4EF6\u6A21\u677F","aria-hidden":"true"},"#"),n(" \u5F00\u53D1 vite \u7684\u63D2\u4EF6\u6A21\u677F")],-1),W={href:"https://github.com/thx/gogocode",target:"_blank",rel:"noopener noreferrer"},I=n("gogocode"),U=n("/"),z={href:"https://github.com/thx/gogocode/tree/main/example",target:"_blank",rel:"noopener noreferrer"},H=n("example"),J=n("/"),G=e("strong",null,"demo-with-vite-plugin",-1),K=n("/"),O=a(`<h2 id="_005rollup-\u5F00\u53D1\u4E00\u4E2A\u901A\u7528\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_005rollup-\u5F00\u53D1\u4E00\u4E2A\u901A\u7528\u63D2\u4EF6" aria-hidden="true">#</a> 005rollup \u5F00\u53D1\u4E00\u4E2A\u901A\u7528\u63D2\u4EF6</h2><h3 id="\u6CE8\u610F-rollup-\u5F15\u5165-babel-\u7684\u65F6\u5019-\u6709\u4E00\u4E2A\u5751" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F-rollup-\u5F15\u5165-babel-\u7684\u65F6\u5019-\u6709\u4E00\u4E2A\u5751" aria-hidden="true">#</a> \u6CE8\u610F rollup \u5F15\u5165 babel \u7684\u65F6\u5019\uFF0C\u6709\u4E00\u4E2A\u5751</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rollup --config\u7B80\u5199rollup  -c

\u7B2C\u4E00\u90E8\u5206
import babel from &#39;rollup-plugin-babel&#39;

export default {
  input: &#39;./src/main&#39;,
  output: {
    file: &#39;./dist/bundle.js&#39;,
    format: &#39;cjs&#39;,
    name: &#39;bundleName&#39;
  },
  plugins: [
    babel({
      exclude: &#39;node_modules/**&#39;
    })
  ]
}


\u7B2C\u4E8C\u90E8\u5206
{
  &quot;presets&quot;: [
    [
      &quot;@babel/env&quot;,
      {
        &quot;modules&quot;: false // \u8BBE\u7F6E\u4E3Afalse,\u5426\u5219babel\u4F1A\u5728rollup\u6709\u673A\u4F1A\u6267\u884C\u5176\u64CD\u4F5C\u4E4B\u524D\u5BFC\u81F4\u6211\u4EEC\u7684\u6A21\u5757\u8F6C\u5316\u4E3Acommonjs
      }
    ]
  ]
}




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rollup-\u4E0D\u5C06\u7B2C\u4E09\u65B9\u5305\u653E\u5165\u6253\u5305\u7ED3\u679C\u4E2D" tabindex="-1"><a class="header-anchor" href="#rollup-\u4E0D\u5C06\u7B2C\u4E09\u65B9\u5305\u653E\u5165\u6253\u5305\u7ED3\u679C\u4E2D" aria-hidden="true">#</a> rollup \u4E0D\u5C06\u7B2C\u4E09\u65B9\u5305\u653E\u5165\u6253\u5305\u7ED3\u679C\u4E2D</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E0D\u5C06\u7B2C\u4E09\u65B9\u5E93\u653E\u5165\u6253\u5305\u7ED3\u679C,\u5728plugins\u4E2D\u653E\u5165\uFF1Aexternal
\u5982\u679C\u4F60\u4E0D\u60F3\u7B2C\u4E09\u65B9\u5E93\u88AB\u6253\u5305\u8FDB\u6765\uFF0C\u800C\u53EF\u4EE5\u5728\u5916\u9762\u5F15\u5165\uFF0C\u914D\u5408\u4F7F\u7528\u7684\u8BDD\uFF0C\u53EF\u4EE5\u5728rollup.config.js\u4E2D\u914D\u7F6Eexternal
rollup.config.js
export default {
  input: &#39;./src/main&#39;,
  output: {
    file: &#39;./dist/bundle.js&#39;,
    format: &#39;cjs&#39;,
    name: &#39;bundleName&#39;
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      exclude: &#39;node_modules/**&#39;
    })
  ],
  external: [&#39;lodash&#39;]
}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u652F\u6301 cdn \u5F15\u7528</p><p>\u652F\u6301 es6 \u6A21\u5757</p><p>\u652F\u6301 commonjs</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rollup.config.js
import resolve from &quot;@rollup/plugin-node-resolve&quot;;
import babel from &quot;@rollup/plugin-babel&quot;;
import commonjs from &quot;rollup-plugin-commonjs&quot;;
import typescript from &quot;rollup-plugin-typescript&quot;;

export default {
  input: &quot;src/index.ts&quot;, // \u6253\u5305\u5165\u53E3
  output: {
    // \u6253\u5305\u51FA\u53E3
    file: &quot;dist/index.js&quot;,
    format: &quot;umd&quot;, // umd\u662F\u517C\u5BB9amd/cjs/iife\u7684\u901A\u7528\u6253\u5305\u683C\u5F0F\uFF0C\u9002\u5408\u6D4F\u89C8\u5668
    name: &quot;utilibs&quot;, // cdn\u65B9\u5F0F\u5F15\u5165\u65F6\u6302\u8F7D\u5728window\u4E0A\u9762\u7528\u7684\u5C31\u662F\u8FD9\u4E2A\u540D\u5B57
    sourcemap: true,
  },
  plugins: [
    // \u6253\u5305\u63D2\u4EF6
    resolve(), // \u67E5\u627E\u548C\u6253\u5305node_modules\u4E2D\u7684\u7B2C\u4E09\u65B9\u6A21\u5757
    commonjs(), // \u5C06 CommonJS \u8F6C\u6362\u6210 ES2015 \u6A21\u5757\u4F9B Rollup \u5904\u7406
    typescript(), // \u89E3\u6790TypeScript
    babel({ babelHelpers: &quot;bundled&quot; }), // babel\u914D\u7F6E,\u7F16\u8BD1es6
  ],
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9879\u76EE\u8BE6\u60C5\u5730\u5740\uFF1Ahttps://github.com/nyhxiaoning/utilibs-rollup-npm.git</p><h3 id="\u7B80\u5355\u6253\u5305-rollup-\u4E00\u4E2A\u6587\u4EF6\u51FD\u6570\u6210-es-commonjs" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u6253\u5305-rollup-\u4E00\u4E2A\u6587\u4EF6\u51FD\u6570\u6210-es-commonjs" aria-hidden="true">#</a> \u7B80\u5355\u6253\u5305 rollup \u4E00\u4E2A\u6587\u4EF6\u51FD\u6570\u6210 es,commonjs</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5168\u5C40\u5B89\u88C5rollup\u540E
 rollup ./src/input1.js --format es   \u6253\u5305\u4E00\u4E2Aes\u683C\u5F0F\u7684\u6587\u4EF6
  rollup ./src/input1.js --format cjs  \u6253\u5305\u4E00\u4E2Acommonjs\u683C\u5F0F\u7684\u6587\u4EF6

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_006-\u5229\u7528-tsup-\u5FEB\u901F\u6253\u5305\u51FA\u5404\u79CD-ts-\u7684\u4F9D\u8D56\u5305-\u7C7B\u4F3C-rollup" tabindex="-1"><a class="header-anchor" href="#_006-\u5229\u7528-tsup-\u5FEB\u901F\u6253\u5305\u51FA\u5404\u79CD-ts-\u7684\u4F9D\u8D56\u5305-\u7C7B\u4F3C-rollup" aria-hidden="true">#</a> 006.\u5229\u7528 tsup \u5FEB\u901F\u6253\u5305\u51FA\u5404\u79CD ts \u7684\u4F9D\u8D56\u5305,\u7C7B\u4F3C rollup</h2>`,13),Q=n("Bundle your TypeScript library with no config, powered by "),X={href:"https://github.com/evanw/esbuild",target:"_blank",rel:"noopener noreferrer"},Y=n("esbuild"),Z=n("."),$=a(`<p>\u4E0A\u9762\u662F\u5B98\u65B9\u7684\u8BF4\u660E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tsup src/index.ts --dts --format cjs,esm
\u6307\u5B9A\u6253\u5305\u51FAcjs,esm\u7684\u6A21\u5757\uFF0C\u540C\u65F6\u81EA\u52A8\u751F\u6210\u4E00\u4E2Ad.ts\u7684\u58F0\u660E\u6587\u4EF6\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-\u7B2C\u4E09\u65B9-vite-\u63D2\u4EF6\u7684\u914D\u7F6E\u5F00\u53D1\u548C\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#_1-\u7B2C\u4E09\u65B9-vite-\u63D2\u4EF6\u7684\u914D\u7F6E\u5F00\u53D1\u548C\u5F15\u5165" aria-hidden="true">#</a> \uFF081\uFF09\u7B2C\u4E09\u65B9 vite \u63D2\u4EF6\u7684\u914D\u7F6E\u5F00\u53D1\u548C\u5F15\u5165</h3>`,3),ee={href:"https://gitee.com/nyhxiaoning/vite-cli-tools-list.git",target:"_blank",rel:"noopener noreferrer"},ne=n("vite \u811A\u624B\u67B6\u63D2\u4EF6\u7684\u914D\u7F6E\u548C\u4F7F\u7528"),ie=e("p",null,"\u7B2C\u4E00\u6B65\uFF1A\u521B\u5EFA\u4E00\u4E2A\u63D2\u4EF6\u9879\u76EE\uFF1Avite-plugin-template",-1),se=e("p",null,"\u901A\u8FC7\u4E0A\u9762\u7684 tsup \u5BFC\u51FA\u540E\uFF0C\u6210\u4E3A\u4E00\u4E2A\u63D2\u4EF6\u3002",-1),ae=e("p",null,"\u7136\u540E\u56DE\u5230\u4E00\u4E2A\u9879\u76EE\u4E2D\u4F7F\u7528",-1),de=e("p",null,"\u7B2C\u4E8C\u6B65\uFF1A\u5728\u9879\u76EE vite-vue3 \u4E2D\u4F7F\u7528",-1),le=n("\u5148\u7528\uFF1A"),re=e("code",null,"pnpm link <dir>",-1),te={href:"https://pnpm.io/zh/cli/link#pnpm-link-dir",target:"_blank",rel:"noopener noreferrer"},oe=a(`<p>\u4ECE\u6267\u884C\u6B64\u547D\u4EE4\u7684\u8DEF\u5F84\u6216\u901A\u8FC7 <code>&lt;dir&gt;</code> \u6307\u5B9A\u7684\u6587\u4EF6\u5939\uFF0C\u94FE\u63A5<code>package</code>\u5230<code>node_modules</code>\u4E2D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pnpm link ./../vite-plugin-template/
\u5C06\u540C\u4E00\u6587\u4EF6\u5939\u7684vite-lugin-template\u9879\u76EE\u94FE\u63A5\u5230vite-vue3\u9879\u76EE\u4E2D

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_007babel-\u662F\u5982\u4F55\u5B9E\u73B0\u5F15\u5165-commonjs-\u8F6C\u6362\u6210-es" tabindex="-1"><a class="header-anchor" href="#_007babel-\u662F\u5982\u4F55\u5B9E\u73B0\u5F15\u5165-commonjs-\u8F6C\u6362\u6210-es" aria-hidden="true">#</a> 007babel \u662F\u5982\u4F55\u5B9E\u73B0\u5F15\u5165 commonjs \u8F6C\u6362\u6210 es</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>es module \u5728\u8F6C\u6362\u65F6\u4F1A\u5728 export \u4E0A\u6302\u8F7D__esModule \u5C5E\u6027\u3002
\u6240\u6709\u5728\u5BFC\u5165\u65F6\uFF0C\u5982\u679C\u662F es module \u76F4\u63A5\u8FD4\u56DE\uFF0C
\u5982\u679C\u4E0D\u662F\u5219\u5F53 cjs \u5904\u7406\uFF0C \u628A\u6574\u4F53\u6A21\u5757\u6302\u5728\u4E00\u4E2A\u5BF9\u8C61\u7684 default \u5C5E\u6027\u4E0A\uFF0C\u8FD9\u6837\u540E\u7EED\u7684\u64CD\u4F5C\u5C31\u7EDF\u4E00\u4E86\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_008-\u5173\u4E8E-rollup-\u548C-babel-\u5904\u7406-commonjs-\u6A21\u5757\u6210-es-\u6A21\u5757\u7684\u601D\u8003\u3002" tabindex="-1"><a class="header-anchor" href="#_008-\u5173\u4E8E-rollup-\u548C-babel-\u5904\u7406-commonjs-\u6A21\u5757\u6210-es-\u6A21\u5757\u7684\u601D\u8003\u3002" aria-hidden="true">#</a> 008 \u5173\u4E8E rollup \u548C babel \u5904\u7406 commonjs \u6A21\u5757\u6210 es \u6A21\u5757\u7684\u601D\u8003\u3002</h2><p>rollup \u76F4\u63A5\u628A default export \u6302\u5230\u4E86 module.exports \u4E0A\u3002\u800C babel \u8FD8\u662F\u901A\u8FC7 __esModule \u7684\u6807\u8BC6\uFF0C\u6302\u8F7D\u5728 exports.default \u4E0A\u3002\u8FD9\u4E2A\u5730\u65B9\u9700\u8981\u7279\u522B\u5173\u6CE8\uFF0C \u5047\u5982\u6709\u4E00\u4E2A\u5E93\u4E4B\u524D\u65F6 \u4F7F\u7528 babel \u5904\u7406\u7684\uFF0C \u90A3 cjs \u7528\u6237\u53EA\u80FD\u4EE5 <code>require(&#39;lib&#39;).default</code> \u7684\u5F62\u5F0F\u6765\u4F7F\u7528\u3002 \u6709\u4E00\u5929\u8FD9\u4E2A\u5E93\u7684\u4F5C\u8005\u51B3\u5B9A\u4F7F\u7528 rollup, \u90A3\u4E48 cjs \u7684\u7528\u6237\u60F3\u8981\u4F7F\u7528\u65B0\u7684\u5E93\uFF0C\u53EA\u80FD\u53BB\u66F4\u6539\u539F\u5148\u7684\u4EE3\u7801\u3002</p><p>\u6211\u4EEC\u5E73\u5E38\u7684\u5F00\u53D1\u4E2D\uFF0C\u53EF\u80FD\u6211\u4EEC\u5DF2\u7ECF\u4E60\u60EF\u4E86 default export, \u7279\u522B\u662F\u5728 vue, react \u9879\u76EE\u4E2D\uFF0C\u6211\u4EEC\u81EA\u7136\u7684\u5199\u4E0B <code>export default myComponent</code>\u3002</p><p>\u5982\u679C\u672C\u8EAB\u9879\u76EE\u90FD\u5EFA\u7ACB\u5728 es module \u7684\u4F53\u7CFB\u4E0B, default export \u7EDD\u5BF9\u662F\u4E00\u4E2A \u5F88\u4FBF\u5229\u7684\u65B9\u5F0F\u3002</p><p>\u4F46\u662F\uFF0C\u5982\u679C\u4F60\u540C\u65F6\u9700\u8981\u652F\u6301 cjs \u548C esm,\u6D89\u53CA\u5230\u76F8\u4E92\u8C03\u7528\u7684\u95EE\u9898\uFF0C \u90A3\u5C31\u8981\u614E\u91CD\u8003\u8651 <code>default export</code>\u3002</p><p><strong>\u56E0\u4E3A esm \u4E0E cjs \u5982\u4F55\u6210\u529F\u76F8\u4E92\u4F7F\u7528\uFF0C\u5E76\u4E0D\u7531\u4F60\u51B3\u5B9A\uFF0C\u800C\u662F\u7531\u5E2E\u4F60\u6253\u5305\u5904\u7406\u7684\u5DE5\u5177\u51B3\u5B9A\u3002</strong></p>`,10),ce={href:"https://juejin.cn/post/6844904126195695624",target:"_blank",rel:"noopener noreferrer"},ue=n("\u5F15\u7528\u5730\u5740");function ve(me,pe){const s=d("ExternalLinkIcon"),l=d("RouterLink");return t(),o("div",null,[m,e("p",null,[e("a",p,[b,i(s)])]),h,e("p",null,[_,i(l,{to:"/15%E5%B7%A5%E5%85%B7%E5%92%8C%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE%E5%B7%A5%E7%A8%8B%E5%8C%96%E9%97%AE%E9%A2%98%E8%AE%B0%E5%BD%95/001vitevue3%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E5%BA%93.html"},{default:c(()=>[g]),_:1})]),x,f,e("p",null,[k,e("a",w,[j,i(s)])]),y,e("h4",E,[q,B,e("a",A,[L,i(s)])]),C,e("p",null,[e("a",N,[S,i(s)]),T,e("a",R,[F,i(s)]),P,V,D]),M,e("p",null,[e("a",W,[I,i(s)]),U,e("a",z,[H,i(s)]),J,G,K]),O,e("p",null,[Q,e("a",X,[Y,i(s)]),Z]),$,e("p",null,[e("a",ee,[ne,i(s)])]),ie,se,ae,de,e("p",null,[le,re,e("a",te,[i(s)])]),oe,e("p",null,[e("a",ce,[ue,i(s)])])])}var he=r(v,[["render",ve],["__file","011webpack\u548Cvite\u5DE5\u7A0B\u5316\u63D2\u4EF6\u548C\u5F00\u53D1\u529F\u80FD\u6C47\u603B.html.vue"]]);export{he as default};
