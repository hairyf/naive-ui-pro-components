import { NNotificationProvider, notificationProviderProps, useNotification } from 'naive-ui'
import { defineComponent } from 'vue'

export const NuInstallNotification = defineComponent((_, { slots }) => {
  window.$notification = useNotification()
  return slots.default as any
})

export const NuGlobalNotification = defineComponent({
  name: 'NuGlobalNotification',
  props: notificationProviderProps,
  setup(props, { slots }) {
    return () => (
      <NNotificationProvider {...props}>
        <NuInstallNotification>
          {slots}
        </NuInstallNotification>
      </NNotificationProvider>
    )
  },
})
