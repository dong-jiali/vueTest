import Vuex from 'vuex'
import Vue from 'vue'

import status from './modules/status'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    status
  }
})

Vue.use(store)

export default store
