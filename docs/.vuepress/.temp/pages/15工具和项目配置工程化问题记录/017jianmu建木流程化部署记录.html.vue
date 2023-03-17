<template><div><h1 id="如何部署" tabindex="-1"><a class="header-anchor" href="#如何部署" aria-hidden="true">#</a> 如何部署<a href="https://jianmu-docs.assets.dghub.cn/jianmu-docs/2.5.4/guide/how-to-deploy.html#%E5%A6%82%E4%BD%95%E9%83%A8%E7%BD%B2" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h1>
<p>目前支持两种方式安装部署建木，大家根据需要任选其一即可</p>
<h2 id="资源和系统要求" tabindex="-1"><a class="header-anchor" href="#资源和系统要求" aria-hidden="true">#</a> 资源和系统要求<a href="https://jianmu-docs.assets.dghub.cn/jianmu-docs/2.5.4/guide/how-to-deploy.html#%E8%B5%84%E6%BA%90%E5%92%8C%E7%B3%BB%E7%BB%9F%E8%A6%81%E6%B1%82" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h2>
<h4 id="操作系统" tabindex="-1"><a class="header-anchor" href="#操作系统" aria-hidden="true">#</a> 操作系统<a href="https://jianmu-docs.assets.dghub.cn/jianmu-docs/2.5.4/guide/how-to-deploy.html#%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h4>
<p>Ubuntu 21.04 (推荐) 或 macOS Monterey</p>
<h4 id="建议配置" tabindex="-1"><a class="header-anchor" href="#建议配置" aria-hidden="true">#</a> 建议配置<a href="https://jianmu-docs.assets.dghub.cn/jianmu-docs/2.5.4/guide/how-to-deploy.html#%E5%BB%BA%E8%AE%AE%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h4>
<ul>
<li>CPU：2C</li>
<li>内存：8GB</li>
<li>磁盘：100GB</li>
</ul>
<h2 id="部署方式一-docker-compose-部署" tabindex="-1"><a class="header-anchor" href="#部署方式一-docker-compose-部署" aria-hidden="true">#</a> 部署方式一：docker-compose 部署<a href="https://jianmu-docs.assets.dghub.cn/jianmu-docs/2.5.4/guide/how-to-deploy.html#%E9%83%A8%E7%BD%B2%E6%96%B9%E5%BC%8F%E4%B8%80%EF%BC%9Adocker-compose%E9%83%A8%E7%BD%B2" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h2>
<h4 id="软件版本要求" tabindex="-1"><a class="header-anchor" href="#软件版本要求" aria-hidden="true">#</a> 软件版本要求<a href="https://jianmu-docs.assets.dghub.cn/jianmu-docs/2.5.4/guide/how-to-deploy.html#%E8%BD%AF%E4%BB%B6%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h4>
<ul>
<li>推荐使用 Ubuntu 21.04 系统安装，如<a href="https://docs.jianmu.dev/guide/centos-install.html" target="_blank" rel="noopener noreferrer">CentOS 7 可参考<ExternalLinkIcon/></a></li>
<li>Docker 19.30 以上，<a href="https://docs.docker.com/get-started/#download-and-install-docker" target="_blank" rel="noopener noreferrer">官方安装手册<ExternalLinkIcon/></a></li>
<li>Docker-Compose 1.29.2 以上，<a href="https://docs.docker.com/compose/install/#install-compose" target="_blank" rel="noopener noreferrer">官方安装手册<ExternalLinkIcon/></a></li>
</ul>
<h4 id="部署方式" tabindex="-1"><a class="header-anchor" href="#部署方式" aria-hidden="true">#</a> 部署方式<a href="https://jianmu-docs.assets.dghub.cn/jianmu-docs/2.5.4/guide/how-to-deploy.html#%E9%83%A8%E7%BD%B2%E6%96%B9%E5%BC%8F" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h4>
<p><strong>下载<code v-pre>docker-compose.yml</code></strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>wget https://gitee.com/jianmu-dev/jianmu-deploy/raw/master/docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>启动</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker-compose up -d

注意亮点：
第一点：启动docker
但是注意：使用docker-compose前提，docker启动
service docker start
第二点：下载docker-compose

curl -L https://get.daocloud.io/docker/compose/releases/download/1.29.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose

同时将文件夹权限放开
sudo chmod +x /usr/local/bin/docker-compose


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问<a href="http://localhost/" target="_blank" rel="noopener noreferrer"><code v-pre>http://localhost</code><ExternalLinkIcon/></a>，默认<strong>用户名密码</strong>为<code v-pre>admin/123456</code>。</p>
<h2 id="部署方式二-k8s-部署" tabindex="-1"><a class="header-anchor" href="#部署方式二-k8s-部署" aria-hidden="true">#</a> 部署方式二：k8s 部署<a href="https://jianmu-docs.assets.dghub.cn/jianmu-docs/2.5.4/guide/how-to-deploy.html#%E9%83%A8%E7%BD%B2%E6%96%B9%E5%BC%8F%E4%BA%8C%EF%BC%9Ak8s%E9%83%A8%E7%BD%B2" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h2>
<h4 id="软件版本要求-1" tabindex="-1"><a class="header-anchor" href="#软件版本要求-1" aria-hidden="true">#</a> 软件版本要求<a href="https://jianmu-docs.assets.dghub.cn/jianmu-docs/2.5.4/guide/how-to-deploy.html#%E8%BD%AF%E4%BB%B6%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82-1" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h4>
<ul>
<li>Kubernetes 1.18 以上, <a href="https://kubernetes.io/docs/tasks/tools/" target="_blank" rel="noopener noreferrer">官方安装手册<ExternalLinkIcon/></a></li>
</ul>
<h4 id="部署方式-1" tabindex="-1"><a class="header-anchor" href="#部署方式-1" aria-hidden="true">#</a> 部署方式<a href="https://jianmu-docs.assets.dghub.cn/jianmu-docs/2.5.4/guide/how-to-deploy.html#%E9%83%A8%E7%BD%B2%E6%96%B9%E5%BC%8F-1" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h4>
<p><strong>下载<code v-pre>kubernetes.yaml</code></strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>wget https://gitee.com/jianmu-dev/jianmu-deploy/raw/master/kubernetes.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>启动</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kubectl apply -f kubernetes.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>访问<a href="http://xn--nodeip-6f8nh25i:30180/" target="_blank" rel="noopener noreferrer"><code v-pre>node节点ip:30180</code><ExternalLinkIcon/></a>，默认<strong>用户名密码</strong>为<code v-pre>admin/123456</code>，使用详见 hello 项目使用。</p>
<h1 id="遇到一个大坑-前端" tabindex="-1"><a class="header-anchor" href="#遇到一个大坑-前端" aria-hidden="true">#</a> 遇到一个大坑，前端</h1>
<p>sass中出现weight报错</p>
<p>TODO:</p>
</div></template>
