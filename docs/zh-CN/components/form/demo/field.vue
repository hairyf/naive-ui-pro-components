<template>
  <n-pro-form :instance="form" />
</template>

<script lang="ts" setup>
import { defineForm, field } from 'naive-ui-pro-components'

// fields.ts
const emailField = field({
  type: 'input',
  value: '',
  rules: [
    {
      required: true,
      message: '请输入邮箱',
      trigger: 'blur',
    },
    {
      type: 'email',
      message: '请输入正确的邮箱',
    },
  ],
})
// xxx.vue setup
const form = defineForm({
  email: emailField
    // 通过 withConfig 可以对 field 进行再次配置
    .withConfig({
      label: '邮箱',
      placeholder: '请输入邮箱',
    }),
})
</script>
