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
      message: 'Please enter email',
      trigger: 'blur',
    },
  ],
})

// Clone field to avoid value reference issues
const emailField2 = emailField.clone()
// Deep clone
const emailField3 = emailField.cloneDeep()

const form = defineForm({
  email: emailField,
  email2: emailField2,
  email3: emailField3.config({
    rules: [
      {
        type: 'email',
        message: 'Please enter a valid email',
      },
    ],
  }),
})
</script>

<template>
  <nu-form :is="form" />
</template>
