<template>
  <div id="app">
    <base-layout>
      <div slot="header">
        <site-header></site-header>
      </div>
      <div slot="sidebar">
        <sidebar></sidebar>
      </div>
      <div slot='content'>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </base-layout>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
  @import './assets/base.scss';
</style>
