import{_ as n,o as e,c as i,d as s}from"./app.99cc9b2a.js";const d={},l=s(`<h2 id="\u7B2C\u4E00\u6B65" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u6B65" aria-hidden="true">#</a> \u7B2C\u4E00\u6B65</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>src/components \u76EE\u5F55\u4E0B\uFF0C\u65B0\u5EFA\u6253\u5305\u914D\u7F6E\u6587\u4EF6 index.ts\u3002


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7B2C\u4E8C\u6B65-\u6839\u76EE\u5F55\u521B\u5EFA\u4E00\u4E2Abuild-cjs" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u6B65-\u6839\u76EE\u5F55\u521B\u5EFA\u4E00\u4E2Abuild-cjs" aria-hidden="true">#</a> \u7B2C\u4E8C\u6B65\uFF1A\u6839\u76EE\u5F55\u521B\u5EFA\u4E00\u4E2Abuild.cjs</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const path = require(&#39;path&#39;)
const { defineConfig, build } = require(&#39;vite&#39;)
const vue = require(&#39;@vitejs/plugin-vue&#39;)

// \u6DFB\u52A0\u6253\u5305\u5165\u53E3\u6587\u4EF6\u5939 packages\uFF08\u9700\u8981\u624B\u52A8\u521B\u5EFA\uFF09
const entryDir = path.resolve(__dirname, &#39;../src/components&#39;)
// \u6DFB\u52A0\u51FA\u53E3\u6587\u4EF6\u5939 lib\uFF08\u4E0D\u9700\u8981\u624B\u52A8\u521B\u5EFA\uFF0C\u4F1A\u81EA\u52A8\u751F\u6210\uFF09
const outDir = path.resolve(__dirname, &#39;../lib&#39;)

// vite \u914D\u7F6E
const baseConfig = defineConfig({
	configFile: false,
	publicDir: false,
	plugins: [vue()]
})

// rollup \u914D\u7F6E\uFF08vite \u57FA\u4E8E rollup \u6253\u5305\uFF09
const rollupOptions = {
    // \u8FD9\u4E24\u4E2A\u5E93\u4E0D\u9700\u8981\u6253\u5305
	external: [&#39;vue&#39;, &#39;vue-router&#39;],
	output: {
		globals: {
			vue: &#39;Vue&#39;
		}
	}
}

//\u5168\u91CF\u6784\u5EFA
const buildAll = async () =&gt; {
  await build(defineConfig({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, &#39;index.ts&#39;),
		    // \u7EC4\u4EF6\u5E93\u540D\u5B57
        name: &#39;my-components-base&#39;,
        fileName: &#39;my-components-base&#39;,
		    // \u8F93\u51FA\u683C\u5F0F
        formats: [&#39;es&#39;, &#39;umd&#39;]
      },
      outDir
    }
  }))
}


const buildLib = async () =&gt; {
  await buildAll()
}

buildLib()



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7B2C\u4E09\u6B65-\u6253\u5305\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u6B65-\u6253\u5305\u547D\u4EE4" aria-hidden="true">#</a> \u7B2C\u4E09\u6B65\uFF1A\u6253\u5305\u547D\u4EE4</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;build:components&quot;: &quot;node --trace-warnings ./build/build.js&quot;,
&quot;lib&quot;: &quot;npm run build:components&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7B2C\u56DB\u6B65-\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u56DB\u6B65-\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> \u7B2C\u56DB\u6B65\uFF1A\u4F7F\u7528\u65B9\u5F0F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>main.js\u4E2D\u5168\u5C40\u5F15\u5165
// \u5F15\u5165\u7EC4\u4EF6
import MyComponents from &#39;../lib/my-components-base.es.js&#39;
// \u6CE8\u610F\u4E00\u5B9A\u8981\u5F15\u5165\u6837\u5F0F
import &#39;../lib/style.css&#39;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7B2C\u4E94\u6B65-\u53D1\u5E03npm" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E94\u6B65-\u53D1\u5E03npm" aria-hidden="true">#</a> \u7B2C\u4E94\u6B65\uFF1A\u53D1\u5E03npm</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>private \u503C\u4E3A false\uFF0C\u7EC4\u4EF6\u5E93\u4E0D\u80FD\u79C1\u6709\uFF1B

version \u9ED8\u8BA4\u4E3A 0.0.0\uFF0C\u53D1\u5E03\u5230 npm \u5FC5\u987B\u9075\u5B88\u89C4\u8303\uFF0C\u8FD9\u91CC\u6539\u4E3A 1.0.0\uFF1B
main \u5F53\u7EC4\u4EF6\u5E93\u88AB import \u65F6\uFF0C\u9ED8\u8BA4\u6307\u5411 /lib/my-components.es.js \u6587\u4EF6\uFF1B



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>npm login\u7684\u65F6\u5019\uFF0Cnrm\u5207\u6362\u5230npm\u7684\u955C\u50CF\u6E90\u5730\u5740\u3002</p><p>\u7B2C\u4E8C\uFF1A\u51FA\u73B0\u4E0B\u9762\u6821\u9A8C\uFF0C\u4F7F\u7528\u65B9\u6CD5\u767B\u5F55npm\u7F51\u7AD9\uFF0C\u70B9\u51FBaccount npm ERR! This operation requires a one-time password from your authenticator.</p><p>\u7136\u540E\u81EA\u5DF1\u9009\u62E9npm\u5185\u90E8\u7684\u53CC\u56E0\u5B50\u8BA4\u8BC1\u767B\u5F55\uFF0C\u907F\u514D\u4E22\u5931\u3002 \u81EA\u5DF1\u4E0B\u8F7Dauthenticator\u540E\uFF0C\u626B\u63CF\u5373\u53EF\u3002</p><p>npm publish\u540E\uFF0C\u53D1\u73B0\u9519\u8BEF\u8BF4\uFF0C\u4F60\u4E0D\u80FD\u53D1\u5E03\u540D\u4E3Alib\u7684\u5305\uFF0C\u610F\u601D\u662F\u91CD\u540D\u4E86\u3002</p><h2 id="\u521B\u5EFAnpm\u79C1\u6709\u670D\u52A1\u5668-\u516C\u53F8\u5185\u90E8\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAnpm\u79C1\u6709\u670D\u52A1\u5668-\u516C\u53F8\u5185\u90E8\u8BBF\u95EE" aria-hidden="true">#</a> \u521B\u5EFAnpm\u79C1\u6709\u670D\u52A1\u5668\uFF0C\u516C\u53F8\u5185\u90E8\u8BBF\u95EE</h2><p>\u56E0\u4E3Anpm\u4E0A\u9762\u7684\u5305\u90FD\u662F\u516C\u5171\uFF0C\u4E0D\u80FD\u79C1\u6709\u5316\u3002</p><p>-npm install -g verdaccio --unsafe-perm</p><p>-\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u547D\u4EE4\u884C\u8F93\u5165verdaccio\u542F\u52A8\u4E00\u6B21\uFF0C\u4F1A\u751F\u6210\u4E0B\u9762\u6587\u4EF6 \u4F1A\u6709\u8F93\u51FA\u663E\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5B89\u88C5\u540E\uFF0C\u5728\u6587\u4EF6\u5939 C:\\Users\\rongm\\.config\\verdaccio\\config.yaml

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>-\u5728\u914D\u7F6E\u6587\u4EF6\u7684\u672B\u5C3E\u6DFB\u52A0listen: 0.0.0.0:4873</p><p>-\u914D\u7F6E\u6587\u4EF6\u7684storage\u9009\u9879\uFF0C\u7136\u540E\u628A\u4ED3\u5E93\u7684\u4F4D\u7F6E\u586B\u5199\u8FDB\u53BB\uFF0C\u6CE8\u610F\u662F\u7528\u659C\u7EBF\uFF0C\u800C\u4E0D\u662F\u53CD\u659C\u7EBF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
storage: E:/CICD/selfnpm

\u91CD\u542Fverdaccio\u547D\u4EE4
\u8BBF\u95EE\uFF1Ahttp://127.0.0.1:4873/\u6216\u662F\u672C\u673Aip+\u7AEF\u53E34873

\u63A5\u7740nrm add localnpm  ip+\u7AEF\u53E34873

\u589E\u52A0\u540E\uFF0Cnrm ls  
localnpm ----- http://localhost:4873/


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-\u5207\u6362\u79C1\u6709npm\u57DF\uFF0C\u65B0\u5EFA\u7528\u6237 npm adduser</p><p>\u8FD9\u91CC\u6DFB\u52A0\u7684daning,\u5BC6\u7801\u548C\u539F\u6765\u7684npm\u4E00\u6837\uFF0C\u7136\u540E\u8BBF\u95EE127.0.0.1\uFF1A4873</p><p>-\u5C06\u521A\u521A\u7684lib\u5E93\uFF0C\u5C1D\u8BD5\u518D\u6B21\u4E0A\u4F20\u4E00\u6B21</p><p>\u521B\u5EFA\u4E00\u4E2Anpm init -f</p><h2 id="\u79C1\u6709\u57DF\u914D\u7F6E\u4E86nrm\u540E-\u5982\u679C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u79C1\u6709\u57DF\u914D\u7F6E\u4E86nrm\u540E-\u5982\u679C\u4F7F\u7528" aria-hidden="true">#</a> \u79C1\u6709\u57DF\u914D\u7F6E\u4E86nrm\u540E\uFF0C\u5982\u679C\u4F7F\u7528\uFF0C</h2><p>\u5C31\u662Fnpm i \u540E\u4F7F\u7528\uFF0C\u548C\u6B63\u5E38\u7684\u4E00\u6478\u4E00\u6837\uFF0C \u5728\u79C1\u6709\u57DF\u627E\u4E0D\u5230\uFF0C\u4F1A\u81EA\u52A8\u8FDE\u63A5\u5230npm.mirror\u4E0A\uFF0C\u81EA\u5DF1\u4E0D\u7528\u62C5\u5FC3\u79C1\u6709\u5171\u6709\u7684\u5305\u7684\u95EE\u9898\u3002</p>`,28),a=[l];function r(v,c){return e(),i("div",null,a)}var t=n(d,[["render",r],["__file","001vitevue3\u5F00\u53D1\u4E00\u4E2A\u7EC4\u4EF6\u5E93.html.vue"]]);export{t as default};
