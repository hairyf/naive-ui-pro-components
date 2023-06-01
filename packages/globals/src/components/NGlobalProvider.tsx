import { defineComponent } from 'vue'
import { NInstallProvider } from './NInstallProvider'
import { NGlobalLoadingBar } from './NGlobalLoadingBar'
import { NGlobalDialog } from './NGlobalDialog'
import { NGlobalNotification } from './NGlobalNotification'
import { NGlobalMessage } from './NGlobalMessage'

export const NGlobalProvider = defineComponent({
  name: 'NGlobalProvider',
  setup(_, { slots }) {
    return () =>
    <NInstallProvider
      install={[
        NGlobalLoadingBar,
        NGlobalDialog,
        NGlobalNotification,
        NGlobalMessage,
      ]}
    >
      {slots.default?.()}
    </NInstallProvider>
  },
})
