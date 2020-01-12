/**
 * User state object
 * @name user
 * @type {object}
 * @property {string} id User ID
 * @property {string} personal.fullname User fullname
 * @property {string} personal.age User age
 * @property {array} roles User roles
 */
const state = {
    user: {
        id: '',
        personal: {
            fullname: '',
            age: 0
        },
        roles: []
    }
}

const getters = {
    fullname(state) {
        return state.user.personal.fullname
    }
}

const actions = {
    /**
     * Fetch user data from API
     * @param {*} action_param Some param
     */
    getUserPersonal({commit, state}, action_param) {
        return new Promise((resolve, reject) => {
            axios
                .get(
                    '/path_to_api',
                    {
                        params: {
                            class: 'some_class',
                            action: 'some_action',
                            payload: 'json string'
                        }
                    }
                )
                .then(response => {
                    // commit mutation
                    commit('SET_PERSONAL_DATA', response.data)
                    resolve();
                })
                .catch(error => {
                    // Reset data
                    commit('RESET_PERSONAL_DATA')
                    reject();
                })
        })
    }
}

//Always synchronious
const mutations = {
    SET_PERSONAL_DATA(state, data) {
        state.user.personal = data
    },
    RESET_PERSONAL_DATA(state) {
        state.user.personal = {
            fullname: '',
            age: 0
        }
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}