# Pro Components

Pro Components 是基于 Naive UI 开发的一套高级组件超集。它提供了更高层次的抽象和封装，具备开箱即用的可用性，并显著提高了创建 CRUD 页面的效率，专注于页面开发。

## Features

- [pro-feedbacks](/)
- [pro-form](/)
- [pro-toolbars](/)
- [pro-table](/)
- [pro-controls](/)
- 开发中...

## Installation

pro-components 中的每个组件都是一个独立的包。您也可以安装 `naive-ui-pro-components` 来使用所有组件。

```sh
pnpm add @naive-ui/pro-form
pnpm add @naive-ui/pro-table

# or

pnpm add naive-ui-pro-components
```

## Using in a project

```vue
<script lang="ts" setup>
import { defineForm, field } from 'naive-ui-pro-components'

const email = ref('')

const form = defineForm({
  userName: {
    type: 'input',
    placeholder: '请输入',
  },
  email: {
    type: 'input',
    value: email,
    span: 12,
  },
  // 使用 field 函数获得额外的功能(阻止浏览器填充)
  password: field({
    type: 'input',
    rules: [/* ... */],
    props: { type: 'password' },
    value: '',
    span: 12,
  })
    .preventAutofill(),
})

</script>

<template>
  <pro-form :instance="form" />
</template>
```