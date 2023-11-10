import axios, { AxiosInstance } from 'axios'
import { IUser } from '@/app/types'
import { parseDate } from '@/utils'

export class UserService {
  protected readonly instance: AxiosInstance

  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: 'Time Out!',
      responseType: 'json',
    })
  }

  users = async (limit: number | undefined): Promise<IUser[] | null> => {
    const params = { limit: limit }
    const res = await this.instance
      .get('', { params: params })
      .catch((e) => console.log(e))

    if (res) {
      return res.data
    }

    return null
  }

  user = async (username: string): Promise<IUser | null> => {
    return await this.instance
      .get(`/${username}`)
      .then((res) => {
        let created_at = parseDate(res.data.created_at)
        let updated_at = parseDate(res.data.updated_at)
        return {
          ...res.data,
          created_at,
          updated_at,
        }
      })
      .catch((e) => {
        console.log(e)
        return null
      })
  }

  create = async (username: string, password: string) => {
    return await this.instance
      .post('', { username, password })
      .then((res) => {
        return {
          status: 'success',
          statusCode: res.status,
          data: [],
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
}
