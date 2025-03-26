<script lang="ts" setup>
import { defineForm } from 'naive-ui-pro-components'

const form = defineForm({
  brandNum: {
    type: 'input',
    formItemProps: {
      required: true,
    },
  },
})
</script>

<template>
  <np-form :is="form" />
</template>
