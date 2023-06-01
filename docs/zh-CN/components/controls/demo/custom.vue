<template>
  <component :is="controls" />
</template>

<script lang="ts" setup>
import { defineControls } from 'naive-ui-pro-components'
import { NRadioGroup, NSpace, NRadio } from 'naive-ui'
import { h } from 'vue';

function delay(time: number) {
  return new Promise<void>(resolve => setTimeout(() => resolve(), time))
}

const controls = defineControls([
  {
    custom: () => h(
      NRadioGroup,
      null,
      [
        h(NSpace, [
          h(NRadio, { label: '开启', value: '0' }),
          h(NRadio, { label: '关闭', value: '1' }),
        ]),
      ],
    )
  },
  {
    render: () => 'Search',
  },
  {
    type: 'default',
    render: () => 'Reset',
  }
])
</script>
