## React 中样式穿透相关的 antd 组件

```
:global .ant-collapse-item {
  background-color: yellow;
  border-bottom: 10px solid #000000 !important;
}

这样全局会受到影响，可以给这个组件加上一个父级作为掩护
比如用一个div的className=testantd作为父级，然后重写一下。
:global .testantd .ant-collapse-item {
  background-color: yellow;
  border-bottom: 10px solid #000000 !important;
}


```



