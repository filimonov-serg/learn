import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            roles: [],
            isAuth: false
        }
    },
    actions: {
        getUser({commit}) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('SET_USER', {
                        roles: ['admin', 'user'],
                        isAuth: true
                    });
                    console.log("%c%s", "color: blue", "User data obtained");
                    resolve();
                }, 2000);
            })
        }
    },
    mutations: {
        SET_USER(state, data) {
            state.user = data;
        }
    },
    strict: true
})