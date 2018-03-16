import {http} from '@/helpers/http-helper'

export default {
  accessToken: null,
  storeToken: function (token) {
    this.accessToken = token
    sessionStorage.setItem('token', token)
    http.defaults.headers.Authorization = 'Bearer ' + token
  },
  getToken: function () {
    if (typeof this.accessToken !== 'undefined' && this.accessToken !== null) {
      console.log('foo')
      return this.accessToken
    } else if (sessionStorage.getItem('token')) {
      console.log('bar')
      return sessionStorage.getItem('token')
    }
    return ''
  }
}
