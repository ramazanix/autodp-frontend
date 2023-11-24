import { UUID } from 'crypto'

export interface IRole {
  name: string
  description: string
}

interface IAvatar {
  name: string
  size: number
  location: string
}

export interface IUser {
  id: UUID
  username: string
  role: IRole
  created_at: Date
  updated_at: Date
  avatar: IAvatar
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
