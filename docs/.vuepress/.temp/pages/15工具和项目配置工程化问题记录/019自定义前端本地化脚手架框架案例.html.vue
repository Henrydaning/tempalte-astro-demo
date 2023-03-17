<template><div><h1 id="_1-实现本地化cli脚手架选择器实现" tabindex="-1"><a class="header-anchor" href="#_1-实现本地化cli脚手架选择器实现" aria-hidden="true">#</a> 1.实现本地化cli脚手架选择器实现</h1>
<p><a href="https://gitee.com/front-end-tool-development/cli-scaffold-local-down-sets.git" target="_blank" rel="noopener noreferrer">本地化地址<ExternalLinkIcon/></a>
本地化后，非常方便，不需要根据github上面的分支，下载不同的切换（网络下载问题。）</p>
<h2 id="_1-首先保证本地的包发布全局-然后调试" tabindex="-1"><a class="header-anchor" href="#_1-首先保证本地的包发布全局-然后调试" aria-hidden="true">#</a> （1）首先保证本地的包发布全局，然后调试</h2>
<p>调试通过 npm link 将本地包注册到全局。我们可以在其他包内引用我们自己的包.</p>
<h2 id="_2-配置本地调试使用" tabindex="-1"><a class="header-anchor" href="#_2-配置本地调试使用" aria-hidden="true">#</a> （2）配置本地调试使用</h2>
<p>这样配置后的内容就可以全局使用，使用完成后，如果要取消，npm  unlink</p>
<h2 id="这里参考了component-cli脚手架" tabindex="-1"><a class="header-anchor" href="#这里参考了component-cli脚手架" aria-hidden="true">#</a> 这里参考了component-cli脚手架</h2>
<h1 id="_2-实现远程模板脚手架下载-通过download-git下载在线模板实现" tabindex="-1"><a class="header-anchor" href="#_2-实现远程模板脚手架下载-通过download-git下载在线模板实现" aria-hidden="true">#</a> 2.实现远程模板脚手架下载，通过download-git下载在线模板实现</h1>
<p><a href="https://gitee.com/nyhxiaoning/cli-create-template3.0.git" target="_blank" rel="noopener noreferrer">gitee在线代码地址<ExternalLinkIcon/></a>
<RouterLink to="/15%E5%B7%A5%E5%85%B7%E5%92%8C%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE%E5%B7%A5%E7%A8%8B%E5%8C%96%E9%97%AE%E9%A2%98%E8%AE%B0%E5%BD%95/000%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96%E4%B8%AD%E7%9A%84%E8%84%9A%E6%89%8B%E6%9E%B6%E5%88%9B%E5%BB%BA%E5%92%8C%E4%BD%BF%E7%94%A8.html">000前端工程化中的脚手架创建和使用</RouterLink></p>
<h1 id="_3-本地化脚手架实现代码仓库内容" tabindex="-1"><a class="header-anchor" href="#_3-本地化脚手架实现代码仓库内容" aria-hidden="true">#</a> 3.本地化脚手架实现代码仓库内容</h1>
</div></template>
