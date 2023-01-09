了解一个框架的最好方法：两个方法。
关键功能
解决关键问题


# Express

（1）丰富的路由，路由系统
（2）高性能
（3）帮助处理HTTP的能力。（重定向或是缓存）
（4）支持14+种模板引擎
（5）脚手架快速生成应用。


# express实战

## 1.http简化
express中的http中的send方法和http中writeHead和end是一样的。
也就是
~~~

成功
    res.send("hello home");//使用express

  相当于下面(使用http)
    res.writeHead(200);
    res.end('结果')


失败
    res.status(500);
    res.send('出错了服务器')

    相当于http
    res.writeHead(500);
    res.end('报错了')
~~~

## url.parse和queryString，包
express默认自动将请求url进行了处理，不用使用url和querystring包

req.querystring

req.url

## express会根据我们返回的数据格式，将http返回包，处理成想要的样子


## express有中间件的能力。

next。进一步将不同的逻辑，分入不同的块，不同的部分分离。
通过next将一个回调，传入另一个。
将中间件内容传入res中。

## 中间件的洋葱模型。
next是一个普通函数，会执行进入，然后又返回传出。
但是如果next后一个setTimeout函数，那么next函数因为是同步执行的，就会导致setTImeout中的异步结果无法正常拿到。

由于洋葱模型的异步处理不完善，出现了koa。出现。
洋葱模型同步的时候很好。

# Koa
## koa的中间件可以支持async和await。

实现优化洋葱模型。

## 区别于express，返回只有一个ctx的内容中只有一个封装。
ctx.request
ctx.response

## 请求和返回的处理

## koa没有路由处理功能。
koa不绑定任何的中间件。



# 对比express

（1）express门槛更低，不用了解异步，koa更加优雅
（2）express封装更多，koa定制化更多。
（3）express小型应用，koa应用大型应用。


# RPC通信

remote  procedure call

## ajax区别

RPC是什么？和ajax有什么区别
RPC是远程过程调用（remote  procedure  call）
（1）RPC和ajax都是两个计算机之间的网络通信；
（2）都是需要双方约定一个数据格式。
不同点：
（1）RPC调用不一定使用DNS作为寻址服务
（2）RPC应用层协议一般不使用HTTP，一般使用二进制协议。
（3）RPC是UDP协议进行。（ajax基于HTTP协议）
（4）ajax是基于DNS寻址，RPC通信是基于特殊的服务寻址
（5）ajax是单工通信。RPC的TCP通信方式有单工通信，半双工，全双工通信。
（半双工，就是分成一个个时间片来看，一部分时间只能a->b,一部分时间只能b->a.）
(全双工，有a->b的同时，有b->a)
（6）RPC调用是二进制协议，更小的数据包的体积，更快的编码和解码速率。


# Buffer二进制数据包的编码和解码
## Buffer常用的方法
Buffer.from
Buffer.alloc
Buffer.allocUnsafe

__dirname所有的文件地址前面加上这个魔术变量