<template>
  <div class="base">
    <div id="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <!-- <div id="sidebar">
        <slot name="sidebar"></slot>
      </div> -->
      <div class="container">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseLayout'
}
</script>
