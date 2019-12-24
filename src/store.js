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

function getPathIndex(path) {
  if (path === '/') return 1
  if (path === '/alpha') return 2
  if (path === '/beta') return 3
  return 0
}

export default new Vuex.Store({
  state: {
    siteMap,
    path: '/',
    pageTransition: 'fade',
  },
  mutations: {
    setPath: (state, payload) => {
      const indexFrom = getPathIndex(state.path)
      const indexTo = getPathIndex(payload)
      const delta = indexTo - indexFrom
      state.pageTransition = 'fade'
      if (delta > 0) state.pageTransition = 'rtl'
      if (delta < 0) state.pageTransition = 'ltr'
      state.path = payload
    },
  },
  actions: {},
  getters: {
    hasSubroutes: state => {
      return state.path === '/beta'
    },
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
