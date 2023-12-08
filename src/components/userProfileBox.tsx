interface Props {
  children: React.ReactNode
  isLoading: boolean
}

export const UserProfileBox: React.FC<Props> = ({ children, isLoading }) => {
  return (
    <>
      <div
        className={
          isLoading
            ? 'hidden'
            : 'max-h-15 relative mx-auto my-6 grid w-1/2 grid-cols-2 grid-rows-4 rounded-2xl bg-[#273043]/50 shadow'
        }
      >
        {children}
      </div>
    </>
  )
}
