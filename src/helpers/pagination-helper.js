import {http, trimUrl} from '@/helpers/http-helper'

export default {
  fetchPage: function (url) {
    return http.get(trimUrl(url))
  }
}
