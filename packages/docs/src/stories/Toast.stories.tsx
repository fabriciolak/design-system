import { Meta, StoryObj } from '@storybook/react'

import { Toast, ToastProps } from '@lak-ignite-ui/react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  argTypes: {
    open: {
      control: 'boolean',
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  argTypes: {
    open: {
      control: 'boolean',
    },
  },
}
