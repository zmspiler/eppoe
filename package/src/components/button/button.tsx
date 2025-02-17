import styles from './button.module.scss'

export function EoButton({
  children,
  text,
  onClick,
  className,
  disabled = false,
  variant = 'primary',
  filled = false,
}: Props) {
  return (
    <button
      className={`${styles.button} ${className} ${styles[variant]} ${
        filled ? styles.filled : ''
      }`}
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
}
