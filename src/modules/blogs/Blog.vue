<template>
  <div class="blog">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-lg-9">
            <h2>{{ title }}</h2>
          </div>
          <div class="col-lg-3 actions">
            <slot name="actions"></slot>
          </div>
        </div>
      </div>
      <div class="card-body">
        <h6 class="card-subtitle">{{ created_at }}</h6>
        <p class="card-text">{{ content }}</p>
        <footer class="blockquote-footer">Written by: {{ user.name }}</footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Blog',
  props: {
    id: {
      type: Number,
      default: null
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    user: {
      name: {
        type: String,
        default: 'You'
      }
    },
    created_at: {
      type: String,
      default: 'Now'
    }
  }
}
</script>
<style  scoped>
  @import '../../assets/blog.css';
</style>
