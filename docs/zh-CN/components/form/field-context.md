# Field Context

Field Context（字段上下文）是 `naive-ultra` 表单体系中的高级特性，用于在表单项之间传递和共享上下文信息，便于实现表单项间的依赖、联动、动态校验等复杂场景。

::: demo src="./demo/field-context.vue" title="字段上下文"
`field|config` 传入函数可接收当前使用的 form 实例，用于组合校验。
:::

## 获取和使用 Field Context

在表单项的配置函数、`renderItem` 自定义渲染函数中，可以通过参数获取 context。例如：

```ts
import { defineForm } from 'naive-ultra'

const form = defineForm({
  username: {
    label: '用户名',
    value: '',
    rules: [{ required: true, message: '请输入用户名' }],
  },
  password: field(context => ({
    label: '密码',
    value: '',
    rules: [
      {
        validator: (rule, value) => {
          if (context.data.username === 'admin' && !value)
            return Promise.reject('管理员必须设置密码')
          return Promise.resolve()
        },
      },
    ],
  })),
})
```
