<script lang="ts" setup>
import NProTable, { defineTable, useColumnIndexes, useColumnLink, useColumns } from '@naive-ui-pro/table'

interface Row {
  name: string
  link: string
}

const table = defineTable<Row[]>({
  request: () => {
    return {
      data: Array.from({ length: 1000 }).map((_) => {
        return { name: 'Jim Green', link: 'https://www.naiveui.com/', linkName: 'NaiveUI' }
      }),
      total: 1000,
    }
  },
})

const columns = useColumns<Row>([
  // 快速创建静态索引列
  useColumnIndexes(table.pagination),
  { key: 'name', title: 'Name' },
  // 快速渲染链接列
  useColumnLink('link', { render: () => 'to link' }),
  // 连接与渲染列可以不相同
  useColumnLink('link', { key: 'linkName' }),
])
</script>

<template>
  <n-pro-table :instance="table" :columns="columns" />
</template>
