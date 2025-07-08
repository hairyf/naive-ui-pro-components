<script lang="ts" setup>
import { defineActions, defineTable, useColumns } from 'naive-ultra'

interface Row {
  id: number
  name: string
}

function delay(time: number) {
  return new Promise<void>(resolve => setTimeout(() => resolve(), time))
}

const columns = useColumns<Row>([
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
])

const table = defineTable<Row[]>({
  request: async () => {
    await delay(1000)
    return {
      data: [
        { id: 1, name: 'John Brown' },
        { id: 2, name: 'Jim Green' },
        { id: 3, name: 'Joe Black' },
      ],
      total: 6,
    }
  },
})
const actions = defineActions([
  {
    render: 'Search',
    helper: () => table.search(),
  },
  {
    render: 'Reset',
    type: 'default',
    // Reset current table page and re-request
    helper: () => table.reset(),
  },
  {
    render: 'Export',
    type: 'default',
    // You can use requestAll to get all data for custom export logic
    helper: async () => {
      const data = await table.requestAll()
      // eslint-disable-next-line no-console
      console.log(data)
    },
  },
])
</script>

<template>
  <np-actions :is="actions" style="margin-bottom: 24px;" />
  <np-table :is="table" :columns="columns" />
</template>
