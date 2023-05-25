# Table Controls

在一些特殊的表格中，需要定义一系列的操作控件时，可以使用 `defineControls` 方法。

组件参数继承：

- [按钮 Button - Naive UI](https://www.naiveui.com/zh-CN/light/components/button)

`defineControls` 与 `defineToolbars` 类似，不同的是 `defineControls` 可以在 helper 函数中获得当前渲染的行。

```ts
// 泛型传入每项的类型（这个数据源没有类型，所以没有定义）
const controls = defineControls<{ id: number }>([
  {
    render: () => 'Edit',
    // params: rowData, index
    helper: ({ id }) => {
      editStoreModal({ id })
    },
  },
  {
    render: () => 'Delete',
    helper: (rowData, index) => {
      dialog.warning({
        content: glbI18n.t('merchant.store.deleteText'),
        onPositiveClick: () => postApiStoreDelete({ storeId: rowData.id }),
      })
    },
  },
])

// 传递给 columns
const columns = defineColumns([
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