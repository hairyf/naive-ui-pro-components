<script lang="ts" setup>
import { defineControls, defineForm } from 'naive-ui-pro-components'

function delay(time: number) {
  return new Promise<void>(resolve => setTimeout(() => resolve(), time))
}

const form = defineForm({
  store: {
    type: 'input',
    placeholder: 'store id',
  },
  name: {
    type: 'input',
    placeholder: 'name',
  },
})

const toolbars = defineControls([
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
  <np-form :is="form" :toolbars="toolbars" />
</template>
