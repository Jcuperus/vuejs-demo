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

Vue.directive('scroll', {
  inserted: function (element, binding) {
    let func = function (eventt) {
      if (binding.value(event, element)) {
        window.removeEventListener('scroll', func)
      }
    }
    window.addEventListener('scroll', func)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, BaseLayout },
  template: '<App/>'
})
