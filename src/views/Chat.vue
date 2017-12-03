<template>
  <view-container class="chat-view">
    <div class="messages">
      <chat-message
        class="message"
        v-for="(message, index) in messages"
        :key="index"
        :sender="message.sender"
        :text="message.text"
      />
    </div>
    <chat-field slot="footer" />
  </view-container>
</template>

<script>
  import * as types from '../store/types'
  import { mapGetters } from 'vuex'
  import ChatMessage from '../components/Chat/ChatMessage'
  import ChatField from '../components/Chat/ChatField'
  import ViewContainer from '../components/View/ViewContainer'

  export default {
    components: { ChatField, ChatMessage, ViewContainer },
    computed: mapGetters({
      messages: types.MESSAGES
    })
  }
</script>

<style lang="scss">
  .chat-view .messages {
    display: flex;
    flex-direction: column;

    & > .message {
      margin-bottom: 1rem;
      border-radius: 1rem;
    }

    & > .message.-bot {
      align-self: flex-start;
      background-color: rgba(#fff, .25);
    }

    & > .message.-user {
      align-self: flex-end;
      border: 1px solid #fff;
    }
  }
</style>
