import type { XMessageApiInjection } from 'naive-ui'
import { NMessageProvider, messageProviderProps, useMessage } from 'naive-ui'

import { defineComponent } from 'vue'
import { createDeferred, packer } from '../utils'

export const NpInstallMessage = defineComponent((_, { slots }) => {
  window.$message = useMessage() as XMessageApiInjection
  packer(
    window.$message, ['create', 'success', 'warning', 'error', 'info'],
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
  return slots.default
})

export const NpGlobalMessage = defineComponent({
  name: 'NpGlobalMessage',
  props: messageProviderProps,
  setup(props, { slots }) {
    return () => <NMessageProvider {...props}>
      <NpInstallMessage>
        {slots}
      </NpInstallMessage>
    </NMessageProvider>
  },
})
