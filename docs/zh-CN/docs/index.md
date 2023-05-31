# Pro Components

Pro Components 是基于 Naive UI 开发的一套高级组件超集。它提供了更高层次的抽象和封装，具备开箱即用的可用性，并显著提高了创建 CRUD 页面的效率，专注于页面开发。

## Features

- [ProForm](/zh-CN/components/form/) 基于对象的函数式编程的表单模板组件，预设常见布局和行为
- [ProTable](/zh-CN/components/table/) 抽象网络请求和表格格式化
- [ProControls](/zh-CN/components/controls/) 多场景的表单、表格控件
- [ProGlobals](/zh-CN/components/globals/) 全局反馈组件挂载、优化
- 开发中...

## Installation

pro-components 中的每个组件都是一个独立的包。您也可以安装 `naive-ui-pro-components` 来使用所有组件。

```sh
pnpm add @naive-ui-pro/form
pnpm add @naive-ui-pro/table

# or

pnpm add naive-ui-pro-components
```

## Using in a project

```vue
<script lang="ts" setup>
import ProForm, { defineForm, field } from '@naive-ui-pro/form'

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
  // 使用 field 函数获得额外的功能
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