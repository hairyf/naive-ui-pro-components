# Ultra Radio

Create a radio group from configuration options.

<demo title="Basic Usage" expand src="./demo/basic.vue" />

<demo title="Button Group" expand src="./demo/buttons.vue" description="Sometimes using buttons looks more elegant." />

<demo title="Sizes" expand src="./demo/sizes.vue" description="Choose as you like." />

## Props

| Name    | Type                  | Default | Description         |
| ------- | --------------------- | ------- | ------------------- |
| options | `CheckboxMixedOption[]` | `-`     | Radio options       |
| space   | `SpaceProps`          | `-`     | Spacing config      |
| type    | `'default' | 'button'` | `-`     | Radio group type    |

> For more parameters, see [radio-group](https://www.naiveui.com/en-US/os-theme/components/radio#RadioGroup-Props).

### RadioOption Properties

| Name  | Type                                 | Description                |
| ----- | ------------------------------------ | -------------------------- |
| slots | `Record<string, () => JSX.Element \| undefined>` | Radio Slots |

> For more parameters, see [radio, radio-button](https://www.naiveui.com/en-US/os-theme/components/radio#Radio-Props,-RadioButton-Props).
