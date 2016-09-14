import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import Finding from './components/Finding'
import Follow from './components/Follow'
import Me from './components/Me'
import Login from './components/Login'
import Charging from './components/Charging'
require('normalize.css')

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
  }
})

router.start(App, '#app div')
