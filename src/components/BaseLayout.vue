<template>
  <div class="base">
    <slot name="header"></slot>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2">
          <slot name="sidebar"></slot>
        </div>
        <div class="col-lg-8">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseLayout'
}
</script>
