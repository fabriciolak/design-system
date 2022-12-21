import { Meta, StoryObj } from '@storybook/react'

import { Box, Button, Tooltip, TooltipProps, Text } from '@lak-ignite-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    children: <Button size="sm">Ola</Button>,
    content: '21 de Outubro - Indisponível',
    delayDuration: 0,
  },
  decorators: [
    (Story) => {
      return (
        <Box>
          <Text size="2xl" css={{ marginBottom: 50 }}>
            Usando o Tooltip
          </Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
