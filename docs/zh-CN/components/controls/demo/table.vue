<script lang="ts" setup>
import { defineControls } from '@naive-ui/pro-controls'
import ProTable, { defineTable, useColumns } from '@naive-ui/pro-table'

interface Row {
  id: number
  name: string
}

const controls = defineControls<[Row, number]>([
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

const columns = useColumns<Row>([
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
  { key: 'action', title: 'Action', render: controls },
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
})
</script>

<template>
  <ProTable :instance="table" :columns="columns" />
</template>

<style lang="scss" scoped></style>
