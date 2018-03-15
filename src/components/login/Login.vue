<template>
  <div class="login">
      <div class="card">
          <div class="card-header">
            <h2>Login</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="this.login(credentials)">
              <div class="form-group">
                <input type="text" class="form-control" v-model="credentials.username" placeholder="Username">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" v-model="credentials.password" placeholder="Password">
              </div>
              <div class="form-group">
                <input type="submit" class="btn btn-primary">
              </div>
            </form>
          </div>
      </div>
  </div>
</template>
<script>
import {login} from '@/utils/login-api-helper'
import router from '@/router'

export default {
  name: 'Login',
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login: function (credentials) {
      login(this.username, this.password).then(response => {
        router.push({ name: 'Blogs' })
      })
    }
  }
}
</script>
