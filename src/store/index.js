import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    drawer: null,
    clients: [],
    client: {}
  },
  mutations: {
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    setClients(state, clients) {
      state.clients = clients
    }
   
  },
  actions: {
    fecthClients({commit}) {
      axios.get("http://localhost:3000/api/clients")
        .then(response => commit('setClients', response.data))
        .catch(err => console.log(err.response))
    }
   
  },
  modules: {
  }
})
