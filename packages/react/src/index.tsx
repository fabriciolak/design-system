import { ComponentProps } from 'react'

import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  fontSize: '$md',
  fontWeight: '$bold',
  border: 0,
  outline: 0,
  borderRadius: '$sm',
  color: '$white',
  backgroundColor: '$ignite300',
  cursor: 'pointer',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },

      big: {
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
