<template>
  <np-form :instance="form" />
</template>

<script lang="ts" setup>
import { defineForm, field } from 'naive-ui-pro-components'

// Accessing the form context when creating a field
function createConfirmEmail(key: string) {
  return field(({ data }) => {
    return {
      type: 'input',
      placeholder: 'Please re-enter your email',
      rules: {
        validator: (_, value) => {
          return !value || value === data[key]
        },
        message: 'The emails entered do not match',
      },
    }
  })
}

const passwordField = field({
  type: 'input',
  placeholder: 'Please enter a password',
})

// Accessing the form context in withConfig
const confirmPasswordField = passwordField
  .withConfig(({ data }) => {
    return {
      placeholder: 'Please re-enter your password',
      rules: {
        validator: (_, value) => {
          return !value || value === data.password
        },
        message: 'The passwords entered do not match',
      },
    }
  })

const form = defineForm({
  email: {
    type: 'input',
    placeholder: 'Please enter an email',
  },
  confirmEmail: createConfirmEmail('email'),
  password: passwordField,
  confirmPassword: confirmPasswordField,
})
</script>
