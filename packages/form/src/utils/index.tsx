import { clone as _clone, cloneDeep as _cloneDeep, defu, final, isFunction, toArray } from '@naive-ui/utils'
import { unref } from 'vue-demi'
import type { FormItemFieldConfig, WithConfig, WithFieldConfig, WithFieldConfigExtends } from '../types'

function encase<T extends WithFieldConfigExtends>(config: WithFieldConfig<T>) {
  const target = config as FormItemFieldConfig<T>

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
    return target.withConfig((inst) => {
      const source = final(target, inst)
      const rules = toArray(unref(source.rules) || [])
        .filter(v => !v?.required)
      return { ...source, rules }
    })
  }

  function preventAutofill() {
    return target.withConfig({
      renderItem(model, config, defaultRender) {
        return <>
            <input type="text" name="user" style={{ display: 'none' }} />
            <input type="password" name="password" style={{ display: 'none' }}/>
            {defaultRender(model, config)}
          </>
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

export function field<T extends WithFieldConfigExtends>(config: WithFieldConfig<T>) {
  const target = encase(config)

  function withConfig(config: WithFieldConfig<T>) {
    if (isFunction(config))
      return field((c: any) => defu((config as any)(c), { ...final(config, c) }))
    if (isFunction(config))
      return field((c: any) => defu(config, { ...final(config, c) }))
    return field(defu(config, { ...config }))
  }

  target.withConfig = withConfig as unknown as WithConfig<T>

  return target
}
