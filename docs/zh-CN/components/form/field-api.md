# Field API

Field API 是 `naive-ultra` 表单中的核心功能，提供了丰富的字段操作方法。通过 `field` 函数创建的字段实例具有链式调用、克隆、配置修改等能力，让表单字段的配置更加灵活和可复用。

::: demo src="./demo/field.vue" title="Field 基础用法"
`field` 是一个描述对象，field 可以与 form 分离，且通过 `field` 函数创建具有额外的能力。
:::

::: demo src="./demo/clone.vue" title="字段克隆"
通过 `field` 方法返回的字段，使用 `clone` 方法可以克隆一个新的字段，避免字段数据引用是同一个 value。
:::

而字段配置化，则意味着可分离化和集中处理，你可以通过在某个文件（例如 fields.ts），集中存放具有相同属性的字段内容，这将减少类似组件表单的样板代码。

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

携带并返回新的配置，支持链式调用。

```ts
const field = field({
  type: 'input',
  label: '用户名'
})

const newField = field.config({
  label: '新用户名',
  placeholder: '请输入用户名'
})
```

## clone

浅克隆当前配置，返回一个新的 field 实例。

```ts
const field = field({
  type: 'input',
  label: '用户名'
})

const clonedField = field.clone()
```

## cloneDeep

深克隆当前配置，返回一个新的 field 实例。

```ts
const field = field({
  type: 'input',
  label: '用户名',
  props: { clearable: true }
})

const deepClonedField = field.cloneDeep()
```

## preventDefault

将 label、rules 留空，保留其他属性。

```ts
const field = field({
  type: 'button',
  label: '按钮',
  rules: [{ required: true }]
})

const noLabelField = field.preventDefault()
```

## preventRequired

去除 rules 中的 required 规则，保留其他校验规则。

```ts
const field = field({
  type: 'input',
  label: '用户名',
  rules: [
    { required: true, message: '请输入用户名' },
    { min: 3, message: '用户名至少3个字符' }
  ]
})

const noRequiredField = field.preventRequired()
// 结果：只保留 min 规则，去除 required 规则
```

## preventAutofill

阻止浏览器自动填充，通过添加隐藏的 input 元素实现。

```ts
const field = field({
  type: 'input',
  label: '密码',
  props: { type: 'password' }
})

const noAutofillField = field.preventAutofill()
```

## 参考

- [Field Context](./field-context.md)
- [Field Item](./field-item.md)
