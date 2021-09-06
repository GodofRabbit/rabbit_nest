/*
 * @Description: vuex配置
 * @Author: renlu
 * @Date: 2021-07-10 19:14:43
 * @LastEditTime: 2021-07-10 19:59:10
 * @LastEditors: renlu
 */
import { createStore } from 'vuex'

const defaultState = {
  count: 0
}

// Create a new store instance.
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})
