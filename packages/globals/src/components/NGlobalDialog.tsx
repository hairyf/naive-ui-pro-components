import type { XDialogProviderInst } from 'naive-ui'
import { NLoadingBarProvider, useDialog } from 'naive-ui'
import { defineComponent } from 'vue'
import { createDeferred, packer } from '../utils'

export const NGlobalDialog = defineComponent({
  name: 'NGlobalDialog',
  setup(props, { slots }) {
    const Install = defineComponent(() => {
      window.$dialog = useDialog() as XDialogProviderInst
      packer(
        window.$dialog, ['create', 'success', 'warning', 'error', 'info'],
        (source, key) => {
          window.$dialog[key] = function (options) {
            const deferred = createDeferred()
            const inst = source({
              ...options,
              onPositiveClick,
            })
            async function onPositiveClick(e: any) {
              inst.loading = true
              try {
                await options.onPositiveClick?.(e)
                deferred.resolve()
              }
              catch (error) {
                deferred.reject()
              }
            }
            deferred.finally(() => inst.loading = false)
            return Object.assign(deferred, inst)
          }
        },
      )
      return () => null
    })
    return () => <NLoadingBarProvider>
      <Install />
      {slots.default?.()}
    </NLoadingBarProvider>
  },
})
