import { EoButton } from '../package/src/components/button/button'
import { Meta } from '@storybook/react'

const meta: Meta<typeof EoButton> = {
  component: EoButton,
  parameters: {
    layout: 'centered',
  },
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

export const Outline = {
  args: {
    text: 'Button',
    variant: 'secondary',
    filled: false,
  },
}

export default meta
