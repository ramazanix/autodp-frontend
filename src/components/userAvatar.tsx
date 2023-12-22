import { IUser } from '@/app/types'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { twJoin } from 'tailwind-merge'

interface Props {
  userInfo: IUser
  inputRef: React.RefObject<HTMLInputElement>
  owner: boolean
  showText: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
  setShowText: Dispatch<SetStateAction<boolean>>
}

export const UserAvatar: React.FC<Props> = ({
  inputRef,
  owner,
  userInfo,
  showText,
  setIsLoading,
  setShowText,
}) => {
  const onImageHover = () => {
    setShowText(true)
  }

  const onImageUnHover = () => {
    setShowText(false)
  }
  return (
    <>
      <Image
        className={twJoin(
          'row-span-4 h-full w-full select-none rounded-full p-10 duration-300',
          showText && 'cursor-pointer opacity-50 transition-opacity'
        )}
        draggable={false}
        src={process.env.NEXT_PUBLIC_API_URL + userInfo.avatar.location}
        alt="User avatar"
        width={0}
        height={0}
        sizes="100vw"
        unoptimized
        priority
        onLoad={() => {
          setIsLoading(false)
        }}
        onMouseEnter={owner ? onImageHover : undefined}
        onMouseLeave={owner ? onImageUnHover : undefined}
        onClick={
          owner
            ? () => {
                inputRef.current!.click()
              }
            : undefined
        }
      />
    </>
  )
}
