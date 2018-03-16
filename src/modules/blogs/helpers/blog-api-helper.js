import {http} from '@/helpers/http-helper'

export default {
  getBlogs: function () {
    return http.get('blogs')
  },
  getBlog: function (id) {
    return http.get('blogs/' + id)
  },
  createBlog: function (blog) {
    return http.post('blogs/', blog)
  },
  updateBlog: function (id, blog) {
    return http.put('blogs/' + id, blog)
  },
  deleteBlog: function (id) {
    return http.delete('blogs/' + id)
  }
}
