<template>
  <component :is="controls" />
</template>

<script lang="ts" setup>
import { defineControls } from 'naive-ui-pro-components'
import { NRadio, NRadioGroup, NSpace } from 'naive-ui'
import { h } from 'vue'

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
    ),
  },
  {
    render: () => 'Search',
  },
  {
    type: 'default',
    render: () => 'Reset',
  },
])
</script>
