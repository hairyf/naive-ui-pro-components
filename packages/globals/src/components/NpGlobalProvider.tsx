import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import type { DialogProviderProps, LoadingBarProviderProps, MessageProviderProps, NotificationProviderProps } from 'naive-ui'
import { NpInstallProvider } from './NpInstallProvider'
import { NpGlobalLoadingBar } from './NpGlobalLoadingBar'
import { NpGlobalDialog } from './NpGlobalDialog'
import { NpGlobalNotification } from './NpGlobalNotification'
import { NpGlobalMessage } from './NpGlobalMessage'

export const NpGlobalProvider = defineComponent({
  name: 'NpGlobalProvider',
  props: {
    message: Object as PropType<MessageProviderProps>,
    loaderBar: Object as PropType<LoadingBarProviderProps>,
    dialog: Object as PropType<DialogProviderProps>,
    notification: Object as PropType<NotificationProviderProps>,
  },
  setup(p, { slots }) {
    return () =>
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
  },
})
