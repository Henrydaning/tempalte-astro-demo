<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#类库开发">类库开发</RouterLink></li></ul></nav>
<h4 id="es12-发布了-在-vue-项目中想要使用-如何做到" tabindex="-1"><a class="header-anchor" href="#es12-发布了-在-vue-项目中想要使用-如何做到" aria-hidden="true">#</a> ES12 发布了，在 vue 项目中想要使用，如何做到？</h4>
<p>最简单粗暴的办法就是 babel-loader 引入。</p>
<h4 id="_1-方法-1-vue-webpack-配置中-默认使用-vue-cli-plugin-babel" tabindex="-1"><a class="header-anchor" href="#_1-方法-1-vue-webpack-配置中-默认使用-vue-cli-plugin-babel" aria-hidden="true">#</a> （1）方法 1：vue+webpack 配置中，默认使用：**@vue/cli-plugin-babel</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Uses Babel 7 + babel-loader + @vue/babel-preset-app by default。我们可以通过babel.config.js文件进行其他的自定义配置。

module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ]
};
这样默认配置后，可以将所有的API转换。通过@vue/cli-plugin-babel/preset 配置babel 的 presets
转换高级语法使用，无论是ES6,ES7+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法-2-脱离-vue-框架看-或是-vite-脚手架的时候" tabindex="-1"><a class="header-anchor" href="#方法-2-脱离-vue-框架看-或是-vite-脚手架的时候" aria-hidden="true">#</a> 方法 2：脱离 vue 框架看，或是 vite 脚手架的时候，</h4>
<p>我们需要认真考虑</p>
<p>Babel 7.4 之后不再推荐使用<code v-pre>@babel/polyfill</code>，而是推荐浏览器使用 corejs 管理。</p>
<p>core-js 是完全模块化的 javascript 标准库。</p>
<blockquote>
<p>core-js v2 已经不再维护，推荐使用 v3 版本</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// .babelrc
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "80" // 推荐使用 .browserslistrc
        },
        "useBuiltIns": "entry",
        "corejs": {
          "version": 3, // 2 和 3 版本都需要手动安装库：yarn add core-js@3
          "proposals": false
        }
      }
    ]
  ],
  "plugins": []
}

然后在入口文件引入polyfill文件
import 'core-js/stable';
import 'regenerator-runtime/runtime';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法-3-使用-plugin-transform-runtime" tabindex="-1"><a class="header-anchor" href="#方法-3-使用-plugin-transform-runtime" aria-hidden="true">#</a> 方法 3：使用 plugin-transform-runtime</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>`plugin-transform-runtime`可以主要做了三件事：



- 当开发者使用异步或生成器的时候，自动引入`@babel/runtime/regenerator`，开发者不必在入口文件做额外引入
- 提供沙盒环境，避免全局环境的污染
- 移除`babel`内联的`helpers`，统一使用`@babel/runtime/helpers`代替，减小打包体积

 当使用此方案时，不需要在入口文件处手动引入`core-js`和`regenerator-runtime`。详细的配置项建议在需要用的时候查看官方文档。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yarn add @babel/runtime //默认 corejs为 false，
如果使用 core-js v3 的 runtime，
则需要安装 @babel/runtime-corejs3 yarn add -D babel-plugin-transform-runtime

作者：妙才Dev
链接：https://juejin.cn/post/6984020141746946084
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

我们用babel插件的时候，有一个@babel/preset-env,@babel/preset-env的作用就是将常用的ES6特性放到一起了,然后这样我们可以设置


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法-4-区分-babel-preset-env-和-plugin-transform-runtime-的机制。" tabindex="-1"><a class="header-anchor" href="#方法-4-区分-babel-preset-env-和-plugin-transform-runtime-的机制。" aria-hidden="true">#</a> 方法 4：区分@babel/preset-env 和 plugin-transform-runtime 的机制。</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>使用前如果是babel7版本，如下看。

`@babel/preset-env`和`plugin-transform-runtime`二者都可以设置使用`corejs`来处理`polyfill`，二者各有使用场景，在项目开发和类库开发的时候可以使用不同的配置。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="项目开发" tabindex="-1"><a class="header-anchor" href="#项目开发" aria-hidden="true">#</a> 项目开发</h5>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>useBuiltIns使用usage，尽量使用社区广泛使用的优质库以优化打包体积，不使用暂未进入规范的特性。plugin-transform-runtime只使用其移除内联复用的辅助函数的特性，减小打包体积。

{
  "presets": [
    [
      "@babel/preset-env",
      {
        // targets 官方推荐使用 .browserslistrc 配置
        "useBuiltIns": "usage",
        "corejs": {
          "version": 3,
          "proposals": false
        }
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": false // 默认值，即使如此依然需要 yarn add @babel/runtime
      }
    ]
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类库开发" tabindex="-1"><a class="header-anchor" href="#类库开发" aria-hidden="true">#</a> 类库开发</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>类库开发尽量不使用污染全局环境的polyfill，因此@babel/preset-env只发挥语法转换的功能，polyfill由plugin-transform-runtime来处理，推荐使用core-js@3，并且不使用未进入规范的特性。
{
  "presets": [
    [
      "@babel/preset-env",
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": {
          "version": 3,
          "proposals": true
        },
        "useESModules": true
      }
    ]
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法-5-三个相关-babel-插件作用-browserslist-preset-env-core-js" tabindex="-1"><a class="header-anchor" href="#方法-5-三个相关-babel-插件作用-browserslist-preset-env-core-js" aria-hidden="true">#</a> 方法 5：三个相关 babel 插件作用：<strong>browserslist，preset-env，core-js</strong></h4>
<h4 id="方案-6-目前-babel-和-tsc-都可以支持-ts-编译" tabindex="-1"><a class="header-anchor" href="#方案-6-目前-babel-和-tsc-都可以支持-ts-编译" aria-hidden="true">#</a> 方案 6：目前 babel 和 tsc 都可以支持 ts 编译</h4>
<p>最好使用 typescript 支持 tsc</p>
<p>对于 babel 来说配置</p>
<div class="language-Java ext-Java line-numbers-mode"><pre v-pre class="language-Java"><code>module.exports = {
    presets: [
        [
            '@babel/preset-typescript'
        ],
        [
            '@babel/preset-env',
            {
                targets: '目标环境',
                useBuiltIns: 'usage' // ‘entry’
            }
        ]
    ],
    plugins: [ '@babel/plugin-transform-runtime']
}
但是注意：babel有一些不支持的 ts 语法
babel 是每个文件单独编译的，而 tsc 不是，tsc 是整个项目一起编译，会处理类型声明文件，会做跨文件的类型声明合并，比如 namespace 和 interface 就可以跨文件合并。
所以 babel 编译 ts 代码有一些特性是没法支持的。

babel的好处，可以根据preset-env中配置按需引入，但是tsc因为没有做polyfill处理，需要全量引入corejs.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
