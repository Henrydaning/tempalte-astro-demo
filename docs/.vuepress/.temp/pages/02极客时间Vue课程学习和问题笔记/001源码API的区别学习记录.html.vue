<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_1-ref和reactive在vue3中区别">1.ref和reactive在vue3中区别</RouterLink><ul><li><RouterLink to="#_1-ref实现源码">（1）ref实现源码</RouterLink></li></ul></li><li><RouterLink to="#_2-reactive不能做的-ref也可以做。">2.reactive不能做的，ref也可以做。</RouterLink></li></ul></nav>
<h2 id="_1-ref和reactive在vue3中区别" tabindex="-1"><a class="header-anchor" href="#_1-ref和reactive在vue3中区别" aria-hidden="true">#</a> 1.ref和reactive在vue3中区别</h2>
<h3 id="_1-ref实现源码" tabindex="-1"><a class="header-anchor" href="#_1-ref实现源码" aria-hidden="true">#</a> （1）ref实现源码</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
function  ref(value){
    return  createRef(value)
}

function  createRef(rawValue,shallow= false){

    return  new RefImpl(rawValue,shallow)
}
//最终的返回通过RefImpl构造函数new出来一个对象，也就是说ref返回的其实是一个RefImpl对象。


class RefImpl {
    constructor(_rawValue, _shallow = false) {
        ...
        this._value = _shallow ? _rawValue : convert(_rawValue);
    }
    get value() {
        track(toRaw(this), "get" /* GET */, 'value');
        return this._value;
    }
    ...
}
ref中如果传入一个对象，最后也是使用reactive调用，而reactive通过Proxy实现。

所以将对象做成响应式，reactive能做的，ref也可以做

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-reactive不能做的-ref也可以做。" tabindex="-1"><a class="header-anchor" href="#_2-reactive不能做的-ref也可以做。" aria-hidden="true">#</a> 2.reactive不能做的，ref也可以做。</h2>
<p>reactive不支持基本类型直接传入，必须包裹一层对象。</p>
</div></template>
