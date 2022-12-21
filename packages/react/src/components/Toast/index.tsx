import * as RadixToast from '@radix-ui/react-toast'
import { ToastProps as RadixToastProps } from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

import {
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastViewport,
  ToastAction,
  ToastCloseButton,
} from './styles'

export interface ToastProps extends RadixToastProps {
  open: boolean
  setOpen: undefined
}

export function Toast({ open, setOpen, ...props }: ToastProps) {
  return (
    <RadixToast.Provider swipeDirection="right">
      <ToastRoot open={open} {...props}>
        <ToastTitle>Agendamento realizado</ToastTitle>
        <ToastDescription>
          <time>Terça-feira, 20 de Dezembro às 20hs</time>
        </ToastDescription>

        <ToastAction asChild altText="Close toast">
          <ToastCloseButton>
            <X size={20} weight="bold" color="#A9A9B2" />
          </ToastCloseButton>
        </ToastAction>
      </ToastRoot>

      <ToastViewport />
    </RadixToast.Provider>
  )
}
