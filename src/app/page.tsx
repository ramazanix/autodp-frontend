'use client'

import Header from '@/components/header'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useLogout } from '@/hooks/useLogout'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const { user } = useCurrentUser()
  const { logout } = useLogout()

  const handleLogout = () => {
    logout().then(() => router.push('/login'))
  }

  return (
    <>
      <Header />
      {user ? user.username : 'Not Authorized'}
      {user && <button onClick={handleLogout}>Log Out</button>}
    </>
  )
}
