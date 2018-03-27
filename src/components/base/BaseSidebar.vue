<template>
  <div class="nav flex-column nav-pills" aria-orientation="vertical">
    <router-link v-for="route in routes" :key="route.url" class="nav-link" :to="route" role="tab">{{ route.label }}</router-link>
  </div>
</template>
<script>
import router from '@/router'

export default {
  name: 'BaseSidebar',
  data () {
    return {
      routes: []
    }
  },
  created () {
    this.routes = router.options.routes.filter(route => {
      if (route.label && route.label !== '') {
        return route
      }
    })
  }
}
</script>
