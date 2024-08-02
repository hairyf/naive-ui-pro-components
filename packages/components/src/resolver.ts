import type { ComponentResolver } from 'unplugin-vue-components/types'

function NaiveUIProResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^Np.+/))
        return { name, from: 'naive-ui-pro-components' }
      if (name.match(/^NpGlobal.+/))
        return { name, from: 'naive-ui-pro-components' }
      if (name.match(/^NpInstall.+/))
        return { name, from: 'naive-ui-pro-components' }
    },
  }
}

export default NaiveUIProResolver
