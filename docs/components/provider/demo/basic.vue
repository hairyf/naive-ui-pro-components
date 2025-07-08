<script lang="ts" setup>
import { defineActions } from 'naive-ultra'

function delay(time: number) {
  return new Promise<void>(resolve => setTimeout(() => resolve(), time))
}

const actions = defineActions([
  {
    render: 'Message',
    type: 'default',
    helper: () => $message.success('Message'),
  },
  {
    render: 'Dialog',
    type: 'default',
    helper: () => $dialog.warning({
      title: 'Async',
      content: 'Click, countdown 3 seconds',
      positiveText: 'Confirm',
      onPositiveClick: async () => {
        await delay(3000)
      },
    }),
  },
  {
    render: 'Notification',
    type: 'default',
    helper: () => {
      $notification.error({
        title: 'Satisfaction',
        content: `I cant get no satisfaction\nI cant get no satisfaction\nCause I try and I try and I try and I try\nI cant get no, I cant get no`,
        meta: '2019-5-27 15:11',
      })
    },
  },
  {
    render: 'loadingBar',
    type: 'default',
    helper: () => {
      $loadingBar.start()
      setTimeout(() => $loadingBar.finish(), 3000)
    },
  },
])
</script>

<template>
  <np-actions :is="actions" />
</template>
