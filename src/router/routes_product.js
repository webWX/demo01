const StandardDetail = () => import(/* webpackChunkName: "product" */ '@/views/standard/StandardDetail.vue');

export default [
  {
    path: '/standard/detail/:id',
    name: 'standard_detail',
    component: StandardDetail,
    meta: {
      title: '散标详情',
      is_check_token: false
    }
  }
];
