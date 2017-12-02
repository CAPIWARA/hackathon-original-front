<template>
  <form class="form-container" @submit.prevent="submit">
    <slot></slot>
    <fieldset class="actions">
      <slot name="actions"></slot>
    </fieldset>
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
