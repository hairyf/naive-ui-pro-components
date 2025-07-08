# Field Context

Field Context is an advanced feature in the `naive-ultra` form system, used for passing and sharing context information between form items, making it easy to implement dependencies, linkage, and dynamic validation between form items.

::: demo src="./demo/field-context.vue" title="Field Context"
The function passed to `field|config` can receive the current form instance for composing validation.
:::

## Getting and Using Field Context

In the config function of a form item or the custom render function `renderItem`, you can get the context via parameters. For example:

```ts
import { defineForm } from 'naive-ultra'

const form = defineForm({
  username: {
    label: 'Username',
    value: '',
    rules: [{ required: true, message: 'Please enter username' }],
  },
  password: field(context => ({
    type: 'input',
    label: 'Password',
    value: '',
    rules: [
      {
        validator: (rule, value) => {
          if (context.data.username === 'admin' && !value)
            return Promise.reject('Admin must set a password')
          return Promise.resolve()
        },
      },
    ],
  })),
})
```
