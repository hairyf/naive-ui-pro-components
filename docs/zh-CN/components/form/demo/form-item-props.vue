<script lang="ts" setup>
import { defineForm } from 'naive-ultra'

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
  <nu-form :is="form" />
</template>
