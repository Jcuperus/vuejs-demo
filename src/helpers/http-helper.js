import axios from 'axios'
import TokenHelper from '@/helpers/token-helper'

export let token = TokenHelper.getToken()

// Base axios instance
export const http = axios.create({
  baseURL: 'http://vuejs-demo.local/api/',
  headers: {
    Authorization: 'Bearer ' + token
  }
})
