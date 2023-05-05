

## 1.使用ffi-napi模块
~~~
const ffi = require('ffi-napi');
/**
 * 先定义一个函数, 用来在窗口中显示字符
 * @param {String} text
 * @return {*} none
 */
function showText(text) {
  return new Buffer(text, 'ucs2').toString('binary');
};
// 通过ffi加载user32.dll
const myUser32 = new ffi.Library('user32', {
  'MessageBoxW': // 声明这个dll中的一个函数
    [
      'int32', ['int32', 'string', 'string', 'int32'], // 用json的格式罗列其返回类型和参数类型
    ],
});
 
// 调用user32.dll中的MessageBoxW()函数, 弹出一个对话框
const isOk = myUser32.MessageBoxW(
    0, showText('I am Node.JS!'), showText('Hello, World!'), 1
);
console.log(isOk);

~~~


## 2.注意example中有了具体的实现。
~~~
这里的代码实现内容如下：

首先：注意标记好写好的内容
const myAddDll = new ffi.Library(myDll, {
    'f2': ['int', ['int']],
    'f1': ['int', ['int']],
    'f': ['int', ['string']]
});
然后：调用使用的时候，f2,f1,f内容如下。

注意：这里的f2,f1的入参和出参注意一下，不要写错，这里内容写错了，问题很大。


~~~


## 3.Node里面调用C语言代码汇总全过程。

### 直接ubuntu开发不太方便，首先代码远程编辑使用。
远程自己本地的代码到unbutu。
第一步windows系统安装相关的配置：Remote-SSH扩展
第二步：配置当前的ip地址：
ifconfig
这个命令无法使用ubuntu系统，所以建议使用下面的命令
ip addr show





vscode中配置remote-ssh后，使用。
最好下面的都装一下
具体见图
![ubuntu图](./vscode%E5%AE%89%E8%A3%85%E6%8F%92%E4%BB%B6.png)





连接一下，
给项目文件夹开启一下权限。

ubuntu下面的权限控制汇总说明：777是什么意思
sudo chmod 777 filename
权限相关说明：
- 4 可读,
- 2 可写,
- 1 可执行
- 0 无权限
三个数字的顺序分配代表用户、用户组、其他。第一个数字7表示用户的权限是读+写+执行（4+2+1=7），第二个数字5表示用户组的权限是读+可执行（4+0+1=5），第三个数字4表示其他人的权限是读（4+0+0=4）。


执行相关的内容：
![remote-ssh连接](./ubuntu%E4%B8%8B%E9%9D%A2%E6%9F%A5%E7%9C%8B%E5%BD%93%E5%89%8D%E7%9A%84ip%E4%B8%BA%E4%BA%86%E8%BF%9E%E6%8E%A5ssh-remote%E6%8F%92%E4%BB%B6.png)

### ffi：利用node模块读取c++的模块ffi安装失败，怎么办？
ffi:foreign  function  interface外部功能模块。（一些模块不能使用，使用修改后的，原因下面更新了接口ffi没有同步。）
调用动态链接库，俗称调DLL，实现调用C/C++代码，从而实现许多node不好实现的功能，或复用诸多已实现的函数功能。

方案1：node-gyp解决方案
如果windows-build-tools没有安装好，在npm install ffi时候会出现错误。
如果已经安装了node-gyp，则需要先删除C:\Users\Administrator\.node-gyp 目录，再卸载npm uninstall node-gyp。
重新安装npm install -g node-gyp.
然后安装（管理员权限）
npm install --global windows-build-tools

安装完毕之后再执行npm install ffi就可以了。


方案2：如果方案1不可行，终极解决方案
配置windows的C++环境，python和C++依赖装好。
以管理员身份打开命令行，然后确认自己装的是不是visual studio版本,如果没有安装，那么安装visual studio版本，将python和c++环境安装好。
第二步：
使用相关的代码demo测试：js-ffi-cross 这个项目测试搜索一下。

注意：尝试了大量模块发现：npm i ffi-cross这个模块兼容性好，另一个ffi报错太多。（不要用ffi，报错多）
已经有人做了兼容的模块：ffi-napi和ffi-cross模块两个都可以。


但是执行案例代码报错如下
Error: Dynamic Linking Error: Win32 error 126


错误提示说明相关：

（1）这个是Windows动态库方面的错误，查询Windows错误码大全，
193这个编号的意思是不是有效的win32程序。检查发现这里出错原因是Node.js是64位而dll是32位的，将dll编译成64位后正常输出。
 
（2）如果调用时提示Error: 
Dynamic Linking Error: Win32 error 126，错误码为找不到指定的模块，
改成传入完整路径即可，下面是我程序中的例子:
var iopath = path.join(__dirname, '/IOC.dll');
var io = ffi.Library(iopath ,{
    'IOC_Init':['int32',[]],
});


（3）127错误
如果您收到错误 127(已在此处报告)，则表明第二个参数存在问题 - 
它无法在指定的 dll 中找到列出的函数。

（4）案例使用
var ffi = require('ffi-napi');

// You can also access just functions in the current process by passing a null
const current = ffi.Library(null, {});
console.log(current,'current')


方法3：方案2虽然可以，但是实际开发中，偶尔会报一些环境的问题。
一些包在其他windows环境下，只能再次安装一次，没有办法拓展。
使用mac或是ubuntu。
[案例代码分支：ubuntu和mac都有](https://gitee.com/zkwq/node-ctest.git)
具体步骤内容都有详细记录

调用C语言实现，在Mac可以跑通，但是windows下面跑不通(环境问题，用linux和windows吧，一些windows上面地址寻址问题)

### 为什么ffi这么多问题，ffi-napi可以使用。
node-ffi里面会调用v8或其他依赖模块的接口，而这些接口已经更新了，
有的接口改了名字，有的接口改了参数数量。但是node-ffi的调用接口语
句并没有更新，所以编译不过。
所以上面的ffi-napi和ffi-cross都已经将这个接口进行了优化。

## 4.fileZilla新站点ssh传递文件方法
第一步：首先新建站点：注意选择协议是sftp协议。
位置在：文件下面的一个图标，点击之后，这里可以弹出一个新建站点的提示
![fileZilla使用说明](./fileZIlla%E9%85%8D%E7%BD%AE%E5%9B%BE%E8%AF%B4%E6%98%8E.png)
第二步：ubuntu中将当前的主机名查看
ip addr或是ipconfig，看看哪一个有效。
然后注意使用inet的地址：标准化的地址：不要用127.0.0.1，用192.xx.xx.xxx端口
使用当前的22，因为22是ssh的专用端口。

第三步：输入当前的账号和密码
比如：henry和nyh123
或是root和123456


第四步：将当前的想要操作的文件夹的权限使用777打开。
比如
sudo chmod 777 filexxxxx

第五步：这里将这个进行查看即可。

第六步：ubuntu系统的固定IP方法。
管理员权限下，
使用命令行：dhclient可以固定当前的IP，
释放固定的IP方法：dhclient -r 释放地址

第七步：突然出现当前的fileZilla无法连接。
(1)看看ssh服务启动没有？ sudo ps -e | grep ssh
 sudo service ssh start
使用当前的ssh的ubuntu系统，无法连接。配置一下ssh文件，这里使用
set nu设置当前的行数和/ 搜索和：123跳转到123行。
(2)注意这里的密码打开
解决Permission denied (publickey).
录目标机器，打开/etc/ssh/sshd_config ，修改PasswordAuthentication no为：
PasswordAuthentication yes。

最后： service ssh restart 
(3)// 更改.ssh文件夹权限
 chmod 700 ~/.ssh


### 特别说明
fileZilla可以使用账户密码ssh登录，也可以使用秘钥登录，秘钥登录的时候，传入秘钥文件。
如果秘钥登录是本地，需要指定一下当前的本地的路径：说明一下：使用gitbash登录。

类似秘钥的：
~~~
登录：ssh -i ./h5-key h5@10.30.10.13

特别说明：秘钥文件是在当前的文件夹下面，名称叫做h5-key。

然后后面是登录远端。

~~~
