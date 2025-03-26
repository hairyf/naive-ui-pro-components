# ProRadio

Creates a group of radio buttons based on configuration options.

<demo title="Basic Usage" :expand="true" src="./demo/basic.vue" />

<demo title="Button Group" :expand="true" src="./demo/buttons.vue" desc="Sometimes using buttons can be more elegant." />

<demo title="Sizes" :expand="true" src="./demo/sizes.vue" desc="Choose whichever size you prefer." />

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | `CheckboxMixedOption[]` | `-` | Radio button configuration options |
| space | `SpaceProps` | `-` | Spacing configuration |
| type | `'default' \| 'button'` | `-` | Type of radio button group |

> For more parameters, refer to [radio-group](https://www.naiveui.com/zh-CN/os-theme/components/radio#RadioGroup-Props).

### RadioOption Properties

| Name | Type | Description |
| --- | --- | --- |
| slots | `Record<string, () => JSX.Element \| undefined>` | Radio Slots |

> For more parameters, refer to [radio, radio-button](https://www.naiveui.com/zh-CN/os-theme/components/radio#Radio-Props,-RadioButton-Props).
