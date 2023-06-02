<template>
  <n-pro-checkbox-group v-model:value="cities" :options="options" />
</template>

<script setup>
import { reactive, ref } from 'vue'

const cities = ref(null)

const options = reactive([
  { value: 'Beijing', label: '北京' },
  { value: 'Shanghai', label: '上海' },
  { value: 'Guangzhou', label: '广州' },
  { value: 'Shenzen', label: '深圳' },
])
</script>
