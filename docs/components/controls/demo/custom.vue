<template>
  <component :is="controls" />
</template>

<script lang="ts" setup>
import { useControls } from 'naive-ui-pro-components'
import { NRadio, NRadioGroup, NSpace } from 'naive-ui'
import { h } from 'vue'

const controls = useControls([
  {
    custom: () => h(
      NRadioGroup,
      null,
      [
        h(NSpace, [
          h(NRadio, { label: 'Enable', value: '0' }),
          h(NRadio, { label: 'Disable', value: '1' }),
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
