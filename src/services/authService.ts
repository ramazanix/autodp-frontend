import axios, { AxiosInstance } from 'axios'
import { IUser } from '@/app/types'

export class AuthService {
  protected readonly instance: AxiosInstance

  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: 'Time out!',
      responseType: 'json',
    })
  }

  login = async (username: string, password: string) => {
    return await this.instance
      .post('/login', {
        username,
        password,
      })
      .then((res) => {
        return {
          status: 'success',
          statusCode: res.status,
          data: {
            accessToken: res.data.access_token,
            refreshToken: res.data.refresh_token,
          },
        }
      })
      .catch((e) => {
        return {
          status: 'failed',
          statusCode: e.response.status,
          data: e.response.data.detail,
        }
      })
  }

  currentUser = async (accessToken: string): Promise<IUser | null> => {
    const res = await this.instance.get('/users/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      baseURL: '//localhost:80',
    })
    if (res) {
      return {
        id: res.data.id,
        username: res.data.username,
        role: res.data.role,
        created_at: new Date(res.data.created_at),
        updated_at: new Date(res.data.updated_at),
      }
    }
    return null
  }

  refreshAccessToken = async (refreshToken: string) => {
    const res = await this.instance.post(
      '/refresh',
      {},
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    )
    if (res) {
      return {
        accessToken: res.data.access_token,
      }
    }
  }
  revokeAccessToken = async (accessToken: string) => {
    await this.instance.delete('/access_revoke', {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
  }

  revokeRefreshToken = async (refreshToken: string) => {
    await this.instance.delete('/refresh_revoke', {
      headers: { Authorization: `Bearer ${refreshToken}` },
    })
  }
}
