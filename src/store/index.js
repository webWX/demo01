import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';

import product from './modules/product';

import * as Cookies from 'js-cookie';

Vue.use(Vuex);

// 生产环境不开启严格模式
const debug = process.env.NODE_ENV !== 'production';

let platform = Cookies.get('platform');

const getters = {};

const state = {
  platform,
  isApp: !!platform,
  token: Cookies.get('token'),
  isToken: false,
  userInfo: null
};

const store = new Vuex.Store({
  modules: {
    product
  },
  state,
  getters,
  mutations,
  actions,
  strict: debug
});

if (module.hot) {
  // 使 action 和 mutation 成为可热重载模块
  module.hot.accept([
    './mutations',
    './actions',
    './modules/product'
  ], () => {
    // 获取更新后的模块
    // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
    // 加载新模块
    store.hotUpdate({
      mutations: require('./mutations').default,
      actions: require('./actions').default,
      modules: {
        product: require('./modules/product').default
      }
    });
  });
}

export default store;
