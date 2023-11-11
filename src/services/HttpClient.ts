import { HTTP_METHOD } from 'next/dist/server/web/http'

interface IClientOptions {
  baseURL: string
  headers: Headers
}

interface IFetchOptions extends RequestInit {
  parseResponse: boolean
  method: HTTP_METHOD
}

class HttpClient {
  protected _headers: any
  protected _baseURL: any

  public constructor(options: IClientOptions) {
    this._baseURL = options.baseURL || ''
    this._headers = options.headers || {}
  }

  _fetchJson = async (endpoint: string, options: IFetchOptions) => {
    const res = await fetch(this._baseURL + endpoint, {
      ...options,
      headers: this._headers,
    })

    if (!res.ok) throw new Error(res.statusText)

    if (options.parseResponse && res.status != 204) return res.json()

    return undefined
  }

  setHeader(key: string, value: string) {
    this._headers[key] = value
    return this
  }

  getHeader(key: string) {
    return this._headers[key]
  }

  setBearerAuth(token: string) {
    this._headers.Authorization = `Bearer ${token}`
    return this
  }

  get(endpoint: string, options: IFetchOptions) {
    return this._fetchJson(endpoint, {
      ...options,
      method: 'GET',
    })
  }

  post(endpoint: string, body: Body, options: IFetchOptions) {
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
