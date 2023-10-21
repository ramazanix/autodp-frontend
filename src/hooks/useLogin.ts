import Cookies from 'js-cookie'
import { IAuthTokens } from '@/app/types'
import { authService } from '@/services'

export const useLogin = () => {
  const login = async (username: string, password: string) => {
    const tokens: IAuthTokens | undefined = await authService.login(
      username,
      password
    )
    if (tokens) {
      Cookies.set('accessToken', tokens.accessToken)
      Cookies.set('refreshToken', tokens.refreshToken)
    }
    return tokens
  }

  return { login }
}
