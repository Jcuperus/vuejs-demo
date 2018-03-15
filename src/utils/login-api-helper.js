import {http} from '@/utils/http-helper'

export function login (username, password) {
  return http.post('login', {
    username: username,
    password: password
  })
}
