## NODE_ENV 模式说明

NODE_ENV 将决定您的应用运行的模式，是开发，生产还是测试，因此也决定了创建哪种 webpack 配置。

例如通过将 NODE_ENV 设置为 "test"，Vue CLI 会创建一个优化过后的，并且旨在用于单元测试的 webpack 配置，它并不会处理图片以及一些对单元测试非必需的其他资源。

同理，NODE_ENV=development 创建一个 webpack 配置，该配置启用热更新，不会对资源进行 hash 也不会打出 vendor bundles，目的是为了在开发的时候能够快速重新构建。

当你运行 vue-cli-service build 命令时，无论你要部署到哪个环境，应该始终把 NODE_ENV 设置为 "production" 来获取可用于部署的应用程序。

NODE_ENV

## vuecli 构建打包模式

### Web Components 组件

vue-cli-service build --target wc --name my-element [entry]
使用方式

```
<script src="path/to/my-element.js"></script>


```

<!-- 可在普通 HTML 中或者其它任何框架中使用 -->

<my-element></my-element>

### 打包异步 Web Components 组件

vue-cli-service build --target wc-async --name foo 'src/components/\*.vue'

### 应用打包

### 库
