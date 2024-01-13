<template>
  <np-checkbox-group :value="cities" :options="options" @update:value="handleUpdateValue" />
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const cities = ref<(string | number)[] | null>(null)

const options = reactive([
  { value: 'Beijing', label: 'Beijing' },
  { value: 'Shanghai', label: 'Shanghai' },
  { value: 'Guangzhou', label: 'Guangzhou' },
  { value: 'Shenzen', label: 'Shenzen' },
])

function handleUpdateValue(value: (string | number)[]) {
  $message.info(JSON.stringify(value))
  cities.value = value
}
</script>
