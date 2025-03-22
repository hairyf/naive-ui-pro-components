<template>
  <n-pro-table :instance="table" :columns="columns" />
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { NButton } from 'naive-ui'
import { defineControls, defineTable, useColumns } from 'naive-ui-pro-components'

interface Row {
  id: number
  name: string
}

const controls = defineControls<[Row, number]>([
  {
    text: true,
    render: row => row.name,
    helper: handleClick,
  },
])

const controls2 = defineControls<[Row, number]>([
  {
    custom: (row, index) => {
      return h(NButton, { type: 'primary', text: true, onclick: () => handleClick(row) }, { default: () => row.name })
    },
  },
])

const columns = useColumns<Row>([
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
  { key: 'action', title: 'Action', render: controls },
  // { key: 'action', title: 'Action2', render: controls2 },
])

const table = defineTable<Row[]>({
  request: () => {
    const list = getList()
    return {
      data: list,
      total: list.length,
    }
  },
})

function handleClick(row: Row) {
  console.log(row, 'row')
  table.search()
}

function getList() {
  return Array.from({ length: 5 }, (_, id) => ({ id, name: getRandomStr(10) }))
}

function getRandomStr(length: number) {
  const str = 'abcdefghijklmnopqrstuvwxyz'
  return Array.from({ length }, () => str[Math.floor(Math.random() * str.length)]).join('')
}
</script>
