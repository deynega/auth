import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({ key: 'auth-app' })],
  state: {
    user: {
      username: '',
      firstName: '',
      lastName: ''
    }
  },
  mutations: {
    setUserData(state, userData) {
      state.user = { ...state.user, ...userData };
    },
    signOut(state) {
      state.user = { firstName: '', lastName: '', username: '' };
    }
  }
})
