import axios, { AxiosInstance } from 'axios'

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

  users = async (limit: number | undefined) => {
    const params = { limit: limit }
    const res = await this.instance
      .get('', { params: params })
      .catch((e) => console.log(e))
    if (res) {
      return res.data
    }
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
