import type { NestedRefs } from '@naive-ui-pro/utils'
import type { ButtonProps } from 'naive-ui'
import type { VNodeChild } from 'vue'

export interface ControlProps<T extends any[] = any[]> extends NestedRefs<Omit<ButtonProps, 'onClick' | 'loading' | 'disabled'>> {
  helper?: (...args: T) => Promise<void> | void
  render?: string | ((...args: T) => VNodeChild)
  enable?: boolean | ((...args: T) => boolean)
  slots?: Record<string, (...args: T) => VNodeChild>
  custom?: (...args: T) => VNodeChild
}

export interface ControlInstance<T extends any[]> {
  (...args: T): VNodeChild
}

export interface ControlParsedProps extends ButtonProps {
  slots?: Record<string, () => any>
  custom?: (...args:any[]) => VNodeChild | VNodeChild[]
}