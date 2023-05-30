<script lang="ts" setup>
import NProForm, { defineForm } from '@naive-ui/pro-form'

const form = defineForm({
  brandNum: {
    type: 'input',
    span: 12,
  },
  email: {
    type: 'input',
    span: 12,
  },
  time: { type: 'date-picker' },
})
</script>

<template>
  <n-pro-form :instance="form" />
</template>
