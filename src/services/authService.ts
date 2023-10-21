import axios, { AxiosInstance } from 'axios'

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
    const res = await this.instance
      .post('/login', {
        username,
        password,
      })
      .catch((e) => {
        console.log(e)
      })
    if (res) {
      return {
        accessToken: res.data.access_token,
        refreshToken: res.data.refresh_token,
      }
    }
  }

  currentUser = async (accessToken: string) => {
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
        createdAt: res.data.created_at,
        updatedAt: res.data.updated_at,
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
        accessToken: res?.data.access_token,
      }
    }
  }
}
