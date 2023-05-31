import { defineBuildConfig } from '@naive-ui-pro/config'

export default defineBuildConfig({
  format: ['cjs', 'esm', 'iife', 'iife-min'],
  entry: ['src/index.ts'],
  name: 'pro-utils',
  globalName: 'NaiveProUtils',
  globals: {
    vue: 'Vue',
  },
  clean: true,
  dts: true,
})
