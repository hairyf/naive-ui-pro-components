<template>
  <np-table :instance="table" :columns="columns" />
</template>

<script lang="ts" setup>
import { useControls, defineTable, useColumns } from 'naive-ui-pro-components'

interface Row {
  id: number
  name: string
}

const controls = useControls<[Row, number]>([
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
