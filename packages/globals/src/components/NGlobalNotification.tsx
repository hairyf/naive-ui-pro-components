import { NLoadingBarProvider, useNotification } from 'naive-ui'
import { defineComponent } from 'vue'

export const NGlobalNotification = defineComponent({
  name: 'NGlobalNotification',
  setup(props, { slots }) {
    const Install = defineComponent(() => {
      window.$notification = useNotification()
      return () => null
    })
    return () => <NLoadingBarProvider>
      <Install />
      {slots.default?.()}
    </NLoadingBarProvider>
  },
})
