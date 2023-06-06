
## 1.工程化案例思考
我们经常遇到，偶尔打开一个网站cdn挂了，自己无法再次访问了，所以进行了多个cdn的切换。

### 使用原理
利用onerror的监听事件进行监听

### 代码内容
~~~
通过监听script标签的onerror事件，从候选cdn链接中进行切换

<!DOCTYPE html>
<html lang="en">

<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <meta http-equiv="X-UA-Compatible" content="ie=edge">
 <title>Document</title>
 <script>
   function loadResource(links, fnSuccess, fnError) {
     var script = document.createElement('script');
     script.onerror = function () {
       document.head.removeChild(script);
       fnError();
     };
     script.onload = fnSuccess
     script.src = links.shift();
     document.head.appendChild(script);
   }

   function autoSwitch(resourceList) {
     if (!resourceList.length) return
     var resource = resourceList.shift();
     loadResource([resource], function (success) {
       console.log('loaded');
     }, function (err) {
       console.log('load error')
       autoSwitch(resourceList);
     });
   }
 </script>
</head>

<body>
 <script>
   // cdn 链接列表
   var resourceList = [
     'http://demo1.cdnxx.cn/assets/app.js',
     'http://demo2.cdnxx.cn/assets/app.js',
     'assets/app.js',
   ];

   autoSwitch(resourceList);
 </script>
</body>

</html>



~~~