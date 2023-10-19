import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { User } from '@/app/types'
import { AuthService } from '@/utils/authService'

export const useCurrentUser = () => {
  const [user, setUser] = useState(null)
  const getCurrentUser = async (accessToken: string) => {
    return await AuthService.currentUser(accessToken)
  }
  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    if (accessToken) {
      // @ts-ignore
      setUser(getCurrentUser(accessToken))
    }
  }, [])

  return user
}
