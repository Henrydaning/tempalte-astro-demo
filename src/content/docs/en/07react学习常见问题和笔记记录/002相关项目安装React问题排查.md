
### 1.react的很多最佳实战国外有案例
比如rekit
但是这个有时候安装rekit-studio出现
~~~
npm ERR! code EBADPLATFORM
npm ERR! notsup Unsupported platform for fsevents@1.1.3: wanted 
{"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm ERR! notsup Valid OS:    darwin
npm ERR! notsup Valid Arch:  any
npm ERR! notsup Actual OS:   win32
npm ERR! notsup Actual Arch: x64

这个报错其实是系统对于fs模块的配置，但是这个报错是基于mac系统
如果windows系统安装了这个项目怎么办？
将package.json下fsevent包依赖删除即可
~~~