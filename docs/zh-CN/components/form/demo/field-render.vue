<script lang="ts" setup>
import NProForm, { defineForm, field } from '@naive-ui-pro/form'
import { NRadio, NRadioGroup, NSpace } from 'naive-ui'
import { h } from 'vue'

// 使用默认渲染函数渲染默认的表单项
const amountField = field({
  type: 'input',
  renderItem(model, config, defaultRender) {
    return h('div', { style: 'width: 100%' }, [
      defaultRender(model, config),
      h('div', { style: 'margin-top: 12px' }, '你有 1000... 元'),
    ])
  },
})

// 使用自定义渲染函数渲染表单项
const emailField = field({
  type: 'input',
  placeholder: '请输入邮箱',
  renderItem(model) {
    return h(NRadioGroup,
      { value: model.value, onUpdateValue: value => model.value = value },
      [
        h(NSpace, [
          h(NRadio, { label: '开启', value: '0' }),
          h(NRadio, { label: '关闭', value: '1' }),
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

<template>
  <n-pro-form :instance="form" />
</template>
