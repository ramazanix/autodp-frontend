import { Dispatch, SetStateAction, createContext } from 'react'
import { IUser } from '@/app/types'

export const UserContext = createContext<{
  user: IUser | null
  userIsLoading: boolean
  setUser: Dispatch<SetStateAction<IUser | null>>
}>({
  user: null,
  userIsLoading: true,
  setUser: () => {},
})
