<template>
  <router-view />
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,500,500i');
  @import './style/theme.scss';

  %-default-font {
    font-size: 1rem;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
    @extend %-default-font;
  }

  input, select, select > option, textarea, button {
    @extend %-default-font;
  }

  h1, h2 {
    margin: 0;
    padding: .75rem .75rem;
    box-sizing: border-box;
    font-weight: 300;
    &::after {
      display: block;
      width: 30px;
      height: 2px;
      background-color: $color-primary;
      content: '';
    }
  }

  .button {
    background-color: $color-primary;
    color: #fff;
    padding: .5rem 1rem;
    border: 0 none transparent;
    border-bottom: 2px solid $color-primary-dark;
    border-radius: 0;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
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
    background-color: $color-border;
    border-bottom-color: darken($color-border, 10%);
  }
</style>
