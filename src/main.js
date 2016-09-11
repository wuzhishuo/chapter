import Vue from 'vue'
import Home from './components/Home'
import App from './App'
require('normalize.css')

import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  'home': {
    component: Home
  }
})

router.start(App, '#app div')

/* eslint-disable no-new */
// new Vue({
//   router,
//   el: 'body'
// })
