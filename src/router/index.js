import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from 'vue-router'
import Blogs from '@/components/blogs/Blogs'
import BlogEdit from '@/components/blogs/BlogEdit'

Vue.use(Router, VueAxios, axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blogs',
      component: Blogs
    },
    {
      path: '/blog/',
      name: 'CreateBlog',
      component: BlogEdit
    },
    {
      path: '/blog/:id',
      name: 'EditBlog',
      component: BlogEdit
    }
  ]
})
