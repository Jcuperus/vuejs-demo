<template>
  <div id="app">
    <base-layout>
      <div slot="header">
        <base-header/>
      </div>
      <div slot="sidebar">
        <base-sidebar/>
      </div>
      <div slot='content'>
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </base-layout>
  </div>
</template>
<script>
import BaseHeader from '@/components/base/BaseHeader'
import BaseSidebar from '@/components/base/BaseSidebar'

export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseSidebar
  }
}
</script>
<style lang="scss">
  @import 'assets/base.css';
</style>
