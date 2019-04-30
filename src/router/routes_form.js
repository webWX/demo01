const Register = () => import(/* webpackChunkName: "form" */ '@/views/form/Register.vue');

export default [
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      title: '注册',
      is_check_token: false
    }
  }
];
