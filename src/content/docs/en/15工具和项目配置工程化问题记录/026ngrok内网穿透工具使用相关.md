

## ngrok-go

## 1.下载安装软件ngrok
[下载地址](https://dashboard.ngrok.com/get-started/setup)

## 2.下载完成后，使用管理员权限启动ngrok.exe
同时尝试使用ngrok命令。（确认是否生效）

## 3.配置自己的秘钥
上面第一步的位置，有下载完成的秘钥配置注意配置好。
[配置秘钥](https://dashboard.ngrok.com/get-started/setup)

## 4.本地启动自己的一个静态网站资源。
查看启动的资源的端口，比如是ip:8899.
那么自己ngrok http 8899，

## 5.注意穿透给别人使用，注意，本地必须启动VPN。
自己的服务只有在启动VPN后，才可以正常给其他的转发。

## 6.真实案例：
~~~
比如自己test文件夹目录放了静态资源。
- npx http-server -p 8899
那么出现访问：xxxxx:8899/test
- 启动ngrok后，出现了如下
https://xxx.ngrok.io -> http://localhost:8899

- 那么我们的地址就是外网看
https://xxx.ngrok.io/test地址即可。
~~~


## 7.关于vpn和clash区别
vpn是一个虚拟专用网，比如每一个公司有自己的vpn通道。
VPN 是什么. VPN 意为"虚拟专用网",专门给通向某一个地址的设置设置一个专用通道。
clash: 是一个代理软件，可以将你的请求通过他代理出去。

