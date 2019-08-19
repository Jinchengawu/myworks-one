import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '*',
    redirect: {
      path: '/',
      component: Home,
    },
  },
  {
    path: '/',
    name: 'home',
    // component: Home,
    component: () => import('./views/Home/Home.vue'),
  },
  {
    path: '/',
    name: 'home',
    // component: Home,
    component: () => import('./views/Home/Home.vue'),
  },
  ],
})
