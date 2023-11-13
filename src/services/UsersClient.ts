import HttpClient from '@/services/HttpClient'
import { IUser } from '@/app/types'
import { parseDate } from '@/utils'

class UsersClient extends HttpClient {
  constructor(baseURL: string) {
    super({
      baseURL,
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
  }

  users = {
    getAll: (limit?: number): Promise<IUser[]> =>
      this.get(`?limit=${limit}`, { parseResponse: true }),

    get: (username: string, accessToken: string): Promise<IUser> =>
      this.setBearerAuth(accessToken)
        .get(`/${username}`, { parseResponse: true })
        .then((res) => {
          let created_at = parseDate(res.created_at)
          let updated_at = parseDate(res.updated_at)

          return {
            ...res,
            created_at,
            updated_at,
          }
        }),
    create: (username: string, password: string) =>
      this.post('', { username, password }, { parseResponse: true })
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
            statusCode: e.status,
            data: e.data.detail,
          }
        }),
  }
}

export default UsersClient
