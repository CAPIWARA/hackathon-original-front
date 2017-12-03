import * as types from './types'
import axios from 'axios'

const state = {
  tasks: []
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
  },
  [types.TASKS_COMPLETE]: async ({ dispatch }, payload) => {
    const status = payload.status === 'completed' ? 'pending' : 'completed'
    const task = { ...payload, status }
    await axios.put(`/task/${task.id}`, task)
    await dispatch(types.TASKS)
  }
}

export default { state, getters, mutations, actions }
