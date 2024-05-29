import React from 'react'
import clsx from 'clsx'

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Icon = 'icon',
}

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: ButtonVariant
}

export const Button: React.FC<ButtonProps> = ({ onClick = () => {}, variant = ButtonVariant.Primary, children }) => {
  let className = 'btn-primary bg-primary text-white'

  if (variant === ButtonVariant.Secondary) {
    className = 'btn-secondary bg-secondary text-blackbeard'
  }

  if (variant === ButtonVariant.Icon) {
    className = 'btn-circle bg-primary text-white aspect-square'
  }

  return (
    <button className={clsx('btn max-w-min text-nowrap', className)} onClick={onClick}>
      {children}
    </button>
  )
}
