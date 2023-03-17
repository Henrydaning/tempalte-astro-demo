<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_1-使用-docker-部署前端之简单版">1.使用 Docker 部署前端之简单版</RouterLink><ul><li><RouterLink to="#_1-本地版">(1)本地版</RouterLink></li><li><RouterLink to="#_2-docker-cli构建运行容器">(2)docker cli构建运行容器</RouterLink></li><li><RouterLink to="#docker的vue的nigix部署">docker的vue的nigix部署</RouterLink></li><li><RouterLink to="#docker一键部署学习地址">docker一键部署学习地址</RouterLink></li><li><RouterLink to="#docker-compose是什么。">docker-compose是什么。</RouterLink></li><li><RouterLink to="#参考资料">参考资料</RouterLink></li></ul></li></ul></nav>
<h2 id="_1-使用-docker-部署前端之简单版" tabindex="-1"><a class="header-anchor" href="#_1-使用-docker-部署前端之简单版" aria-hidden="true">#</a> 1.使用 Docker 部署前端之简单版</h2>
<p>在我们开发过程中需要安装很多环境，有些环境安装起来甚是麻烦，好不容易安装好了，有时候需要换电脑或者是给小伙伴也装一个环境的时候，重复性工作就很多了，又或者压根就不想在自己电脑上安装一大堆可能并不常用的环境，那么用docker无疑是最好的选择，<em><strong>一键运行</strong></em></p>
<p>项目内容：- <a href="https://gitee.com/wujr1532/docker-common" target="_blank" rel="noopener noreferrer">docker-compose<ExternalLinkIcon/></a></p>
<h3 id="_1-本地版" tabindex="-1"><a class="header-anchor" href="#_1-本地版" aria-hidden="true">#</a> (1)本地版</h3>
<p>使用serve在本地启动一个静态服务器（或是使用一个nodejs写一个脚本简单的静态服务）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npx serve .

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-docker-cli构建运行容器" tabindex="-1"><a class="header-anchor" href="#_2-docker-cli构建运行容器" aria-hidden="true">#</a> (2)docker cli构建运行容器</h3>
<p>docker version验证当前的windows系统设置了docker安装成功。</p>
<h3 id="docker的vue的nigix部署" tabindex="-1"><a class="header-anchor" href="#docker的vue的nigix部署" aria-hidden="true">#</a> docker的vue的nigix部署</h3>
<p>https://gitee.com/nyhxiaoning/docker-vue3-nginx.git</p>
<h3 id="docker一键部署学习地址" tabindex="-1"><a class="header-anchor" href="#docker一键部署学习地址" aria-hidden="true">#</a> docker一键部署学习地址</h3>
<p>https://gitee.com/nyhxiaoning/docker-common.git</p>
<h3 id="docker-compose是什么。" tabindex="-1"><a class="header-anchor" href="#docker-compose是什么。" aria-hidden="true">#</a> docker-compose是什么。</h3>
<p>简单说：Docker Compose配置文件是Docker Compose的核心，用于定义服务、网络和数据卷。格式为YAML，默认路径为./docker-compose.yml，</p>
<p>Docker-compose听起来像是一个由YAML语法定义的文本文件，通过docker-compose命令行解释执行。在docker-compose.yml文件中，你可以编辑你需要运行的Docker容器（称之为服务），以及这些服务之间的依赖关系。Docker-compose可以很好地帮你维护这些服务的生命周期。在Docker for Windows中，docker-compose是被默认安装的，你可以通过--version参数来查看安装的版本：</p>
<h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h3>
<ul>
<li>
<p><a href="https://gitee.com/wujr1532/docker-common" target="_blank" rel="noopener noreferrer">docker-compose<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://github.com/shfshanyue/simple-deploy" target="_blank" rel="noopener noreferrer">简单docker的前端部署<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>
