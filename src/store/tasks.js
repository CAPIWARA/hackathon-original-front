import * as types from './types'

const state = {
  tasks: [
    {
      id: 12,
      title: 'Arrumar o quarto',
      description: 'Dobrar lençois, varrer o chão e organizar seus brinquedos.',
      reward: 3.3,
      status: 'pending'
    }
  ]
}

const getters = {
  [types.TASKS]: (state) => state.tasks
}

const mutations = {
  [types.TASKS]: (state, payload) => {
    state.tasks = payload
  }
}

const actions = {
  [types.TASKS_INCLUDE]: async ({ commit, getters }, payload) => {
    const tasks = [ ...getters[types.TASKS], payload ]
    commit(types.TASKS, tasks)
  },
  [types.TASKS_EXCLUDE]: async ({ commit, getters }, payload) => {
    const tasks = getters[types.TASKS].filter((task) => task.id !== payload)
    commit(types.TASKS, tasks)
  }
}

export default { state, getters, mutations, actions }
