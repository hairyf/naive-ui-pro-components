<script lang="ts" setup>
import { defineTable, useColumns } from 'naive-ultra'

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
  pagination: { pageSize: 5 },
  // 默认开始请求第一页
  immediate: true,
})
</script>

<template>
  <nu-table :is="table" :columns="columns" />
</template>
