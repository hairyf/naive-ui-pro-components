# Form Toolbars

Form Toolbars 通常在搜索表单中使用，用于放置搜索按钮、重置按钮等，并开启搜索布局。

> 开启 toolbars 后，所有属性栅格将固定在 0:12 742:8 1394:6，无需添加 span，而 toolbars 栏则自动往最后添加。

组件参数继承：

- [按钮 Button - Naive UI](https://www.naiveui.com/zh-CN/light/components/button)

```html
<script lang="ts" setup>
const form = defineForm({
  storeNum: {
    type: 'input',
    placeholder: () => glbI18n.t('placeholders.storeNum'),
  },
  storeName: storeNameField.preventDefault(),
  phoneNumber: phoneNumberField.preventDefault(),
})

const toolbars = defineToolbars([
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

## Slots

除此之外，你可以通过定义 `pro-form` 插槽来自定义工具栏的内容，例如：

```html
<template>
  <n-card>
    <pro-form :instance="form">
      <template #toolbars>
        <n-button type="primary" size="small" round>
          Search
        </n-button>
    </pro-form>
  </n-card>
</template>
```
