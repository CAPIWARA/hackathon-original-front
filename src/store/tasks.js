import * as types from './types'
import axios from 'axios'

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
  [types.TASKS]: async ({ commit }) => {
    const { data: tasks } = await axios.get('/task')
    commit(types.TASKS, tasks)
  },
  [types.TASKS_INCLUDE]: async ({ dispatch }, payload) => {
    await axios.post('/task', payload)
    await dispatch(types.TASKS)
  },
  [types.TASKS_EXCLUDE]: async ({ dispatch }, payload) => {
    const task = { ...payload, status: 'deleted' }
    await axios.put(`/task/${task.id}`, task)
    await dispatch(types.TASKS)
  }
}

export default { state, getters, mutations, actions }
