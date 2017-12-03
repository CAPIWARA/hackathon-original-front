import axios from 'axios'
import * as types from './types'

const state = {
  messages: [
    {
      text: 'Oi, Rose!',
      sender: 'bot'
    },
    {
      text: 'O que você quer saber?',
      sender: 'bot'
    }
  ]
}

const getters = {
  [types.MESSAGES]: (state) => state.messages
}

const mutations = {
  [types.MESSAGES]: (state, payload) => {
    state.messages = [ ...state.messages, payload ]
  }
}

const actions = {
  [types.MESSAGES]: async ({ commit, dispatch }) => {
    setTimeout(() => dispatch(types.MESSAGES), 500)
  },
  [types.MESSAGES_SEND]: async ({ commit }, payload) => {
    commit(types.MESSAGES, {
      text: payload,
      sender: 'user'
    })

    const { data: text } = await axios.get('chatbot/' + payload)

    commit(types.MESSAGES, {
      text,
      sender: 'bot'
    })
  }
}

export default { state, getters, mutations, actions }
