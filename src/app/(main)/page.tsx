'use client'

import { useContext } from 'react'
import { UserContext } from '@/context'

export default function Home() {
  const { user, userIsLoading } = useContext(UserContext)
  return <>{!userIsLoading && user ? user.username : 'Not Authorized'}</>
}
