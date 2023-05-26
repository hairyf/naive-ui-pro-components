const Globals = require('esbuild-plugin-globals')

exports.defineBuildConfig = (options) => {
  const formats = options?.format || ['cjs', 'esm']
  const iifeMin = formats.findIndex(v => v === 'iife-min')

  formats.splice(iifeMin, 1)

  const configs = []

  options = {
    ...options,
    esbuildPlugins: [Globals(options?.globals), require('unplugin-vue-jsx/esbuild')()],
    outExtension({ format }) {
      return { js: `.${format}.js` }
    },
  }

  configs.push(options)

  if (iifeMin) {
    configs.push({
      ...options,
      format: 'iife',
      minify: true,
      outExtension({ format }) {
        return { js: `.${format}.min.js` }
      },
      dts: false,
    })
  }

  return configs
}
