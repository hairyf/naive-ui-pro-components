import type { XDialogProviderInst } from 'naive-ui'
import { NDialogProvider, useDialog } from 'naive-ui'
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
              onClose() {
                deferred.reject()
                options.onClose?.()
              },
              onNegativeClick(e) {
                deferred.reject()
                options.onNegativeClick?.(e)
              },
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
    return () => <NDialogProvider>
      <Install />
      {slots.default?.()}
    </NDialogProvider>
  },
})
