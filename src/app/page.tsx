'use client'

import Header from '@/components/header'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const { user } = useCurrentUser(router)
  return (
    <>
      <Header />
      {user ? user.username : 'Not Authorized'}
    </>
  )
}
