# Form Toolbars

Form Toolbars 通常在搜索表单中使用，用于放置搜索按钮、重置按钮等，并开启搜索布局。

> 所有属性栅格将固定在 0:12 742:8 1394:6，无需添加 span。

```html
<script lang="ts" setup>
import { defineForm } from 'naive-ui-pro-components'
const form = defineForm({
  storeNum: {
    type: 'input',
    placeholder: () => glbI18n.t('placeholders.storeNum'),
  },
  storeName: storeNameField.preventDefault(),
  phoneNumber: phoneNumberField.preventDefault(),
})
</script>

<template>
  <n-card>
    <pro-form toolbars :instance="form" />
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
