import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.2.230:8080/'

Vue.filter('toCurrency', (value) => {
  return +value.toFixed(2)
})

new Vue({
  el: '#app',
  store,
  router,
  render: (λ) => λ(App)
})
