<script lang="ts" setup>
import NProForm, { defineForm } from '@naive-ui/pro-form'

const form = defineForm({
  brandNum: {
    type: 'input',
    formItemProps: {
      label: 'Brand Number',
    },
  },
  email: {
    type: 'input',
    formItemProps: {
      label: 'Email',
    },
  },
})
</script>

<template>
  <n-pro-form :instance="form" />
</template>
