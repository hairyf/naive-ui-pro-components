<script lang="ts" setup>
import NProForm, { defineForm } from '@naive-ui/pro-form'

const form = defineForm({
  brandNum: {
    type: 'input',
    formItemProps: {
      required: true,
    },
  },
})
</script>

<template>
  <n-pro-form :instance="form" />
</template>
