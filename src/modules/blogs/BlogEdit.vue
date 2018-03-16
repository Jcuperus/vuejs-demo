<template>
  <div class="blog-edit">
    <div class="card">
      <h2 class="card-header">Create blog</h2>
      <div class="card-body">
        <div class="row">
          <div class="col-lg-6">
            <form @submit.prevent="saveBlog(blog)">
              <div class="form-group">
                <label>Title</label>
                <validated-input v-bind:errors="errors.title">
                  <input type="text" class="form-control" v-model="blog.title">
                </validated-input>
              </div>
              <div class="form-group">
                <label>Content</label>
                <validated-input v-bind:errors="errors.content">
                  <textarea class="form-control" v-model="blog.content" rows="10"></textarea>
                </validated-input>
              </div>
              <div class="form-group">
                <input class="btn btn-primary" type="submit">
              </div>
            </form>
          </div>
          <div class="col-lg-6">
            <blog v-bind:title="blog.title" v-bind:author="blog.user.name" v-bind:content="blog.content" created_at="Today"></blog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BlogApiHelper from './helpers/blog-api-helper'
import router from '@/router'

export default {
  name: 'blogEdit',
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
    if (to.params.id) {
      BlogApiHelper.getBlog(to.params.id).then(response => {
        next(vm => vm.setBlog(response.data))
      })
    } else {
      next()
    }
  },
  beforeRouteUpdate (to, from, next) {
    if (to.params.id) {
      BlogApiHelper.getBlog(to.params.id).then(response => {
        this.setBlog(response.data)
      })
    }
    next()
  },
  methods: {
    saveBlog: function (blog) {
      if (blog.id && blog.id > 0) {
        BlogApiHelper.updateBlog(blog.id, blog).then(response => {
          router.push({ name: 'Blogs' })
        }).catch(e => {
          this.errors = e.response.data.errors
        })
      } else {
        BlogApiHelper.createBlog(blog).then(response => {
          router.push({ name: 'Blogs' })
        }).catch(e => {
          this.errors = e.response.data.errors
        })
      }
    },
    getBlog: function (id) {
      BlogApiHelper.getBlog(id).then(response => {
        this.blog = response.data
      })
    },
    setBlog: function (blog) {
      this.blog = blog
    }
  }
}
</script>
