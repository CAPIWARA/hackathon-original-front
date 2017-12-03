import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './tasks'
import children from './children'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: { tasks, children }
})

export default store
