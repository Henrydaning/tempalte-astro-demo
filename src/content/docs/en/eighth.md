![成长](/images/home.png)



  

### vue项目创建脚手架方式汇总
### 使用npm init vue@3和npm create vite区别
#### 默认都是依赖vite框架搭建。
~~~
npm init vue@2只能搭建vue2的vite框架。
npm init vue@3只能搭建vue3的vite框架。
npm  create可以搭建多种语言的vite框架。
~~~

#### 搭建webpack的vue框架命令
vue createxxx或是vue init webpack xxx
~~~
之前vue-cli的命令行升级了，目前使用vue create可以创建vue2或是vue3
npm i -g @vue/cli-init安装全局，或是npm install @vue/cli -g
然后创建项目
vue  create xxx
(vue-cli3集成了webpack4)
~~~

- vue2
npm install -g vue-cli;//验证vue -v
注意：vue2和vue3cli不能同时使用。



- vue3
npm install @vue/cli -g;//验证vue -v
(yarn安装 yarn global add @vue/cli)
vue create cli-vue2  // 创建cli-vue2项目  ，注意项目名称不能为驼峰
~~~

目前vue3中@vue/cli已经被移除了，使用npm i -g @vue/cli-init

然后vue init webpack mytestwebpack
~~~

### （000）资料汇总
- [vueUse常用的库](https://vueuse.org/)


### 000vue2升级vue3的api变化
[000vue2升级vue3的api变化](/en/08vue常见问题和学习记录/000vue2%E5%8D%87%E7%BA%A7vue3%E7%9A%84api%E5%8F%98%E5%8C%96)


### 001vue3升级后个人使用汇总案例
[001vue3升级后个人使用汇总案例](/en/08vue常见问题和学习记录/001vue3%E5%8D%87%E7%BA%A7%E5%90%8E%E4%B8%AA%E4%BA%BA%E4%BD%BF%E7%94%A8%E6%B1%87%E6%80%BB%E6%A1%88%E4%BE%8B)

### 001vue版本升级和功能说明
[001vue版本升级和功能说明](/en/08vue常见问题和学习记录/001vue%E7%89%88%E6%9C%AC%E5%8D%87%E7%BA%A7%E5%92%8C%E5%8A%9F%E8%83%BD%E8%AF%B4%E6%98%8E)

### 002vue3使用汇总问题记录和解决方案(2)
[002vue3使用汇总问题记录和解决方案(2)](/en/08vue常见问题和学习记录/002vue3%E4%BD%BF%E7%94%A8%E6%B1%87%E6%80%BB%E9%97%AE%E9%A2%98%E8%AE%B0%E5%BD%95%E5%92%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88(2))

### 003vue3使用汇总问题记录和解决方案(3)
[003vue3使用汇总问题记录和解决方案(3)](/en/08vue常见问题和学习记录/003vue3%E4%BD%BF%E7%94%A8%E6%B1%87%E6%80%BB%E9%97%AE%E9%A2%98%E8%AE%B0%E5%BD%95%E5%92%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88(3))




### 004vue3每周使用总结案例（01）
[004vue3每周使用总结案例（01）](/en/08vue常见问题和学习记录/004vue3%E6%AF%8F%E5%91%A8%E4%BD%BF%E7%94%A8%E6%80%BB%E7%BB%93%E6%A1%88%E4%BE%8B%EF%BC%8801%EF%BC%89)


### 005vue3经典开发总结案例（02）
[005vue3经典开发总结案例（02）](/en/08vue常见问题和学习记录/005vue3%E7%BB%8F%E5%85%B8%E5%BC%80%E5%8F%91%E6%80%BB%E7%BB%93%E6%A1%88%E4%BE%8B%EF%BC%8802%EF%BC%89)


### 006vue3中基础开发setup语法糖总结开发使用
[006vue3中基础开发setup语法糖总结开发使用](/en/08vue常见问题和学习记录/006vue3%E4%B8%AD%E5%9F%BA%E7%A1%80%E5%BC%80%E5%8F%91setup%E8%AF%AD%E6%B3%95%E7%B3%96%E6%80%BB%E7%BB%93%E5%BC%80%E5%8F%91%E4%BD%BF%E7%94%A8)

### 007vue生命周期和渲染记录整理
[007vue生命周期和渲染记录整理](/en/08vue常见问题和学习记录/007vue%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%92%8C%E6%89%A7%E8%A1%8C%E9%A1%BA%E5%BA%8F%E8%AE%B0%E5%BD%95%E6%95%B4%E7%90%86)


### 007vue生命周期和执行顺序记录整理
[007vue生命周期和执行顺序记录整理](/en/08vue常见问题和学习记录/007vue%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%92%8C%E6%B8%B2%E6%9F%93%E8%AE%B0%E5%BD%95%E6%95%B4%E7%90%86)

### 008vue2和vue3脚手架基础知识汇总整理
[008vue2和vue3脚手架基础知识汇总整理](/en/08vue常见问题和学习记录/008vue2%E5%92%8Cvue3%E8%84%9A%E6%89%8B%E6%9E%B6%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86%E6%B1%87%E6%80%BB%E6%95%B4%E7%90%86)


### 009ES12发布了,普通项目使用需要做什么
[009ES12发布了普通项目使用需要做什么](/en/08vue常见问题和学习记录/009es12%E5%8F%91%E5%B8%83%E6%99%AE%E9%80%9A%E9%A1%B9%E7%9B%AE%E4%BD%BF%E7%94%A8%E9%9C%80%E8%A6%81%E5%81%9A%E4%BB%80%E4%B9%88)