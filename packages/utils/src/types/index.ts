import type { Ref } from 'vue-demi'

export type NestedRefs<T> = { [K in keyof T]: Ref<T[K]> | T[K] } & Record<string, any>
