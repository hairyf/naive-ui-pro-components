<script lang="ts" setup>
import NProTable, { defineTable, useColumns } from '@naive-ui-pro/table'
import NProForm, { defineForm } from '@naive-ui-pro/form'

interface Row {
  id: number
  name: string
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
  <n-pro-form :instance="form">
    <template #toolbars>
      <n-button>Search</n-button>
    </template>
  </n-pro-form>
  <n-pro-table :instance="table" :columns="columns" />
</template>
