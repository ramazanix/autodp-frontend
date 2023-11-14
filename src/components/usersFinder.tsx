'use client'

import React, { useState } from 'react'
import { SearchBar } from '@/components/searchBar'
import { UsersList } from '@/components/usersList'
import { IUser } from '@/app/types'

interface Props {
  usersList: IUser[] | null
}

export const UsersFinder: React.FC<Props> = ({ usersList }) => {
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
