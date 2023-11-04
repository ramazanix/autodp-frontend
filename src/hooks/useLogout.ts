import Cookies from 'js-cookie'
import { authService } from '@/services'
import useUserStore from '@/store/useUserStore'

export const useLogout = () => {
  const resetUser = useUserStore((state) => state.resetUser)

  const logout = async () => {
    const accessToken = Cookies.get('accessToken')
    const refreshToken = Cookies.get('refreshToken')
    if (accessToken && refreshToken) {
      await authService.revokeAccessToken(accessToken)
      await authService.revokeRefreshToken(refreshToken)
      Cookies.remove('accessToken')
      Cookies.remove('refreshToken')
      resetUser()
    }
  }

  return { logout }
}
