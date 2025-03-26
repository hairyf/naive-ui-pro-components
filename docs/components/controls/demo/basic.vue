<script lang="ts" setup>
import { defineControls } from 'naive-ui-pro-components'

function delay(time: number) {
  return new Promise<void>(resolve => setTimeout(() => resolve(), time))
}

const controls = defineControls([
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
  <np-controls :is="controls" />
</template>
