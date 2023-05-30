<script lang="ts" setup>
import NProForm, { defineForm } from '@naive-ui/pro-form'
import { ref } from 'vue'

const email = ref('')

const form = defineForm({
  brandNum: {
    type: 'input',
    placeholder: 'Please input brand number',
    value: '',
  },
  email: {
    type: 'input',
    placeholder: 'Please input email',
    value: email,
  },
  time: { type: 'date-picker' },
})
</script>

<template>
  <n-pro-form :instance="form" />
  {{ JSON.stringify(form.data) }}
</template>
