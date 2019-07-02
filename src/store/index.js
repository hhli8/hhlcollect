import Vue from 'vue'
import Vuex from 'vuex'
import IT from './it'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
    excludeArr: []
  },
  modules: {
    IT: IT
  },
  getters: {
    //
  },
  mutations: {
    addExcludeArr (state, val) {
      state.excludeArr.join(',').indexOf(val) === -1 && state.excludeArr.push(val)
    },
    removeExcludeArr (state, val) {
      let arr = state.excludeArr
      let index = -1
      for (var i = 0, l = arr.length; i < l; i++) {
        if (arr[i] === val) {
          index = i
          break
        }
      }
      index > -1 && arr.splice(index, 1)
      state.excludeArr = arr
    }
  },
  actions: {
    //
  }
})
