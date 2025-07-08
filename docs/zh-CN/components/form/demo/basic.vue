<script lang="ts" setup>
import { defineForm } from 'naive-ultra'

import { ref } from 'vue'

const email = ref('')

const form = defineForm({
  brandNum: {
    type: 'input',
    props: {},
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

<template>
  <nu-form :is="form" />
  <pre>{{ JSON.stringify(form.dataTrans, null, 2) }}</pre>
</template>
