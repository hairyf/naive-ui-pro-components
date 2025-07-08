import { defineBuildConfig } from 'tsup-config'

export default defineBuildConfig({
  format: ['cjs', 'esm', 'iife', 'iife-min'],
  entry: ['src/index.ts'],
  name: 'ultra-globals',
  globalName: 'NaiveUltraGlobals',
  globals: {
    vue: 'Vue',
  },
  clean: true,
})
