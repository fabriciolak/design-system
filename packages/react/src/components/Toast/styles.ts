import * as Toast from '@radix-ui/react-toast'

import { keyframes, styled } from '../../styles'

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  width: 360,
  maxWidth: '100vw',
  zIndex: '999999',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  listStyle: 'none',
  outline: 'none',
  padding: '$8',
  margin: 0,
})

const hideToast = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + 25px))',
  },
  to: {
    transform: 'translateX(0%)',
  },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(0%)' },
  to: { transform: `translateX(calc(100% + 25px))` },
})

export const ToastRoot = styled(Toast.Root, {
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  padding: 20,
  borderRadius: 6,
  background: '$gray800',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-swipe="move"]': {
    transform: 'translateX(0)',
  },

  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-state="closed"]': {
    animation: `${hideToast} 100ms ease-out`,
  },

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
  marginBottom: '$1',
  color: '$white',
})

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray200',
})

export const ToastAction = styled(Toast.Action, {
  gridArea: 'action',
})

export const ToastCloseButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '$8',
  height: '$8',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
})
