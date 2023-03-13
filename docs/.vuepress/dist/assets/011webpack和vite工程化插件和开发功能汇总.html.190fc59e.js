import{_ as r,r as d,o as t,c as u,a as e,b as n,w as o,e as i,d as l}from"./app.5805b0e6.js";var v="/dist/images/modulesbundle.png";const c={},m=e("h2",{id:"_000-\u5DE5\u7A0B\u5316\u76F8\u5173\u7684\u914D\u7F6E\u6587\u4EF6\u6C47\u603B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_000-\u5DE5\u7A0B\u5316\u76F8\u5173\u7684\u914D\u7F6E\u6587\u4EF6\u6C47\u603B","aria-hidden":"true"},"#"),i(" 000 \u5DE5\u7A0B\u5316\u76F8\u5173\u7684\u914D\u7F6E\u6587\u4EF6\u6C47\u603B")],-1),b={href:"https://www.processon.com/mindmap/617781871efad44894fbe29d",target:"_blank",rel:"noopener noreferrer"},p=i("\u524D\u7AEF\u5DE5\u7A0B\u5316\u914D\u7F6E\u7CFB\u7EDF\u6C47\u603B\u6587\u4EF6\u5185\u5BB9"),h={href:"https://gitee.com/front-end-tool-development/cli-scaffold-local-down-sets.git",target:"_blank",rel:"noopener noreferrer"},g=i("\u6838\u5FC3\u811A\u624B\u67B6\u9879\u76EE\u914D\u7F6E\u5730\u5740"),_=i(" \u6C47\u603B\u4E86\u5404\u79CD\u5E38\u89C1\u7684\u914D\u7F6E\u60C5\u51B5\uFF1A\u6700\u4F18\u5316\u8BF4\u660E\uFF1A"),q=l(`<h3 id="webpack4-x-babel-eslint" tabindex="-1"><a class="header-anchor" href="#webpack4-x-babel-eslint" aria-hidden="true">#</a> webpack4.x+babel+eslint</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webpack5-x-babel-eslint" tabindex="-1"><a class="header-anchor" href="#webpack5-x-babel-eslint" aria-hidden="true">#</a> webpack5.x+babel+eslint</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vite2-x-babel-eslint" tabindex="-1"><a class="header-anchor" href="#vite2-x-babel-eslint" aria-hidden="true">#</a> vite2.x+babel+eslint</h3><p>package.json</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;my-vue-app&quot;,
  &quot;version&quot;: &quot;0.0.0&quot;,
  &quot;scripts&quot;: {
    &quot;dev&quot;: &quot;vite serve --mode dev&quot;,
    &quot;build:staging&quot;: &quot;vite build --mode staging&quot;,
    &quot;build:prod&quot;: &quot;vite build --mode prod&quot;,
    &quot;build&quot;: &quot;vite build --mode prod&quot;,
    &quot;preview&quot;: &quot;vite preview&quot;
  },
  &quot;dependencies&quot;: {
    &quot;@vueuse/core&quot;: &quot;^8.2.6&quot;,
    &quot;echarts&quot;: &quot;^5.4.0&quot;,
    &quot;vant&quot;: &quot;^3.6.4&quot;,
    &quot;vconsole&quot;: &quot;^3.14.6&quot;,
    &quot;vue&quot;: &quot;^3.2.25&quot;,
    &quot;vue-router&quot;: &quot;^4.0.12&quot;
  },
  &quot;config&quot;: {
    &quot;commitizen&quot;: {
      &quot;path&quot;: &quot;node_modules/cz-git&quot;,
      &quot;useEmoji&quot;: true
    }
  },
  &quot;devDependencies&quot;: {
    &quot;@vitejs/plugin-vue&quot;: &quot;^2.0.0&quot;,
    &quot;@vue/eslint-config-prettier&quot;: &quot;^7.0.0&quot;,
    &quot;cz-git&quot;: &quot;^1.3.11&quot;,
    &quot;eslint&quot;: &quot;^7.32.0&quot;,
    &quot;eslint-plugin-prettier&quot;: &quot;^4.0.0&quot;,
    &quot;eslint-plugin-vue&quot;: &quot;^8.3.0&quot;,
    &quot;prettier&quot;: &quot;^2.4.1&quot;,
    &quot;rollup-plugin-visualizer&quot;: &quot;^5.7.1&quot;,
    &quot;sass&quot;: &quot;^1.45.1&quot;,
    &quot;unplugin-auto-import&quot;: &quot;^0.11.1&quot;,
    &quot;unplugin-vue-components&quot;: &quot;^0.22.4&quot;,
    &quot;vite&quot;: &quot;^2.7.2&quot;,
    &quot;vite-plugin-style-import&quot;: &quot;^1.4.1&quot;,
    &quot;vue-eslint-parser&quot;: &quot;^8.0.0&quot;
  }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vite.config</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { defineConfig } from &quot;vite&quot;;
const path = require(&quot;path&quot;);
import vue from &quot;@vitejs/plugin-vue&quot;;
import Components from &quot;unplugin-vue-components/vite&quot;;
import { VantResolver } from &quot;unplugin-vue-components/resolvers&quot;;
import AutoImport from &quot;unplugin-auto-import/vite&quot;;
import { visualizer } from &quot;rollup-plugin-visualizer&quot;;
// const BASE_API = i<wbr>mport.meta.env.VITE_APP_BASE_API
import copy from &#39;rollup-plugin-copy&#39;; // \u5F15\u5165\u63D2\u4EF6

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // visualizer({  //    build\u540E\u7684\u89C6\u56FE
    //   open: true,
    //   gzipSize: true,
    //   brotliSize: true
    // }),
    copy({
      targets: [
        { src: [&#39;./src/lib/index.js&#39;], dest: &#39;./public&#39; }, // \u6267\u884C\u62F7\u8D1D\uFF0C\u6CE8\u610Fpublic\u76EE\u6807

      ]
    }),
    Components({
      resolvers: [VantResolver()]
    }),
    AutoImport({
      imports: [&quot;vue&quot;, &quot;vue-router&quot;] // \u81EA\u52A8\u5BFC\u5165vue\u548Cvue-router\u76F8\u5173\u51FD\u6570
    })
  ],
  css: {
    preprocessorOptions: {
      // define global scss variable
      scss: {
        additionalData: \`@import &#39;@/common/styles/mixin.scss&#39;;\`
      }
    }
  },
  server: {
    host: &quot;0.0.0.0&quot;,
    port: 81,
    open: true
  },
  base: &quot;./&quot;,
  resolve: {
    alias: {
      &quot;@&quot;: path.resolve(__dirname, &quot;src&quot;),
      components: path.resolve(__dirname, &quot;src/components&quot;),
      views: path.resolve(__dirname, &quot;src/views&quot;),
      utils: path.resolve(__dirname, &quot;src/utils&quot;)
    }
  },
  // \u914D\u7F6E\u751F\u4EA7\u73AF\u5883\uFF0C\u4E0D\u751F\u6210soureceMap-vite2.x\u914D\u7F6E
  build: {
    minify: &#39;terser&#39;,
    terserOptions: {
      compress: {
        drop_debugger: true,
        pure_funcs: [&#39;console.log&#39;] // \u79FB\u9664console
      },
    },
    sourcemap: false,
    outDir: &#39;dist&#39;, // \u6307\u5B9A\u8F93\u51FA\u8DEF\u5F84,\u6784\u5EFA\u4ECEpublic\u4E2D\u8BBE\u7F6E
    // assetsDir: &quot;wap&quot;, //\u6307\u5B9A\u751F\u6210\u9759\u6001\u8D44\u6E90\u7684\u5B58\u653E\u8DEF\u5F84
    // rollupOptions: {
    //   output: {
    //     chunkFileNames: &#39;assets/js/[name]-[hash].js&#39;,
    //     entryFileNames: &#39;assets/js/[name]-[hash].js&#39;,
    //     assetFileNames: &#39;assets/[ext]/[name]-[hash].[ext]&#39;
    //   }
    // }
  }
});



vite\u9879\u76EE\u5B66\u4E60\u8865\u5145--------------------------
\uFF081\uFF09   /**
   * \u5728\u751F\u4EA7\u4E2D\u670D\u52A1\u65F6\u7684\u57FA\u672C\u516C\u5171\u8DEF\u5F84\u3002
   * @default &#39;/&#39;
   */
  base: &#39;/huangbiao&#39;,
  /**
   * \u4E0E\u201C\u6839\u201D\u76F8\u5173\u7684\u76EE\u5F55\uFF0C\u6784\u5EFA\u8F93\u51FA\u5C06\u653E\u5728\u5176\u4E2D\u3002\u5982\u679C\u76EE\u5F55\u5B58\u5728\uFF0C\u5B83\u5C06\u5728\u6784\u5EFA\u4E4B\u524D\u88AB\u5220\u9664\u3002
   * @default &#39;dist&#39;
   */
  outDir: &#39;target&#39;,
  port: 3000,
  // \u662F\u5426\u81EA\u52A8\u5728\u6D4F\u89C8\u5668\u6253\u5F00
  open: true,
  // \u662F\u5426\u5F00\u542F https
  https: false,
  // \u670D\u52A1\u7AEF\u6E32\u67D3
  ssr: false,
  // \u5F15\u5165\u7B2C\u4E09\u65B9\u7684\u914D\u7F6E
  optimizeDeps: {&lt;!-- --&gt;
    include: [&quot;moment&quot;, &quot;echarts&quot;, &quot;axios&quot;, &quot;mockjs&quot;]
  },

  \uFF082\uFF09copy\u590D\u5236\u7684vite\u63D2\u4EF6\u751F\u6548\u7684\u524D\u63D0\uFF0C\u9ED8\u8BA4\u8BBE\u7F6E\u4E86outDir\u662Fdist
  \u4F46\u662F\u9700\u8981\u4E86\u89E3\u4E00\u4E0Bvite,\u6253\u5305\u4ECEpublic\u590D\u5236\uFF0C\u6240\u4EE5\uFF0C\u6211\u4EEC\u6253\u5305\u7684copy\u6587\u4EF6\u76EE\u7684\u5730\u4E00\u822C\u662Fpublic
 \u6B63\u786E\u7684\u914D\u7F6E\u5982\u4E0B
     copy({
      targets: [
        { src: [&#39;./src/lib/index.js&#39;], dest: &#39;./public&#39; }, // \u6267\u884C\u62F7\u8D1D

      ]
    }),
\u9879\u76EE\u4E2D\u7684 public \u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u4F1A\u5168\u8A01\u8D1D\u5230\u6253\u5305\u6587\u4EF6\u4E2D

(3)\u5176\u4ED6\u914D\u7F6E\u8865\u5145
 // \u662F\u5426\u81EA\u52A8\u5728\u6D4F\u89C8\u5668\u6253\u5F00
  open: true,
  // \u662F\u5426\u5F00\u542F https
  https: false,
  // \u670D\u52A1\u7AEF\u6E32\u67D3
  ssr: false,
  // \u5F15\u5165\u7B2C\u4E09\u65B9\u7684\u914D\u7F6E
  optimizeDeps: {&lt;!-- --&gt;
    include: [&quot;moment&quot;, &quot;echarts&quot;, &quot;axios&quot;, &quot;mockjs&quot;]
  },

  \uFF084\uFF09\u4FDD\u7559\u90E8\u5206console.info\u53EA\u662F\u5220\u9664console.log
  \u4E00\u4E9B\u91CD\u8981\u4FE1\u606F\u53EF\u4EE5\u7279\u6B8A\u5316\u6253\u5370console.info\u7559\u4E0B
  compress: {
     drop_console: true, // \u6E05\u9664 console \u8BED\u53E5
     drop_debugger: false, // \u6E05\u9664 debugger \u8BED\u53E5
     pure_funcs: [&#39;console.log&#39;] // \u79FB\u9664console
   }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vite3-x-babel-eslint" tabindex="-1"><a class="header-anchor" href="#vite3-x-babel-eslint" aria-hidden="true">#</a> vite3.x+babel+eslint</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vite 3.x \u5DF2\u7ECF\u5C06 esbuild \u4F5C\u4E3A\u9ED8\u8BA4\u6784\u5EFA\u9009\u9879\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u914D\u7F6E\u5728\u6784\u5EFA\u65F6\u79FB\u9664\u4EE3\u7801\u4E2D\u7684 console.log\u3001debugger\u3002

(1)\u914D\u7F6Evite.config.ts,\u79FB\u9664\u6253\u5370\u4FE1\u606F
vite 3.x \u5DF2\u7ECF\u5C06 esbuild \u4F5C\u4E3A\u9ED8\u8BA4\u6784\u5EFA\u9009\u9879\uFF0C
\u4F60\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u914D\u7F6E\u5728\u6784\u5EFA\u65F6\u79FB\u9664\u4EE3\u7801\u4E2D\u7684 console.log\u3001debugger\u3002
// vite.config.ts
import { defineConfig } from &#39;vite&#39;

export default defineConfig({
    build\uFF1A{
      minify: &#39;esbuild&#39;, // \u9ED8\u8BA4
    }\uFF0C
    esbuild: {
      drop: [&#39;console&#39;, &#39;debugger&#39;],
    },
});

\u4F46\u662Fvite3.x\u652F\u6301vue2.x\u914D\u7F6E
\u5982\u679C\u4F60\u4ECD\u7136\u4F7F\u7528 terser \u4F5C\u4E3A\u6784\u5EFA\u5DE5\u5177\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u914D\u7F6E\u5B9E\u73B0\u6B64\u76EE\u7684\u3002
 build: {
    minify: &#39;terser&#39;,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  }


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5F85\u8865\u5145</li></ul><h2 id="_001es-module-\u4E2D\u4F7F\u7528-dirname" tabindex="-1"><a class="header-anchor" href="#_001es-module-\u4E2D\u4F7F\u7528-dirname" aria-hidden="true">#</a> 001es module \u4E2D\u4F7F\u7528__dirname</h2><p>\u56E0\u4E3A path \u662F Node \u6A21\u5757\uFF0C\u4E00\u4E9B\u65B9\u6CD5\u65E0\u6CD5\u76F4\u63A5\u4F7F\u7528\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728nodejs\u4E2D\u4F7F\u7528es module\u65F6\uFF0C__dirname\u672A\u5B9A\u4E49\uFF0C\u56E0\u4E3A__dirname\u3001__filename\u53EA\u6709\u5728commonjs \u4E2D\u624D\u6709\uFF1B

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),x={href:"https://github.com/anderlaw/react-webpack-MF.git",target:"_blank",rel:"noopener noreferrer"},f=i("\u501F\u9274\u4E86\u5F88\u591A github \u9879\u76EE\u4E0A\u7684\u4EE3\u7801"),k=e("h4",{id:"\u6253\u5305\u6210\u7EC4\u4EF6\u5E93-\u7136\u540E\u5BFC\u51FA\u6210-lib-\u5E93\u5305-\u518D\u901A\u8FC7\u8D44\u6E90\u5F15\u7528",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6253\u5305\u6210\u7EC4\u4EF6\u5E93-\u7136\u540E\u5BFC\u51FA\u6210-lib-\u5E93\u5305-\u518D\u901A\u8FC7\u8D44\u6E90\u5F15\u7528","aria-hidden":"true"},"#"),i(" \u6253\u5305\u6210\u7EC4\u4EF6\u5E93\uFF0C\u7136\u540E\u5BFC\u51FA\u6210 lib \u5E93\u5305\uFF0C\u518D\u901A\u8FC7\u8D44\u6E90\u5F15\u7528")],-1),w=i("\u6210\u672C\uFF0C\u9700\u8981\u6784\u9020\u4E00\u4E2A lib \u5E93\uFF0C\u89C1"),j=i("vitelib \u5F00\u53D1\u7EC4\u4EF6\u5E93"),y=e("h3",{id:"webpack-\u6A21\u5757\u8054\u90A6\u5B9E\u73B0\u7684\u66F4\u597D\u3002",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webpack-\u6A21\u5757\u8054\u90A6\u5B9E\u73B0\u7684\u66F4\u597D\u3002","aria-hidden":"true"},"#"),i(" webpack \u6A21\u5757\u8054\u90A6\u5B9E\u73B0\u7684\u66F4\u597D\u3002")],-1),E=e("p",null,"\u6211\u4EEC\u5229\u7528\u6A21\u5757\u8054\u90A6\uFF0C\u5C06\u9879\u76EE\u4E2D\u6240\u6709\u7684\u516C\u5171\u7EC4\u4EF6\u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u9879\u76EE\uFF0C\u7136\u540E\u5BFC\u51FA expose \u66B4\u9732\uFF0C\u518D\u6D88\u8D39\u8005\u54EA\u91CC\uFF0C\u5229\u7528 remote \u5F15\u7528\u3002 \u6CE8\u610F\u914D\u7F6E output \u7684\u76EE\u5F55\u4EE3\u7801\u3002 \u597D\u5904\uFF1A\u5B9E\u73B0\u4E86\u4EE3\u7801\u7684\u516C\u5171\u4EE3\u7801\u62BD\u79BB\uFF0C\u76F8\u5BF9\u4E8E\u8D44\u6E90\u5E93\u6765\u8BF4\uFF0C\u4FEE\u6539\u65B9\u4FBF\uFF0C\u51CF\u5C11\u4E86\u642D\u5EFA\u4E00\u4E2A\u79C1\u6709\u7EC4\u4EF6\u5E93\u7684 vedecco \u95EE\u9898\u3002",-1),B=i("\u5B9E\u73B0 demo \u6848\u4F8B\uFF1A"),A={href:"https://gitee.com/nyhxiaoning/webpack-cli-tools-list.git",target:"_blank",rel:"noopener noreferrer"},z=i("\u6A21\u5757\u8054\u90A6\u5B9E\u73B0\u548C\u5C01\u88C5"),C=l('<p><img src="'+v+`" alt="\u6A21\u5757\u8054\u90A6\u540C\u65F6\u8FD0\u884Clib\u516C\u5171\u4F9D\u8D56\u5E93\uFF0Ccom\u7EC4\u4EF6\u5E93\uFF0C\u4E3B\u9879\u76EE"></p><h2 id="_003webpack-\u4E2D\u4F7F\u7528-cdn-\u51CF\u5C11\u8D44\u6E90\u4E0B\u8F7D-\u52A0\u5FEB\u901F\u5EA6" tabindex="-1"><a class="header-anchor" href="#_003webpack-\u4E2D\u4F7F\u7528-cdn-\u51CF\u5C11\u8D44\u6E90\u4E0B\u8F7D-\u52A0\u5FEB\u901F\u5EA6" aria-hidden="true">#</a> 003webpack \u4E2D\u4F7F\u7528 cdn \u51CF\u5C11\u8D44\u6E90\u4E0B\u8F7D\uFF0C\u52A0\u5FEB\u901F\u5EA6</h2><h2 id="_003webpack-\u4E2D\u5F00\u53D1\u4E00\u4E2A-plugin" tabindex="-1"><a class="header-anchor" href="#_003webpack-\u4E2D\u5F00\u53D1\u4E00\u4E2A-plugin" aria-hidden="true">#</a> 003webpack \u4E2D\u5F00\u53D1\u4E00\u4E2A plugin</h2><p>webpack \u63D2\u4EF6\u4E2D\uFF0C\u4E24\u4E2A\u5BF9\u8C61 compiler \u7F16\u8BD1\u5BF9\u8C61\u662F webpack \u542F\u52A8\u540E\uFF0C\u4E00\u6B21\u6027\u751F\u6210 webpack \u73AF\u5883\u914D\u7F6E\uFF0C\u53EF\u4EE5\u8BBF\u95EE\u6574\u4E2A webpack \u7684\u8FD0\u884C\u65F6\u671F\u3002\u63D2\u4EF6\u5E94\u7528\u65F6\u5019\uFF0C\u4F1A\u6536\u5230\u6574\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u53EF\u4EE5\u8BBF\u95EE webpack \u7684\u4E3B\u73AF\u5883\u3002</p><p>\u53E6\u4E00\u4E2A compilation \u5BF9\u8C61\u662F webpack \u7684\u5B9E\u65F6\u751F\u6210\u7684\u7F16\u8BD1\u5BF9\u8C61\uFF0C\u4E00\u4E2A compilation \u8868\u73B0\u4E86\u5F53\u524D\u7684\u6A21\u5757\u8D44\u6E90\uFF0C\u7F16\u8BD1\u5185\u5BB9\u4F9D\u8D56\u53D8\u5316\u3002</p><h3 id="\u63D2\u4EF6\u7684\u65F6\u5019\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u7684\u65F6\u5019\u539F\u7406" aria-hidden="true">#</a> \u63D2\u4EF6\u7684\u65F6\u5019\u539F\u7406</h3><p>webpack \u6253\u5305\u662F\u4E00\u79CD\u4E8B\u4EF6\u6D41\u7684\u673A\u5236\uFF0C\u5B83\u7684\u539F\u7406\u662F\u5C06\u5404\u4E2A\u63D2\u4EF6\u4E32\u8054\u8D77\u6765\u3002\u90A3\u4E48\u5B9E\u73B0\u8FD9\u4E00\u5207\u7684\u6838\u5FC3\u5C31\u662F\u5728 compiler \u5BF9\u8C61\u4E2D\u7684 tapable\uFF0C\u5C06 plugin \u63A7\u5236\u5728 webpack \u4E8B\u4EF6\u6D41\u4E0A\u8FD0\u884C\u3002\uFF08\u57FA\u672C\u4F7F\u7528\u51E0\u4E2A tap \u7C7B\u4E2D\u94A9\u5B50\uFF1Acompile \u662F\u521B\u5EFA compilation \u4E4B\u524D\uFF0Ccompilation \u521B\u5EFA\u5B8C\u6210\uFF0Cemit \u8F93\u51FA\u8D44\u6E90\u5230\u76EE\u5F55\u524D\uFF0Cdone \u7F16\u8BD1\u5B8C\u6210\uFF09</p><p>\u6CE8\u610F webpack \u63D2\u4EF6\u4E2D\u65E7\u7684 api:compiler.plugin\uFF0C\u65B0\u7684 api \u662F compiler.hooks.emit.tap(&quot;WebapckTransformplugins&quot;)</p><p>\u63D2\u4EF6\u901A\u8FC7\u5177\u6709 apply \u65B9\u6CD5\u7684 prototype \u5BF9\u8C61\u5B9E\u4F8B\u5316\u51FA\u6765\u3002</p><h3 id="\u63D2\u4EF6\u7684\u57FA\u672C\u5185\u5BB9\u7EC4\u6210" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u7684\u57FA\u672C\u5185\u5BB9\u7EC4\u6210" aria-hidden="true">#</a> \u63D2\u4EF6\u7684\u57FA\u672C\u5185\u5BB9\u7EC4\u6210</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4ECE\u5B98\u7F51\u5F97\u77E5\uFF1A\u7F16\u5199\u4E00\u4E2Awebpack\u63D2\u4EF6\u9700\u8981\u7531\u4EE5\u4E0B\u7EC4\u6210\uFF1A

1. \u4E00\u4E2Ajavascript\u547D\u540D\u51FD\u6570\u3002
2. \u5728\u63D2\u4EF6\u51FD\u6570\u7684prototype\u4E0A\u5B9A\u4E49\u4E00\u4E2A apply \u65B9\u6CD5\u3002
3. \u6307\u5B9A\u4E00\u4E2A\u7ED1\u5B9A\u5230webpack\u81EA\u8EAB\u7684\u94A9\u5B50\u51FD\u6570\u3002
4. \u5904\u7406webpack\u5185\u90E8\u5B9E\u5217\u7684\u7279\u5B9A\u6570\u636E\u3002
5. \u529F\u80FD\u5B8C\u6210\u540E\u8C03\u7528webpack\u63D0\u4F9B\u7684\u56DE\u8C03\u51FD\u6570\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-config-js-\u4E2D\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#vue-config-js-\u4E2D\u5185\u5BB9" aria-hidden="true">#</a> vue.config.js \u4E2D\u5185\u5BB9</h3>`,12),D={id:"\u5F00\u53D1\u63D2\u4EF6\u7684\u6B65\u9AA4-\u9879\u76EE\u5730\u5740",tabindex:"-1"},N=e("a",{class:"header-anchor",href:"#\u5F00\u53D1\u63D2\u4EF6\u7684\u6B65\u9AA4-\u9879\u76EE\u5730\u5740","aria-hidden":"true"},"#",-1),S=i(" \u5F00\u53D1\u63D2\u4EF6\u7684\u6B65\u9AA4\uFF1A"),L={href:"https://gitee.com/nyhxiaoning/vue3.0-ts-admin.git",target:"_blank",rel:"noopener noreferrer"},P=i("\u9879\u76EE\u5730\u5740"),F=l(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7B2C\u4E00\u6B65\uFF1A\u521B\u5EFA\u4E00\u4E2Ajs\u547D\u4EE4\u7684\u7C7B\uFF0C\u6DFB\u52A0apply\u65B9\u6CD5\u3002
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_004-\u5F00\u53D1-webpack-\u548C-vite-\u63D2\u4EF6\u7684\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#_004-\u5F00\u53D1-webpack-\u548C-vite-\u63D2\u4EF6\u7684\u6A21\u677F" aria-hidden="true">#</a> 004 \u5F00\u53D1 webpack \u548C vite \u63D2\u4EF6\u7684\u6A21\u677F</h2><h2 id="\u5F00\u53D1\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u63D2\u4EF6" aria-hidden="true">#</a> \u5F00\u53D1\u63D2\u4EF6</h2><p>\u4E0A\u9762\u5199\u4E86\u539F\u751F\u5F00\u53D1 webpack \u548C vite \u63D2\u4EF6\u529F\u80FD\u7684\u4EE3\u7801\u548C\u811A\u624B\u67B6\uFF0C\u6709\u6CA1\u6709\u6A21\u677F\uFF0C\u771F\u7684\u6709\u3002</p><p>https://github.com/nyhxiaoning/gogocode.git</p><h3 id="\u5F00\u53D1-webpack-\u7684\u63D2\u4EF6\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1-webpack-\u7684\u63D2\u4EF6\u6A21\u677F" aria-hidden="true">#</a> \u5F00\u53D1 webpack \u7684\u63D2\u4EF6\u6A21\u677F</h3>`,6),I={href:"https://github.com/thx/gogocode",target:"_blank",rel:"noopener noreferrer"},R=i("gogocode"),T=i("/"),V={href:"https://github.com/thx/gogocode/tree/main/example",target:"_blank",rel:"noopener noreferrer"},M=i("example"),O=i("/"),W=e("strong",null,"demo-with-webpack-plugin",-1),U=i("/"),H=e("h3",{id:"\u5F00\u53D1-vite-\u7684\u63D2\u4EF6\u6A21\u677F",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5F00\u53D1-vite-\u7684\u63D2\u4EF6\u6A21\u677F","aria-hidden":"true"},"#"),i(" \u5F00\u53D1 vite \u7684\u63D2\u4EF6\u6A21\u677F")],-1),J={href:"https://github.com/thx/gogocode",target:"_blank",rel:"noopener noreferrer"},G=i("gogocode"),K=i("/"),Q={href:"https://github.com/thx/gogocode/tree/main/example",target:"_blank",rel:"noopener noreferrer"},X=i("example"),Y=i("/"),Z=e("strong",null,"demo-with-vite-plugin",-1),$=i("/"),ee=l(`<h2 id="_005rollup-\u5F00\u53D1\u4E00\u4E2A\u901A\u7528\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_005rollup-\u5F00\u53D1\u4E00\u4E2A\u901A\u7528\u63D2\u4EF6" aria-hidden="true">#</a> 005rollup \u5F00\u53D1\u4E00\u4E2A\u901A\u7528\u63D2\u4EF6</h2><h3 id="\u6CE8\u610F-rollup-\u5F15\u5165-babel-\u7684\u65F6\u5019-\u6709\u4E00\u4E2A\u5751" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F-rollup-\u5F15\u5165-babel-\u7684\u65F6\u5019-\u6709\u4E00\u4E2A\u5751" aria-hidden="true">#</a> \u6CE8\u610F rollup \u5F15\u5165 babel \u7684\u65F6\u5019\uFF0C\u6709\u4E00\u4E2A\u5751</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rollup --config\u7B80\u5199rollup  -c

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_006-\u5229\u7528-tsup-\u5FEB\u901F\u6253\u5305\u51FA\u5404\u79CD-ts-\u7684\u4F9D\u8D56\u5305-\u7C7B\u4F3C-rollup" tabindex="-1"><a class="header-anchor" href="#_006-\u5229\u7528-tsup-\u5FEB\u901F\u6253\u5305\u51FA\u5404\u79CD-ts-\u7684\u4F9D\u8D56\u5305-\u7C7B\u4F3C-rollup" aria-hidden="true">#</a> 006.\u5229\u7528 tsup \u5FEB\u901F\u6253\u5305\u51FA\u5404\u79CD ts \u7684\u4F9D\u8D56\u5305,\u7C7B\u4F3C rollup</h2>`,13),ie=i("Bundle your TypeScript library with no config, powered by "),ne={href:"https://github.com/evanw/esbuild",target:"_blank",rel:"noopener noreferrer"},se=i("esbuild"),le=i("."),de=l(`<p>\u4E0A\u9762\u662F\u5B98\u65B9\u7684\u8BF4\u660E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tsup src/index.ts --dts --format cjs,esm
\u6307\u5B9A\u6253\u5305\u51FAcjs,esm\u7684\u6A21\u5757\uFF0C\u540C\u65F6\u81EA\u52A8\u751F\u6210\u4E00\u4E2Ad.ts\u7684\u58F0\u660E\u6587\u4EF6\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-\u7B2C\u4E09\u65B9-vite-\u63D2\u4EF6\u7684\u914D\u7F6E\u5F00\u53D1\u548C\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#_1-\u7B2C\u4E09\u65B9-vite-\u63D2\u4EF6\u7684\u914D\u7F6E\u5F00\u53D1\u548C\u5F15\u5165" aria-hidden="true">#</a> \uFF081\uFF09\u7B2C\u4E09\u65B9 vite \u63D2\u4EF6\u7684\u914D\u7F6E\u5F00\u53D1\u548C\u5F15\u5165</h3>`,3),ae={href:"https://gitee.com/nyhxiaoning/vite-cli-tools-list.git",target:"_blank",rel:"noopener noreferrer"},re=i("vite \u811A\u624B\u67B6\u63D2\u4EF6\u7684\u914D\u7F6E\u548C\u4F7F\u7528"),te=e("p",null,"\u7B2C\u4E00\u6B65\uFF1A\u521B\u5EFA\u4E00\u4E2A\u63D2\u4EF6\u9879\u76EE\uFF1Avite-plugin-template",-1),ue=e("p",null,"\u901A\u8FC7\u4E0A\u9762\u7684 tsup \u5BFC\u51FA\u540E\uFF0C\u6210\u4E3A\u4E00\u4E2A\u63D2\u4EF6\u3002",-1),oe=e("p",null,"\u7136\u540E\u56DE\u5230\u4E00\u4E2A\u9879\u76EE\u4E2D\u4F7F\u7528",-1),ve=e("p",null,"\u7B2C\u4E8C\u6B65\uFF1A\u5728\u9879\u76EE vite-vue3 \u4E2D\u4F7F\u7528",-1),ce=i("\u5148\u7528\uFF1A"),me=e("code",null,"pnpm link <dir>",-1),be={href:"https://pnpm.io/zh/cli/link#pnpm-link-dir",target:"_blank",rel:"noopener noreferrer"},pe=l(`<p>\u4ECE\u6267\u884C\u6B64\u547D\u4EE4\u7684\u8DEF\u5F84\u6216\u901A\u8FC7 <code>&lt;dir&gt;</code> \u6307\u5B9A\u7684\u6587\u4EF6\u5939\uFF0C\u94FE\u63A5<code>package</code>\u5230<code>node_modules</code>\u4E2D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pnpm link ./../vite-plugin-template/
\u5C06\u540C\u4E00\u6587\u4EF6\u5939\u7684vite-lugin-template\u9879\u76EE\u94FE\u63A5\u5230vite-vue3\u9879\u76EE\u4E2D

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_007babel-\u662F\u5982\u4F55\u5B9E\u73B0\u5F15\u5165-commonjs-\u8F6C\u6362\u6210-es" tabindex="-1"><a class="header-anchor" href="#_007babel-\u662F\u5982\u4F55\u5B9E\u73B0\u5F15\u5165-commonjs-\u8F6C\u6362\u6210-es" aria-hidden="true">#</a> 007babel \u662F\u5982\u4F55\u5B9E\u73B0\u5F15\u5165 commonjs \u8F6C\u6362\u6210 es</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>es module \u5728\u8F6C\u6362\u65F6\u4F1A\u5728 export \u4E0A\u6302\u8F7D__esModule \u5C5E\u6027\u3002
\u6240\u6709\u5728\u5BFC\u5165\u65F6\uFF0C\u5982\u679C\u662F es module \u76F4\u63A5\u8FD4\u56DE\uFF0C
\u5982\u679C\u4E0D\u662F\u5219\u5F53 cjs \u5904\u7406\uFF0C \u628A\u6574\u4F53\u6A21\u5757\u6302\u5728\u4E00\u4E2A\u5BF9\u8C61\u7684 default \u5C5E\u6027\u4E0A\uFF0C\u8FD9\u6837\u540E\u7EED\u7684\u64CD\u4F5C\u5C31\u7EDF\u4E00\u4E86\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_008-\u5173\u4E8E-rollup-\u548C-babel-\u5904\u7406-commonjs-\u6A21\u5757\u6210-es-\u6A21\u5757\u7684\u601D\u8003\u3002" tabindex="-1"><a class="header-anchor" href="#_008-\u5173\u4E8E-rollup-\u548C-babel-\u5904\u7406-commonjs-\u6A21\u5757\u6210-es-\u6A21\u5757\u7684\u601D\u8003\u3002" aria-hidden="true">#</a> 008 \u5173\u4E8E rollup \u548C babel \u5904\u7406 commonjs \u6A21\u5757\u6210 es \u6A21\u5757\u7684\u601D\u8003\u3002</h2><p>rollup \u76F4\u63A5\u628A default export \u6302\u5230\u4E86 module.exports \u4E0A\u3002\u800C babel \u8FD8\u662F\u901A\u8FC7 __esModule \u7684\u6807\u8BC6\uFF0C\u6302\u8F7D\u5728 exports.default \u4E0A\u3002\u8FD9\u4E2A\u5730\u65B9\u9700\u8981\u7279\u522B\u5173\u6CE8\uFF0C \u5047\u5982\u6709\u4E00\u4E2A\u5E93\u4E4B\u524D\u65F6 \u4F7F\u7528 babel \u5904\u7406\u7684\uFF0C \u90A3 cjs \u7528\u6237\u53EA\u80FD\u4EE5 <code>require(&#39;lib&#39;).default</code> \u7684\u5F62\u5F0F\u6765\u4F7F\u7528\u3002 \u6709\u4E00\u5929\u8FD9\u4E2A\u5E93\u7684\u4F5C\u8005\u51B3\u5B9A\u4F7F\u7528 rollup, \u90A3\u4E48 cjs \u7684\u7528\u6237\u60F3\u8981\u4F7F\u7528\u65B0\u7684\u5E93\uFF0C\u53EA\u80FD\u53BB\u66F4\u6539\u539F\u5148\u7684\u4EE3\u7801\u3002</p><p>\u6211\u4EEC\u5E73\u5E38\u7684\u5F00\u53D1\u4E2D\uFF0C\u53EF\u80FD\u6211\u4EEC\u5DF2\u7ECF\u4E60\u60EF\u4E86 default export, \u7279\u522B\u662F\u5728 vue, react \u9879\u76EE\u4E2D\uFF0C\u6211\u4EEC\u81EA\u7136\u7684\u5199\u4E0B <code>export default myComponent</code>\u3002</p><p>\u5982\u679C\u672C\u8EAB\u9879\u76EE\u90FD\u5EFA\u7ACB\u5728 es module \u7684\u4F53\u7CFB\u4E0B, default export \u7EDD\u5BF9\u662F\u4E00\u4E2A \u5F88\u4FBF\u5229\u7684\u65B9\u5F0F\u3002</p><p>\u4F46\u662F\uFF0C\u5982\u679C\u4F60\u540C\u65F6\u9700\u8981\u652F\u6301 cjs \u548C esm,\u6D89\u53CA\u5230\u76F8\u4E92\u8C03\u7528\u7684\u95EE\u9898\uFF0C \u90A3\u5C31\u8981\u614E\u91CD\u8003\u8651 <code>default export</code>\u3002</p><p><strong>\u56E0\u4E3A esm \u4E0E cjs \u5982\u4F55\u6210\u529F\u76F8\u4E92\u4F7F\u7528\uFF0C\u5E76\u4E0D\u7531\u4F60\u51B3\u5B9A\uFF0C\u800C\u662F\u7531\u5E2E\u4F60\u6253\u5305\u5904\u7406\u7684\u5DE5\u5177\u51B3\u5B9A\u3002</strong></p>`,10),he={href:"https://juejin.cn/post/6844904126195695624",target:"_blank",rel:"noopener noreferrer"},ge=i("\u5F15\u7528\u5730\u5740");function _e(qe,xe){const s=d("ExternalLinkIcon"),a=d("RouterLink");return t(),u("div",null,[m,e("p",null,[e("a",b,[p,n(s)])]),e("p",null,[e("a",h,[g,n(s)]),_]),q,e("p",null,[e("a",x,[f,n(s)])]),k,e("p",null,[w,n(a,{to:"/15%E5%B7%A5%E5%85%B7%E5%92%8C%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE%E5%B7%A5%E7%A8%8B%E5%8C%96%E9%97%AE%E9%A2%98%E8%AE%B0%E5%BD%95/001vitevue3%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E5%BA%93.html"},{default:o(()=>[j]),_:1})]),y,E,e("p",null,[B,e("a",A,[z,n(s)])]),C,e("h4",D,[N,S,e("a",L,[P,n(s)])]),F,e("p",null,[e("a",I,[R,n(s)]),T,e("a",V,[M,n(s)]),O,W,U]),H,e("p",null,[e("a",J,[G,n(s)]),K,e("a",Q,[X,n(s)]),Y,Z,$]),ee,e("p",null,[ie,e("a",ne,[se,n(s)]),le]),de,e("p",null,[e("a",ae,[re,n(s)])]),te,ue,oe,ve,e("p",null,[ce,me,e("a",be,[n(s)])]),pe,e("p",null,[e("a",he,[ge,n(s)])])])}var ke=r(c,[["render",_e],["__file","011webpack\u548Cvite\u5DE5\u7A0B\u5316\u63D2\u4EF6\u548C\u5F00\u53D1\u529F\u80FD\u6C47\u603B.html.vue"]]);export{ke as default};
