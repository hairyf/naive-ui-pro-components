import { NLoadingBarProvider, loadingBarProviderProps, useLoadingBar } from 'naive-ui'
import { defineComponent } from 'vue'

export const NpInstallLoadingBar = defineComponent((_, { slots }) => {
  window.$loadingBar = useLoadingBar()
  return slots.default
})

export const NpGlobalLoadingBar = defineComponent({
  name: 'NpGlobalLoadingBar',
  props: loadingBarProviderProps,
  setup(props, { slots }) {
    return () => <NLoadingBarProvider {...props}>
      <NpInstallLoadingBar>
        {slots}
      </NpInstallLoadingBar>
    </NLoadingBarProvider>
  },
})
