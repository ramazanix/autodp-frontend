'use client'

import Header from '@/components/header'
import { useContext, useEffect } from 'react'
import { useLogout } from '@/hooks/useLogout'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/providers'

export default function Home() {
  const router = useRouter()
  const { user, setUser } = useContext(AuthContext)
  const { logout } = useLogout()

  const handleLogout = () => {
    logout().then(() => {
      router.push('/login')
      setUser!(null)
    })
  }

  return (
    <>
      <Header />
      {user ? user.username : 'Not Authorized'}
      {user && <button onClick={handleLogout}>Log Out</button>}
    </>
  )
}
