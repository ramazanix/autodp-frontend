'use client'

import { IUser } from '@/app/types'
import Image from 'next/image'
import { useState } from 'react'

interface Prop {
  userInfo: IUser
}

export const UserProfile: React.FC<Prop> = ({ userInfo }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div
      className={
        isLoading
          ? 'hidden'
          : 'mx-auto my-6 grid w-1/2 grid-cols-2 grid-rows-4 rounded-2xl bg-[#273043]/50 shadow'
      }
    >
      <Image
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
  )
}
