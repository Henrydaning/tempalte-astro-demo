[[toc]]

oss相关内容全部删除xxx
## 1.CDN 引入实现，性能优化考虑 webpack

（1）第一种方式：

- 修改 HTML 页面，增加如下

```
    <!-- TODO:生成引入CDN的关键代码部分 -->
<!-- require cdn assets js -->
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
