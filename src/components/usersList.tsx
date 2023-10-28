import { IUser } from '@/app/types'
import React from 'react'
import { UserCard } from '@/components/userCard'

interface Props {
  users: IUser[]
  input: string
}

export const UsersList: React.FC<Props> = (props) => {
  const { users, input } = props
  const filteredUsers = users.filter((user) => {
    if (input === '') {
      return user
    } else {
      return user.username.toLowerCase().startsWith(input)
    }
  })
  return (
    <div className="mt-16 grid grid-cols-4 gap-4">
      {filteredUsers.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  )
}
