'use client'

import { IUser } from '@/app/types'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { UserProfileSkeleton } from './skeleton'

interface Prop {
  userInfo: IUser
}

export const UserProfile: React.FC<Prop> = ({ userInfo }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [showText, setShowText] = useState(false)
  // const textRef = useRef<HTMLImageElement>(null)

  const onImageHover = () => {
    setShowText(true)
  }

  const onImageUnHover = () => {
    setShowText(false)
  }

  return (
    <>
      <UserProfileSkeleton isLoading={isLoading} />
      <div
        className={
          isLoading
            ? 'hidden'
            : 'max-h-15 relative mx-auto my-6 grid w-1/2 grid-cols-2 grid-rows-4 rounded-2xl bg-[#273043]/50 shadow'
        }
      >
        <div
          className={
            showText
              ? 'pointer-events-none absolute z-10 my-auto ml-32 mt-44 bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-xl font-black text-transparent'
              : 'hidden'
          }
        >
          Change Avatar
        </div>

        <Image
          className={
            showText
              ? 'row-span-4 h-full w-full rounded-full p-10 opacity-50 transition-opacity duration-500'
              : 'row-span-4 h-full w-full rounded-full p-10 duration-500'
          }
          src={process.env.NEXT_PUBLIC_API_URL + userInfo.avatar.location}
          alt="User avatar"
          width={0}
          height={0}
          sizes="100vw"
          priority
          onLoad={() => {
            setIsLoading(!isLoading)
          }}
          onMouseEnter={onImageHover}
          onMouseLeave={onImageUnHover}
        />

        <div className="row-span-2 flex items-center justify-center text-5xl">
          {userInfo.username}
        </div>
        <div className="flex items-center justify-center text-xl">
          Role: {userInfo.role.description}
        </div>
        <div className="flex items-start justify-center text-xl">
          Register Date: {userInfo.created_at.toLocaleDateString()} at{' '}
          {userInfo.created_at.toLocaleTimeString()}
        </div>
      </div>
    </>
  )
}
