<template>
  <div id="app">
    <base-layout>
      <div slot='content'>
        <router-view></router-view>
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
