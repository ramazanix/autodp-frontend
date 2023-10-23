import Cookies from 'js-cookie'
import { authService } from '@/services'

export const useLogout = () => {
  const logout = async () => {
    const accessToken = Cookies.get('accessToken')
    const refreshToken = Cookies.get('refreshToken')
    if (accessToken && refreshToken) {
      await authService.revokeAccessToken(accessToken)
      await authService.revokeRefreshToken(refreshToken)
      Cookies.remove('accessToken')
      Cookies.remove('refreshToken')
    }
  }

  return { logout }
}
