# ProCheckbox

Creates a group of checkboxes based on configuration options.

<demo twoslash title="Basic Usage" expand src="./demo/basic.vue" />

<demo twoslash title="Events" src="./demo/events.vue" />

<demo twoslash title="Manually Focus & Blur Items" src="./demo/focus-blur.vue" />

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | `CheckboxMixedOption[]` | `-` | Checkbox configuration options |
| space | `SpaceProps` | `-` | Spacing configuration |

> For more parameters, refer to [checkbox-group](https://www.naiveui.com/zh-CN/os-theme/components/checkbox#CheckboxGroup-Props).

### CheckboxOption Properties

| Name | Type | Description |
| --- | --- | --- |
| ref | `CheckboxInst \| Ref<CheckboxInst>` | Used to bind a checkbox instance |
| slots | `Record<string, () => JSX.Element \| undefined>` | Checkbox Slots |

> For more parameters, refer to [checkbox](https://www.naiveui.com/zh-CN/os-theme/components/checkbox#Checkbox-Props).
