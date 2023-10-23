'use client'

import Header from '@/components/header'
import { useState, useEffect } from 'react'
import { IUser } from '@/app/types'

export default function UsersPage() {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users')
      const data = await response.json()
      setUsers(data)
    }
    fetchUsers().catch(console.error)
  }, [])
  return (
    <>
      <Header />
      <div>
        {users.map((user, idx) => {
          return (
            <p key={user.id}>
              {idx + 1} {user.username} {user.role.name} {user.created_at}
            </p>
          )
        })}
      </div>
    </>
  )
}
