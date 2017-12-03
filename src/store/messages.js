import axios from 'axios'
import * as types from './types'

const state = {
  messages: []
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
  [types.MESSAGES_SEND]: ({ commit }, payload) => {
    const message = {
      text: payload,
      sender: 'user'
    }

    commit(types.MESSAGES, message)
  }
}

export default { state, getters, mutations, actions }
