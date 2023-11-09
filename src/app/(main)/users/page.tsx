'use client'

import { useUsers } from '@/hooks/useUsers'
import { useState } from 'react'
import { UsersList } from '@/components/usersList'
import { SearchBar } from '@/components/searchBar'

export default function UsersPage() {
  const limit = 10
  const { usersList } = useUsers({ limit })
  const [inputText, setInputText] = useState('')
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let lowerCase = e.target.value.toLowerCase()
    setInputText(lowerCase)
  }

  return (
    <>
      <SearchBar
        id={'users-filter'}
        name={'users-filter'}
        placeholder={'Find user'}
        value={inputText}
        onChange={inputHandler}
      />
      <UsersList users={usersList} input={inputText} />
    </>
  )
}
