import type { XMessageApiInjection } from 'naive-ui'
import { messageProviderProps, NMessageProvider, useMessage } from 'naive-ui'

import { defineComponent } from 'vue'
import { createDeferred, packer } from '../utils'

export const NuInstallMessage = defineComponent((props, { slots }) => {
  window.$message = useMessage() as XMessageApiInjection
  packer(
    window.$message,
    ['create', 'success', 'warning', 'error', 'info'],
    (source, key) => {
      window.$message[key] = function (content, options) {
        const deferred = createDeferred()
        const ins = source(content, {
          ...options,
          onAfterLeave() {
            options?.onAfterLeave?.()
            deferred.resolve()
          },
        })
        return Object.assign(deferred, ins)
      }
    },
  )
  return slots.default as any as any
})

export const NuGlobalMessage = defineComponent({
  name: 'NuGlobalMessage',
  props: messageProviderProps,
  setup(props, { slots }) {
    return () => (
      <NMessageProvider {...props}>
        <NuInstallMessage>
          {slots}
        </NuInstallMessage>
      </NMessageProvider>
    )
  },
})
