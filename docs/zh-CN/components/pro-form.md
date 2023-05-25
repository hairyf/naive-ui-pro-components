# 高级表单（n-pro-form）

> 高级表单用于快速构建表单视图，使用 pro-form 需要使用 defineForm Functions。

高级表单基于对象的函数式编程（functional programming）思想。并将表单数据抽象为一个 JavaScript 对象，通过对这个对象进行操作和封装，让表单数据具有更好的可复用性和可维护性。

<!-- demo -->

组件参数继承：

- [表单 Form - Naive UI](https://www.naiveui.com/zh-CN/light/components/form)
- [栅格 Grid - Naive UI](https://www.naiveui.com/zh-CN/light/components/grid)
- [文本输入 Input - Naive UI](https://www.naiveui.com/zh-CN/light/components/input)
- [选择器 Select - Naive UI](https://www.naiveui.com/zh-CN/light/components/select)
- [日期选择器 Date Picker - Naive UI](https://www.naiveui.com/zh-CN/light/components/date-picker)
- [按钮 Button - Naive UI](https://www.naiveui.com/zh-CN/os-theme/components/button)
- [开关 Switch - Naive UI](https://www.naiveui.com/zh-CN/light/components/switch)

## defineForm

`defineForm` 是一个高阶函数，返回一个表单对象的实例，将表单数据进行重组，具有良好的 Typescript 支持。

```ts
import { defineForm } from 'naive-ui-pro-components'

const email = ref('')

const { data, resetFields } = defineForm({
  brandNum: {
    type: 'input',
    value: '',
  },
  email: {
    type: 'input',
    value: email,
  },
  time: {
    type: 'date-picker',
    value: [] as [string, string],
  },
})
data.brandNum // string
data.email // string
data.time // string[]
```

`defineForm` 的字段通过使用 field 函数进行复用，前往[表单字段（Fields）](/zh-CN/components/pro-field)了解更多字段用法。

## Data

defineForm 返回特殊的 data、dataTrans 对象，用于处理表单数据。

### Data Object

Data 对象是对传入的字段映射相应的 value，可以对某些字段单独处理，data 只允许修改内部值，不能直接替换 data。

```ts
// 不要对 data 进行结构和重新赋值
form.data.email = '' // √
form.data = { email: '' } // x
```

### Data Transform

每个字段中存在 rules、value（default value）、type 等属性，其中 transform 可以对某个字段属性进行转换，这在提交表单的时候非常实用：

```ts
const { dataTrans } = defineForm({
  time: {
    type: 'input',
    value: [],
    transform(value: string[]) {
      return {
        start: value[0],
        end: value[1],
      }
    },
  },
})
dataTrans.start // string
dataTrans.end // string
dataTrans.time // undefined
```

## Methods

defineForm 中的所有返回的方法。

### Data Reset

form 会保存实例初始值，通过 resetFields 将表单的字段重置为初始值。

```ts
const form = defineForm({
 // ...
})

form.resetFields() // 重置所有
form.resetFields(['code']) // 重置某些字段

// resetFields 默认会对重置的字段重置校验
// 如果不需要，在第二个参数中传入 validate: false
form.resetFields(['code'], { validate: false })
```

### Form Reset

resetValidate 与 resetFields 相似，但它只会重置表单的校验状态。

```ts
const { resetFields } = defineForm({
 // ...
})

// 重置所有校验
resetValidate()
// 重置 code 字段校验
resetValidate(['code'])
```