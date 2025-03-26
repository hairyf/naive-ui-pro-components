import type { App } from 'vue'
import { NpCheckboxGroup } from '@naiveui-pro/checkbox'
import { NpControls } from '@naiveui-pro/controls'
import { NpForm } from '@naiveui-pro/form'
import { NpGlobalDialog, NpGlobalMessage, NpGlobalNotification, NpGlobalProvider, NpInstallProvider } from '@naiveui-pro/globals'
import { NpRadioGroup } from '@naiveui-pro/radio'
import { NpTable } from '@naiveui-pro/table'

export * from '@naiveui-pro/checkbox'
export * from '@naiveui-pro/controls'
export * from '@naiveui-pro/form'
export * from '@naiveui-pro/globals'
export * from '@naiveui-pro/radio'
export * from '@naiveui-pro/table'

function install(app: App): void {
  app.component('NpForm', NpForm)
  app.component('NpTable', NpTable)
  app.component('NpControls', NpControls)
  app.component('NpRadioGroup', NpRadioGroup)
  app.component('NpCheckboxGroup', NpCheckboxGroup)
  app.component('NpGlobalProvider', NpGlobalProvider)
  app.component('NpGlobalDialog', NpGlobalDialog)
  app.component('NpGlobalMessage', NpGlobalMessage)
  app.component('NpGlobalNotification', NpGlobalNotification)
  app.component('NpInstallProvider', NpInstallProvider)
}

export { install }

export default install
