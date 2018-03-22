<template>
  <div class="endless" v-scroll="handleScroll">
    <transition-group appear name="panel-slide">
      <div class="panel-slide-item" v-for="item in items" v-bind:key="item.id">
        <slot name="item" class="panel-slide-item" v-bind="item"></slot>
      </div>
    </transition-group>
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
      this.items = this.paginated.data
    }
  }
}
</script>
