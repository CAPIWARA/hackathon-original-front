import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './tasks'
import children from './children'
import wishs from './wishs'
import user from './user'
import messages from './messages'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: { tasks, children, wishs, user, messages }
})

export default store
