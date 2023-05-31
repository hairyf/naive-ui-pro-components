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
      message: 'Please enter an email',
      trigger: 'blur',
    },
    {
      type: 'email',
      message: 'Please enter a valid email',
    },
  ],
})
// xxx.vue setup
const form = defineForm({
  email: emailField
    // Field can be further configured using withConfig
    .withConfig({
      label: 'Email',
      placeholder: 'Please enter an email',
    }),
})
</script>
