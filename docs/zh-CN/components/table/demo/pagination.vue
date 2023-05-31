<template>
  <n-pro-table style="margin-bottom: 24px;" :instance="table" :columns="columns" :pagination="false" />
  <n-pro-table :instance="table" :columns="columns" :pagination="{ showSizePicker: false }" />
</template>

<script lang="ts" setup>
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
