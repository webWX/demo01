import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 0,
    platform: 'ios'
  },
  mutations: {
    add(state) {
      state.num++;
      console.log(111);
    }
  },
  actions: {
  }
});
