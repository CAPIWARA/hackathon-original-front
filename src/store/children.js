import * as types from './types'
import axios from 'axios'

const state = {
  child: null,
  children: [
    {
      id: 2,
      name: 'Gustavo Silva',
      avatar: 'http://bit.ly/2i9RKNr',
      account: '0198737'
    },
    {
      id: 8,
      name: 'Míriam Silva',
      avatar: 'http://bit.ly/2BEBufX',
      account: '0198742'
    }
  ]
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
  [types.CHILD_CHOOSE]: ({ commit }, payload) => commit(types.CHILD, payload),
  [types.CHILDREN]: async ({ commit }) => {
    // const { data: children } = await axios.get('/child/')
    
    await sleep(1000)
    const children = [
      {
        id: 2,
        name: 'Gustavo Silva',
        avatar: 'http://bit.ly/2i9RKNr',
        account: '0198737'
      },
      {
        id: 8,
        name: 'Míriam Silva',
        avatar: 'http://bit.ly/2BEBufX',
        account: '0198742'
      }
    ]

    commit(types.CHILDREN, children)
  }
}

export default { state, getters, mutations, actions }
