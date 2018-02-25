<template>
  <div class="base">
    <navigation></navigation>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
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
