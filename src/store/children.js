import * as types from './types'
import axios from 'axios'

const state = {
  child: null,
  children: []
}

const getters = {
  [types.CHILD]: (state) => state.child,
  [types.CHILDREN]: (state) => state.children
}

const mutations = {
  [types.CHILDREN]: (state, payload) => {
    state.children = payload
  },
  [types.CHILD]: (state, payload) => {
    state.child = payload
  }
}

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))

const actions = {
  [types.CHILD_CHOOSE]: async ({ commit }, payload) => {
    const { data: child } = await axios.get(`/child/balance/${payload.id}`)
    commit(types.CHILD, child)
  },
  [types.CHILDREN]: async ({ commit, getters }) => {
    const user = getters[types.USER]
    const { data: children } = await axios.get(`/child/${user.id}`)
    commit(types.CHILDREN, children)
  }
}

export default { state, getters, mutations, actions }
