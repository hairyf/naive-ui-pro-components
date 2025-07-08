<script lang="ts" setup>
import { defineActions } from 'naive-ultra'

function delay(time: number) {
  return new Promise<void>(resolve => setTimeout(() => resolve(), time))
}

const actions = defineActions([
  {
    render: () => 'Search',
    helper: () => {
      return delay(1000)
    },
  },
  {
    type: 'default',
    render: () => 'Reset',
    helper: () => {
      return delay(1000)
    },
  },
])
</script>

<template>
  <nu-actions :is="actions" />
</template>
