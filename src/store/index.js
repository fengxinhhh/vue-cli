// VueX 创建了一个全局唯一的仓库，用来存放全局的数据
import { createStore } from 'vuex';

export default createStore({
  state: {
    name: "John",
  },
  getters: {
  },
  mutations: {
    changeName(state, value) {
      state.name = value
    },
  },
  actions: {
  },
  modules: {
  }
})
