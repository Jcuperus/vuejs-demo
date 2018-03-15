import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Blogs from '@/components/blogs/Blogs'
import BlogEdit from '@/components/blogs/BlogEdit'
import {authenticate} from '@/utils/login-api-helper'

Vue.use(Router, VueAxios, axios)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      label: 'Login'
    },
    {
      path: 'blog/:id',
      beforeEnter: (to, from, next) => {
        authenticate().then(response => {
          next()
        })
      },
      name: 'EditBlog',
      component: BlogEdit
    },
    {
      path: 'blog/',
      beforeEnter: (to, from, next) => {
        authenticate().then(response => {
          next()
        })
      },
      name: 'CreateBlog',
      component: BlogEdit
    },
    {
      path: '/',
      name: 'Blogs',
      component: Blogs,
      label: 'Home'
    }
  ]
})
