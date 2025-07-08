# Form Data Transform

数据转换通常用于将表单数据进行预处理，并转换为后端可识别的格式，而 Ultra Form 内置 transform 实现这一点，并通过访问 form 的实例中的 `dataTrans` 获得已转换的数据，并提供一流的 TypeScript 支持。

<demo title="转换时间选择器" twoslash expand src="./demo/data-transform.vue" />

需要注意的是，你需要通过 field 函数定义字段，以便 Typescript 能够正确推断类型。

```ts
import { field } from 'naive-ultra'

const form = defineForm({
  time: field({
    type: 'date-picker',
    props: { type: 'datetimerange', clearable: true },
    value: null as null | string[],
    transform(value) {
      return {
        startAt: value?.[0] ?? null,
        endAt: value?.[1] ?? null,
      }
    },
  }),
  time2: {
    type: 'date-picker',
    props: { type: 'datetimerange', clearable: true },
    value: null as null | string[],
    transform(value) {
      return {
        startAt2: value?.[0] ?? null,
        endAt2: value?.[1] ?? null,
      }
    },
  }
})
form.dataTrans.endAt // string | null
form.dataTrans.startAt // string | null
form.dataTrans.endAt2 // any
form.dataTrans.startAt2 // any
```
