import { AuthService } from '@/services/authService'
import { UserService } from '@/services/userService'

export const authService = new AuthService('//localhost:80/auth')
export const usersService = new UserService('//localhost:80/users')
