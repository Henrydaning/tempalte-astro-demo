

## 1.CDN 引入实现，性能优化考虑 webpack

（1）第一种方式：

- 修改 HTML 页面，增加如下

```
生成引入CDN的关键代码部分
require cdn assets js
<% for (var i in htmlWebpackPlugin.options.cdn && htmlWebpackPlugin.options.cdn.js) { %>
    <script type="text/javascript" src="<%= htmlWebpackPlugin.options.cdn.js[i] %>"></script>
<% } %>
```

- 增加 webpack 的配置如下

```
const assetsCDN = {
  // webpack build externals
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios',
    nprogress: 'NProgress',
    clipboard: 'ClipboardJS',
    '@antv/data-set': 'DataSet',
    'js-cookie': 'Cookies'
  },
  css: [
  ],
  js: [
    '//cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
    '//cdn.jsdelivr.net/npm/vue-router@3.3.4/dist/vue-router.min.js',
    '//cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.min.js',
    '//cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js',
    '//cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.js',
    '//cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js',
    '//cdn.jsdelivr.net/npm/@antv/data-set@0.11.4/build/data-set.min.js',
    '//cdn.jsdelivr.net/npm/js-cookie@2.2.1/src/js.cookie.min.js'
  ]
}

  chainWebpack: config => {
    // 生产环境下使用CDN
    if (isProd) {
      config.plugin('html')
        .tap(args => {
          args[0].cdn = assetsCDN
        return args
      })
    }
```

(2)方式 2：增加插件：webpack-cdn-plugin，这里支持 webpack4.x

```
使用两个插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');
简单这样写即可
 plugins: [
    new HtmlWebpackPlugin(),
    new WebpackCdnPlugin({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: 'dist/vue.runtime.min.js'
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: 'dist/vue-router.min.js'
        },
        {
          name: 'vuex',
          var: 'Vuex',
          path: 'dist/vuex.min.js'
        }
      ],
      publicPath: '/node_modules'
    })
  ]
};
```

## 2.env 配置 env.development

首先创建一个.env 文件放公共的配置汇总内容文件，

```
VUE_APP_PUBLIC_PATH=/
VUE_APP_NAME=Admin
VUE_APP_ROUTES_KEY=admin.routes
VUE_APP_PERMISSIONS_KEY=admin.permissions
VUE_APP_ROLES_KEY=admin.roles
VUE_APP_USER_KEY=admin.user
VUE_APP_SETTING_KEY=admin.setting
VUE_APP_TBAS_KEY=admin.tabs
VUE_APP_TBAS_TITLES_KEY=admin.tabs.titles
VUE_APP_API_BASE_URL=http://api.iczer.com

```

然后.env.development 就是区分不同的配置环境的文件。
这样写更优雅。

```
VUE_APP_API_BASE_URL=http://dev.iczer.com

```

## 3.配置分包的使用

见下面代码

## 4.配置 ali-oss 方法

```
创建oss文件
module.exports = {
    region: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    //这里自动生成
    accessKeyId: 'xxxxxxxxxxxxxxxxxxxxxxx',
    accessKeySecret: '',
    bucket: ''
}


'use strict';
const path = require('path');
const Oss = require('./oss');
function resolve (dir) {
    return path.join(__dirname, dir);
}

const name = '测试';
const port = 8080;
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
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
                '@': resolve('src')
            }
        }
    },
    chainWebpack (config) {
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end();
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end();

        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true;
                return options;
            })
            .end();
        //主要是这里的配置,直接复制整个config即可
        //process.env.NODE_ENV判断不是测试环境
        config.when(process.env.NODE_ENV !== 'development',
            config => {
                config
                    .plugin('ScriptExtHtmlWebpackPlugin')
                    .after('html')
                    .use('script-ext-html-webpack-plugin', [{
                        // `runtime` must same as runtimeChunk name. default is `runtime`
                        inline: /runtime\..*\.js$/
                    }])
                    .end();
                config.plugin('webpack-aliyun-oss')
                    .use(require('webpack-aliyun-oss'), [{
                        from: "./dist/**",
                        dist: "/",
                        region: Oss.region,
                        accessKeyId: Oss.accessKeyId,
                        accessKeySecret: Oss.accessKeySecret,
                        bucket: Oss.bucket,
                        setOssPath: filePath => {
                            let index = filePath.lastIndexOf("dist");
                            let Path = filePath.substring(index + 4, filePath.length);
                            return Path.replace(/\\/g, "/");
                        }
                    }]);

                // TODO:分包的优化
                config
                    .optimization.splitChunks({
                        chunks: 'all',
                        cacheGroups: {
                            libs: {
                                name: 'chunk-libs',
                                test: /[\\/]node_modules[\\/]/,
                                priority: 10,
                                chunks: 'initial' // only package third parties that are initially dependent
                            },
                            elementUI: {
                                name: 'chunk-elementUI', // split elementUI into a single package
                                priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                            },
                            commons: {
                                name: 'chunk-commons',
                                test: resolve('src/components'), // can customize your rules
                                minChunks: 3, //  minimum common number
                                priority: 5,
                                reuseExistingChunk: true
                            }
                        }
                    });
                config.optimization.runtimeChunk('single');
            }
        );
    }
};


```

## 5.普通 vue.config.js 配置文件汇总

```
/*
 * @Author: daning
 * @Date: 2021-12-13 19:25:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-13 19:27:11
 * @Description: file content
 */
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const resolve = (dir) => {
  return path.join(__dirname, dir);
};
console.log(process.env.NODE_ENV == 'development', process.env.NODE_ENV);
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugins.delete('preload');
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('@v', resolve('src/views'));
    // .set('_c', resolve('src/components'))
    config.plugins.delete('prefetch');
    // TODO:引入全局的quill插件
    config.plugin('provide').use(webpack.ProvidePlugin, [
      {
        'window.Quill': 'quill',
      },
    ]);
    // 配置删除log
    // if (process.env.NODE_ENV == 'development') {
    //   config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    // }
  },

  // 配置webpack的log删除，在线上环境
  configureWebpack: {
    // plugins: plugins,
    plugins: [
      // new optimizeCss(),
      new TerserPlugin({
        cache: true,
        // 多进程
        parallel: true, //加速解析过程
        terserOptions: {
          compress: {
            warnings: false,
            drop_console: process.env.NODE_ENV == 'production' ? true : false,
            drop_debugger: process.env.NODE_ENV == 'production' ? true : false,
            pure_funcs: ['console.log'],
          },
        },
      }),
    ],
  },
  devServer: {
    port: 8016,
    host: '0.0.0.0',
    // 反向代理的设置
    proxy: {
      '/api': {
        target: 'https://test-api.tob.yinweiart.com/',
        changeOrigin: true,
        // pathRewrite: { '^/api/': '/' },
        // 关闭证书校验
        // secure: false,
      },
      // 获取曲谱的时候，使用这个代理地址
      '/rest/': {
        target: 'https://test-api.piano.fish.yinweiart.com/', //跨域地址
        // ws:true,//如果要代理WebSockets,设置为true
        changOrigin: true, //默认flase,将主机头的原点更改为目标URL
        pathRewrite: {
          //如果不希望传递/api，则需要重写路径：
          '^/rest/': '',
        },
      },
    },
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 存放less变量文件的路径
        path.resolve(__dirname, '@/assets/css/index.less'),
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

```

## 6.webpack4.x 中提取主题样式配置

###### wbepack-theme-color-replacer 提取主题样式：webpack4

```CSS
configurreWebpack中配置config
    config.plugins.push(
      new ThemeColorReplacer({
        fileName: 'css/theme-colors-[contenthash:8].css',
        matchColors: getThemeColors(),
        injectCss: true,
        resolveCss
      })
    )


```

## 7.webpack 压缩的插件配置

```
threshold：x以上的文件才进行压缩
minRatio：最小压缩比，小于则不压缩
test：正则匹配的文件才压缩
const productionGzipExtensions = ['js', 'css']
const isProd = process.env.NODE_ENV === 'production'
    // 生产环境下将资源压缩成gzip格式
    if (isProd) {
      // add `CompressionWebpack` plugin to webpack plugins
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }))
    }
```
