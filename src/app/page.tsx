'use client'

import Header from '@/components/header'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useRouter } from 'next/navigation'
import { useLogout } from '@/hooks/useLogout'

export default function Home() {
  const router = useRouter()
  const { user } = useCurrentUser(router)
  const { logout } = useLogout()
  return (
    <>
      <Header />
      {user ? user.username : 'Not Authorized'}
      {user && <button onClick={logout}>Log Out</button>}
    </>
  )
}
