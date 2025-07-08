# Field API

The Field API is the core feature of `naive-ultra` forms, providing rich field manipulation methods. Fields created via the `field` function support chain calls, cloning, config modification, and more, making form field configuration more flexible and reusable.

::: demo src="./demo/field.vue" title="Field Basic Usage"
`field` is a descriptor object, and can be separated from the form. The `field` function can create fields with additional capabilities.
:::

::: demo src="./demo/clone.vue" title="Field Clone"
The `clone` method of a field returns a new field, avoiding value reference issues.
:::

Field configuration means you can modularize and centralize field definitions, for example in a file like fields.ts, to reduce repetitive code for similar form templates.

```ts
// fields.ts
export const statusField = field({/* ... */})
export const methodField = field({/* ... */})
export const creatorField = field({/* ... */})
export const staffNoField = field({/* ... */})
export const staffNameField = field({/* ... */})
export const phoneField = field({/* ... */})
export const deviceField = field({/* ... */})
```

## config

Attach and return a new config, supports chain calls.

```ts
const field = field({
  type: 'input',
  label: 'Username'
})

const newField = field.config({
  label: 'New Username',
  placeholder: 'Please enter username'
})
```

## clone

Shallow clone the current config, returns a new field instance.

```ts
const field = field({
  type: 'input',
  label: 'Username'
})

const clonedField = field.clone()
```

## cloneDeep

Deep clone the current config, returns a new field instance.

```ts
const field = field({
  type: 'input',
  label: 'Username',
  props: { clearable: true }
})

const deepClonedField = field.cloneDeep()
```

## preventDefault

Clears label and rules, keeps other properties.

```ts
const field = field({
  type: 'button',
  label: 'Button',
  rules: [{ required: true }]
})

const noLabelField = field.preventDefault()
```

## preventRequired

Removes required rules from rules, keeps other validation rules.

```ts
const field = field({
  type: 'input',
  label: 'Username',
  rules: [
    { required: true, message: 'Please enter username' },
    { min: 3, message: 'Username must be at least 3 characters' }
  ]
})

const noRequiredField = field.preventRequired()
// Result: only min rule remains, required rule is removed
```

## preventAutofill

Prevents browser autofill by adding a hidden input element.

```ts
const field = field({
  type: 'input',
  label: 'Password',
  props: { type: 'password' }
})

const noAutofillField = field.preventAutofill()
```

## Reference

- [Field Context](./field-context.md)
- [Field Item](./field-item.md)
