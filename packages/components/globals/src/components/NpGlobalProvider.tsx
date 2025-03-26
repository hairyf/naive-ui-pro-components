import type { DialogProviderProps, LoadingBarProviderProps, MessageProviderProps, NotificationProviderProps } from 'naive-ui'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { NpGlobalDialog } from './NpGlobalDialog'
import { NpGlobalLoadingBar } from './NpGlobalLoadingBar'
import { NpGlobalMessage } from './NpGlobalMessage'
import { NpGlobalNotification } from './NpGlobalNotification'
import { NpInstallProvider } from './NpInstallProvider'

export const NpGlobalProvider = defineComponent({
  name: 'NpGlobalProvider',
  props: {
    message: Object as PropType<MessageProviderProps>,
    loaderBar: Object as PropType<LoadingBarProviderProps>,
    dialog: Object as PropType<DialogProviderProps>,
    notification: Object as PropType<NotificationProviderProps>,
  },
  setup(p, { slots }) {
    return () => (
      <NpInstallProvider
        install={[
          { component: NpGlobalLoadingBar, props: p.loaderBar },
          { component: NpGlobalDialog, props: p.dialog },
          { component: NpGlobalNotification, props: p.notification },
          { component: NpGlobalMessage, props: p.message },
        ]}
      >
        {slots.default?.()}
      </NpInstallProvider>
    )
  },
})
