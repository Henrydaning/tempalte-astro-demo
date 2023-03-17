<template><div><nav class="table-of-contents"><ul><li><RouterLink to="#_1-ws-和-wss-比较">1.ws 和 wss 比较</RouterLink></li><li><RouterLink to="#_2-gerrit-简介">2.Gerrit 简介</RouterLink></li></ul></nav>
<h2 id="_1-ws-和-wss-比较" tabindex="-1"><a class="header-anchor" href="#_1-ws-和-wss-比较" aria-hidden="true">#</a> 1.ws 和 wss 比较</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ws和wss的区别.
 WS: WebSocket. WSS: WebSocket Secure.
 WS协议和WSS协议两个均是WebSocket协议的SCHEM
 WebSocket 协议是 html5的 一种通信协议，可以使客户端和服务端双向数据传输更加简单快捷，
 并且在 TCP连接 进行一次握手后，就可以 持久性 连接，同时允许服务端对客户端 推送 数据。
 WS是非安全的，WSS是安全的。. 非安全的没有证书，安全的需要SSL证书.


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-gerrit-简介" tabindex="-1"><a class="header-anchor" href="#_2-gerrit-简介" aria-hidden="true">#</a> 2.Gerrit 简介</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>（1） Gerrit 简介
Gerrit 是一个基于 web 的代码评审工具, 它基于 git 版本控制系统。旨在提供一个轻 量级框架, 用于在代码入库之前对每个提交进行审阅。开发人员的修改首先将上载到 Gerrit, 但 实际上并不成为项目的一部分, 直到它们被审阅和接受。它是标准开源过程的一个工具来支持提 交补丁程序, 然后由项目成员在应用到代码库之前进行评审。
Gerrit 首先是一个临时区域, 在提交的代码成为代码库的一部分之前, 可以对其修改进行 检查。普通开发人员可以随意提交代码，但是需要专家（特定权限）对提交的 代码进行评审 打分，对于不合格的代码，专家有废弃的权利，只有检视通过的代码，才能被专家提交入库。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
