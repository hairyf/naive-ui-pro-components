# ProRadio

以配置项创建单选框组。

<demo twoslash title="基础用法" expand src="./demo/basic.vue" />

<demo twoslash title="按钮组" expand src="./demo/buttons.vue" description="有的时候用按钮显得更优雅一点。" />

<demo twoslash title="尺寸" expand src="./demo/sizes.vue" description="任君挑选。" />

## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| options | `CheckboxMixedOption[]` | `-` | 复选框配置 |
| space | `SpaceProps` | `-` | 间隔配置 |
| type | `'default' \| 'button'` | `-` | 单选组类型 |

> 更多参数参考 [radio-group](https://www.naiveui.com/zh-CN/os-theme/components/radio#RadioGroup-Props)。

### RadioOption Properties

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| slots | `Record<string, () => JSX.Element \| undefined>` | Radio Slots |

> 更多参数参考 [radio, radio-button](https://www.naiveui.com/zh-CN/os-theme/components/radio#Radio-Props,-RadioButton-Props)。
