<template>
  <main class="view-container">
    <view-loading v-if="isLoading" />

    <section v-if="!isLoading" class="content">
      <h1 class="title">
        <slot name="title" />
      </h1>
      <slot />
    </section>

    <footer v-if="!isLoading" class="footer">
      <slot name="footer" />
    </footer>
  </main>
</template>

<script>
  import ViewLoading from './ViewLoading'

  export default {
    components: { ViewLoading },
    props: {
      isLoading: Boolean
    }
  }
</script>

<style lang="scss">
  .view-container {
    padding-top: 60px;

    & > .content {
      @extend .view-content;
      overflow: auto;
      height: calc(100vh - (60px + 60px));
    }

    & > .footer {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 60px;
      padding: 0 1rem;
      border-top: 2px solid #fff;

      & > * + * { margin-left: .5rem; }
    }
  }

  .view-content {
    box-sizing: border-box;
    padding: 1rem;

    & > .title {
      margin: 1rem 0 2rem;
      box-sizing: border-box;
      font-weight: 300;
    }

    & > .title::after {
      display: block;
      width: 30px;
      height: 2px;
      background-color: #fff;
      content: '';
    }
  }
</style>
