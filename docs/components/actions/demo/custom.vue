<script lang="ts" setup>
import { NRadio, NRadioGroup, NSpace } from 'naive-ui'
import { defineActions } from 'naive-ultra'
import { h } from 'vue'

const actions = defineActions([
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

<template>
  <nu-actions :is="actions" />
</template>
