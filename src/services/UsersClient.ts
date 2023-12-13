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
    getAll: (limit?: number): Promise<{ status: number; data: IUser[] }> =>
      this.get(limit ? `?limit=${limit}` : ''),

    get: (username: string, accessToken: string): Promise<IUser> =>
      this.setBearerAuth(accessToken)
        .get(`/${username}`)
        .then((res) => {
          let created_at = parseDate(res.data.created_at)
          let updated_at = parseDate(res.data.updated_at)

          return {
            ...res.data,
            created_at,
            updated_at,
          }
        }),

    create: (username: string, password: string) =>
      this.setHeader('Content-Type', 'application/json')
        .post('', { username, password })
        .then((res) => {
          return {
            status: 'success',
            statusCode: res!.status,
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

    update: (payloadData: {}, accessToken: string) =>
      this.setBearerAuth(accessToken)
        .setHeader('Content-Type', 'application/json')
        .patch('/me', payloadData, { parseResponse: true })
        .then((res) => {
          return {
            status: 'success',
            statusCode: res!.status,
            data: res!.data,
          }
        })
        .catch((e) => {
          return {
            status: 'failed',
            statusCode: e.status,
            data: e.data.detail,
          }
        }),

    uploadAvatar: (avatar: FormData, accessToken: string) =>
      this.setBearerAuth(accessToken)
        .post('/me/upload_avatar', avatar)
        .then((res) => {
          return {
            status: 'success',
            statusCode: res!.status,
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
