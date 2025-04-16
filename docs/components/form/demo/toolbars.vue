<script lang="ts" setup>
import { defineForm } from 'naive-ultra'

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

<template>
  <np-form :is="form">
    <template #toolbars>
      <n-button type="primary">
        Search
      </n-button>
    </template>
  </np-form>
  <np-form :is="form" toolbars />
</template>
