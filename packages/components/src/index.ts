import type { App } from 'vue'
import { NpForm } from '@naive-ui-pro/form'
import { NpTable } from '@naive-ui-pro/table'
import { NpRadioGroup } from '@naive-ui-pro/radio'
import { NpCheckboxGroup } from '@naive-ui-pro/checkbox'
import { NGlobalDialog, NGlobalMessage, NGlobalNotification, NGlobalProvider, NInstallProvider } from '@naive-ui-pro/globals'

export * from '@naive-ui-pro/form'
export * from '@naive-ui-pro/controls'
export * from '@naive-ui-pro/table'
export * from '@naive-ui-pro/globals'
export * from '@naive-ui-pro/radio'
export * from '@naive-ui-pro/checkbox'

function install(app: App): void {
  app.component('NpForm', NpForm)
  app.component('NpTable', NpTable)
  app.component('NpRadioGroup', NpRadioGroup)
  app.component('NpCheckboxGroup', NpCheckboxGroup)
  app.component('NGlobalProvider', NGlobalProvider)
  app.component('NGlobalDialog', NGlobalDialog)
  app.component('NGlobalMessage', NGlobalMessage)
  app.component('NGlobalNotification', NGlobalNotification)
  app.component('NInstallProvider', NInstallProvider)
}

export { install }

export default install
