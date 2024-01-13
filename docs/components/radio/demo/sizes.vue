<template>
  <n-space vertical>
    <np-radio-group v-model:value="cities" type="button" :options="options" size="medium" />
    <np-radio-group v-model:value="cities" type="button" :options="options" size="large" />
    <n-space>
      <n-checkbox v-model:checked="disabled2">
        Disable Shakemaker
      </n-checkbox>
      <n-checkbox v-model:checked="disabled1">
        Disable Live Forever
      </n-checkbox>
    </n-space>
  </n-space>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const cities = ref(null)

const disabled1 = ref(false)
const disabled2 = ref(false)

const options = reactive([
  { value: 'Rock\'n\'Roll Star', label: 'Rock\'n\'Roll Star' },
  { value: 'Shakermaker', label: 'Shakermaker', disabled: disabled2 },
  { value: 'Live Forever', label: 'Live Forever', disabled: disabled1 },
  { value: 'Up in the Sky', label: 'Up in the Sky' },
])
</script>
