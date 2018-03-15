import {http} from '@/utils/http-helper'

export function getBlogs () {
  return http.get('blogs')
}

export function getBlog (id) {
  return http.get('blogs/' + id)
}

export function createBlog (blog) {
  return http.post('blogs/', blog)
}

export function updateBlog (id, blog) {
  return http.put('blogs/' + id, blog)
}

export function deleteBlog (id) {
  return http.delete('blogs/' + id)
}
