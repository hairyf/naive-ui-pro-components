<script lang="ts" setup>
import { defineForm, field } from 'naive-ultra'

// fields.ts
const emailField = field({
  type: 'input',
  value: '',
  rules: [
    {
      required: true,
      message: 'Please enter email',
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
    // You can further configure the field via config
    .config({
      label: 'Email',
      placeholder: 'Please enter email',
    }),
})
</script>

<template>
  <nu-form :is="form" />
</template>
