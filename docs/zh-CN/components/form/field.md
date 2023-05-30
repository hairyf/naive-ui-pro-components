# Form Field

`field` 是一个描述对象，他可以是普通的对象，field 可以与 form 分离，并且通过 `field` 函数创建具有额外的能力。

```ts
import { defineForm, field } from 'naive-ui-pro-components'

// fields.ts
export const emailField = field({
  type: 'input',
  value: '',
  placeholder: () => glbI18n.t('placeholders.email'),
  rules: [
    {
      required: true,
      renderMessage() {
        return glbI18n.t('rules.email.empty')
      },
      trigger: 'blur',
    },
    {
      type: 'email',
      renderMessage() {
        return glbI18n.t('rules.email.format')
      },
    },
  ],
})

// xxx.vue setup
const { dataTrans } = defineForm({
  email: emailField,
})
```

## With Config

通过 `field` 创建的字段，可以使用 `withConfig` 再次覆盖配置。

```ts
export const emailField = field({
  // ...
})

const { dataTrans } = defineForm({
  email: emailField.withConfig({
    // ...
  }),
})
```

## Function With Context

`field`、`withConfig` 传入函数可接收当前使用的 form 上下文。

```ts
export const emailField = field((context) => {
  // 和其他参数组合 rules 等...
  context.data
  // 验证其他参数...
  context.validate(['password'])
  return {
    // ...
  }
})

const myEmail = emailField.withConfig((context) => {
  return {
    // 使用 withConfig 再次组合
  }
})

const { dataTrans } = defineForm({
  email: myEmail,
})
```

## Custom Renders

字段通过 `renderItem` 自定义渲染表单项，如果内容比较复杂，建议使用 tsx 编写。

```tsx
const form = defineForm({
  number: numberField,
  email: emailField.withConfig({
    renderItem(model, config) {
      // config: {label, key, type, props}
      return (
            <NInput
             placeholder={config.placeholder}
             v-model={[model.value, 'value']}
            />
      )
    },
  }),
})
```

其中第三个参数是默认渲染函数，可以通过该函数渲染默认的表单项。

```tsx
const form = defineForm({
  number: numberField,
  email: emailField.withConfig({
    renderItem(model, config, defaultRender) {
      // config: {label, key, type, props}
      return <div>
          {/* your content... */}
          {defaultRender(model, config)}
        </div>
    },
  }),
})
```

## Methods

```ts
// 将 label、rules 置空
numberField.preventDefault()
// rules 中的 required 被删除
numberField.preventRequired()
// 阻止浏览器自动填充
numberField.preventAutofill()
```

### Clone

克隆一个新 Field 该字段 value 引用将是一个新的，避免字段数据引用是同一个 value。

```ts
const filed1 = numberField.clone() // 两个字段引用 value 不相同
const filed2 = numberField.clone()
```

### Clone Deep

深度克隆一个新 Field（字段）

```ts
const filed1 = numberField.cloneDeep()
filed1.rules.push({ /* 新添加规则 */}) // 原字段不受到印象
```
