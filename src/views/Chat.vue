<template>
  <view-container>
    <article class="chat-container">
      <div class="messages">
        <chat-message
          v-for="(message, index) in messages"
          :key="index"
          :sender="message.sender"
          :message="message.text"
        />
      </div>
      <chat-field />
    </article>
  </view-container>
</template>

<script>
  import * as types from '../store/types'
  import { mapGetters } from 'vuex'
  import ChatMessage from '../components/Chat/ChatMessage'

  export default {
    components: { ChatMessage },
    computed: mapGetters({
      messages: types.MESSAGES
    })
  }
</script>
