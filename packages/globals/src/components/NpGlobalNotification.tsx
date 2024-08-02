import { NNotificationProvider, notificationProviderProps, useNotification } from 'naive-ui'
import { defineComponent } from 'vue'

export const NpInstallNotification = defineComponent((_, { slots }) => {
  window.$notification = useNotification()
  return slots.default
})

export const NpGlobalNotification = defineComponent({
  name: 'NpGlobalNotification',
  props: notificationProviderProps,
  setup(props, { slots }) {
    return () => <NNotificationProvider {...props}>
      <NpInstallNotification>
        {slots}
      </NpInstallNotification>
    </NNotificationProvider>
  },
})
