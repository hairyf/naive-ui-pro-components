<template>
  <n-pro-form :instance="form" />
</template>

<script lang="ts" setup>
const form = defineForm({
  brandNum: {
    type: 'input',
    formItemProps: {
      required: true,
    },
  },
})
</script>
