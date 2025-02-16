import styles from './index.module.css'

export function EoButton({ children, text, onClick, className }: Props) {
  return (
    <button className={`${styles.button} ${className}`}>
      {children || text}
    </button>
  )
}

type Props = {
  children?: React.ReactNode
  text?: string
  onClick?: () => void
  className?: string
}
