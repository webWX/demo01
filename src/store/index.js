import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

import product from './modules/product';

Vue.use(Vuex);

// 生产环境不开启严格模式
const debug = process.env.NODE_ENV !== 'production';

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
