// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'app',
    vue: true,
  },
  {
    rules: {
      'ts/no-use-before-define': 'off',
      'no-alert': 'off',
    },
  },
)
