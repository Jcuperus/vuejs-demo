import Vue from 'vue'
import Router from 'vue-router'
import Blogs from '@/components/blogs/Blogs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blogs',
      component: Blogs
    }
  ]
})
