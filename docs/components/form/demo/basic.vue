<template>
  <n-pro-form :instance="form" />
  <pre>{{ JSON.stringify(form.dataTrans, null, 2) }}</pre>
</template>

<script lang="ts" setup>
import { defineForm } from 'naive-ui-pro-components'
import { ref } from 'vue'

const email = ref('')

const form = defineForm({
  brandNum: {
    type: 'input',
    placeholder: 'Please input brand number',
    value: '',
  },
  email: {
    type: 'input',
    placeholder: 'Please input email',
    value: email,
  },
  time: { type: 'date-picker' },
})
</script>
