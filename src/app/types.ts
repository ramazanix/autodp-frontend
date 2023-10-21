import { UUID } from 'crypto'

export interface IRole {
  name: string
  description: string
}

export interface IUser {
  id: UUID
  username: string
  role: IRole
  createdAt: string
  updatedAt: string
}

export interface IAuthTokens {
  accessToken: string
  refreshToken: string
}

export type AuthTokens = {
  accessToken: string | undefined
  refreshToken: string | undefined
}
