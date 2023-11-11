import { AuthService } from '@/services/authService'
import UsersClient from '@/services/UsersClient'

export const authService = new AuthService('//localhost:80/auth')
export const usersService = new UsersClient('http://localhost:80/users')
