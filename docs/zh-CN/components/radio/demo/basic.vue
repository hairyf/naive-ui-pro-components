<script lang="ts" setup>
import { reactive, ref } from 'vue'

const cities = ref(null)

const disabled = ref(true)

const options = reactive([
  { value: 'Definitely Maybe', label: 'Definitely Maybe' },
  { value: 'Be Here Now', label: 'Be Here Now' },
  { value: 'Be Here Now', label: 'Be Here Now', disabled },
])
</script>

<template>
  <n-space>
    <nu-radio-group v-model:value="cities" :options="options" />
    <n-switch v-model:value="disabled" />
  </n-space>
</template>
