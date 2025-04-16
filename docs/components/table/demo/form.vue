<script lang="ts" setup>
import { defineForm, defineTable, useColumns } from 'naive-ultra'

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
  <np-form :is="form">
    <template #toolbars>
      <n-button>Search</n-button>
    </template>
  </np-form>
  <np-table :is="table" :columns="columns" />
</template>
