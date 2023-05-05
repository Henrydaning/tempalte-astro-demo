## 文档先行
[vscode开发插件文档](https://www.bookstack.cn/read/VS-Code-Extension-Doc-ZH/README.md)

## 1.demo引入案例
[vscode官方案例demo](https://github.com/nyhxiaoning/vscode-test.git)

[vscode-plugin-demo](https://github.com/MssText/vscode-plugin-demo)




## 2.开发记录
[vscode官方案例demo](https://github.com/nyhxiaoning/vscode-test.git)
Supported:
- Node >= 16.x
- Windows >= Windows Server 2012+ / Win10+ (anything with Powershell >= 5.0)
- macOS
- Linux

### 2.案例使用。

首先父文件夹的依赖安装好，子文件目录内容：sample 的内容这里进行再次安装。

安装好之后，这里的内容进行整理。

### Development开发内容

- `yarn install`
- Make necessary changes in [`lib`](./lib)
- `yarn compile` (or `yarn watch`)
- In [`sample`](./sample), run `yarn install`, `yarn compile` and `yarn test` to make sure integration test can run successfully


### Test测试
~~~
node16.x

npm install -g yo

npm install -g generator-code

~~~


### vsce发布
vsce
vsce是用于打包，发布和管理VS代码扩展的命令行工具
下载安装：(首先要安装node)

npm install -g vsce
用法：
vsce --help				查看所有可用的vsce命令
命令：
在这里插入图片描述

ls：列出会实际发布的文件列表
    "build:vs": "vsce package --no-dependencies"
package：打包()
publish：发布
unpublish：插件下架
list：列出某个发布者所有发布的
ls-publishers：列出所有已知的发布者
create-publisher：创建一个新的发布者
delete-publisher：删除一个发布者
login：登录一个发布者到发布者列表中
logout：退出发布者
创建发布者
#### vsce create-publisher xxxxxxxxx(发布者名)
E-mail: xxxxxxxxxxxxxxxxx	//输入email
Personal Access Token:	//将刚刚创建的token序列粘贴到这里

创建成功后会默认登录这个账号，vsce会记住当前账号的token令牌，接下来即可打包发布，如果退出这个账号，下次登录的时候还是需要输入token的

#### 打包
vsce package
#### 发布
vsce publish











## 4.上面流程是不是很长。
使用plasmo框架。


## 10.实战工具箱案例参考
[vscode-plugin-fe前端工具箱](https://github.com/nyhxiaoning/vscode-plugin-fe.git)
[vscode-ali-oss阿里云OSS](https://github.com/nyhxiaoning/vscode-ali-oss)
[各种官方插件案例合集](https://github.com/microsoft/vscode-extension-samples.git)