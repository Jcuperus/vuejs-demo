<template>
  <div class="endless" v-scroll="handleScroll">
    <div v-for="page in pages" class="page" v-bind:key="page.current_page">
      <transition-group appear name="panel-slide">
        <div class="panel-slide-item" v-for="item in page.data" v-bind:key="item.id">
          <slot name="item" class="panel-slide-item" v-bind="item"></slot>
        </div>
      </transition-group>
      <div class="page-divider" v-if="page.next_page_url !== null">Page {{ page.current_page + 1 }}</div>
    </div>
    <button class="top btn btn-primary" v-bind:class="{ visible: pages.length > 1 }" v-on:click="top">
      <i class="fa fa-caret-up"></i>
    </button>
  </div>
</template>
<script>
import PaginationHelper from '@/helpers/pagination-helper'

export default {
  name: 'EndlessList',
  props: [
    'paginated'
  ],
  data () {
    return {
      pages: [],
      current: Object.assign({}, this.paginated),
      locked: false
    }
  },
  methods: {
    next: function () {
      if (this.current.next_page_url) {
        PaginationHelper.fetchPage(this.current.next_page_url).then(response => {
          this.current = response.data
          this.pages.push(this.current)
          this.locked = false
        })
      }
    },
    handleScroll: function (event, element) {
      if (window.scrollY >= this.$el.offsetHeight - window.innerHeight && !this.locked) {
        this.locked = true
        this.next()
      }
    },
    top: function () {
      window.scroll({
        top: this.$el.offsetTop
      })
    }
  },
  watch: {
    paginated: function () {
      this.current = this.paginated
      this.pages.push(this.paginated)
    }
  }
}
</script>
