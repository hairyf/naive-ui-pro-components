import { NLoadingBarProvider, loadingBarProviderProps, useLoadingBar } from 'naive-ui'
import { defineComponent } from 'vue'

export const NInstallLoadingBar = defineComponent((_, { slots }) => {
  window.$loadingBar = useLoadingBar()
  return slots.default
})

export const NGlobalLoadingBar = defineComponent({
  name: 'NGlobalLoadingBar',
  props: loadingBarProviderProps,
  setup(props, { slots }) {
    return () => <NLoadingBarProvider {...props}>
      <NInstallLoadingBar>
        {slots}
      </NInstallLoadingBar>
    </NLoadingBarProvider>
  },
})
