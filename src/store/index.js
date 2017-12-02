import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './tasks'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: { tasks }
})

export default store
