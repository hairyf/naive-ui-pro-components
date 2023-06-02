<template>
  <n-pro-form :instance="form" />
  <n-button type="primary" style="width: 100%">
    Pay
  </n-button>
</template>

<script lang="ts" setup>
import { defineForm, field } from 'naive-ui-pro-components'
import { h } from 'vue'

// Render the default form item using the default render function
const amountField = field({
  type: 'input-number',
  renderItem(model, config, defaultRender) {
    const style = 'margin-top: 12px; margin-bottom: -12px;'
    return h('div', { style: 'width: 100%' }, [
      defaultRender(model, config),
      h('div', { style }, 'You have 1000 yuan'),
    ])
  },
})

const form = defineForm({
  amount: amountField
    .withConfig({ placeholder: 'Enter amount' }),
})
</script>
