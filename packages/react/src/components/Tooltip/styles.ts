import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-100px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: 6,
  padding: '$3 $4',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  letterSpacing: '-0.09px',
  textAlign: 'center',
  lineHeight: '$short',
  color: '$gray100',
  backgroundColor: '$gray900',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    '&[data-state="top"]': {
      animationName: slideDownAndFade,
    },
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$black',
})
