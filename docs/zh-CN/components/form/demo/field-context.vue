<script lang="ts" setup>
import { defineForm, field } from 'naive-ui-pro-components'

// 创建 field 时访问 form 上下文
function createConfirmEmail(key: string) {
  return field(({ data }) => {
    return {
      type: 'input',
      placeholder: '请再次输入邮箱',
      rules: {
        validator: (_, value) => {
          return !value || value === data[key]
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

// 在 withConfig 中访问 form 上下文
const confirmPasswordField = passwordField
  .withConfig(({ data }) => {
    return {
      placeholder: '请再次输入密码',
      rules: {
        validator: (_, value) => {
          return !value || value === data.password
        },
        message: '两次输入的密码不一致',
      },
    }
  })

const form = defineForm({
  email: {
    type: 'input',
    placeholder: '请输入邮箱',
  },
  confirmEmail: createConfirmEmail('email'),
  password: passwordField,
  confirmPassword: confirmPasswordField,
})
</script>

<template>
  <np-form :is="form" />
</template>
