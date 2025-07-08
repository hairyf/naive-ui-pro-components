<script setup lang="ts">
import { defineForm, ONLY_RENDER } from 'naive-ultra'

const form = defineForm({
  [ONLY_RENDER()]: {
    type: 'button',
    slots: {
      default: () => '自定义插槽内容',
    },
  },
})
</script>

<template>
  <n-space vertical>
    <np-form :is="form" />
  </n-space>
</template>
