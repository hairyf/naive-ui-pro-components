# Table Hooks

::: demo src="./demo/hooks.vue" title="常用 hooks 用法"
Table Hooks 提供了一组用于简化表格列配置、索引列、链接列等常用场景的工具函数，让 ProTable 的列配置更灵活、可复用。
:::

## useColumns

用于批量处理和生成表格列配置，支持动态过滤、默认最小宽度等。

```ts
import { useColumns } from 'naive-ultra'

const columns = useColumns([
  { key: 'name', title: '姓名' },
  { key: 'age', title: '年龄' },
])
```

## useColumnIndexes

快速生成静态索引列（自动序号），常用于表格首列。

```ts
import { useColumnIndexes } from 'naive-ultra'

const columns = [
  useColumnIndexes(table.pagination),
  { key: 'name', title: '姓名' },
]
```

## useColumnLink

快速生成链接列，支持自定义渲染内容和跳转地址。

```ts
import { useColumnLink } from 'naive-ultra'

const columns = [
  useColumnLink('url', { title: '官网', render: row => row.name }),
]
```

## 其他常用 hooks

- `useTableMinWidth(columns)`：自动计算表格最小宽度，适配响应式布局。
- `useOffsetPagination(options)`：分页状态管理，配合 ProTable 使用。

> 你可以将这些 hooks 灵活组合，快速实现复杂表格场景。
