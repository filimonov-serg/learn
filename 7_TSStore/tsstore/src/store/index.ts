import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import {RootState} from './index.d'
import {EducationMethods} from './education_methods'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  strict: true,
  state: {

  },
  modules: {
    EducationMethods
  }
}

export default new Vuex.Store<RootState>(store);