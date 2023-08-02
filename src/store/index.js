import { createStore } from 'vuex';

const store = createStore({
  state: {
    message: '', // 初期値は空
  },
  mutations: {
    setMessage(state, message) {
      state.message = message;
    },
  },
  actions: {
    setMessage({ commit }, message) {
      commit('setMessage', message);
    },
  },
});

export default store;
