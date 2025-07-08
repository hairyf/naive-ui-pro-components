import { NuCheckboxGroup } from '@naive-ultra/checkbox'
import { NuRadioGroup } from '@naive-ultra/radio'
import { NAutoComplete, NButton, NCascader, NDatePicker, NInput, NInputNumber, NMention, NRate, NSelect, NSlider, NSwitch, NTimePicker } from 'naive-ui'

export const FieldComponents: Record<string, any> = {
  'date-picker': NDatePicker,
  'select': NSelect,
  'auto-complete': NAutoComplete,
  'cascader': NCascader,
  'input': NInput,
  'input-number': NInputNumber,
  'button': NButton,
  'switch': NSwitch,
  'checkbox-group': NuCheckboxGroup,
  'radio-group': NuRadioGroup,
  'rate': NRate,
  'slider': NSlider,
  'time-picker': NTimePicker,
  'mention': NMention,
}
