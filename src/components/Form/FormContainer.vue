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

<style lang="scss">
  .form-container {
    & > .fields,
    & > .actions {
      margin: 0;
      padding: 0;
      border: 0 none transparent;
    }

    & > .actions {
      margin-top: 2.25rem;
      border-top: 2px solid #eaedef;
      text-align: right;
    }
  }
</style>
