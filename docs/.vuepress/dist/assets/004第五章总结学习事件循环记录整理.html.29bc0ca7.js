import{_ as r,r as n,o as s,c as o,a as e,b as d,d as h,e as a}from"./app.99cc9b2a.js";const c={},i=h('<p>\u8BBE\u8BA1\u7F51\u7AD9\u67B6\u6784\u987A\u5E8F \u4ECE\u6D4F\u89C8\u5668\u53D1\u9001\u8BF7\u6C42\uFF0C\u5230\u670D\u52A1\u5668\u53D1\u751F\u4E86\u4EC0\u4E48\u4E8B\u60C5\u3002</p><p>\u4E0B\u8F7D\u9875\u9762</p><h2 id="\u6A21\u677F\u5F15\u64CE\u9700\u8981\u5B9E\u73B0\u7684\u5185\u5BB9-\u89E3\u6784" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u5F15\u64CE\u9700\u8981\u5B9E\u73B0\u7684\u5185\u5BB9-\u89E3\u6784" aria-hidden="true">#</a> \u6A21\u677F\u5F15\u64CE\u9700\u8981\u5B9E\u73B0\u7684\u5185\u5BB9\uFF0C\u89E3\u6784</h2><p>\u6A21\u677F\u6E32\u67D3\uFF1A\u4E24\u90E8\u5206 \u7B2C\u4E00\u90E8\u5206\uFF1Ainclude\u5B50\u6A21\u677F \u7B2C\u4E8C\u90E8\u5206\uFF1Axss\u8FC7\u6EE4\uFF0C\u6A21\u677Fhelper\u51FD\u6570</p><h2 id="_3-\u901A\u8FC7es6\u5B9E\u73B0\u6A21\u677F\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_3-\u901A\u8FC7es6\u5B9E\u73B0\u6A21\u677F\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 3.\u901A\u8FC7es6\u5B9E\u73B0\u6A21\u677F\u5B57\u7B26\u4E32</h2><p>\uFF081\uFF09vm\u6A21\u5757 Nodejs\u8FD0\u884Chtml\u6A21\u677F\u5B57\u7B26\u4E32\u5185\u5BB9\u7684\u65B9\u5F0F\uFF0C\u66F4\u52A0\u5B89\u5168\uFF0C \u901A\u8FC7vm2\u5B9E\u73B0\u4E00\u4E2Aejs\u6A21\u677F\u5F15\u64CE\u7684\u65B9\u6CD5</p><p>\uFF082\uFF09\u5B9E\u73B0\u6A21\u677F\u65B9\u6CD5 \u7B2C\u4E00\u6B65\uFF0C\u4F7F\u7528vm,\u5C06es6\u7684\u6A21\u677F\u5B57\u7B26\u4E32\u8FDB\u884C\u5B57\u7B26\u4E32\u8F6C\u6362 vm\u662FNode.js\u4E2D\u7684\u4E00\u4E2A\u5185\u7F6E\u6A21\u5757\uFF0C\u5176runInNewContext\u65B9\u6CD5\u7684\u4F5C\u7528\u76F8\u5F53\u4E8Enew Function(codeStr)() \uFF08\u53C2\u89C1\u8FD9\u91CC\uFF09\u6216\u8005 eval(codeStr)\uFF08\u53C2\u89C1\u8FD9\u91CC\uFF09\uFF0C\u5173\u4E8ErunInNewContext\u65B9\u6CD5\u7684\u7528\u6CD5\u53EF\u53C2\u89C1Node.js\u7684\u5B98\u65B9\u6587\u6863\u3002</p><p>\u4F5C\u8005\uFF1ADennisWu \u94FE\u63A5\uFF1Ahttps://juejin.cn/post/6947570355154190344 \u6765\u6E90\uFF1A\u6398\u91D1 \u8457\u4F5C\u6743\u5F52\u4F5C\u8005\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u4F5C\u8005\u83B7\u5F97\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002 \u7B2C\u4E8C\u6B65\uFF0C\u8FC7\u6EE4xss\uFF0C\u5C06\u63D2\u5165\u7684\u90A3\u4E9B\u6076\u610F\u6216\u662F\u7279\u6B8A\u7684\u5B57\u7B26\u8FC7\u6EE4\u6389\u3002 \u63D0\u4F9B\u4E00\u4E2A\u51FD\u6570\uFF0Ces6\u6A21\u677F\u5B57\u7B26\u4E32\u652F\u6301\u51FD\u6570\u8C03\u7528\uFF0C \u7B2C\u4E09\u6B65\uFF0C</p><h2 id="_4-todo-\u7ECF\u5178\u904D\u5386\u5BF9\u8C61object-keys-foreach\u548Cfor-in" tabindex="-1"><a class="header-anchor" href="#_4-todo-\u7ECF\u5178\u904D\u5386\u5BF9\u8C61object-keys-foreach\u548Cfor-in" aria-hidden="true">#</a> 4.// TODO:\u7ECF\u5178\u904D\u5386\u5BF9\u8C61Object.keys.forEach\u548Cfor in</h2><p>\u4E3A\u4EC0\u4E48\u4F7F\u7528Object.keys.forEach,\u800C\u4E0D\u662Ffor in</p><p>for in\u662Ffor in \u904D\u5386\u5BF9\u8C61\u53CA\u5176\u539F\u578B\u94FE\u4E0A\u7684\u53EF\u679A\u4E3E\u7684\u5C5E\u6027. for in \u67D0\u4E9B\u60C5\u51B5\u4E0B,\u4F1A\u968F\u673A\u8F93\u51FA</p><p>for-in \u5FAA\u73AF\u4F1A\u679A\u4E3E\u5BF9\u8C61\u539F\u578B\u94FE\u4E0A\u7684\u53EF\u679A\u4E3E\u5C5E\u6027\uFF0C\u800CObject.keys\u4E0D\u4F1A</p><p>\u904D\u5386\u5BF9\u8C61\u8FD4\u56DE\u5C5E\u6027\u540D\u548C\u904D\u5386\u6570\u7EC4\u8FD4\u56DE\u7684\u7D22\u5F15\u90FD\u662Fstring\u7C7B\u578B\u3002\u3002</p><p>// \u9012\u5F52\u5199\u6CD5 Object.prototype.clone = function(){ let o = this.constructor === Array ? [] : {}; for(let e in this){ if(this.hasOwnProperty(e)){ o[e] = typeof this[e] === &quot;object&quot; ? this[e].clone() : this[e]; } } return o; } let obj = { a : 1, b : { c: 2 } } let obj2 = obj.clone(); console.log(obj2); // { a: 1, b: { c: 2 } } \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014 \u7248\u6743\u58F0\u660E\uFF1A\u672C\u6587\u4E3ACSDN\u535A\u4E3B\u300C\u5C0F\u5C0F\u8367\u300D\u7684\u539F\u521B\u6587\u7AE0\uFF0C\u9075\u5FAACC 4.0 BY-SA\u7248\u6743\u534F\u8BAE\uFF0C\u8F6C\u8F7D\u8BF7\u9644\u4E0A\u539F\u6587\u51FA\u5904\u94FE\u63A5\u53CA\u672C\u58F0\u660E\u3002 \u539F\u6587\u94FE\u63A5\uFF1Ahttps://blog.csdn.net/xfy196/article/details/107604072</p><h2 id="_6-easy-sock\u5B9E\u73B0\u540E\u53F0rpc\u901A\u4FE1\u7684\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_6-easy-sock\u5B9E\u73B0\u540E\u53F0rpc\u901A\u4FE1\u7684\u6A21\u5757" aria-hidden="true">#</a> 6.easy_sock\u5B9E\u73B0\u540E\u53F0RPC\u901A\u4FE1\u7684\u6A21\u5757</h2><p>easy_sock\u5E2E\u4F60\u5FEB\u901F\u5F00\u53D1\u57FA\u4E8Etcp\u534F\u8BAE\u7684\u63A5\u53E3\uFF0C\u5FEB\u901F\u6253\u901Anodejs\u8DDF\u5176\u4ED6\u79C1\u6709\u534F\u8BAEserver\u7684\u4EA4\u4E92\u3002\u8BA9\u4F60\u505A\u5230\u50CF\u8C03\u7528\u672C\u5730\u63A5\u53E3\u4E00\u6837\u8C03\u7528server api\u3002</p><h2 id="_7-api\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_7-api\u670D\u52A1" aria-hidden="true">#</a> 7.API\u670D\u52A1</h2><p>\uFF081\uFF09restApI\\\u901A\u8FC7\u8DEF\u5F84\u8FDB\u884C\u4E0D\u540C\u7684\u8D44\u6E90\uFF08\u98DF\u5802\u5403\u996D\uFF09</p><p>\u7B80\u5355\u6613\u61C2 \u53EF\u4EE5\u5FEB\u901F\u642D\u5EFA \u5728\u6570\u636E\u805A\u5408\u65B9\u9762\u6709\u5F88\u5927\u7684\u52A3\u52BF (get\u4E2D\u4E13\u95E8\u4E00\u4E2A\u5B57\u6BB5\u6570\u636E\uFF0C\u5728\u4E00\u5806\u5197\u4F59\u6570\u636E\u4E2D\u8FDB\u884C\u67E5\u627E) \uFF082\uFF09GrapghQL ---&gt;\u5403\u81EA\u52A9 \u4E13\u6CE8\u4E8E\u6570\u636E\u805A\u5408\uFF0C\u524D\u7AEF\u9700\u8981\u4EC0\u4E48\u6570\u636E\uFF0C\u5C31\u8FD4\u56DE\u4EC0\u4E48\u6570\u636E\u3002\u4E0D\u4F1A\u5197\u4F59\u3002</p><p>\u8BA9\u524D\u7AEF\u6709\u81EA\u5B9A\u4E49\u67E5\u8BE2\u6570\u636E\u7684\u80FD\u529B</p><h2 id="_8-\u7ECF\u5178\u9762\u8BD5\u9898-\u901A\u8FC7node\u540E\u53F0\u6536\u5230\u5230\u5D4C\u5957\u6E32\u67D3\u4ECEurl\u5230\u6E32\u67D3\u51FA\u9875\u9762\u51FA\u73B0\u8FC7\u7A0B\u3002" tabindex="-1"><a class="header-anchor" href="#_8-\u7ECF\u5178\u9762\u8BD5\u9898-\u901A\u8FC7node\u540E\u53F0\u6536\u5230\u5230\u5D4C\u5957\u6E32\u67D3\u4ECEurl\u5230\u6E32\u67D3\u51FA\u9875\u9762\u51FA\u73B0\u8FC7\u7A0B\u3002" aria-hidden="true">#</a> 8.\u7ECF\u5178\u9762\u8BD5\u9898\uFF0C\u901A\u8FC7node\u540E\u53F0\u6536\u5230\u5230\u5D4C\u5957\u6E32\u67D3\u4ECEURL\u5230\u6E32\u67D3\u51FA\u9875\u9762\u51FA\u73B0\u8FC7\u7A0B\u3002</h2><h2 id="_9-\u524D\u540E\u7AEF\u540C\u6784" tabindex="-1"><a class="header-anchor" href="#_9-\u524D\u540E\u7AEF\u540C\u6784" aria-hidden="true">#</a> 9.\u524D\u540E\u7AEF\u540C\u6784</h2><p>\u524D\u540E\u53F0\u4F7F\u7528\u540C\u4E00\u5957\u6A21\u677F\u5199\u4EE3\u7801\uFF0C\u6E32\u67D3html\u3002 Vue\u4E2D\u4F7F\u7528VueServerRenderer.renderToString()</p><p>React\u4E2D\u4F7F\u7528ReactDomServer.renderToString()</p><h2 id="_10-react-vue\u540C\u6784\u6700\u5927\u7684\u96BE\u5EA6-\u5176\u5B9E\u662F\u6570\u636E\u90E8\u5206\u3002" tabindex="-1"><a class="header-anchor" href="#_10-react-vue\u540C\u6784\u6700\u5927\u7684\u96BE\u5EA6-\u5176\u5B9E\u662F\u6570\u636E\u90E8\u5206\u3002" aria-hidden="true">#</a> 10.React.Vue\u540C\u6784\u6700\u5927\u7684\u96BE\u5EA6\uFF0C\u5176\u5B9E\u662F\u6570\u636E\u90E8\u5206\u3002</h2><p>\u6BD4\u5982\u524D\u7AEF\u7684vuex\uFF0CRedux\uFF0C\u8FD9\u4E9B\u6570\u636E\u600E\u6837\u7BA1\u7406\u4F7F\u5F97\u540C\u6784\u90E8\u5206\u7684\u4EE3\u7801\u66F4\u597D\u3002 \u5F15\u51FA\u4E86next\u6846\u67B6\u548Cnuxt\u6846\u67B6</p><h2 id="_11-nuxt-js" tabindex="-1"><a class="header-anchor" href="#_11-nuxt-js" aria-hidden="true">#</a> 11.Nuxt.js</h2><p>Nuxt.js \u662F\u4E00\u4E2A\u57FA\u4E8E Vue.js \u7684\u901A\u7528\u5E94\u7528\u6846\u67B6\uFF0C\u4E00\u4E2A\u7528\u4E8EVue.js \u5F00\u53D1SSR\u5E94\u7528\u7684\u4E00\u7AD9\u5F0F\u89E3\u51B3\u65B9\u6848\u3002\u5B83\u7684\u4F18\u70B9\u662F\u5C06\u539F\u6765\u51E0\u4E2A\u914D\u7F6E\u6587\u4EF6\u8981\u5B8C\u6210\u7684\u5185\u5BB9\uFF0C\u90FD\u6574\u5408\u5728\u4E86\u4E00\u4E2Anuxt.config.js\uFF0C\u5C01\u88C5\u4E0E\u6269\u5C55\u6027\u5B8C\u7F8E\u7684\u5951\u5408\u3002</p><p>\u7B80\u5355\u8BF4nuxtjs\u9879\u76EE\uFF0C\u5B83\u5176\u5B9E\u5C31\u662F\u4E00\u4E2Avue\u7684\u9879\u76EE\u878D\u5408\u4E00\u4E2Anode.js server\u9879\u76EE\uFF0C\u8FD9\u91CCnode\u670D\u52A1\u6709\u4E24\u4E2A\u4F5C\u7528\uFF0C\u7B2C\u4E00\u70B9\u662F\u4EE3\u66FF\u6D4F\u89C8\u5668\u7684\u5DE5\u4F5C,\u7B3C\u7EDF\u7406\u89E3\u5C31\u662F\u5728created\u65F6\u7684\u8BF7\u6C42\u6570\u636E\u548C\u9875\u9762\u6E32\u67D3\uFF0C\u7B2C\u4E8C\u70B9\u662F\u5F53\u4F5C\u9759\u6001\u6587\u4EF6\u670D\u52A1\u5668\uFF0C\u628A\u6E32\u67D3\u597D\u7684\u9875\u9762\u8FD4\u56DE\u7ED9\u7528\u6237\u3002</p><p>12.Next.js npx create-next-app</p><p>Next.js\u57FA\u4E8EReact\u5F00\u53D1 npx create-next-app</p><p>\u76F4\u89C2\u7684\u3001 \u57FA\u4E8E\u9875\u9762 \u7684\u8DEF\u7531\u7CFB\u7EDF\uFF08\u5E76\u652F\u6301 \u52A8\u6001\u8DEF\u7531\uFF09 \u9884\u6E32\u67D3\u3002\u652F\u6301\u5728\u9875\u9762\u7EA7\u7684 \u9759\u6001\u751F\u6210 (SSG) \u548C \u670D\u52A1\u5668\u7AEF\u6E32\u67D3 (SSR) \u81EA\u52A8\u4EE3\u7801\u62C6\u5206\uFF0C\u63D0\u5347\u9875\u9762\u52A0\u8F7D\u901F\u5EA6 \u5177\u6709\u7ECF\u8FC7\u4F18\u5316\u7684\u9884\u53D6\u529F\u80FD\u7684 \u5BA2\u6237\u7AEF\u8DEF\u7531 \u5185\u7F6E CSS \u548C Sass \u7684\u652F\u6301\uFF0C\u5E76\u652F\u6301\u4EFB\u4F55 CSS-in-JS \u5E93 \u5F00\u53D1\u73AF\u5883\u652F\u6301 \u5FEB\u901F\u5237\u65B0 \u5229\u7528 Serverless Functions \u53CA API \u8DEF\u7531 \u6784\u5EFA API \u529F\u80FD \u5B8C\u5168\u53EF\u6269\u5C55</p><p>\u8BE6\u60C5\u9875</p><p>\u64AD\u653E\u5668</p><p>\u5217\u8868\u9875</p><h2 id="\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a> \u4E8B\u4EF6\u5FAA\u73AF</h2><p>https://www.taopoppy.cn/node/one_eventLoop.html#%E5%85%AD%E4%B8%AA%E9%98%B6%E6%AE%B5</p>',37),p={href:"https://www.jsv9000.app/",target:"_blank",rel:"noopener noreferrer"},_=a("JS Visualizer 9000 (jsv9000.app)"),l=e("h2",{id:"\u7B80\u5355\u8C03\u8BD5\u4E00\u4E2Ats\u6587\u4EF6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7B80\u5355\u8C03\u8BD5\u4E00\u4E2Ats\u6587\u4EF6","aria-hidden":"true"},"#"),a(" \u7B80\u5355\u8C03\u8BD5\u4E00\u4E2Ats\u6587\u4EF6")],-1),u=e("p",null,"\u6253\u5F00\u63A7\u5236\u53F0 JavaScript Debug Termernal \u7136\u540E\u5B89\u88C5\u5168\u5C40ts-node\u6A21\u5757\u540E\uFF0Cts-node xxx.ts\u6587\u4EF6\uFF0C \u5982\u679C\u4E0D\u60F3\u8981\u5B89\u88C5\uFF0Cnpx ts-node xxx.ts",-1),x=e("h2",{id:"_304-307\u533A\u522B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_304-307\u533A\u522B","aria-hidden":"true"},"#"),a(" 304\uFF0C307\u533A\u522B")],-1);function f(j,b){const t=n("ExternalLinkIcon");return s(),o("div",null,[i,e("p",null,[e("a",p,[_,d(t)])]),l,u,x])}var v=r(c,[["render",f],["__file","004\u7B2C\u4E94\u7AE0\u603B\u7ED3\u5B66\u4E60\u4E8B\u4EF6\u5FAA\u73AF\u8BB0\u5F55\u6574\u7406.html.vue"]]);export{v as default};
