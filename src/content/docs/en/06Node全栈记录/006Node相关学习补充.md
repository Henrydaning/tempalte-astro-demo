

## node中如何用不同的模板引擎实现不同的客户端，然后和nodejs嫁接。
案例代码》



## 2.webservice接口和http接口区别。
两种常用协议方式：

### 1、基于不同协议：
HTTPService基于http协议，而WebService基于soap协议；

### 2、处理数据效率不同：
HTTPService效率较高，WebService能处理较复杂的数据类型。

http协议支持客户/服务器模式，简单快速，客户向服务器请求服务时，只需传送请求方法和路径灵活，http允许传输任意类型的数据对象。无连接，即限制每次连接只处理一个请求，可以节省传输时间。

### 3、跨域的处理：
HttpService方式不能处理跨域，如果调用一个其它应用的服务就要用webService 简单说

httpservice通过post和get得到你想要的东西

webservice就是使用soap协议得到你想要的东西，相比httpservice能处理些更加复杂的数据类型。

当你要调用一个你本服务的内容的时候，不涉及到跨域的问题，你可以使用HttpService的方式。

如果，你需要在后台调用一个其它应用的服务，这个时候，你必须要用webService的方式来调用。