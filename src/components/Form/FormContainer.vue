<template>
  <form class="form-container" @submit.prevent="submit">
    <slot />
  </form>
</template>

<script>
  export default {
    methods: {
      submit () {
        this.$emit('submit')
      }
    }
  }
</script>

<style lang="scss">
  .form-container {
    display: flex;
    flex-direction: column;

    & > .field + .field { margin-top: .75rem; }
  }
</style>
