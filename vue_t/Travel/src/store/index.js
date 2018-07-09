import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions: {
  //    传输
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  },
  mutations
  // getters: {
  //   // getters有点类似于计算属性，使用方法看Header.vue
  //   doubleCity (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
})
