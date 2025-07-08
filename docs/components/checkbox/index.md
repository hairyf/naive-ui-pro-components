# Ultra Checkbox

Create a checkbox group from configuration options.

<demo title="Basic Usage" expand src="./demo/basic.vue" />

<demo title="Events" src="./demo/events.vue" />

<demo title="Manual focus & blur" src="./demo/focus-blur.vue" />

## Props

| Name    | Type                  | Default | Description         |
| ------- | --------------------- | ------- | ------------------- |
| options | `CheckboxMixedOption[]` | `-`     | Checkbox options    |
| space   | `SpaceProps`          | `-`     | Spacing config      |

> For more parameters, see [checkbox-group](https://www.naiveui.com/en-US/os-theme/components/checkbox#CheckboxGroup-Props).

### CheckboxOption Properties

| Name  | Type                                 | Description                |
| ----- | ------------------------------------ | -------------------------- |
| ref   | `CheckboxInst \| Ref<CheckboxInst>`   | Bind a specific checkbox instance |
| slots | `Record<string, () => JSX.Element \| undefined>` | Checkbox Slots |

> For more parameters, see [checkbox](https://www.naiveui.com/en-US/os-theme/components/checkbox#Checkbox-Props).
