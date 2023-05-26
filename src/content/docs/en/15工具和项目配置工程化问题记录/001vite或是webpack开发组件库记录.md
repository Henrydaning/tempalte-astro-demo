### 007 脚手架工具开发计划：vite或是webpack 开发一个vue库


- 案例代码1：vue3
[vitevue3](https://github.com/nyhxiaoning/th-component.git)

- 案例代码3：webpack
[webpackvue2](https://gitee.com/nyhxiaoning/h5-my-libcomponent-vuecli.git)
#### vite 打包一个第三方 lib

```
- [ ] ─ 15工具和项目配置工程化问题记录
- [ ] ─ 16前端拓展知识学习
- [ ] ─ 17低代码学习和总结 配置vite脚手架的库模式
 build: {
    lib: {
      // 测试库模式
      entry: path.resolve(__dirname, './src/lib/js/plain-draggable.esm.js'),
      name: 'myLib',
      // 生成的库的名称lib
      fileName: 'my-lib'
    },
    rollupOptions: {
      // TODO:设置一些不想要打包进行的依赖
      external: ['vue', 'axios', 'lodsh'],
      output: {
        // 在umd的模式下，为外部的依赖提供一个全局变量使用
        globals: {
          vue: 'Vue',
          axios: 'Axios',
          lodsh: 'Lodsh'
        }
      }
    }
  },

```