import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import type { DialogProviderProps, LoadingBarProviderProps, MessageProviderProps, NotificationProviderProps } from 'naive-ui'
import { NInstallProvider } from './NInstallProvider'
import { NGlobalLoadingBar } from './NGlobalLoadingBar'
import { NGlobalDialog } from './NGlobalDialog'
import { NGlobalNotification } from './NGlobalNotification'
import { NGlobalMessage } from './NGlobalMessage'

export const NGlobalProvider = defineComponent({
  name: 'NGlobalProvider',
  props: {
    message: Object as PropType<MessageProviderProps>,
    loaderBar: Object as PropType<LoadingBarProviderProps>,
    dialog: Object as PropType<DialogProviderProps>,
    notification: Object as PropType<NotificationProviderProps>,
  },
  setup(p, { slots }) {
    return () =>
      <NInstallProvider
        install={[
          { component: NGlobalLoadingBar, props: p.loaderBar },
          { component: NGlobalDialog, props: p.dialog },
          { component: NGlobalNotification, props: p.notification },
          { component: NGlobalMessage, props: p.message },
        ]}
      >
        {slots.default?.()}
      </NInstallProvider>
  },
})
