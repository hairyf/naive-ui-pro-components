const Globals = require('esbuild-plugin-globals')

exports.defineBuildConfig = (options) => {
  const formats = options?.format || ['cjs', 'esm']
  const iife = formats.findIndex(v => v === 'iife')
  formats.splice(iife, 1)
  const iifeMin = formats.findIndex(v => v === 'iifeMin')
  formats.splice(iifeMin, 1)

  const configs = []

  options = {
    ...options,
    external: ['vue-demi', 'naive-ui', '@vueuse/core'],
    esbuildPlugins: [require('unplugin-vue-jsx/esbuild')()],
    outExtension({ format }) {
      return { js: `.${format}.js` }
    },
  }

  configs.push(options)

  if (iife) {
    configs.push({
      ...options,
      format: 'iife',
      esbuildPlugins: [Globals(options?.globals), require('unplugin-vue-jsx/esbuild')()],
      outExtension({ format }) {
        return { js: `.${format}.js` }
      },
      dts: false,
    })
  }
  if (iifeMin) {
    configs.push({
      ...options,
      format: 'iife',
      minify: true,
      esbuildPlugins: [Globals(options?.globals), require('unplugin-vue-jsx/esbuild')()],
      outExtension({ format }) {
        return { js: `.${format}.min.js` }
      },
      dts: false,
    })
  }

  return configs
}
