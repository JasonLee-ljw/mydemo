import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Lists: []
  },
  mutations: {
    addItem (state, value) {
      state.Lists.push(value)
    }
  },
  actions: {

  }
})
