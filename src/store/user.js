import * as types from './types'

const state = {
  user: {
    id: 1
  }
}

const getters = {
  [types.USER]: (state) => state.user
}

export default { state, getters }
