import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { User } from '@/app/types'
import { authService } from '@/services'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'

export const useCurrentUser = (router: AppRouterInstance) => {
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    if (accessToken) {
      authService
        .currentUser(accessToken)
        .then((userData) => {
          setUser(userData)
        })
        .catch((e) => {
          if (e.response.status === 422 || e.response.status === 401) {
            const refreshToken = Cookies.get('refreshToken')
            if (refreshToken) {
              authService
                .refreshAccessToken(refreshToken)
                .then((accessToken) => {
                  Cookies.set('accessToken', accessToken.accessToken)
                })
                .catch((e) => {
                  router.push('/login')
                })
            } else router.push('/login')
          }
        })
    } else {
      const refreshToken = Cookies.get('refreshToken')
      if (refreshToken) {
        authService
          .refreshAccessToken(refreshToken)
          .then((accessToken) => {
            Cookies.set('accessToken', accessToken.accessToken)
          })
          .catch((e) => {
            router.push('/login')
          })
      } else router.push('/login')
    }
  }, [])
  return { user }
}
