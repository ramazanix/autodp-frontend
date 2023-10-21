import { useEffect, useMemo, useState } from 'react'
import Cookies from 'js-cookie'
import { AuthTokens, IUser } from '@/app/types'
import { authService } from '@/services'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'

export const useCurrentUser = (router: AppRouterInstance) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [tokens, setTokens] = useState<AuthTokens>({
    accessToken: Cookies.get('accessToken'),
    refreshToken: Cookies.get('refreshToken'),
  })

  useEffect(() => {
    if (tokens.accessToken) {
      authService
        .currentUser(tokens.accessToken)
        .then((userData) => {
          setUser(userData)
        })
        .catch((e) => {
          if (e.response.status === 422 || e.response.status === 401) {
            if (tokens.refreshToken) {
              authService
                .refreshAccessToken(tokens.refreshToken)
                .then((accessToken) => {
                  Cookies.set('accessToken', accessToken?.accessToken)
                  setTokens({
                    ...tokens,
                    accessToken: accessToken?.accessToken,
                  })
                })
                .catch((e) => {
                  Cookies.remove('accessToken')
                  Cookies.remove('refreshToken')
                  router.push('/login')
                })
            } else {
              Cookies.remove('accessToken')
              Cookies.remove('refreshToken')
              router.push('/login')
            }
          }
        })
    } else {
      if (tokens.refreshToken) {
        authService
          .refreshAccessToken(tokens.refreshToken)
          .then((accessToken) => {
            Cookies.set('accessToken', accessToken?.accessToken)
            setTokens({ ...tokens, accessToken: accessToken?.accessToken })
          })
          .catch((e) => {
            Cookies.remove('accessToken')
            Cookies.remove('refreshToken')
            router.push('/login')
          })
      } else {
        Cookies.remove('accessToken')
        Cookies.remove('refreshToken')
        router.push('/login')
      }
    }
  }, [tokens])
  return { user }
}
