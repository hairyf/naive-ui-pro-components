import type { UnwrapRef } from 'vue'

export type Data<T = Record<string, any>> = {
  [K in keyof T as FilterReceives<T, K>]: UnwrapRef<FieldValue<T[K]>>;
} & Record<string, any>

export type TransformData<T = Record<string, any>> = {
  [K in keyof T as FilterKeys<T, FilterReceives<T, K>>]: UnwrapRef<FieldValue<T[K]>>;
} & Transform<T>

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Field<T> = { value: T }
type Transform<T> = T extends { [K in keyof T]: FieldTransform<T[K], infer V> } ? V : {}
type FieldValue<T> = T extends Field<infer V> ? V : string
type FilterKeys<T, K extends keyof T> = T[K] extends { transform: Function } ? never : K
type FilterReceives<T, K extends keyof T> = T[K] extends { receive: false } ? never : K

interface FieldTransform<V, R> {
  transform?: (value: V) => R
  [key: string]: any
}
