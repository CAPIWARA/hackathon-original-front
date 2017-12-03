<template>
  <div class="view-loading">
    <figure class="spinner"></figure>
    <p>Carregando...</p>
  </div>
</template>

<style lang="scss">
  .view-loading {
    height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    & > .spinner {
      width: 3rem;
      height: 3rem;
      border: .25rem solid;
      border-color: #fff #fff #fff transparent;
      border-radius: 50%;
      animation: spin .85s infinite linear;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    } 100% {
      transform: rotate(360deg)
    }
  }
</style>
