<template>
  <header class="header-container">
    <header-burguer class="burguer" />
  </header>
</template>

<script>
  import HeaderBurguer from './HeaderBurguer'

  export default {
    components: { HeaderBurguer }
  }
</script>

<style lang="scss">
  .header-container {
    position: absolute;
    top: 0;
    right: 0;
    left:0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 3.75rem;
    background-color: rgba(#000, .6);

    & > .burguer {
      margin-left: auto;
    }
  }
</style>
