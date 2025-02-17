import { fn } from '@storybook/test'
import { EoButton } from '../package/src'

export default {
  component: EoButton,
  parameters: {
    layout: 'centered',
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
}

export const Regular = {
  args: {
    text: 'Button',
    variant: 'primary',
    filled: true,
  },
}

export const Disabled = {
  args: {
    text: 'Button',
    disabled: true,
    filled: true,
  },
}

export const Hollow = {
  args: {
    text: 'Button',
    variant: 'secondary',
    filled: false,
  },
}
