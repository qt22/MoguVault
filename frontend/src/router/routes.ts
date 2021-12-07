import { RouteConfig } from 'vue-router';

import Home from '../views/Home.vue';

const routes: RouteConfig[] = [
  {
    path: '/home',
    name: 'home',
    component: Home
  }
  // to do: add page not found
];

export default routes;
