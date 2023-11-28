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
  const [imageShown, setImageShown] = useState(true)
  const imageRef = useRef<HTMLImageElement>(null)

  const onImageHover = () => {
    console.log(123)
  }

  return (
    <>
      <UserProfileSkeleton isLoading={isLoading} />
      <div
        className={
          isLoading
            ? 'hidden'
            : 'max-h-15 mx-auto my-6 grid w-1/2 grid-cols-2 grid-rows-4 rounded-2xl bg-[#273043]/50 shadow'
        }
      >
        <Image
          ref={imageRef}
          className="row-span-4 h-full w-full rounded-full p-10"
          src={process.env.NEXT_PUBLIC_API_URL + userInfo.avatar.location}
          alt="User avatar"
          width={0}
          height={0}
          sizes="100vw"
          priority
          onLoad={() => {
            setIsLoading(!isLoading)
          }}
          onMouseOver={onImageHover}
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
