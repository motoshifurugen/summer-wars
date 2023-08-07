import { createRouter, createWebHistory } from 'vue-router';
import SubmittedForm from '../views/SubmittedForm.vue'; // Submittedコンポーネントが存在する場所に適切なパスを指定してください
import WorldClock from '../components/WorldClock.vue';
import DoCommand from '../views/DoCommand.vue';

const routes = [
  {
    path: '/',
    name: 'WorldClock',
    component: WorldClock,
  },
  {
    path: '/masaka',
    name: 'SubmittedForm',
    component: SubmittedForm,
  },
  {
    path: '/do',
    name: 'DoCommand',
    component: DoCommand,
    props: (route) => ({ message: route.query.message || '' }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
