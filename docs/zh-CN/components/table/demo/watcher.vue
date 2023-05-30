<script lang="ts" setup>
import NProForm, { defineForm } from '@naive-ui-pro/form'

import NProTable, { defineTable, useColumns } from '@naive-ui-pro/table'

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

const form = defineForm({
  brandNum: {
    type: 'input',
    placeholder: 'Please input brand number',
  },
  email: {
    type: 'input',
    placeholder: 'Please input email',
  },
})

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
  watcher: [form.data],
})
</script>

<template>
  <n-pro-form :instance="form" />
  <n-pro-table :instance="table" :columns="columns" />
</template>
