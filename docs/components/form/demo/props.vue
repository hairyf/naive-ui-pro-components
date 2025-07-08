<script lang="ts" setup>
import { defineForm } from 'naive-ultra'

const form = defineForm({
  username: {
    label: 'Username',
    type: 'input',
    placeholder: 'Please enter username',
    props: {
      clearable: true,
    },
  },
  age: {
    label: 'Age',
    type: 'input-number',
    placeholder: 'Please enter age',
    props: {
      min: 0,
      max: 120,
    },
  },
})
</script>

<template>
  <n-space vertical>
    <nu-form :is="form" />
  </n-space>
</template>
