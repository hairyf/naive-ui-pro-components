import type { FormItemFieldConfig, WithConfig, WithFieldConfig } from '../types'
import { clone as _clone, cloneDeep as _cloneDeep, defu, final, isFunction, toArray } from '@naive-ultra/utils'
import { unref } from 'vue'

export function field<V, T>(item: WithFieldConfig<V, T>) {
  const target = encase(item)

  function withConfig(config: WithFieldConfig<V, T>) {
    if (isFunction(config))
      return field((c: any) => defu((config as any)(c), { ...final(item as any, c) }))
    if (isFunction(item))
      return field(((c: any) => defu(config, { ...final(item, c) })) as WithFieldConfig<V, T>)
    return field(defu(config, { ...item }) as WithFieldConfig<V, T>)
  }

  target.withConfig = withConfig as unknown as WithConfig<V, T>

  return target
}

function encase<V, T>(config: WithFieldConfig<V, T>) {
  const target = config as FormItemFieldConfig<V, T>

  function clone() {
    return _clone(target)
  }
  function cloneDeep() {
    return _cloneDeep(target)
  }
  function noop() {
    return target
  }
  function preventDefault() {
    return target.withConfig({ rules: [], label: '' })
  }
  function preventRequired() {
    return target.withConfig((config) => {
      const source = final(target, config)
      const rules = toArray(unref(source.rules) || [])
        .filter(v => !v?.required)
      return { ...source, rules }
    })
  }

  function preventAutofill() {
    return target.withConfig({
      renderItem(model, config, defaultRender) {
        return (
          <>
            <input type="text" name="user" style={{ display: 'none' }} />
            <input type="password" name="password" style={{ display: 'none' }} />
            {defaultRender(model, config)}
          </>
        )
      },
    })
  }
  target.clone = isFunction(target) ? noop : clone
  target.cloneDeep = isFunction(target) ? noop : cloneDeep
  target.preventDefault = preventDefault
  target.preventRequired = preventRequired
  target.preventAutofill = preventAutofill
  return target
}
