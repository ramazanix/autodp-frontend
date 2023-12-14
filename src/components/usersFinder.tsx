'use client'

import { useEffect, useState } from 'react'
import { SearchBar } from '@/components/searchBar'
import { UsersList } from '@/components/usersList'
import { IUser } from '@/app/types'
import { useRouter } from 'next/navigation'

interface Props {
  usersList: IUser[] | null
}

export const UsersFinder: React.FC<Props> = ({ usersList }) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [inputText, setInputText] = useState('')
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let lowerCase = e.target.value.toLowerCase()
    setInputText(lowerCase)
  }

  useEffect(() => {
    router.refresh()
    setIsLoading(false)
  }, [])

  return (
    <>
      <SearchBar
        id={'users-filter'}
        name={'users-filter'}
        placeholder={'Find user'}
        value={inputText}
        onChange={inputHandler}
      />
      {/* isLoading ? <Loader /> : <UsersList />*/}
      {isLoading ? null : (
        <UsersList users={usersList} input={inputText} />
      )}{' '}
    </>
  )
}
