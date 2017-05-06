// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'
import localforage from 'localforage'

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

localforage.config({
    driver: localforage.LOCALSTORAGE,
    storeName: 'mystuff'
})

window.axios = Axios.create({
	baseURL: 'http://api.dev/api/v1/'
})

store.dispatch('setToken').then(() => {
    store.dispatch('getUser').catch(() => {
        store.dispatch('clearAuth')
        router.replace({ name: 'login' })
    })
}).catch(() => {
    store.dispatch('clearAuth')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
