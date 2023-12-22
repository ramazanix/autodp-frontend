interface Props {
  children: React.ReactNode
  className?: string
  onClick: React.MouseEventHandler
}

export const IconButton: React.FC<Props> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
