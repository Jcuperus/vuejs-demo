import {http} from '@/helpers/http-helper'

export default {
  login: function (email, password) {
    console.log(http.defaults)
    return http.post('login', {
      email: email,
      password: password
    })
  },
  authenticate: function () {
    return http.get('authenticate')
  },
  logout: function () {

  }
}
