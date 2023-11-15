import UsersClient from '@/services/UsersClient'
import AuthClient from '@/services/AuthClient'

export const authService = new AuthClient('http://localhost:80/auth')
export const usersService = new UsersClient('http://localhost:80/users')
