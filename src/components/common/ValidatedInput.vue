<template>
  <div>
    <slot></slot>
    <small v-if="errors && errors.length > 0" class="form-text text-danger">
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </small>
  </div>
</template>
<script>
export default {
  name: 'ValidatedInput',
  props: ['errors']
}
</script>
