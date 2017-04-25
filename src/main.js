import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
 
import store from './store'

import App from './App'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {
    path: '/',
    component: Home
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/time-entries',
    component: TimeEntries,
    children: [
      {
        name:'log-time',
        path: 'log-time/:id?',
        component: LogTime
      }
    ]
  }
]

const router = new VueRouter({routes})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
