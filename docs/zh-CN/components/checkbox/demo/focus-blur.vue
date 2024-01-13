<template>
  <n-space item-style="display: flex; align-items: center;">
    <n-button @click="handleClick">
      聚焦，一秒后失效
    </n-button>
    <np-checkbox-group v-model:value="cities" :options="options" />
  </n-space>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { CheckboxInst } from 'naive-ui'

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
