# Form Data Transform

Data transformation is often used to preprocess form data and convert it into a format recognizable by the backend. Ultra Form has a built-in transform implementation for this, and you can get the transformed data via the `dataTrans` property of the form instance, with full TypeScript support.

<demo title="Transform Date Picker" twoslash expand src="./demo/data-transform.vue" />

Note: You need to define fields using the field function for TypeScript to correctly infer types.

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
