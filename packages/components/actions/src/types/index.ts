import type { NestedRefs } from '@naive-ultra/utils'
import type { ButtonProps } from 'naive-ui'
import type { VNodeChild } from 'vue'

export interface ActionsProps<T extends any[] = any[]> extends NestedRefs<Omit<ButtonProps, 'onClick' | 'loading' | 'disabled'>> {
  helper?: (...args: T) => Promise<void> | void
  render?: string | ((...args: T) => VNodeChild)
  enable?: boolean | ((...args: T) => boolean)
  slots?: Record<string, (...args: T) => VNodeChild>
  custom?: (...args: T) => VNodeChild
}

export interface ActionsInstance<T extends any[]> {
  (...args: T): VNodeChild
}

export interface ActionsParsedProps extends ButtonProps {
  slots?: Record<string, () => any>
  custom?: (...args: any[]) => VNodeChild | VNodeChild[]
}
