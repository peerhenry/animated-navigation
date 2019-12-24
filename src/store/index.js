import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const siteMap = {
  home: {},
  alpha: {},
  beta: {
    subroutes: {
      two: {
        subroutes: {
          bee: {},
        },
      },
    },
  },
}

export default new Vuex.Store({
  state: {
    siteMap,
    path: '/',
  },
  mutations: {
    setPath: (state, payload) => (state.path = payload),
  },
  actions: {},
  getters: {
    getSubroutes: () => {
      // const parts = state.path.split('/')
      return []
    },
    getTabs: () => {
      return []
    },
  },
  modules: {},
})
