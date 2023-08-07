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
      const characters = '123456789';
      const passwordLength = 3;
      let password = '';
      
      // ランダムに選ばれた数字を保存するためのリスト
      const selectedCharacters = [];
      
      for (let i = 0; i < passwordLength; i++) {
        // 選ばれていない数字のリストを作成
        const remainingCharacters = characters
          .split('')
          .filter(char => !selectedCharacters.includes(char));
          
        if (remainingCharacters.length === 0) {
          // 選択肢がない場合はループを終了
          break;
        }
        
        // 残りの数字からランダムに1つ選ぶ
        const randomIndex = Math.floor(Math.random() * remainingCharacters.length);
        const selectedChar = remainingCharacters[randomIndex];
        
        // 選ばれた数字をリストに追加
        selectedCharacters.push(selectedChar);
        password += selectedChar;
      }
      
      // 生成したパスワードをセッションに保存
      commit('setPassword', password);
    },
  },
});

export default store;
