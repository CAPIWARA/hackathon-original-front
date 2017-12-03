<template>
  <figure :class="['child-pill', { '-alternative': alternative }]">
    <img class="avatar" :src="avatar" />
    <figcaption class="info">
      <h3 class="name">{{ name }}</h3>
      <h4 class="account">{{ account }}</h4>
    </figcaption>
  </figure>
</template>

<script>
  export default {
    props: {
      avatar: String,
      name: String,
      account: String,
      alternative: Boolean
    }
  }
</script>

<style lang="scss">
  @import '../../style/theme.scss';

  .child-pill {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;

    &.-alternative > .info > .name,
    &.-alternative > .info > .account { color: $color-primary; }

    &.-alternative > .avatar {
      border: 1px solid rgba(#000, .25);
    }

    & > .avatar {
      display: block;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      margin-right: .5rem;
    }

    & > .info { @extend .child-pill-info; }
  }

  .child-pill-info {
    & > .name,
    & > .account {
      margin: 0;
      font-weight: 300;
    }

    & > .name { margin-bottom: .5rem; }
  }
</style>
