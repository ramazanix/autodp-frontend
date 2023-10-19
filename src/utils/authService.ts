import axios, { AxiosInstance } from 'axios'
import Cookies from 'js-cookie'
import { User } from '@/app/types'

export class AuthService {
  protected readonly instance: AxiosInstance

  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: 'Time out!',
    })
  }

  static login = async (username: string, password: string) => {
    const res = await this.prototype.instance.post('/auth/login', {
      username,
      password,
    })
    return {
      accessToken: res.data.access_token,
      refreshToken: res.data.refresh_token,
    }
  }

  static currentUser = async (accessToken: string) => {
    const res = await this.prototype.instance.get('/users/me', {
      headers: {
        Authorization: `Bearer ${Cookies.get('accessToken')}`,
      },
    })
    return {
      currentUser: res.data,
    }
  }
}
