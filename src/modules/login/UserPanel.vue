<template>
  <div class="user-panel">
    <div class="card">
      <img class="card-img-top" src="../../assets/images/robbie_rotten.jpeg" alt="User image">
      <div class="card-body">
        <h2>{{ name }}</h2>
        <a class="btn btn-primary" v-on:click="logout">Logout</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserPanel',
  props: ['name', 'image'],
  methods: {
    logout: function () {
      this.$emit('logout')
    }
  }
}
</script>
