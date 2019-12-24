import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/alpha',
    name: 'alpha',
    component: () =>
      import(/* webpackChunkName: "alpha" */ './views/Alpha.vue'),
  },
  {
    path: '/beta',
    name: 'beta',
    component: () =>
      import(/* webpackChunkName: "betaoneaa" */ './views/BetaOneAa.vue'),
  },
  {
    path: '/beta/two',
    name: 'betatwo',
    component: () =>
      import(/* webpackChunkName: "betatwoaa" */ './views/BetaTwoAa.vue'),
  },
  {
    path: '/beta/two/bee',
    name: 'betatwobee',
    component: () =>
      import(/* webpackChunkName: "betatwobee" */ './views/BetaTwoBee.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
