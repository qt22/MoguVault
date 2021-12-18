import { RouteConfig } from 'vue-router';

import Register from '@/views/register.vue';
import Login from '@/views/login.vue';
import Home from '@/views/home.vue';

const routes: RouteConfig[] = [
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
  // to do: add page not found
];

export default routes;
