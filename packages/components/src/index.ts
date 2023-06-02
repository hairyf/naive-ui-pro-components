import type { App } from 'vue'
import { NProForm } from '@naive-ui-pro/form'
import { NProTable } from '@naive-ui-pro/table'
import { NProRadio, NProRadioGroup } from '@naive-ui-pro/radio'
import { NGlobalDialog, NGlobalMessage, NGlobalNotification, NGlobalProvider, NInstallProvider } from '@naive-ui-pro/globals'

export * from '@naive-ui-pro/form'
export * from '@naive-ui-pro/controls'
export * from '@naive-ui-pro/table'
export * from '@naive-ui-pro/globals'

function install(app: App): void {
  app.component('NProForm', NProForm)
  app.component('NProTable', NProTable)
  app.component('NProRadio', NProRadio)
  app.component('NProRadioGroup', NProRadioGroup)
  app.component('NGlobalProvider', NGlobalProvider)
  app.component('NGlobalDialog', NGlobalDialog)
  app.component('NGlobalMessage', NGlobalMessage)
  app.component('NGlobalNotification', NGlobalNotification)
  app.component('NInstallProvider', NInstallProvider)
}

export { install }

export default install
