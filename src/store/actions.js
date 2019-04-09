import * as types from './types';
import { tokenCheck, appIndex } from '@/axios/api';

const actions = {
  /**
   * 检测token是否有效
   */
  tokenCheck({ commit }) {
    return new Promise((resolve, reject) => {
      tokenCheck().then(res => {
        if (res.code === 0) {
          commit(types.TOKEN_CHECK, true);
        }
      });
    });
  },
  vilidateToken({ commit }, payload) {
  },
  increment2({ commit }, payload) {
    console.log(payload);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(types.ADD, {
          num: payload.num
        });
        resolve(++payload.num);
      }, 3000);
    });
  },
  increment3({ commit, dispatch }) {
    return dispatch('increment2', {
      num: 666
    }).then(res => {
      console.log('love is ' + res);
    });
  },
  appIndex({ commit }) {
    appIndex().then(res => {
      console.log(res);
    });
  }
};

export default actions;
