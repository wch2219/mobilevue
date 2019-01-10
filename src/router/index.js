import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Home from '../components/Home'
import Login from '../components/Login'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [

        {
          path: '/main',
          name: 'home',
          component: Home
        }
      ]
    },

  ]
})
