import type { DialogProviderProps, LoadingBarProviderProps, MessageProviderProps, NotificationProviderProps } from 'naive-ui'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { NuGlobalDialog } from './GlobalDialog'
import { NuGlobalLoadingBar } from './GlobalLoadingBar'
import { NuGlobalMessage } from './GlobalMessage'
import { NuGlobalNotification } from './GlobalNotification'
import { NuInstallProvider } from './InstallProvider'

export const NuGlobalProvider = defineComponent({
  name: 'NuGlobalProvider',
  props: {
    message: Object as PropType<MessageProviderProps>,
    loaderBar: Object as PropType<LoadingBarProviderProps>,
    dialog: Object as PropType<DialogProviderProps>,
    notification: Object as PropType<NotificationProviderProps>,
  },
  setup(p, { slots }) {
    return () => (
      <NuInstallProvider
        install={[
          { component: NuGlobalLoadingBar, props: p.loaderBar },
          { component: NuGlobalDialog, props: p.dialog },
          { component: NuGlobalNotification, props: p.notification },
          { component: NuGlobalMessage, props: p.message },
        ]}
      >
        {slots.default?.()}
      </NuInstallProvider>
    )
  },
})
