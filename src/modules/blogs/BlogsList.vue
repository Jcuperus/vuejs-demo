<template>
  <div class="blogs-list">
    <transition-group name="blogs-complete">
      <blog v-for="(blog, index) in blogs" :key="blog.id" v-bind:title="blog.title" v-bind:author="blog.user.name" v-bind:editable="false" v-bind:content="blog.content" v-bind:index="index">
        <span slot="actions">
          <!-- <a class="btn btn-danger" v-on:click.prevent="deleteBlog(blog.id)"><i class="fa fa-trash"></i></a> -->
          <!-- <a class="btn btn-primary" v-on:click.prevent="openBlog(blog.id)"><i class="fa fa-edit"></i></a> -->
        </span>
      </blog>
    </transition-group>
  </div>
</template>
<script>
import Blog from './Blog'
import router from '@/router'

export default {
  name: 'BlogsList',
  components: {
    Blog
  },
  props: [
    'blogs'
  ],
  methods: {
    openBlog: function (id) {
      router.push({ name: 'EditBlog', params: { id: id } })
    },
    deleteBlog: function (id) {
      // Emit event
      // BlogApiHelper.deleteBlog(id).then(response => {
      //   this.updateBlogs()
      // })
    }
  },
  created () {
    console.log(this)
  }
}
</script>
