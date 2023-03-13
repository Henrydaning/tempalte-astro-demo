### React 的环境变量：dotenv-cli

```
npm i dotenv-cli --save-dev

```

### 2.实现 vue 和 react 项目中 webpack 配置可以随意转化

```

react-app-rewired和custom-cra扁平化webpack配置

可以通过配置相关内容文件引入自定义配置，或是放在根目录下面
config\config-overrides.js
需要配置一下package.json字段
  "config-overrides-path": "config/config-overrides.js",
相关使用的案例说明：

```
