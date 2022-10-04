import{_ as e,o as a,c as r,d}from"./app.d4559969.js";const h={},i=d('<p>[toc]</p><h2 id="buffer\u5B9E\u73B0\u5185\u5B58\u5206\u914D\u7BA1\u7406\u7684\u5B9E\u73B0\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#buffer\u5B9E\u73B0\u5185\u5B58\u5206\u914D\u7BA1\u7406\u7684\u5B9E\u73B0\u7B56\u7565" aria-hidden="true">#</a> Buffer\u5B9E\u73B0\u5185\u5B58\u5206\u914D\u7BA1\u7406\u7684\u5B9E\u73B0\u7B56\u7565</h2><p>\u4F1A\u6709\u4E00\u4E2A8kb\u7684\u5185\u5B58\uFF0C\u7BA1\u7406\u5F53\u671F\u7684\u5C0F\u7684\u5185\u5BB9\u3002\u6BCF\u4E00\u6B21\u6709\u4E86\u5C0F\u4E8E8kb\u7684Buffer,\u90A3\u4E48\u653E\u5165\u58F0\u660E\u76848kb\u7684\u7A7A\u95F4\uFF0C\u5982\u679C\u8FD9\u6B21Buffer \u4F7F\u7528\u5B8C\u6210\uFF0C\u8FD9\u4E2A8Kb\u4E0D\u4F1A\u91CA\u653E\uFF0C\u7559\u7ED9\u4E0B\u4E00\u4E2A\u5C0F\u4E8E8Kb\u7684Buffer\u4F7F\u7528\u3002</p><p>\u8FD9\u91CC\u5176\u5B9E\u4F7F\u7528\u4E86\u4E00\u79CD\u201C\u5185\u5B58\u6C60\u201D\u7684\u7F16\u7A0B\u5B9E\u73B0\u3002</p><p>\u6700\u5927\u9650\u5EA6\u51CF\u5C11\u5185\u5B58\u5206\u914D\u548C\u9500\u6BC1\uFF0C\u51CF\u5C11\u5185\u5B58\u5206\u914D\u3002</p><h3 id="\u51CF\u5C11\u5185\u5B58\u5206\u914D\u65B9\u5F0F-\u6C60" tabindex="-1"><a class="header-anchor" href="#\u51CF\u5C11\u5185\u5B58\u5206\u914D\u65B9\u5F0F-\u6C60" aria-hidden="true">#</a> \u51CF\u5C11\u5185\u5B58\u5206\u914D\u65B9\u5F0F\uFF0C\u6C60</h3><h3 id="\u4F7F\u7528c-\u4F18\u5316nodejs\u7A0B\u5E8F\u3002c-\u63D2\u4EF6\u3002" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528c-\u4F18\u5316nodejs\u7A0B\u5E8F\u3002c-\u63D2\u4EF6\u3002" aria-hidden="true">#</a> \u4F7F\u7528c++\u4F18\u5316Nodejs\u7A0B\u5E8F\u3002C++\u63D2\u4EF6\u3002</h3><p>C++ addon(\u63D2\u4EF6) c++\u4E0D\u53EF\u4EE5\u76F4\u63A5\u8FD0\u884C\uFF0C\u5199\u5B8C\u540E\uFF0C\u9700\u8981\u4F7F\u7528node-gyp\u63D2\u4EF6\uFF0C\u8F6C\u6362\u6210.node\u6587\u4EF6\uFF0C\u540C\u65F6\u548C\u73AF\u5883\u6709\u5173\uFF0Cnode\u8F6C\u6362\u6210\u4E8C\u8FDB\u5236\u6D41\uFF0C\u624D\u53EF\u4EE5\u3002</p><p>js\u53EF\u4EE5\u76F4\u63A5\u8FD0\u884C\u3002</p><p>\uFF081\uFF09c++\u8FD0\u7B97\u6BD4\u4F7F\u7528js\u66F4\u5FEB\u7684\u90E8\u5206 \uFF082\uFF09c++\u53D8\u91CF\u548Cjs\u53D8\u91CF\u7684\u8F6C\u6362\u8017\u65F6 \u4E0D\u540C\u53D8\u91CF\uFF0C\u5728c++\u4E2D\u7F16\u7801\u548C\u89E3\u7801\uFF0C\u5728js\u4E2D\u7F16\u7801\u548C\u89E3\u7801</p><h3 id="\u9664\u4E86\u5355\u7EBF\u7A0B\u4E2D\u7684\u5185\u5B58\u5206\u914D\u7B56\u7565\u548C\u63D2\u4EF6-\u8FD8\u6709\u591A\u8FDB\u7A0B\u548C\u7EBF\u7A0B\u7684\u8003\u8651\u3002" tabindex="-1"><a class="header-anchor" href="#\u9664\u4E86\u5355\u7EBF\u7A0B\u4E2D\u7684\u5185\u5B58\u5206\u914D\u7B56\u7565\u548C\u63D2\u4EF6-\u8FD8\u6709\u591A\u8FDB\u7A0B\u548C\u7EBF\u7A0B\u7684\u8003\u8651\u3002" aria-hidden="true">#</a> \u9664\u4E86\u5355\u7EBF\u7A0B\u4E2D\u7684\u5185\u5B58\u5206\u914D\u7B56\u7565\u548C\u63D2\u4EF6\uFF0C\u8FD8\u6709\u591A\u8FDB\u7A0B\u548C\u7EBF\u7A0B\u7684\u8003\u8651\u3002</h3><p>js\u662F\u5355\u7EBF\u7A0B\u3002\u7EBF\u7A0B\u662F\u4EC0\u4E48\u610F\u601D\u3002 \u7EBF\u7A0B\u662F\u516C\u53F8\uFF0C\u8FDB\u7A0B\u662F\u5458\u5DE5\u3002 \u8FDB\u7A0B\u662F\u6700\u5C0F\u8FD0\u7B97\u5355\u5143\uFF0C\u5171\u4EAB\u7EBF\u7A0B\u4E2D\u7684\u8D44\u6E90\u3002</p><p>\u591A\u7EBF\u7A0B\uFF0CJavaScript\u76F8\u5F53\u4E8E\u4E00\u4E2A\u96C6\u56E2\uFF0C\u8FD9\u4E2A\u96C6\u56E2\u4E2D\u5206\u914D\u5B50\u7EBF\u7A0B\uFF0C\u4F7F\u7528\u591A\u4E2Acpu\uFF0C\u6700\u5927\u9650\u5EA6\u589E\u52A0\u8BA1\u7B97\u80FD\u529B\u3002</p><h4 id="\u5076\u5C14\u51FA\u73B0process-send\u662Fundefined" tabindex="-1"><a class="header-anchor" href="#\u5076\u5C14\u51FA\u73B0process-send\u662Fundefined" aria-hidden="true">#</a> \u5076\u5C14\u51FA\u73B0process.send\u662Fundefined</h4><p>\u5982\u679C\u4F7F\u7528 IPC \u901A\u9053\u884D\u751F Node.js\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528 process.send() \u65B9\u6CD5\u5411\u7236\u8FDB\u7A0B\u53D1\u9001\u6D88\u606F\u3002 \u6D88\u606F\u5C06\u4F5C\u4E3A\u7236\u5BF9\u8C61 ChildProcess \u5BF9\u8C61\u4E0A\u7684 &#39;message&#39; \u4E8B\u4EF6\u63A5\u6536\u3002</p><p>\u5982\u679C Node.js \u6CA1\u6709\u4F7F\u7528 IPC \u901A\u9053\u884D\u751F\uFF0C\u5219 process.send \u5C06\u662F undefined\u3002</p><p>\u6D88\u606F\u7ECF\u8FC7\u5E8F\u5217\u5316\u548C\u89E3\u6790\u3002 \u7ED3\u679C\u6D88\u606F\u53EF\u80FD\u4E0E\u6700\u521D\u53D1\u9001\u7684\u6D88\u606F\u4E0D\u540C\u3002</p><h3 id="cluster\u4F7F\u7528\u591A\u6838\u80FD\u529B\u3002" tabindex="-1"><a class="header-anchor" href="#cluster\u4F7F\u7528\u591A\u6838\u80FD\u529B\u3002" aria-hidden="true">#</a> cluster\u4F7F\u7528\u591A\u6838\u80FD\u529B\u3002</h3><p>\u4E3A\u4E86\u7F51\u7EDC\u670D\u52A1\u80FD\u529B\u521B\u5EFA\u7684\uFF0C\u591A\u6838\u80FD\u529B\u3002 \u5229\u7528\u5168\u53CC\u5DE5\u901A\u4FE1\u3002</p><p>master\u7684node\u4E3B\u8FDB\u7A0B\uFF0C\u4F1A\u6709\u56DB\u4E2A\u5B50\u8FDB\u7A0B\uFF0C\u56DB\u4E2A\u5B50\u8FDB\u7A0B\u90FD\u6709\u4E00\u4E2Ahttp\u670D\u52A1\u3002cluster\u6A21\u5757</p><p>\u4E3A\u4EC0\u4E48cluster.fork()\u53EF\u4EE5\u591A\u4E2A\u8FDB\u7A0B\u76D1\u542C\u540C\u4E00\u4E2A\u7AEF\u53E3\uFF0C\u6309\u7167\u9053\u7406\u6765\u8BF4\uFF0C\u4E00\u4E2A\u7AEF\u53E3\u76D1\u542C\u4E00\u6B21\uFF0C</p><h4 id="\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u76D1\u542C\u591A\u6B21\u4E00\u4E2A\u7AEF\u53E3-\u7528\u591A\u4E2A\u8FDB\u7A0B\u3002" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u76D1\u542C\u591A\u6B21\u4E00\u4E2A\u7AEF\u53E3-\u7528\u591A\u4E2A\u8FDB\u7A0B\u3002" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u53EF\u4EE5\u76D1\u542C\u591A\u6B21\u4E00\u4E2A\u7AEF\u53E3\uFF0C\u7528\u591A\u4E2A\u8FDB\u7A0B\u3002</h4><p>\u5176\u5B9E\u591A\u4E2A\u8FDB\u7A0B\u4E2D\uFF0C\u5185\u90E8\u4EE3\u7801\u7684\u5B9E\u73B0\uFF0C\u5E76\u4E0D\u662F\u76D1\u542C\u7684\u4E00\u4E2A\u7AEF\u53E3\u53F7\uFF0C\u4E8C\u5341\u4E00\u4E2A\u6587\u4EF6\u670D\u52A1\u7684\u63CF\u8FF0\uFF0C</p><h2 id="http\u901A\u4FE1\u548Crpc\u901A\u4FE1\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#http\u901A\u4FE1\u548Crpc\u901A\u4FE1\u533A\u522B" aria-hidden="true">#</a> HTTP\u901A\u4FE1\u548CRPC\u901A\u4FE1\u533A\u522B</h2><h1 id="rpc\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#rpc\u901A\u4FE1" aria-hidden="true">#</a> RPC\u901A\u4FE1</h1><p>remote procedure call</p><h2 id="ajax\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#ajax\u533A\u522B" aria-hidden="true">#</a> ajax\u533A\u522B</h2><p>RPC\u662F\u4EC0\u4E48\uFF1F\u548Cajax\u6709\u4EC0\u4E48\u533A\u522B RPC\u662F\u8FDC\u7A0B\u8FC7\u7A0B\u8C03\u7528\uFF08remote procedure call\uFF09 \uFF081\uFF09RPC\u548Cajax\u90FD\u662F\u4E24\u4E2A\u8BA1\u7B97\u673A\u4E4B\u95F4\u7684\u7F51\u7EDC\u901A\u4FE1\uFF1B \uFF082\uFF09\u90FD\u662F\u9700\u8981\u53CC\u65B9\u7EA6\u5B9A\u4E00\u4E2A\u6570\u636E\u683C\u5F0F\u3002 \uFF083\uFF09HTTP\u5355\u53CC\u5DE5\u901A\u4FE1\u8BF4\u660E \u5206\u7248\u672C\uFF0C\u7248\u672C\u4E0D\u540C\uFF0C\u5DE5\u4F5C\u6A21\u5F0F\u4E0D\u540C</p><p>http1.0\uFF1A\u5355\u5DE5\u3002\u56E0\u4E3A\u662F\u77ED\u8FDE\u63A5\uFF0C\u5BA2\u6237\u7AEF\u53D1\u8D77\u8BF7\u6C42\u4E4B\u540E\uFF0C\u670D\u52A1\u7AEF\u5904\u7406\u5B8C\u8BF7\u6C42\u5E76\u6536\u5230\u5BA2\u6237\u7AEF\u7684\u54CD\u5E94\u540E\u5373\u65AD\u5F00\u8FDE\u63A5\u3002 http1.1\uFF1A\u534A\u53CC\u5DE5\u3002\u9ED8\u8BA4\u5F00\u542F\u957F\u8FDE\u63A5keep-alive\uFF0C\u5F00\u542F\u4E00\u4E2A\u8FDE\u63A5\u53EF\u53D1\u9001\u591A\u4E2A\u8BF7\u6C42\u3002 http2.0\uFF1A\u5168\u53CC\u5DE5\uFF0C\u5141\u8BB8\u670D\u52A1\u7AEF\u4E3B\u52A8\u5411\u5BA2\u6237\u7AEF\u53D1\u9001\u6570\u636E\u3002\uFF08websocket,Nodejs\u4E2Dinspect\u529F\u80FD\uFF0C\u6027\u80FD\u4F18\u5316\uFF09</p><p>\u4F5C\u8005\uFF1A\u610F\u5207 \u94FE\u63A5\uFF1Ahttps://www.jianshu.com/p/3ca180af7dca \u6765\u6E90\uFF1A\u7B80\u4E66 \u8457\u4F5C\u6743\u5F52\u4F5C\u8005\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u4F5C\u8005\u83B7\u5F97\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p><p>\u4E0D\u540C\u70B9\uFF1A \uFF081\uFF09RPC\u8C03\u7528\u4E0D\u4E00\u5B9A\u4F7F\u7528DNS\u4F5C\u4E3A\u5BFB\u5740\u670D\u52A1 \uFF082\uFF09RPC\u5E94\u7528\u5C42\u534F\u8BAE\u4E00\u822C\u4E0D\u4F7F\u7528HTTP\uFF0C\u4E00\u822C\u4F7F\u7528\u4E8C\u8FDB\u5236\u534F\u8BAE\u3002 \uFF083\uFF09RPC\u662FUDP\u534F\u8BAE\u8FDB\u884C\u3002\uFF08ajax\u57FA\u4E8EHTTP\u534F\u8BAE\uFF09 \uFF084\uFF09ajax\u662F\u57FA\u4E8EDNS\u5BFB\u5740\uFF0CRPC\u901A\u4FE1\u662F\u57FA\u4E8E\u7279\u6B8A\u7684\u670D\u52A1\u5BFB\u5740 \uFF085\uFF09ajax\u662F\u5355\u5DE5\u901A\u4FE1\u3002RPC\u7684TCP\u901A\u4FE1\u65B9\u5F0F\u6709\u5355\u5DE5\u901A\u4FE1\uFF0C\u534A\u53CC\u5DE5\uFF0C\u5168\u53CC\u5DE5\u901A\u4FE1\u3002 \uFF08\u534A\u53CC\u5DE5\uFF0C\u5C31\u662F\u5206\u6210\u4E00\u4E2A\u4E2A\u65F6\u95F4\u7247\u6765\u770B\uFF0C\u4E00\u90E8\u5206\u65F6\u95F4\u53EA\u80FDa-&gt;b,\u4E00\u90E8\u5206\u65F6\u95F4\u53EA\u80FDb-&gt;a.\uFF09 (\u5168\u53CC\u5DE5\uFF0C\u6709a-&gt;b\u7684\u540C\u65F6\uFF0C\u6709b-&gt;a) \uFF086\uFF09RPC\u8C03\u7528\u662F\u4E8C\u8FDB\u5236\u534F\u8BAE\uFF0C\u66F4\u5C0F\u7684\u6570\u636E\u5305\u7684\u4F53\u79EF\uFF0C\u66F4\u5FEB\u7684\u7F16\u7801\u548C\u89E3\u7801\u901F\u7387\u3002</p><h2 id="nodejs\u7684\u8FDB\u7A0B\u5B88\u62A4\u548C\u8FDB\u7A0B\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#nodejs\u7684\u8FDB\u7A0B\u5B88\u62A4\u548C\u8FDB\u7A0B\u7BA1\u7406" aria-hidden="true">#</a> Nodejs\u7684\u8FDB\u7A0B\u5B88\u62A4\u548C\u8FDB\u7A0B\u7BA1\u7406</h2><p>\u5229\u7528\u8FDB\u7A0B\u4E2D\u53D1\u9001\u5305\u548C\u63A5\u53D7\u5305\u7684\u6807\u8BB0\u5B57\u6BB5\u662F\u5426\u6B63\u5E38\uFF0C\u6765\u5224\u65AD\u8FD9\u4E2A\u8FDB\u7A0B\u662F\u5426\u6B63\u5E38\u3002</p><h2 id="\u67B6\u6784\u5C42\u6B21\u7684nodejs\u6027\u80FD\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u67B6\u6784\u5C42\u6B21\u7684nodejs\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a> \u67B6\u6784\u5C42\u6B21\u7684Nodejs\u6027\u80FD\u4F18\u5316</h2><h3 id="\u9759\u6001\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u5185\u5BB9" aria-hidden="true">#</a> \u9759\u6001\u5185\u5BB9</h3><p>\u7EA7\u522B\u4E0D\u4F1A\u53D8\u52A8\uFF0C\u4E5F\u4E0D\u4F1A\u56E0\u4E3A\u8BF7\u6C42\u53C2\u6570\u7684\u4E0D\u540C\u800C\u53D1\u751F\u53D8\u5316\u3002 ---\u4F18\u5316\u7B56\u7565 CND\u5206\u53D1\uFF0ChTTP\u7F13\u5B58(\u6D4F\u89C8\u5668\u7F13\u5B58)</p><h3 id="\u52A8\u6001\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u5185\u5BB9" aria-hidden="true">#</a> \u52A8\u6001\u5185\u5BB9</h3><p>\u56E0\u4E3A\u5404\u79CD\u8BF7\u6C42\u53C2\u6570\u7684\u4E0D\u540C\u53D1\u751F\u53D8\u52A8\uFF0C\u53D8\u52A8\u7684\u79CD\u7C7B\u4E0D\u53EF\u679A\u4E3E\u3002 ---\u5927\u9F84\u7684\u6E90\u7AD9\uFF08\u5185\u5BB9\u6765\u6E90\u7684\u7F51\u7AD9\uFF09\u53CA\u5176\u627F\u8F7D\uFF0C\u7ED3\u5408\u53CD\u5411\u4EE3\u7406\u8FDB\u884C\u8D1F\u8F7D\u5747\u8861\u3002</p><h2 id="\u9879\u76EE\u67B6\u6784\u548C\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u67B6\u6784\u548C\u8BBE\u8BA1" aria-hidden="true">#</a> \u9879\u76EE\u67B6\u6784\u548C\u8BBE\u8BA1</h2><p>\u5F00\u53D1\u4F53\u9A8C \u7528\u6237\u4F53\u9A8C</p><h3 id="\u6E10\u8FDB\u5F0F\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#\u6E10\u8FDB\u5F0F\u6846\u67B6" aria-hidden="true">#</a> \u6E10\u8FDB\u5F0F\u6846\u67B6</h3><p>\u5F88\u5FEB\u7684\u5165\u53E3\uFF0C\u7B80\u5355\u7684\u50BB\u74DC\u5316\uFF0C\u968F\u7740\u5165\u624B\u7684\u6DF1\u5165\uFF0C\u81EA\u5DF1\u53EF\u4EE5\u505A\u4E00\u4E9B\u597D\u7684\u6027\u80FD\u4F18\u5316\u4F53\u9A8C\u3002</p><p>\u8FD9\u4E2A\u548CKISS\u539F\u5219\u4E00\u6837\uFF0C\u50BB\u74DC\u5316\uFF0C\u7B80\u5355\u5316\u3002</p><h3 id="\u9879\u76EE\u67B6\u6784\u7684\u8BBE\u8BA1\u6027\u80FD\u4F53\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u67B6\u6784\u7684\u8BBE\u8BA1\u6027\u80FD\u4F53\u9A8C" aria-hidden="true">#</a> \u9879\u76EE\u67B6\u6784\u7684\u8BBE\u8BA1\u6027\u80FD\u4F53\u9A8C</h3><h3 id="\u9879\u76EE\u67B6\u6784\u8BBE\u8BA1\u7684\u8BBE\u8BA1\u6A21\u5F0F\u5B9E\u73B0\u662F\u9879\u76EE\u67B6\u6784\u7684\u5173\u952E\u4E00\u73AF" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u67B6\u6784\u8BBE\u8BA1\u7684\u8BBE\u8BA1\u6A21\u5F0F\u5B9E\u73B0\u662F\u9879\u76EE\u67B6\u6784\u7684\u5173\u952E\u4E00\u73AF" aria-hidden="true">#</a> \u9879\u76EE\u67B6\u6784\u8BBE\u8BA1\u7684\u8BBE\u8BA1\u6A21\u5F0F\u5B9E\u73B0\u662F\u9879\u76EE\u67B6\u6784\u7684\u5173\u952E\u4E00\u73AF</h3><h4 id="\u751F\u642C\u786C\u5957\u8BBE\u8BA1\u6A21\u5F0F-\u4E0D\u53EF\u4EE5\u3002" tabindex="-1"><a class="header-anchor" href="#\u751F\u642C\u786C\u5957\u8BBE\u8BA1\u6A21\u5F0F-\u4E0D\u53EF\u4EE5\u3002" aria-hidden="true">#</a> \u751F\u642C\u786C\u5957\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u4E0D\u53EF\u4EE5\u3002</h4><p>\u5916\u89C2\u6A21\u5F0F\u548C\u89C2\u5BDF\u8005\u6A21\u5F0F\u6700\u53EF\u4EE5\u5728js\u4E2D\u5B9E\u73B0\uFF1Avue\u7684\u53CC\u5411\u6CA1\u7ED1\u5B9A\uFF0C</p><p>\u89C2\u5BDF\u8005\u6A21\u5F0F\uFF1AEventEmiter\u548CDOM addEventListener</p><p>\u5916\u89C2\u6A21\u5F0F\uFF1AJqeury\u5B9E\u73B0\uFF0Cjqery\u5B9E\u73B0\uFF0C\u5C01\u88C5\u4E86\u4E00\u4E2Aon\u65B9\u6CD5\uFF0C on\u4E2D\u7684\u5B9E\u73B0\u517C\u5BB9\u5404\u79CD\u6D4F\u89C8\u5668\u65B9\u6CD5\u3002\u5176\u5B9E\u5916\u89C2\u6A21\u5F0F\uFF0C\u89E3\u51B3\u517C\u5BB9\u6027\u95EE\u9898\u3002</p><h2 id="\u8BBE\u8BA1\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u6A21\u5F0F" aria-hidden="true">#</a> \u8BBE\u8BA1\u6A21\u5F0F</h2><p>\u5199\u51FA\u4E00\u4E2A\u53EF\u4EE5\u91CD\u7528\u7684\u9762\u5411\u5BF9\u8C61\u7684\u8F6F\u4EF6\u65B9\u6CD5\uFF0C\u5C31\u662F\u8BBE\u8BA1\u6A21\u5F0F\u3002</p><h3 id="\u8BBE\u8BA1\u6A21\u5F0F\u516D\u4E2A\u6CD5\u5219" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u6A21\u5F0F\u516D\u4E2A\u6CD5\u5219" aria-hidden="true">#</a> \u8BBE\u8BA1\u6A21\u5F0F\u516D\u4E2A\u6CD5\u5219</h3><ul><li>\u5355\u4E00\u8D23\u4EFB\u539F\u5219\uFF08\u6BCF\u4E00\u4E2A\u6A21\u5757\u4E13\u6CE8\u81EA\u5DF1\u7684\u804C\u8D23\uFF0C\u505A\u4E00\u4EF6\u4E8B\u60C5\uFF09\uFF08\u5176\u5B9E\u5FAE\u670D\u52A1\u4E5F\u662F\u5355\u4E00\u804C\u8D23\u3002\uFF09</li><li>\u91CC\u6C0F\u66FF\u6362\u539F\u5219</li><li>\u4F9D\u8D56\u5012\u8F6C\u539F\u5219</li><li>\u63A5\u53E3\u9694\u79BB</li><li>\u6700\u5C0F\u77E5\u9053\u539F\u5219\uFF08\uFF09</li><li>\u5F00\u95ED\u539F\u5219\uFF08\u4E0D\u53BB\u589E\u52A0\u539F\u6709\u7684\u5730\u65B9\uFF0C\u76F4\u63A5\u6269\u5C55\u53EF\u4EE5\u589E\u52A0\u529F\u80FD\u3002\u6BD4\u5982webpack\u4E2D\u4E0D\u540Cloader,\u6BD4\u5982css-loader\uFF0Cts-loader\uFF09</li></ul><h2 id="\u8BBE\u8BA1\u6A21\u5F0F\u5B66\u4E60\u6307\u5BFC\u601D\u8003" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u6A21\u5F0F\u5B66\u4E60\u6307\u5BFC\u601D\u8003" aria-hidden="true">#</a> \u8BBE\u8BA1\u6A21\u5F0F\u5B66\u4E60\u6307\u5BFC\u601D\u8003</h2><p>\u5B66\u4E60\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u6700\u4E3B\u8981\u4E0D\u662F\u5B66\u4E60\u6A21\u5F0F\uFF0C\u800C\u662F\u7406\u89E3\u8BBE\u8BA1\u6A21\u5F0F\u7684\u539F\u5219\uFF0C\u7406\u89E3\u5229\u7528\u8BBE\u8BA1\u6A21\u5F0F\u600E\u6837\u505A\u51FA\u4E0D\u540C\u7684\u67B6\u6784\u4F18\u79C0\u7684\u7A0B\u5E8F\u3002</p><h2 id="serverless" tabindex="-1"><a class="header-anchor" href="#serverless" aria-hidden="true">#</a> Serverless</h2><p>\u5FAE\u670D\u52A1\uFF0C\u5C31\u662F\u4E00\u4E2A\u5355\u4E00\u804C\u8D23\u3002</p><h3 id="\u4E91\u51FD\u6570-\u5C06\u4E1A\u52A1\u51FD\u6570\u4E0A\u4F20\u5230\u4E91\u5E73\u53F0" tabindex="-1"><a class="header-anchor" href="#\u4E91\u51FD\u6570-\u5C06\u4E1A\u52A1\u51FD\u6570\u4E0A\u4F20\u5230\u4E91\u5E73\u53F0" aria-hidden="true">#</a> \u4E91\u51FD\u6570\uFF0C\uFF08\u5C06\u4E1A\u52A1\u51FD\u6570\u4E0A\u4F20\u5230\u4E91\u5E73\u53F0\uFF09</h3><blockquote><p>\u4E0D\u7528\u56E0\u4E3A\u8FD0\u7EF4\u548C\u67B6\u6784\u7684\u4E8B\u60C5\u64CD\u5FC3</p></blockquote><ul><li>\uFF081\uFF09\u7F29\u77ED\u4E1A\u52A1\u4E0A\u7EBF\u5468\u671F</li><li>\uFF082\uFF09\u51CF\u5C11\u51FA\u9519\u7684\u6982\u7387</li><li>\uFF083\uFF09\u4E1A\u52A1\u5F00\u53D1\u4E0A\u624B\u7684\u96BE\u5EA6\u66F4\u4F4E\u3002</li></ul><blockquote><p>\u6E10\u8FDB\u5F0F\u3002 \u5BB9\u6613\u4E0A\u624B\uFF0C\u81EA\u5DF1\u5F00\u59CB\u7684\u65F6\u5019\u4E0D\u7528\u5173\u5FC3\u7EC6\u8282\uFF0C\u53EA\u6709\u81EA\u5DF1\u9700\u8981\u4F18\u5316\u7684\u65F6\u5019\uFF0C\u624D\u9700\u8981\u81EA\u5DF1\u4E86\u89E3\u590D\u6742\u7EC6\u8282\u3002 \u5C31\u50CFwebpack\u7684\u914D\u7F6E\u5185\u5BB9\u4E00\u6837\uFF0C\u4F60\u4E0D\u914D\u7F6E\u4E5F\u53EF\u4EE5\u4F7F\u7528\u3002 Serverless\u5C4F\u853D\u670D\u52A1\u5668\u7EC6\u8282 Vue/React\u662Fdomles,\u5C4F\u853DDom\u64CD\u4F5C\u7EC6\u8282\u3002 Jquery\u662F\u5C4F\u853D\u4E86\u6D4F\u89C8\u5668\u517C\u5BB9\u7684\u7EC6\u8282\u3002 Nodejs\u662Fthreadless,\u901A\u8FC7\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u5E95\u5C42\u7BA1\u7406\u7EBF\u7A0B\u3002 JavaScript\u662F\u5C4F\u853D\u4E86\u7C7B\u578B\u7CFB\u7EDF\u7684\u7EC6\u8282\uFF0C\u5C4F\u853D\u5185\u5B58\u7BA1\u7406\u7EC6\u8282\uFF0C</p></blockquote><h2 id="\u5F02\u6B65\u7EC8\u6781\u89E3\u51B3\u65B9\u6848await\u548Casync" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u7EC8\u6781\u89E3\u51B3\u65B9\u6848await\u548Casync" aria-hidden="true">#</a> \u5F02\u6B65\u7EC8\u6781\u89E3\u51B3\u65B9\u6848await\u548Casync</h2><p>await\u597D\u5904\uFF0C \u53EF\u4EE5\u5C06promise\u8FD4\u56DE\u503C\u8D4B\u503C\u7ED9\u6700\u5916\u5C42\u3002\u53EF\u4EE5 \u53EF\u4EE5\u5C06\u7B80\u5316\u4E00\u4E2Anew Promise\u7684\u6784\u9020\u51FD\u6570\u7684\u5B9E\u73B0 \u53EF\u4EE5\u5C06Promise\u4E2D\u7684\u5F02\u6B65\u62A5\u9519\u51FD\u6570setTimeout\u51FD\u6570\u6355\u6349\u5230\u9519\u8BEF\u3002</p>',63),s=[i];function n(t,c){return a(),r("div",null,s)}var o=e(h,[["render",n],["__file","003\u7B2C\u56DB\u7AE0\u7B14\u8BB0Node.js\u4F18\u5316\u6027\u80FD.html.vue"]]);export{o as default};
