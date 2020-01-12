const state = {
    list: []
}

const actions = {
    getList({commit, state}) {
        commit('LOAD_LIST', [1,2,3,4,5])
    }
}

//Always synchronious
const mutations = {
    LOAD_LIST(state, data) {
        state.list = data
    }
}


export default {
    namespaced: true,
    state,
    actions,
    mutations
}