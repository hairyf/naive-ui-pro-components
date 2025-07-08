<script lang="ts" setup>
import { defineForm } from 'naive-ultra'

const form = defineForm({
  name: { type: 'input' },
  textarea: {
    props: { type: 'textarea' },
    formItemProps: { required: true },
    type: 'input',
  },
  select: {
    type: 'select',
    options: [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 },
    ],
    span: 11,
  },
  datetime: {
    type: 'date-picker',
    span: 11,
  },
  switch: {
    span: 2,
    type: 'switch',
  },
  button: {
    type: 'button',
    props: {
      onClick: () => form.validate(),
    },
    slots: {
      default: () => 'Submit',
    },
  },
})
</script>

<template>
  <nu-form :is="form" />
</template>
