import * as types from './mutation-types'
import { MutationTree } from 'vuex'
import { State } from '@/constants/variableType'

const mutations: MutationTree<State> = {
  [types.LIST](state: any, list: any[]) {
    state.list = list
  }
}

export default mutations
