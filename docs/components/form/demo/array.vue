<script lang="ts" setup>
import { defineForm } from 'naive-ultra'
import { ref } from 'vue'

const email = ref('')

const form = defineForm([
  {
    type: 'input',
    key: 'brandNum',
    placeholder: 'Please input brand number',
    value: '',
  },
  {
    type: 'input',
    key: 'email',
    placeholder: 'Please input email',
    value: email,
  },
])
</script>

<template>
  <np-form :is="form" />
  <pre>{{ JSON.stringify(form.dataTrans, null, 2) }}</pre>
</template>
