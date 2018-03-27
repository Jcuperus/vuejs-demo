<template>
  <div class="login-header">
    <transition name="slide-top">
      <user-panel v-if="showPanel && loggedIn" v-on:logout="loggedIn = false" v-bind:name="user.name" v-bind:image="user.image" class="panel"></user-panel>
      <login-form v-else-if="showPanel && !loggedIn" v-on:login="onLogin"></login-form>
    </transition>
    <div class="user-icon" v-on:click="showPanel = !showPanel">
      <i v-if="loggedIn" class="far fa-2x fa-user"></i>
      <i v-else class="fa fa-2x fa-sign-in-alt"></i>
    </div>
  </div>
</template>
<script>
import LoginForm from './LoginForm'
import UserPanel from './UserPanel'
import CurrentUserHelper from './helpers/current-user-helper'

export default {
  name: 'LoginHeader',
  components: {
    LoginForm,
    UserPanel
  },
  data () {
    return {
      showPanel: false,
      loggedIn: false,
      user: null
    }
  },
  created () {
    this.user = CurrentUserHelper.getCurrentUser()
    if (this.user !== null) {
      this.loggedIn = true
    }
  },
  methods: {
    onLogin: function () {
      this.loggedIn = true
      this.user = CurrentUserHelper.getCurrentUser()
    }
  }
}
</script>
<style>
  @import './assets/login.css'
</style>
