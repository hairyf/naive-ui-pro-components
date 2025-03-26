# NProTable

NProTable 用于解决项目中需要写很多 table 的样板代码的问题，所以在其中做了封装了很多常用的逻辑。这些封装可以简单的分类为预设行为与预设逻辑。

当你的表格需要与服务端进行交互或者需要多种单元格样式时，ProTable 是不二选择，如果你只是想渲染一个表格，更建议你使用 [data-table](https://www.naiveui.com/zh-CN/os-theme/components/data-table) 或者 [table](https://www.naiveui.com/zh-CN/os-theme/components/table)。

<demo title="基础" src="./demo/basic.vue" />

::: demo src="./demo/request.vue" title="外部控制"

使用 `defineTable` 在外部控制请求。

:::

::: demo src="./demo/form.vue" title="表单组合"

你还可以和 `defineForm` 配合使用组成一个完整的搜索页：

:::

::: demo src="./demo/pagination.vue" title="表格分页"

分页默认开启，如果你不需要分页，可以通过 `pagination` 参数设置为 `false` 关闭，你也可以通过设置 `pagination` 覆盖 `pagination` 参数。

:::

::: demo src="./demo/watcher.vue" title="监听数据"

当表格数据变化时，你可能需要做一些额外的操作，这时你可以通过 `watch` 参数来监听数据变化，它将会自动重置分页并请求。

:::

::: demo src="./demo/hooks.vue" title="钩子函数"

表格存在一些工具函数，用于快速创建列。

:::

## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| is | `ProTableInstance` | `-` | 组件的实例 |
| pagination | `boolean \| PaginationProps` | `true` | 分页配置 |

> 更多参数参考 [data-table](https://www.naiveui.com/zh-CN/os-theme/components/data-table)。

## Methods（table）

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| pagination | `OffsetPagination` | 表单分页配置 |
| next | `() => void` | 跳转下一页，并请求相关页面 |
| prev | `() => void` | 跳转上一页，并请求相关页面 |
| search | `(pagination?: ServerPaginationResolve) => Promise<void>` | 根据分页信息重新请求内容 |
| reset | `() => Promise<void>` | 重置页码并重新请求 |
| request | `(pagination: ServerPaginationResolve) => DataResolved<T> \| Promise<DataResolved<T>>` | 源请求函数 |
| requestAll | `() => Promise<T>` | 根据页码相关信息请求所有数据，一般可用于组合 `.csv` 文件 |
