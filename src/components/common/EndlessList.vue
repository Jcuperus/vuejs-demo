<template>
  <div class="endless" v-scroll="handleScroll">
    <div v-for="item in items" v-bind:key="item.id">
      <slot name="item" v-bind="item"></slot>
    </div>
    <button class="top btn btn-primary" v-bind:class="{ visible: items.length > 10 }" v-on:click="top">
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
      current: Object.assign({}, this.paginated),
      items: [],
      locked: false
    }
  },
  methods: {
    next: function () {
      if (this.current.next_page_url) {
        PaginationHelper.fetchPage(this.current.next_page_url).then(response => {
          this.current = response.data
          this.items = this.items.concat(this.current.data)
          this.locked = false
          console.log(this.items)
        })
      }
    },
    handleScroll: function (event, element) {
      if (window.scrollY >= this.items.length * 200 && !this.locked) {
        this.locked = true
        this.next()
      }
    },
    top: function () {
      window.scrollTo(0, 0)
    }
  },
  watch: {
    paginated: function () {
      this.current = this.paginated
      this.items = this.paginated.data
    }
  }
}
</script>
