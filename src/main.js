import Vue from 'vue'
import App from './App'
import Charge from './components/Charge'
import Finding from './components/Finding'
import Follow from './components/Follow'
import Me from './components/Me'
import Login from './components/Login'
require('normalize.css')

import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  'charge': {
    component: Charge
  },
  'finding': {
    component: Finding
  },
  'follow': {
    component: Follow
  },
  'me': {
    component: Me
  },
  'login': {
    component: Login
  }
})

router.start(App, '#app div')

/* eslint-disable no-new */
// new Vue({
//   router,
//   el: 'body'
// })
