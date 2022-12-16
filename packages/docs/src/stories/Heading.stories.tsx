import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Heading',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Custom Tag',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão Heading sempre será um `H2`. Podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
