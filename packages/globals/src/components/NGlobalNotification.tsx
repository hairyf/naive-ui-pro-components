import { NNotificationProvider, useNotification } from 'naive-ui'
import { defineComponent } from 'vue-demi'

export const NGlobalNotification = defineComponent({
  name: 'NGlobalNotification',
  setup(props, { slots }) {
    const Install = defineComponent(() => {
      window.$notification = useNotification()
      return () => null
    })
    return () => <NNotificationProvider>
      <Install />
      {slots.default?.()}
    </NNotificationProvider>
  },
})
