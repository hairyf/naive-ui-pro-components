import { createDefu } from 'defu'

export function noop() { }

export function isFunction(val: any): val is Function {
  return typeof val === 'function'
}

export function isUndefined(val: any): val is undefined {
  return typeof val === 'undefined'
}

export function toArray<T>(val: T | T[]): T[] {
  return Array.isArray(val) ? val : [val].filter(Boolean)
}

export const defu = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) && Array.isArray(value)) {
    obj[key] = value
    return true
  }
})

export function final<T>(value: ((...args: any[]) => T) | T, ...params: any[]) {
  return isFunction(value) ? value(...params) : value
}

export function isObject(val: any): val is Record<any, any> {
  return val !== null && typeof val === 'object' && !Array.isArray(val)
}

export function isArray<T>(val: any): val is T[] {
  return Array.isArray(val)
}

export function clone<T>(value: T): T {
  if (isFunction(value))
    return Object.assign((...args: any) => value(...args), value)
  if (Array.isArray(value))
    return [...value] as any
  if (typeof value !== 'object' || value === null)
    return value
  return { ...value }
}

export function cloneDeep<T>(value: T): T {
  if (isFunction(value))
    return Object.assign((...args: any) => value(...args), cloneDeep({ ...value }))
  if (isArray(value))
    return value.map(cloneDeep) as any
  if (!isObject(value) || value === null)
    return value
  const keys = Object.entries(value)
  const entries = keys.map(([key, value]) => [key, cloneDeep(value)])
  return Object.fromEntries(entries)
}
