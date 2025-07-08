<script lang="ts" setup>
import { defineActions, defineForm } from 'naive-ultra'

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
  <np-form :is="form" :toolbars="actions" />
</template>
