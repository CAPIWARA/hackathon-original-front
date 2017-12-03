<template>
  <nav class="navigation-tabs">
    <router-link
      v-for="(tab, index) in tabs"
      exact
      class="tab"
      active-class="-active"
      exact-active-class="-active"
      :key="tab.text"
      :to="tab.path"
    >{{ tab.text }}</router-link>
  </nav>
</template>

<script>
  export default {
    props: {
      tabs: Array
    }
  }
</script>

<style lang="scss">
  @import '../../style/theme.scss';

  .navigation-tabs {
    box-sizing: border-box;
    position: relative;
    display: flex;
    width: 100%;
    padding: 0 .75rem;
    border-bottom: 2px solid #fff;

    & > .tab {
      display: inline-block;
      padding: .75rem;
      border-bottom: 2px solid transparent;
      color: inherit;
      text-decoration: none;
      transition: color .3s ease,
                  background-color .3s ease;

      border: solid #fff;
      border-width: 2px 0 0 0;
    }

    & > .tab.-active,
    & > .tab:active {
      font-weight: 400;
      background-color: #fff;
      color: $color-primary;
    }

    & > .tab:first-child {
      border-radius: 1.5rem 0 0 0;
      border-width: 2px 0 0 2px;
    }

    & > .tab:last-child {
      border-radius: 0 1.5rem 0 0;
      border-width: 2px 2px 0 0;
    }
  }
</style>
