// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BaseLayout from '@/components/BaseLayout'
import Header from '@/components/base/Header'
import Sidebar from '@/components/base/Sidebar'
import Blog from '@/components/blogs/Blog'
import BlogEdit from '@/components/blogs/BlogEdit'

Vue.config.productionTip = false

Vue.component('site-header', Header)
Vue.component('sidebar', Sidebar)
Vue.component('base-layout', BaseLayout)
Vue.component('blog', Blog)
Vue.component('blog-edit', BlogEdit)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, BaseLayout, Header, Blog },
  template: '<App/>'
})
