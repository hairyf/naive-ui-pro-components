import type { Field, FieldConfig, FieldConfigFn } from '../types'
import { clone as _clone, cloneDeep as _cloneDeep, defu, final, isFunction, toArray } from '@naive-ultra/utils'
import { unref } from 'vue'

export function field<V = any, T = unknown>(item: FieldConfig<V, T>) {
  const target = encase(item)

  function config(config: FieldConfig<V, T>) {
    if (isFunction(config))
      return field(ctx => defu((config as any)(ctx), { ...final(item, ctx) }))
    if (isFunction(item))
      return field((c => defu(config, { ...final(item, c) })) as FieldConfig<V, T>)
    return field(defu(config, { ...item }) as FieldConfig<V, T>)
  }

  target.config = config as unknown as FieldConfigFn<V, T>

  return target
}

function encase<V, T>(config: FieldConfig<V, T>) {
  const target = config as Field<V, T>

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
    return target.config({ rules: [], label: '' })
  }
  function preventRequired() {
    return target.config((config) => {
      const source = final(target, config)
      const rules = toArray(unref(source.rules) || [])
        .filter(v => !v?.required)
      return { ...source, rules }
    })
  }

  function preventAutofill() {
    return target.config({
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
