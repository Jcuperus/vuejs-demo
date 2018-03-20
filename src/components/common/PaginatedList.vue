<template>
  <div class="paginated">
    <div class="btn-group">
      <button type="button" class="btn btn-secondary" v-on:click="previous"><i class="fa fa-fw fa-arrow-left"></i></button>
      <button class="btn btn-secondary" v-on:click="first">{{ current.current_page }}</button>
      <button type="button" class="btn btn-secondary" v-on:click="next"><i class="fa fa-fw fa-arrow-right"></i></button>
    </div>
    <transition-group name="blogs-complete">
      <div v-for="item in current.data" v-bind:key="item.id">
        <slot name="item" v-bind="item"></slot>
      </div>
    </transition-group>
  </div>
</template>
<script>
import PaginationHelper from '@/helpers/pagination-helper'

export default {
  name: 'PaginatedList',
  props: [
    'paginated'
  ],
  data () {
    return {
      current: Object.assign({}, this.paginated)
    }
  },
  methods: {
    next: function () {
      if (this.current.next_page_url) {
        PaginationHelper.fetchPage(this.current.next_page_url).then(response => {
          this.current = response.data
        })
      }
    },
    previous: function () {
      if (this.current.prev_page_url) {
        PaginationHelper.fetchPage(this.current.prev_page_url).then(response => {
          this.current = response.data
        })
      }
    },
    first: function () {
      if (this.current.first_page_url) {
        PaginationHelper.fetchPage(this.current.first_page_url).then(response => {
          this.current = response.data
        })
      }
    }
  },
  watch: {
    paginated: function () {
      this.current = this.paginated
    }
  }
}
</script>
