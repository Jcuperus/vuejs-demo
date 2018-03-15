<template>
  <div id="header" v-on:click.prevent="$router.push({ name: 'Blogs' })">
      <h1>Vue.js Demo</h1>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
