import { defineBuildConfig } from '@naive-ui/config'

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
  dts: true,
})
