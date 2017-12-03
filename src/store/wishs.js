import * as types from './types'
import axios from 'axios'

const state = {
  wishs: []
}

const getters = {
  [types.WISHS]: (state) => state.wishs
}

const mutations = {
  [types.WISHS]: (state, payload) => {
    state.wishs = payload
  }
}

const actions = {
  [types.WISHS]: async ({ commit, getters }) => {
    const child = getters[types.CHILD]
    const { data: wishs } = await axios.get(`/wish/${child.id}`)
    commit(types.WISHS, wishs)
  }
}

export default { state, getters, mutations, actions }
