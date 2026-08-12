interface ButtonProps {
  label: string
  variant?: 'primary' | 'outline'
  onClick?: () => void
  type?: 'button' | 'submit'
}

export default function Button({
  label,
  variant = 'primary',
  onClick,
  type = 'button',
}: ButtonProps) {
  return (
    <button type={type} className={`btn btn--${variant}`} onClick={onClick}>
      {label}
    </button>
  )
}
