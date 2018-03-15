<template>
  <div class="login">
      <div class="card">
          <div class="card-header">
            <h2>Login</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="login(credentials.email, credentials.password)">
              <div class="form-group">
                <validated-input v-bind:errors="errors.email">
                  <input type="text" class="form-control" v-model="credentials.email" placeholder="E-mail">
                </validated-input>
              </div>
              <div class="form-group">
                <validated-input v-bind:errors="errors.password">
                  <input type="password" class="form-control" v-model="credentials.password" placeholder="Password">
                </validated-input>
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
import { login, storeToken } from '@/utils/login-api-helper'
import router from '@/router'

export default {
  name: 'Login',
  data () {
    return {
      credentials: {
        email: null,
        password: null
      },
      errors: {
        email: null,
        password: null,
        auth: null
      }
    }
  },
  methods: {
    login: function (email, password) {
      login(email, password).then(response => {
        if (response.status === 200) {
          storeToken(response.data)
          router.push({ name: 'Blogs' })
        } else {
          console.log(response, 'auth failed')
        }
      }).catch(e => {
        if (e.response.status === 422) {
          this.errors = e.response.data.errors
        } else if (e.response.status === 401) {
          this.errors.auth = 'Invalid credentials'
        }
      })
    }
  }
}
</script>
