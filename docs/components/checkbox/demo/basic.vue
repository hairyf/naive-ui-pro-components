<script lang="ts" setup>
import { reactive, ref } from 'vue'

const cities = ref(null)

const options = reactive([
  { value: 'Beijing', label: 'Beijing' },
  { value: 'Shanghai', label: 'Shanghai' },
  { value: 'Guangzhou', label: 'Guangzhou' },
  { value: 'Shenzen', label: 'Shenzen' },
])
</script>

<template>
  <nu-checkbox-group v-model:value="cities" :options="options" />
</template>
