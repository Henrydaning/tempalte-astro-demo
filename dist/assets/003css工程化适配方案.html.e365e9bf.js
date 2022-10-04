import{_ as d,r as a,o as v,c as r,a as e,b as n,w as l,d as t,e as s}from"./app.ec489271.js";const c={},u={class:"table-of-contents"},m=s("001 \u79FB\u52A8\u7AEF\u81EA\u9002\u5E94\u7684\u9002\u5E94\u65B9\u6848\uFF1Arem \u548C vw"),o=s("1.\u7B2C\u4E00\u79CD flexmin.js \u9002\u914D"),b=s("2.postcss-to-viewport"),p=s("3.rem \u548C vw \u5E03\u5C40\u5BF9\u6BD4\u548C\u54CD\u5E94\u5F0F\u65B9\u6848\u5B9E\u73B0"),h=s("4.PC \u7AEF\u51FA\u73B0 vw \u5E03\u5C40\u7684\u6EDA\u52A8\u6761\u540E\uFF0C\u6D88\u9664\u7684\u601D\u8DEF\uFF1A"),f=t(`<p>mobile.width = 750px =&gt; 750px = 100% =100vw =&gt; 750px = 100vw =&gt; 1px = 0.1333vw =&gt; 100px = 13.33vw =&gt;</p><p>\u5F97\u51FA\uFF1A \u79FB\u52A8\u7AEF\u7684\u5C3A\u5BF8 / 100 = XXX rem\uFF1B</p><p>\u8FD9\u91CC\u5927\u6982</p><h2 id="_001-\u79FB\u52A8\u7AEF\u81EA\u9002\u5E94\u7684\u9002\u5E94\u65B9\u6848-rem-\u548C-vw" tabindex="-1"><a class="header-anchor" href="#_001-\u79FB\u52A8\u7AEF\u81EA\u9002\u5E94\u7684\u9002\u5E94\u65B9\u6848-rem-\u548C-vw" aria-hidden="true">#</a> 001 \u79FB\u52A8\u7AEF\u81EA\u9002\u5E94\u7684\u9002\u5E94\u65B9\u6848\uFF1Arem \u548C vw</h2><p>\u8FD9\u91CC\u4E24\u79CD\u5B9E\u73B0\u65B9\u6848</p><h3 id="_1-\u7B2C\u4E00\u79CD-flexmin-js-\u9002\u914D" tabindex="-1"><a class="header-anchor" href="#_1-\u7B2C\u4E00\u79CD-flexmin-js-\u9002\u914D" aria-hidden="true">#</a> 1.\u7B2C\u4E00\u79CD flexmin.js \u9002\u914D</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(function (win, lib) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector(&#39;meta[name=&quot;viewport&quot;]&#39;);
    var flexibleEl = doc.querySelector(&#39;meta[name=&quot;flexible&quot;]&#39;);
    var dpr = 0;
    var scale = 0;
    var tid;
    var flexible = lib.flexible || (lib.flexible = {});

    if (metaEl) {
        console.warn(&quot;\u5C06\u6839\u636E\u5DF2\u6709\u7684meta\u6807\u7B7E\u6765\u8BBE\u7F6E\u7F29\u653E\u6BD4\u4F8B&quot;);
        var match = metaEl
            .getAttribute(&quot;content&quot;)
            // eslint-disable-next-line no-useless-escape
            .match(/initial\\-scale=([\\d\\.]+)/);
        if (match) {
            scale = parseFloat(match[1]);
            dpr = parseInt(1 / scale);
        }
    } else if (flexibleEl) {
        var content = flexibleEl.getAttribute(&quot;content&quot;);
        if (content) {
            // eslint-disable-next-line no-useless-escape
            var initialDpr = content.match(/initial\\-dpr=([\\d\\.]+)/);
            // eslint-disable-next-line no-useless-escape
            var maximumDpr = content.match(/maximum\\-dpr=([\\d\\.]+)/);
            if (initialDpr) {
                dpr = parseFloat(initialDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
            if (maximumDpr) {
                dpr = parseFloat(maximumDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
        }
    }

    if (!dpr &amp;&amp; !scale) {
        // eslint-disable-next-line no-unused-vars
        var isAndroid = win.navigator.appVersion.match(/android/gi);
        var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio;
        if (isIPhone) {
            // iOS\u4E0B\uFF0C\u5BF9\u4E8E2\u548C3\u7684\u5C4F\uFF0C\u75282\u500D\u7684\u65B9\u6848\uFF0C\u5176\u4F59\u7684\u75281\u500D\u65B9\u6848
            if (devicePixelRatio &gt;= 3 &amp;&amp; (!dpr || dpr &gt;= 3)) {
                dpr = 3;
            } else if (devicePixelRatio &gt;= 2 &amp;&amp; (!dpr || dpr &gt;= 2)) {
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            // \u5176\u4ED6\u8BBE\u5907\u4E0B\uFF0C\u4ECD\u65E7\u4F7F\u75281\u500D\u7684\u65B9\u6848
            dpr = 1;
        }
        scale = 1 / dpr;
    }

    docEl.setAttribute(&quot;data-dpr&quot;, dpr);
    if (!metaEl) {
        metaEl = doc.createElement(&quot;meta&quot;);
        metaEl.setAttribute(&quot;name&quot;, &quot;viewport&quot;);
        metaEl.setAttribute(
            &quot;content&quot;,
            &quot;initial-scale=&quot; +
            scale +
            &quot;, maximum-scale=&quot; +
            scale +
            &quot;, minimum-scale=&quot; +
            scale +
            &quot;, user-scalable=no&quot;
        );
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement(&quot;div&quot;);
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        // \u6700\u5C0F1366px\uFF0C\u6700\u5927\u9002\u914D2560px
        if (width / dpr &lt; 1366) {
            width = 1366 * dpr;
        } else if (width / dpr &gt; 2560) {
            width = 2560 * dpr;
        }
        // \u8BBE\u7F6E\u621024\u7B49\u4EFD\uFF0C\u8BBE\u8BA1\u7A3F\u65F61920px\u7684\uFF0C\u8FD9\u68371rem\u5C31\u662F80px
        var rem = width / 24;
        docEl.style.fontSize = rem + &quot;px&quot;;
        flexible.rem = win.rem = rem;
    }

    win.addEventListener(
        &quot;resize&quot;,
        function () {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        },
        false
    );
    win.addEventListener(
        &quot;pageshow&quot;,
        function (e) {
            if (e.persisted) {
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 300);
            }
        },
        false
    );

    if (doc.readyState === &quot;complete&quot;) {
        doc.body.style.fontSize = 12 * dpr + &quot;px&quot;;
    } else {
        doc.addEventListener(
            &quot;DOMContentLoaded&quot;,
            // eslint-disable-next-line no-unused-vars
            function (e) {
                doc.body.style.fontSize = 12 * dpr + &quot;px&quot;;
            },
            false
        );
    }

    refreshRem();

    flexible.dpr = win.dpr = dpr;
    flexible.refreshRem = refreshRem;
    flexible.rem2px = function (d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === &quot;string&quot; &amp;&amp; d.match(/rem$/)) {
            val += &quot;px&quot;;
        }
        return val;
    };
    flexible.px2rem = function (d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === &quot;string&quot; &amp;&amp; d.match(/px$/)) {
            val += &quot;rem&quot;;
        }
        return val;
    };
})(window, window[&quot;lib&quot;] || (window[&quot;lib&quot;] = {}));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BFC\u5165\u8FD9\u4E2A\u5305\u9879\u76EE\u4E2D\u5373\u53EF\uFF1Amain.js \u4E2D</p><h3 id="_2-postcss-to-viewport" tabindex="-1"><a class="header-anchor" href="#_2-postcss-to-viewport" aria-hidden="true">#</a> 2.postcss-to-viewport</h3><p>\u9700\u8981\u5B89\u88C5 webpack loaderpostcss-loader \u624D\u80FD\u4F7F\u7528 postcss \u4E2D\u7684\u63D2\u4EF6\u5BF9 css \u8FDB\u884C\u5904\u7406</p><p>less-loader \u4F7F\u7528 7.0.2 \u548C postcss-to-viewport \u5408\u4F5C \u5907\u6CE8\uFF1Avant \u7EC4\u4EF6\u5E93\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u9884\u7F16\u8BD1 less\uFF0C\u56E0\u4E3A\u6E90\u7801\u5E95\u5C42\u5B9E\u73B0\u662F less,antD \u4E5F\u662F less\u3002 \u7EDF\u4E00\u6837\u5F0F\u9884\u5904\u7406\u5668\uFF0C\u6216\u662F\u53EA\u7528 css\u3002</p><p>\u6210\u529F\u6848\u4F8B https://gitee.com/nyhxiaoning/person-xt-phone-base-vuecli3.git</p><h2 id="_3-rem-\u548C-vw-\u5E03\u5C40\u5BF9\u6BD4\u548C\u54CD\u5E94\u5F0F\u65B9\u6848\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_3-rem-\u548C-vw-\u5E03\u5C40\u5BF9\u6BD4\u548C\u54CD\u5E94\u5F0F\u65B9\u6848\u5B9E\u73B0" aria-hidden="true">#</a> 3.rem \u548C vw \u5E03\u5C40\u5BF9\u6BD4\u548C\u54CD\u5E94\u5F0F\u65B9\u6848\u5B9E\u73B0</h2><ul><li>\u5B9E\u73B0\u54CD\u5E94\u5F0F\u624B\u673A\u5C55\u793A\uFF1A\u65B9\u6CD5 1:\u8FD9\u79CD\u56E0\u4E3A rem \u5E03\u5C40\uFF0C \u7F3A\u70B9\uFF1A\u5F0A\u7AEF\u4E4B\u4E00\uFF1A\u548C\u6839\u5143\u7D20 font-size \u503C\u5F3A\u8026\u5408\uFF0C\u7CFB\u7EDF\u5B57\u4F53\u653E\u5927\u6216\u7F29\u5C0F\u65F6\uFF0C\u4F1A\u5BFC\u81F4\u5E03\u5C40\u9519\u4E71\uFF1B \u5F0A\u7AEF\u4E4B\u4E8C\uFF1Ahtml \u6587\u4EF6\u5934\u90E8\u9700\u63D2\u5165\u4E00\u6BB5 js \u4EE3\u7801 \u4F18\u70B9\uFF1Arem \u7684\u4F18\u70B9\uFF1A\u79FB\u52A8\u7AEF rem \u5E03\u5C40\u6BD4 vw \u4E3B\u6D41\u7684\u539F\u56E0 \u517C\u5BB9\u6027 vw \u5355\u4F4D\u517C\u5BB9\u6027\u6BD4 rem \u7A0D\u5DEE\uFF0Cios8\u3001\u5B89\u5353 4.4 \u53CA\u4EE5\u4E0A\u624D\u5B8C\u5168\u652F\u6301</li><li>\u5B9E\u73B0\u54CD\u5E94\u5F0F\u624B\u673A\u5C55\u793A\uFF1A\u65B9\u6CD5 2\uFF1Avw vh \u56FA\u5B9A\u6309\u7167 viewport \u6765\u8BA1\u7B97\uFF0C\u4E0D\u4F1A\u53D7\u7236\u5143\u7D20\u5BBD\u9AD8\u5EA6\u5F71\u54CD \u9875\u9762\u6EDA\u52A8\u6761\u5C5E\u4E8E viewport \u8303\u56F4\u5185\uFF0C100vw \u5F53\u7136\u5305\u62EC\u4E86\u9875\u9762\u6EDA\u52A8\u6761\u5BBD\u5EA6\uFF0C\u800C 100%\u4E0D\u5305\u542B\u6EDA\u52A8\u6761</li></ul><h2 id="_4-pc-\u7AEF\u51FA\u73B0-vw-\u5E03\u5C40\u7684\u6EDA\u52A8\u6761\u540E-\u6D88\u9664\u7684\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#_4-pc-\u7AEF\u51FA\u73B0-vw-\u5E03\u5C40\u7684\u6EDA\u52A8\u6761\u540E-\u6D88\u9664\u7684\u601D\u8DEF" aria-hidden="true">#</a> 4.PC \u7AEF\u51FA\u73B0 vw \u5E03\u5C40\u7684\u6EDA\u52A8\u6761\u540E\uFF0C\u6D88\u9664\u7684\u601D\u8DEF\uFF1A</h2><p>TODO:PC \u7AEF\u7684\u5E03\u5C40\uFF1A\u5F15\u53D1\u4E00\u4E2A\u95EE\u9898\uFF1Apc \u7AEF\u4F7F\u7528 vw \u5355\u4F4D\u65F6\uFF0C\u5982\u679C\u9875\u9762\u5185\u5BB9\u8D85\u51FA\u4E00\u5C4F\u957F\u5EA6\uFF0C\u51FA\u73B0\u4E86\u7EB5\u5411\u6EDA\u52A8\u6761\uFF0C\u540C\u65F6\u6709\u5143\u7D20 width:100vw\uFF0C \u5219\u4F1A\u5BFC\u81F4\u51FA\u73B0\u6761\u6A2A\u5411\u6EDA\u52A8\u6761 \u79FB\u52A8\u7AEF\u6EDA\u52A8\u6761\u4E0D\u5360\u4F4D\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u6709\u8FD9\u4E2A\u95EE\u9898\uFF09\u4E0D\u8FC7 pc \u7AEF\u4E00\u822C\u4E0D\u9700\u8981\u5F39\u6027\u5E03\u5C40\uFF0C\u8FD8\u662F\u5C3D\u91CF\u4F7F\u7528 width:100%\u66F4\u4FDD\u9669\u3002 \u5F53\u7136\u4F7F\u7528 vw \u4E5F\u53EF\u4EE5\uFF0C\u6D88\u9664\u7EB5\u5411\u6EDA\u52A8\u6761\u7684\u65B9\u5F0F\uFF1A margin-right: calc(100% - 100vw);</p>`,16);function w(x,q){const i=a("RouterLink");return v(),r("div",null,[e("nav",u,[e("ul",null,[e("li",null,[n(i,{to:"#_001-\u79FB\u52A8\u7AEF\u81EA\u9002\u5E94\u7684\u9002\u5E94\u65B9\u6848-rem-\u548C-vw"},{default:l(()=>[m]),_:1}),e("ul",null,[e("li",null,[n(i,{to:"#_1-\u7B2C\u4E00\u79CD-flexmin-js-\u9002\u914D"},{default:l(()=>[o]),_:1})]),e("li",null,[n(i,{to:"#_2-postcss-to-viewport"},{default:l(()=>[b]),_:1})])])]),e("li",null,[n(i,{to:"#_3-rem-\u548C-vw-\u5E03\u5C40\u5BF9\u6BD4\u548C\u54CD\u5E94\u5F0F\u65B9\u6848\u5B9E\u73B0"},{default:l(()=>[p]),_:1})]),e("li",null,[n(i,{to:"#_4-pc-\u7AEF\u51FA\u73B0-vw-\u5E03\u5C40\u7684\u6EDA\u52A8\u6761\u540E-\u6D88\u9664\u7684\u601D\u8DEF"},{default:l(()=>[h]),_:1})])])]),f])}var g=d(c,[["render",w],["__file","003css\u5DE5\u7A0B\u5316\u9002\u914D\u65B9\u6848.html.vue"]]);export{g as default};
