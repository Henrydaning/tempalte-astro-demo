<template><div><h2 id="jdk和jre区别" tabindex="-1"><a class="header-anchor" href="#jdk和jre区别" aria-hidden="true">#</a> jdk和jre区别</h2>
<p>JRE(Java Runtime Enviroment)是Java的运行环境。面向Java程序的使用者，而不是开发者。如果你仅下载并安装了JRE，那么你的系统只能运行Java程序。JRE是运行Java程序所必须环境的集合，包含JVM标准实现及 Java核心类库。它包括Java虚拟机、Java平台核心类和支持文件。它不包含开发工具(编译器、调试器等)。
JDK(Java Development Kit)又称J2SDK(Java2 Software Development Kit)，是Java开发工具包，它提供了Java的开发环境(提供了编译器javac等工具，用于将java文件编译为class文件)和运行环境(提 供了JVM和Runtime辅助包，用于解析class文件使其得到运行)。如果你下载并安装了JDK，那么你不仅可以开发Java程序，也同时拥有了运 行Java程序的平台。JDK是整个Java的核心，包括了Java运行环境(JRE)，一堆Java工具tools.jar和Java标准类库 (rt.jar)。</p>
<h3 id="java版本和jdk版本" tabindex="-1"><a class="header-anchor" href="#java版本和jdk版本" aria-hidden="true">#</a> Java版本和JDK版本</h3>
<p>要搞懂这些令人疑惑的人命名，那理解的一个关键就是Java版本和JDK版本了，首先啊，咱们常说Java有三个版本，对吧，分别是：</p>
<p>JavaSE（Java Platform，Standard Edition）Java标准版
JavaME（Java Platform，Micro Edition）Java微型版
JavaEE（Java Platform，Enterprise Edition) JAVA企业版</p>
<p>那么问题来了，面对企业级的比较大的项目开发，JavaSE提供的一些核心基础功能用倒是可以用，但是用起来太费劲了，很多东西都得自己从头造轮子，一步步的用代码从最基础的开始写，费劲啊。</p>
<p>于是乎，在JavaSE的基础上整理出一套规范，其目的就是用来解决企业级开发中遇到的一些问题，这些问题就是单独用JavaSE去整比较费劲的东西！</p>
<p>那啥又是规范呢？说白了，就是规定你该怎样怎样去做，比如面对常见的web请求处理，我们知道有servlet，那JavaEE就对servlet做了规范，也就是说你如果要用servlet去处理一个web请求，首先嘞，你必须得实现一个HttpServlet类，这还没完，你这个类还得继承Servlet接口，而且你还得实现它的接口方法，哪些呢？就是doGet和doPost这些，咋样，熟悉吧，再比如你这个doGet方法还必须得接收两个参数……</p>
<p>说的再简单点，JavaEE规定了servlet如何去处理web请求，然后具体的厂商根据这个规定去做具体的实现和增强，然后就搞出了tomcat……</p>
<p>那Spring是啥呢？最开始的Spring就是为了解决JavaEE在使用中遇到的一些问题，比如JavaEE中规定的servlet，那spring中的spring-mvc就是对这个servlet的进一步封装，从而让其变得更加好用！</p>
<p>实际上，spring中大量使用了或者实现了JavaEE的一些规范标准！说的再直白点，你JavaEE不是一组规范嘛，规定了啥啥啥该怎么用，那我spring就这样做，你规范中确实比较好用的我就直接拿来用，不好用的我就在加工处理封装成更好用的，可以简单的理解成spring就是JavaEE的升级版，或者超强实现版！</p>
<p>随着时间的发展，JavaEE的更新太慢了，而Spring就非常迅速，而且人家超级好用，因此，慢慢的JavaEE早就落后十万八千里了</p>
<p>Java版本的蜜汁操作
以上花了较多篇幅去介绍到底啥是JavaEE以及和Spring的一些关系，你就记住：</p>
<p>用Spring就对了</p>
<p>那我们再来看Java版本号的这些神奇操作，之前也说了，理解的关键就是Java版本和JDK版本，重点理解如下：</p>
<p>我们无论说Java版本还是JDK版本都是对于JavaSE这个标准版本而言，最终的则是要知道，每个Java版本其实是对应一个具体的JDK版本，也就是说Java是语言，JDK是Java这门语言的开发工具包，所以Java的版本可以说是抽象上的宏观上的一个概念，有其自己的版本名称，对应的具体的实实在在存在的则是JDK了</p>
<p>记住啦，一个Java版本对应着一个JDK版本！</p>
<h2 id="_2-jar包部署" tabindex="-1"><a class="header-anchor" href="#_2-jar包部署" aria-hidden="true">#</a> 2.jar包部署</h2>
<h3 id="_1-mvn是什么" tabindex="-1"><a class="header-anchor" href="#_1-mvn是什么" aria-hidden="true">#</a> （1）mvn是什么</h3>
<p>Maven 是一个项目管理工具，可以对 Java 项目进行自动化的构建和依赖管理。</p>
<h3 id="_2-mvn-将java项目打包成jar包后。" tabindex="-1"><a class="header-anchor" href="#_2-mvn-将java项目打包成jar包后。" aria-hidden="true">#</a> （2）mvn 将java项目打包成jar包后。</h3>
<p>部署</p>
<h3 id="_3-window部署方案" tabindex="-1"><a class="header-anchor" href="#_3-window部署方案" aria-hidden="true">#</a> （3）window部署方案</h3>
<p>cmd命令行：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> java -jar manager.jar运行jar包

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>sh脚本部署</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@echo off
start javaw -jar F:\manager\manager.jar  //jar包的路径
exit

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-相关内容说明" tabindex="-1"><a class="header-anchor" href="#_4-相关内容说明" aria-hidden="true">#</a> （4）相关内容说明：</h3>
<p>文件里面配置了相关端口和相关配置：application.yml</p>
</div></template>
