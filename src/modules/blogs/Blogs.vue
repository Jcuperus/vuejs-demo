<template>
  <div class="blogs">
    <a class="btn btn-default btn-primary btn-block" href="#" v-on:click.prevent="$router.push({ name: 'CreateBlog' })">Create new blog</a>
    <endless-list v-bind:paginated="blogs">
      <blog slot="item" slot-scope="blog" v-bind="blog" v-bind:key="blog.id">
        <blog-actions slot="actions" v-bind:blogId="blog.id" v-on:delete="deleteBlog"></blog-actions>
      </blog>
    </endless-list>
  </div>
</template>
<script>
import EndlessList from '@/components/common/EndlessList'
import BlogActions from './BlogActions'
import Blog from './Blog'
import BlogApiHelper from './helpers/blog-api-helper'

export default {
  name: 'Blogs',
  components: {
    EndlessList,
    Blog,
    BlogActions
  },
  data () {
    return {
      blogs: []
    }
  },
  created () {
    this.updateBlogs()
  },
  methods: {
    deleteBlog: function (id) {
      let i = this.blogs.data.findIndex(blog => blog.id === id)
      this.blogs.data.splice(i, 1)
    },
    updateBlogs: function () {
      BlogApiHelper.getBlogs().then(response => {
        this.blogs = response.data
      })
    }
  }
}
</script>
