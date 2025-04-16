<script lang="ts" setup>
import { defineActions, defineTable, useColumns } from 'naive-ultra'

interface Row {
  id: number
  name: string
}

const actions = defineActions<[Row, number]>([
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
  { key: 'action', title: 'Action', render: actions },
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
  <np-table :is="table" :columns="columns" />
</template>
