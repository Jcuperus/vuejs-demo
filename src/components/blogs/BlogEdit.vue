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
                <input type="text" class="form-control" v-model="blog.title">
              </div>
              <div class="form-group">
                <label>Author</label>
                <input type="text" class="form-control" v-model="blog.author">
              </div>
              <div class="form-group">
                <label>Content</label>
                <textarea class="form-control" v-model="blog.content" rows="10"></textarea>
              </div>
              <div class="form-group">
                <input class="btn btn-primary" type="submit">
              </div>
            </form>
          </div>
          <div class="col-lg-6">
            <blog v-bind:title="blog.title" v-bind:author="blog.author" v-bind:content="blog.content" created_at="Today"></blog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import router from '../../router'

export default {
  name: 'blogEdit',
  data: function () {
    return {
      blog: {
        id: null,
        title: null,
        author: null,
        content: null
      }
    }
  },
  created () {
    if (this.$route.params.id && this.$route.params.id >= 0) {
      this.getBlog(this.$route.params.id)
    }
  },
  methods: {
    saveBlog: function (blog) {
      if (blog.id && blog.id > 0) {
        axios.put('https://arcane-fjord-92541.herokuapp.com/api/blogs/' + blog.id, blog)
          .then(response => {
            router.push({name: 'Blogs'})
          })
      } else {
        axios.post('https://arcane-fjord-92541.herokuapp.com/api/blogs', blog)
          .then(response => {
            router.push({name: 'Blogs'})
          })
          .catch(e => {
            console.log(e)
          })
      }
    },
    getBlog: function (id) {
      axios.get('https://arcane-fjord-92541.herokuapp.com/api/blogs/' + id)
        .then(response => {
          this.blog = response.data
        })
    }
  }
}
</script>
