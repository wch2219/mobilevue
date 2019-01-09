import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [

        {
          path: '/',
          name: 'home',
          component: Home
        }
      ]
    }
  ]
})
