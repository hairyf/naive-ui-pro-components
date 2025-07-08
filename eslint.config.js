// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'app',
    vue: true,
  },
  {
    rules: {
      'vue/component-name-in-template-casing': 'off',
      'ts/no-use-before-define': 'off',
      'no-alert': 'off',
      'prefer-promise-reject-errors': 'off',
    },
    files: ['!**/*.md'],
  },
)
