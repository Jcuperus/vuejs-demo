import axios from 'axios'
import {getToken} from '@/utils/login-api-helper'

// Base axios instance
export const http = axios.create({
  baseURL: 'http://vuejs-demo.local/api/',
  headers: {
    Authorization: getAuthorizationLine()
  }
})

export function getAuthorizationLine () {
  const token = getToken()
  if (typeof token !== 'undefined' || token !== null) {
    return 'Bearer ' + token
  }
  return null
}
