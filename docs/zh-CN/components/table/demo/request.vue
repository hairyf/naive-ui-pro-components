<template>
  <component :is="controls" style="margin-bottom: 24px;" />
  <n-pro-table :instance="table" :columns="columns" />
</template>

<script lang="ts" setup>
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

const controls = defineControls([
  {
    render: 'Search',
    helper: () => table.search(),
  },
  {
    render: 'Reset',
    type: 'default',
    // 重置当前表格页，并重新请求
    helper: () => table.reset(),
  },
  {
    render: 'Export',
    type: 'default',
    // 你可以利用 requestAll 方法获取所有数据来自定义导出表格数据的逻辑
    helper: async () => {
      const data = await table.requestAll()
      // eslint-disable-next-line no-console
      console.log(data)
    },
  },
])
</script>
