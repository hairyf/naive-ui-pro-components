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
  request: () => {
    return {
      data: [
        { id: 1, name: 'John Brown' },
        { id: 2, name: 'Jim Green' },
        { id: 3, name: 'Joe Black' },
      ],
      total: 3,
    }
  },
  // 默认开始请求第一页
  immediate: true,
})
</script>

<template>
  <n-pro-table :instance="table" :columns="columns" />
</template>
