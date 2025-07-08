# Ultra Checkbox

以配置项创建复选框组。

<demo title="基础用法" expand src="./demo/basic.vue" />

<demo title="事件" src="./demo/events.vue" />

<demo title="手动 focus & blur 项" src="./demo/focus-blur.vue" />

## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| options | `CheckboxMixedOption[]` | `-` | 复选框配置 |
| space | `SpaceProps` | `-` | 间隔配置 |

> 更多参数参考 [checkbox-group](https://www.naiveui.com/zh-CN/os-theme/components/checkbox#CheckboxGroup-Props)。

### CheckboxOption Properties

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| ref | `CheckboxInst \| Ref<CheckboxInst>` | 用于绑定某个 checkbox 实例 |
| slots | `Record<string, () => JSX.Element \| undefined>` | Checkbox Slots |

> 更多参数参考 [checkbox](https://www.naiveui.com/zh-CN/os-theme/components/checkbox#Checkbox-Props)。
