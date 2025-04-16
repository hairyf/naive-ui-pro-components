import type { ComponentResolver } from 'unplugin-vue-components/types'

function NaiveUIProResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^Np.+/))
        return { name, from: 'naive-ultra' }
    },
  }
}

export default NaiveUIProResolver
