![成长](/images/home.png)
[[toc]]


## 回到博客主页
[博客首页](./../README.md)  

## vue项目创建脚手架方式汇总
# 使用npm init vue@3和npm create vite区别
### 默认都是依赖vite框架搭建。
~~~
npm init vue@2只能搭建vue2的vite框架。
npm init vue@3只能搭建vue3的vite框架。
npm  create可以搭建多种语言的vite框架。
~~~

### 搭建webpack的vue框架命令
vue createxxx或是vue init webpack xxx
~~~
之前vue-cli的命令行升级了，目前使用vue create可以创建vue2或是vue3
npm i -g @vue/cli-init安装全局，或是npm install @vue/cli -g
然后创建项目
vue  create xxx
(vue-cli3集成了webpack4)
~~~

- vue2
npm install -g vue-cli;//验证vue -V
注意：vue2和vue3cli不能同时使用。



- vue3
npm install @vue/cli -g;//验证vue -V
(yarn安装 yarn global add @vue/cli)
vue create cli-vue2  // 创建cli-vue2项目  ，注意项目名称不能为驼峰
~~~

目前vue3中@vue/cli已经被移除了，使用npm i -g @vue/cli-init

然后vue init webpack mytestwebpack
~~~

### （000）资料汇总
- [vueUse常用的库](https://vueuse.org/)


## 000vue2升级vue3的api变化
[000vue2升级vue3的api变化](./000vue2%E5%8D%87%E7%BA%A7vue3%E7%9A%84api%E5%8F%98%E5%8C%96.md)


## 001Vue3升级后个人使用汇总案例
[001Vue3升级后个人使用汇总案例](./001Vue3%E5%8D%87%E7%BA%A7%E5%90%8E%E4%B8%AA%E4%BA%BA%E4%BD%BF%E7%94%A8%E6%B1%87%E6%80%BB%E6%A1%88%E4%BE%8B.md)

## 001Vue版本升级和功能说明
[001Vue版本升级和功能说明](./001Vue%E7%89%88%E6%9C%AC%E5%8D%87%E7%BA%A7%E5%92%8C%E5%8A%9F%E8%83%BD%E8%AF%B4%E6%98%8E.md)

## 002vue3使用汇总问题记录和解决方案(2)
[002vue3使用汇总问题记录和解决方案(2)](./002vue3%E4%BD%BF%E7%94%A8%E6%B1%87%E6%80%BB%E9%97%AE%E9%A2%98%E8%AE%B0%E5%BD%95%E5%92%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88(2).md)

## 003vue3使用汇总问题记录和解决方案(3)
[003vue3使用汇总问题记录和解决方案(3)](./003vue3%E4%BD%BF%E7%94%A8%E6%B1%87%E6%80%BB%E9%97%AE%E9%A2%98%E8%AE%B0%E5%BD%95%E5%92%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88(3).md)




## 004vue3每周使用总结案例（01）
[004vue3每周使用总结案例（01）](./004vue3%E6%AF%8F%E5%91%A8%E4%BD%BF%E7%94%A8%E6%80%BB%E7%BB%93%E6%A1%88%E4%BE%8B%EF%BC%8801%EF%BC%89.md)


## 005vue3经典开发总结案例（02）
[005vue3经典开发总结案例（02）](./005vue3%E7%BB%8F%E5%85%B8%E5%BC%80%E5%8F%91%E6%80%BB%E7%BB%93%E6%A1%88%E4%BE%8B%EF%BC%8802%EF%BC%89.md)
