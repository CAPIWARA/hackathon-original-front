<template>
  <button class="header-burguer">
    <span class="stick"></span>
    <span class="stick"></span>
    <span class="stick"></span>
  </button>
</template>

<script>
  export default {
    props: {
      active: Boolean
    }
  }
</script>

<style lang="scss">
  .header-burguer {
    display: flex;
    flex-direction: column;

    & > .stick {
      width: 2rem;
      height: .25rem;
      background-color: #fff;
      border-radius: .2rem;
    }

    & > .stick + .stick { margin-top: .4rem; }
  }
</style>
