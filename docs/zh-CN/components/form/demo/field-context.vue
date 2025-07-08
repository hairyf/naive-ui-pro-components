<script lang="ts" setup>
import { defineForm, field } from 'naive-ultra'

const emailField = field({
  type: 'input',
  placeholder: '请输入邮箱',
})

// 创建 field 时访问 form 上下文
function createConfirmEmail(emailKey: string) {
  return field((ctx) => {
    return {
      type: 'input',
      placeholder: '请再次输入邮箱',
      rules: {
        validator: (_, value) => {
          return !value || value === ctx.data[emailKey]
        },
        message: '两次输入的邮箱不一致',
      },
    }
  })
}

const passwordField = field({
  type: 'input',
  placeholder: '请输入密码',
})

// 调用 config 时访问 form 上下文
const confirmPasswordField = passwordField.config((ctx) => {
  return {
    placeholder: '请再次输入密码',
    rules: {
      validator: (_, value) => {
        return !value || value === ctx.data.password
      },
      message: '两次输入的密码不一致',
    },
  }
})

const form = defineForm({
  email: emailField.config({ span: 12 }),
  confirmEmail: createConfirmEmail('email').config({ span: 12 }),
  password: passwordField.config({ span: 12 }),
  confirmPassword: confirmPasswordField.config({ span: 12 }),
})
</script>

<template>
  <np-form :is="form" />
</template>
