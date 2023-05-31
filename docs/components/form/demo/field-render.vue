<template>
  <n-pro-form :instance="form" />
</template>

<script lang="ts" setup>
import { defineForm, field } from 'naive-ui-pro-components'

import { NRadio, NRadioGroup, NSpace } from 'naive-ui'
import { h } from 'vue'

// Render the default form item using the default render function
const amountField = field({
  type: 'input',
  renderItem(model, config, defaultRender) {
    return h('div', { style: 'width: 100%' }, [
      defaultRender(model, config),
      h('div', { style: 'margin-top: 12px' }, 'You have 1000... dollars'),
    ])
  },
})

// Render the form item using a custom render function
const emailField = field({
  type: 'input',
  placeholder: 'Please enter an email',
  renderItem(model) {
    return h(NRadioGroup,
      { value: model.value, onUpdateValue: value => model.value = value },
      [
        h(NSpace, [
          h(NRadio, { label: 'Enable', value: '0' }),
          h(NRadio, { label: 'Disable', value: '1' }),
        ]),
      ],
    )
  },
})

const form = defineForm({
  amount: amountField.withConfig({ span: 12 }),
  email: emailField.withConfig({ span: 12 }),
})
</script>
