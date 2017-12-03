import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './tasks'
import children from './children'
import wishs from './wishs'
import user from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: { tasks, children, wishs, user }
})

export default store
