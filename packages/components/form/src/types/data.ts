import type { UnwrapRef } from 'vue'

interface Field<T> { value: T }

export type Data<T = Record<string, any>> = {
  [K in keyof T as K]: UnwrapRef<FieldValue<T[K]>>;
} & Record<string, any>

export type TransformData<T extends Record<string, any> = Record<string, any>> = OmitTransformData<T> & Transform<PickTransform<T>>

type Transform<T extends Record<string, any>> = Flatten<{ [K in keyof T]: ReturnType<NonNullable<T[K]['transform']>> }>

type OmitTransformData<T> = {
  [K in keyof T as FilterOmitTransformKeys<T, K>]: UnwrapRef<FieldValue<T[K]>>;
}

type PickTransform<T> = {
  [K in keyof T as FilterPickTransformKeys<T, K>]: T[K];
}

type FieldValue<T> = T extends Field<infer V> ? V : string
type FilterOmitTransformKeys<T, K extends keyof T> = T[K] extends FieldTransform<any, object> ? never : K
type FilterPickTransformKeys<T, K extends keyof T> = T[K] extends FieldTransform<any, object> ? K : never

interface FieldTransform<V, R> {
  transform?: (value: V, key: string) => R
}

type UnionToIntersection<U>
  = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void)
    ? I
    : never

type Flatten<T> = {
  [K in keyof UnionToIntersection<T[keyof T]>]:
  UnionToIntersection<T[keyof T]>[K]
}
