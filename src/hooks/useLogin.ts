import Cookies from 'js-cookie'
import { AuthTokens } from '@/app/types'
import { authService } from '@/services'

export const useLogin = () => {
  const login = async (username: string, password: string) => {
    const tokens: AuthTokens = await authService.login(username, password)
    if (tokens) {
      Cookies.set('accessToken', tokens.accessToken)
      Cookies.set('refreshToken', tokens.refreshToken)
    }
    return tokens
  }

  return { login }
}
