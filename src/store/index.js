import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    totalTime: Number(localStorage.getItem('totalTime')) || 0,
    plans: JSON.parse(localStorage.getItem('plans')) || []
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})