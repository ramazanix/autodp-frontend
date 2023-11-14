import { Headers } from 'next/dist/compiled/@edge-runtime/primitives'

interface IClientOptions {
  baseURL: string
  headers: Headers
}

interface IFetchOptions extends RequestInit {
  parseResponse: boolean
}

class HttpClient {
  protected _baseURL: string
  protected _headers: Headers

  public constructor(options: IClientOptions) {
    this._baseURL = options.baseURL || ''
    this._headers = options.headers || {}
  }

  async _fetchJson(endpoint: string, options: IFetchOptions) {
    const res = await fetch(this._baseURL + endpoint, {
      ...options,
      headers: this._headers,
    })
    let data = await res.json()

    if (!res.ok) throw { status: res.status, data }

    return { status: res.status, data }
  }

  setHeader(key: string, value: string) {
    this._headers.set(key, value)
    return this
  }

  getHeader(key: string) {
    return this._headers.get(key)
  }

  setBearerAuth(token: string) {
    this._headers.set('Authorization', `Bearer ${token}`)
    return this
  }

  get(endpoint: string, options: IFetchOptions): Promise<any> {
    return this._fetchJson(endpoint, {
      ...options,
      method: 'GET',
    })
  }

  post(endpoint: string, body: Object, options: IFetchOptions) {
    return this._fetchJson(endpoint, {
      ...options,
      body: body ? JSON.stringify(body) : undefined,
      method: 'POST',
    })
  }

  put(endpoint: string, body: Body, options: IFetchOptions) {
    return this._fetchJson(endpoint, {
      ...options,
      body: body ? JSON.stringify(body) : undefined,
      method: 'PUT',
    })
  }

  patch(endpoint: string, operations: any, options: IFetchOptions) {
    return this._fetchJson(endpoint, {
      ...options,
      parseResponse: false,
      body: JSON.stringify(operations),
      method: 'PATCH',
    })
  }

  delete(endpoint: string, options: IFetchOptions) {
    return this._fetchJson(endpoint, {
      ...options,
      parseResponse: false,
      method: 'DELETE',
    })
  }
}

export default HttpClient
