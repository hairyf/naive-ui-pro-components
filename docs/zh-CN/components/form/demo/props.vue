<script lang="ts" setup>
import NProForm, { defineForm } from '@naive-ui-pro/form'

const options = [
  { label: 'Drive My Car', value: 'song1' },
  { label: 'Norwegian Wood', value: 'song2' },
  { label: 'You Won\'t See', value: 'song3', disabled: true },
]

const form = defineForm({
  song: {
    type: 'select',
    props: { options },
  },
  password: {
    type: 'input',
    props: { type: 'password' },
  },
  time: {
    type: 'date-picker',
    value: undefined as undefined | [string, string],
    props: { type: 'daterange' },
  },
})
</script>

<template>
  <n-pro-form :instance="form" />
</template>
