import { createRouter, createMemoryHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FavouritesView from '../views/FavouritesView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/favourites',
    name: 'favourites',
    component: FavouritesView,
    meta: {
      keepAlive: true,
    },
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
