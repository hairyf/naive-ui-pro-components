import { NNotificationProvider, notificationProviderProps, useNotification } from 'naive-ui'
import { defineComponent } from 'vue'


export const NInstallNotification = defineComponent((_, {slots}) => {
  window.$notification = useNotification()
  return slots.default
})

export const NGlobalNotification = defineComponent({
  name: 'NGlobalNotification',
  props: notificationProviderProps,
  setup(props, { slots }) {
    return () => <NNotificationProvider {...props}>
      <NInstallNotification>
        {slots}
      </NInstallNotification>
    </NNotificationProvider>
  },
})
