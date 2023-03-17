<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_001-移动端自适应的适应方案-rem-和-vw">001 移动端自适应的适应方案：rem 和 vw</RouterLink><ul><li><RouterLink to="#_1-第一种-flexmin-js-适配">1.第一种 flexmin.js 适配</RouterLink></li><li><RouterLink to="#_2-postcss-to-viewport">2.postcss-to-viewport</RouterLink></li></ul></li><li><RouterLink to="#_3-rem-和-vw-布局对比和响应式方案实现">3.rem 和 vw 布局对比和响应式方案实现</RouterLink></li><li><RouterLink to="#_4-pc-端出现-vw-布局的滚动条后-消除的思路">4.PC 端出现 vw 布局的滚动条后，消除的思路：</RouterLink></li><li><RouterLink to="#_5-pc-端媒体查询的优雅方式-enquire-js-包">5.PC 端媒体查询的优雅方式 enquire.js 包</RouterLink><ul><li><RouterLink to="#功能说明">功能说明</RouterLink></li><li><RouterLink to="#使用方式">使用方式</RouterLink></li></ul></li></ul></nav>
<p>mobile.width = 750px =&gt; 750px = 100% =100vw =&gt; 750px = 100vw
=&gt; 1px = 0.1333vw =&gt;
100px = 13.33vw =&gt;</p>
<p>得出：
移动端的尺寸 / 100 = XXX rem；</p>
<p>这里大概</p>
<h2 id="_001-移动端自适应的适应方案-rem-和-vw" tabindex="-1"><a class="header-anchor" href="#_001-移动端自适应的适应方案-rem-和-vw" aria-hidden="true">#</a> 001 移动端自适应的适应方案：rem 和 vw</h2>
<p>这里两种实现方案</p>
<h3 id="_1-第一种-flexmin-js-适配" tabindex="-1"><a class="header-anchor" href="#_1-第一种-flexmin-js-适配" aria-hidden="true">#</a> 1.第一种 flexmin.js 适配</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>(function (win, lib) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var flexibleEl = doc.querySelector('meta[name="flexible"]');
    var dpr = 0;
    var scale = 0;
    var tid;
    var flexible = lib.flexible || (lib.flexible = {});

    if (metaEl) {
        console.warn("将根据已有的meta标签来设置缩放比例");
        var match = metaEl
            .getAttribute("content")
            // eslint-disable-next-line no-useless-escape
            .match(/initial\-scale=([\d\.]+)/);
        if (match) {
            scale = parseFloat(match[1]);
            dpr = parseInt(1 / scale);
        }
    } else if (flexibleEl) {
        var content = flexibleEl.getAttribute("content");
        if (content) {
            // eslint-disable-next-line no-useless-escape
            var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
            // eslint-disable-next-line no-useless-escape
            var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
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
            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
            if (devicePixelRatio >= 3 &amp;&amp; (!dpr || dpr >= 3)) {
                dpr = 3;
            } else if (devicePixelRatio >= 2 &amp;&amp; (!dpr || dpr >= 2)) {
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            // 其他设备下，仍旧使用1倍的方案
            dpr = 1;
        }
        scale = 1 / dpr;
    }

    docEl.setAttribute("data-dpr", dpr);
    if (!metaEl) {
        metaEl = doc.createElement("meta");
        metaEl.setAttribute("name", "viewport");
        metaEl.setAttribute(
            "content",
            "initial-scale=" +
            scale +
            ", maximum-scale=" +
            scale +
            ", minimum-scale=" +
            scale +
            ", user-scalable=no"
        );
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement("div");
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        // 最小1366px，最大适配2560px
        if (width / dpr &lt; 1366) {
            width = 1366 * dpr;
        } else if (width / dpr > 2560) {
            width = 2560 * dpr;
        }
        // 设置成24等份，设计稿时1920px的，这样1rem就是80px
        var rem = width / 24;
        docEl.style.fontSize = rem + "px";
        flexible.rem = win.rem = rem;
    }

    win.addEventListener(
        "resize",
        function () {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        },
        false
    );
    win.addEventListener(
        "pageshow",
        function (e) {
            if (e.persisted) {
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 300);
            }
        },
        false
    );

    if (doc.readyState === "complete") {
        doc.body.style.fontSize = 12 * dpr + "px";
    } else {
        doc.addEventListener(
            "DOMContentLoaded",
            // eslint-disable-next-line no-unused-vars
            function (e) {
                doc.body.style.fontSize = 12 * dpr + "px";
            },
            false
        );
    }

    refreshRem();

    flexible.dpr = win.dpr = dpr;
    flexible.refreshRem = refreshRem;
    flexible.rem2px = function (d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === "string" &amp;&amp; d.match(/rem$/)) {
            val += "px";
        }
        return val;
    };
    flexible.px2rem = function (d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === "string" &amp;&amp; d.match(/px$/)) {
            val += "rem";
        }
        return val;
    };
})(window, window["lib"] || (window["lib"] = {}));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入这个包项目中即可：main.js 中</p>
<h3 id="_2-postcss-to-viewport" tabindex="-1"><a class="header-anchor" href="#_2-postcss-to-viewport" aria-hidden="true">#</a> 2.postcss-to-viewport</h3>
<p>需要安装 webpack loaderpostcss-loader 才能使用 postcss 中的插件对 css 进行处理</p>
<p>less-loader 使用 7.0.2 和 postcss-to-viewport 合作
备注：vant 组件库，建议使用预编译 less，因为源码底层实现是 less,antD 也是 less。
统一样式预处理器，或是只用 css。</p>
<p>成功案例
https://gitee.com/nyhxiaoning/person-xt-phone-base-vuecli3.git</p>
<h2 id="_3-rem-和-vw-布局对比和响应式方案实现" tabindex="-1"><a class="header-anchor" href="#_3-rem-和-vw-布局对比和响应式方案实现" aria-hidden="true">#</a> 3.rem 和 vw 布局对比和响应式方案实现</h2>
<ul>
<li>实现响应式手机展示：方法 1:这种因为 rem 布局，
缺点：弊端之一：和根元素 font-size 值强耦合，系统字体放大或缩小时，会导致布局错乱；
弊端之二：html 文件头部需插入一段 js 代码
优点：rem 的优点：移动端 rem 布局比 vw 主流的原因 兼容性
vw 单位兼容性比 rem 稍差，ios8、安卓 4.4 及以上才完全支持</li>
<li>实现响应式手机展示：方法 2：vw vh 固定按照 viewport 来计算，不会受父元素宽高度影响
页面滚动条属于 viewport 范围内，100vw 当然包括了页面滚动条宽度，而 100%不包含滚动条</li>
</ul>
<h2 id="_4-pc-端出现-vw-布局的滚动条后-消除的思路" tabindex="-1"><a class="header-anchor" href="#_4-pc-端出现-vw-布局的滚动条后-消除的思路" aria-hidden="true">#</a> 4.PC 端出现 vw 布局的滚动条后，消除的思路：</h2>
<p>TODO:PC 端的布局：引发一个问题：pc 端使用 vw 单位时，如果页面内容超出一屏长度，出现了纵向滚动条，同时有元素 width:100vw， 则会导致出现条横向滚动条
移动端滚动条不占位，所以不会有这个问题）不过 pc 端一般不需要弹性布局，还是尽量使用 width:100%更保险。
当然使用 vw 也可以，消除纵向滚动条的方式： margin-right: calc(100% - 100vw);</p>
<h2 id="_5-pc-端媒体查询的优雅方式-enquire-js-包" tabindex="-1"><a class="header-anchor" href="#_5-pc-端媒体查询的优雅方式-enquire-js-包" aria-hidden="true">#</a> 5.PC 端媒体查询的优雅方式 enquire.js 包</h2>
<h3 id="功能说明" tabindex="-1"><a class="header-anchor" href="#功能说明" aria-hidden="true">#</a> 功能说明</h3>
<ul>
<li>
<p>awesome media queries in js</p>
</li>
<li>
<p>轻量级的渐进式响应媒体查询的库。</p>
</li>
</ul>
<h3 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式" aria-hidden="true">#</a> 使用方式</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>方法1：
export function enquireScreen(call) {
  const handler = {
    match: function () {
      call &amp;&amp; call(true)
    },
    unmatch: function () {
      call &amp;&amp; call(false)
    }
  }
  enquireJs.register('only screen and (max-width: 767.99px)', handler)
}


方法2：不用将register中的第二个参数写出来
enquireJs.register("screen and (max-witdh:1000px)",{
	match:function(){},
	unmatch:function(){},


})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
