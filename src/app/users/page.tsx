'use client'

import Header from '@/components/header'
import { useUsers } from '@/hooks/useUsers'
import React, { useState } from 'react'
import { UsersList } from '@/components/usersList'
import { SearchBar } from '@/components/searchBar'

export default function UsersPage(searchInput: string) {
  const limit = 10
  const { usersList } = useUsers({ limit })
  const [inputText, setInputText] = useState('')
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let lowerCase = e.target.value.toLowerCase()
    setInputText(lowerCase)
  }

  return (
    <>
      <Header />
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
