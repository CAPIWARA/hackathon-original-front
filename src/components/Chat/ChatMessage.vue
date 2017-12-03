<template>
  <p :class="['chat-message', '-' + sender]">{{ text }}</p>
</template>

<script>
  export default {
    props: {
      text: String,
      sender: String
    }
  }
</script>

<style lang="scss">
  .chat-message {
    margin: 0;
    padding: 1rem;
    max-width: 80%;

    &.-bot {
      
    }
  }
</style>
