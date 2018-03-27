<template>
  <div class="blog-edit">
    <div class="card">
      <h2 class="card-header">Create blog</h2>
      <div class="card-body">
        <div class="row">
          <div class="col-lg-6">
            <blog-form v-bind:blog="blog" v-on:save="redirect"/>
          </div>
          <div class="col-lg-6">
            <blog v-bind="blog" created_at="Today"></blog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Blog from './Blog'
import BlogForm from './BlogForm'
import BlogApiHelper from './helpers/blog-api-helper'
import router from '@/router'

export default {
  name: 'BlogEdit',
  components: {
    Blog,
    BlogForm
  },
  data: function () {
    return {
      blog: {
        id: null,
        title: null,
        content: null,
        user: {
          name: 'You'
        }
      },
      errors: {
        title: null,
        content: null
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('enter', to)
    if (to.params.blogId) {
      BlogApiHelper.getBlog(to.params.blogId).then(response => {
        next(vm => vm.setBlog(response.data))
      })
    } else {
      next()
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log('update')
    if (to.params.blogId) {
      BlogApiHelper.getBlog(to.params.blogId).then(response => {
        this.setBlog(response.data)
      })
    }
    next()
  },
  methods: {
    getBlog: function (id) {
      BlogApiHelper.getBlog(id).then(response => {
        this.blog = response.data
      })
    },
    setBlog: function (blog) {
      this.blog = blog
    },
    redirect: function () {
      router.push({
        name: 'Blogs'
      })
    }
  }
}
</script>
