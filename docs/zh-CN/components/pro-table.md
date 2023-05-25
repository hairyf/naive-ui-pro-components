# 高级表格（n-pro-table）

高级表格用于解决项目中需要写很多 table 的样板代码的问题，所以在其中做了封装了很多常用的逻辑。这些封装可以简单的分类为预设行为与预设逻辑。

当你的表格需要与服务端进行交互或者需要多种单元格样式时，ProTable 是不二选择，如果你只是想渲染一个表格，更建议你使用 [data-table](https://www.naiveui.com/zh-CN/os-theme/components/data-table) 或者 [table](https://www.naiveui.com/zh-CN/os-theme/components/table)。

组件参数继承：

- [数据表格 Data Table - Naive UI](https://www.naiveui.com/zh-CN/light/components/data-table)
- [分页 Pagination - Naive UI](https://www.naiveui.com/zh-CN/light/components/pagination)

你可以和 `defineForm` 配合使用组成一个完整的搜索页：

```html
<script lang="ts" setup>
import { defineForm, defineColumns, defineTable } from 'naive-ui-pro-components'

const active = ref(false)

const form = defineForm({
  /* ... */
})

const columns = defineColumns([
  { key: '...', label: '...' },
  { key: '...', label: '...' },
  { key: '...', label: '...' },
])

const table = defineTable({
  async request(pagination) {
    // 使用你的 from 参数
    form.data
    // or use
    form.dataTrans
    // 请求页面 page 数据
    return {
      data: [],
      total: 0,
    }
  },
  // 默认开始请求第一页
  immediate: true,
  // 监听数据变化，自动重置页面
  watcher: [active, form.data]
})
</script>
<template>
  <n-switch v-model:value="active" />
  <pro-form :instance="form" toolbars />
  <pro-table
    :instance="table"
    :columns="columns"
  />
</template>
```