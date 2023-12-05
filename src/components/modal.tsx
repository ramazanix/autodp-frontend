interface Props {
  onModalClose: () => void
  children: React.ReactNode
}

export const Modal: React.FC<Props> = ({ onModalClose, children }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        {children}
        <div
          className="fixed inset-0 -z-10 bg-black opacity-75"
          onClick={onModalClose}
        ></div>
      </div>
    </>
  )
}
