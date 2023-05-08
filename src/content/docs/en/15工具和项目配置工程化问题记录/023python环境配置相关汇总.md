### **python换源安装第三方包时，如若超时，也可采用换源的方法**

- pip国内的一些镜像

阿里云 http://mirrors.aliyun.com/pypi/simple/

  中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/

  豆瓣(douban) http://pypi.douban.com/simple/

  清华大学 https://pypi.tuna.tsinghua.edu.cn/simple/

  中国科学技术大学 http://pypi.mirrors.ustc.edu.cn/simple/

修改源方法：

- 临时使用：

可以在使用pip的时候在后面加上-i参数，指定pip源

eg: pip install scrapy -i https://pypi.tuna.tsinghua.edu.cn/simple


### **设置python切换版本工具。windows 使用pyenv-win 管理多python 版本**

**（1）利用pip下载pyenv-win工具，安装py切换版本工具。**

 pip install pyenv-win --target F:\pythonEnvTool

**（2）安装完成后，为 pyenv 配置系统变量。**

拿到上一步的安装文件夹：F:\pythonEnvTool\pyenv-win

**第一步：设置环境变量**

操作 过程： 1.【此电脑】  -> 【属性】-> 【高级系统设置】-> 【环境变量】（以下操作更改的都是系统变量）-> 【系统变量】-> 【新建变量】 

建立：PYENV

对应路径设置：F:\pythonEnvTool\pyenv-win

**第二步：新增两个路径变量**

【双击系统变量的path】 -> 【新建】

 %PYENV%\bin

%PYENV%\shims



**（3）开始试用**

保存配置后，输入：pyenv，输出内容正常即可。否则可能环境变量不正确。



**（4）不要以为完事大吉。有可能安装很慢。（注意：切换镜像源cmd下面管理员权限使用）**

- 第一种方式：更换镜像源地址

更换一个更快的下载镜像如淘宝镜像，修改pyenv-win\libexec\libs目录下（特别提示，对早期pyenv-win是在pyenv-win\libexec目录下）的pyenv-install.vbs文件中mirror=" https://www.python.org/ftp/python"引号内的改为https://npm.taobao.org/mirrors/python/ 

（注意：一般可以管用，如果公司的网站有拦截或是网络问题，下面的第二种方式）

- 第二种方式：有时候不管用，怎么办。缓存地址

1. pyenv搜狐镜像源加速：http://mirrors.sohu.com/python/ 或是https://registry.npmmirror.com/binary.html?path=python
2. 下载需要的版本放到： pyenv-win\install_cache文件夹下面：例如：放入：一个python-3.8.0-amd64.exe即可。

但是注意一下：python2后面是：python-2.7.17.amd64.msi



**（5）常用命令：**

- pyenv install --list  列出所有的可以获取的python
- 安装指定python版本

pyenv install 3.8.1

- 设置特定python版本全局使用

pyenv global 3.7.4

- 查看当前全局python版本

pyenv global

设置特定版本暂时使用

pyenv local 3.7.4

- 查看已经安装的python版本

pyenv versions



- 补充python不同版本的说明

x86是32位，x86-64是64位。

**可以通过下面3种途径获取python的版本内容**：

web-based installer 需要通过联网完成安装的

executable installer 可执行文件(*.exe)方式安装，直接安装

embeddable zip file 嵌入式版本，可以集成到其它开发应用中

**查看当前的切换后的python的版本：python -V**

python版本命令使用了，但是python的执行器没有改变。



### 3.一个登陆自动化的puthon项目
（1）当前的自动化工具使用，登录控制
[[开源]一个基于 Python 的网页自动化工具，控制浏览器，收发数据包-今日头条 (toutiao.com)](https://www.toutiao.com/article/7202243329382531619/?log_from=dcc38b9af10d7_1677114791436&wid=1677202338767)
（2）使用指导文档记录
[🌏 安装和导入 - DrissionPage (gitee.io)](http://g1879.gitee.io/drissionpagedocs/3_get_start/1_installation_and_import/)
注意这里的python的内容，需要切换成当前的python的国内的源。

#### (1)问题记录
- 当前登录网站后，通过类名获取元素总是出现找不到，为什么
比如：gieee登录后，直接按照文档，找个人中心，结果总是文字找不到



### 4.pycharm软件破解安装教程。
- 首先下载好百度云位置的两个软件。
在学习-003软件87G-编程开发-Pycharm破解
这里一个软件内容：展示内容：下载好之后

- 接着修改一下配置
找到自定义安装位置下的文件：64位
\bin\pycharm64.exe.vmoptions
放入新破解的软件包位置：-javaagent:D:\PyCharm 2017.1\bin\JetbrainsCrack-2.6.2.jar
注意修改的是64位。

- 然后保存后，启动软件
出现破解，输入下面的内容
关于licenseeName和assigneeEmail修改一下即可。
~~~

{
    "licenseId": "ThisCrackLicenseId",
    "licenseeName": "henry",
    "assigneeName": "",
    "assigneeEmail": "xxxxxx修改一下@163.com",
    "licenseRestriction": "For This Crack, Only Test! Please support genuine!!!",
    "checkConcurrentUse": false,
    "products": [
        { "code": "II", "paidUpTo": "2099-12-31" },
        { "code": "DM", "paidUpTo": "2099-12-31" },
        { "code": "AC", "paidUpTo": "2099-12-31" },
        { "code": "RS0", "paidUpTo": "2099-12-31" },
        { "code": "WS", "paidUpTo": "2099-12-31" },
        { "code": "DPN", "paidUpTo": "2099-12-31" },
        { "code": "RC", "paidUpTo": "2099-12-31" },
        { "code": "PS", "paidUpTo": "2099-12-31" },
        { "code": "DC", "paidUpTo": "2099-12-31" },
        { "code": "RM", "paidUpTo": "2099-12-31" },
        { "code": "CL", "paidUpTo": "2099-12-31" },
        { "code": "PC", "paidUpTo": "2099-12-31" }
    ],
    "hash": "2911276/0",
    "gracePeriodDays": 7,
    "autoProlongated": false
}



~~~