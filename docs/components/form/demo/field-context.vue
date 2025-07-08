<script lang="ts" setup>
import { defineForm, field } from 'naive-ultra'

const emailField = field({
  type: 'input',
  placeholder: 'Please enter email',
})

// Access form context when creating field
function createConfirmEmail(emailKey: string) {
  return field((ctx) => {
    return {
      type: 'input',
      placeholder: 'Please re-enter email',
      rules: {
        validator: (_, value) => {
          return !value || value === ctx.data[emailKey]
        },
        message: 'The two emails do not match',
      },
    }
  })
}

const passwordField = field({
  type: 'input',
  placeholder: 'Please enter password',
})

// Access form context in config
const confirmPasswordField = passwordField.config((ctx) => {
  return {
    placeholder: 'Please re-enter password',
    rules: {
      validator: (_, value) => {
        return !value || value === ctx.data.password
      },
      message: 'The two passwords do not match',
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
