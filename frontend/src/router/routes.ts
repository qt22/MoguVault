import { RouteConfig } from 'vue-router';

import Register from '../views/register.vue';

const routes: RouteConfig[] = [
  {
    path: '/register',
    name: 'register',
    component: Register
  }
  // to do: add page not found
];

export default routes;
