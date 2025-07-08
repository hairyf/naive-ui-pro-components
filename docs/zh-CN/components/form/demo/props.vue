<script lang="ts" setup>
import { defineForm } from 'naive-ultra'

const form = defineForm({
  username: {
    label: '用户名',
    type: 'input',
    placeholder: '请输入用户名',
    props: {
      clearable: true,
    },
  },
  age: {
    label: '年龄',
    type: 'input-number',
    placeholder: '请输入年龄',
    props: {
      min: 0,
      max: 120,
    },
  },
})
</script>

<template>
  <n-space vertical>
    <np-form :is="form" />
  </n-space>
</template>
