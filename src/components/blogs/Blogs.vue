<template>
  <div class="blogs">
    <a class="btn btn-default btn-primary btn-block" href="#" v-on:click.prevent="$router.push({ name: 'CreateBlog' })">Create new blog</a>
      <transition-group name="blogs-complete">
        <blog v-for="(blog, index) in blogs" :key="blog.id" v-bind:title="blog.title" v-bind:author="blog.user.name" v-bind:editable="false" v-bind:content="blog.content" v-bind:index="index">
          <span slot="actions">
            <a class="btn btn-danger" v-on:click.prevent="deleteBlog(blog.id)"><i class="fa fa-trash"></i></a>
            <a class="btn btn-primary" v-on:click.prevent="openBlog(blog.id)"><i class="fa fa-edit"></i></a>
          </span>
        </blog>
      </transition-group>
  </div>
</template>
<script>
import {getBlogs, deleteBlog} from '@/utils/blog-api-helper'
import router from '@/router'

export default {
  name: 'Blogs',
  data () {
    return {
      blogs: []
    }
  },
  created () {
    this.updateBlogs()
  },
  methods: {
    openBlog: function (id) {
      router.push({ name: 'EditBlog', params: { id: id } })
    },
    deleteBlog: function (id) {
      deleteBlog(id).then(response => {
        this.updateBlogs()
      })
    },
    updateBlogs: function () {
      getBlogs().then(response => {
        this.blogs = response.data
      })
    }
  }
}
</script>
