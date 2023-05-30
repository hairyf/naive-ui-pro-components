import { defineComponent } from 'vue'
import { NInstallProvider } from './NInstallProvider'
import { NGlobalLoadingBar } from './NGlobalLoadingBar'
import { NGlobalDialog } from './NGlobalDialog'
import { NGlobalNotification } from './NGlobalNotification'
import { NGlobalMessage } from './NGlobalMessage'

export const NGlobals = defineComponent({
  name: 'NGlobals',
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
