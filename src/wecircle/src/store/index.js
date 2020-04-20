import Vue from 'vue'
import Vuex from 'vuex'
import { getStorageItem, setStorageItem } from '../utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: getStorageItem('currentUser') ? JSON.parse(getStorageItem('currentUser')) : {}
  },
  mutations: {
    SET_CURRENT_USER (state, user) {
      state.currentUser = user
      setStorageItem('currentUser', JSON.stringify(user))
    }
  },
  actions: {
    setCurrentUser (context, user) {
      context.commit('SET_CURRENT_USER', user)
    }
  },
  modules: {
  }
})
