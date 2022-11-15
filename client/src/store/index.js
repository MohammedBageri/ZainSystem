import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    drawer: true,
    token: '',
    isLoading: false,
    user:null
  },
  getters: {
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.user = localStorage.getItem('user')
        state.isAuthenticated = true
    } else {
        state.token = ''
        state.isAuthenticated = false
    } 
    },
    setIsLoading(state, status){
      state.isLoading = status
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
  },  
  removeToken(state) {
    console.log(state.token)
      state.token = ''
      state.isAuthenticated = false
  },
  },
  actions: {
  },
  modules: {
  }
})
