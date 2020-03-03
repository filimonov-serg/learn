import { Module, ActionTree, MutationTree } from 'vuex';
import { RootState } from './index.d';
import { EMState, EducationMethod, LoadOptions } from './education_methods.d';
import axios from 'axios';

const namespaced = true;

const state: EMState = {
    items: [],
    isLoading: false
}

const actions: ActionTree<EMState, RootState> = 
{
    /**
     * Get items from backend
     * @param param0 Context commit
     * @param payload Payload options
     */
    getItems({commit}, payload: LoadOptions) {
        return axios.get<Array<EducationMethod>>('/data/'+payload.db, {
            params: {
                payload: JSON.stringify(payload)
            }
        })
            .then(res => {
                commit('SET_ITEMS', res.data)
                return res.data;
            })
            .catch(err => {
                commit('FLUSH_ITEMS')
                throw err;
            });
    }
}

const mutations: MutationTree<EMState> =
{
    SET_ITEMS(state, payload: Array<EducationMethod>) {
        state.items = payload;
    },
    FLUSH_ITEMS(state) {
        state.items = [];
    }
}

export const EducationMethods: Module<EMState, RootState> =
{
    namespaced,
    state,
    actions,
    mutations
}