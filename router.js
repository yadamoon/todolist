/**
 * ⛔️ This file defines your pages routes.
 *   How to add a new page:
 *   1. Create a new .vue file inside the pages folder.
 *   2. Import it as you can see below.
 *   3. Add a new object item to the routes array defining the path, name and component.
 */

import { createRouter, createWebHistory } from 'vue-router';

// 1. Define your routes.
const routes = [
  // { path: '/', name: 'home', component: Home },
  // { path: '/login', name: 'login', component: Login }
];

// 2. Create the 'HTML5 mode'.
const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
