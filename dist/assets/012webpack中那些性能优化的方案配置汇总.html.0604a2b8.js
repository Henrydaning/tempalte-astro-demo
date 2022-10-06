import{_ as d,r as v,o as a,c as r,a as e,b as i,w as s,d as c,e as l}from"./app.eaa4ef0b.js";const u={},m={class:"table-of-contents"},t=l("1.CDN \u5F15\u5165\u5B9E\u73B0\uFF0C\u6027\u80FD\u4F18\u5316\u8003\u8651 webpack"),b=l("2.env \u914D\u7F6E env.development"),o=l("3.\u914D\u7F6E\u5206\u5305\u7684\u4F7F\u7528"),p=l("4.\u914D\u7F6E ali-oss \u65B9\u6CD5"),x=l("5.\u666E\u901A vue.config.js \u914D\u7F6E\u6587\u4EF6\u6C47\u603B"),g=l("6.webpack4.x \u4E2D\u63D0\u53D6\u4E3B\u9898\u6837\u5F0F\u914D\u7F6E"),h=l("7.webpack \u538B\u7F29\u7684\u63D2\u4EF6\u914D\u7F6E"),_=c(`<h2 id="_1-cdn-\u5F15\u5165\u5B9E\u73B0-\u6027\u80FD\u4F18\u5316\u8003\u8651-webpack" tabindex="-1"><a class="header-anchor" href="#_1-cdn-\u5F15\u5165\u5B9E\u73B0-\u6027\u80FD\u4F18\u5316\u8003\u8651-webpack" aria-hidden="true">#</a> 1.CDN \u5F15\u5165\u5B9E\u73B0\uFF0C\u6027\u80FD\u4F18\u5316\u8003\u8651 webpack</h2><p>\uFF081\uFF09\u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>\u4FEE\u6539 HTML \u9875\u9762\uFF0C\u589E\u52A0\u5982\u4E0B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u751F\u6210\u5F15\u5165CDN\u7684\u5173\u952E\u4EE3\u7801\u90E8\u5206
require cdn assets js
&lt;% for (var i in htmlWebpackPlugin.options.cdn &amp;&amp; htmlWebpackPlugin.options.cdn.js) { %&gt;
    &lt;script type=&quot;text/javascript&quot; src=&quot;&lt;%= htmlWebpackPlugin.options.cdn.js[i] %&gt;&quot;&gt;&lt;/script&gt;
&lt;% } %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u589E\u52A0 webpack \u7684\u914D\u7F6E\u5982\u4E0B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const assetsCDN = {
  // webpack build externals
  externals: {
    vue: &#39;Vue&#39;,
    &#39;vue-router&#39;: &#39;VueRouter&#39;,
    vuex: &#39;Vuex&#39;,
    axios: &#39;axios&#39;,
    nprogress: &#39;NProgress&#39;,
    clipboard: &#39;ClipboardJS&#39;,
    &#39;@antv/data-set&#39;: &#39;DataSet&#39;,
    &#39;js-cookie&#39;: &#39;Cookies&#39;
  },
  css: [
  ],
  js: [
    &#39;//cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js&#39;,
    &#39;//cdn.jsdelivr.net/npm/vue-router@3.3.4/dist/vue-router.min.js&#39;,
    &#39;//cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.min.js&#39;,
    &#39;//cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js&#39;,
    &#39;//cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.js&#39;,
    &#39;//cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js&#39;,
    &#39;//cdn.jsdelivr.net/npm/@antv/data-set@0.11.4/build/data-set.min.js&#39;,
    &#39;//cdn.jsdelivr.net/npm/js-cookie@2.2.1/src/js.cookie.min.js&#39;
  ]
}

  chainWebpack: config =&gt; {
    // \u751F\u4EA7\u73AF\u5883\u4E0B\u4F7F\u7528CDN
    if (isProd) {
      config.plugin(&#39;html&#39;)
        .tap(args =&gt; {
          args[0].cdn = assetsCDN
        return args
      })
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2)\u65B9\u5F0F 2\uFF1A\u589E\u52A0\u63D2\u4EF6\uFF1Awebpack-cdn-plugin\uFF0C\u8FD9\u91CC\u652F\u6301 webpack4.x</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F7F\u7528\u4E24\u4E2A\u63D2\u4EF6
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);
const WebpackCdnPlugin = require(&#39;webpack-cdn-plugin&#39;);
\u7B80\u5355\u8FD9\u6837\u5199\u5373\u53EF
 plugins: [
    new HtmlWebpackPlugin(),
    new WebpackCdnPlugin({
      modules: [
        {
          name: &#39;vue&#39;,
          var: &#39;Vue&#39;,
          path: &#39;dist/vue.runtime.min.js&#39;
        },
        {
          name: &#39;vue-router&#39;,
          var: &#39;VueRouter&#39;,
          path: &#39;dist/vue-router.min.js&#39;
        },
        {
          name: &#39;vuex&#39;,
          var: &#39;Vuex&#39;,
          path: &#39;dist/vuex.min.js&#39;
        }
      ],
      publicPath: &#39;/node_modules&#39;
    })
  ]
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-env-\u914D\u7F6E-env-development" tabindex="-1"><a class="header-anchor" href="#_2-env-\u914D\u7F6E-env-development" aria-hidden="true">#</a> 2.env \u914D\u7F6E env.development</h2><p>\u9996\u5148\u521B\u5EFA\u4E00\u4E2A.env \u6587\u4EF6\u653E\u516C\u5171\u7684\u914D\u7F6E\u6C47\u603B\u5185\u5BB9\u6587\u4EF6\uFF0C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>VUE_APP_PUBLIC_PATH=/
VUE_APP_NAME=Admin
VUE_APP_ROUTES_KEY=admin.routes
VUE_APP_PERMISSIONS_KEY=admin.permissions
VUE_APP_ROLES_KEY=admin.roles
VUE_APP_USER_KEY=admin.user
VUE_APP_SETTING_KEY=admin.setting
VUE_APP_TBAS_KEY=admin.tabs
VUE_APP_TBAS_TITLES_KEY=admin.tabs.titles
VUE_APP_API_BASE_URL=http://api.iczer.com

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E.env.development \u5C31\u662F\u533A\u5206\u4E0D\u540C\u7684\u914D\u7F6E\u73AF\u5883\u7684\u6587\u4EF6\u3002 \u8FD9\u6837\u5199\u66F4\u4F18\u96C5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>VUE_APP_API_BASE_URL=http://dev.iczer.com

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u914D\u7F6E\u5206\u5305\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6E\u5206\u5305\u7684\u4F7F\u7528" aria-hidden="true">#</a> 3.\u914D\u7F6E\u5206\u5305\u7684\u4F7F\u7528</h2><p>\u89C1\u4E0B\u9762\u4EE3\u7801</p><h2 id="_4-\u914D\u7F6E-ali-oss-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-\u914D\u7F6E-ali-oss-\u65B9\u6CD5" aria-hidden="true">#</a> 4.\u914D\u7F6E ali-oss \u65B9\u6CD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u521B\u5EFAoss\u6587\u4EF6
module.exports = {
    region: &#39;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&#39;,
    //\u8FD9\u91CC\u81EA\u52A8\u751F\u6210
    accessKeyId: &#39;xxxxxxxxxxxxxxxxxxxxxxx&#39;,
    accessKeySecret: &#39;&#39;,
    bucket: &#39;&#39;
}


&#39;use strict&#39;;
const path = require(&#39;path&#39;);
const Oss = require(&#39;./oss&#39;);
function resolve (dir) {
    return path.join(__dirname, dir);
}

const name = &#39;\u6D4B\u8BD5&#39;;
const port = 8080;
module.exports = {
    publicPath: &#39;./&#39;,
    outputDir: &#39;dist&#39;,
    assetsDir: &#39;static&#39;,
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        }
    },
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                &#39;@&#39;: resolve(&#39;src&#39;)
            }
        }
    },
    chainWebpack (config) {
        config.plugins.delete(&#39;preload&#39;);
        config.plugins.delete(&#39;prefetch&#39;);
        config.module
            .rule(&#39;svg&#39;)
            .exclude.add(resolve(&#39;src/icons&#39;))
            .end();
        config.module
            .rule(&#39;icons&#39;)
            .test(/\\.svg$/)
            .include.add(resolve(&#39;src/icons&#39;))
            .end()
            .use(&#39;svg-sprite-loader&#39;)
            .loader(&#39;svg-sprite-loader&#39;)
            .options({
                symbolId: &#39;icon-[name]&#39;
            })
            .end();

        config.module
            .rule(&#39;vue&#39;)
            .use(&#39;vue-loader&#39;)
            .loader(&#39;vue-loader&#39;)
            .tap(options =&gt; {
                options.compilerOptions.preserveWhitespace = true;
                return options;
            })
            .end();
        //\u4E3B\u8981\u662F\u8FD9\u91CC\u7684\u914D\u7F6E,\u76F4\u63A5\u590D\u5236\u6574\u4E2Aconfig\u5373\u53EF
        //p<wbr>rocess.env.NODE_ENV\u5224\u65AD\u4E0D\u662F\u6D4B\u8BD5\u73AF\u5883
        config.when(p<wbr>rocess.env.NODE_ENV !== &#39;development&#39;,
            config =&gt; {
                config
                    .plugin(&#39;ScriptExtHtmlWebpackPlugin&#39;)
                    .after(&#39;html&#39;)
                    .use(&#39;script-ext-html-webpack-plugin&#39;, [{
                        // \`runtime\` must same as runtimeChunk name. default is \`runtime\`
                        inline: /runtime\\..*\\.js$/
                    }])
                    .end();
                config.plugin(&#39;webpack-aliyun-oss&#39;)
                    .use(require(&#39;webpack-aliyun-oss&#39;), [{
                        from: &quot;./dist/**&quot;,
                        dist: &quot;/&quot;,
                        region: Oss.region,
                        accessKeyId: Oss.accessKeyId,
                        accessKeySecret: Oss.accessKeySecret,
                        bucket: Oss.bucket,
                        setOssPath: filePath =&gt; {
                            let index = filePath.lastIndexOf(&quot;dist&quot;);
                            let Path = filePath.substring(index + 4, filePath.length);
                            return Path.replace(/\\\\/g, &quot;/&quot;);
                        }
                    }]);

                // TODO:\u5206\u5305\u7684\u4F18\u5316
                config
                    .optimization.splitChunks({
                        chunks: &#39;all&#39;,
                        cacheGroups: {
                            libs: {
                                name: &#39;chunk-libs&#39;,
                                test: /[\\\\/]node_modules[\\\\/]/,
                                priority: 10,
                                chunks: &#39;initial&#39; // only package third parties that are initially dependent
                            },
                            elementUI: {
                                name: &#39;chunk-elementUI&#39;, // split elementUI into a single package
                                priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                test: /[\\\\/]node_modules[\\\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                            },
                            commons: {
                                name: &#39;chunk-commons&#39;,
                                test: resolve(&#39;src/components&#39;), // can customize your rules
                                minChunks: 3, //  minimum common number
                                priority: 5,
                                reuseExistingChunk: true
                            }
                        }
                    });
                config.optimization.runtimeChunk(&#39;single&#39;);
            }
        );
    }
};


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u666E\u901A-vue-config-js-\u914D\u7F6E\u6587\u4EF6\u6C47\u603B" tabindex="-1"><a class="header-anchor" href="#_5-\u666E\u901A-vue-config-js-\u914D\u7F6E\u6587\u4EF6\u6C47\u603B" aria-hidden="true">#</a> 5.\u666E\u901A vue.config.js \u914D\u7F6E\u6587\u4EF6\u6C47\u603B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/*
 * @Author: daning
 * @Date: 2021-12-13 19:25:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-13 19:27:11
 * @Description: file content
 */
const path = require(&#39;path&#39;);
const webpack = require(&#39;webpack&#39;);
const TerserPlugin = require(&#39;terser-webpack-plugin&#39;);
const resolve = (dir) =&gt; {
  return path.join(__dirname, dir);
};
console.log(p<wbr>rocess.env.NODE_ENV == &#39;development&#39;, p<wbr>rocess.env.NODE_ENV);
module.exports = {
  publicPath: &#39;./&#39;,
  outputDir: &#39;dist&#39;,
  productionSourceMap: false,
  chainWebpack: (config) =&gt; {
    config.plugins.delete(&#39;preload&#39;);
    config.resolve.alias
      .set(&#39;@&#39;, resolve(&#39;src&#39;))
      .set(&#39;_c&#39;, resolve(&#39;src/components&#39;))
      .set(&#39;@v&#39;, resolve(&#39;src/views&#39;));
    // .set(&#39;_c&#39;, resolve(&#39;src/components&#39;))
    config.plugins.delete(&#39;prefetch&#39;);
    // TODO:\u5F15\u5165\u5168\u5C40\u7684quill\u63D2\u4EF6
    config.plugin(&#39;provide&#39;).use(webpack.ProvidePlugin, [
      {
        &#39;window.Quill&#39;: &#39;quill&#39;,
      },
    ]);
    // \u914D\u7F6E\u5220\u9664log
    // if (p<wbr>rocess.env.NODE_ENV == &#39;development&#39;) {
    //   config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    // }
  },

  // \u914D\u7F6Ewebpack\u7684log\u5220\u9664\uFF0C\u5728\u7EBF\u4E0A\u73AF\u5883
  configureWebpack: {
    // plugins: plugins,
    plugins: [
      // new optimizeCss(),
      new TerserPlugin({
        cache: true,
        // \u591A\u8FDB\u7A0B
        parallel: true, //\u52A0\u901F\u89E3\u6790\u8FC7\u7A0B
        terserOptions: {
          compress: {
            warnings: false,
            drop_console: p<wbr>rocess.env.NODE_ENV == &#39;production&#39; ? true : false,
            drop_debugger: p<wbr>rocess.env.NODE_ENV == &#39;production&#39; ? true : false,
            pure_funcs: [&#39;console.log&#39;],
          },
        },
      }),
    ],
  },
  devServer: {
    port: 8016,
    host: &#39;0.0.0.0&#39;,
    // \u53CD\u5411\u4EE3\u7406\u7684\u8BBE\u7F6E
    proxy: {
      &#39;/api&#39;: {
        target: &#39;https://test-api.tob.yinweiart.com/&#39;,
        changeOrigin: true,
        // pathRewrite: { &#39;^/api/&#39;: &#39;/&#39; },
        // \u5173\u95ED\u8BC1\u4E66\u6821\u9A8C
        // secure: false,
      },
      // \u83B7\u53D6\u66F2\u8C31\u7684\u65F6\u5019\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u4EE3\u7406\u5730\u5740
      &#39;/rest/&#39;: {
        target: &#39;https://test-api.piano.fish.yinweiart.com/&#39;, //\u8DE8\u57DF\u5730\u5740
        // ws:true,//\u5982\u679C\u8981\u4EE3\u7406WebSockets,\u8BBE\u7F6E\u4E3Atrue
        changOrigin: true, //\u9ED8\u8BA4flase,\u5C06\u4E3B\u673A\u5934\u7684\u539F\u70B9\u66F4\u6539\u4E3A\u76EE\u6807URL
        pathRewrite: {
          //\u5982\u679C\u4E0D\u5E0C\u671B\u4F20\u9012/api\uFF0C\u5219\u9700\u8981\u91CD\u5199\u8DEF\u5F84\uFF1A
          &#39;^/rest/&#39;: &#39;&#39;,
        },
      },
    },
  },

  pluginOptions: {
    &#39;style-resources-loader&#39;: {
      preProcessor: &#39;less&#39;,
      patterns: [
        // \u5B58\u653Eless\u53D8\u91CF\u6587\u4EF6\u7684\u8DEF\u5F84
        path.resolve(__dirname, &#39;@/assets/css/index.less&#39;),
      ],
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-webpack4-x-\u4E2D\u63D0\u53D6\u4E3B\u9898\u6837\u5F0F\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_6-webpack4-x-\u4E2D\u63D0\u53D6\u4E3B\u9898\u6837\u5F0F\u914D\u7F6E" aria-hidden="true">#</a> 6.webpack4.x \u4E2D\u63D0\u53D6\u4E3B\u9898\u6837\u5F0F\u914D\u7F6E</h2><h6 id="wbepack-theme-color-replacer-\u63D0\u53D6\u4E3B\u9898\u6837\u5F0F-webpack4" tabindex="-1"><a class="header-anchor" href="#wbepack-theme-color-replacer-\u63D0\u53D6\u4E3B\u9898\u6837\u5F0F-webpack4" aria-hidden="true">#</a> wbepack-theme-color-replacer \u63D0\u53D6\u4E3B\u9898\u6837\u5F0F\uFF1Awebpack4</h6><div class="language-CSS ext-CSS line-numbers-mode"><pre class="language-CSS"><code>configurreWebpack\u4E2D\u914D\u7F6Econfig
    config.plugins.push(
      new ThemeColorReplacer({
        fileName: &#39;css/theme-colors-[contenthash:8].css&#39;,
        matchColors: getThemeColors(),
        injectCss: true,
        resolveCss
      })
    )


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-webpack-\u538B\u7F29\u7684\u63D2\u4EF6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_7-webpack-\u538B\u7F29\u7684\u63D2\u4EF6\u914D\u7F6E" aria-hidden="true">#</a> 7.webpack \u538B\u7F29\u7684\u63D2\u4EF6\u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>threshold\uFF1Ax\u4EE5\u4E0A\u7684\u6587\u4EF6\u624D\u8FDB\u884C\u538B\u7F29
minRatio\uFF1A\u6700\u5C0F\u538B\u7F29\u6BD4\uFF0C\u5C0F\u4E8E\u5219\u4E0D\u538B\u7F29
test\uFF1A\u6B63\u5219\u5339\u914D\u7684\u6587\u4EF6\u624D\u538B\u7F29
const productionGzipExtensions = [&#39;js&#39;, &#39;css&#39;]
const isProd = p<wbr>rocess.env.NODE_ENV === &#39;production&#39;
    // \u751F\u4EA7\u73AF\u5883\u4E0B\u5C06\u8D44\u6E90\u538B\u7F29\u6210gzip\u683C\u5F0F
    if (isProd) {
      // add \`CompressionWebpack\` plugin to webpack plugins
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: &#39;gzip&#39;,
        test: new RegExp(&#39;\\\\.(&#39; + productionGzipExtensions.join(&#39;|&#39;) + &#39;)$&#39;),
        threshold: 10240,
        minRatio: 0.8
      }))
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function f(k,w){const n=v("RouterLink");return a(),r("div",null,[e("nav",m,[e("ul",null,[e("li",null,[i(n,{to:"#_1-cdn-\u5F15\u5165\u5B9E\u73B0-\u6027\u80FD\u4F18\u5316\u8003\u8651-webpack"},{default:s(()=>[t]),_:1})]),e("li",null,[i(n,{to:"#_2-env-\u914D\u7F6E-env-development"},{default:s(()=>[b]),_:1})]),e("li",null,[i(n,{to:"#_3-\u914D\u7F6E\u5206\u5305\u7684\u4F7F\u7528"},{default:s(()=>[o]),_:1})]),e("li",null,[i(n,{to:"#_4-\u914D\u7F6E-ali-oss-\u65B9\u6CD5"},{default:s(()=>[p]),_:1})]),e("li",null,[i(n,{to:"#_5-\u666E\u901A-vue-config-js-\u914D\u7F6E\u6587\u4EF6\u6C47\u603B"},{default:s(()=>[x]),_:1})]),e("li",null,[i(n,{to:"#_6-webpack4-x-\u4E2D\u63D0\u53D6\u4E3B\u9898\u6837\u5F0F\u914D\u7F6E"},{default:s(()=>[g]),_:1})]),e("li",null,[i(n,{to:"#_7-webpack-\u538B\u7F29\u7684\u63D2\u4EF6\u914D\u7F6E"},{default:s(()=>[h]),_:1})])])]),_])}var E=d(u,[["render",f],["__file","012webpack\u4E2D\u90A3\u4E9B\u6027\u80FD\u4F18\u5316\u7684\u65B9\u6848\u914D\u7F6E\u6C47\u603B.html.vue"]]);export{E as default};
