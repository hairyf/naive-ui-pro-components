import { NLoadingBarProvider, useLoadingBar } from 'naive-ui'
import { defineComponent } from 'vue-demi'

export const NGlobalLoadingBar = defineComponent({
  name: 'NGlobalLoadingBar',
  setup(props, { slots }) {
    const Install = defineComponent(() => {
      window.$loadingBar = useLoadingBar()
      return () => null
    })
    return () => <NLoadingBarProvider>
      <Install />
      {slots.default?.()}
    </NLoadingBarProvider>
  },
})
