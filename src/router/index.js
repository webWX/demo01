import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  'linkActiveClass': 'is-active'
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
    next();
  }

  if (to.matched.some(record => record.meta.is_check_token)) {
    if (store.state.token && store.state.isToken) {
      next();
    } else {
      // 防止无限循环
      if (to.name === 'login') {
        next();
        return;
      }
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next(); // 若点击的是不需要验证的页面,则进行正常的路由跳转
  }
});

export default router;
