# Pro Controls

Pro Controls 通常用于在 Table Columns 与 Form Toolbars 中，它也可以使用 `<component />` 独立渲染。

它返回一个 Function Component，该 Function Component 会根据传入的参数渲染组件。

组件参数继承：

- [按钮 Button - Naive UI](https://www.naiveui.com/zh-CN/light/components/button)

```html
<script lang="ts" setup>
import { defineForm, defineControls } from 'naive-ui-pro-components'
const form = defineForm({
  storeNum: {
    type: 'input',
    placeholder: () => glbI18n.t('placeholders.storeNum'),
  },
  storeName: storeNameField.preventDefault(),
  phoneNumber: phoneNumberField.preventDefault(),
})

const toolbars = defineControls([
  {
    render: () => 'Reset',
    // 组件会处理 promise 并添加 loading 状态
    helper: async () => {
      form.resetFields()
      await table.search()
    },
  },
  {
    props: { type: 'primary' },
    render: () => 'Search',
    helper: async () => {
      await table.search()
    },
    slots: {
      // 可以使用 slots 重写按钮插槽，例如用于添加图标
    }
  },
])
</script>

<template>
  <n-card>
    <pro-form :toolbars="toolbars" :instance="form" />
  </n-card>
</template>
```

## 与 Table Columns 配合使用

```ts
import { defineColumns, defineControls } from 'naive-ui-pro-components'

const controls = defineControls<[{ id: number }, number]>([
  {
    text: true,
    render: () => 'Edit',
    // params: rowData, index
    helper: ({ id }) => editStoreModal({ id }),
  },
  {
    text: true,
    render: () => 'Delete',
    helper: (rowData, index) => {
      $dialog.warning({
        content: glbI18n.t('merchant.store.deleteText'),
        onPositiveClick: () => postApiStoreDelete({ id: rowData.id }),
      })
    },
  },
])

// 传递给 columns
const columns = defineColumns<{ id: number }>([
  {
    key: 'storeNum',
    title: () => glbI18n.t('labels.storeNumber'),
  },
  // ...
  {
    key: '__action__',
    title: () => glbI18n.t('words.actions'),
    render: controls,
  },
])
```