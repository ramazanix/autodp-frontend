'use client'

import { createContext, Dispatch, SetStateAction } from 'react'
import { IUser } from '@/app/types'
import { useCurrentUser } from '@/hooks/useCurrentUser'

export const AuthContext = createContext<{
  user: IUser | null
  setUser: Dispatch<IUser | null>
}>({
  user: null,
  setUser: () => {},
})

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, setUser } = useCurrentUser()

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>
}
