# Pro Actions（表格集成）

Pro Actions 可与 ProTable 搭配使用，便于在表格列中渲染批量操作按钮，简化表格操作列实现。

::: demo src="../actions/demo/table.vue" title="表格控件"
在表格列配置中直接使用 `defineActions` 返回的组件函数，即可实现批量操作按钮。
:::

## 基本用法

```ts
import { defineActions, defineTable, useColumns } from 'naive-ultra'

const actions = defineActions([
  {
    text: true,
    render: () => 'Deposit',
    helper: row => alert(`Deposit ${row.id}`),
  },
  {
    text: true,
    render: () => 'Withdraw',
    helper: row => alert(`Withdraw ${row.id}`),
  },
])

const columns = useColumns([
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
  { key: 'action', title: 'Action', render: actions },
])
```

## Action 属性

| 名称   | 类型                                               | 说明                         |
| ------ | -------------------------------------------------- | ---------------------------- |
| render | `string \| (...args) => string \| VNodeChild`      | 渲染按钮控件项目内容         |
| helper | `(...args) => void \| Promise<void>`               | 处理点击事件，支持异步 loading |
| enable | `boolean \| (...args) => boolean`                  | 是否启用控件，返回 false 不渲染 |
| custom | `(...args) => VNodeChild`                          | 自定义渲染                   |

> 更多参数请参考 [n-button](https://www.naiveui.com/zh-CN/light/components/button)。

## 泛型与类型

defineActions 支持泛型参数，自动推导每个操作项的参数类型。例如 `defineActions<[Row, number]>()` 可获得当前行和索引。

Pro Actions 可用于表格、工具栏等场景。
