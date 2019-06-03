import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/subreddits',
      name: 'subreddits',
      component: () => import('./views/SubReddits.vue'),
    },
    {
      path: '/r/:subreddit',
      name: 'subreddit',
      component: () => import('./views/SubReddit.vue'),
    },
  ],
});
