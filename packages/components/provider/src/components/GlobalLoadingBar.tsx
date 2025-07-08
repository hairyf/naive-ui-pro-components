import { loadingBarProviderProps, NLoadingBarProvider, useLoadingBar } from 'naive-ui'
import { defineComponent } from 'vue'

export const NuInstallLoadingBar = defineComponent((_, { slots }) => {
  window.$loadingBar = useLoadingBar()
  return slots.default as any
})

export const NuGlobalLoadingBar = defineComponent({
  name: 'NuGlobalLoadingBar',
  props: loadingBarProviderProps,
  setup(props, { slots }) {
    return () => (
      <NLoadingBarProvider {...props}>
        <NuInstallLoadingBar>
          {slots}
        </NuInstallLoadingBar>
      </NLoadingBarProvider>
    )
  },
})
