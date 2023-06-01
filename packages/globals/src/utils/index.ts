export function packer<T, K extends keyof T>(target: T, keys: K[], pack: (source: T[K], key: K) => void) {
  for (const key of keys) {
    const source = target[key]
    pack(source, key)
  }
}

export type Deferred<T = void> = Promise<T> & { resolve: (value: T) => void; reject: () => void }

export function createDeferred<T = void>(): Deferred<T> {
  let resolve: any, reject: any

  const promise = new Promise<any>((_resolve, _reject) => {
    resolve = _resolve
    reject = _reject
  }) as unknown as any

  promise.resolve = (v: any) => {
    resolve(v)
    return promise
  }
  promise.reject = reject

  return promise
}
