// store/index.js

import { createStore } from 'vuex';

const store = createStore({
  state: {
    session: {
      password: '',
    },
  },
  mutations: {
    setPassword(state, password) {
      state.session.password = password;
    },
  },
  actions: {
    generatePassword({ commit }) {
      // 3文字のランダムなパスワードを生成
      const characters = '0123456789';
      let password = '';
      for (let i = 0; i < 3; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
      }

      // 生成したパスワードをセッションに保存
      commit('setPassword', password);
    },
  },
});

export default store;
