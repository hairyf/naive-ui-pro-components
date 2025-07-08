<script lang="ts" setup>
import { defineForm, field } from 'naive-ultra'

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

const form = defineForm({
  email: emailField,
  email2: emailField2,
  email3: emailField3.config({
    rules: [
      {
        type: 'email',
        message: '请输入正确的邮箱',
      },
    ],
  }),
})
</script>

<template>
  <np-form :is="form" />
</template>
