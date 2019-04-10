import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue');
const Waiting = () => import(/* webpackChunkName: "bank" */ '@/views/bank/Waiting.vue');
const AccountResult = () => import(/* webpackChunkName: "bank" */ '@/views/bank/AccountResult.vue');

const InvestResult = () => import(/* webpackChunkName: "bank" */ '@/components/InvestResult/InvestResult.vue');

const StandardDetail = () => import(/* webpackChunkName: "product" */ '@/views/standard/StandardDetail.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页',
        is_check_token: false
      }
    },
    {
      path: '/waiting',
      name: 'waiting',
      component: Waiting,
      meta: {
        title: '等待页面',
        is_check_token: true
      }
    },
    {
      path: '/account_result',
      name: 'account_result',
      component: AccountResult,
      meta: {
        title: '开户',
        is_check_token: true
      }
    },
    {
      path: '/invest_result',
      name: 'invest_result',
      component: InvestResult,
      meta: {
        title: '投资结果',
        is_check_token: true
      }
    },
    {
      path: '/standard/detail/:id',
      name: 'standard_detail',
      component: StandardDetail,
      meta: {
        title: '散标详情',
        is_check_token: false
      }
    }
  ]
});
