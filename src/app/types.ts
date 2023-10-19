import { UUID } from 'crypto'

export interface Role {
  name: string
  description: string
}

export interface User {
  id: UUID
  username: string
  role: Role
  created_at: string
  updated_at: string
}

export interface AuthTokens {
  accessToken: string
  refreshToken: string
}
