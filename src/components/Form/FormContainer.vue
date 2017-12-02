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

    & > .fields{
      padding: 0 1rem;

      & > * + * { margin-top: .75rem; }
    }

    & > .actions {
      margin-top: 1.25rem;
      border-top: 2px solid #eaedef;
      padding: .5rem 1rem;
      text-align: right;

      & > * + * { margin-left: .5rem; }
    }
  }
</style>
