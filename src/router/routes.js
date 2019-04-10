import routesProduct from './routes_product';

// const Home = resolve => require(['@/views/Home/Index'], resolve); // 首页
const Home = () => import(/* webpackChunkName: "switchTab" */ '@/views/Home.vue');

export default [
  ...routesProduct,
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      title: '首页',
      is_check_token: false
    }
  },
  {
    path: '/',
    redirect: to => {
      return 'home';
    }
  },
  {
    path: '*',
    redirect: '/'
  }
];
