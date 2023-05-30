import type { DialogOptions, MessageOptions, MessageType } from 'naive-ui'
import type { VNodeChild } from 'vue'

declare module 'naive-ui' {
  type XDialogReactive = {
    readonly key: string
    readonly destroy: () => void
  } & DialogOptions & Promise<void>

  export interface XDialogApiInjection {
    destroyAll: () => void
    create: (options: DialogOptions) => XDialogReactive
    success: (options: DialogOptions) => XDialogReactive
    warning: (options: DialogOptions) => XDialogReactive
    error: (options: DialogOptions) => XDialogReactive
    info: (options: DialogOptions) => XDialogReactive
  }

  export type XDialogProviderInst = XDialogApiInjection

  export type ContentType = string | (() => VNodeChild)

  export interface XMessageApiInjection {
    create: (content: ContentType, options?: MessageOptions) => XMessageReactive
    info: (content: ContentType, options?: MessageOptions) => XMessageReactive
    success: (content: ContentType, options?: MessageOptions) => XMessageReactive
    warning: (content: ContentType, options?: MessageOptions) => XMessageReactive
    error: (content: ContentType, options?: MessageOptions) => XMessageReactive
    loading: (content: ContentType, options?: MessageOptions) => XMessageReactive
    destroyAll: () => void
  }

  export type XMessageReactive = {
    content?: ContentType
    duration?: number
    closable?: boolean
    keepAliveOnHover?: boolean
    type: MessageType
    icon?: () => VNodeChild
    showIcon?: boolean
    onClose?: () => void
    destroy: () => void
  } & Promise<void>

  export type XMessageProviderInst = XMessageApiInjection

}

export { }
