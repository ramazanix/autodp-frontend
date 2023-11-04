'use client'

import { Header } from '@/components/header'
import useStore from '@/store/useStore'
import useUserStore from '@/store/useUserStore'
import { useEffect, useState } from 'react'

export default function Home() {
  const user = useStore(useUserStore, (state) => state.user)
  const [userLoading, setUserLoading] = useState(true)

  useEffect(() => {
    setUserLoading(false)
  }, [])
  return (
    <>
      <Header user={user!} userIsLoading={userLoading} />
      {!userLoading ? user!.username : 'Not Authorized'}
    </>
  )
}
