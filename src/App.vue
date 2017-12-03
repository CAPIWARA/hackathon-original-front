<template>
  <main class="app-container">
    <header-container />
    <transition name="slide-fade">
      <router-view />
    </transition>
  </main>
</template>

<script>
  import HeaderContainer from './components/Header/HeaderContainer'

  export default {
    components: { HeaderContainer }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500');
  @import './style/theme.scss';

  %-default-font {
    font-size: 1rem;
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    margin: 0;
    background-image: linear-gradient($color-primary, $color-primary-dark);
    color: #fff;
    @extend %-default-font;
  }

  input, select, select > option, textarea, button {
    @extend %-default-font;
  }

  .button {
    background-color: transparent;
    color: #fff;
    padding: .5rem 1rem;
    border: 0 none transparent;
    border: 2px solid #fff;
    border-radius: 1.75rem;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
  }

  .button:focus {
    outline: 0 none transparent;
    box-shadow: none;
  }

  .button:active {
    border-bottom-width: 0;
    transform: translateY(2px);
    transition: border-bottom-width .05s ease,
                transform .05s ease;
  }

  .button[disabled] {
    color: $color-border;
    border-color: darken($color-border, 10%);
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
  }
</style>
