'use client'

import { Header } from '@/components/header'
import { useCurrentUser } from '@/hooks/useCurrentUser'

export default function Home() {
  const { user } = useCurrentUser()

  return (
    <>
      <Header user={user}/>
      {user ? user.username : 'Not Authorized'}
    </>
  )
}
