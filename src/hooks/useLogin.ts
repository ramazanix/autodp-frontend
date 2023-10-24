import Cookies from 'js-cookie'
import { IAuthTokens } from '@/app/types'
import { authService } from '@/services'

interface Props {
  username: string
  password: string
  rememberMe: boolean
}

export const useLogin = () => {
  const login = async (props: Props) => {
    const { username, password, rememberMe } = props
    const tokens: IAuthTokens | undefined = await authService.login(
      username,
      password
    )
    const accessExpires = 1 / 48
    const refreshExpires = 15
    if (tokens) {
      if (rememberMe) {
        Cookies.set('accessToken', tokens.accessToken, {
          expires: accessExpires,
        })
        Cookies.set('refreshToken', tokens.refreshToken, {
          expires: refreshExpires,
        })
      } else {
        Cookies.set('accessToken', tokens.accessToken)
        Cookies.set('refreshToken', tokens.refreshToken)
      }
    }
    return tokens
  }

  return { login }
}
