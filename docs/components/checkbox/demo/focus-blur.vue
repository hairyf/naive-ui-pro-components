<script lang="ts" setup>
import type { CheckboxInst } from 'naive-ui'
import { reactive, ref } from 'vue'

const cities = ref(null)

const checkboxInstRef = ref<CheckboxInst>()

const options = reactive([
  { value: 'Beijing' },
  { value: 'Guangzhou', ref: checkboxInstRef },
  { value: 'Shanghai' },
])

function handleClick() {
  checkboxInstRef.value?.focus()
  setTimeout(() => {
    checkboxInstRef.value?.blur()
  }, 1000)
}
</script>

<template>
  <n-space item-style="display: flex; align-items: center;">
    <n-button @click="handleClick">
      Focus then blur in 1 second
    </n-button>
    <np-checkbox-group v-model:value="cities" :options="options" />
  </n-space>
</template>
