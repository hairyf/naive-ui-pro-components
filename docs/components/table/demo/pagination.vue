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
  <np-table :is="table" style="margin-bottom: 24px;" :columns="columns" :pagination="false" />
  <np-table :is="table" :columns="columns" :pagination="{ showSizePicker: false }" />
</template>
