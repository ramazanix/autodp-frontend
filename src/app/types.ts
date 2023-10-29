import { UUID } from 'crypto'

export interface IRole {
  name: string
  description: string
}

export interface IUser {
  id: UUID
  username: string
  role: IRole
  created_at: string
  updated_at: string
}

export interface IAuthTokens {
  accessToken: string
  refreshToken: string
}

export type AuthTokens = {
  accessToken: string | undefined
  refreshToken: string | undefined
}

export type FieldError = {
  loc: Array<string>
  msg: string
  type: string
}
