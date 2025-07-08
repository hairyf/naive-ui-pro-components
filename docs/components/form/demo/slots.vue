<script setup lang="ts">
import { defineForm } from 'naive-ultra'

const form = defineForm({
  button: {
    type: 'button',
    slots: {
      default: () => 'Custom slot content',
    },
  },
})
</script>

<template>
  <n-space vertical>
    <np-form :is="form" />
  </n-space>
</template>
