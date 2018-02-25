<template>
  <div class="blogs">
    <a class="btn btn-default btn-primary btn-block" href="#" v-on:click.prevent="$router.push({name: 'CreateBlog'})">Create new blog</a>
    <blog v-for="blog in blogs" :key="blog.id" v-bind:title="blog.title" v-bind:author="blog.author" v-bind:editable="false" v-bind:content="blog.content">
      <span slot="actions">
        <a class="btn btn-danger" v-on:click.prevent="deleteBlog(blog.id)"><i class="fa fa-trash"></i></a>
        <a class="btn btn-primary" v-on:click.prevent="openBlog(blog.id)"><i class="fa fa-edit"></i></a>
      </span>
    </blog>
  </div>
</template>
<script>
import axios from 'axios'
import router from '../../router'

export default {
  name: 'Blogs',
  data () {
    return {
      blogs: []
    }
  },
  created () {
    this.getBlogs()
  },
  methods: {
    getBlogs: function () {
      axios.get('http://vuedemo.local/api/blogs')
        .then(response => {
          this.blogs = response.data
        })
    },
    deleteBlog: function (id) {
      axios.delete('http://vuedemo.local/api/blogs/' + id)
        .then(response => {
          console.log(id + ' deleted')
          this.getBlogs()
        })
    },
    openBlog: function (id) {
      router.push({name: 'EditBlog', params: { id: id }})
    }
  }
}
</script>
