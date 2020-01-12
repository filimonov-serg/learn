import Vue from 'vue'
import Vuex from 'vuex'

/// Import modules here
import User from './modules/user.m'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user: User
        ///...
    },
    strict: true //!!!!!
})