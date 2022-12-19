import { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui/react'
import { ElementType } from 'react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Lorem ipsum dolor sit amet.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong',
    as: 'strong' as ElementType,
  },
}
