

## 1.mac笔记本的装机初始化软件大全
[汇总相关mac的系统常用软件和快捷键](https://hrll1lipzw.feishu.cn/docx/PZiHdxgdEoBT34xHYpoc4gOznyx)

## 2.windows装机初始化软件大全
[汇总相关windows的系统常用软件](https://hrll1lipzw.feishu.cn/docx/PZiHdxgdEoBT34xHYpoc4gOznyx)

## 3.汇总windows的快捷键汇总

[windows上面的快捷键](https://www.processon.com/mindmap/60d6e4a3f346fb5e35b48b04)
## 3.mac记录小问题：关于zip压缩，在服务器的不渲染问题
新增Mac和windows压缩打包后，zip上传的问题。
本地压缩包的时候是gbk的编码格式, 但是服务器上面是utf-8编码，所以本地的编码Mac上面会有问题，压缩的问题。

- 引申出来一个问题：就是当前的Mac打包如何将内部的文件删除：
~~~
 zip -d /Users/henryheng/Desktop/index.html.zip "__MACOSX*"
这里使用一下zip包命令，苹果的系统命令行工具
~~~
