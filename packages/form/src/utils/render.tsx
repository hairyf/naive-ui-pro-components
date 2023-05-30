import type { Ref } from 'vue-demi'
import { reactive } from 'vue-demi'
import { final } from '@naive-ui/utils'
import type { FormItemConfig } from '../types'
import { FieldComponents } from '../config'

export function renderItemField(model: Ref<any>, config: FormItemConfig, key?: string): any {
  const { renderItem, ..._config } = config
  return renderItem?.(model, _config, renderDefField)
    || renderDefField(model, _config, key)
}

export function renderDefField(model: Ref<any>, config: FormItemConfig, _key?: string) {
  const placeholder = final(config.placeholder)
  const Component = config.type ? FieldComponents[config.type] : null

  if (!config.type || !Component)
    return null

  return <Component
    placeholder={placeholder}
    {...reactive(config.props || {})}
    style="width: 100%"
    v-model={[model.value, 'value']}
    >
      {{ ...config.slots }}
    </Component>
}
