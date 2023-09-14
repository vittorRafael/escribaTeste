import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: ''
  },
  getters: {
  },
  mutations: {
    alterarMsg(msg, text){
      msg = text
    }
  },
  actions: {
  },
  modules: {
  }
})
