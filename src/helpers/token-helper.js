import {http} from '@/helpers/http-helper'
import SessionHelper from '@/helpers/session-storage-helper'

export default {
  accessToken: null,
  storeToken: function (token) {
    SessionHelper.set('token', token)
    this.accessToken = token
    http.defaults.headers.Authorization = 'Bearer ' + token
  },
  getToken: function () {
    if (typeof this.accessToken !== 'undefined' && this.accessToken !== null) {
      return this.accessToken
    } else if (SessionHelper.has('token')) {
      return SessionHelper.get('token')
    }
    return ''
  }
}
