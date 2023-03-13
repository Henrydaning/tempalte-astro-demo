

[001React 生命周期和常用 hook 说明 (processon.com)](https://www.processon.com/mindmap/631adc475653bb64a8e83878?tutorial=false)

## 1.useEffect

### 用途

- 获取数据
- 事件监听或订阅
- 监控/改变 DOM
- 设置定时器，输出日志
- 该 Hook 接收一个包含命令式、且可能有副作用代码的函数。

### 第二个参数不传。

useEffect 会在第一次渲染以及每次更新渲染后都执行。
（一般不会这么做）

### 第二个参数传空数组

useEffect 会在第一次渲染后执行一次。

### 第二个参数传监听属性。

[count]，会在 useEffect 会在第一次渲染以及每次更新 count 渲染后都执行。

官方建议
项目中使用 useEffct

使用 exhaustive-deps 规则作为 eslint-plugin-react-hooks 包的一部分。当依赖项指定不正确时，会发出警告并建议修复。
