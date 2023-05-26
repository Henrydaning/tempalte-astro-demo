### nvm的版本node管理
[node的nvm管理机制](https://app.yinxiang.com/shard/s37/nl/24388549/8e8311f5-a8b9-4dfc-b123-92ab18da00be)

### 1.volta切换node环境，彻底解决nvm切换node版本
但是目前看，不是很靠谱，偶尔出现高版本的兼容性或是内容问题
- 有时候出现.无法识别，切换后重新删除一些依赖
- 有时候出现：yarn和全局依赖不在一个磁盘
- 有时候出现npm ERR! code MODULE_NOT_FOUND，npm ERR! Cannot find module 'libnpmfund'
- 偶发性npm需要手动下载配置
- 下载nvm需要配置环境变量NVM_HOME，换个电脑又来一次，1个小时
基于上面的原因，彻底使用volta
- 简单易用，直接安装
- node下载好zip版本，切换node自动切换npm
- 配置代理地址
~~~
npm config set registry https://registry.npmmirror.com/
yarn config set registry https://registry.npmmirror.com/
~~~

### 2.nrm切换当前的代理下载地址
也可以下载一个包源头代理地址
nrm工具，注意需要用一个优化版本，星号不生效
npm install -g @adams549659584/nrm

切换yarn，全局安装yarn
npm install -g yarn


### 3.配置node缓存目录和全局安装包
- 同时配置好缓存和安装目录
~~~
npm config set prefix “D:\nodejs\node_global” //设置全局包目录
npm config set cache “D:\nodejs\node_cache” //设置缓存目录
npm config list //查看基本配置
npm config get prefix
npm config get cache 

//这里一个小知识：配置设置的时候都是反斜杠windows系统，但是配置好查看
prefix = "D:\\nodeNVM\\node_global"发现都是这种转义


~~~

### 4.经典案例：从一个包的sharp安装，看当前的npm缓存机制
[sharp包看npm的缓存机制](https://app.yinxiang.com/shard/s37/nl/24388549/f81d9392-1995-49b0-a03c-85e539015551)