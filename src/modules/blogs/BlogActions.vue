<template>
  <span>
      <a class="btn btn-primary" v-on:click.prevent="deleteBlog(blogId)"><i class="far fa-trash-alt"></i></a>
      <a class="btn btn-primary" v-on:click.prevent="openBlog(blogId)"><i class="far fa-edit"></i></a>
  </span>
</template>
<script>
import BlogApiHelper from './helpers/blog-api-helper'
import router from '@/router'

export default {
  name: 'BlogActions',
  props: ['blogId'],
  methods: {
    openBlog: function () {
      router.push({ name: 'EditBlog', params: { blogId: this.blogId } })
    },
    deleteBlog: function () {
      BlogApiHelper.deleteBlog(this.blogId).then(response => {
        this.$emit('delete', this.blogId)
      })
    }
  }
}
</script>
