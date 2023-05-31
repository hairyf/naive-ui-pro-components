<script lang="ts" setup>
import NProTable, { defineTable, useColumns } from '@naive-ui-pro/table'

interface Row {
  id: number
  name: string
}

const columns = useColumns<Row>([
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
])

const table = defineTable<Row[]>({
  request: ({ page, pageSize }) => {
    return {
      data: Array.from({ length: pageSize }).map((_, i) => {
        return { id: ((page - 1) * pageSize) + i, name: 'John Brown' }
      }),
      total: 1000,
    }
  },
  // 默认开始请求第一页
  immediate: true,
  // 分页设置
  pageSize: 5,
})
</script>

<template>
  <n-pro-table :instance="table" :columns="columns" />
</template>
