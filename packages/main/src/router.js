import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    // {
    //   path: '/main',
    //   name: 'main',
    //   component: () => import(/* webpackChunkName: "main" */ './views/Main.vue'),
    //   children: [
    //     {
    //       path: '/main/child',
    //       name: 'child',
    //       component: () => import(/* webpackChunkName: "child" */ './views/Child.vue')
    //     }
    //   ]
    // },
    {
      path: '/main/*',
      component: () => import('./views/Main.vue')
    }
  ]
});
