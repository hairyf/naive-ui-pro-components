<template>
  <n-pro-form :instance="form" />
</template>

<script setup>
import { defineForm, field } from 'naive-ui-pro-components'

// fields.ts
const emailField = field({
  type: 'input',
  value: '',
  span: 12,
  rules: [
    {
      required: true,
      message: '请输入邮箱',
      trigger: 'blur',
    },
  ],
})

// 拷贝字段，避免字段 value 引用相同
const emailField2 = emailField.clone()
// 深度克隆
const emailField3 = emailField.cloneDeep()

emailField3.rules.push({
  type: 'email',
  message: '请输入正确的邮箱',
})

const form = defineForm({
  email: emailField,
  email2: emailField2,
  email3: emailField3,
})
</script>
