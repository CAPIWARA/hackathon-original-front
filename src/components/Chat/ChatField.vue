<template>
  <form-container class="chat-field" @submit="send">
    <textarea
      v-model="text"
      class="field"
      rows="2"
      placeholder="Ex. O que é um investimento?"
    ></textarea>
    <button class="button">▶</button>
  </form-container>
</template>

<script>
  import * as types from '../../store/types'
  import FormContainer from '../Form/FormContainer'

  export default {
    components: { FormContainer },
    data () {
      return {
        text: ''
      }
    },
    methods: {
      send () {
        this.$store.dispatch(types.MESSAGES_SEND, this.text)
        this.text = ''
      }
    }
  }
</script>

<style lang="scss">
  .chat-field {
    width: 100%;
    padding: 0;
    flex-direction: row !important;

    & > .field {
      flex: 1;
      width: calc(100% - 2rem);
      margin: 0;
      padding: 0;
      border: 0 none transparent;
      background-color: transparent;
      color: #fff;
      resize: none;
      border-bottom: 2px solid rgb(255, 255, 255);
      flex: 1;
      margin-right: .5rem;

      &::placeholder { color: rgba(#fff, .75); }

      &:focus { outline: 0 none transparent; }
    }

    & > .button {
      flex: 0 0 2rem;
    }
  }
</style>
