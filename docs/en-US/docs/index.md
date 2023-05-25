# pro-components

Pro Components is a collection of advanced components developed based on Naive UI. It provides higher levels of abstraction and encapsulation, out-of-the-box usability, and significantly improves the efficiency of creating CRUD pages, focusing on page development.

## Features

- [pro-feedbacks](/)
- [pro-form](/)
- [pro-toolbars](/)
- [pro-table](/)
- [pro-controls](/)
- developing...

## Installation

Each component in pro-components is a separate package. You can also install the package `naive-ui-pro-components` to use all the components.

```sh
pnpm add @naive-ui/pro-form
pnpm add @naive-ui/pro-table

# or

pnpm add naive-ui-pro-components
```

## Using in a project

```vue
<script lang="ts" setup>
import { defineForm, field } from 'naive-ui-pro-components'

const email = ref('')

const form = defineForm({
  userName: {
    type: 'input',
    placeholder: 'please enter',
  },
  email: {
    type: 'input',
    value: email,
    span: 12,
  },
  // Use field function to gain additional abilities
  password: field({
    type: 'input',
    rules: [/* ... */],
    props: { type: 'password' },
    value: '',
    span: 12,
  })
    .preventAutofill(),
})
</script>

<template>
  <pro-form :instance="form" />
</template>
```