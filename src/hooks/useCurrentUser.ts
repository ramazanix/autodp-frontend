import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { AuthTokens, IUser } from '@/app/types'
import { authService } from '@/services'

export const useCurrentUser = () => {
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
            authService
              .revokeAccessToken(tokens.accessToken!)
              .catch((e) => console.log(e))

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
                .catch(() => {
                  Cookies.remove('accessToken')
                  Cookies.remove('refreshToken')
                })
            } else {
              Cookies.remove('accessToken')
              Cookies.remove('refreshToken')
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
          .catch(() => {
            Cookies.remove('accessToken')
            Cookies.remove('refreshToken')
          })
      } else {
        Cookies.remove('accessToken')
        Cookies.remove('refreshToken')
      }
    }
  }, [tokens])
  return { user, setUser }
}
