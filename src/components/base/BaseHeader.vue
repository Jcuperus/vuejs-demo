<template>
  <div>
    <span><h1 v-on:click.prevent="$router.push({ name: 'Blogs' })">Vue.js Demo</h1></span>
    <login-header></login-header>
  </div>
</template>
<script>
import LoginHeader from '@/modules/login/LoginHeader'

export default {
  name: 'BaseHeader',
  components: {
    LoginHeader
  },
  data () {
    return {
      showLogin: false
    }
  }
}
</script>
