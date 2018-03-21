<template>
  <div class="blogs">
    <a class="btn btn-default btn-primary btn-block" href="#" v-on:click.prevent="$router.push({ name: 'CreateBlog' })">Create new blog</a>
    <endless-list v-bind:paginated="blogs">
      <blog slot="item" slot-scope="blog" v-bind="blog"></blog>
    </endless-list>
  </div>
</template>
<script>
import PaginatedList from '@/components/common/PaginatedList'
import EndlessList from '@/components/common/EndlessList'
import Blog from './Blog'
import BlogApiHelper from './helpers/blog-api-helper'
import router from '@/router'

export default {
  name: 'Blogs',
  components: {
    PaginatedList,
    EndlessList,
    Blog
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
    openBlog: function (id) {
      router.push({ name: 'EditBlog', params: { id: id } })
    },
    deleteBlog: function (id) {
      BlogApiHelper.deleteBlog(id).then(response => {
        this.updateBlogs()
      })
    },
    updateBlogs: function () {
      BlogApiHelper.getBlogs().then(response => {
        this.blogs = response.data
      })
    }
  }
}
</script>
