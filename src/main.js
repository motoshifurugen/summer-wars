import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Vuex Storeをインポート
import router from './router';

const app = createApp(App);
app.use(store); // Vuex Storeを登録
app.use(router);
app.mount('#app');
