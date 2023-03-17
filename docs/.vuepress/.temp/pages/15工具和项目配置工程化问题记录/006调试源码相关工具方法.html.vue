<template><div><p><img src="/images/home.png" alt="成长"></p>
<nav class="table-of-contents"><ul><li><RouterLink to="#回到博客主页">回到博客主页</RouterLink></li><li><RouterLink to="#_003快速定位代码位置-快速找到页面中组件">003快速定位代码位置：快速找到页面中组件</RouterLink><ul><li><RouterLink to="#_002快速debug">002快速debug</RouterLink></li></ul></li><li><RouterLink to="#_004增加代理服务器的学习whistle">004增加代理服务器的学习whistle</RouterLink><ul><li><RouterLink to="#_1-个人常用的实现场景">（1）个人常用的实现场景</RouterLink></li><li><RouterLink to="#_2-浏览器代理">（2）浏览器代理</RouterLink></li><li><RouterLink to="#_3-浏览器的whistle界面">（3）浏览器的whistle界面</RouterLink></li><li><RouterLink to="#_4-注意开启后-如果代理地址后-无法拿到任意地址">（4）注意开启后，如果代理地址后，无法拿到任意地址</RouterLink></li></ul></li></ul></nav>
<h2 id="回到博客主页" tabindex="-1"><a class="header-anchor" href="#回到博客主页" aria-hidden="true">#</a> 回到博客主页</h2>
<p><RouterLink to="/">博客首页</RouterLink></p>
<h2 id="_003快速定位代码位置-快速找到页面中组件" tabindex="-1"><a class="header-anchor" href="#_003快速定位代码位置-快速找到页面中组件" aria-hidden="true">#</a> 003快速定位代码位置：快速找到页面中组件</h2>
<p>注意一个兼容性问题：对于自动导入api的auto插件有冲突，
node14.3版本以上</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>   // 引入只需如下三步
    //1、install package
    yarn add @guijixing/vue-code-link --dev
    //2、vite.config.js//注意如果vite框架，一定放在vue()插件前，最前面
    import { openCodeServer, addCodeLocation } from '@guijixing/vue-code-link';
    export default ({ command, mode }: ConfigEnv): UserConfig => {
        ...
        const isBuild = command === 'build';
        const codePlugins = !isBuild ? [openCodeServer(), addCodeLocation()] : [];
        return {
            base: VITE_PUBLIC_PATH,
            root,
            resolve: {
            alias: [
                {
                    find: 'vue-i18n',
                    replacement: 'vue-i18n/dist/vue-i18n.cjs.js'
                },
                ...
            ],
            ...///注意插件需要放在最前面
            plugins:[...codePlugins,...]
            ...
        }
    }

    //3、main.js
    import { openCodeClient } from '@guijixing/vue-code-link'
    openCodeClient.init()


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
vscode中跳转到当前的dom的react项目
react-page-click - npm (npmjs.com)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_002快速debug" tabindex="-1"><a class="header-anchor" href="#_002快速debug" aria-hidden="true">#</a> 002快速debug</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vscode中debugger，react项目直接加launch后。

vue项目一般加上后，如果不可以，需要加一些配置
"sourceMapPathOverrides": {
"webpack://?:*/*": "${workspaceFolder}/*"
}
否则就是默认的webRoot



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_004增加代理服务器的学习whistle" tabindex="-1"><a class="header-anchor" href="#_004增加代理服务器的学习whistle" aria-hidden="true">#</a> 004增加代理服务器的学习whistle</h2>
<p>原因</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>基于 Node 实现，跨平台 web 调试代理工具，window，Linux，Mac 都可以使用
用于查看、修改 HTTP、HTTPS、Websocket 的请求、响应，也可以作为 HTTP 代理服务器使用
whistle 采用的是类似配置系统 hosts 的方式，一切操作都可以通过配置实现
可以通过 Node 模块扩展功能

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-个人常用的实现场景" tabindex="-1"><a class="header-anchor" href="#_1-个人常用的实现场景" aria-hidden="true">#</a> （1）个人常用的实现场景</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>绑定 Host
替换请求（Mock 数据）
使用 Weinre 或者 vConsole 调试移动端页面
修改 cookie
往 HTML 中插入样式


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-浏览器代理" tabindex="-1"><a class="header-anchor" href="#_2-浏览器代理" aria-hidden="true">#</a> （2）浏览器代理</h3>
<p>推荐安装 SwitchyOmega 。考虑到一些朋友无法很好的下载安装，可以去 这里 下载。然后配置如下：</p>
<h3 id="_3-浏览器的whistle界面" tabindex="-1"><a class="header-anchor" href="#_3-浏览器的whistle界面" aria-hidden="true">#</a> （3）浏览器的whistle界面</h3>
<p>以下是 whistle 的界面，常见的几个选项：</p>
<p>Network——请求列表页面</p>
<p>Rules——操作规则配置页面</p>
<p>Values——存放 KeyValue 的系统</p>
<p>Plugins——插件列表页面</p>
<h3 id="_4-注意开启后-如果代理地址后-无法拿到任意地址" tabindex="-1"><a class="header-anchor" href="#_4-注意开启后-如果代理地址后-无法拿到任意地址" aria-hidden="true">#</a> （4）注意开启后，如果代理地址后，无法拿到任意地址</h3>
<p>ws start后地址：127.0.0.1:8899
Note: If all the above URLs are unable to access, check the firewall settings
下载开启HTTPS配置位置的内容
这里还需要下载一个浏览器插件:SwitchyOmega设置一个代理whstile的模式，这样所有的请求都被拦截到whstle上。</p>
<p>有时候https请求无法拦截，那么下载一个根证书
暂时先不用放在gitee上面：
https://gitee.com/nyhxiaoning/pnpm-monorepo-mul-react-vue-manager.git/rootCA.crt</p>
</div></template>
