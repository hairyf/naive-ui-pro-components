<template>
  <np-table style="margin-bottom: 24px;" :instance="table" :columns="columns" :pagination="false" />
  <np-table :instance="table" :columns="columns" :pagination="{ showSizePicker: false }" />
</template>

<script lang="ts" setup>
import { defineTable, useColumns } from 'naive-ui-pro-components'

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
