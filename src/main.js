// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BaseLayout from '@/components/BaseLayout'
import ValidatedInput from '@/components/common/ValidatedInput'

Vue.config.productionTip = false

Vue.component('BaseLayout', BaseLayout)
Vue.component('ValidatedInput', ValidatedInput)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, BaseLayout },
  template: '<App/>'
})
