<template>
  <component :is="controls" />
</template>

<script lang="ts" setup>
import { useControls } from 'naive-ui-pro-components'

function delay(time: number) {
  return new Promise<void>(resolve => setTimeout(() => resolve(), time))
}

const controls = useControls([
  {
    render: 'Message',
    type: 'default',
    helper: () => $message.success('Message'),
  },
  {
    render: 'Dialog',
    type: 'default',
    helper: () => $dialog.warning({
      title: '异步',
      content: '点击，倒计时 3 秒',
      positiveText: '确认',
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
        content: `I cant get no satisfaction
I cant get no satisfaction
Cause I try and I try and I try and I try
I cant get no, I cant get no`,
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
