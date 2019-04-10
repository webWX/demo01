import * as types from './types';

const mutations = {
  [types.ADD](state, payload) {
    console.log(payload + ' payload');
  },
  [types.TOKEN_CHECK](state, payload) {
    state.isToken = payload;
  },
  [types.USER_INFO](state, payload) {
    console.log(payload);
    state.userInfo = payload;
  }
};

export default mutations;
