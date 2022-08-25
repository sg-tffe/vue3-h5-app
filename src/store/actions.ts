import * as types from './mutation-types'
import { ActionTree, Action } from 'vuex'
import { State } from '@/constants/variableType'

import { getList } from '@/api'

const getListData: Action<object, object> = ({ commit }, params) => {
  return new Promise((resolve, reject) => {
    getList(params, (res: any) => {
      if (+res.status === 0) {
        commit(types.LIST, res.data)
        resolve(res.data)
      } else {
        reject(res.msg)
      }
    })
  })
}
const actions: ActionTree<State, State> = {
  getListData
}

export default actions
