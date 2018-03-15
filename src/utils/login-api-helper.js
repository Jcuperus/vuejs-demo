import {http} from '@/utils/http-helper'

export function login (email, password) {
  return http.post('login', {
    email: email,
    password: password
  })
}

export function authenticate () {
  return http.get('authenticate')
}

export function storeToken (token) {
  sessionStorage.setItem('token', token.accessToken)
}

export function getToken () {
  return sessionStorage.getItem('token')
}
