<script lang="ts" setup>
import { defineTable, useColumnIndexes, useColumnLink, useColumns } from 'naive-ultra'

interface Row {
  name: string
  link: string
}

function delay(time: number) {
  return new Promise<void>(resolve => setTimeout(() => resolve(), time))
}

const table = defineTable<Row[]>({
  request: async ({ pageSize }) => {
    await delay(500)
    return {
      data: Array
        .from({ length: pageSize })
        .map(() => ({
          name: 'Jim Green',
          link: 'https://www.naiveui.com/',
          linkName: 'NaiveUI',
        })),
      total: 1000,
    }
  },
  pagination: { pageSize: 5 },
})

const columns = useColumns<Row>([
  // Quickly create static index column
  useColumnIndexes(table.pagination),
  { key: 'name', title: 'Name' },
  // Quickly render link column
  useColumnLink('link', { render: () => 'to link' }),
  // Link and render columns can be different
  useColumnLink('link', { key: 'linkName' }),
])
</script>

<template>
  <np-table :is="table" :columns="columns" />
</template>
