import HttpClient from '@/services/HttpClient'

class UsersClient extends HttpClient {
  constructor(baseURL: string) {
    super({
      baseURL,
      headers: new Headers(),
    })
  }

  users = {
    getAll: (limit?: number) =>
      this.get(`?limit=${limit}`, { parseResponse: true }),
    get: (username: string) =>
      this.get(`/${username}`, { parseResponse: true }),
  }
}

export default UsersClient
