'use client'

import { Header } from '@/components/header'
import useUserStore from '@/store/store'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    useUserStore.persist.rehydrate()
    setIsLoading(false)
  }, [])

  const user = useUserStore((state) => state.user)
  return (
    <>
      <Header user={user} userIsLoading={isLoading} />
      {user ? user.username : 'Not Authorized'}
    </>
  )
}
