'use client'

import { Header } from '@/components/header'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { UserContext } from '@/context'

export default function MainTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, setUser, userIsLoading } = useCurrentUser()
  return (
    <UserContext.Provider value={{ user, setUser, userIsLoading }}>
      <Header user={user} userIsLoading={userIsLoading} />
      {children}
    </UserContext.Provider>
  )
}
