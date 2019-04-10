import { standardDetail } from '@/axios/api';
import { USER_INFO } from '@/store/types';

const getters = {};

const state = {
  standardDetailLoan: null
};

const mutations = {
  standardDetail(state, payload) {
    state.standardDetailLoan = payload.loan.detail;
  }
};

const actions = {
  getStandardDetail({ commit, rootState }, payload) {
    standardDetail(payload).then(res => {
      console.log(res);
      commit('standardDetail', res);
      if (res.user) {
        commit(USER_INFO, res.user, { root: true });
      }
    });
  }
};

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions
};
