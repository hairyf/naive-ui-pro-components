<script lang="ts" setup>
import { defineForm } from 'naive-ultra'

const form = defineForm({
  brandNum: {
    type: 'input',
    span: 12,
  },
  email: {
    type: 'input',
    span: 12,
  },
  time: {
    type: 'date-picker',
    span: 20,
  },
  enable: {
    type: 'checkbox-group',
    options: [
      { label: '启用', value: 'a' },
      { label: '禁用', value: 'b' },
    ],
    span: 4,
  },
})
</script>

<template>
  <nu-form :is="form" />
</template>
