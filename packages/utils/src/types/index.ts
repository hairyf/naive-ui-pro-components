import type { Ref } from 'vue'

export type NestedRefs<T> = { [K in keyof T]: Ref<T[K]> | T[K] } & Record<string, any>
export type AnyFunction = (...args: any[]) => any
