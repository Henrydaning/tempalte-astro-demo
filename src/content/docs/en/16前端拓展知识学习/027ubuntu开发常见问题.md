## 1.同步 ubuntu 中安装 zsh 后，git 或是 npm 不能使用

- 只需要按照以下步骤，打开 zsh 的配置文件,放开宏命令即可

### 第一步 打开配置文件

vim ~/.zshrc

### 第二步 找到下面这行，你会发现 plugin 右边的配置默认只有 git 这时候你可以自由添加你想要用的,用空格隔开。（node nvm yarn npm ）等等 然后保存

'plugins=(git)' -> 'plugins=(git node nvm yarn npm)'

### 第三步 更新配置文件，启用修改

source ~/.zshrc

### 最后一步

重启终端，再尝试一切是否正常

### 再次进入 zsh 后，测试一下

## 2.ubuntu 中安装 nvm 出现问题。(无效)
（1）安装执行 install.sh 后，不会出现的相关的 nvm 生效。
git clone https://gitee.com/mirrors/nvm
进入 nvm 文件夹，执行 bash install.sh # 注意：进入 nvm 目录内执行
（2）nvm --version 命令找不到
进入一个文件后：~/.bash_profile 添加如下内容
然后添加内容：
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

### 注意在上面文件中：增加配置镜像源

export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node
export NVM_IOJS_ORG_MIRROR=http://npm.taobao.org/mirrors/iojs

```

安装命令：
nvm ls-remote

nvm install v11.11.0

nvm use v11.11.0


```


## 3.zsh中增加插件。
注意插件下载在
~~~
第一步：下载好zsh

第二步：进入zsh目录
cd ~/.zsh

第三步：下载插件
git clone https://github.com/zsh-users/zsh-autosuggestions

第四步：然后配置文件：zshrc
vim ~/.zshrc

加入一行
source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh

这里source ~/.zshrc


第五步：如果有其他的插件：
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git


配置内容：
source ./zsh-syntax-highlighting/zsh-syntax-highlighting.zsh



~~~