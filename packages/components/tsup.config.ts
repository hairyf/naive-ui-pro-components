import { defineBuildConfig } from '@naive-ui/config'

export default defineBuildConfig({
  format: ['cjs', 'esm', 'iife', 'iife-min'],
  entry: ['src/index.ts'],
  name: 'naive-ui-pro-components',
  globalName: 'NaiveProComponents',
  globals: {
    vue: 'Vue',
  },
  clean: true,
  dts: true,
})
