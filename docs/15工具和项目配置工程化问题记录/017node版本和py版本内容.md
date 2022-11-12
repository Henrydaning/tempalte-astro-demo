## 1.volta 切换 node 环境，彻底解决 nvm 切换 node 版本

- 有时候出现.无法识别，切换后重新删除一些依赖
- 有时候出现：yarn 和全局依赖不在一个磁盘
- 有时候出现 npm ERR! code MODULE_NOT_FOUND，npm ERR! Cannot find module 'libnpmfund'
- 偶发性 npm 需要手动下载配置
- 下载 nvm 需要配置环境变量 NVM_HOME，换个电脑又来一次，1 个小时
  基于上面的原因，彻底使用 volta
- 简单易用，直接安装
- node 下载好 zip 版本，切换 node 自动切换 npm
- 配置代理地址

```
npm config set registry https://registry.npmmirror.com/
yarn config set registry https://registry.npmmirror.com/
```

## 2.nrm 切换当前的代理下载地址

也可以下载一个包源头代理地址
nrm 工具，注意需要用一个优化版本，星号不生效
npm install -g @adams549659584/nrm

切换 yarn，全局安装 yarn
npm install -g yarn

## 3.配置 node 缓存目录和全局安装包

- 同时配置好缓存和安装目录

```
npm config set prefix “D:\nodejs\node_global” //设置全局包目录
npm config set cache “D:\nodejs\node_cache” //设置缓存目录
npm config list //查看基本配置
npm config get prefix
npm config get cache

//这里一个小知识：配置设置的时候都是反斜杠windows系统，但是配置好查看
prefix = "D:\\nodeNVM\\node_global"发现都是这种转义


```
