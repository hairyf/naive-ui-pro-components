<script lang="ts" setup>
import { defineForm, field } from 'naive-ui-pro-components'

// fields.ts
const emailField = field({
  type: 'input',
  value: '',
  span: 12,
  rules: [
    {
      required: true,
      message: 'Please enter an email',
      trigger: 'blur',
    },
  ],
})

// Copy the field to avoid referencing the same value field
const emailField2 = emailField.clone()
// Deep clone
const emailField3 = emailField.cloneDeep()

emailField3.rules.push({
  type: 'email',
  message: 'Please enter a valid email',
})

const form = defineForm({
  email: emailField,
  email2: emailField2,
  email3: emailField3,
})
</script>

<template>
  <np-form :is="form" />
</template>
