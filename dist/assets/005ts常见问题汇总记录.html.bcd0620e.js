import{_ as e,o as i,c as n,d as s}from"./app.10c769de.js";const l={},t=s(`<h2 id="_000tsconfig-ts-\u914D\u7F6E\u6587\u4EF6\u6C47\u603B\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_000tsconfig-ts-\u914D\u7F6E\u6587\u4EF6\u6C47\u603B\u8BF4\u660E" aria-hidden="true">#</a> 000tsconfig.ts \u914D\u7F6E\u6587\u4EF6\u6C47\u603B\u8BF4\u660E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
   // \u6307\u5B9A\u9700\u8981\u7F16\u8BD1\u6587\u4EF6 \u5426\u5219\u9ED8\u8BA4\u5F53\u524D\u76EE\u5F55\u4E0B\u9664\u4E86exclude\u4E4B\u5916\u7684\u6240\u6709.ts, .d.ts,.tsx \u6587\u4EF6
   &quot;include&quot;: [&quot;./test.ts&quot;],
   // \u6307\u5B9A\u9700\u8981\u7F16\u8BD1\u6587\u4EF6 \u5426\u5219\u9ED8\u8BA4\u5F53\u524D\u76EE\u5F55\u4E0B\u9664\u4E86exclude\u4E4B\u5916\u7684\u6240\u6709.ts, .d.ts,.tsx \u6587\u4EF6
   &quot;files&quot;: [&quot;./src/**/*&quot;],
   // \u4E0D\u7F16\u8BD1\u67D0\u4E9B\u6587\u4EF6
   &quot;exclude&quot;: [&quot;test.ts&quot;],
   &quot;compilerOptions&quot;: {
       // \u53EA\u7F16\u8BD1\u4FEE\u6539\u8FC7\u7684\u6587\u4EF6,\u8FD9\u4E2A\u65F6\u5019\u4F1A\u751F\u6210tsconfig.tsbuildinfo,\u4E0B\u6B21\u7F16\u8BD1\u7684\u65F6\u5019\u4F1A\u8FDB\u884C\u5BF9\u6BD4\u53EA\u7F16\u8BD1\u4FEE\u6539\u8FC7\u7684\u6587\u4EF6
       &quot;incremental&quot;: true,
       // \u6307\u5B9A ECMAScript \u76EE\u6807\u7248\u672C: &#39;ES3&#39; (default), &#39;ES5&#39;, &#39;ES2015&#39;, &#39;ES2016&#39;, &#39;ES2017&#39;, or &#39;ESNEXT&#39;
       &quot;target&quot;: &quot;es5&quot;,
       // \u6307\u5B9A\u4F7F\u7528\u6A21\u5757: &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39; or &#39;es2015&#39;
       &quot;module&quot;: &quot;commonjs&quot;,
       /* \u6CE8\u610F\uFF1A\u5982\u679C\u672A\u6307\u5B9A--lib\uFF0C\u5219\u4F1A\u6CE8\u5165\u9ED8\u8BA4\u7684librares\u5217\u8868\u3002\u6CE8\u5165\u7684\u9ED8\u8BA4\u5E93\u4E3A\uFF1A
       \u5BF9\u4E8E --target ES5: DOM,ES5,ScriptHost
       \u5BF9\u4E8E --target ES6: DOM,ES6,DOM.Iterable,ScriptHost
       TS \u7EDD\u4E0D\u4F1A\u5728\u60A8\u7684\u4EE3\u7801\u4E2D\u6CE8\u5165polyfill,\u6240\u4EE5\u9700\u8981\u4F60\u81EA\u5DF1\u5236\u5B9A\u7F16\u8BD1lib
       */
       &quot;lib&quot;: [&quot;es5&quot;, &quot;dom&quot;, &quot;ScriptHost&quot;, &quot;es2015.promise&quot;],
       // \u5141\u8BB8\u7F16\u8BD1JS
       &quot;allowJs&quot;: true,
       /*
       \u662F\u5426\u68C0\u6D4BJS\u7684\u8BED\u6CD5,\u4F8B\u5982\u4E0B\u9762\u7684\u8BED\u6CD5\u7F16\u8F91\u5668\u4F1A\u62A5\u9519
       let name = &#39;paul&#39;;
       console.log(name.a.b)
       */
       &quot;checkJs&quot;: true,
       // \u6307\u5B9A jsx \u4EE3\u7801\u7684\u751F\u6210: &#39;preserve&#39;, &#39;react-native&#39;, or &#39;react&#39;
       &quot;jsx&quot;: preserve,
       /*
       \u5982\u679C\u8BBE\u4E3Atrue\uFF0C\u7F16\u8BD1\u6BCF\u4E2Ats\u6587\u4EF6\u4E4B\u540E\u4F1A\u751F\u6210\u4E00\u4E2Ajs\u6587\u4EF6\u548C\u4E00\u4E2A\u58F0\u660E\u6587\u4EF6,
       declaration\u548CallowJs\u4E0D\u80FD\u540C\u65F6\u8BBE\u4E3Atrue
       */
       &quot;declaration&quot;: true
       // \u503C\u4E3Atrue\u6216false\uFF0C\u6307\u5B9A\u662F\u5426\u4E3A\u58F0\u660E\u6587\u4EF6.d.ts\u751F\u6210map\u6587\u4EF6
       &quot;declarationMap&quot;: true
       // \u7528\u6765\u6307\u5B9A\u7F16\u8BD1\u65F6\u662F\u5426\u751F\u6210.map\u6587\u4EF6
       &quot;sourceMap&quot;: true,
       // \u5F53module\u8BBE\u7F6E\u4E3A &#39;amd&#39; and &#39;system&#39;\u7684\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528\u6B64\u547D\u4EE4,\u8FD9\u6837\u53EF\u4EE5\u5C06ts\u6587\u4EF6\u6253\u5305\u5230\u4E00\u4E2A\u76EE\u5F55\u4E0B
       &quot;outFile&quot;:&quot;./&quot;,
       //  outDir \u7F16\u8BD1\u540E\u7684\u6587\u4EF6\u5B58\u5230\u5230\u54EA\u4E2A\u76EE\u5F55\u4E0B,\u9ED8\u8BA4\u662F\u6BCF\u4E00\u4E2Ats\u6587\u4EF6\u7684\u5F53\u524D\u76EE\u5F55,,\u4E0B\u9762\u7684\u914D\u7F6E\u5C31\u662F\u628Ats\u7F16\u8BD1\u5230build\u76EE\u5F55\u4E0B
       &quot;outDir&quot;: &#39;./build&#39;,
       // \u4E0B\u9762\u5355\u72EC\u4ECB\u7ECD
       &quot;rootDir&quot;: &quot;./src&quot;,
       // \u662F\u5426\u7F16\u8BD1\u6784\u5EFA\u5F15\u7528\u9879\u76EE,\u5F88\u590D\u6742\u540E\u9762\u4ECB\u7ECD
       &quot;composite&quot;: true,
       // \u6307\u5B9A\u6587\u4EF6\u7528\u6765\u5B58\u50A8\u589E\u91CF\u7F16\u8BD1\u4FE1\u606F,\u9ED8\u8BA4\u662Ftsconfig.tsbuildinfo
       &quot;tsBuildInfoFile&quot;: &quot;./&quot;,
       // \u7F16\u8BD1\u7684\u65F6\u5019\u5220\u9664\u6CE8\u91CA
       &quot;removeComments&quot;: true,
       // \u4E0D\u751F\u6210\u7F16\u8BD1\u6587\u4EF6\uFF0C\u8FD9\u4E2A\u4E00\u822C\u6BD4\u8F83\u5C11\u7528,\u8FD9\u4E2Abuild\u76EE\u5F55\u4E0B\u5C06\u6CA1\u6709\u4EFB\u4F55\u6587\u4EF6,\u4F46\u662F\u4F1A\u8FDB\u884C\u7F16\u8BD1,\u6709\u9519\u8BEF\u4F1A\u629B\u51FA
       &quot;noEmit&quot;: true,
       // \u662F\u5426\u5F15\u5165npm\u5305tslib\u4E2D\u7684\u8F85\u52A9\u51FD\u6570,__extends\u7B49
       &quot;importHelpers&quot;: true,
       // \u5F53target\u4E3A&#39;ES5&#39; or &#39;ES3&#39;\u65F6\uFF0C\u4E3A&#39;for-of&#39;, spread, and destructuring&#39;\u4E2D\u7684\u8FED\u4EE3\u5668\u63D0\u4F9B\u5B8C\u5168\u652F\u6301
       &quot;downlevelIteration&quot;: true,
       // isolatedModules\u7684\u503C\u4E3Atrue\u6216false\uFF0C\u6307\u5B9A\u662F\u5426\u5C06\u6BCF\u4E2A\u6587\u4EF6\u4F5C\u4E3A\u5355\u72EC\u7684\u6A21\u5757\uFF0C\u9ED8\u8BA4\u4E3Atrue\uFF0C\u5B83\u4E0D\u53EF\u4EE5\u548Cdeclaration\u540C\u65F6\u8BBE\u5B9A
       // \u4E0D\u662F\u5F88\u7406\u89E3,\u5C06\u6BCF\u4E00\u4E2A\u6587\u4EF6\u4F5C\u4E3A\u5355\u72EC\u6A21\u5757
       &quot;isolatedModules&quot;: true,
       /* Strict Type-Checking Options */
       // \u4E25\u683C\u6A21\u5F0F\u5C06\u4F1A\u6253\u5F00\u4E0B\u9762\u7684\u51E0\u4E2A\u9009\u9879
       &quot;strict&quot;: false,
       /*
       \u4E0D\u5141\u8BB8\u53D8\u91CF\u6216\u51FD\u6570\u53C2\u6570\u5177\u6709\u9690\u5F0Fany\u7C7B\u578B,\u4F8B\u5982
       function(name) {
           return name;
       }
       */
       &quot;noImplicitAny&quot;: true,
       // null\u7C7B\u578B\u68C0\u6D4B,const teacher: string = null;\u4F1A\u62A5\u9519
       &quot;strictNullChecks&quot;: true,
       // \u5BF9\u51FD\u6570\u53C2\u6570\u8FDB\u884C\u4E25\u683C\u9006\u53D8\u6BD4\u8F83
       &quot;strictFunctionTypes&quot;: true,
       // \u4E25\u683C\u68C0\u67E5bind call apply
       &quot;strictBindCallApply&quot;: true,
       // \u6B64\u89C4\u5219\u5C06\u9A8C\u8BC1\u6784\u9020\u51FD\u6570\u5185\u90E8\u521D\u59CB\u5316\u524D\u540E\u5DF2\u5B9A\u4E49\u7684\u5C5E\u6027\u3002
       &quot;strictPropertyInitialization&quot;: true,
       // \u68C0\u6D4Bthis\u662F\u5426\u9690\u5F0F\u6307\u5B9A
       &quot;noImplicitThis&quot;: true,
       // \u4F7F\u7528js\u7684\u4E25\u683C\u6A21\u5F0F,\u5728\u6BCF\u4E00\u4E2A\u6587\u4EF6\u4E0A\u90E8\u58F0\u660E use strict
       &quot;alwaysStrict&quot;: true,
       /* Additional Checks */
       // \u9ED8\u8BA4false,\u662F\u5426\u68C0\u6D4B\u5B9A\u4E49\u4E86\u4F46\u662F\u6CA1\u4F7F\u7528\u7684\u53D8\u91CF
       &quot;noUnusedLocals&quot;: true,
       // \u7528\u4E8E\u68C0\u67E5\u662F\u5426\u6709\u5728\u51FD\u6570\u4F53\u4E2D\u6CA1\u6709\u4F7F\u7528\u7684\u53C2\u6570
       &quot;noUnusedParameters&quot;: true,
       // \u7528\u4E8E\u68C0\u67E5\u51FD\u6570\u662F\u5426\u6709\u8FD4\u56DE\u503C\uFF0C\u8BBE\u4E3Atrue\u540E\uFF0C\u5982\u679C\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C\u5219\u4F1A\u63D0\u793A
       &quot;noImplicitReturns&quot;: true,
       // \u7528\u4E8E\u68C0\u67E5switch\u4E2D\u662F\u5426\u6709case\u6CA1\u6709\u4F7F\u7528break\u8DF3\u51FAswitch
       &quot;noFallthroughCasesInSwitch&quot;: true,
       /* Module Resolution Options */
       // \u7528\u4E8E\u9009\u62E9\u6A21\u5757\u89E3\u6790\u7B56\u7565\uFF0C\u6709&#39;node&#39;\u548C&#39;classic&#39;\u4E24\u79CD\u7C7B\u578B
       &quot;moduleResolution&quot;: &quot;node&quot;,
       // \u590D\u6742\u7684\u5F88 \u4E0B\u9762\u5355\u72EC\u4ECB\u7ECD\u8FD9\u4E09\u4E2A\u6A21\u5757
       &quot;baseUrl&quot;: &#39;./&#39;
       &quot;paths&quot;: {},
       &quot;rootDirs&quot;: [],
       /* typeRoots\u7528\u6765\u6307\u5B9A\u58F0\u660E\u6587\u4EF6\u6216\u6587\u4EF6\u5939\u7684\u8DEF\u5F84\u5217\u8868\uFF0C\u5982\u679C\u6307\u5B9A\u4E86\u6B64\u9879\uFF0C\u5219\u53EA\u6709\u5728\u8FD9\u91CC\u5217\u51FA\u7684\u58F0\u660E\u6587\u4EF6\u624D\u4F1A\u88AB\u52A0\u8F7D */
       typeRoots: [],
       // types\u7528\u6765\u6307\u5B9A\u9700\u8981\u5305\u542B\u7684\u6A21\u5757\uFF0C\u53EA\u6709\u5728\u8FD9\u91CC\u5217\u51FA\u7684\u6A21\u5757\u7684\u58F0\u660E\u6587\u4EF6\u624D\u4F1A\u88AB\u52A0\u8F7D\u8FDB\u6765
       types:[],
       // \u7528\u6765\u6307\u5B9A\u5141\u8BB8\u4ECE\u6CA1\u6709\u9ED8\u8BA4\u5BFC\u51FA\u7684\u6A21\u5757\u4E2D\u9ED8\u8BA4\u5BFC\u5165
       &quot;allowSyntheticDefaultImports&quot;: true,
       // \u901A\u8FC7\u4E3A\u5BFC\u5165\u5185\u5BB9\u521B\u5EFA\u547D\u540D\u7A7A\u95F4\uFF0C\u5B9E\u73B0CommonJS\u548CES\u6A21\u5757\u4E4B\u95F4\u7684\u4E92\u64CD\u4F5C\u6027
       &quot;esModuleInterop&quot;: true ,
       // \u4E0D\u628A\u7B26\u53F7\u94FE\u63A5\u89E3\u6790\u4E3A\u771F\u5B9E\u8DEF\u5F84\uFF0C\u5177\u4F53\u53EF\u4EE5\u4E86\u89E3\u4E0Bwebpack\u548Cnode.js\u7684symlink\u76F8\u5173\u77E5\u8BC6
       &quot;preserveSymlinks&quot;: true,
       &quot;allowUmdGlobalAccess&quot;: true,

       // sourceRoot\u7528\u4E8E\u6307\u5B9A\u8C03\u8BD5\u5668\u5E94\u8BE5\u627E\u5230TypeScript\u6587\u4EF6\u800C\u4E0D\u662F\u6E90\u6587\u4EF6\u7684\u4F4D\u7F6E\uFF0C\u8FD9\u4E2A\u503C\u4F1A\u88AB\u5199\u8FDB.map\u6587\u4EF6\u91CC
       &quot;sourceRoot&quot;: &#39;&#39;,
       // mapRoot\u7528\u4E8E\u6307\u5B9A\u8C03\u8BD5\u5668\u627E\u5230\u6620\u5C04\u6587\u4EF6\u800C\u975E\u751F\u6210\u6587\u4EF6\u7684\u4F4D\u7F6E\uFF0C\u6307\u5B9Amap\u6587\u4EF6\u7684\u6839\u8DEF\u5F84\uFF0C\u8BE5\u9009\u9879\u4F1A\u5F71\u54CD.map\u6587\u4EF6\u4E2D\u7684sources\u5C5E\u6027
       &quot;mapRoot&quot;,
       // inlineSourceMap\u6307\u5B9A\u662F\u5426\u5C06map\u6587\u4EF6\u5185\u5BB9\u548Cjs\u6587\u4EF6\u7F16\u8BD1\u5728\u4E00\u4E2A\u540C\u4E00\u4E2Ajs\u6587\u4EF6\u4E2D\uFF0C\u5982\u679C\u8BBE\u4E3Atrue,\u5219map\u7684\u5185\u5BB9\u4F1A\u4EE5//#soureMappingURL=\u5F00\u5934\uFF0C\u7136\u540E\u63A5base64\u5B57\u7B26\u4E32\u7684\u5F62\u5F0F\u63D2\u5165\u5728js\u6587\u4EF6\u5E95\u90E8
       &quot;inlineSourceMap&quot;: true,
       // inlineSources\u7528\u4E8E\u6307\u5B9A\u662F\u5426\u8FDB\u4E00\u6B65\u5C06ts\u6587\u4EF6\u7684\u5185\u5BB9\u4E5F\u5305\u542B\u5230\u8F93\u51FA\u6587\u4EF6\u4E2D
       &quot;inlineSources&quot;: true,

       // experimentalDecorators\u7528\u4E8E\u6307\u5B9A\u662F\u5426\u542F\u7528\u5B9E\u9A8C\u6027\u7684\u88C5\u9970\u5668\u7279\u6027
       &quot;experimentalDecorators&quot;: true,

       // emitDecoratorMetadata\u7528\u4E8E\u6307\u5B9A\u662F\u5426\u4E3A\u88C5\u4E0A\u53BB\u63D0\u4F9B\u5143\u6570\u636E\u652F\u6301\uFF0C\u5173\u4E8E\u5143\u6570\u636E\uFF0C\u4E5F\u662FES6\u7684\u65B0\u6807\u51C6\uFF0C\u53EF\u4EE5\u901A\u8FC7Reflect\u63D0\u4F9B\u7684\u9759\u6001\u65B9\u6CD5\u83B7\u53D6\u5143\u6570\u636E\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528Reflect\u7684\u4E00\u4E9B\u65B9\u6CD5\uFF0C\u9700\u8981\u5F15\u7528ES2015.Reflect\u8FD9\u4E2A\u5E93
       &quot;emitDecoratorMetadata&quot;: true,
       // compileOnSave\u7684\u503C\u662Ftrue\u6216false\uFF0C\u5982\u679C\u8BBE\u4E3Atrue\uFF0C\u5728\u6211\u4EEC\u7F16\u8F91\u4E86\u9879\u76EE\u4E2D\u7684\u6587\u4EF6\u4FDD\u5B58\u7684\u65F6\u5019\uFF0C\u7F16\u8F91\u5668\u4F1A\u6839\u636Etsconfig.json\u4E2D\u7684\u914D\u7F6E\u91CD\u65B0\u751F\u6210\u6587\u4EF6\uFF0C\u4E0D\u8FC7\u8FD9\u4E2A\u8981\u7F16\u8F91\u5668\u652F\u6301
       &quot;compileOnSave&quot;: true,
       // \u5F88\u590D\u6742 \u4E0B\u9762\u4ECB\u7ECD
       &quot;references&quot;:[]&quot;,
   }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tsconfig-ts-\u5E38\u89C1\u914D\u7F6E\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#tsconfig-ts-\u5E38\u89C1\u914D\u7F6E\u8BF4\u660E" aria-hidden="true">#</a> tsconfig.ts \u5E38\u89C1\u914D\u7F6E\u8BF4\u660E</h3><h4 id="compileroptions-\u4E0B\u7684\u914D\u7F6E-target-module-lib-allowjs" tabindex="-1"><a class="header-anchor" href="#compileroptions-\u4E0B\u7684\u914D\u7F6E-target-module-lib-allowjs" aria-hidden="true">#</a> compilerOptions \u4E0B\u7684\u914D\u7F6E\uFF1Atarget,module,lib,allowJs</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  // \u6307\u5B9A ECMAScript \u76EE\u6807\u7248\u672C: &#39;ES3&#39; (default), &#39;ES5&#39;, &#39;ES2015&#39;, &#39;ES2016&#39;, &#39;ES2017&#39;, or &#39;ESNEXT&#39;
  &quot;target&quot;: &quot;es5&quot;,
  // \u6307\u5B9A\u4F7F\u7528\u6A21\u5757: &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39; or &#39;es2015&#39;
  &quot;module&quot;: &quot;commonjs&quot;,
  /*
    \u6CE8\u610F\uFF1A\u5982\u679C\u672A\u6307\u5B9A--lib\uFF0C\u5219\u4F1A\u6CE8\u5165\u9ED8\u8BA4\u7684librares\u5217\u8868\u3002\u6CE8\u5165\u7684\u9ED8\u8BA4\u5E93\u4E3A\uFF1A
    \u5BF9\u4E8E --target ES5: DOM,ES5,ScriptHost
    \u5BF9\u4E8E --target ES6: DOM,ES6,DOM.Iterable,ScriptHost
    TS \u7EDD\u4E0D\u4F1A\u5728\u60A8\u7684\u4EE3\u7801\u4E2D\u6CE8\u5165polyfill,\u6240\u4EE5\u9700\u8981\u4F60\u81EA\u5DF1\u5236\u5B9A\u7F16\u8BD1lib
  */
  &quot;lib&quot;: [&quot;es5&quot;, &quot;dom&quot;, &quot;ScriptHost&quot;, &quot;es2015.promise&quot;],
  // \u5141\u8BB8\u7F16\u8BD1JS
  &quot;allowJs&quot;: true,



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5728-ts-\u9879\u76EE\u4E2D\u7528-eslint-\u548C-ts-\u63D2\u4EF6\u81EA\u52A8\u5316\u6CE8\u91CA\u4F53\u7528\u4FEE\u6539\u5EFA\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u5728-ts-\u9879\u76EE\u4E2D\u7528-eslint-\u548C-ts-\u63D2\u4EF6\u81EA\u52A8\u5316\u6CE8\u91CA\u4F53\u7528\u4FEE\u6539\u5EFA\u8BAE" aria-hidden="true">#</a> \u5728 ts \u9879\u76EE\u4E2D\u7528 eslint \u548C ts \u63D2\u4EF6\u81EA\u52A8\u5316\u6CE8\u91CA\u4F53\u7528\u4FEE\u6539\u5EFA\u8BAE</h4><p>compilerOptions \u4E2D\u914D\u7F6E plugins</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &quot;plugins&quot;: [{ &quot;name&quot;: &quot;tslint-language-service&quot; }]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_001-\u89E3\u51B3\u5168\u5C40\u5B89\u88C5-ts-\u540E-console-log-\u4E0D\u53EF\u4EE5\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_001-\u89E3\u51B3\u5168\u5C40\u5B89\u88C5-ts-\u540E-console-log-\u4E0D\u53EF\u4EE5\u4F7F\u7528" aria-hidden="true">#</a> 001.\u89E3\u51B3\u5168\u5C40\u5B89\u88C5 ts \u540E console.log \u4E0D\u53EF\u4EE5\u4F7F\u7528</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4EE5\u4E0B\u4E24\u79CD\u65B9\u6CD5\u4EFB\u9009\u5176\u4E00\u5373\u53EF\uFF1A
1.ts-node \u7248\u672C\u8FC7\u9AD8\uFF0C\u964D\u4F4E\u4E00\u4E0B\u7248\u672C\u5C31\u597D\u4E86\u3002

npm i -g ts-node@8.5.4
2.\u5168\u5C40\u5B89\u88C5 ts-node \u8FD0\u884C\u4F9D\u8D56\u5305 tslib \u548C @types/node\u3002
npm i -g tslib @types/node


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_002-\u5F15\u5165\u5DE5\u5177\u51FD\u6570\u7684\u65B9\u6CD5\u62A5\u9519\u5982\u4F55\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#_002-\u5F15\u5165\u5DE5\u5177\u51FD\u6570\u7684\u65B9\u6CD5\u62A5\u9519\u5982\u4F55\u89E3\u51B3" aria-hidden="true">#</a> 002.\u5F15\u5165\u5DE5\u5177\u51FD\u6570\u7684\u65B9\u6CD5\u62A5\u9519\u5982\u4F55\u89E3\u51B3</h2><p>import { UtilInterface } from &#39;@/libs/types/util&#39; // \u5DE5\u5177\u51FD\u6570\u63A5\u53E3 declare module &#39;vue/types/vue&#39; { interface Vue { $util: UtilInterface, //\u8FD9\u6837\u58F0\u660E\uFF0C\u53EF\u5728\u5168\u5C40\u4F7F\u7528this.$util $baseUrl: string, } }</p><p>\u539F\u56E0\uFF1ATypescript 2.0 \u4E4B\u540E\uFF0CTypeScript \u5C06\u4F1A\u9ED8\u8BA4\u7684\u67E5\u770B ./node_modules/@types \u6587\u4EF6\u5939\uFF0C\u81EA\u52A8\u4ECE\u8FD9\u91CC\u6765\u83B7\u53D6\u6A21\u5757\u7684\u7C7B\u578B\u5B9A\u4E49.\u5982\u679C\u6CA1\u6709\u81EA\u5DF1\u5728\u9879\u76EE\u4E2D\u589E\u52A0\u58F0\u660E\u6587\u4EF6\u914D\u5408 typeRoot \u8BBE\u7F6E\u7C7B\u578B\u6587\u4EF6\u5939\u3002</p><h2 id="_003ts-2531-\u53EF\u80FD\u83B7\u53D6\u5230\u5BF9\u8C61\u4E3A\u7A7A-\u90A3\u4E48\u540E\u9762\u589E\u52A0\u4E00\u4E2A-\u975E\u7A7A\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#_003ts-2531-\u53EF\u80FD\u83B7\u53D6\u5230\u5BF9\u8C61\u4E3A\u7A7A-\u90A3\u4E48\u540E\u9762\u589E\u52A0\u4E00\u4E2A-\u975E\u7A7A\u65AD\u8A00" aria-hidden="true">#</a> 003ts-2531 \u53EF\u80FD\u83B7\u53D6\u5230\u5BF9\u8C61\u4E3A\u7A7A\uFF1A\u90A3\u4E48\u540E\u9762\u589E\u52A0\u4E00\u4E2A\uFF01\uFF0C\u975E\u7A7A\u65AD\u8A00</h2><p>//\u52A0\u4E00\u4E2A!\uFF0C\u611F\u53F9\u53F7\u4EC0\u4E48\u610F\u601D\u5462\uFF0C\u5B83\u5176\u5B9E\u662F not null \u7684\u65AD\u8A00\u64CD\u4F5C\u7B26\uFF0C\u4E0D\u6267\u884C\u8FD0\u884C\u65F6\u68C0\u67E5\uFF0C\u544A\u8BC9\u7F16\u8BD1\u5668\u53EA\u9700\u8981\u77E5\u9053\u8FD9\u4E2A\u4E1C\u897F</p><h2 id="_004vue-\u4E2D-ref-\u58F0\u660E\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#_004vue-\u4E2D-ref-\u58F0\u660E\u5199\u6CD5" aria-hidden="true">#</a> 004vue \u4E2D ref \u58F0\u660E\u5199\u6CD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7B2C\u56DB\u5904
\u521D\u59CB\u5316ref
  const itemsConditionArr = ref([] as any[]);
  \u6216\u662F
   const itemsConditionArr2 = ref({} as any);




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_004-\u8BFB\u61C2-ts-\u4E2D-object-object-\u7C7B\u578B\u4E4B\u95F4\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_004-\u8BFB\u61C2-ts-\u4E2D-object-object-\u7C7B\u578B\u4E4B\u95F4\u7684\u533A\u522B" aria-hidden="true">#</a> 004 \u8BFB\u61C2 TS \u4E2D Object, object, {} \u7C7B\u578B\u4E4B\u95F4\u7684\u533A\u522B</h2><p>TS \u4E2D\u7684 Object \u7C7B\u578B\uFF0C\u5305\u542B\u4E86\u6570\u7EC4\u3001\u51FD\u6570\u548C\u5BF9\u8C61\u3002</p><p>Object vs object \uFF081\uFF09\u7C7B\u578B Object \u5305\u62EC\u539F\u59CB\u503C function func1(x: Object) { } func1(&#39;semlinker&#39;); // OK</p><p>\uFF082\uFF09\u7C7B\u578B object \u4E0D\u5305\u542B\u539F\u59CB\u503C\uFF0C\u53EA\u5305\u542B\u6570\u7EC4\u3001\u51FD\u6570\u548C\u5BF9\u8C61\u3002 object \u7C7B\u578B\u662F\uFF1ATypeScript 2.2 \u5F15\u5165\u7684\u65B0\u7C7B\u578B\uFF0C\u5B83\u7528\u4E8E\u8868\u793A\u975E\u539F\u59CB\u7C7B\u578B \uFF083\uFF09\u7A7A\u7C7B\u578B {}\uFF0C\u5E38\u7528\u4E8E\u7C7B\u578B\u58F0\u660E \u5F53\u8BBF\u95EE\u4E00\u4E2A\u7A7A\u5BF9\u8C61\u4E0A\u7ED9\u4E00\u4E2A\u5C5E\u6027\uFF0C\u4F1A\u76F4\u63A5\u62A5\u9519\u3002 const obj = {};</p><p>// Error: Property &#39;prop&#39; does not exist on type &#39;{}&#39;. obj.prop = &quot;semlinker&quot;; \u4F46\u662F\u4F60\u4ECD\u7136\u53EF\u4EE5\u4F7F\u7528\u5728 Object \u7C7B\u578B\u4E0A\u5B9A\u4E49\u7684\u6240\u6709\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u6BD4\u5982 toString</p>`,22),d=[t];function u(r,a){return i(),n("div",null,d)}var v=e(l,[["render",u],["__file","005ts\u5E38\u89C1\u95EE\u9898\u6C47\u603B\u8BB0\u5F55.html.vue"]]);export{v as default};
