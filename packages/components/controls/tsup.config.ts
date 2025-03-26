import { defineBuildConfig } from 'tsup-define'

export default defineBuildConfig({
  format: ['cjs', 'esm', 'iife', 'iife-min'],
  entry: ['src/index.ts'],
  name: 'pro-controls',
  globalName: 'NaiveProControls',
  globals: {
    vue: 'Vue',
  },
  clean: true,
  dts: true,
})
