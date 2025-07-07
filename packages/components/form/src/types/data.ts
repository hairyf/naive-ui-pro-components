import type { UnwrapRef } from 'vue'

interface Field<T> { value: T }

export type Data<T = Record<string, any>> = {
  [K in keyof T as FilterReceives<T, K>]: UnwrapRef<FieldValue<T[K]>>;
} & Record<string, any>

export type TransformData<T extends Record<string, any> = Record<string, any>> = OmitTransormData<T> & Transform<PickTransorm<T>>

type Transform<T extends Record<string, any>> = Flatten<{ [K in keyof T]: ReturnType<NonNullable<T[K]['transform']>> }>

type OmitTransormData<T> = {
  [K in keyof T as FilterOmitTransormKeys<T, FilterReceives<T, K>>]: UnwrapRef<FieldValue<T[K]>>;
}

type PickTransorm<T> = {
  [K in keyof T as FilterPickTransormKeys<T, FilterReceives<T, K>>]: T[K];
}

type FieldValue<T> = T extends Field<infer V> ? V : string
type FilterOmitTransormKeys<T, K extends keyof T> = T[K] extends FieldTransform<any, any> ? never : K
type FilterPickTransormKeys<T, K extends keyof T> = T[K] extends FieldTransform<any, any> ? K : never
type FilterReceives<T, K extends keyof T> = T[K] extends { receive: false } ? never : K

interface FieldTransform<V, R> {
  transform?: (value: V, key: string) => R
}

type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void)
    ? I
    : never

type Flatten<T> = {
  [K in keyof UnionToIntersection<T[keyof T]>]:
  UnionToIntersection<T[keyof T]>[K]
}
