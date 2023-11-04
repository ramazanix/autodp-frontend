import { create } from 'zustand'
import { IUser } from '@/app/types'
import { persist, createJSONStorage } from 'zustand/middleware'

interface UserState {
  user: IUser | null
  setUser: (userData: IUser) => void
  resetUser: () => void
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (newData) =>
        set(() => ({
          user: newData,
        })),
      resetUser: () => set(() => ({ user: null })),
    }),
    { name: 'user-storage', storage: createJSONStorage(() => sessionStorage) }
  )
)

export default useUserStore
