import { ref } from 'vue-demi'

export function useAsyncCallback<T extends (...args: any[]) => any>(fun: T) {
  const error = ref()
  const loading = ref(false)
  async function execute(...args: any[]) {
    try {
      loading.value = true
      const result = await fun(...args)
      loading.value = false
      return result
    }
    catch (error) {
      loading.value = false
      throw error
    }
  }

  return [execute as unknown as T, loading, error] as const
}
