import { XMessageApiInjection, messageProviderProps } from 'naive-ui'
import { NMessageProvider, useMessage } from 'naive-ui'

import { defineComponent } from 'vue'
import { createDeferred, packer } from '../utils'

export const NInstallMessage = defineComponent((_, {slots}) => {
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

export const NGlobalMessage = defineComponent({
  name: 'NGlobalMessage',
  props: messageProviderProps,
  setup(props, { slots }) {
    return () => <NMessageProvider {...props}>
      <NInstallMessage>
        {slots}
      </NInstallMessage>
    </NMessageProvider>
  },
})
