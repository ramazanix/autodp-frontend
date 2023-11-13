import HttpClient from '@/services/HttpClient'
import { IUser } from '@/app/types'
import { parseDate } from '@/utils'

class UsersClient extends HttpClient {
  constructor(baseURL: string) {
    super({
      baseURL,
      headers: new Headers(),
    })
  }

  users = {
    getAll: (limit?: number): Promise<IUser[]> =>
      this.get(`?limit=${limit}`, { parseResponse: true }),

    get: (username: string): Promise<IUser> =>
      this.get(`/${username}`, { parseResponse: true }).then((res) => {
        let created_at = parseDate(res.created_at)
        let updated_at = parseDate(res.updated_at)

        return {
          ...res,
          created_at,
          updated_at,
        }
      }),
  }
}

export default UsersClient
