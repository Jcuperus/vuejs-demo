<template>
  <div class="login">
      <div class="card">
          <div class="card-header">
            <h2>Login</h2>
          </div>
          <div class="card-body">
            <small class="form-text text-danger" v-if="errors.auth !== null">{{ errors.auth }}</small>
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
import LoginApiHelper from './helpers/login-api-helper'
import TokenHelper from '@/helpers/token-helper'
import CurrentUserHelper from './helpers/current-user-helper'

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
      LoginApiHelper.login(email, password).then(response => {
        console.log(response)
        if (response.status === 200) {
          TokenHelper.storeToken(response.data.accessToken)
          CurrentUserHelper.storeUser(response.data.user)
          this.$emit('login')
        } else {
          this.errors.auth = 'Invalid crendentials'
        }
      }).catch(e => {
        if (e.response.status === 422) {
          this.errors = e.response.data.errors
        } else {
          this.errors.auth = 'Invalid credentials'
        }
      })
    }
  }
}
</script>
