<template>
  <div class="login">
      <div class="card">
          <div class="card-header">
            <h2>Login</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="login(username, password)">
              <div class="form-group">
                <validated-input v-bind:errors="errors.username">
                  <input type="text" class="form-control" v-model="credentials.username" placeholder="Username">
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
import {login} from '@/utils/login-api-helper'
import router from '@/router'

export default {
  name: 'Login',
  data () {
    return {
      credentials: {
        username: null,
        password: null
      },
      errors: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    login: function (username, password) {
      login(username, password).then(response => {
        console.log(response)
        // router.push({ name: 'Blogs' })
      }).catch(e => {
        this.errors = e.response.data.errors
        console.log(this.errors)
      })
    }
  }
}
</script>
