import { QueryClient } from '@tanstack/react-query'
import axios from 'axios'

export const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 0 }, mutations: { retry: 0 } },
})

const LINK_API = 'http://localhost:8080'

const TIMEOUT_SEGUNDOS = 30

export const configuracoesApi = {
  link_api: LINK_API,

  timeout: 1000 * TIMEOUT_SEGUNDOS,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}

export const api = () =>
  axios.create({
    baseURL: configuracoesApi.link_api,
    timeout: configuracoesApi.timeout,
    headers: {
      ...configuracoesApi.headers,
    },
  })
