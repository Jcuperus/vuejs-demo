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
        <footer class="blockquote-footer">Written by: {{ author }}</footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Blog',
  props: ['title', 'author', 'created_at', 'content']
}
</script>
