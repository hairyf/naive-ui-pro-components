<template>
  <n-pro-form :instance="form" />
  <pre>{{ JSON.stringify(form.dataTrans, null, 2) }}</pre>
</template>

<script lang="ts" setup>
const form = defineForm({
  time: {
    type: 'date-picker',
    props: { type: 'datetimerange', clearable: true },
    value: null as null | string[],
    transform(value) {
      return {
        startAt: value?.[0] ?? null,
        endAt: value?.[1] ?? null,
      }
    },
  },
})
</script>
