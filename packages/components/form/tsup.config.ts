import { defineBuildConfig } from 'tsup-define'

export default defineBuildConfig({
  format: ['cjs', 'esm', 'iife', 'iife-min'],
  entry: ['src/index.ts'],
  name: 'pro-form',
  globalName: 'NaiveProForm',
  globals: {
    'naive-ui': 'naive',
    'vue': 'Vue',
  },
  clean: true,
})
