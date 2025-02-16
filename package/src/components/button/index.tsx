import styles from './index.module.css'

export function EoButton({
  children,
  text,
  onClick,
  className,
  disabled = false,
  variant = 'primary',
}: Props) {
  return (
    <button
      className={`${styles.button} ${className} ${styles[variant]}`}
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
}
