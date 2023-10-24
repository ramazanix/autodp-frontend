import { IUser } from '@/app/types'
import React from 'react'

interface Props {
  user: IUser
  limit?: number
}

export const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <a
      href={`/users/${user.username}`}
      className="block max-w-sm rounded-lg border border-black bg-[#273043]/50 p-6 shadow duration-300 hover:bg-[#273043]/60"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {user.username}
      </h5>
      <p className="font-extralight text-white">{user.role.description}</p>
    </a>
  )
}
