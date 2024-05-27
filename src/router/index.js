import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/components/Pages/MainPage';
import WishlistPage from '@/components/Pages/WishlistPage';
import ProductPage from '@/components/Pages/ProductPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '/product',
      name: 'ProductPage',
      component: ProductPage,
    },
    {
      path: '/wishlist',
      name: 'WishlistPage',
      component: WishlistPage,
    },
  ],
});
