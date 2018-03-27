<template>
  <div class="blogs-list">
    <transition-group name="blogs-complete">
      <blog v-for="(blog, index) in blogs" :key="blog.id" v-bind:title="blog.title" v-bind:author="blog.user.name" v-bind:editable="false" v-bind:content="blog.content" v-bind:index="index">
        <span slot="actions">
          
        </span>
      </blog>
    </transition-group>
  </div>
</template>
<script>
import Blog from './Blog'

export default {
  name: 'BlogsList',
  components: {
    Blog
  },
  props: [
    'blogs'
  ]
}
</script>
