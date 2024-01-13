<template>
  <component :is="controls" />
</template>

<script lang="ts" setup>
import { useControls } from 'naive-ui-pro-components'

function delay(time: number) {
  return new Promise<void>(resolve => setTimeout(() => resolve(), time))
}

const controls = useControls([
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
