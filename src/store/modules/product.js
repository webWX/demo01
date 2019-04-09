import { standardDetail } from '@/axios/api';

const getters = {};

const state = {};

const mutations = {};

const actions = {
  getStandardDetail({ commit }, payload) {
    console.log(payload);
    standardDetail(payload).then(res => {
      console.log(res);
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
