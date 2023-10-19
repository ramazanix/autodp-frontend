import Cookies from 'js-cookie'

export const useLogout = () => {
  const logout = () => {
    Cookies.remove('accessToken')
    Cookies.remove('refreshToken')
  }

  return { logout }
}
