import type { XDialogProviderInst } from 'naive-ui'
import { dialogProviderProps, NDialogProvider, useDialog } from 'naive-ui'
import { defineComponent } from 'vue'
import { createDeferred, packer } from '../utils'

export const NuInstallDialog = defineComponent((_, { slots }) => {
  window.$dialog = useDialog() as XDialogProviderInst
  packer(
    window.$dialog,
    ['create', 'success', 'warning', 'error', 'info'],
    (source, key) => {
      window.$dialog[key] = function (options) {
        const deferred = createDeferred()
        const inst = source({
          ...options,
          onPositiveClick(e) {
            const result = options.onPositiveClick?.(e)
            if (result instanceof Promise) {
              inst.loading = true
              result
                .finally(() => inst.loading = false)
                .then(deferred.resolve)
                .catch(deferred.reject)
            }
            else {
              deferred.resolve(result as any)
            }
            return result
          },
          onClose() {
            deferred.reject()
            options.onClose?.()
          },
          onNegativeClick(e) {
            deferred.reject()
            options.onNegativeClick?.(e)
          },
          onMaskClick(e) {
            deferred.reject()
            options.onMaskClick?.(e)
          },
        })
        return Object.assign(deferred, inst)
      }
    },
  )
  return slots.default as any
})

export const NuGlobalDialog = defineComponent({
  name: 'NuGlobalDialog',
  props: dialogProviderProps,
  setup(props, { slots }) {
    return () => (
      <NDialogProvider {...props}>
        <NuInstallDialog>
          {slots}
        </NuInstallDialog>
      </NDialogProvider>
    )
  },
})
