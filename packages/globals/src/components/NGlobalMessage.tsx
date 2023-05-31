import type { XMessageApiInjection } from 'naive-ui'
import { NMessageProvider, useMessage } from 'naive-ui'

import { defineComponent } from 'vue-demi'
import { createDeferred, packer } from '../utils'

export const NGlobalMessage = defineComponent({
  name: 'NGlobalMessage',
  setup(props, { slots }) {
    const Install = defineComponent(() => {
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
      return () => null
    })
    return () => <NMessageProvider>
      <Install />
      {slots.default?.()}
    </NMessageProvider>
  },
})
