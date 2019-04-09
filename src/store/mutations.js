import * as types from './types';

const mutations = {
  [types.ADD](state, payload) {
    console.log(payload + ' payload');
  },
  [types.TOKEN_CHECK](state, payload) {
    state.isToken = payload;
  }
};

export default mutations;
