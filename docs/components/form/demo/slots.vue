<script setup lang="ts">
import { defineForm, ONLY_RENDER } from 'naive-ultra'

const form = defineForm({
  [ONLY_RENDER()]: {
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
