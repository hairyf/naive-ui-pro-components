<!-- eslint-disable ts/no-unused-expressions -->
<script lang="ts" setup>
import { defineForm, field } from 'naive-ultra'

const form = defineForm({
  time: field({
    type: 'date-picker',
    props: { type: 'datetimerange', clearable: true },
    value: null as null | string[],
    transform(value) {
      return {
        startAt: value?.[0] ?? null,
        endAt: value?.[1] ?? null,
      }
    },
  }),
})
form.data.time
form.dataTrans.startAt
form.dataTrans.endAt
</script>

<template>
  <nu-form :is="form" />
  <pre>{{ JSON.stringify(form.dataTrans, null, 2) }}</pre>
</template>
