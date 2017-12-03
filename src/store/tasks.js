import * as types from './types'
import axios from 'axios'

const state = {
  tasks: []
}

const getters = {
  [types.TASKS]: (state) => {
    return [ ...state.tasks ].sort(
      ({ title: a = '' }, { title: b = '' }) => {
        return a.localeCompare(b)
      }
    )
  }
}

const mutations = {
  [types.TASKS]: (state, payload) => {
    state.tasks = payload
  },
  [types.TASKS_UPDATE]: (state, payload) => {
    const tasks = [ ...state.tasks ].filter((task) => task.id !== payload.id)
    state.tasks = [ ...tasks, payload ]
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
  [types.TASKS_EXCLUDE]: ({ commit }, payload) => {
    const status = payload.status === 'deleted' ? 'pending' : 'deleted'
    const task = { ...payload, status }
    commit(types.TASKS_UPDATE, task)
  },
  [types.TASKS_COMPLETE]: ({ commit }, payload) => {
    const status = payload.status === 'completed' ? 'pending' : 'completed'
    const task = { ...payload, status }
    commit(types.TASKS_UPDATE, task)
  },
  [types.TASKS_UPDATE]: async ({ dispatch, getters }, payload) => {
    const tasks = [ ...getters[types.TASKS] ]
    await Promise.all(tasks.map((task) => axios.put(`/task/${task.id}`, task)))
    await dispatch(types.TASKS)
  }
}

export default { state, getters, mutations, actions }
