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
    const query = limit ? `?limit=${limit}` : '/'
    const res = await this.instance.get(query).catch((e) => console.log(e))
    if (res) {
      return res.data
    }
  }
  create = async (username: string, password: string) => {
    return await this.instance
      .post('', { username, password })
      .then(() => {
        return {
          status: 'success',
          data: [],
        }
      })
      .catch((e) => {
        return {
          status: 'failed',
          data: e.response.data.detail,
        }
      })
  }
}
