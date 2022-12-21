import * as RadixTooltip from '@radix-ui/react-tooltip'
import { TooltipProps as RadixTooltipProps } from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { TooltipContent, TooltipArrow } from './styles'

export interface TooltipProps extends RadixTooltipProps {
  children: ReactNode
  content: string
}

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

        <RadixTooltip.Portal>
          <TooltipContent sideOffset={5}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
