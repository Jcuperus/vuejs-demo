<template>
  <div class="blog-form">
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
</template>
<script>
import BlogApiHelper from './helpers/blog-api-helper'

export default {
  name: 'BlogForm',
  props: {
    blog: {
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
          type: String
        },
        default: null
      }
    }
  },
  data: function () {
    return {
      errors: {
        title: null,
        content: null
      }
    }
  },
  methods: {
    saveBlog: function (blog) {
      if (blog.id && blog.id > 0) {
        BlogApiHelper.updateBlog(blog.id, blog).then(response => {
          this.$emit('save')
        }).catch(e => {
          this.errors = e.response.data.errors
        })
      } else {
        BlogApiHelper.createBlog(blog).then(response => {
          this.$emit('save')
        }).catch(e => {
          this.errors = e.response.data.errors
        })
      }
    }
  }
}
</script>
