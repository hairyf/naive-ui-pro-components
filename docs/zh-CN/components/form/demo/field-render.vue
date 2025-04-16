<script lang="ts" setup>
import { defineForm, field } from 'naive-ultra'
import { h } from 'vue'

// 使用默认渲染函数渲染默认的表单项
const amountField = field({
  type: 'input-number',
  renderItem(model, config, defaultRender) {
    const style = 'margin-top: 12px; margin-bottom: -12px;'
    return h('div', { style: 'width: 100%' }, [
      defaultRender(model, config),
      h('div', { style }, '你有 1000 元'),
    ])
  },
})

const form = defineForm({
  amount: amountField
    .withConfig({ placeholder: '请输入金额' }),
})
</script>

<template>
  <np-form :is="form" />
  <n-button type="primary" style="width: 100%">
    付款
  </n-button>
</template>
