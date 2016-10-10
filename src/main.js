import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import Finding from './components/Finding'
import Follow from './components/Follow'
import Me from './components/Me'
import Login from './components/Login'
import Charging from './components/Charging'
import StationDetail from './components/StationDetail'
import Orders from './components/Orders.vue'
require('normalize.css')
require('../src/assets/javascripts/filters')

import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/': {
    component: Home
  },
  'home': {
    component: Home
  },
  'finding': {
    component: Finding
  },
  'station/:stationId': {
    component: StationDetail
  },
  'follow': {
    component: Follow
  },
  'me': {
    component: Me
  },
  'login': {
    component: Login
  },
  'charging': {
    component: Charging
  },
  'orders': {
    component: Orders
  }
})

router.start(App, '#app div')
