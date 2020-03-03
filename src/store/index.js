import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import employee_store from './employee_store'

export default new Vuex.Store({
    modules: {
        employee_store
    }
})