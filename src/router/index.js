import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import BlogRoutes from '@/modules/blogs/router'

Vue.use(Router, VueAxios, axios)

const baseRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    label: 'Login'
  }
]

const routes = baseRoutes.concat(BlogRoutes)

export default new Router({
  routes
})
