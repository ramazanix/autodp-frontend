'use client'

import { Header } from '@/components/header'
import { useCurrentUser } from '@/hooks/useCurrentUser'

export default function Home() {
  const { user, userIsLoading } = useCurrentUser()
  return (
    <>
      <Header user={user!} userIsLoading={userIsLoading} />
      {!userIsLoading && user ? user.username : 'Not Authorized'}
    </>
  )
}
