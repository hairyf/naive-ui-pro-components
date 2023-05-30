import { ref } from 'vue-demi'

export function useAsyncCallback<T extends (...args: any[]) => any>(fun: T) {
  const error = ref()
  const loading = ref(false)
  function execute(...args: any[]) {
    const result = fun(...args)
    if (result instanceof Promise) {
      loading.value = true
      result.finally(() => loading.value = false).catch()
    }
    return result
  }

  return [execute as unknown as T, loading, error] as const
}
