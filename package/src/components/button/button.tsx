import { Size } from 'types/size'

export function EoButton({
  children,
  text,
  onClick,
  className,
  disabled = false,
  variant = 'primary',
  filled = false,
  rounded = 'md',
}: Props) {
  return (
    <button
      className={`eo-button eo-${variant} eo-rounded-${rounded} ${filled && 'eo-filled'}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children || text}
    </button>
  )
}

type Props = {
  children?: React.ReactNode
  text?: string
  onClick?: () => void
  className?: string
  variant: 'primary' | 'secondary'
  disabled?: boolean
  filled?: boolean
  rounded?: Size
}
