<template>
  <n-pro-checkbox-group :value="cities" :options="options" @update:value="handleUpdateValue" />
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const cities = ref<(string | number)[] | null>(null)

const options = reactive([
  { value: 'Beijing', label: '北京' },
  { value: 'Shanghai', label: '上海' },
  { value: 'Guangzhou', label: '广州' },
  { value: 'Shenzen', label: '深圳' },
])

function handleUpdateValue(value: (string | number)[]) {
  $message.info(JSON.stringify(value))
  cities.value = value
}
</script>
